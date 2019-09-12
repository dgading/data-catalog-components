"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _ResultsList = _interopRequireDefault(require("./ResultsList"));

var _SearchListItem = _interopRequireDefault(require("../SearchListItem"));

/* eslint-disable */
var SearchList = function SearchList(_ref) {
  var items = _ref.items,
      message = _ref.message;
  return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement("div", {
    className: "results-message"
  }, message), _react["default"].createElement(_ResultsList["default"], {
    items: items,
    className: "search-list",
    component: _SearchListItem["default"]
  }));
};

SearchList.defaultProps = {
  message: "",
  items: []
};
SearchList.propTypes = {
  message: _propTypes["default"].string,
  items: _propTypes["default"].any
};
var _default = SearchList;
exports["default"] = _default;