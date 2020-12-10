"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Story = void 0;

var _env = require("../env");

var _mongoose = require("mongoose");

var storySchema = new _mongoose.Schema({
  title: String,
  content: String,
  category: String,
  likes: {
    type: Number,
    "default": 0
  },
  date_created: {
    type: Date,
    "default": Date.now
  },
  author: {
    ref: 'Users',
    type: _mongoose.Schema.Types.ObjectId
  },
  cover: {
    type: String,
    "default": "".concat(_env.URL, "/images/covers/default.png")
  }
});
var Story = (0, _mongoose.model)('Stories', storySchema);
exports.Story = Story;