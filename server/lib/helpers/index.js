"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.generateToken = exports.sendError = void 0;

var _env = require("../env");

var _encUtf = _interopRequireDefault(require("crypto-js/enc-utf8"));

var _users = require("../schemas/users");

var _aes = require("crypto-js/aes");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var OFFSET = 1000 * 60 * 60 * 24; // a day

var sendError = function sendError(error) {
  return {
    error: error
  };
};

exports.sendError = sendError;

var generateToken = function generateToken(email) {
  return (0, _aes.encrypt)("".concat(email, "|").concat(new Date().valueOf() + OFFSET), _env.CYPHER).toString();
}; // export const checkToken = async (req, res, next) => {
//     let { token } = req.body
//     if (token) {
//         let [email, expDate] = decrypt(token, CYPHER).toString(utf8).split('|')
//         if (expDate <= new Date().valueOf()) {
//             res.json(sendError('token_expired'))
//         } else {
//             let user = await User.findOne({ email })
//             if (user) {
//                 req.currentUser = user
//                 delete req.body.token
//                 next()
//             } else {
//                 res.json(sendError('invalid_token'))
//             }
//         }
//     } else {
//         res.json(sendError('no_token_sent'))
//     }
// }


exports.generateToken = generateToken;