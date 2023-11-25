//Desarrollado por Matias Abregú
const express = require("express");
const path = require("path");
const handlebars = require("express-handlebars");
const session = require('express-session');
const methodOverride = require("method-override");
const passport = require('passport');

const app = express();
require('./security/passport');

app.set('port', process.env.PORT || 4000);
app.set('views', path.join(__dirname, "views"));
app.engine('.hbs', handlebars.engine({ 
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs'
}));
app.set('view engine', '.hbs');

app.use(express.urlencoded({extended: false}));
app.use(methodOverride('_method'));
app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());

app.use((req, res, next) => {
    res.locals.user = req.user || null;
    next();
});

app.use(require("./routes/routes"))
app.use(express.static(path.join(__dirname, 'public')));

module.exports = app;