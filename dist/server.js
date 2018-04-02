"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
const dbconfig = require("./db/db_config");
const typeorm_1 = require("typeorm");
const User_1 = require("./entities/User");
require("reflect-metadata");
// import { UserRepository } from "repository/UserRepository";
const port = 4040;
app_1.default.listen(port, function () {
    console.log('Express server listening on port ' + port);
    // console.log(db.getAllUsers())
    ormcon();
});
function ormcon() {
    typeorm_1.createConnection(dbconfig.dbOptions).then((connection) => __awaiter(this, void 0, void 0, function* () {
        console.log("Connected to Database");
        // connection.getRepository(User).save( new User("prueba", "prueba"))
        connection.getRepository(User_1.User).find().then((result) => {
            result.forEach(user => {
                console.log("User with email: " + user.email);
            });
        });
    })).catch(error => console.log("TypeORM connection error: ", error));
    // let userRepo : UserRepository = new UserRepository()
    // userRepo.getAllUsers().then((result: any) => {
    //   console.log("Result: " + result)
    // })
}
//# sourceMappingURL=server.js.map