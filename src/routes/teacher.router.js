const { Router } = require('express');
const teacherController = require('../controllers/teacher.controller.js');
const router = new Router();

router.get('/getAll', teacherController.getAll);
router.get('/getOne/:propENI', teacherController.getOne);
router.post('/insertOne', teacherController.insertOne);
router.post('/updateOne/:propENI', teacherController.updateOne);
router.get('/deleteOne/:propENI', teacherController.deleteOne)

module.exports = router;