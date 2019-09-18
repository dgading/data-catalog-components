"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _DataTablePageResults = _interopRequireDefault(require("./DataTablePageResults"));

var _DataTableDensity = _interopRequireDefault(require("./DataTableDensity"));

var _DataTablePageSizer = _interopRequireDefault(require("./DataTablePageSizer"));

var _AdvancedOptions = _interopRequireDefault(require("./AdvancedOptions"));

var _Wrapper = _interopRequireDefault(require("./Wrapper"));

var DataTableHeader = function DataTableHeader(_ref) {
  var dataPreview = _ref.dataPreview,
      dataFunctions = _ref.dataFunctions,
      headerClasses = _ref.headerClasses,
      options = _ref.options;
  var displayDensity = options.displayDensity,
      pageResults = options.pageResults,
      pageSizer = options.pageSizer,
      advancedOptions = options.advancedOptions;
  var hideDisplayDensity = displayDensity && displayDensity.hide ? false : true;
  var hidePageResults = pageResults && pageResults.hide ? false : true;
  var hidePageSizer = pageSizer && pageSizer.hide ? false : true;
  var hideAdvancedOptions = advancedOptions && advancedOptions.hide ? false : true;
  return _react["default"].createElement(_Wrapper["default"], null, _react["default"].createElement("div", {
    className: headerClasses
  }, hidePageResults && _react["default"].createElement(_DataTablePageResults["default"], (0, _extends2["default"])({
    total: parseInt(dataPreview.rowsTotal),
    pageSize: dataPreview.pageSize,
    currentPage: dataPreview.currentPage
  }, pageResults)), hidePageSizer && _react["default"].createElement(_DataTablePageSizer["default"], (0, _extends2["default"])({
    pageSizeChange: dataFunctions.pageSizeChange,
    currentOption: dataPreview.pageSize
  }, pageSizer)), hideDisplayDensity && _react["default"].createElement(_DataTableDensity["default"], (0, _extends2["default"])({
    densityChange: dataFunctions.densityChange
  }, displayDensity)), hideAdvancedOptions && _react["default"].createElement(_AdvancedOptions["default"], (0, _extends2["default"])({
    columns: dataPreview.columns,
    excludedColumns: dataPreview.excludedColumns,
    columnOrder: dataPreview.columnOrder,
    toggleColumns: dataFunctions.toggleColumns,
    reorderColumns: dataFunctions.reorderColumns
  }, advancedOptions))));
};

DataTableHeader.defaultProps = {
  headerClasses: 'dkan-data-table-header'
};
DataTableHeader.propTypes = {
  headerClasses: _propTypes["default"].string,
  dataPreview: _propTypes["default"].object.isRequired,
  dataFunctions: _propTypes["default"].object.isRequired,
  options: _propTypes["default"].shape({
    displayDensity: _propTypes["default"].object,
    pageResults: _propTypes["default"].object,
    pageSizer: _propTypes["default"].object,
    advancedOptions: _propTypes["default"].object
  })
};
var _default = DataTableHeader;
exports["default"] = _default;