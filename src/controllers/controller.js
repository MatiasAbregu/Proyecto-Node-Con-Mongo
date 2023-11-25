//Desarrollado por Matias Abregú

const rutas = {};
const Noticia = require('../models/Noticia');
const passport = require('passport');

rutas.cargarInicio = async (req, res) => {
    const noticias = await Noticia.find().lean();
    res.render('inicio', { noticias });
};

rutas.cargarIS = (req, res) => {
    res.render('inicioSesion');
}

rutas.iniciarSesion = passport.authenticate('local', {
    failureRedirect: '/iniciar-sesion',
    successRedirect: '/'
});

rutas.cerrarSesion = (req, res) => {
    req.logout((err) => {
        if(err) return next(err);
        res.redirect('/iniciar-sesion');
    });
};

rutas.eliminar = async (req, res) => {
    await Noticia.findByIdAndDelete(req.params.id);
    res.redirect('/');
}

rutas.cargarCrearNoti = (req, res) => {
    res.render("crearNoticia");
}

rutas.crearNoticia = async (req, res) => {
    const { tipoCiber, titulo, descripcion } = req.body;
    const nuevaNoticia = new Noticia({titulo, tipoCiber, descripcion});
    await nuevaNoticia.save();
    res.redirect('/');
};

rutas.cargarActulizarNoti = async (req, res) => {
    const noticia = await Noticia.findById(req.params.id); 
    res.render("crearNoticia", noticia);
}

rutas.actualizarNoticia = async (req, res) => {
    const { titulo, tipoCiber, descripcion } = req.body;
    await Noticia.findByIdAndUpdate(req.params.id, {titulo, tipoCiber, descripcion});
    res.redirect("/");
}

module.exports = rutas;