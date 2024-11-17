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