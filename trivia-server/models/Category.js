const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CategorySchema = new Schema({
  name: { type: String, defualt: '' }
});

mongoose.model('Category', CategorySchema);
