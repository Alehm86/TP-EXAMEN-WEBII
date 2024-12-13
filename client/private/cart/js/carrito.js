
const productosEnCarrito= JSON.parse(localStorage.getItem("productosEnCarrito"));
const contenedorCarritoProductos = document.querySelector("#carritoProductos");
const conenedorCarritoCompra = document.querySelector("#carritosBotones");
let btnEliminar = document.querySelectorAll("cardEliminarCarrito");
const btnVaciar = document.querySelector("#btnVaciarCarrito");
const contenedorTotal = document.querySelector("#total");

function loadProdCarrito(){

    if(productosEnCarrito){

        contenedorCarritoProductos.innerHTML="";
    
        productosEnCarrito.forEach(producto => {
            const div = document.createElement("div")
            div.classList.add("carritoProducto");    
            div.innerHTML = `                                
                                <img class="cardImgCarrito" src="${producto.imagen}" alt="${producto.marca}">    
                                <div class="cardTituloCarrito">
                                    <small>Producto</small>
                                    <h3>${producto.marca +" "+producto.espec}</h3>
                                </div>
                                <div class="cardProdCant">
                                    <small>Cantidad</small>
                                    <p>${producto.cantidad}</p>
                                </div>
                                <div class="cardProdPrecio">
                                    <small>Precio</small>
                                    <p>${producto.precio}</p>
                                </div>
                                <div>
                                    <small>Subtotal</small>
                                    <p>$${producto.precio * producto.cantidad}</p>
                                </div>
                                <button class="cardEliminarCarrito" id="${producto._id}"><i class="bi bi-trash3"></i></button>              
                                `;
                contenedorCarritoProductos.append(div);  
        })
        actBtnEliminar();
        actualizarTotal();
    }
}

loadProdCarrito();

function actBtnEliminar(){
    btnEliminar = document.querySelectorAll(".cardEliminarCarrito");
    btnEliminar.forEach(boton => {
    boton.addEventListener("click", eliminarDelCarrito);
    });

}

function eliminarDelCarrito(e) {
    const idBoton = e.currentTarget.id;
    const index = productosEnCarrito.findIndex(producto => producto._id === idBoton);
    productosEnCarrito.splice(index, 1);

    loadProdCarrito();
    localStorage.setItem("productosEnCarrito", JSON.stringify(productosEnCarrito));

}

btnVaciar.addEventListener("click", vaciarCarrito);

function vaciarCarrito() {
    productosEnCarrito.length = 0; 
    
    localStorage.setItem("productosEnCarrito", JSON.stringify(productosEnCarrito));
    loadProdCarrito();
}

function actualizarTotal(){
    const totalCalculado = productosEnCarrito.reduce((acc, producto)=> acc + (producto.precio * producto.cantidad), 0);
    total.innerText = `$${totalCalculado},00`;  


    let totalAPagar = [];
    const btnComprar = document.getElementById('carritoComprar')

    btnComprar.addEventListener('click', ()=>{
        
        const total= totalCalculado;     
        const newItem = {total: total}
        
        totalAPagar.push(newItem);
        localStorage.setItem("totalAPagar", JSON.stringify(totalAPagar));
            
    })

}

