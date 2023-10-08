const { Router } = require('express');
const studentController = require('../controllers/student.controller'); // Requerimos a quien procesa la peticion
const router = new Router();

router.get('/getAll', studentController.getAll);
router.get('/getOne/:propDNI', studentController.getOne);
router.post('/insertOne', studentController.insertOne);
router.put('/updateOne/:propDNI', studentController.updateOne);
router.delete('/deleteOne/:propDNI', studentController.deleteOne)

module.exports = router; //Exportamos la instancia