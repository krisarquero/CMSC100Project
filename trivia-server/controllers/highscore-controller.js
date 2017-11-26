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