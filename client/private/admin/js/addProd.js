import { newProduct } from "../../../api/products.api.js"
import { API } from "../../../api/api.js"

const btnNewProduct = document.getElementById('btnNewProduct')
let imagen = ""

const fileInput = document.getElementById('image')
const dropZone = document.getElementById('result-image')
const img = document.getElementById('img-result')

dropZone.addEventListener('click', () => fileInput.click())

dropZone.addEventListener('dragover', (e) => {
	e.preventDefault()

	dropZone.classList.add('form-file__result--active')
})

dropZone.addEventListener('dragleave', (e) => {
	e.preventDefault()

	dropZone.classList.remove('form-file__result--active')
})

const uploadImage = (file) => {
	const fileReader = new FileReader()
	fileReader.readAsDataURL(file)

	fileReader.addEventListener('load', (e) => {
		img.setAttribute('src', e.target.result)
	})
}

dropZone.addEventListener('drop', (e) => {
	e.preventDefault()

	fileInput.files = e.dataTransfer.files
	const file = fileInput.files[0]

	uploadImage(file)
})

fileInput.addEventListener('change', (e) => {
	const file = e.target.files[0]
	uploadImage(file)

    imagen = `../../img/${file.name}`
})

btnNewProduct.addEventListener('click', async(e)=>{
    e.preventDefault()

    const marca = document.querySelector('#inpBrand').value;
    const espec = document.querySelector('#inpEspec').value;
    const precio = document.querySelector('#inpPrice').value;

    let category = ""
    let elementoActivo = document.querySelector('input[name="category"]:checked');
    const categ = elementoActivo.id; 

    switch (categ) {
        case '1': 
            category="Notebook"
            break;
        case '2':
            category="Componentes"
            break;
        case '3':
            category="Celulares"
            break;
    }  
    const dataProduct = {marca,espec,imagen,category,precio}

    const isConfirmed = confirm("¿Estás seguro que los datos estan cargados correctamente?");
    if (!isConfirmed) {
        return;
    }

    const res = await newProduct(dataProduct)

    if(res.status = true){  
        try{
            
            window.location.href = `${API}/private/admin/html/message.html`
            
        }catch(error){
            console.log('Error al cargar pagina!')
        }    

    }else{
        console.log('Error al registrar la nuevo usuario!')
    }

    
})



