const Session = require('../models/Session');
const Question = require('../models/Question');

//@desc Create a new session and linked questions
//@route  POST /api/sessions/create
//@access Private

exports.createSession = async(req , res) => {
    try {
        const {role , experience , topicsToFocus , description , questions} = req.body;
        
        const userId = req.user._id; // assuming you have a middleware setting req.user

        const session = await Session.create({
            user : userId,
            role , experience , topicsToFocus ,description
        });

        const questionDocs = await Promise.all(
            questions.map(async (q) => {
                const question = await Question.create({
                    session : session._id ,
                    question : q.question ,
                    answer : q.answer ,
                });
                return question._id;
            })
        );

    session.questions = questionDocs;
    await session.save();

    res.status(201).json({success:true ,session});
    } catch(error){
        res.status(500).json({ success : false , message : "server error"});
    }
};

// @desc Get all sessions for the logged-inuser
// @route get /api/sessions/my-sessions
// @access private

exports.getMySessions = async (req , res) => {
    try {
        const sessions = await Session.find({ user: req.user.id })
        .sort({ createdAt :-1})
        .populate("questions")
        res.status(200).json(sessions);
    } catch(error){
        res.status(500).json({ success : false , message : "server error"});
    }
};

// @desc Get a session by ID with populated questions
// @route get /api/sessions/:id
// @access private

exports.getSessionById = async (req , res) => {
    try {
        const session = await Session.findById(req.params.id)
            .populate({
                path : "questions",
                options : { sort: {isPinned:-1 , createdAt: 1}} ,
            })
            .exec();

            if(!session){
                return res
                    .status(404)
                    .json({ succcess : false , message :"Session not found"})
            }

            res.status(200).json({ success: true ,session})
    } catch(error){
        res.status(500).json({ success : false , message : "server error"});
    }
};

// @desc delete a session and its questions
// @route delete /api/sessions/:id
// @access private

exports.deleteSession = async (req , res) => { 
    try {
        const session = await Session.findById(req.params.id);

        if(!session){
            return res.status(404).json({ message: "Session not found"})
        }

        // check if the logged in user owns this session
        if(session.user.toString() !== req.user.id){
            return res
                .status(401)
                .json({ message: "Not authorized to delete this session"})
        }

        //first  delete all question linked to this session
        await Question.deleteMany({ session: session._id});
        
        // then , delete the session
        await session.deleteOne();

        res.status(200).json({ message: "Session deleted successfully"});
    } catch(error){
        res.status(500).json({ success : false , message : "server error"});
    }
};