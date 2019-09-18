"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.dkan = exports.file = void 0;

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _papaparse = _interopRequireDefault(require("papaparse"));

var _lodash = _interopRequireDefault(require("lodash"));

var _axios = _interopRequireDefault(require("axios"));

var Datastore = function Datastore() {
  (0, _classCallCheck2["default"])(this, Datastore);
};

var file =
/*#__PURE__*/
function (_Datastore) {
  (0, _inherits2["default"])(file, _Datastore);

  function file(uri) {
    var _this;

    (0, _classCallCheck2["default"])(this, file);
    _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(file).call(this));
    _this.uri = uri;
    _this.columns = null;
    return _this;
  }

  (0, _createClass2["default"])(file, [{
    key: "getColumns",
    value: function () {
      var _getColumns = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee() {
        var _this2 = this;

        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                return _context.abrupt("return", new Promise(function (resolve, reject) {
                  if (_this2.columns !== null) {
                    resolve(_this2.columns);
                  }

                  _papaparse["default"].parse(_this2.uri, {
                    complete: function complete(data) {
                      _this2.columns = Object.keys(data.data[0]);
                      resolve(_this2.columns);
                    },
                    download: true,
                    preview: 1,
                    header: true
                  });
                }));

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function getColumns() {
        return _getColumns.apply(this, arguments);
      }

      return getColumns;
    }()
    /**
     * Queries the records.
     *
     * @param {string | array} query - Query item to search with. Can be a string
     * to search through all records or an array of objects [{field: X, value: Y}]
     * to search through.
     */

  }, {
    key: "query",
    value: function () {
      var _query2 = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee2() {
        var _this3 = this;

        var _query,
            fields,
            facets,
            range,
            page,
            sort,
            count,
            _args2 = arguments;

        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _query = _args2.length > 0 && _args2[0] !== undefined ? _args2[0] : null;
                fields = _args2.length > 1 && _args2[1] !== undefined ? _args2[1] : null;
                facets = _args2.length > 2 && _args2[2] !== undefined ? _args2[2] : null;
                range = _args2.length > 3 && _args2[3] !== undefined ? _args2[3] : null;
                page = _args2.length > 4 && _args2[4] !== undefined ? _args2[4] : null;
                sort = _args2.length > 5 && _args2[5] !== undefined ? _args2[5] : null;
                count = _args2.length > 6 && _args2[6] !== undefined ? _args2[6] : false;
                return _context2.abrupt("return", new Promise(function (resolve) {
                  _this3._fetch().then(function (data) {
                    data = _this3._query(data, _query);

                    if (count) {
                      var _count = data.length;

                      if (_count < 100) {
                        // we get an empty record at the end, if less than a hundred.
                        _count -= -1;
                      }

                      resolve(_count);
                    }

                    data = _this3.sort(data, sort);
                    data = _this3.page(data, page, range);
                    resolve(data);
                  });
                }));

              case 8:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function query() {
        return _query2.apply(this, arguments);
      }

      return query;
    }()
  }, {
    key: "update",
    value: function () {
      var _update = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee3() {
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      function update() {
        return _update.apply(this, arguments);
      }

      return update;
    }()
  }, {
    key: "remove",
    value: function () {
      var _remove = (0, _asyncToGenerator2["default"])(
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

      function remove() {
        return _remove.apply(this, arguments);
      }

      return remove;
    }()
  }, {
    key: "_fetch",
    value: function () {
      var _fetch2 = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee5() {
        var _this4 = this;

        return _regenerator["default"].wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                return _context5.abrupt("return", new Promise(function (resolve, reject) {
                  if (typeof _this4.data !== 'undefined') {
                    resolve(_this4.data);
                  }

                  _papaparse["default"].parse(_this4.uri, {
                    complete: function complete(data) {
                      _this4.data = data.data;
                      resolve(_this4.data);
                    },
                    download: true,
                    preview: 100,
                    header: true
                  });
                }));

              case 1:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }));

      function _fetch() {
        return _fetch2.apply(this, arguments);
      }

      return _fetch;
    }()
  }, {
    key: "_query",
    value: function _query(data, query) {
      var queried = data;

      if (query) {
        // Searches across fields.
        if (Array.isArray(query)) {
          queried = query.reduce(function (filteredSoFar, nextFilter) {
            return filteredSoFar.filter(function (row) {
              return (row[nextFilter.id] + "").includes(nextFilter.value);
            });
          }, queried);
        } else {
          // Searches across all data.
          queried = queried.reduce(function (acc, doc) {
            var haystack = JSON.stringify(doc);
            var needleRegExp = new RegExp(query.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&'), 'i');
            var result = needleRegExp.test(haystack);

            if (result) {
              acc.push(doc);
            }

            return acc;
          }, []);
        }
      }

      return queried;
    }
  }, {
    key: "page",
    value: function page(data, _page, range) {
      var paged = data;

      if (_page !== null && range !== null) {
        paged = paged.slice(range * _page, range * _page + range);
      }

      return paged;
    }
  }, {
    key: "sort",
    value: function sort(data, _sort) {
      var sorted = data;

      if (_sort) {
        sorted = _lodash["default"].orderBy(sorted, _sort.map(function (srt) {
          return function (row) {
            if (row[srt.id] === null || row[srt.id] === undefined) {
              return -Infinity;
            }

            return typeof row[srt.id] === 'string' ? row[srt.id] // .toLowerCase()
            : row[srt.id];
          };
        }), _sort.map(function (d) {
          return d.desc ? 'desc' : 'asc';
        }));
      }

      return sorted;
    }
  }]);
  return file;
}(Datastore);

exports.file = file;

var dkan =
/*#__PURE__*/
function (_Datastore2) {
  (0, _inherits2["default"])(dkan, _Datastore2);

  function dkan(id, columns) {
    var _this5;

    (0, _classCallCheck2["default"])(this, dkan);
    _this5 = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(dkan).call(this));
    _this5.id = id;
    _this5.columns = columns;
    return _this5;
  }

  (0, _createClass2["default"])(dkan, [{
    key: "getColumns",
    value: function () {
      var _getColumns2 = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee6() {
        var _this6 = this;

        return _regenerator["default"].wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                return _context6.abrupt("return", new Promise(function (resolve) {
                  resolve(_this6.columns);
                }));

              case 1:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6);
      }));

      function getColumns() {
        return _getColumns2.apply(this, arguments);
      }

      return getColumns;
    }()
  }, {
    key: "query",
    value: function () {
      var _query3 = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee7() {
        var q,
            fields,
            facets,
            range,
            page,
            sort,
            count,
            newQ,
            _args7 = arguments;
        return _regenerator["default"].wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                q = _args7.length > 0 && _args7[0] !== undefined ? _args7[0] : null;
                fields = _args7.length > 1 && _args7[1] !== undefined ? _args7[1] : null;
                facets = _args7.length > 2 && _args7[2] !== undefined ? _args7[2] : null;
                range = _args7.length > 3 && _args7[3] !== undefined ? _args7[3] : 0;
                page = _args7.length > 4 && _args7[4] !== undefined ? _args7[4] : null;
                sort = _args7.length > 5 && _args7[5] !== undefined ? _args7[5] : null;
                count = _args7.length > 6 && _args7[6] !== undefined ? _args7[6] : false;

                if (sort === null) {
                  sort = [];
                }

                newQ = [];

                if (q !== null) {
                  newQ = JSON.parse(JSON.stringify(q));
                }

                newQ.map(function (v) {
                  v.value = "%25".concat(v.value, "%25");
                  return v;
                });
                return _context7.abrupt("return", this.fetch(range, page * range, newQ, sort[0], count));

              case 12:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));

      function query() {
        return _query3.apply(this, arguments);
      }

      return query;
    }() // async update() {}
    // async remove() {}

  }, {
    key: "fetch",
    value: function () {
      var _fetch3 = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee8(limit, offset, where, sort, count) {
        var _this7 = this;

        var query, whereString, whereClauses, sortString, fields, limitString;
        return _regenerator["default"].wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                query = '';
                whereString = '';

                if (where.length !== 0) {
                  whereClauses = [];
                  where.forEach(function (v, i) {
                    whereClauses[i] = "".concat(v.id, " = '").concat(v.value, "'");
                  });
                  whereString = "[WHERE ".concat(whereClauses.join(' AND '), "]");
                }

                sortString = '';

                if ((0, _typeof2["default"])(sort) === 'object') {
                  sortString = "[ORDER BY ".concat(sort.id);

                  if (sort.desc === false) {
                    sortString += ' ASC]';
                  } else {
                    sortString += ' DESC]';
                  }
                }

                fields = '';
                limitString = '';

                if (count) {
                  fields = 'COUNT(*)';
                } else {
                  fields = '*';
                  limitString = "[LIMIT ".concat(limit, " OFFSET ").concat(offset, "]");
                }

                query = "/sql/[SELECT ".concat(fields, " FROM ").concat(this.id, "] ").concat(whereString, " ").concat(sortString, " ").concat(limitString, ";");
                return _context8.abrupt("return", new Promise(function (resolve) {
                  _axios["default"].get("http://dkan/api/v1".concat(query)).then(function (response) {
                    if (count && response.data[0]) {
                      resolve(response.data[0].expression);
                    } else {
                      _this7.data = response.data;
                      resolve(_this7.data);
                    }
                  }, function (error) {
                    _this7.data = [];
                    resolve(error);
                  });
                }));

              case 10:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8, this);
      }));

      function fetch(_x, _x2, _x3, _x4, _x5) {
        return _fetch3.apply(this, arguments);
      }

      return fetch;
    }()
  }]);
  return dkan;
}(Datastore);

exports.dkan = dkan;
var datastore = {
  file: file,
  dkan: dkan
};
var _default = datastore;
exports["default"] = _default;