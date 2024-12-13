import { API } from "../../../api/api.js";
import { getProduct } from "../../../api/products.api.js";
import { findSalesByStatus, updateStatus } from "../../../api/sales.api.js";

const data = await getProduct()
const contenedorProductos = document.querySelector("#contenedor-productos");
const array = data
const lastFiveProduct = array.slice(-5).reverse();
const containerSales = document.querySelector("#containerSales");
const dataSales = await findSalesByStatus("preparing");

let btnPrint = document.querySelectorAll("print");
let btnSend = document.querySelector("send")

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
cargarProductos(lastFiveProduct);

function loadSalesPreparing(regSales){

        containerSales.innerHTML="";    
        regSales.forEach(dates => {
            const div = document.createElement("div")
            div.classList.add("containerSales");  
            div.innerHTML = `
                            <div class="cardSales">
                                <div>
                                    <h6>Fecha</h6>
                                    <h6>${dates.fecha}</h6>
                                </div>
                                <div>
                                    <h6>id venta</h6>
                                    <h6>${dates._id}</h6>
                                </div>
                                <div>
                                    <h6>Cliente</h6>
                                    <h6>${dates.id_cliente.name + ' ' + dates.id_cliente.lastname }</h6>
                                </div>
                                <div>
                                    <h6>Monto</h6>
                                    <h6>$${dates.total},00</h6>
                                </div>
                                <div>
                                    <h6>datos envio <i class="bi bi-printer"></i></h6>
                                    
                                    <a href="${API}/private/admin/pages/printArea.html">
                                        <button class="print send" id="${dates._id}"><i class="bi bi-file-pdf-fill"></i></button>
                                    </a>
                                </div>
                                <div>
                                    <h6>Confirmar envio <i class="bi bi-geo-alt-fill"></i></h6>
                                    <button class="send" id="${dates._id}"><i class="bi bi-truck"></i></button>
                                </div>                                
                                
                            </div>                
                            `;
            containerSales.append(div); 
        })
        actionBtnPrint();
        actionBtnSend();
}
loadSalesPreparing(dataSales.result);

function actionBtnPrint(){
    btnPrint = document.querySelectorAll(".print");
    btnPrint.forEach(boton => {
        boton.addEventListener("click", print);
    });
}

function print(e){
    const idInput = e.currentTarget.id 
    localStorage.setItem("printId", JSON.stringify(idInput)); 
}

function actionBtnSend(){
    btnSend = document.querySelectorAll(".send");
    btnSend.forEach(boton => {
        boton.addEventListener("click", send);
    });
} 

async function send(e){
    const _id = e.currentTarget.id 
    const status = 'Terminado'
    const dates = {_id, status}

    const isConfirmed = confirm("¿Enviar el pedido?");
    if (!isConfirmed) {
        return;
    }

    const res = await updateStatus(dates)
    
    if(res.status){
        window.location.href = `${API}/private/admin/home.html`
    }else{
        console.log('Error al terminar la venta!')
    }
    
}
