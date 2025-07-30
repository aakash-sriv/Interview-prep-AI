const Session = require('../models/Session');
const Question = require('../models/Question');

//@desc Create a new session and linked questions
//@route  POST /api/sessions/create
//@access Private

exports.createSession = async(req , res) => {
    try {
    } catch(error){
        res.status(500).json({ success : false , message : "server error"})
    }
}