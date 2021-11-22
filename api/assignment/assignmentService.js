const assignmentModel = require('./assignmentModel');

exports.list = (classID) => assignmentModel.getAssignment(classID);