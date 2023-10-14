const { Router } = require('express');
const studentController = require('../controllers/student.controller'); // Requerimos a quien procesa la peticion
const router = new Router();

router.get('/getView', studentController.getView);
router.get('/getAll', studentController.getAll);
router.get('/getOne/:propDNI', studentController.getOne);
router.post('/insertOne', studentController.insertOne);
router.post('/updateOne/:propDNI', studentController.updateOne);
router.get('/deleteOne/:propDNI', studentController.deleteOne)

module.exports = router; //Exportamos la instancia