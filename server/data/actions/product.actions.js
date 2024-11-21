import { connectToDatabase } from "../connection.js";
import Product from "../schemas/product.schema.js";

export const findAll = async()=>{
    try{
        await connectToDatabase()
        const res = await Product.find()
        return JSON.parse(JSON.stringify(res))
    }catch(error){
        console.log(error)
    }
}

export const findByCategory = async(category)=>{
    try{
        await connectToDatabase()
        const res = await Product.find({category})
        return JSON.parse(JSON.stringify(res))
    }catch(error){
        console.log(error)
    }
}

export const newProduct = async({marca,espec,imagen,category,precio})=>{
    try{
        await connectToDatabase()
        const res = await Product.create({marca,espec,imagen,category,precio})
        return JSON.parse(JSON.stringify(res))

    }catch(error){
        console.log(error)
    }
}