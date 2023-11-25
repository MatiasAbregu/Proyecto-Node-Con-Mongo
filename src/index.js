//Desarrollado por Matias Abregú
const app = require("./server");
const bbdd = require("./databases");

app.listen(app.get('port'), ()=>{
    console.log("Server activo en el puerto " + app.get('port'));
});