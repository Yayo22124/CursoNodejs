// imports
const mongoose = require('mongoose');
const { PORT } = require('./app')

// Credentials
const user = "hazielortiz04";
const passwd = "022124Haziel";
const db = "ticontrol"

mongoose.connect(`mongodb+srv://${user}:${passwd}@cluster0.ewjuf1n.mongodb.net/${db}?retryWrites=true&w=majority`)
    .then(db => {
        console.log(` =================================== \n\n| ¡¡ [MongoDB Atlas]: Connected !!  |\n|    [DataBase]: ${db}    |\n\n =================================== \n`);
    })
    .catch(err => console.error(err));