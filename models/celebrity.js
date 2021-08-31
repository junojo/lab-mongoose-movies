const mongoose = require('mongoose');

const celebritySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlenght: 3,
    maxlenght: 140
  },
  occupation: {
    type: String,
    required: true,
    minlenght: 3,
    maxlenght: 140
  },
  catchPhrase: {
    type: String,
    required: true,
    minlenght: 3,
    maxlenght: 140
  }
});

const Celebrity = mongoose.model('Celebrity', celebritySchema);

module.exports = Celebrity;
