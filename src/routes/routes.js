//Desarrollado por Matias Abregú

const { Router } = require('express');
const rutas = require('../controllers/controller');
const enrutador = Router();
const auth = require("../security/auth");

enrutador.get("/", rutas.cargarInicio);
enrutador.get("/iniciar-sesion", rutas.cargarIS);
enrutador.post("/iniciar-sesion", rutas.iniciarSesion);
enrutador.get("/cerrar-sesion", rutas.cerrarSesion);
enrutador.delete("/eliminar/:id", auth.isAuth, rutas.eliminar);
enrutador.get("/crear-noticia", auth.isAuth, rutas.cargarCrearNoti);
enrutador.post("/crear-noticia", auth.isAuth, rutas.crearNoticia);
enrutador.get("/actualizar-noticia/:id", auth.isAuth, rutas.cargarActulizarNoti);
enrutador.put("/actualizar-noticia/:id", auth.isAuth, rutas.actualizarNoticia);

module.exports = enrutador;