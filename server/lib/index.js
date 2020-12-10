"use strict";

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _express = _interopRequireDefault(require("express"));

var _cors = _interopRequireDefault(require("cors"));

var _path = _interopRequireDefault(require("path"));

var _docs = require("./routes/docs");

var _regisrtation = require("./routes/regisrtation");

var _mongoose = require("mongoose");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

(0, _mongoose.connect)('mongodb://127.0.0.1:27017/storyboard', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
var server = (0, _express["default"])();
var port = process.env.PORT || 5555;
server.use(_bodyParser["default"].json());
server.use((0, _cors["default"])()); // server.use(express.json({ limit: '3mb' }))

server.use(_express["default"]["static"](_path["default"].join(__dirname, '../public')));
server.use('/api', _docs.docs);
server.use('/api/registration', _regisrtation.registration);

_mongoose.connection.once('open', function () {
  return server.listen(port, function () {
    return console.log("Connected to Database and server is listening to port ".concat(port));
  });
});