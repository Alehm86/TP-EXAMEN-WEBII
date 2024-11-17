import {getSession} from "../private/controller/sessionStorage_controller.js";

const nomUser = document.getElementById('nomUsu')
const user = getSession('user')

nomUser.textContent = `${user.nombre} ${user.apellido}`




