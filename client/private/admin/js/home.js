import { getProduct } from "../../../api/products.api.js";

const data = await getProduct()
const contenedorProductos = document.querySelector("#contenedor-productos");

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
                        </div>
                    `;
        contenedorProductos.append(div);
    })             
}
cargarProductos(data);