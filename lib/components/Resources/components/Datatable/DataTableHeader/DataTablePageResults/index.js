"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var DataTablePageResults = function DataTablePageResults(_ref) {
  var total = _ref.total,
      pageSize = _ref.pageSize,
      currentPage = _ref.currentPage,
      wrapperClass = _ref.wrapperClass,
      message = _ref.message;
  // Add one to offset the 0 array index.
  var page = currentPage + 1;
  var currentLowestResult = 1 + (pageSize * page - pageSize);
  var currentHighestResult = pageSize * page;

  if (currentHighestResult > total) {
    currentHighestResult = total;
  }

  return _react["default"].createElement("div", {
    className: wrapperClass
  }, message.length ? message : "".concat(currentLowestResult, "-").concat(currentHighestResult, " of ").concat(total, " datasets"));
};

DataTablePageResults.defaultProps = {
  wrapperClass: 'dkan-data-table-results',
  message: ''
};
DataTablePageResults.propTypes = {
  wrapperClass: _propTypes["default"].string,
  message: _propTypes["default"].string,
  total: _propTypes["default"].number.isRequired,
  pageSize: _propTypes["default"].number.isRequired,
  currentPage: _propTypes["default"].number.isRequired
};
var _default = DataTablePageResults;
exports["default"] = _default;