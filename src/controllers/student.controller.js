const studentDAO = require('../DAO/student.dao')
const studentController = {};

studentController.getView = async (req, res) => {
}
// El controlador es quien maneja la peticion por ello lleva req y res
studentController.getAll = async (req, res) => {
    studentDAO.getAll()
        .then(students => {
            // res.json(students);
            res.render('../src/views/index.student.ejs', {students});

        })
        .catch(err => {
            res.json({ 'mess    age': `Querie Failed by: ${err}` });
        });
}

studentController.getOne = async (req, res) => {
    studentDAO.getOne(req.params.propDNI)
        .then(student => {
            if (student != null) {
                res.render('../src/views/edit.student.ejs', { student })
            } else {
                res.json({ 'message': 'Student not found' })
            }
        })
        .catch(err => {
            res.json({ 'message': `Querie Failed by: ${err}` });
        });

}

studentController.insertOne = async (req, res) => {
    studentDAO.insertOne(req.body)
        .then(result => {
            res.redirect('/api/utxj/students/getAll')
        })
        .catch(err => {
            res.json({ message: `Request failed by: ${err}` });
        })
}


studentController.updateOne = async (req, res) => {
    studentDAO.updateOne(req.params.propDNI, req.body)
        .then(result => {
            res.redirect('/api/utxj/students/getAll')
        })
        .catch(err => {
            res.json({ message: `Request failed by: ${err}` });
        })
}

studentController.deleteOne = async (req, res) => {
    studentDAO.deleteOne(req.params.propDNI)
        .then(result => {
            res.redirect('/api/utxj/students/getAll')
        })
        .catch(err => {
            res.json({ message: `Request failed by: ${err}` });
        })

}

module.exports = studentController;