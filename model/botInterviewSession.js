const mongoose = require('mongoose')

mongoose.model("BotInterviewSession", {
    //start_time, end_time, botInterviewScenario, botInterviewResponse (time_length, response_text, response_audio, response_video, question_id)
    start_time: {
        type: Date,
        require: true
    },

    end_time: {
        type: Date,
        require: true
    },

    interview_scenario: {
            type: mongoose.SchemaTypes.ObjectId,
            ref: "InterviewScenario",
            require: true
    },

    bot_interview_response: [{
        time_length:{type: Number, require:true},
        response_text:{type: String, require: true},
        response_audio:{type: String, require: false},
        response_video:{ type: String, require: false},
        question:{
            type: mongoose.SchemaTypes.ObjectId,
            ref: "BotQuestion",
            require: true
        }
    }]
});