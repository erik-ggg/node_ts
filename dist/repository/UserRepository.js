"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = require("../entities/User");
const typeorm_1 = require("typeorm");
class UserRepository {
    getAllUsers() {
        return typeorm_1.getManager().getRepository(User_1.User).find();
    }
}
exports.UserRepository = UserRepository;
