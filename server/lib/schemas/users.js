"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.User = void 0;

var _env = require("../env");

var _mongoose = require("mongoose");

var userSchema = new _mongoose.Schema({
  email: String,
  password: String,
  date_created: {
    type: Date,
    "default": Date.now
  },
  stories: [{
    ref: 'Stories',
    type: _mongoose.Schema.Types.ObjectId
  }],
  avatar: {
    type: String,
    "default": "".concat(_env.URL, "/images/avatars/default.png")
  },
  username: {
    type: String,
    "default": "sbuser@".concat(Math.random().toString().slice(2, 8))
  }
});
var User = (0, _mongoose.model)('Users', userSchema);
exports.User = User;