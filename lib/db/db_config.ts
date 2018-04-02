import "reflect-metadata"
import { ConnectionOptions } from "typeorm";
import { User } from "../entities/User"

export let dbOptions: ConnectionOptions = {
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "root",
    database: "node_ts",
    entities: [
        User
    ],
    synchronize: true
}