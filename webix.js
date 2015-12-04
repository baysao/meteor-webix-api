var checkAuthen = function(req, res, next){
    var tokenArr;
    var token;
    var userId;

    if (req.authToken)
        tokenArr = req.authToken.split('.');

    if (tokenArr.length == 2) {
        userId = tokenArr[0];
        token = tokenArr[1];
    }
    var user = Meteor.users.findOne({
        '_id':userId,
        'services.resume.loginTokens.hashedToken': token
    });
    if (!user) {
        res.setHeader("Content-type", "application/json");
        res.end(JSON.stringify({
            status: 'error',
            message: 'No permission'
        }));
        return;
    }
    next(req, res);
}
var isValid = function(handler){
    return function(req, res){
        checkAuthen(req, res, handler);
    }
}

var bodyParser = Npm.require('body-parser');

JsonRoutes.middleWare.use(bodyParser.json());
JsonRoutes.middleWare.use(bodyParser.urlencoded( { extended: false } ));
JsonRoutes.Middleware.use(JsonRoutes.Middleware.parseBearerToken);

var webixProvider = Npm.require("webix-data");
webixMongo = webixProvider(Npm.require("webix-mongo"), Npm.require("webix-request"));
webixMongo.provider = webixProvider;
webixMongo.addRoute = function(api_path, handler){
    JsonRoutes.add("get", api_path, isValid(handler));
    JsonRoutes.add("post", api_path, isValid(handler));
    JsonRoutes.add("put", api_path, isValid(handler));
    JsonRoutes.add("delete", api_path, isValid(handler));
}
Meteor.methods({
    "currentAccessToken": function(){
        var userId = this.userId;
        if(!userId)
            return;
        var user = Meteor.users.findOne(this.userId, {fields: {'services.resume.loginTokens': 1}});
        return user && user.services && user.services.resume
            && user.services.resume.loginTokens && !_.isEmpty(user.services.resume.loginTokens)
            && userId + '.' + user.services.resume.loginTokens[0].hashedToken;
    }
})