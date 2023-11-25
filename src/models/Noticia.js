//Desarrollado por Matias Abregú

const { Schema, model } = require('mongoose');

const SchemaNoticia = new Schema({
    titulo: { type: String, required: true },
    tipoCiber: { type: String, required: true },
    descripcion: { type: String, required: true }
}, { timestamps: true });

module.exports = model('Noticia', SchemaNoticia);