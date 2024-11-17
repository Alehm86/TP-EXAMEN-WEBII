import { connectToDatabase } from "../connection.js";
import Sales from "../schemas/sales.schema.js";

export const newSale = async({fecha, id_cliente, total, metodo_pago})=>{
    try{
        await connectToDatabase()
        const res = await Sales.create({fecha, id_cliente, total, metodo_pago})
        return JSON.parse(JSON.stringify(res))

    }catch(error){
        console.log(error)
    }
}