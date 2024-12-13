import { Router } from "express";
import { findAddressByIdClient, createAddress, findAddressById, updateAddress, findAddrIdStatus, disabledAddress } from "../data/actions/address.actions.js";

const router = Router()

router.post('/create', async (req, res)=>{
    const {id_client, address, height, locality, postal, province} = req.body
    const status = "true"
    try{
        const result = await createAddress({id_client, address, height, locality, postal, province, status})
        res.status(200).json({status:true})
    }catch(error){
        console.log(error)
        res.status(400).json({status:false})
    }
})

router.get('/ByIdClient/:id_client', async(req, res)=>{
    const id_client = req.params.id_client
    try{
        const result = await findAddressByIdClient(id_client)                       
        res.status(200).json({status:true, result})

    }catch(error){
        res.status(400).json({status: false})
    }
})

router.get('/ById/:_id', async(req, res)=>{
    const _id = req.params._id
    try{
        const result = await findAddressById(_id)                       
        res.status(200).json({status:true, result})

    }catch(error){
        res.status(400).json({status: false})
    }
})

router.patch('/editAddress', async(req, res)=>{
    const _id = req.body
    const {address} = req.body
    const {height} = req.body
    const {locality} = req.body
    const {province} = req.body
    const {postal} = req.body
    try{
        const result = await updateAddress(address, height, locality, province, postal, _id)                       
        res.status(200).json({status:true, result})

    }catch(error){
        res.status(400).json({status: false})
    }
})

router.post('/ById&Status', async(req, res)=>{
    const {id_client} = req.body
    const {status} = req.body
    try{
        const result = await findAddrIdStatus(id_client, status)                       
        res.status(200).json({status:true, result})

    }catch(error){
        res.status(400).json({status: false})
    }
})

router.patch('/disAddress', async(req, res)=>{
    const {_id} = req.body
    const {status} = req.body
    try{
        const result = await disabledAddress(status, _id)                       
        res.status(200).json({status:true, result})

    }catch(error){
        res.status(400).json({status: false})
    }
})

export default router