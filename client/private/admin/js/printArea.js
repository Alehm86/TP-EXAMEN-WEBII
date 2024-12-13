import { findSalesById } from "../../../api/sales.api.js";

const printId = JSON.parse(localStorage.getItem("printId"));
const containerPrint = document.querySelector("#container-printArea");
const data = await findSalesById(printId)
const btnPrint = document.getElementById('btnPrint')

function loadPrintArea(data){

    containerPrint.innerHTML="";    
    data.forEach(dates => {
        const div = document.createElement("div")
        div.classList.add("containerPrint");  
        div.innerHTML = `
                        <div>
                            <h1 class="logo" style="color: black; border: solid black;">CBATECH!</h1>
                        </div> 
                        <div class="dataArea">
                            <h2>DATOS DE ENVIO:</h2> 
                        </div>                 
                        <div class="dataArea">
                            <h2>Nombre del cliente:</h2>
                            <h2>${dates.id_cliente.name + ' ' + dates.id_cliente.lastname }</h2>                        
                        </div>
                        <div>
                            <div class="dataArea">
                                <h2>Dirección:</h2>
                                <h2>${dates.id_Address.address} - </h2>
                                <h2>Nro:</h2>
                                <h2>${dates.id_Address.postal}</h2>
                            </div>
                            <div class="dataArea">
                                <h2>Localidad:</h2>
                                <h2>${dates.id_Address.locality}</h2>
                                <h2> - </h2>
                                <h2>C.P.:</h2>
                                <h2>${dates.id_Address.postal}</h2>
                            </div>
                        <div class="dataArea">
                                <h2>Provincia:</h2>
                                <h2>${dates.id_Address.province}</h2>
                            </div>
                        </div>             
                            `;
            containerPrint.append(div); 
        })      
}
loadPrintArea(data.result);

