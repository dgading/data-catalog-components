"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  background-color: ", ";\n  color: ", ";\n  padding: 40px 0;\n\n  .page-footer {\n    display: flex;\n    align-items: flex-start;\n    align-content: flex-start;\n    flex-direction: row;\n    flex-wrap: nowrap;\n    justify-content: space-between;\n    padding-left: 30px;\n    padding-right: 30px;\n\n    h2,h3,h4 {\n      color: ", ";\n    }\n    a {\n      color: ", ";\n      text-decoration: none;\n      &:hover,\n      &:focus {\n        color: ", ";\n        text-decoration: underline;\n      }\n    }\n  }\n  ul {\n    list-style-type: none;\n    list-style: none;\n    margin: 20px 40px 0 0;\n    padding: 0;\n    a {\n      display: block;\n      font-weight: 500;\n      padding: 4px;\n      text-decoration: none;\n      &:hover,\n      &:focus {\n        text-decoration: underline;\n      }\n    }\n  }\n\n  @media screen and (max-width: 768px) {\n    .page-footer {\n      flex-wrap: wrap;\n      nav {\n        display: block;\n        width: 100%;\n        ul {\n          margin-right: 0;\n        }\n      }\n    }\n    .copyright {\n      margin-top: 30px;\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Wrapper = _styledComponents["default"].div(_templateObject(), function (props) {
  return props.theme.footerBackgroundColor;
}, function (props) {
  return props.theme.footerText;
}, function (props) {
  return props.theme.footerText;
}, function (props) {
  return props.theme.footerLink;
}, function (props) {
  return props.theme.footerLinkHover;
});

var _default = Wrapper;
exports["default"] = _default;