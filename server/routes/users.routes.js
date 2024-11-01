import { Router } from "express";
import { readFile, writeFile } from 'fs/promises'

import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { KEY } from "../../client/api/secret.api.js";

const router = Router()

const getData = async()=>{
    const fileUsers = await readFile('./server/data/users.json', 'utf-8')
    return JSON.parse(fileUsers)
}


router.post('/login', async (req, res)=>{
    const userData = await getData()
    const email = req.body.email
    const pass = req.body.pass

    const result = userData.find(e => e.email === email && e.pass === pass)

    if(result){
        const data = {
            id: result.id,
            nombre: result.nombre,
            apellido: result.apellido,
            email: result.email,
            status: true
        }
        res.status(200).json(data)
    }else{
        res.status(400).json(`${email} no existe o contraseña incorrecta` + {status: false})
    }
})

/*
router.post('/login', (req, res)=>{
    const email = req.body.email
    const pass = req.body.pass

    const result = userData.find(e => e.email === email)
    
    if(!result){
        return res.status(404).json(`${email} no existe o contraseña incorrecta` + {status: false});
        }
    
    const controlPass = bcrypt.compareSync(pass, result.pass)
    console.log(controlPass)

    if (!controlPass){
        return res.status(404).json(`${email} no existe o contraseña incorrecta` + {status: false})
    }

    const token = jwt.sign({ ...result}, KEY, {expiresIn: 86400})
    res.status(200).json(token)

})
*/

router.post('/create', async (req, res)=>{

    const userData = await getData()
    const {nombre,apellido,username,email,pass} = req.body
    const id = userData.length > 0 ? userData[userData.length-1].id +1 : 1 

    try{
        userData.push({id, nombre, apellido, username, email, pass})
        writeFile('./server/data/users.json', JSON.stringify(userData,null,2))
        res.status(200).json({status:true})

    }catch(error){
        console.log(error)
        res.status(400).json({status:false})
    }
})

export default router