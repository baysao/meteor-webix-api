Package.describe({
    name: "baysao:meteor-webix-api",
    version: "0.1.0-1",
    summary: "Meteor Webix Rest API",
    git: "https://github.com/baysao/meteor-webix-api.git",
    documentation: "README.md"
});

Npm.depends({
    "body-parser": "1.14.1",
    "webix-data": "https://github.com/baysao/nodejs-data/archive/f394aaaa237a3c82f026ff2c32528fe9fb65f5a2.tar.gz",
    "webix-mongo": "https://github.com/baysao/nodejs-mongo/archive/ab0991d03b20d0ea541ee73beab1fe5bf61219f8.tar.gz",
    "webix-request": "https://github.com/baysao/nodejs-request/archive/3605adf68bb65c2261f645a933837a0f07606482.tar.gz"
});

Package.onUse(function (api) {
    api.versionsFrom("METEOR@1.1.0.2");
    api.use([
        "simple:json-routes@1.0.4",
        "baysao:rest-bearer-token-parser@0.0.1",
    ])
    api.addFiles([
        "webix.js"
    ], "server");
    api.export("webixMongo", "server");
});

