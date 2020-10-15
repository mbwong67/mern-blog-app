const mongoose = require("mongoose");
const User = require("../models/User").schema;

const blogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    max: 256,
    min: 5,
  },
  bannerURL: {
    type: String,
    required: false,
  },
  subtitle: {
    type: String,
    min: 3,
    max: 1024,
  },
  author: {
    type: String,
  },
  content: {
    type: String,
    min: 10,
    max: 3048,
  },
  date: {
    type: String,
  },
  avatar: {
    type: String,
  },
  authorID:{
    type:String
  }
});

module.exports = mongoose.model("Blog", blogSchema);
