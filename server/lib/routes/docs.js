"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.docs = void 0;

var _express = require("express");

var docs = (0, _express.Router)();
exports.docs = docs;
docs.get('/', function (req, res) {
  console.log(req.body);
  res.send("this is docs");
});