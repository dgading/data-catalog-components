"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  flex-grow: 2;\n  max-width: 50%;\n  h3 {\n    font-weight: 500;\n    font-size: 30px;\n    margin: 20px 0 5px;\n  }\n  p {\n    margin: 0 2em 1em 0;\n  }\n  .social {\n    margin: 1em 0;\n    i {\n      font-size: 25px;\n      opacity: 0.3;\n      margin: 0 1em 1em 0;\n      &:hover {\n        opacity: 1;\n      }\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Branding = _styledComponents["default"].div(_templateObject());

var _default = Branding;
exports["default"] = _default;