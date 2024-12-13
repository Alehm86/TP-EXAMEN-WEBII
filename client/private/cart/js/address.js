import { API } from "../../../api/api.js";
import { findAddresByIdclientAndStatus, disabledAddress} from "../../../api/address.api.js";
import { id_user } from "../../../api/user.api.js";

const id_client = id_user
const status = "enabled"
const dates = {id_client, status}
const data = await findAddresByIdclientAndStatus(dates)

const containerAddress = document.querySelector("#contenedorAddress");
let btnAddress = document.querySelectorAll(".btnNext");
let btnDelete = document.querySelectorAll(".btnDelete");
let btnEdit = document.querySelectorAll(".btnEdit");

function loadAddressClient(dataAddress){
        containerAddress.innerHTML="";   
        dataAddress.forEach(address => {
            const div = document.createElement("div")
            div.classList.add("carritoProducto");    
            div.innerHTML = `                                                 
                            <div class="filaOpc">                            
                                <div class="opcion">
                                    
                                    <button class="btnDelete" id="${address._id}"><i class="bi bi-trash"></i></button>
                                    
                                    <a href="${API}/private/cart/pages/editAddress.html">
                                        <button class="btnEdit" id="${address._id}"><i class="bi bi-pencil-square"></i></button>
                                    </a>

                                    <label class="labelAddress">${address.locality}</label>
                                    <label class="labelAddress">C.P: ${address.postal}</label>
                                    <label class="labelAddress">${address.address +" "+address.height}</label>
                                    <label class="labelAddress">${address.province}</label>
                                    <a href="${API}/private/cart/finalizarCompra.html">
                                        <button class="btnNext" id="${address._id}"><i class="bi bi-truck"></i></button> 
                                    </a>
                                </div>                              
                            </div>                                             
                            `;
            containerAddress.append(div);  
        })
        actionBtnSelectAddress();
        actionBtnDelete();
        actionBtnEditAddress();
}
loadAddressClient(data.result);

function actionBtnSelectAddress(){
    btnAddress = document.querySelectorAll(".btnNext");
    btnAddress.forEach(boton => {
        boton.addEventListener("click", selectAddress);
    });
}

function selectAddress(e){
    const idInput = e.currentTarget.id 
    localStorage.setItem("idAddress", JSON.stringify(idInput)); 
}

function actionBtnEditAddress(){
    btnEdit = document.querySelectorAll(".btnEdit");
    btnEdit.forEach(boton => {
        boton.addEventListener("click", editAddress);
    });
}

function editAddress(e){
    const idInput = e.currentTarget.id 
    localStorage.setItem("editAddress", JSON.stringify(idInput)); 
}

function actionBtnDelete(){
    btnDelete = document.querySelectorAll(".btnDelete");
    btnDelete.forEach(boton => {
        boton.addEventListener("click", deleteAddress);
    });
}

async function deleteAddress(e){
    const _id = e.currentTarget.id 
    const status = "disabled"
    const deldates = {_id, status}

    const isConfirmed = confirm("¿Estás seguro de que deseas eliminar este elemento?");
    if (!isConfirmed) {
        return;
    }
    
    const res = await disabledAddress(deldates)

    if(res.status){
        window.location.href = "http://localhost:3006/private/cart/pages/address.html"
    }else{
        console.log('Error al eliminar dirección!')
    }
}
/*
const deleteItem = async (_id) => {
    const isConfirmed = confirm("¿Estás seguro de que deseas eliminar este elemento?");
       
    if (!isConfirmed) {
      return;
    }

  };
*/  


