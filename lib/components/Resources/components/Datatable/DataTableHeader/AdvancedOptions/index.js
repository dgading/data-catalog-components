"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactAriaModal = _interopRequireDefault(require("react-aria-modal"));

var _AdvancedOptionsForm = _interopRequireDefault(require("./AdvancedOptionsForm"));

var _Wrapper = _interopRequireDefault(require("./Wrapper"));

var _ModalWrapper = _interopRequireDefault(require("./ModalWrapper"));

var AdvancedOptions = function AdvancedOptions(_ref) {
  var excludedColumns = _ref.excludedColumns,
      columnOrder = _ref.columnOrder,
      columns = _ref.columns,
      reorderColumns = _ref.reorderColumns,
      toggleColumns = _ref.toggleColumns,
      modalOpenBtnText = _ref.modalOpenBtnText,
      wrapperClass = _ref.wrapperClass,
      modalClass = _ref.modalClass,
      closeModalBtnText = _ref.closeModalBtnText,
      closeModalClasses = _ref.closeModalClasses,
      ariaTitleText = _ref.ariaTitleText,
      appNode = _ref.appNode,
      formOptions = _ref.formOptions;

  var _useState = (0, _react.useState)(false),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      modalOpen = _useState2[0],
      toggleModal = _useState2[1];

  return _react["default"].createElement(_Wrapper["default"], {
    className: wrapperClass
  }, !modalOpen && _react["default"].createElement("button", {
    onClick: function onClick() {
      return toggleModal(!modalOpen);
    }
  }, modalOpenBtnText), modalOpen && _react["default"].createElement(_reactAriaModal["default"], {
    onExit: function onExit() {
      return toggleModal(!modalOpen);
    },
    getApplicationNode: function getApplicationNode() {
      return document.getElementById(appNode);
    },
    alert: true,
    focusDialog: true,
    titleText: ariaTitleText,
    underlayClickExits: false,
    verticallyCenter: true
  }, _react["default"].createElement(_ModalWrapper["default"], {
    className: modalClass
  }, _react["default"].createElement("button", {
    className: closeModalClasses,
    onClick: function onClick() {
      return toggleModal(!modalOpen);
    }
  }, closeModalBtnText), _react["default"].createElement("div", {
    style: {
      outline: 0
    }
  }, _react["default"].createElement(_AdvancedOptionsForm["default"], (0, _extends2["default"])({
    columns: columns,
    excludedColumns: excludedColumns,
    columnOrder: columnOrder,
    toggleColumns: toggleColumns,
    reorderColumns: reorderColumns
  }, formOptions))))));
};

AdvancedOptions.defaultProps = {
  modalOpenBtnText: 'Manage Columns',
  wrapperClass: 'dkan-data-table-adv-options',
  modalClass: 'dkan-data-table-adv-modal',
  closeModalBtnText: 'Close',
  closeModalClasses: 'advanced-options-modal-close',
  ariaTitleText: 'Manage Columns',
  appNode: '___gatsby'
};
AdvancedOptions.propTypes = {
  modalOpenBtnText: _propTypes["default"].string,
  wrapperClass: _propTypes["default"].string,
  closeModalBtnText: _propTypes["default"].string,
  closeModalClasses: _propTypes["default"].string,
  ariaTitleText: _propTypes["default"].string,
  appNode: _propTypes["default"].string,
  excludedColumns: _propTypes["default"].object.isRequired,
  columnOrder: _propTypes["default"].array.isRequired,
  columns: _propTypes["default"].array.isRequired,
  reorderColumns: _propTypes["default"].func.isRequired,
  toggleColumns: _propTypes["default"].func.isRequired,
  formOptions: _propTypes["default"].object
};
var _default = AdvancedOptions;
exports["default"] = _default;