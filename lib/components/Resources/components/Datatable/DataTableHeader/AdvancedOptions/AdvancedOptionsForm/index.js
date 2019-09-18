"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireDefault(require("react"));

var _lodash = _interopRequireDefault(require("lodash"));

var _Draggable = _interopRequireDefault(require("../Draggable"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var AdvancedOptionsForm =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2["default"])(AdvancedOptionsForm, _React$Component);

  function AdvancedOptionsForm(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, AdvancedOptionsForm);
    _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(AdvancedOptionsForm).call(this, props));
    var excludedColumns = props.excludedColumns,
        columnOrder = props.columnOrder;

    if (Object.keys(excludedColumns).length === 0 && excludedColumns.constructor === Object) {
      _this.props.columns.map(function (column) {
        var columnKey = column.accessor;
        excludedColumns[columnKey] = true;
        return excludedColumns;
      });
    }

    if (columnOrder.length === 0) {
      columnOrder = _this.props.columns;
    }

    _this.state = {
      excludedColumns: excludedColumns,
      columnOrder: columnOrder
    };
    _this.onDrop = _this.onDrop.bind((0, _assertThisInitialized2["default"])(_this));
    _this.moveCard = _this.moveCard.bind((0, _assertThisInitialized2["default"])(_this));
    _this.handleColumnChange = _this.handleColumnChange.bind((0, _assertThisInitialized2["default"])(_this));
    return _this;
  }

  (0, _createClass2["default"])(AdvancedOptionsForm, [{
    key: "onDrop",
    value: function onDrop(draggableItem) {
      var _this2 = this;

      var columnOrder = _lodash["default"].concat([], this.state.columnOrder, draggableItem);

      this.setState(function (prevState) {
        return {
          columnOrder: columnOrder
        };
      }, function () {
        return _this2.props.reorderColumns(_this2.state.columnOrder);
      });
    }
  }, {
    key: "moveCard",
    value: function moveCard(oldIndex, newIndex) {
      var _this3 = this;

      var columnOrder = _lodash["default"].concat([], this.state.columnOrder);

      _lodash["default"].remove(columnOrder, function (n, index) {
        if (index === oldIndex) {
          return true;
        }

        return false;
      });

      var componentToMove = this.state.columnOrder[oldIndex];

      if (oldIndex < newIndex) {
        // 2 to 4
        var modifiedNewIndex = newIndex;
        columnOrder.splice(modifiedNewIndex, 0, componentToMove);
      } else if (oldIndex > newIndex) {
        // 4 to 2
        columnOrder.splice(newIndex, 0, componentToMove);
      } else if (oldIndex === newIndex) {
        return;
      }

      this.setState(function (prevState) {
        return {
          columnOrder: columnOrder
        };
      }, function () {
        return _this3.props.reorderColumns(_this3.state.columnOrder);
      });
    }
  }, {
    key: "handleColumnChange",
    value: function handleColumnChange(event) {
      var _this4 = this;

      var target = event.target;
      var value = target.value;
      this.setState(function (prevState) {
        return {
          excludedColumns: _objectSpread({}, prevState.excludedColumns, (0, _defineProperty2["default"])({}, value, !prevState.excludedColumns[value]))
        };
      }, function () {
        return _this4.props.toggleColumns(_this4.state.excludedColumns);
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
          excludedColumns = _this$state.excludedColumns,
          columnOrder = _this$state.columnOrder;
      return _react["default"].createElement("div", {
        className: "advanced_table_setting_modal"
      }, this.props.columns && _react["default"].createElement("form", null, _react["default"].createElement(_Draggable["default"], {
        ondrop: this.onDrop,
        movecard: this.moveCard,
        onchange: this.handleColumnChange,
        excludedColumns: excludedColumns
      }, columnOrder)));
    }
  }]);
  return AdvancedOptionsForm;
}(_react["default"].Component);

var _default = AdvancedOptionsForm;
exports["default"] = _default;