const studentDAO = require('../DAO/student.dao')
const studentController = {};

// El controlador es quien maneja la peticion por ello lleva req y res
studentController.getAll = async (req, res) => {
    studentDAO.getAll()
        .then(students => {
            res.json(students);
        })
        .catch(err => {
            res.json({ 'message': `Querie Failed by: ${err}` });
        });
}

studentController.getOne = async (req, res) => {
    studentDAO.getOne(req.params.propDNI)
        .then(student => {
            if (student != null) {
                res.json(student);
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
            res.json({ message: result });
        })
        .catch(err => {
            res.json({ message: `Request failed by: ${err}` });
        })
}


studentController.updateOne = async (req, res) => {
    studentDAO.updateOne(req.params.propDNI, req.body)
        .then(result => {
            res.json({ message: result });
        })
        .catch(err => {
            res.json({ message: `Request failed by: ${err}` });
        })
}

studentController.deleteOne = async (req, res) => {
    studentDAO.deleteOne(req.params.propDNI)
        .then(result => {
            res.json({ message: result });
        })
        .catch(err => {
            res.json({ message: `Request failed by: ${err}` });
        })

}

module.exports = studentController;