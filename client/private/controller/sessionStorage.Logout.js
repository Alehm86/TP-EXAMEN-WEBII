const getUserData = (key)=>{
    return JSON.parse(sessionStorage.getItem(key))   
}

const logOut = (key)=>{
    sessionStorage.removeItem(key)
}

window.addEventListener('load',()=>{
    
    const user = getUserData('user')

    document.getElementById('btnLogout').addEventListener('click',()=>{
        logOut('user')
        window.location.href = 'http://localhost:3006';
    })

})