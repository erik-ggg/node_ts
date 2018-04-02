import app from "./app";
import db from "./db/db"
import * as dbconfig from "./db/db_config"
import { createConnection, getManager, Connection, ConnectionManager } from "typeorm";
import { User } from "./entities/User"
import "reflect-metadata"
// import { UserRepository } from "repository/UserRepository";

const port = 4040;
app.listen(port, function () {
  console.log('Express server listening on port ' + port);
  // console.log(db.getAllUsers())
  ormcon()
});

function ormcon() {
  createConnection(dbconfig.dbOptions).then(async connection => {
    console.log("Connected to Database")
    // connection.getRepository(User).save( new User("prueba", "prueba"))
    connection.getRepository(User).find().then((result: any) => {
      result.forEach(user => {
        console.log("User with email: " + user.email)
      });
    })
  }).catch(error => console.log("TypeORM connection error: ", error))
  // let userRepo : UserRepository = new UserRepository()
  // userRepo.getAllUsers().then((result: any) => {
  //   console.log("Result: " + result)
  // })
}