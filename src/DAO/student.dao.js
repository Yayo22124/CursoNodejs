const Student = require('../models/student.model'); //modelo 
const studentDAO = {};

// Operaciones
    // getAll
studentDAO.getAll = async () => {   
    const students = await Student.find(); // consultar y guardar los datos en students
    return students;
}

    // getOne
studentDAO.getOne = async (propDNI) => {
    const student = await Student.findOne({dni:propDNI});
    return student;
    
}

studentDAO.insertOne = async (student) => {
    const studentSaved = new Student(student);
    await studentSaved.save();
    return "Student Saved"
}


studentDAO.updateOne = async (propDNI, student) => {
    await Student.updateOne({dni:propDNI}, student);
    return "Student Updated"
}

studentDAO.deleteOne = async (propDNI) => {
    await Student.deleteOne({dni:propDNI});
    return "Student Deleted"
}

module.exports = studentDAO;