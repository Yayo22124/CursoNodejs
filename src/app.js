// Imports
const Express = require('express');
const Morgan = require('morgan');
const studentRouter = require('./routes/student.router')
const teacherRouter = require('./routes/teacher.router')

// Instanciamos express
const app = Express();

// Settings
        // ------- Configuraciones de la aplicacion (set) ------- 
    // Puerto para listen
app.set('PORT', process.env.PORT || 3000);
    // View Engine
app.set('view engine', 'ejs');

// Middlewares
    // express
app.use(Express.json());
    // urlencoded  (permite que al mandar html solo reciba texto plano de los inputs)
app.use(Express.urlencoded({ extended: false }));
    // morgan
app.use(Morgan('dev'));
    // Router
app.use('/api/utxj/students/',studentRouter);
app.use('/api/utxj/teachers/',teacherRouter);

module.exports = app;