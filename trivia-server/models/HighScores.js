const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const HighScoresSchema = new Schema({
  name: { type: String, defualt: '' },
  score: { type: String, default: '' },
  categories_chosen: [String]
});

mongoose.model('HighScores', HighScoresSchema);
