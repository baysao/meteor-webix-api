Package.describe({
    name: "baysao:meteor-webix-api",
    version: "0.1.0-7",
    summary: "Meteor Webix Rest API",
    git: "https://github.com/baysao/meteor-webix-api.git",
    documentation: "README.md"
});

Npm.depends({
    "body-parser": "1.14.1",
    "mongoskin":"2.0.3",
    "webix-data": "https://github.com/baysao/nodejs-data/archive/0c228713f59806ac7b8ea7c321d6cd3d8bc5887e.tar.gz",
    "webix-mongo": "https://github.com/baysao/nodejs-mongo/archive/678d46e89645e53c863a2c4946a49c3776aa524e.tar.gz",
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
    api.export("webixConnector", "server");
});

