"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactDnd = require("react-dnd");

var _reactDndMultiBackend = _interopRequireDefault(require("react-dnd-multi-backend"));

var _HTML5toTouch = _interopRequireDefault(require("react-dnd-multi-backend/lib/HTML5toTouch"));

var _DraggableArea = _interopRequireDefault(require("../DraggableArea"));

var Draggable = function Draggable(_ref) {
  var onchange = _ref.onchange,
      excludedColumns = _ref.excludedColumns,
      children = _ref.children,
      movecard = _ref.movecard,
      ondrop = _ref.ondrop;
  return _react["default"].createElement("div", null, _react["default"].createElement(_DraggableArea["default"], {
    onchange: onchange,
    excludedColumns: excludedColumns,
    items: children,
    moveCard: movecard,
    onDrop: ondrop
  }));
};

Draggable.propTypes = {
  onchange: _propTypes["default"].func.isRequired,
  movecard: _propTypes["default"].func.isRequired,
  ondrop: _propTypes["default"].func.isRequired,
  excludedColumns: _propTypes["default"].object.isRequired,
  children: _propTypes["default"].node.isRequired
};

var _default = (0, _reactDnd.DragDropContext)((0, _reactDndMultiBackend["default"])(_HTML5toTouch["default"]))(Draggable);

exports["default"] = _default;