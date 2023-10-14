const Teacher = require('../models/teacher.model');
const teacherDAO = {};

// Operaciones
    // getAll
teacherDAO.getAll = async () => {
    const teachers = await Teacher.find();

    return teachers;
}
    // getOne
teacherDAO.getOne = async (propENI) => {
    const teacher = await Teacher.findOne({eni:propENI});

    return teacher;
}
    // deleteOne
teacherDAO.deleteOne = async (propENI) => {
    const teacher = await Teacher.deleteOne({eni:propENI});

    return "Teacher Deleted";
}
    // updateOne
teacherDAO.updateOne = async (propENI, teacher) => {
    await Teacher.updateOne({eni:propENI}, teacher);

    return "Teacher Updated";
}
    // insertOne
teacherDAO.insertOne = async (teacher) => {
    const teacherSaved = new Teacher(teacher);
    await teacherSaved.save();
    return "Teacher Saved";
}

module.exports = teacherDAO;