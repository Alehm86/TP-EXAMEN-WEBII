import { findAddressById, editAddress } from "../../../api/address.api.js";

const idAddress = JSON.parse(localStorage.getItem("editAddress"));

const data = await findAddressById(idAddress)
const addressContainer = document.querySelector("#containerAddress");
let btnEdit = document.getElementById('btnCard')

function loadAddress(data){
  
    addressContainer.innerHTML = "";
    data.forEach(data => {                    
        const div = document.createElement("div")
        div.classList.add("producto");
        div.innerHTML = `
                        <div class="align">  
                            <div class="formPagoTarjeta" style="height: 25rem;">
                                <h3>Actualizar datos dirección:</h3> 
                                <div class="datosEnvio">
                                    <div class="direccion">
                                        <input id="inpDireccion" type="text" value="${data.address}" class="inputCard I2" required >
                                        <input id="inpNumero" type="text" value="${data.height}" class="inputCard I2" style="width: 80px; margin-left: 3px;" onkeypress="return (event.charCode >= 48 && event.charCode <= 57)" maxlength="6" required>
                                    </div>
                                    <input id="inpLocalidad" type="text" value="${data.locality}" class="inputCard I2" required>
                                    <input id="inpProvinica" type="text" value="${data.province}" class="inputCard I2" required>
                                    <input id="inpCPostal" type="text" value="${data.postal}" class="inputCard I2" onkeypress="return (event.charCode >= 48 && event.charCode <= 57)" maxlength="4" required>
                                    <button type="submit" class="btnCard" id="btnCard">Editar</button> 
                                      
                                </div>
                        </div>                             
                    </div>
                    `;
        addressContainer.append(div);
    }) 
    actionBtnEdit()            
}
loadAddress(data.result);

function actionBtnEdit(){
    btnEdit = document.querySelectorAll(".btnCard");
    btnEdit.forEach(boton => {
        boton.addEventListener("click", edit);
    });
}

async function edit(e){
    const _id = idAddress
    const address= document.querySelector('#inpDireccion').value;
    const height= document.querySelector('#inpNumero').value;
    const locality= document.querySelector('#inpLocalidad').value;
    const province= document.querySelector('#inpProvinica').value;
    const postal= document.querySelector('#inpCPostal').value;
    
    const dates = {
        _id,
        address,
        height,
        locality,
        province,
        postal
    }

    const res = await editAddress(dates)
    
    if(res.status){
        window.location.href = "http://localhost:3006/private/cart/pages/address.html"
    }else{
        console.log('Error al editar dirección!')
    }
    
}