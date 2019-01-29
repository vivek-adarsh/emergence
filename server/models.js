const mongoose = require('mongoose')
const schema = mongoose.Schema

const postModel = new schema({
  title: { type: String} ,
  body: { type: String} ,
  image: { type: String} ,
  latitude: { type: Number} ,
  longitude: { type: Number} ,
})

//List all models for export
module.exports = {
  Post: mongoose.model('post', postModel)
}