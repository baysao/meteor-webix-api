Meteor Webix API 
================
This packages wrap those library from [webix official](https://github.com/webix-hub) 
- [webix-data](https://github.com/webix-hub/nodejs-data)
- [webix-mongo](https://github.com/webix-hub/nodejs-mongo)
- [webix-request](https://github.com/webix-hub/nodejs-request)

This package public variable  webixMongo 

### Using
#### Declare Database
 webixMongo.db("mongodb://localhost:27017/xemhai");
 where as xemhai is Database
#### Declare collections and api path
 webixMongo.addRoute('/api/flavors', webixMongo.crud("flavors"));
 where as flavors is collection
That it! 

