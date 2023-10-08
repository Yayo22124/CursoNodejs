const { Schema, model } = require('mongoose');

// El Schema permite realizar restricciones para los json que se recibiran
// Instanciamos el Schema
const studentSchema = new Schema({
    dni: {
        type: Number,
        require: true,
        unique: true
    },
    name: String,
    lastname: String,
    average: Number,
    grade: Number

}, {
    versionKey: false,
    timestamps: true
});

module.exports = model('student', studentSchema);