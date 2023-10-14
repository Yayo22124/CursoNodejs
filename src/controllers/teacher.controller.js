const teacherDAO = require('../DAO/teacher.dao')
const teacherController = {};

teacherController.getAll = async (req, res) => {
    teacherDAO.getAll()
        .then(teachers => {
            res.render('../src/views/index.teacher.ejs', {teachers})
        })
        .catch(err => {
            res.json({'message': `Querie Failed by: ${err}`})
        })
}
teacherController.getOne = async (req, res) => {
    teacherDAO.getOne(req.params.propENI)
        .then(teacher => {
            if (teacher != null) {
                res.render('../src/views/edit.teacher.ejs', {teacher})
            } else {
                res.json({"message": "Teacher Not Found"});

            }
        })
        .catch(err => {
            res.json({'message': `Querie Failed by: ${err}`})
        })
}

teacherController.insertOne = async (req, res) => {
    teacherDAO.insertOne(req.body)
        .then(result => {
            res.redirect('/api/utxj/teachers/getAll')
        })
        .catch(err => {
            res.json({'message': `Querie Failed by: ${err}`})
        })
}

teacherController.updateOne = async (req, res) => {
    teacherDAO.updateOne(req.params.propENI, req.body)
        .then(result => {
            res.redirect('/api/utxj/teachers/getAll');
        })
        .catch(err => {
            res.json({ message: `Request failed by: ${err}` });
        })
}


teacherController.deleteOne = async (req, res) => {
    teacherDAO.deleteOne(req.params.propENI)
        .then(result => {
            res.redirect('/api/utxj/teachers/getAll')
        })
        .catch(err => {
            res.json({ message: `Request failed by: ${err}` });
        })

}

module.exports = teacherController;