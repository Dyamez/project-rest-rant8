const mongoose = require('mongoose')

const placeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  pic: String,
  cuisines: { type: String, required: true },
  city: { type: String, default: 'Parts Unknown' },
  state: { type: String, default: 'California' },
  founded: Number
})

module.exports = mongoose.model('Place', placeSchema)