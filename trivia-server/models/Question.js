const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const QuestionSchema = new Schema({
  question: { type: String, default: '' },
  category: { type: String, default: '' },
  difficulty: { type: String, default: '' },
  type: { type: String, default: '' },
  choices: [String]
});

mongoose.model('Question', QuestionSchema);
