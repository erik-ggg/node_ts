"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const User_1 = require("../entities/User");
exports.dbOptions = {
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "root",
    database: "node_ts",
    entities: [
        User_1.User
    ],
    synchronize: true
};
