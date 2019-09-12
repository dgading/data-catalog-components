"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _Table = _interopRequireDefault(require("../../Table"));

var ResourceInfoTable = function ResourceInfoTable(_ref) {
  var statistics = _ref.statistics,
      title = _ref.title;
  var numRows = 'rows' in statistics ? statistics.rows : "";
  var numColumns = 'columns' in statistics ? statistics.columns : "";
  var labelsT1 = {
    rows: {
      label: numRows.toString()
    }
  };
  var valuesT1 = {
    rows: numColumns.toString()
  };
  return _react["default"].createElement(_Table["default"], {
    configuration: labelsT1,
    data: valuesT1,
    title: title,
    th1: "Rows",
    th2: "Columns",
    tableclass: "table-one"
  });
};

var _default = ResourceInfoTable;
exports["default"] = _default;