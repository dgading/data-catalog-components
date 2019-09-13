"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = withResource;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireDefault(require("react"));

var _axios = _interopRequireDefault(require("axios"));

var _datastore = _interopRequireDefault(require("./services/datastore"));

function withResource(OriginalComponent) {
  return (
    /*#__PURE__*/
    function (_React$Component) {
      (0, _inherits2["default"])(_class, _React$Component);

      function _class(props) {
        var _this;

        (0, _classCallCheck2["default"])(this, _class);
        _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(_class).call(this, props));
        _this.store = null;
        _this.storeType = null;
        _this.columns = [];
        _this.state = {
          dataPreview: {
            values: [],
            pageSize: 5,
            rowsTotal: 0,
            currentPage: 0,
            filters: [],
            sort: [],
            columns: _this.columns
          },
          dataInfo: {},
          dataFunctions: {
            pageChange: function pageChange(page) {
              return _this.pageChange(page);
            },
            sortChange: function sortChange(sort) {
              return _this.sortChange(sort);
            },
            filterChange: function filterChange(filters) {
              return _this.filterChange(filters);
            }
          }
        }; // this.fetchData = this.fetchData.bind(this);
        // this.getStore = this.getStore.bind(this);

        _this.activeColumns = _this.activeColumns.bind((0, _assertThisInitialized2["default"])(_this));
        _this.prepareColumns = _this.prepareColumns.bind((0, _assertThisInitialized2["default"])(_this));
        _this.pageChange = _this.pageChange.bind((0, _assertThisInitialized2["default"])(_this));
        _this.filterChange = _this.filterChange.bind((0, _assertThisInitialized2["default"])(_this));
        _this.sortChange = _this.sortChange.bind((0, _assertThisInitialized2["default"])(_this));
        return _this;
      }

      (0, _createClass2["default"])(_class, [{
        key: "componentDidMount",
        value: function componentDidMount() {
          this.fetchData();
        }
      }, {
        key: "render",
        value: function render() {
          return _react["default"].createElement(OriginalComponent, (0, _extends2["default"])({}, this.props, this.state, {
            ident: this.identifier
          }));
        }
      }, {
        key: "fetchData",
        value: function () {
          var _fetchData = (0, _asyncToGenerator2["default"])(
          /*#__PURE__*/
          _regenerator["default"].mark(function _callee() {
            var _this2 = this;

            var _this$state, dataPreview, dataInfo, data, columns, store;

            return _regenerator["default"].wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _this$state = this.state, dataPreview = _this$state.dataPreview, dataInfo = _this$state.dataInfo;
                    data = this.props.data;
                    columns = null;

                    if (!(data.identifier !== undefined)) {
                      _context.next = 6;
                      break;
                    }

                    _context.next = 6;
                    return _axios["default"].get("http://dkan/api/v1/datastore/".concat(data.identifier, "?values=both")).then(function (response) {
                      _this2.columns = response.data.columns ? response.data.columns : [];
                      columns = _this2.columns;

                      _this2.setState({
                        dataInfo: response.data
                      });
                    })["catch"](function (error) {
                      console.log(error);
                    });

                  case 6:
                    _context.next = 8;
                    return this.getStore();

                  case 8:
                    store = _context.sent;

                    if (!(columns === null)) {
                      _context.next = 13;
                      break;
                    }

                    _context.next = 12;
                    return store.getColumns();

                  case 12:
                    columns = _context.sent;

                  case 13:
                    // dataPreview.columns = this.activeColumns(this.prepareColumns(columns));
                    dataPreview.columns = this.prepareColumns(columns);
                    _context.next = 16;
                    return this.getData(null, null, dataPreview.pageSize, dataPreview.currentPage, true);

                  case 16:
                    this.setState({
                      dataPreview: dataPreview
                    });

                  case 17:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));

          function fetchData() {
            return _fetchData.apply(this, arguments);
          }

          return fetchData;
        }()
      }, {
        key: "getStore",
        value: function () {
          var _getStore = (0, _asyncToGenerator2["default"])(
          /*#__PURE__*/
          _regenerator["default"].mark(function _callee2() {
            var _this3 = this;

            var data, dataPreview;
            return _regenerator["default"].wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    data = this.props.data;
                    dataPreview = this.state.dataPreview;
                    return _context2.abrupt("return", new Promise(function (resolve, reject) {
                      if (_this3.store !== null) {
                        resolve(_this3.store);
                      } else {
                        if (_this3.columns.length > 0) {
                          var store = new _datastore["default"]['dkan'](data.identifier, _this3.columns);
                          store.query(null, null, null, 0, null, null, true).then(function (data) {
                            _this3.store = store;
                            _this3.storeType = 'dkan';
                            resolve(store);
                          });
                        } else {
                          var _store = new _datastore["default"]['file'](data.data.downloadURL);

                          _store.query(null, null, null, 0, null, null, true).then(function (data) {
                            if (data) {
                              _this3.store = _store;
                              _this3.storeType = 'file';

                              _this3.setState({
                                store: _store
                              });

                              resolve(_store);
                            } else {
                              reject("No datastore available.");
                            }
                          });
                        }
                      }
                    }));

                  case 3:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));

          function getStore() {
            return _getStore.apply(this, arguments);
          }

          return getStore;
        }()
      }, {
        key: "getData",
        value: function () {
          var _getData = (0, _asyncToGenerator2["default"])(
          /*#__PURE__*/
          _regenerator["default"].mark(function _callee3() {
            var fields,
                facets,
                range,
                page,
                count,
                dataPreview,
                query,
                sort,
                _args3 = arguments;
            return _regenerator["default"].wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    fields = _args3.length > 0 && _args3[0] !== undefined ? _args3[0] : null;
                    facets = _args3.length > 1 && _args3[1] !== undefined ? _args3[1] : null;
                    range = _args3.length > 2 && _args3[2] !== undefined ? _args3[2] : null;
                    page = _args3.length > 3 && _args3[3] !== undefined ? _args3[3] : null;
                    count = _args3.length > 4 && _args3[4] !== undefined ? _args3[4] : false;
                    dataPreview = this.state.dataPreview;
                    query = dataPreview.filters.length ? dataPreview.filters : null;
                    sort = dataPreview.sort;

                    if (!count) {
                      _context3.next = 15;
                      break;
                    }

                    _context3.next = 11;
                    return this.store.query(query, fields, facets, range, page, sort, count).then(function (data) {
                      dataPreview.rowsTotal = data;
                    });

                  case 11:
                    _context3.next = 13;
                    return this.store.query(query, fields, facets, range, page, sort).then(function (data) {
                      dataPreview.values = data;
                    });

                  case 13:
                    _context3.next = 17;
                    break;

                  case 15:
                    _context3.next = 17;
                    return this.store.query(query, fields, facets, range, page, sort).then(function (data) {
                      dataPreview.values = data;
                    });

                  case 17:
                    this.setState({
                      dataPreview: dataPreview
                    });

                  case 18:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));

          function getData() {
            return _getData.apply(this, arguments);
          }

          return getData;
        }()
      }, {
        key: "activeColumns",
        value: function () {
          var _activeColumns = (0, _asyncToGenerator2["default"])(
          /*#__PURE__*/
          _regenerator["default"].mark(function _callee4() {
            return _regenerator["default"].wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4);
          }));

          function activeColumns() {
            return _activeColumns.apply(this, arguments);
          }

          return activeColumns;
        }()
      }, {
        key: "prepareColumns",
        value: function prepareColumns(columns) {
          return columns.map(function (column) {
            return {
              Header: column,
              accessor: column
            };
          });
        } //TABLE FUNCTIONS

      }, {
        key: "pageChange",
        value: function () {
          var _pageChange = (0, _asyncToGenerator2["default"])(
          /*#__PURE__*/
          _regenerator["default"].mark(function _callee5(page) {
            var dataPreview;
            return _regenerator["default"].wrap(function _callee5$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    dataPreview = this.state.dataPreview;
                    dataPreview.currentPage = page;
                    this.getData(null, null, dataPreview.pageSize, dataPreview.currentPage);

                  case 3:
                  case "end":
                    return _context5.stop();
                }
              }
            }, _callee5, this);
          }));

          function pageChange(_x) {
            return _pageChange.apply(this, arguments);
          }

          return pageChange;
        }()
      }, {
        key: "filterChange",
        value: function () {
          var _filterChange = (0, _asyncToGenerator2["default"])(
          /*#__PURE__*/
          _regenerator["default"].mark(function _callee6(filters) {
            var dataPreview;
            return _regenerator["default"].wrap(function _callee6$(_context6) {
              while (1) {
                switch (_context6.prev = _context6.next) {
                  case 0:
                    dataPreview = this.state.dataPreview;
                    dataPreview.filters = filters; // When filtering the pages gets reset.

                    dataPreview.currentPage = 0;
                    this.getData(null, null, dataPreview.pageSize, dataPreview.currentPage, true);

                  case 4:
                  case "end":
                    return _context6.stop();
                }
              }
            }, _callee6, this);
          }));

          function filterChange(_x2) {
            return _filterChange.apply(this, arguments);
          }

          return filterChange;
        }()
      }, {
        key: "sortChange",
        value: function () {
          var _sortChange = (0, _asyncToGenerator2["default"])(
          /*#__PURE__*/
          _regenerator["default"].mark(function _callee7(sort) {
            var dataPreview;
            return _regenerator["default"].wrap(function _callee7$(_context7) {
              while (1) {
                switch (_context7.prev = _context7.next) {
                  case 0:
                    dataPreview = this.state.dataPreview;
                    dataPreview.sort = sort; // When sorting the pages gets reset.

                    dataPreview.currentPage = 0;
                    this.getData(null, null, dataPreview.pageSize, dataPreview.currentPage);

                  case 4:
                  case "end":
                    return _context7.stop();
                }
              }
            }, _callee7, this);
          }));

          function sortChange(_x3) {
            return _sortChange.apply(this, arguments);
          }

          return sortChange;
        }()
      }]);
      return _class;
    }(_react["default"].Component)
  );
}