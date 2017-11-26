const Highscore = require('mongoose').model('Highscore');

exports.findAll = (req, res) => {
  Highscore.find({}, (err, highscores) => {
    if (err) {
      console.log(err);
      res.send({});
    } else {
      res.send(highscores);
    }
  });
}

exports.findById = (req, res) => {
  const _id = req.params._id;

  Highscore.findOne({ _id }, (err, highscore) => {
    if (err) {
      console.log(err);
      res.send({});
    } else {
      res.send(highscore);
    }
  });
}

exports.add = (req, res) => {
  const newHighscore = new Highscore(req.body);

  newHighscore.save((err, highscore) => {
    if (err) { res.send({}); }
    else {
      res.json(highscore);
    }
  });
}

exports.delete = (req, res) => {
  const _id = req.body._id;

  Highscore.remove({ _id }, (err) => {
    if (err) {
      res.send(false);
    } else {
      res.send(true);
    }
  });
}
