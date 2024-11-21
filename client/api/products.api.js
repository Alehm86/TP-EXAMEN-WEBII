import { API } from "./api.js"

export const getProduct = async ()=>{
 
        try { 
            const response = await fetch(`${API}/products/all`); 
            
            if (!response.ok) { 
                throw new Error('Error en la solicitud'); 
            } 
            const data = await response.json(); 
            return data;
 
        }catch(error){ 
                console.error('Error:', error); return []; 
        } 
};

export const getProdByCategory = async (e)=>{
 
    try { 
        const response = await fetch(`${API}/products/byCategory/${e}`); 
        
        if (!response.ok) { 
            throw new Error('Error en la solicitud'); 
        } 
        const data = await response.json(); 
        return data;

    }catch(error){ 
            console.error('Error:', error); return []; 
    } 
};

export const newProduct = async (dataProduct) =>{
    try{
        const response = await fetch(`${API}/products/create`,{
            method:"POST",
            body: JSON.stringify(dataProduct),
            headers:{
                'Content-Type': 'application/json'
            }
        })

        if(!response.status){
            throw new error (`Error: ${response.status}`)
        }
        
        const data = await response.json()
        return data
        
    }catch(error){
        console.log('Error al guardar nuevo producto')
    }
}