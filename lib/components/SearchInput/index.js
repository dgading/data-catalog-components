"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactRouterDom = require("react-router-dom");

var _reactstrap = require("reactstrap");

var _FontAwesomeIcon = _interopRequireDefault(require("../FontAwesomeIcon"));

var _Form = _interopRequireDefault(require("./Form"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var SearchInput =
/*#__PURE__*/
function (_React$Component) {
  _inherits(SearchInput, _React$Component);

  function SearchInput(props, context) {
    var _this;

    _classCallCheck(this, SearchInput);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(SearchInput).call(this, props, context));
    _this.handleClick = _this.handleClick.bind(_assertThisInitialized(_this));
    _this.handleString = _this.handleString.bind(_assertThisInitialized(_this));
    _this.handleReset = _this.handleReset.bind(_assertThisInitialized(_this));
    _this.state = {
      navigate: false,
      query: null,
      textEntered: false,
      value: ''
    };
    return _this;
  }

  _createClass(SearchInput, [{
    key: "handleClick",
    value: function handleClick(e) {
      e.preventDefault();
      this.setState({
        navigate: true
      });
    }
  }, {
    key: "handleString",
    value: function handleString(e) {
      e.preventDefault();
      this.setState({
        textEntered: e.target.value ? true : false,
        value: e.target.value,
        query: e.target.value
      });
    }
  }, {
    key: "handleReset",
    value: function handleReset(e) {
      e.preventDefault();
      this.setState({
        query: null,
        textEntered: false,
        value: ''
      });
    }
  }, {
    key: "render",
    value: function render() {
      var query = this.state.query;
      var placeholder = this.props.placeholder ? this.props.placeholder : "Search the Data";
      var className = this.props.className ? this.props.className : "";
      var search = this.props.component ? this.props.component : null;
      var reset = this.state.textEntered ? _react["default"].createElement(_reactstrap.Button, {
        type: "reset",
        id: "reset",
        onClick: this.handleReset
      }, _react["default"].createElement(_FontAwesomeIcon["default"], {
        icon: "times",
        fill: "#666666"
      })) : false;

      if (this.state.navigate === true) {
        return _react["default"].createElement(_reactRouterDom.Redirect, {
          to: "/search?q=".concat(query),
          component: search
        });
      }

      return _react["default"].createElement(_Form["default"], {
        className: className,
        onSubmit: this.handleClick
      }, _react["default"].createElement(_reactstrap.FormGroup, null, _react["default"].createElement(_reactstrap.Label, {
        "for": "search",
        className: "sr-only"
      }, "Search"), _react["default"].createElement(_reactstrap.Input, {
        type: "text",
        name: "search",
        id: "search",
        placeholder: placeholder,
        value: this.state.value,
        onChange: this.handleString,
        bsSize: "lg"
      }), reset, _react["default"].createElement(_reactstrap.Button, {
        type: "submit",
        id: "submit"
      }, "GO")));
    }
  }]);

  return SearchInput;
}(_react["default"].Component);

var _default = SearchInput;
exports["default"] = _default;