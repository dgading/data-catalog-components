"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _reactLoaderAdvanced = _interopRequireDefault(require("react-loader-advanced"));

var _reactLoadingSpin = _interopRequireDefault(require("react-loading-spin"));

var _FileDownload = _interopRequireDefault(require("../../FileDownload"));

var _ = _interopRequireDefault(require("./"));

var _DataTable = _interopRequireDefault(require("./DataTable"));

var _ResourceInfoTable = _interopRequireDefault(require("./ResourceInfoTable"));

var Resource = function Resource(_ref) {
  var dataPreview = _ref.dataPreview,
      dataInfo = _ref.dataInfo,
      dataFunctions = _ref.dataFunctions,
      includeInfoTable = _ref.includeInfoTable,
      infoTableTitle = _ref.infoTableTitle;

  var _useState = (0, _react.useState)(true),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      show = _useState2[0],
      toggleShow = _useState2[1];

  (0, _react.useEffect)(function () {
    if (dataPreview.values.length > 0) {
      toggleShow(false);
    }
  });
  var values = 'values' in dataPreview ? dataPreview.values : [];
  var columns = 'columns' in dataPreview ? dataPreview.columns : [];
  var dataKey = dataInfo.indentifier;
  var pageSize = 'pageSize' in dataPreview ? dataPreview.pageSize : 20;
  var pages = Math.ceil(dataPreview.rowsTotal / pageSize);
  var statistics = 'datastore_statistics' in dataInfo ? dataInfo.datastore_statistics : {};
  return _react["default"].createElement("div", null, _react["default"].createElement(_reactLoaderAdvanced["default"], {
    backgroundStyle: {
      backgroundColor: "#f9fafb"
    },
    foregroundStyle: {
      backgroundColor: "#f9fafb"
    },
    show: show,
    message: _react["default"].createElement(_reactLoadingSpin["default"], {
      width: "3px",
      primaryColor: "#007BBC"
    })
  }, dataInfo.data && _react["default"].createElement(_FileDownload["default"], {
    resource: dataInfo.data,
    key: dataKey
  }), _react["default"].createElement("strong", null, "Rows:"), " ", dataPreview.rowsTotal, _react["default"].createElement(_DataTable["default"], {
    index: 1,
    key: dataKey,
    loading: show,
    pageSize: pageSize,
    pages: pages,
    data: values,
    columns: columns,
    sortedChange: dataFunctions.sortChange,
    filterChange: dataFunctions.filterChange,
    pageChange: dataFunctions.pageChange
  }), includeInfoTable && _react["default"].createElement(_ResourceInfoTable["default"], {
    statistics: statistics,
    title: infoTableTitle
  })));
};

var _default = (0, _["default"])(Resource);

exports["default"] = _default;