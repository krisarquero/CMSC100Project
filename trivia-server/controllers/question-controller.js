const Question = require('mongoose').model('Question');

exports.findAll = (req, res) => {
  Question.find({}, (err, questions) => {
    if (err) {
      console.log(err);
      res.send({});
    } else {
      res.send(questions);
    }
  });
}

exports.findById = (req, res) => {
  const _id = req.params._id;

  Question.findOne({ _id }, (err, question) => {
    if (err) {
      console.log(err);
      res.send({});
    } else {
      res.send(question);
    }
  });
}

exports.add = (req, res) => {
  const newQuestion = new Question(req.body);

  newQuestion.save((err, question) => {
    if (err) { res.send({}); }
    else {
      res.json(question);
    }
  });
}

exports.delete = (req, res) => {
  const _id = req.body._id;

  Question.remove({ _id }, (err) => {
    if (err) {
      res.send(false);
    } else {
      res.send(true);
    }
  });
}

exports.selectQuestions = (req, res) => {
  // var cat = req.body.category;
  var numberOfQuestions = parseInt(req.body.count);
  var total = 0;
  var trivia_questions = {
    items: []
  };

  Question.find({'category': req.body.category }, (err, questions) => {
      total = total + parseInt(questions.length);
      // console.log('questions.length ' + total + ' ? ' + questions.length);
      var count = 0;
      while(count < numberOfQuestions){
        // Get a random entry
        var random = Math.floor(Math.random() * total);
        trivia_questions.items.push(questions[random]);
        count = count + 1;
      }
      console.log(trivia_questions);
      res.send(trivia_questions);
  });
}

exports.edit = (req, res) => {
  var query = { "_id": req.body._id };
  Question.findOneAndUpdate(query,
    { "question": req.body.question,
      "category": req.body.category,
      "type": req.body.type,
      "difficulty": req.body.difficulty,
      "answer": req.body.answer,
      "choices": req.body.choices }, function(err, doc){
      if(err){
          console.log("Something wrong when updating data!");
          console.log(false);
          res.send(false);
      }
      console.log(doc);
      res.send(doc);
  });

}
