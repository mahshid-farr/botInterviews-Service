const mongoose = require('mongoose')

mongoose.model("BotInterviewResponse", {
    //time_length, response_text, response_audio, response_video, question_id
    time_length:{
        type: Number,
        require: true
    },

    response_text:{
        type: String,
        require: true
    },
    
    response_audio:{
        type: String,
        require: false
    },
    response_video:{
        type: String,
        require: false
    },

    question_id:{
        type: mongoose.SchemaTypes.ObjectId,
        ref: "BotQuestion",
        require: true
    }

});