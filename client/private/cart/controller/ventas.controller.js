import { getSession } from "../../controller/sessionStorage_controller.js";
import { newSale } from "../../../api/sales.api.js";
import { API } from "../../../api/api.js";
import { findAddressById } from "../../../api/address.api.js";

const user = getSession('user')
const btnFin = document.getElementById('btnFin');
const datosCuotas= JSON.parse(localStorage.getItem("datosCuotas"));
const productosEnCarrito= JSON.parse(localStorage.getItem("productosEnCarrito"));
const tarjetaElement= JSON.parse(localStorage.getItem("tarjetaElement"));
const totalAPagar= JSON.parse(localStorage.getItem("totalAPagar"));
const contenedorCarritoProductos = document.querySelector("#carritoProductos");
const contenedorDatosTarjeta = document.querySelector("#datosTarjeta");
const contenedorDatosCuotas = document.querySelector("#datosCuotas");
const contenedorDatosDireccion = document.querySelector("#datosDireccion");
const idAddress = JSON.parse(localStorage.getItem("idAddress"));

const dataAddress = await findAddressById(idAddress)


function loadProdCarrito(){

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
                                `;
                contenedorCarritoProductos.append(div);  
        })
}
loadProdCarrito();

function loadTarjetaDatos(){
    contenedorDatosTarjeta.innerHTML="";   
    tarjetaElement.forEach(tarjeta => {
            const div = document.createElement("div")
            div.classList.add("datosTarjeta");    
            div.innerHTML = `                                          
                            <div class="tarjeta">
                                <div class="frente">
                                    <p class="frenteCredito">Credito</p>
                                    <img src="../../img/tarjeta/chip.jpg" alt="" class="imgChip">
                                    <p class="frenteNumero" id="cardNumero">${tarjeta.numero}</p>
                                    <div class="frenteNomVenc">
                                        <p class="cardNombre">${tarjeta.nombre}</p>
                                        <p><span class="cardMes">${tarjeta.mes}</span>/<span class="cardYear">${tarjeta.year}</span></p>
                                    </div>
                                </div>
                                <div class="dorso">
                                <p class="dorsoCodigo" id="cardCodigo">${tarjeta.codigo}</p>
                                </div>
                            </div>                                                             
                                `;
            contenedorDatosTarjeta.append(div);  
        })
}
loadTarjetaDatos();

function loadCuotasDatos(){
    contenedorDatosCuotas.innerHTML="";  
    datosCuotas.forEach(cuotas => {
            const div = document.createElement("div")
            div.classList.add("datosCuotas");    
            div.innerHTML = `                                          
                            <h2>Cuotas seleccionadas</h2>
                            <h1>Cantidad de cuotas: ${cuotas.cuota}.</h1>
                            <h1>Interes: ${cuotas.interes}</h1>
                            <h1>Valor de la cuota: $${cuotas.valCuota}</h1>
                            <h1>Monto total a pagar: $${cuotas.total}</h1>                                        
                            `;              
            contenedorDatosCuotas.append(div);  
        })
}
loadCuotasDatos();

function loadDireccionDatos(data){
    contenedorDatosDireccion.innerHTML="";   
    data.forEach(address => {
            const div = document.createElement("div")
            div.classList.add("datosdireccion");    
            div.innerHTML = `                                          
                            <h2>Datos de envio</h2>
                            <div class="datosDir">
                                <h1>Direccion: ${address.address + ' nº:' + address.height}</h1>

                            </div>
                            <h1>Localidad: ${address.locality}</h1>
                            <h1>Provincia: ${address.province}</h1>
                            <h1>Codigo postal: ${address.postal}</h1>                                          
                            `;
            contenedorDatosDireccion.append(div);  
        })
}
loadDireccionDatos(dataAddress.result);

function TerminarCompra() {
    productosEnCarrito.length = 0;  
    localStorage.setItem("productosEnCarrito", JSON.stringify(productosEnCarrito));

    tarjetaElement.length = 0;
    localStorage.setItem("tarjetaElement", JSON.stringify(tarjetaElement));

    datosCuotas.length = 0;
    localStorage.setItem("datosCuotas", JSON.stringify(datosCuotas));

    totalAPagar.length = 0;
    localStorage.setItem("totalAPagar", JSON.stringify(totalAPagar));
}

btnFin.addEventListener('click', async (e)=>{
    e.preventDefault()
    const id_Address = idAddress
    const id_cliente = user.id
    const metodo_pago = 2
    let total = 0
    
    datosCuotas.forEach(cuotas => {
        total = cuotas.total
    })

    const datosVenta = {
        id_cliente,
        total:parseInt(total),
        metodo_pago,
        id_Address
    }

    const isConfirmed = confirm("¿Estás seguro de que deseas terminar la compra?");
    if (!isConfirmed) {
        return;
    }
    
    const res = await newSale(datosVenta)
    
    if(res.status){
        TerminarCompra()
        window.location.href = `${API}/private/cart/pages/mensaje.html`
    }else{
        console.log('Error al registrar la venta!')
    }
    
} );

