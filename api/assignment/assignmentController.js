const assignmentService = require('./assignmentService');
const authorization = require('../../modules/authorization');
const jwt = require('jsonwebtoken');
exports.list = async function(req, res) {
    const assignment = await assignmentService.list(req.params.id);

    if (assignment) {
        res.status(200).json(assignment);
    } else {
        res.status(404).json({message: 'No assignment available!'});
    }
};