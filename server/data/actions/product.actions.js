import { connectToDatabase } from "../connection.js";
import Product from "../schemas/product.schema.js";

export const createPrduct = async({id, marca, espec, imagen, categoria, precio})=>{
    try{
        await connectToDatabase()
        const res = await Product.create({id, marca, espec, imagen, categoria, precio})
        return JSON.parse(JSON.stringify(res))

    }catch(error){
        console.log(error)
    }
}

export const findAll = async()=>{
    try{
        await connectToDatabase()
        const res = await Product.find()
        return JSON.parse(JSON.stringify(res))
    }catch(error){
        console.log(error)
    }
}

export const findByCategory = async(categoria)=>{
    try{
        await connectToDatabase()
        const res = await Product.find({categoria}).populate({path:"categoria"})
        return JSON.parse(JSON.stringify(res))
    }catch(error){
        console.log(error)
    }
}