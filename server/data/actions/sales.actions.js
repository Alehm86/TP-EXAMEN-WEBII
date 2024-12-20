import { connectToDatabase } from "../connection.js";
import Sales from "../schemas/sales.schema.js";

export const newSale = async({fecha, mes, id_cliente, total, metodo_pago, status, id_Address})=>{
    try{
        await connectToDatabase()
        const res = await Sales.create({fecha, mes, id_cliente, total, metodo_pago, status, id_Address})
        return JSON.parse(JSON.stringify(res))

    }catch(error){
        console.log(error)
    }
}

export const findSales = async()=>{
    try{
        await connectToDatabase()
        const res = await Sales.find()
        return JSON.parse(JSON.stringify(res))
    }catch(error){
        console.log(error)
    }
}

export const findSalesByMonth = async(mes)=>{
    try{
        await connectToDatabase()
        const res = await Sales.find({mes})
        return JSON.parse(JSON.stringify(res))
    }catch(error){
        console.log(error)
    }
}

export const findSalesByStatus = async(status)=>{
    try{
        await connectToDatabase()
        const res = await Sales.find({status}).populate({path:"id_cliente"})
        return JSON.parse(JSON.stringify(res))
    }catch(error){
        console.log(error)
    }
}

export const findSalesById = async(_id)=>{
    try{
        await connectToDatabase()
        const res = await Sales.find({_id}).populate({path:"id_cliente"}).populate({path:"id_Address"})
        return JSON.parse(JSON.stringify(res))
    }catch(error){
        console.log(error)
    }
}

export const updateByStatus = async(status, _id)=>{
    try{
        await connectToDatabase()
        const res = await Sales.findByIdAndUpdate(_id, {status})
        return JSON.parse(JSON.stringify(res))
    }catch(error){
        console.log(error)
    }
}


