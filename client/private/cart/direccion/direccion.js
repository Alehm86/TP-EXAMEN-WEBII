let inpDireccion = document.querySelector('#inpDireccion');
let inpAltura = document.querySelector('#inpNumero');
let inpLocalidad = document.querySelector('#inpLocalidad');
let inpProvincia = document.querySelector('#inpProvinica');
let inpCPostal = document.querySelector('#inpCPostal');

let datosDireccion = [];
const btnDir = document.getElementById('btnDir')

btnDir.addEventListener('click', ()=>{
     
    const direccion= inpDireccion.value;
    const altura= inpAltura.value;
    const localidad= inpLocalidad.value;
    const provincia= inpProvincia.value;
    const cpostal= inpCPostal.value;
    
    const newItem = {direccion: direccion, altura: altura, localidad: localidad, provincia: provincia, cpostal: cpostal}
    
    datosDireccion.push(newItem);
    console.log(datosDireccion);
    localStorage.setItem("datosDireccion", JSON.stringify(datosDireccion));
        
})