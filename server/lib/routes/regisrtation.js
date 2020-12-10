"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.registration = void 0;

var _express = require("express");

var _sha = _interopRequireDefault(require("crypto-js/sha256"));

var _users = require("../schemas/users");

var _helpers = require("../helpers");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var registration = (0, _express.Router)();
exports.registration = registration;
registration.post('/', /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var user, dbRes, addedUser;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            user = req.body;
            console.log(req.body);
            _context.next = 4;
            return _users.User.findOne({
              email: user.email
            });

          case 4:
            dbRes = _context.sent;

            if (dbRes) {
              _context.next = 13;
              break;
            }

            user.password = (0, _sha["default"])(user.password);
            _context.next = 9;
            return _users.User.insertMany([user]);

          case 9:
            addedUser = _context.sent;

            if (addedUser) {
              res.json({
                token: (0, _helpers.generateToken)(user.email)
              });
            } else {
              res.json((0, _helpers.sendError)('cannot_create_user'));
            }

            _context.next = 14;
            break;

          case 13:
            res.json((0, _helpers.sendError)('user_already_exists'));

          case 14:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}());