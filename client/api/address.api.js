import { API } from "./api.js"

export const newAddress = async (dataAddress) =>{
    try{
        const response = await fetch(`${API}/address/create`,{
            method:"POST",
            body: JSON.stringify(dataAddress),
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
        console.log('Error al guardar dirección')
    }
}

export const findAddressByIdClient = async (e)=>{
 
    try { 
        const response = await fetch(`${API}/address/ByIdClient/${e}`); 
        
        if (!response.ok) { 
            throw new Error(`Error: ${response.status}`); 
        } 
        const data = await response.json(); 
        return data;

    }catch(error){ 
            console.error('Error:', error); return []; 
    } 
};

export const findAddressById = async (e)=>{
 
    try { 
        const response = await fetch(`${API}/address/ById/${e}`); 
        
        if (!response.ok) { 
            throw new Error(`Error: ${response.status}`); 
        } 
        const data = await response.json(); 
        return data;

    }catch(error){ 
            console.error('Error:', error); return []; 
    } 
};

export const editAddress = async (dates)=>{
 
    try { 
        const response = await fetch(`${API}/address/editAddress`,{
            method:"PATCH",
            body: JSON.stringify(dates),
            headers:{
                'Content-Type': 'application/json'
            }
        })
        
        if (!response.ok) { 
            throw new Error(`Error: ${response.status}`); 
        } 
        const data = await response.json(); 
        return data;

    }catch(error){ 
            console.error('Error:', error); return []; 
    } 
};

export const findAddresByIdclientAndStatus = async (dates)=>{
 
    try { 
        const response = await fetch(`${API}/address/ById&Status`,{
            method:"POST",
            body: JSON.stringify(dates),
            headers:{
                'Content-Type': 'application/json'
            }
        })
        
        if (!response.ok) { 
            throw new Error(`Error: ${response.status}`); 
        } 
        const data = await response.json(); 
        return data;

    }catch(error){ 
            console.error('Error:', error); return []; 
    } 
};

export const disabledAddress = async (dates)=>{
 
    try { 
        const response = await fetch(`${API}/address/disAddress`,{
            method:"PATCH",
            body: JSON.stringify(dates),
            headers:{
                'Content-Type': 'application/json'
            }
        })
        
        if (!response.ok) { 
            throw new Error(`Error: ${response.status}`); 
        } 
        const data = await response.json(); 
        return data;

    }catch(error){ 
            console.error('Error:', error); return []; 
    } 
};


