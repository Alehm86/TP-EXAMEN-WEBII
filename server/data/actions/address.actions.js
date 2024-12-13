import { connectToDatabase } from "../connection.js";
import Address from "../schemas/address.schema.js";

export const createAddress = async({id_client, address, height, locality, postal, province, status})=>{
    try{
        await connectToDatabase()
        const res = await Address.create({id_client, address, height, locality, postal, province, status})
        return JSON.parse(JSON.stringify(res))

    }catch(error){
        console.log(error)
    }
}

export const findAddressByIdClient = async(id_client)=>{
    try{
        await connectToDatabase()
        const res = await Address.find({id_client})
        return JSON.parse(JSON.stringify(res))
    }catch(error){
        console.log(error)
    }
}

export const findAddressById = async(_id)=>{
    try{
        await connectToDatabase()
        const res = await Address.find({_id})
        return JSON.parse(JSON.stringify(res))
    }catch(error){
        console.log(error)
    }
}

export const updateAddress = async(address, height, locality, province, postal, _id)=>{
    try{
        await connectToDatabase()
        const res = await Address.findByIdAndUpdate(_id, {address, height, locality, province, postal})
        return JSON.parse(JSON.stringify(res))
    }catch(error){
        console.log(error)
    }
}
    
export const findAddrIdStatus = async(id_client, status)=>{
    try{
        await connectToDatabase()
        const res = await Address.find({id_client, status})
        return JSON.parse(JSON.stringify(res))
    }catch(error){
        console.log(error)
    }
}

export const disabledAddress = async(status, _id)=>{
    try{
        await connectToDatabase()
        const res = await Address.findByIdAndUpdate(_id, {status})
        return JSON.parse(JSON.stringify(res))
    }catch(error){
        console.log(error)
    }
}