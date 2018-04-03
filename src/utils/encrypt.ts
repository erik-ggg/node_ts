import * as bcrypt from "bcrypt"

export async function encrypt(text: string, salt: number) : Promise<string> {
    return bcrypt.hash(text, salt).then(hash => hash).catch(err => err)
}