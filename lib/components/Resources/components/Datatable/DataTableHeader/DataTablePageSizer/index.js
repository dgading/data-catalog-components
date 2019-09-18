"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var DataTablePageSizer = function DataTablePageSizer(_ref) {
  var label = _ref.label,
      pageSizeChange = _ref.pageSizeChange,
      currentOption = _ref.currentOption,
      options = _ref.options,
      wrapperClass = _ref.wrapperClass;
  return _react["default"].createElement("div", {
    className: wrapperClass
  }, _react["default"].createElement("label", null, label, _react["default"].createElement("select", {
    value: currentOption,
    onChange: pageSizeChange
  }, options.map(function (option, index) {
    return _react["default"].createElement("option", {
      key: index,
      value: option.value
    }, option.label);
  }))));
};

DataTablePageSizer.defaultProps = {
  label: 'Rows per page',
  wrapperClass: 'page-size-options',
  options: [{
    defaultChecked: true,
    label: '20',
    value: '20'
  }, {
    label: '50',
    value: '50'
  }, {
    label: '100',
    value: '100'
  }]
};
DataTablePageSizer.propTypes = {
  label: _propTypes["default"].string,
  wrapperClass: _propTypes["default"].string,
  options: _propTypes["default"].arrayOf(_propTypes["default"].shape({
    defaultChecked: _propTypes["default"].bool,
    label: _propTypes["default"].string,
    value: _propTypes["default"].string
  }))
};
var _default = DataTablePageSizer;
exports["default"] = _default;