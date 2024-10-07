const productosEnCarrito= JSON.parse(localStorage.getItem("productosEnCarrito"));
const tarjetaElement= JSON.parse(localStorage.getItem("tarjetaElement"));
const datosCuotas= JSON.parse(localStorage.getItem("datosCuotas"));
const totalAPagar= JSON.parse(localStorage.getItem("totalAPagar"));
const datosDireccion= JSON.parse(localStorage.getItem("datosDireccion"));  

const contenedorCarritoProductos = document.querySelector("#carritoProductos");
const contenedorDatosTarjeta = document.querySelector("#datosTarjeta");
const contenedorDatosCuotas = document.querySelector("#datosCuotas");
const contenedorDatosDireccion = document.querySelector("#datosDireccion");

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

function loadDireccionDatos(){

    contenedorDatosDireccion.innerHTML="";
    
    datosDireccion.forEach(dir => {
            const div = document.createElement("div")
            div.classList.add("datosdireccion");    
            div.innerHTML = `                                          
                            <h2>Datos de envio</h2>
                            <div class="datosDir">
                                <h1>Direccion: ${dir.direccion}.</h1>
                                <h1>altura: ${dir.altura}</h1>
                            </div>
                            <h1>Localidad: ${dir.localidad}</h1>
                            <h1>Provincia: ${dir.provincia}</h1>
                            <h1>Codigo postal: ${dir.cpostal}</h1>
                                            
                            `;
            contenedorDatosDireccion.append(div);  
        })
}

loadDireccionDatos();

function TerminarCompra() {
    productosEnCarrito.length = 0;  
    localStorage.setItem("productosEnCarrito", JSON.stringify(productosEnCarrito));

    tarjetaElement.length = 0;
    localStorage.setItem("tarjetaElement", JSON.stringify(tarjetaElement));

    datosCuotas.length = 0;
    localStorage.setItem("datosCuotas", JSON.stringify(datosCuotas));

    totalAPagar.length = 0;
    localStorage.setItem("totalAPagar", JSON.stringify(totalAPagar));

    datosDireccion.length = 0;
    localStorage.setItem("datosDireccion", JSON.stringify(datosDireccion));
}


const btnFin = document.querySelector("#btnFin");
btnFin.addEventListener('click', TerminarCompra());


