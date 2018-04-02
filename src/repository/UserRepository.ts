import { User } from "../entities/User"
import { getManager } from "typeorm";

export class UserRepository {
    getAllUsers() {
        return getManager().getRepository(User).find()
    }
}