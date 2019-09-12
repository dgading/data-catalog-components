"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    margin: 20px 0;\n\n  "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function ThemeTag(props) {
  var Wrapper = _styledComponents["default"].div(_templateObject()); //const label = props.label ? <strong>{props.label}:</strong> : '';


  console.log(props);
  return _react["default"].createElement(Wrapper, {
    className: "theme-tag-wrapper",
    key: "dist-".concat(topic.identifier, "-").concat(i)
  }, _react["default"].createElement(TopicImage, {
    title: topic.title,
    height: "16",
    width: "16",
    fill: "#A7AAAC"
  }), topic.title);
}

var _default = Tags;
exports["default"] = _default;