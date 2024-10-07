const totalAPagar= JSON.parse(localStorage.getItem("totalAPagar"));
const contenedorCuotas = document.querySelector("#contenedorCuotas");

function loadTotal(){

    contenedorCuotas.innerHTML="";

    totalAPagar.forEach(total => {
        const div = document.createElement("div")
        div.classList.add("contenedorCuota");    
        div.innerHTML = `   
                                                           
                            <h2 class="montoPagar">Total a pagar: $${total.total}</h2>                 
                            <div class="filaOpc">
                                <div>
                                    <input type="radio" id="1" name="cuotas" value="${total.total}"/>
                                </div>                               
                                <div class="opcion">
                                    <label for="1C">1 CUOTA</label>
                                    <label for="1C">(SIN INTERES)</label>
                                    <label for="1C">1X $${total.total}.00 - (Total a pagar: $${total.total}.00)</label>
                                </div>                              
                            </div>
                            <div class="filaOpc">
                                <div>
                                    <input type="radio" id="3" name="cuotas" value="${total.total}"  />
                                </div>                               
                                <div class="opcion">
                                    <label for="3C">3 CUOTAS</label>
                                    <label for="3C">(SIN INTERES)</label>
                                    <label for="3C">3X $${(total.total / 3).toFixed(2)} - (Total a pagar: $${total.total}.00)</label>
                                </div>                              
                            </div>
                            <div class="filaOpc">
                                <div>
                                    <input type="radio" id="6" name="cuotas" value="${(total.total * 1.15).toFixed(2)}"  />
                                </div>                               
                                <div class="opcion">
                                    <label for="6C">6 CUOTAS</label>
                                    <label for="6C">(15% recargo)</label>
                                    <label for="6C">6X $${((total.total * 1.15) / 6).toFixed(2)} - (Total a pagar: $${(total.total * 1.15).toFixed(2)})</label>
                                </div>                              
                            </div>
                            <div class="filaOpc">
                                <div>
                                    <input type="radio" id="12" name="cuotas" value="${(total.total * 1.3).toFixed(2)}"  />
                                </div>                               
                                <div class="opcion">
                                    <label for="12C">12 CUOTAS</label>
                                    <label for="12C">(30% recargo)</label>
                                    <label for="12C">12X $${((total.total * 1.3) / 12).toFixed(2)} - (Total a pagar: $${(total.total * 1.3).toFixed(2)})</label>
                                </div>                              
                            </div>
                            <a href="http://localhost:3006/private/cart/html/direccion.html">
                                <button class="filaOpc btnSiguiente" id="btnSiguiente">Siguiente</button> 
                            </a> 
                                  
                            `;
        contenedorCuotas.append(div);          
    })

}

loadTotal();

const btnSiguiente = document.getElementById('btnSiguiente')
let datosCuotas = [];


btnSiguiente.addEventListener('click', ()=>{
    let elementoActivo = document.querySelector('input[name="cuotas"]:checked');
    const cuota = elementoActivo.id;
    const totalFinanciado = elementoActivo.value;
    const valCuota = ((elementoActivo.value / elementoActivo.id).toFixed(2));
    let interes=0;

    switch (cuota) {
    case '1':     
    case '3':
        interes="0%";
        break;
    case '6':
        interes="15%";
        break;
    case '12':
        interes="30%";
        break;    
    }
        
    const newItem = {cuota: cuota, interes: interes, total: totalFinanciado, valCuota: valCuota}

    datosCuotas.push(newItem);
    localStorage.setItem("datosCuotas", JSON.stringify(datosCuotas));
    
})


