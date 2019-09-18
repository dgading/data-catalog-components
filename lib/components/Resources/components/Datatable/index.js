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

var _reactTable = _interopRequireDefault(require("react-table"));

var _Wrapper = _interopRequireDefault(require("./Wrapper"));

require("react-table/react-table.css");

var DataTable =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2["default"])(DataTable, _React$Component);

  function DataTable() {
    (0, _classCallCheck2["default"])(this, DataTable);
    return (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(DataTable).apply(this, arguments));
  }

  (0, _createClass2["default"])(DataTable, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          data = _this$props.data,
          loading = _this$props.loading,
          columns = _this$props.columns,
          pageSize = _this$props.pageSize,
          pages = _this$props.pages,
          sortedChange = _this$props.sortedChange,
          pageChange = _this$props.pageChange,
          filterChange = _this$props.filterChange,
          index = _this$props.index;
      var style = this.props.density ? "".concat(this.props.density, " -striped -highlight") : "-striped -highlight";
      return _react["default"].createElement(_Wrapper["default"], null, _react["default"].createElement(_reactTable["default"], {
        loading: loading,
        index: index,
        data: data,
        filterable: true,
        pages: pages,
        pageSize: pageSize,
        manual: true,
        showPageJump: false,
        showPageSizeOptions: false,
        onPageChange: pageChange,
        onSortedChange: sortedChange,
        onFilteredChange: filterChange,
        columns: columns,
        className: style
      }));
    }
  }]);
  return DataTable;
}(_react["default"].Component);

var _default = DataTable;
exports["default"] = _default;