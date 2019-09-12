"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _index = _interopRequireDefault(require("./index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

describe("<Title />", function () {
  it("renders as plain text", function () {
    var wrapper = (0, _enzyme.shallow)(_react["default"].createElement(_index["default"], {
      value: "<u>My Value</u>"
    }));
    expect(wrapper.html()).toBe("<u>My Value</u>");
  });
  it("renders as children instead of value", function () {
    var wrapper = (0, _enzyme.shallow)(_react["default"].createElement(_index["default"], {
      value: "<u>My Value</u>"
    }, _react["default"].createElement("p", null, "My Children")));
    expect(wrapper.html()).toBe("<u>My Value</u>");
  });
  it("renders as children instead of value", function () {
    var wrapper = (0, _enzyme.shallow)(_react["default"].createElement(_index["default"], null, _react["default"].createElement("p", null, "My Children")));
    expect(wrapper.html()).toBe("<p>My Children</p>");
  });
  it("renders as children inside a tag with a classname", function () {
    var wrapper = (0, _enzyme.shallow)(_react["default"].createElement(_index["default"], {
      wrapper: {
        tag: "div",
        classes: "class1 class2"
      }
    }, _react["default"].createElement("p", null, "My Children")));
    expect(wrapper.html()).toBe('<div class="class1 class2"><p>My Children</p></div>');
  });
});