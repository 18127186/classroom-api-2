const assignmentModel = require('./assignmentModel');

exports.list = (classID) => assignmentModel.getAssignment(classID);

exports.createAssignment = (assignObj) => assignmentModel.createAssignment(assignObj);

exports.deleteAssignment = (idAssign) => assignmentModel.deleteAssignment(idAssign);

exports.updateAssignment = (assignObj) => assignmentModel.updateAssignment(assignObj);
