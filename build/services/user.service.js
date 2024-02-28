"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.userLogin = exports.getAllUsers = exports.createUser = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _user = _interopRequireDefault(require("../models/user.model"));
var _bcrypt = _interopRequireDefault(require("bcrypt"));
//get all users
var getAllUsers = exports.getAllUsers = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
    var data;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return _user["default"].find();
        case 2:
          data = _context.sent;
          return _context.abrupt("return", data);
        case 4:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function getAllUsers() {
    return _ref.apply(this, arguments);
  };
}();

//create new user
var createUser = exports.createUser = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(body) {
    var email, password, phone, userCheck, salt, hash, data, err, _err, _err2;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          email = body.email;
          password = body.password;
          phone = body.mobile;
          _context2.next = 5;
          return _user["default"].findOne({
            email: email
          });
        case 5:
          userCheck = _context2.sent;
          if (userCheck) {
            _context2.next = 32;
            break;
          }
          salt = 10;
          hash = _bcrypt["default"].hashSync(body.password, salt);
          body.password = hash;
          if (!(password.length >= 8 && phone.length >= 10)) {
            _context2.next = 18;
            break;
          }
          _context2.next = 13;
          return _user["default"].create(body);
        case 13:
          data = _context2.sent;
          console.log("goood");
          return _context2.abrupt("return", data);
        case 18:
          if (!(password.length < 8)) {
            _context2.next = 25;
            break;
          }
          err = {};
          err.msg = "Password is too small!";
          err.param = "password";
          throw err;
        case 25:
          if (!(phone.length < 10)) {
            _context2.next = 30;
            break;
          }
          _err = {};
          _err.msg = "Enter a valid Mobile Number!";
          _err.param = "phone";
          throw _err;
        case 30:
          _context2.next = 36;
          break;
        case 32:
          _err2 = {};
          _err2.msg = "User Email Already Exists!";
          _err2.param = "email";
          throw _err2;
        case 36:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return function createUser(_x) {
    return _ref2.apply(this, arguments);
  };
}();
var userLogin = exports.userLogin = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(email, password) {
    var data, err, _err3;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return _user["default"].findOne({
            email: email
          });
        case 2:
          data = _context3.sent;
          if (!(data != null)) {
            _context3.next = 14;
            break;
          }
          if (!_bcrypt["default"].compareSync(password, data.password)) {
            _context3.next = 8;
            break;
          }
          return _context3.abrupt("return", data);
        case 8:
          err = {};
          err.msg = "Password does not Match!";
          err.param = "password";
          throw err;
        case 12:
          _context3.next = 18;
          break;
        case 14:
          _err3 = {};
          _err3.msg = "Email does not Exists!";
          _err3.param = "email";
          throw _err3;
        case 18:
        case "end":
          return _context3.stop();
      }
    }, _callee3);
  }));
  return function userLogin(_x2, _x3) {
    return _ref3.apply(this, arguments);
  };
}();