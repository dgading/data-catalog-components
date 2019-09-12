"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactstrap = require("reactstrap");

var _Wrapper = _interopRequireDefault(require("./Wrapper"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var NavBar = function NavBar(_ref) {
  var navItems = _ref.navItems,
      expand = _ref.expand,
      defaultStyling = _ref.defaultStyling,
      customClasses = _ref.customClasses;

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      isOpen = _useState2[0],
      toggleOpen = _useState2[1];

  return _react["default"].createElement(_Wrapper["default"], {
    className: "".concat(customClasses, " ").concat(defaultStyling ? 'container-fluid main-navigation base-styles' : '')
  }, expand && _react["default"].createElement(_reactstrap.Navbar, {
    expand: "md navbar-dark"
  }, _react["default"].createElement(_reactstrap.NavbarToggler, {
    onClick: function onClick() {
      return toggleOpen(!isOpen);
    }
  }), _react["default"].createElement(_reactstrap.Collapse, {
    isOpen: isOpen,
    navbar: true
  }, _react["default"].createElement(_reactstrap.Nav, {
    className: "mr-auto"
  }, navItems.map(function (item, index) {
    return _react["default"].createElement(_reactstrap.NavItem, {
      key: index
    }, item);
  })))), !expand && _react["default"].createElement(_reactstrap.Navbar, {
    expand: false,
    className: "container"
  }, _react["default"].createElement("ul", null, navItems.map(function (item, index) {
    return _react["default"].createElement(_reactstrap.NavItem, {
      key: index
    }, item);
  }))));
};

NavBar.defaultProps = {
  defaultStyling: true,
  expand: true,
  customClasses: ""
};
var _default = NavBar;
exports["default"] = _default;