import { Entity, PrimaryGeneratedColumn, Column, Index } from "typeorm"
import * as bcrypt from "bcrypt"

const saltRounds: number = 10

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number

    @Index({ unique: true })
    @Column({ length: 100 })
    private email: string

    @Index()
    @Column({ length: 100 })
    private password: string

    constructor(email: string, password: string) {
        this.email = email
        this.setPassword(password)
    }

    public getEmail(): string {
        return this.email
    }

    public getPassword(): string {
        return this.password
    }

    public getId(): string {
        return this.password
    }

    public setPassword(password: string) {
        this.password = bcrypt.hashSync(password, saltRounds)
    }
}