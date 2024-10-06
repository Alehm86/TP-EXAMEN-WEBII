
let mensajeError = document.querySelector('.mensajeError');

let nombreCard = document.querySelector('.cardNombre');
let nombreInp = document.querySelector('#inpNombre');

let numeroCard = document.querySelector('.frenteNumero');
let numeroInp = document.querySelector('#inpNumero');

let mesCard  = document.querySelector('.cardMes');
let mesInp = document.querySelector('#inpMes');

let yearCard = document.querySelector('.cardYear');
let yearInp = document.querySelector('#inpYear');

let codeCard = document.querySelector('.dorsoCodigo');
let codeInp = document.querySelector('#inpCodigo');

let tarjetaElement = [];
const btnCard = document.getElementById('btnCard')

btnCard.addEventListener('click', ()=>{
     
    const nombre= nombreInp.value;
    const numero= numeroInp.value;
    const mes= mesInp.value;
    const year= yearInp.value;
    const codigo= codeInp.value;
    
    const newItem = {nombre: nombre, numero: numero, mes: mes, year: year, codigo: codigo}
    
    tarjetaElement.push(newItem);
    console.log(tarjetaElement);
    localStorage.setItem("tarjetaElement", JSON.stringify(tarjetaElement));
        
})


nombreInp.addEventListener('input', ()=>{
    
    if(nombreInp.value == ''){
        nombreCard.textContent = 'M. Molina'
    }else{
        nombreCard.textContent = nombreInp.value;
    }
});

numeroInp.addEventListener('input', ()=>{

    let regExp = /[A-z]/g;
    if(regExp.test(numeroInp.value)){
        
    }else{
        numeroInp.value = numeroInp.value.replace(/\s/g, '').replace(/([0-9]{4})/g, '$1 ').trim();
        
    }

    numeroCard.textContent = numeroInp.value;
    console.log(isNaN(numeroInp.value));
    
    if(numeroInp.value == ''){
        numeroCard.textContent = '0000 0000 0000 0000';
    }
});

mesInp.addEventListener('input', ()=>{
    
    if(mesInp.value == ''){
        mesCard.textContent = '00'
    }else{
        mesCard.textContent = mesInp.value;
    }
});

yearInp.addEventListener('input', ()=>{
    
    if(yearInp.value == ''){
        yearCard.textContent = '0000'
    }else{
        yearCard.textContent = yearInp.value;
    }
});

codeInp.addEventListener('input', ()=>{
    
    if(codeInp.value == ''){
        codeCard.textContent = '000'
    }else{
        codeCard.textContent = codeInp.value;
    }
});



