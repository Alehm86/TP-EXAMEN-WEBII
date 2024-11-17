import { Router } from "express";
import { KEY } from "../../client/api/secret.api.js";
import { decodeToken } from "../../client/api/middleware.api.js";
import { createUser, findEmail } from "../data/actions/user.actions.js";

import { readFile, writeFile } from 'fs/promises'

import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

const router = Router()


router.post('/login', async (req, res)=>{

    const email = req.body.email
    const pass = req.body.pass
    
    try{
        const result = await findEmail(email)

        if(!result){
            return res.status(401).send(`${email} no existe o contraseña incorrecta` + {status: false});
        }
        
        const controlPass = bcrypt.compareSync(pass, result.pass)
        
        if (!controlPass){
            return res.status(401).send({status: false})
        }
        const token = jwt.sign({ ...result}, KEY, {expiresIn: 86400})
    
        if(result){
            const data = {
                id: result._id,
                nombre: result.name,
                apellido: result.lastname,
                email: result.email,
                status: true
            }
            res.status(200).json(data)
        }

    }catch(error){
        console.log(error)
    }
    
})

router.post('/create', async (req, res)=>{

    const {name,lastname,username,email,pass} = req.body
    let user = "standard"
    try{
        const hashedPass = bcrypt.hashSync(pass, 8);
        const result = await createUser({name,lastname,username,email,pass:hashedPass, user})
        res.status(200).json({status:true})

    }catch(error){
        console.log(error)
        res.status(400).json({status:false})
    }
})

router.post('/decodeToken',async (req,res)=>{
    const token = req.body.token
    const result = await decodeToken(token)
    res.status(200).json(result)
})


export default router