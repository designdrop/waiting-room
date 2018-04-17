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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(2);


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: external "react"
var external__react_ = __webpack_require__(0);
var external__react__default = /*#__PURE__*/__webpack_require__.n(external__react_);

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(3);
var head__default = /*#__PURE__*/__webpack_require__.n(head_);

// EXTERNAL MODULE: external "styled-jsx/style"
var style_ = __webpack_require__(4);
var style__default = /*#__PURE__*/__webpack_require__.n(style_);

// EXTERNAL MODULE: external "newsapi"
var external__newsapi_ = __webpack_require__(5);
var external__newsapi__default = /*#__PURE__*/__webpack_require__.n(external__newsapi_);

// CONCATENATED MODULE: ./components/feed.js
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var url = 'https://newsapi.org/v2/top-headlines?' + 'country=us&' + 'apiKey=7397a2be83014b4fabcf1fd7bd4f722e';

// var req = new Request(url);
// fetch(req).then(function(response) {
//   console.log(response.json());
// });

var feed_Feed = function (_React$Component) {
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
        return external__react__default.a.createElement(
          'div',
          null,
          'Error: ',
          error.message
        );
      } else if (!isLoaded) {
        return external__react__default.a.createElement(
          'div',
          null,
          'Loading...'
        );
      } else {
        return external__react__default.a.createElement(
          'ul',
          null,
          articles.map(function (item) {
            return external__react__default.a.createElement(
              'li',
              { key: item.id },
              item.title
            );
          })
        );
      }
    }
  }]);

  return Feed;
}(external__react__default.a.Component);

/* harmony default export */ var feed = (feed_Feed);
// EXTERNAL MODULE: external "babel-runtime/regenerator"
var regenerator_ = __webpack_require__(6);
var regenerator__default = /*#__PURE__*/__webpack_require__.n(regenerator_);

// EXTERNAL MODULE: external "next/link"
var link_ = __webpack_require__(7);
var link__default = /*#__PURE__*/__webpack_require__.n(link_);

// EXTERNAL MODULE: external "isomorphic-unfetch"
var external__isomorphic_unfetch_ = __webpack_require__(8);
var external__isomorphic_unfetch__default = /*#__PURE__*/__webpack_require__.n(external__isomorphic_unfetch_);

// CONCATENATED MODULE: ./components/weather.js



function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }




var weather_Weather = function Weather(props) {
  return external__react__default.a.createElement(
    'div',
    null,
    external__react__default.a.createElement(
      'h1',
      null,
      'Batman TV Shows'
    ),
    external__react__default.a.createElement(
      'div',
      null,
      'Yokels: ',
      props.shows
    )
  );
};

weather_Weather.getInitialProps = _asyncToGenerator( /*#__PURE__*/regenerator__default.a.mark(function _callee() {
  var res, data;
  return regenerator__default.a.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return external__isomorphic_unfetch__default()('https://api.tvmaze.com/search/shows?q=batman');

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

/* harmony default export */ var weather = (weather_Weather);
// CONCATENATED MODULE: ./components/time.js
var time__createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function time__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function time__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function time__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var time_Time = function (_React$Component) {
  time__inherits(Time, _React$Component);

  function Time(props) {
    time__classCallCheck(this, Time);

    var _this = time__possibleConstructorReturn(this, (Time.__proto__ || Object.getPrototypeOf(Time)).call(this, props));

    _this.state = { date: new Date() };
    return _this;
  }

  time__createClass(Time, [{
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
      return external__react__default.a.createElement(
        'h2',
        null,
        'It is ',
        this.state.date.toLocaleTimeString(),
        '.'
      );
    }
  }]);

  return Time;
}(external__react__default.a.Component);

/* harmony default export */ var time = (time_Time);
// CONCATENATED MODULE: ./components/footer.js


var footer_Footer = function Footer() {
  return external__react__default.a.createElement(
    'footer',
    null,
    external__react__default.a.createElement(
      'h1',
      null,
      'Waiting Room Dashboard / Customer Info'
    )
  );
};

/* harmony default export */ var footer = (footer_Footer);
// CONCATENATED MODULE: ./components/app.js





// import Video from './video-player';


/* harmony default export */ var app = (function () {
  return external__react__default.a.createElement(
    'div',
    {
      className: 'jsx-557044800' + ' ' + 'main__wrap'
    },
    external__react__default.a.createElement(
      'div',
      {
        className: 'jsx-557044800' + ' ' + 'time__wrap'
      },
      external__react__default.a.createElement(time, null)
    ),
    external__react__default.a.createElement(
      'div',
      {
        className: 'jsx-557044800' + ' ' + 'feed__wrap'
      },
      external__react__default.a.createElement(feed, null)
    ),
    external__react__default.a.createElement(
      'div',
      {
        className: 'jsx-557044800' + ' ' + 'weather__wrap'
      },
      external__react__default.a.createElement(weather, null)
    ),
    external__react__default.a.createElement(
      'div',
      {
        className: 'jsx-557044800' + ' ' + 'video__wrap'
      },
      'video player'
    ),
    external__react__default.a.createElement(
      'div',
      {
        className: 'jsx-557044800' + ' ' + 'footer__wrap'
      },
      external__react__default.a.createElement(footer, null)
    ),
    external__react__default.a.createElement(style__default.a, {
      styleId: '557044800',
      css: ['.main__wrap{margin:0;padding:0;font:15px Helvetica,Arial,sans-serif;display:grid;grid-gap:20px;grid-template-columns:2fr 3fr;}', '.time__wrap{grid-column:1 / -1;justify-self:right;}', '.feed__wrap{grid-row-start:span 2;}', '.feed__wrap ul{list-style:none;padding:0;margin:0;}', '.feed__wrap li{padding:0;margin:0.5em 0;}', '.weather__wrap{overflow:hidden;-webkit-align-self:start;-ms-flex-item-align:start;align-self:start;justify-self:stretch;}', '.weather__wrap img{width:100%;}', '.video__wrap{-webkit-align-self:stretch;-ms-flex-item-align:stretch;align-self:stretch;display:grid;}', '.video__wrap iframe{height:418px;justify-self:stretch;-webkit-align-self:stretch;-ms-flex-item-align:stretch;align-self:stretch;}', '.footer__wrap{grid-column:1 / -1;justify-self:center;}']
    })
  );
});
// CONCATENATED MODULE: ./pages/index.js




/* harmony default export */ var pages = __webpack_exports__["default"] = (function () {
  return external__react__default.a.createElement(
    'div',
    null,
    external__react__default.a.createElement(
      head__default.a,
      null,
      external__react__default.a.createElement(
        'title',
        null,
        'My page title'
      ),
      external__react__default.a.createElement('meta', {
        name: 'viewport',
        content: 'initial-scale=1.0, width=device-width',
        key: 'viewport'
      })
    ),
    external__react__default.a.createElement(
      head__default.a,
      null,
      external__react__default.a.createElement('meta', {
        name: 'viewport',
        content: 'initial-scale=1.2, width=device-width',
        key: 'viewport'
      })
    ),
    external__react__default.a.createElement(app, null)
  );
});

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("newsapi");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/regenerator");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ })
/******/ ]);