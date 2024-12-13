import { getSales, findSalesByMonth } from "../../../api/sales.api.js";

const data = await getSales()

const containerSales = document.querySelector("#contenedor-productos");
const Total = document.getElementById('total');
const btnDate = document.getElementById('btnDate')

function cargarVentas(regSales){
  
    containerSales.innerHTML = "";
    regSales.forEach(dates => {                    
        const div = document.createElement("div")
        div.classList.add("sales");
        div.innerHTML = `
                        <div class="salesRow">
                            <h4 class="ancho center">${dates.fecha}</h4>
                            <h4 class="ancho center">${dates._id}</h4>
                            <h4 class="ancho center">${dates.metodo_pago}</h4>
                            <h4 class="ancho right">$ ${dates.total},00</h4>   
                        </div>
                    `;
        containerSales.append(div);
    })   
}
cargarVentas(data);

function total(e){
    const totalCantidad = e.reduce((acc, item) => acc + item.total, 0);
    Total.innerText =(`Total: $${totalCantidad},00`); 
}
total(data)

btnDate.addEventListener('click', async (e)=>{
    e.preventDefault()
    let inpMes = document.getElementById('inpMes').value;

    if(inpMes<13){
        const res = await findSalesByMonth(inpMes)

        if(res.status){
            cargarVentas(res.result);
            total(res.result);
        }else{
            console.log('Error!')
        }
    }else{
        cargarVentas(data);
        total(data)
    }
})




