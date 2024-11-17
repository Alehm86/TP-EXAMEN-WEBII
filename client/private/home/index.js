import { getProduct, getProdByCategory } from "../../api/products.api.js";

const data = await getProduct()

const contenedorProductos = document.querySelector("#contenedor-productos");
const botonesCategorias = document.querySelectorAll(".boton-categoria");
let botonesAgregar = document.querySelectorAll(".productoAgregar");                 
                
function cargarProductos(productosElegidos){
  
    contenedorProductos.innerHTML = "";
    productosElegidos.forEach(producto => {                    
        const div = document.createElement("div")
        div.classList.add("producto");
        div.innerHTML = `
                        <img class="card-img" src="${producto.imagen}" alt="${producto.marca}">
                        <div class="card-detalle">
                            <h3 class="card-marca">${producto.marca}</h3>
                            <p class="card-espec">${producto.espec}</p>
                            <p class="card-precio">$${producto.precio},00</p>
                                <div>
                                    <input type="number" class="card-cantidad" id="cantCarrito${producto.id}" max="10" min="1" value:"1" placeholder="0">
                                    <button class="productoAgregar" id="${producto.id}">Agregar <i class="bi bi-cart-plus"></i></button>
                                </div>
                        </div>
                    `;
        contenedorProductos.append(div);
    })
    actualizarBotonesAgregar();                
}
cargarProductos(data);

botonesCategorias.forEach(boton => {
    boton.addEventListener("click", async (e) => {
        e.preventDefault()
            
        botonesCategorias.forEach(boton => boton.classList.remove("active"));
        e.currentTarget.classList.add("active");                     

        const categ = e.currentTarget.id 
        const res = await getProdByCategory(categ)       

        if (categ != "todos") { 
            cargarProductos(res);
        } else {                       
            cargarProductos(data);
        }                            
    })
})

function actualizarBotonesAgregar(){
    botonesAgregar=document.querySelectorAll(".productoAgregar")
        botonesAgregar.forEach(boton =>{
        boton.addEventListener("click", agregarAlCarrito);
    })
}
            
let productosEnCarrito;
let productosEnCarritoLS = localStorage.getItem("productosEnCarrito");

if (productosEnCarritoLS) {
    productosEnCarrito = JSON.parse(productosEnCarritoLS);  
} else {
    productosEnCarrito = [];
}

function agregarAlCarrito(e){
   
    const idInput = e.currentTarget.id 
    const cantidades = document.getElementById(`cantCarrito${idInput}`).value;
    const idBoton = e.currentTarget.id
    const productoAgregado = data.find(producto => producto.id===idBoton);

    if (productosEnCarrito.some(producto => producto.id===idBoton)){
        const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);
        productosEnCarrito[index].cantidad++;                  
    }else{
        productoAgregado.cantidad = cantidades;
        productosEnCarrito.push(productoAgregado);                   
    }    
    localStorage.setItem("productosEnCarrito", JSON.stringify(productosEnCarrito));  
          
}












