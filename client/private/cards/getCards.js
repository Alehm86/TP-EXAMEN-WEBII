export const getCard = async()=>{
    try{
        const response = await fetch('http://localhost:3006/private/home', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        })

        if(!response.ok){
            throw new Error(`Error: ${response.status}`)
        }

        const card = await response.json()
        return card

    }catch(error){
        console.error('Error al cargar tarjeta de producto: ', error)
    }
}