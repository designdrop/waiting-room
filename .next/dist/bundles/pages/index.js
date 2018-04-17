module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/app.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__feed__ = __webpack_require__("./components/feed.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__weather__ = __webpack_require__("./components/weather.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__time__ = __webpack_require__("./components/time.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__footer__ = __webpack_require__("./components/footer.js");
var _jsxFileName = '/Users/akalili/GitHub/waiting-room/components/app.js';





// import Video from './video-player';


/* harmony default export */ __webpack_exports__["a"] = (function () {
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
    'div',
    {
      className: 'jsx-557044800' + ' ' + 'main__wrap',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      }
    },
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
      'div',
      {
        className: 'jsx-557044800' + ' ' + 'time__wrap',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        }
      },
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__time__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        }
      })
    ),
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
      'div',
      {
        className: 'jsx-557044800' + ' ' + 'feed__wrap',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        }
      },
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__feed__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        }
      })
    ),
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
      'div',
      {
        className: 'jsx-557044800' + ' ' + 'weather__wrap',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        }
      },
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__weather__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        }
      })
    ),
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
      'div',
      {
        className: 'jsx-557044800' + ' ' + 'video__wrap',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        }
      },
      'video player'
    ),
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
      'div',
      {
        className: 'jsx-557044800' + ' ' + 'footer__wrap',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        }
      },
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__footer__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        }
      })
    ),
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
      styleId: '557044800',
      css: '.main__wrap{margin:0;padding:0;font:15px Helvetica,Arial,sans-serif;display:grid;grid-gap:20px;grid-template-columns:2fr 3fr;}.time__wrap{grid-column:1 / -1;justify-self:right;}.feed__wrap{grid-row-start:span 2;}.feed__wrap ul{list-style:none;padding:0;margin:0;}.feed__wrap li{padding:0;margin:0.5em 0;}.weather__wrap{overflow:hidden;-webkit-align-self:start;-ms-flex-item-align:start;align-self:start;justify-self:stretch;}.weather__wrap img{width:100%;}.video__wrap{-webkit-align-self:stretch;-ms-flex-item-align:stretch;align-self:stretch;display:grid;}.video__wrap iframe{height:418px;justify-self:stretch;-webkit-align-self:stretch;-ms-flex-item-align:stretch;align-self:stretch;}.footer__wrap{grid-column:1 / -1;justify-self:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvYXBwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXNCdUIsQUFHa0IsQUFTVSxBQUlHLEFBR04sQUFLTixBQUlNLEFBS0wsQUFHUSxBQUlOLEFBS00sU0F6Q1QsQ0FxQkssQ0FTakIsRUFPdUIsR0FyQlgsQUFTTyxHQXhCc0IsQUFRcEIsQUFpQ0MsR0E3QnRCLEdBU0EsQ0FMVyxRQXFCVSxDQXBCckIsR0FSQSxDQWlDQSxpQkF6Q2UsYUFDQyxLQThCRCxTQTdCaUIsQ0FzQlQsR0FRdkIsa0JBUEEsR0FZQSxLQWxDQSIsImZpbGUiOiJjb21wb25lbnRzL2FwcC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvYWthbGlsaS9HaXRIdWIvd2FpdGluZy1yb29tIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEZlZWQgZnJvbSAnLi9mZWVkJztcbmltcG9ydCBXZWF0aGVyIGZyb20gJy4vd2VhdGhlcic7XG5pbXBvcnQgVGltZSBmcm9tICcuL3RpbWUnO1xuLy8gaW1wb3J0IFZpZGVvIGZyb20gJy4vdmlkZW8tcGxheWVyJztcbmltcG9ydCBGb290ZXIgZnJvbSAnLi9mb290ZXInO1xuXG5leHBvcnQgZGVmYXVsdCAoKSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPVwibWFpbl9fd3JhcFwiPlxuICAgIDxkaXYgY2xhc3NOYW1lPVwidGltZV9fd3JhcFwiPlxuICAgICAgPFRpbWUgLz5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZlZWRfX3dyYXBcIj5cbiAgICAgIDxGZWVkIC8+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJ3ZWF0aGVyX193cmFwXCI+XG4gICAgICA8V2VhdGhlciAvPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3NOYW1lPVwidmlkZW9fX3dyYXBcIj52aWRlbyBwbGF5ZXI8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZvb3Rlcl9fd3JhcFwiPlxuICAgICAgPEZvb3RlciAvPlxuICAgIDwvZGl2PlxuXG4gICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgIC5tYWluX193cmFwIHtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICBmb250OiAxNXB4IEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgIGdyaWQtZ2FwOiAyMHB4O1xuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDJmciAzZnI7XG4gICAgICB9XG5cbiAgICAgIC50aW1lX193cmFwIHtcbiAgICAgICAgZ3JpZC1jb2x1bW46IDEgLyAtMTtcbiAgICAgICAganVzdGlmeS1zZWxmOiByaWdodDtcbiAgICAgIH1cbiAgICAgIC5mZWVkX193cmFwIHtcbiAgICAgICAgZ3JpZC1yb3ctc3RhcnQ6IHNwYW4gMjtcbiAgICAgIH1cbiAgICAgIC5mZWVkX193cmFwIHVsIHtcbiAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgfVxuICAgICAgLmZlZWRfX3dyYXAgbGkge1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICBtYXJnaW46IDAuNWVtIDA7XG4gICAgICB9XG4gICAgICAud2VhdGhlcl9fd3JhcCB7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIGFsaWduLXNlbGY6IHN0YXJ0O1xuICAgICAgICBqdXN0aWZ5LXNlbGY6IHN0cmV0Y2g7XG4gICAgICB9XG4gICAgICAud2VhdGhlcl9fd3JhcCBpbWcge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgIH1cbiAgICAgIC52aWRlb19fd3JhcCB7XG4gICAgICAgIGFsaWduLXNlbGY6IHN0cmV0Y2g7XG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICB9XG4gICAgICAudmlkZW9fX3dyYXAgaWZyYW1lIHtcbiAgICAgICAgaGVpZ2h0OiA0MThweDtcbiAgICAgICAganVzdGlmeS1zZWxmOiBzdHJldGNoO1xuICAgICAgICBhbGlnbi1zZWxmOiBzdHJldGNoO1xuICAgICAgfVxuICAgICAgLmZvb3Rlcl9fd3JhcCB7XG4gICAgICAgIGdyaWQtY29sdW1uOiAxIC8gLTE7XG4gICAgICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9kaXY+XG4pO1xuIl19 */\n/*@ sourceURL=components/app.js */'
    })
  );
});

/***/ }),

/***/ "./components/feed.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_newsapi__ = __webpack_require__("newsapi");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_newsapi___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_newsapi__);
var _jsxFileName = '/Users/akalili/GitHub/waiting-room/components/feed.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var url = 'https://newsapi.org/v2/top-headlines?' + 'country=us&' + 'apiKey=7397a2be83014b4fabcf1fd7bd4f722e';

// var req = new Request(url);
// fetch(req).then(function(response) {
//   console.log(response.json());
// });

var Feed = function (_React$Component) {
  _inherits(Feed, _React$Component);

  function Feed(props) {
    _classCallCheck(this, Feed);

    var _this = _possibleConstructorReturn(this, (Feed.__proto__ || Object.getPrototypeOf(Feed)).call(this, props));

    _this.state = {
      error: null,
      isLoaded: false,
      articles: []
    };
    return _this;
  }

  _createClass(Feed, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      fetch(url).then(function (res) {
        return res.json();
      }).then(function (result) {
        _this2.setState({
          isLoaded: true,
          articles: result.articles
        });
      },
      // Note: it's important to handle errors here
      // instead of a catch() block so that we don't swallow
      // exceptions from actual bugs in components.
      function (error) {
        _this2.setState({
          isLoaded: true,
          error: error
        });
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _state = this.state,
          error = _state.error,
          isLoaded = _state.isLoaded,
          articles = _state.articles;

      if (error) {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 49
            }
          },
          'Error: ',
          error.message
        );
      } else if (!isLoaded) {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 51
            }
          },
          'Loading...'
        );
      } else {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'ul',
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 54
            }
          },
          articles.map(function (item) {
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'li',
              { key: item.id, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 54
                }
              },
              item.title
            );
          })
        );
      }
    }
  }]);

  return Feed;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (Feed);

/***/ }),

/***/ "./components/footer.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _jsxFileName = '/Users/akalili/GitHub/waiting-room/components/footer.js';


var Footer = function Footer() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'footer',
    {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 4
      }
    },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'h1',
      {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 5
        }
      },
      'Waiting Room Dashboard / Customer Info'
    )
  );
};

/* harmony default export */ __webpack_exports__["a"] = (Footer);

/***/ }),

/***/ "./components/time.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _jsxFileName = '/Users/akalili/GitHub/waiting-room/components/time.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var Time = function (_React$Component) {
  _inherits(Time, _React$Component);

  function Time(props) {
    _classCallCheck(this, Time);

    var _this = _possibleConstructorReturn(this, (Time.__proto__ || Object.getPrototypeOf(Time)).call(this, props));

    _this.state = { date: new Date() };
    return _this;
  }

  _createClass(Time, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      this.timerID = setInterval(function () {
        return _this2.tick();
      }, 1000);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      clearInterval(this.timerID);
    }
  }, {
    key: 'tick',
    value: function tick() {
      this.setState({
        date: new Date()
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'h2',
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 24
          }
        },
        'It is ',
        this.state.date.toLocaleTimeString(),
        '.'
      );
    }
  }]);

  return Time;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (Time);

/***/ }),

/***/ "./components/weather.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__("babel-runtime/regenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_isomorphic_unfetch__ = __webpack_require__("isomorphic-unfetch");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_isomorphic_unfetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_isomorphic_unfetch__);

var _jsxFileName = '/Users/akalili/GitHub/waiting-room/components/weather.js';


function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }




var Weather = function Weather(props) {
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
    'div',
    {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 5
      }
    },
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
      'h1',
      {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 6
        }
      },
      'Batman TV Shows'
    ),
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
      'div',
      {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 7
        }
      },
      'Yokels: ',
      props.shows
    )
  );
};

Weather.getInitialProps = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
  var res, data;
  return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return __WEBPACK_IMPORTED_MODULE_3_isomorphic_unfetch___default()('https://api.tvmaze.com/search/shows?q=batman');

        case 2:
          res = _context.sent;
          _context.next = 5;
          return res.json();

        case 5:
          data = _context.sent;


          console.log('Show data fetched. Count: ' + data.length);

          return _context.abrupt('return', {
            shows: data
          });

        case 8:
        case 'end':
          return _context.stop();
      }
    }
  }, _callee, this);
}));

/* harmony default export */ __webpack_exports__["a"] = (Weather);

/***/ }),

/***/ "./pages/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_head__ = __webpack_require__("next/head");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_head___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_head__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_app__ = __webpack_require__("./components/app.js");
var _jsxFileName = '/Users/akalili/GitHub/waiting-room/pages/index.js';




/* harmony default export */ __webpack_exports__["default"] = (function () {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 5
      }
    },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_1_next_head___default.a,
      {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 6
        }
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'title',
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 7
          }
        },
        'My page title'
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('meta', {
        name: 'viewport',
        content: 'initial-scale=1.0, width=device-width',
        key: 'viewport',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 8
        }
      })
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_1_next_head___default.a,
      {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        }
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('meta', {
        name: 'viewport',
        content: 'initial-scale=1.2, width=device-width',
        key: 'viewport',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        }
      })
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_app__["a" /* default */], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      }
    })
  );
});

/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/index.js");


/***/ }),

/***/ "babel-runtime/regenerator":
/***/ (function(module, exports) {

module.exports = require("babel-runtime/regenerator");

/***/ }),

/***/ "isomorphic-unfetch":
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),

/***/ "newsapi":
/***/ (function(module, exports) {

module.exports = require("newsapi");

/***/ }),

/***/ "next/head":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/link":
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-jsx/style":
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map