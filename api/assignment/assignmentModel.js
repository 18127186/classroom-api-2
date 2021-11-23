const db = require("../../database");

exports.getAssignment = (classID) => db.execute(
    "SELECT *" 
    + `FROM assignments WHERE assignments.class_id = '${classID}'`);
    

exports.createAssignment = (assignObj) => db.execute(
    `INSERT INTO assignments (class_id, topic, description, creator, deadline, grade)  
     VALUES ('${assignObj.idClass}', '${assignObj.topic}', '${assignObj.description}', 
            '${assignObj.creator}', '${assignObj.deadline}', '${assignObj.grade}')`);

exports.deleteAssignment = (idAssign) => db.execute(
    `DELETE FROM assignments 
     WHERE id = '${idAssign}'`);

exports.updateAssignment = (assignObj) => db.execute(
    `UPDATE assignments 
    SET topic = '${assignObj.topic}', 
        description = '${assignObj.description}', 
        deadline = '${assignObj.deadline}', 
        grade = '${assignObj.grade}' 
    WHERE (id = '${assignObj.id}');`
);     