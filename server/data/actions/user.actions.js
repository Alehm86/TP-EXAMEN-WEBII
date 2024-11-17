import { connectToDatabase } from "../connection.js";
import User from "../schemas/user.schema.js";

export const createUser = async({name, lastname, username, email, pass})=>{
    try{
        await connectToDatabase()
        const res = await User.create({name, lastname, username, email, pass})
        return JSON.parse(JSON.stringify(res))

    }catch(error){
        console.log(error)
    }
}

export const findEmail = async(email)=>{

    try{
        await connectToDatabase()
        const res = await User.findOne({email})
        return JSON.parse(JSON.stringify(res))
    }catch(error){
        console.log(error)
    }
}