"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.dkan = exports.file = void 0;

var _papaparse = _interopRequireDefault(require("papaparse"));

var _lodash = _interopRequireDefault(require("lodash"));

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Datastore =
/*#__PURE__*/
function () {
  function Datastore() {
    _classCallCheck(this, Datastore);
  }

  _createClass(Datastore, [{
    key: "query",
    value: function () {
      var _query2 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee() {
        var _query,
            fields,
            facets,
            range,
            page,
            sort,
            _args = arguments;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _query = _args.length > 0 && _args[0] !== undefined ? _args[0] : null;
                fields = _args.length > 1 && _args[1] !== undefined ? _args[1] : null;
                facets = _args.length > 2 && _args[2] !== undefined ? _args[2] : null;
                range = _args.length > 3 && _args[3] !== undefined ? _args[3] : null;
                page = _args.length > 4 && _args[4] !== undefined ? _args[4] : null;
                sort = _args.length > 5 && _args[5] !== undefined ? _args[5] : null;

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function query() {
        return _query2.apply(this, arguments);
      }

      return query;
    }()
  }, {
    key: "update",
    value: function () {
      var _update = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee2() {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function update() {
        return _update.apply(this, arguments);
      }

      return update;
    }()
  }, {
    key: "remove",
    value: function () {
      var _remove = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee3() {
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      function remove() {
        return _remove.apply(this, arguments);
      }

      return remove;
    }()
  }]);

  return Datastore;
}();

var file =
/*#__PURE__*/
function (_Datastore) {
  _inherits(file, _Datastore);

  function file(uri) {
    var _this;

    _classCallCheck(this, file);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(file).call(this));

    _defineProperty(_assertThisInitialized(_this), "columns", null);

    _this.uri = uri;
    return _this;
  }

  _createClass(file, [{
    key: "getColumns",
    value: function () {
      var _getColumns = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee4() {
        var _this2 = this;

        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                return _context4.abrupt("return", new Promise(function (resolve, reject) {
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
                return _context4.stop();
            }
          }
        }, _callee4);
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
      var _query4 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee5() {
        var _this3 = this;

        var _query3,
            fields,
            facets,
            range,
            page,
            sort,
            count,
            _args5 = arguments;

        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _query3 = _args5.length > 0 && _args5[0] !== undefined ? _args5[0] : null;
                fields = _args5.length > 1 && _args5[1] !== undefined ? _args5[1] : null;
                facets = _args5.length > 2 && _args5[2] !== undefined ? _args5[2] : null;
                range = _args5.length > 3 && _args5[3] !== undefined ? _args5[3] : null;
                page = _args5.length > 4 && _args5[4] !== undefined ? _args5[4] : null;
                sort = _args5.length > 5 && _args5[5] !== undefined ? _args5[5] : null;
                count = _args5.length > 6 && _args5[6] !== undefined ? _args5[6] : false;
                return _context5.abrupt("return", new Promise(function (resolve, reject) {
                  _this3._fetch().then(function (data) {
                    console.log(data);
                    data = _this3._query(data, _query3);

                    if (count) {
                      var _count = data.length;

                      if (_count < 100) {
                        // we get an empty record at the end, if less than a hundred.
                        _count = _count - 1;
                      }

                      resolve(_count);
                    }

                    data = _this3._sort(data, sort);
                    data = _this3._page(data, page, range);
                    resolve(data);
                  });
                }));

              case 8:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }));

      function query() {
        return _query4.apply(this, arguments);
      }

      return query;
    }()
  }, {
    key: "update",
    value: function () {
      var _update2 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee6() {
        return regeneratorRuntime.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6);
      }));

      function update() {
        return _update2.apply(this, arguments);
      }

      return update;
    }()
  }, {
    key: "remove",
    value: function () {
      var _remove2 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee7() {
        return regeneratorRuntime.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7);
      }));

      function remove() {
        return _remove2.apply(this, arguments);
      }

      return remove;
    }()
  }, {
    key: "_fetch",
    value: function () {
      var _fetch2 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee8() {
        var _this4 = this;

        return regeneratorRuntime.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                return _context8.abrupt("return", new Promise(function (resolve, reject) {
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
                return _context8.stop();
            }
          }
        }, _callee8);
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
        } // Searches across all data.
        else {
            queried = queried.reduce(function (acc, doc) {
              var haystack = JSON.stringify(doc);
              var needleRegExp = new RegExp(query.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&"), "i");
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
    key: "_page",
    value: function _page(data, page, range) {
      var paged = data;

      if (page !== null && range !== null) {
        paged = paged.slice(range * page, range * page + range);
      }

      return paged;
    }
  }, {
    key: "_sort",
    value: function _sort(data, sort) {
      var sorted = data;

      if (sort) {
        sorted = _lodash["default"].orderBy(sorted, sort.map(function (srt) {
          return function (row) {
            if (row[srt.id] === null || row[srt.id] === undefined) {
              return -Infinity;
            }

            return typeof row[srt.id] === "string" ? row[srt.id].toLowerCase() : row[srt.id];
          };
        }), sort.map(function (d) {
          return d.desc ? "desc" : "asc";
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
  _inherits(dkan, _Datastore2);

  function dkan(id, columns) {
    var _this5;

    _classCallCheck(this, dkan);

    _this5 = _possibleConstructorReturn(this, _getPrototypeOf(dkan).call(this));

    _defineProperty(_assertThisInitialized(_this5), "id", null);

    _defineProperty(_assertThisInitialized(_this5), "columns", null);

    _this5.id = id;
    _this5.columns = columns;
    return _this5;
  }

  _createClass(dkan, [{
    key: "getColumns",
    value: function () {
      var _getColumns2 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee9() {
        var _this6 = this;

        return regeneratorRuntime.wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                return _context9.abrupt("return", new Promise(function (resolve, reject) {
                  resolve(_this6.columns);
                }));

              case 1:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9);
      }));

      function getColumns() {
        return _getColumns2.apply(this, arguments);
      }

      return getColumns;
    }()
  }, {
    key: "query",
    value: function () {
      var _query5 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee10() {
        var q,
            fields,
            facets,
            range,
            page,
            sort,
            count,
            new_q,
            _args10 = arguments;
        return regeneratorRuntime.wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                q = _args10.length > 0 && _args10[0] !== undefined ? _args10[0] : null;
                fields = _args10.length > 1 && _args10[1] !== undefined ? _args10[1] : null;
                facets = _args10.length > 2 && _args10[2] !== undefined ? _args10[2] : null;
                range = _args10.length > 3 && _args10[3] !== undefined ? _args10[3] : 0;
                page = _args10.length > 4 && _args10[4] !== undefined ? _args10[4] : null;
                sort = _args10.length > 5 && _args10[5] !== undefined ? _args10[5] : null;
                count = _args10.length > 6 && _args10[6] !== undefined ? _args10[6] : false;

                if (sort === null) {
                  sort = [];
                }

                new_q = [];

                if (q !== null) {
                  new_q = JSON.parse(JSON.stringify(q));
                }

                new_q.map(function (v) {
                  v.value = "%25" + v.value + "%25";
                  return v;
                });
                return _context10.abrupt("return", this._fetch(range, page * range, new_q, sort[0], count));

              case 12:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee10, this);
      }));

      function query() {
        return _query5.apply(this, arguments);
      }

      return query;
    }()
  }, {
    key: "update",
    value: function () {
      var _update3 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee11() {
        return regeneratorRuntime.wrap(function _callee11$(_context11) {
          while (1) {
            switch (_context11.prev = _context11.next) {
              case 0:
              case "end":
                return _context11.stop();
            }
          }
        }, _callee11);
      }));

      function update() {
        return _update3.apply(this, arguments);
      }

      return update;
    }()
  }, {
    key: "remove",
    value: function () {
      var _remove3 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee12() {
        return regeneratorRuntime.wrap(function _callee12$(_context12) {
          while (1) {
            switch (_context12.prev = _context12.next) {
              case 0:
              case "end":
                return _context12.stop();
            }
          }
        }, _callee12);
      }));

      function remove() {
        return _remove3.apply(this, arguments);
      }

      return remove;
    }()
  }, {
    key: "_fetch",
    value: function () {
      var _fetch3 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee13(limit, offset, where, sort, count) {
        var _this7 = this;

        var query, where_string, where_clauses, sort_string, fields, limit_string;
        return regeneratorRuntime.wrap(function _callee13$(_context13) {
          while (1) {
            switch (_context13.prev = _context13.next) {
              case 0:
                query = "";
                where_string = '';

                if (where.length !== 0) {
                  where_clauses = [];
                  where.forEach(function (v, i) {
                    where_clauses[i] = v.id + " = '" + v.value + "'";
                  });
                  where_string = "[WHERE " + where_clauses.join(" AND ") + "]";
                }

                sort_string = "";

                if (_typeof(sort) === 'object') {
                  sort_string = "[ORDER BY " + sort.id;

                  if (sort.desc === false) {
                    sort_string += " ASC]";
                  } else {
                    sort_string += " DESC]";
                  }
                }

                fields = "";
                limit_string = "";

                if (count) {
                  fields = 'COUNT(*)';
                } else {
                  fields = '*';
                  limit_string = '[LIMIT ' + limit + ' OFFSET ' + offset + ']';
                }

                query = '/sql/[SELECT ' + fields + ' FROM ' + this.id + ']' + where_string + sort_string + limit_string + ';';
                return _context13.abrupt("return", new Promise(function (resolve, reject) {
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
                return _context13.stop();
            }
          }
        }, _callee13, this);
      }));

      function _fetch(_x, _x2, _x3, _x4, _x5) {
        return _fetch3.apply(this, arguments);
      }

      return _fetch;
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