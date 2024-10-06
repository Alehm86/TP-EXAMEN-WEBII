export const handleAlert = (text)=>{
    const alert = document.getElementById('alert')
    const textAlert = document.getElementById('textAlert')

    alert.classList.remove('hidden')
    textAlert.textContent = text
}


export const alert = ()=>{
    return`
        <div class="lblError hidden" id="alert">
            <p id="textAlert"></p>
            <button class="btnX">X</button>
        </div>
    `
}