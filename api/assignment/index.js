const express = require('express');
const router = express.Router();

const assignmentController = require('./assignmentController')

router.get('/:id', assignmentController.list);
module.exports = router;