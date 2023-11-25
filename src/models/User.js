//Desarrollado por Matias Abregú

const { Schema, model } = require('mongoose');

const Usuario = new Schema({
    nombre: { type: String, required: true },
    contrasena: { type: String, required: true }
});

module.exports = model('Usuario', Usuario);