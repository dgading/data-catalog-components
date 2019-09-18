"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var DataTableDensity = function DataTableDensity(_ref) {
  var items = _ref.items,
      densityChange = _ref.densityChange,
      wrapperClass = _ref.wrapperClass,
      screenReaderClass = _ref.screenReaderClass;
  return _react["default"].createElement("div", {
    className: wrapperClass
  }, "Display density", items.map(function (item, index) {
    var srClass = screenReaderClass;

    if (!item.icon) {
      srClass = '';
    }

    return _react["default"].createElement("button", {
      key: index,
      onClick: function onClick() {
        return densityChange(index);
      }
    }, item.icon && _react["default"].createElement(_react["default"].Fragment, null, item.icon), _react["default"].createElement("span", {
      className: srClass
    }, item.text));
  }));
};

DataTableDensity.defaultProps = {
  items: [{
    icon: null,
    text: 'expanded'
  }, {
    icon: null,
    text: 'normal'
  }, {
    icon: null,
    text: 'tight'
  }],
  wrapperClass: 'dkan-data-table-density',
  screenReaderClass: 'sr-only sr-only-focusable'
};
DataTableDensity.propTypes = {
  densityChange: _propTypes["default"].func.isRequired,
  buttons: _propTypes["default"].arrayOf(_propTypes["default"].shape({
    icon: _propTypes["default"].node,
    text: _propTypes["default"].string
  })),
  screenReaderClass: _propTypes["default"].string,
  wrapperClass: _propTypes["default"].string
};
var _default = DataTableDensity;
exports["default"] = _default;