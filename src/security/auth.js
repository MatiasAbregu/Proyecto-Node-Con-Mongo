//Desarrollado por Matias Abregú

const control = {};

control.isAuth = (req, res, next) => {
    if(req.isAuthenticated()){
        return next();
    }
    res.redirect("/");
};

module.exports = control;