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