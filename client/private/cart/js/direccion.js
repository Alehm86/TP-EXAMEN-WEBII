
let datosDireccion = [];
const btnDir = document.getElementById('btnDir')

btnDir.addEventListener('click', ()=>{
     
    const direccion= document.querySelector('#inpDireccion').value;
    const altura= document.querySelector('#inpNumero').value;
    const localidad= document.querySelector('#inpLocalidad').value;
    const provincia= document.querySelector('#inpProvinica').value;
    const cpostal= document.querySelector('#inpCPostal').value;
    
    const newItem = {direccion: direccion, altura: altura, localidad: localidad, provincia: provincia, cpostal: cpostal}
    
    datosDireccion.push(newItem);
    console.log(datosDireccion);
    localStorage.setItem("datosDireccion", JSON.stringify(datosDireccion));
        
})