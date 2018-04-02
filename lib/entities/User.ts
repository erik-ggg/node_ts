import { Entity, PrimaryGeneratedColumn, Column, Index } from "typeorm";

@Index(["email", "password"])
@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number

    @Index({unique: true})
    @Column({length: 100})
    email: string

    @Column({length: 100})
    password: string

    constructor(email: string, password: string) {
        this.email = email
        this.password = password
    }
}