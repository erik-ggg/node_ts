"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mysql = require("mysql");
class Database {
    constructor() {
        this.host = "localhost";
        this.user = "root";
        this.password = "root";
        this.database = "node_ts";
    }
    connect() {
        return mysql.createConnection({
            host: this.host,
            user: this.user,
            password: this.password,
            database: this.database
        });
    }
    getAllUsers() {
        this.connect().query("SELECT * FROM User", function (err, result) {
            console.log(result);
        });
    }
}
exports.default = new Database;
//# sourceMappingURL=db.js.map