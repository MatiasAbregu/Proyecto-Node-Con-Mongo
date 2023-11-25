//Desarrollado por Matias Abregú
const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://Matias:12345@cluster0.4dzivzd.mongodb.net/BBDDParaPromocion?retryWrites=true&w=majority")
.then(db => console.log("¡BBDD conectada!"))
.catch(err => console.log(err));