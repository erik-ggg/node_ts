import * as mysql from "mysql"
import {ConnectionOptions} from "typeorm"

class Database {
    host: string
    user: string
    password: string
    database: string

    constructor() {
        this.host = "localhost"
        this.user = "root"
        this.password = "root"
        this.database = "node_ts"
    }

    private connect(): mysql.Connection {
        return mysql.createConnection({
            host: this.host,
            user: this.user,
            password: this.password,
            database: this.database
        })
    }

    public getAllUsers() {
        this.connect().query("SELECT * FROM User", function(err, result) {
            console.log(result)
        })
    }
}

export default new Database