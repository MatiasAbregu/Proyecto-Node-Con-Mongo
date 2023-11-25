//Desarrollado por Matias Abregú

const passport = require('passport');
const LS = require('passport-local').Strategy;
const Usuario = require('../models/User');

passport.use(new LS({
    usernameField: 'nombre',
    passwordField: 'contrasena'
}, async (nombre, contrasena, done) => {
    const usuario = await Usuario.findOne({nombre});
    
    if(!usuario) return done(null, false);
    else {
        if(usuario.contrasena === contrasena){
            return done(null, usuario);
        } else {
            return done(null, false);
        }
    }
}));

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
    try {
        const user = await Usuario.findById(id);
        done(null, user);
    } catch (error) {
        done(error, null);
    }
});