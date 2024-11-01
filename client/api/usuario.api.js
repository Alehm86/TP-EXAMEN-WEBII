import {getSession} from "../private/controller/sessionStorage_controller.js";

const nomUsuario = document.getElementById('nomUsu')
const user = getSession('user')

nomUsuario.textContent = `${user.nombre} ${user.apellido}`




