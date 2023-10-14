const { Schema, model } = require('mongoose');


const teacherSchema = new Schema({
    eni: {
        type: Number,
        require: true,
        unique: true
    },
    name: String,
    lastname: String,
    profession: String,
    area: String,
    salario: Number
},{
    versionKey: false,
    timestamps: true
})

module.exports = model('teacher', teacherSchema);