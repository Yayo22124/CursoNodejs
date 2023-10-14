// imports
const mongoose = require('mongoose');
const { PORT } = require('./app');
require('dotenv').config();


mongoose.connect(`mongodb+srv://hazielortiz04:022124Haziel@cluster0.ewjuf1n.mongodb.net/ticontrol?retryWrites=true&w=majority`)
    .then(db => {
        console.log(` =================================== \n\n| ¡¡ [MongoDB Atlas]: Connected !!  |\n|    [DataBase]: ${db}    |\n\n =================================== \n`);
    })
    .catch(err => console.error(err));