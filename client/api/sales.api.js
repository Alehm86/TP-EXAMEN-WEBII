import { API } from "./api.js"

export const newSale = async (datosVenta) =>{

    try{
        const response = await fetch(`${API}/venta/nvaVenta/`,{
            method:"POST",
            body: JSON.stringify(datosVenta),
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
        console.log('Error al guardar la venta')
    }
}

export const getSales = async ()=>{
 
    try { 
        const response = await fetch(`${API}/venta/all`); 
        
        if (!response.ok) { 
            throw new Error('Error en la solicitud'); 
        } 
        const data = await response.json(); 
        return data;

    }catch(error){ 
            console.error('Error:', error); return []; 
    } 
};

export const findSalesByMonth = async (e)=>{
 
    try { 
        const response = await fetch(`${API}/venta/ByMonth/${e}`); 
        
        if (!response.ok) { 
            throw new Error(`Error: ${response.status}`); 
        } 
        const data = await response.json(); 
        return data;

    }catch(error){ 
            console.error('Error:', error); return []; 
    } 
};

export const findSalesByStatus = async (e)=>{
 
    try { 
        const response = await fetch(`${API}/venta/ByStatus/${e}`); 
        
        if (!response.ok) { 
            throw new Error(`Error: ${response.status}`); 
        } 
        const data = await response.json(); 
        return data;

    }catch(error){ 
            console.error('Error:', error); return []; 
    } 
};

export const findSalesById = async (e)=>{
 
    try { 
        const response = await fetch(`${API}/venta/ById/${e}`); 
        
        if (!response.ok) { 
            throw new Error(`Error: ${response.status}`); 
        } 
        const data = await response.json(); 
        return data;

    }catch(error){ 
            console.error('Error:', error); return []; 
    } 
};

export const updateStatus = async (dates)=>{
 
    try { 
        const response = await fetch(`${API}/venta/updateStatus`,{
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
