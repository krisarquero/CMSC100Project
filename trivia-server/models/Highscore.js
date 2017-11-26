const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const HighscoreSchema = new Schema({
  name: { type: String, default: '' },
  score: { type: Number},
  categories: [String]
});

mongoose.model('Highscore', HighscoreSchema);
