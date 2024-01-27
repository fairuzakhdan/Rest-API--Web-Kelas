const express = require('express');

const router = express.Router();

const studentController = require('../controllers/student');
const wrapAsync = require('../utils/wrapAsync');

router.route('/')
  .get(wrapAsync(studentController.getAllStudent))
  .post(wrapAsync(studentController.createStudent));

router.route('/:studentId')
  .get(wrapAsync(studentController.getStudentById))
  .patch(wrapAsync(studentController.updateStudentById));

module.exports = router;
