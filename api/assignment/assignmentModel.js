const db = require("../../database");

exports.getAssignment = (classID) => db.execute(
    "SELECT *" 
    + `FROM assignments WHERE assignments.class_id = '${classID}'`);
