//load express
const express = require('express')
const app = express()

const port = process.env.PORT || 8080;

//load body parser
const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

//load mongoose
const mongoose = require('mongoose')

//load models
require('./model/botInterviewResponse')
const BotResponse = mongoose.model("BotInterviewResponse")
//load models
require('./model/botInterviewSession')
const BotSession = mongoose.model("BotInterviewSession")

//connect
mongoose.connect("mongodb+srv://AcornPurpleSquirrel:c5g83kCRgzjBKqNE@acorn.bzwjn.mongodb.net/botInterviewsService", { useNewUrlParser: true, useUnifiedTopology: true }, () => {
  console.log("Database is connected!")
});

/*//create function for response
app.post('/addResponse', (req, res) => {
  var newResponse = {
    time_length: req.body.time_length,
    response_text: req.body.response_text,
    response_audio: req.body.response_audio,
    response_video: req.body.response_video,
    question_id: mongoose.Types.ObjectId(req.body.question_id)
  }
  //create a new response
  var response = new BotResponse(newResponse)

  response.save().then(() => {
    console.log("One new response is created successfully");
  }).catch((err) => {
    if (err) {
      throw err
    }
  })
  res.send("One new response is created successfully")
});*/

//create function for session
app.post('/addSession', (req, res) => {
  //create a new session
  var session = new BotSession(req.body)
  session.save().then(() => {
    console.log("One new session is created successfully");
  }).catch((err) => {
    if (err) {
      throw err
    }
  })
  res.send("One new session is created successfully")
});

//read function to get all sessions
app.get("/getAllSessions", (req, res)=>{
  BotSession.find().then((sessions)=>{
    res.json(sessions)
  }).catch((err)=>{
   if(err){
     throw err
   }
  })
});

app.listen(8080, () => {
    console.log("Server started on: " + port)
  });