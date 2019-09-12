"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireDefault(require("react"));

var _StyledLink = _interopRequireDefault(require("./StyledLink"));

var _TopicImage = _interopRequireDefault(require("./TopicImage"));

/* eslint-disable */
var IconListItem =
/*#__PURE__*/
function (_React$PureComponent) {
  (0, _inherits2["default"])(IconListItem, _React$PureComponent);

  function IconListItem() {
    (0, _classCallCheck2["default"])(this, IconListItem);
    return (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(IconListItem).apply(this, arguments));
  }

  (0, _createClass2["default"])(IconListItem, [{
    key: "render",
    value: function render() {
      var item = this.props.item;
      var color = "#0A77BD";
      var content = '';
      ;

      if (item.icon) {
        // Image provided as a url.
        content = _react["default"].createElement(_StyledLink["default"], {
          href: item.ref
        }, _react["default"].createElement("img", {
          src: item.icon,
          alt: item.alt
        }), _react["default"].createElement("div", null, item.title));
      } else {
        // Image provided by custom component.
        content = _react["default"].createElement(_StyledLink["default"], {
          href: item.ref
        }, _react["default"].createElement(_TopicImage["default"], {
          title: item.title,
          width: "80",
          height: "80",
          alt: item.title
        }), _react["default"].createElement("div", null, item.title));
      }

      ;
      return _react["default"].createElement("li", {
        key: item.identifier
      }, content);
    }
  }]);
  return IconListItem;
}(_react["default"].PureComponent);

var _default = IconListItem;
exports["default"] = _default;