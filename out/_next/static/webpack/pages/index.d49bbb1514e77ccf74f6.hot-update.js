webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSG", function() { return __N_SSG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/dist/antd.css */ "./node_modules/antd/dist/antd.css");
/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _src_components_Card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/components/Card */ "./src/components/Card/index.js");
/* harmony import */ var _src_components_Head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../src/components/Head */ "./src/components/Head/index.js");
/* harmony import */ var _src_patterns_Footer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../src/patterns/Footer */ "./src/patterns/Footer/index.js");
/* harmony import */ var _src_patterns_Header__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../src/patterns/Header */ "./src/patterns/Header/index.js");
var _jsxFileName = "C:\\Users\\guila\\Desktop\\trackAnimes\\pages\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;








var __N_SSG = true;
function Home(props) {
  var _this = this;

  var animes = props.animes;
  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 5
    }
  }, __jsx(_src_components_Head__WEBPACK_IMPORTED_MODULE_5__["default"], {
    title: "Track Animes",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }
  }), __jsx(_src_patterns_Header__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }
  }), __jsx("main", {
    style: {
      margin: '40px'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 7
    }
  }, __jsx("ul", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 9
    }
  }, __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 11
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 13
    }
  }, __jsx("a", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 15
    }
  }, "Home"))), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 11
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/sobre",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 13
    }
  }, __jsx("a", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 15
    }
  }, "Sobre o projeto")))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    gutter: {
      xs: 8,
      sm: 16,
      md: 24,
      lg: 32
    },
    justify: "space-around",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 9
    }
  }, animes.map(function (anime, k) {
    var _anime$attributes = anime.attributes,
        ageRatingGuide = _anime$attributes.ageRatingGuide,
        canonicalTitle = _anime$attributes.canonicalTitle,
        coverImage = _anime$attributes.coverImage,
        posterImage = _anime$attributes.posterImage;
    return __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
      className: "gutter-row",
      key: k,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 15
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: {
        pathname: "/anime/".concat(anime.id),
        query: {
          id: anime.id
        }
      },
      ref: anime.self,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 17
      }
    }, __jsx(_src_components_Card__WEBPACK_IMPORTED_MODULE_4__["default"], {
      description: ageRatingGuide,
      img: posterImage.small,
      metaImg: anime,
      title: canonicalTitle,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 19
      }
    })));
  }))), __jsx(_src_patterns_Footer__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 7
    }
  }));
}
_c = Home;

var _c;

$RefreshReg$(_c, "Home");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZSIsInByb3BzIiwiYW5pbWVzIiwibWFyZ2luIiwieHMiLCJzbSIsIm1kIiwibGciLCJtYXAiLCJhbmltZSIsImsiLCJhdHRyaWJ1dGVzIiwiYWdlUmF0aW5nR3VpZGUiLCJjYW5vbmljYWxUaXRsZSIsImNvdmVySW1hZ2UiLCJwb3N0ZXJJbWFnZSIsInBhdGhuYW1lIiwiaWQiLCJxdWVyeSIsInNlbGYiLCJzbWFsbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQWlCZSxTQUFTQSxJQUFULENBQWNDLEtBQWQsRUFBcUI7QUFBQTs7QUFBQSxNQUMzQkMsTUFEMkIsR0FDakJELEtBRGlCLENBQzNCQyxNQUQyQjtBQUdsQyxTQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDREQUFEO0FBQU0sU0FBSyxFQUFDLGNBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBRUUsTUFBQyw0REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsRUFHRTtBQUFNLFNBQUssRUFBRTtBQUFDQyxZQUFNLEVBQUU7QUFBVCxLQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUMsR0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLENBREYsQ0FERixFQU1FO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLGdEQUFEO0FBQU0sUUFBSSxFQUFDLFFBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBREYsQ0FERixDQU5GLENBREYsRUFjRSxNQUFDLHdDQUFEO0FBQUssVUFBTSxFQUFFO0FBQUVDLFFBQUUsRUFBRSxDQUFOO0FBQVNDLFFBQUUsRUFBRSxFQUFiO0FBQWlCQyxRQUFFLEVBQUUsRUFBckI7QUFBeUJDLFFBQUUsRUFBRTtBQUE3QixLQUFiO0FBQWdELFdBQU8sRUFBQyxjQUF4RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dMLE1BQU0sQ0FBQ00sR0FBUCxDQUFXLFVBQUNDLEtBQUQsRUFBUUMsQ0FBUixFQUFjO0FBQUEsNEJBQ3dERCxLQUR4RCxDQUNqQkUsVUFEaUI7QUFBQSxRQUNKQyxjQURJLHFCQUNKQSxjQURJO0FBQUEsUUFDWUMsY0FEWixxQkFDWUEsY0FEWjtBQUFBLFFBQzRCQyxVQUQ1QixxQkFDNEJBLFVBRDVCO0FBQUEsUUFDd0NDLFdBRHhDLHFCQUN3Q0EsV0FEeEM7QUFFeEIsV0FDRSxNQUFDLHdDQUFEO0FBQUssZUFBUyxFQUFDLFlBQWY7QUFBNEIsU0FBRyxFQUFFTCxDQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0UsTUFBQyxnREFBRDtBQUFNLFVBQUksRUFBRTtBQUFDTSxnQkFBUSxtQkFBWVAsS0FBSyxDQUFDUSxFQUFsQixDQUFUO0FBQWlDQyxhQUFLLEVBQUU7QUFBRUQsWUFBRSxFQUFFUixLQUFLLENBQUNRO0FBQVo7QUFBeEMsT0FBWjtBQUF1RSxTQUFHLEVBQUVSLEtBQUssQ0FBQ1UsSUFBbEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFLE1BQUMsNERBQUQ7QUFDRSxpQkFBVyxFQUFFUCxjQURmO0FBRUUsU0FBRyxFQUFFRyxXQUFXLENBQUNLLEtBRm5CO0FBR0UsYUFBTyxFQUFFWCxLQUhYO0FBSUUsV0FBSyxFQUFFSSxjQUpUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFERixDQURGLENBREY7QUFZRCxHQWRBLENBREgsQ0FkRixDQUhGLEVBbUNFLE1BQUMsNERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQW5DRixDQURGO0FBdUNEO0tBMUN1QmIsSSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5kNDliYmIxNTE0ZTc3Y2NmNzRmNi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICdhbnRkL2Rpc3QvYW50ZC5jc3MnO1xyXG5pbXBvcnQgeyBSb3csIENvbCB9IGZyb20gJ2FudGQnO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5cclxuaW1wb3J0IENhcmQgZnJvbSAnLi4vc3JjL2NvbXBvbmVudHMvQ2FyZCc7XHJcbmltcG9ydCBIZWFkIGZyb20gJy4uL3NyYy9jb21wb25lbnRzL0hlYWQnO1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uL3NyYy9wYXR0ZXJucy9Gb290ZXInO1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uL3NyYy9wYXR0ZXJucy9IZWFkZXInO1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKGNvbnRleHQpIHtcclxuICBjb25zdCBhbmltZXMgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9raXRzdS5pby9hcGkvZWRnZS9hbmltZT9wYWdlW2xpbWl0XT0yMCZwYWdlW29mZnNldF09MCAnKVxyXG4gIC50aGVuKChyZXNwb25zZVNlcnZlcikgPT4ge1xyXG4gICAgaWYgKHJlc3BvbnNlU2VydmVyLm9rKSByZXR1cm4gcmVzcG9uc2VTZXJ2ZXIuanNvbigpO1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKCdEZXUgcHJvYmxlbWEnKTtcclxuICB9KVxyXG4gIC50aGVuKChyZXNwb25zZU9iamVjdCkgPT4gcmVzcG9uc2VPYmplY3QuZGF0YSk7XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBwcm9wczoge1xyXG4gICAgICBhbmltZXMsXHJcbiAgICB9LFxyXG4gIH07XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUocHJvcHMpIHtcclxuICBjb25zdCB7YW5pbWVzfSA9IHByb3BzO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPEhlYWQgdGl0bGU9XCJUcmFjayBBbmltZXNcIiAvPlxyXG4gICAgICA8SGVhZGVyIC8+XHJcbiAgICAgIDxtYWluIHN0eWxlPXt7bWFyZ2luOiAnNDBweCd9fT5cclxuICAgICAgICA8dWw+XHJcbiAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgICAgICAgPGE+SG9tZTwvYT5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9zb2JyZVwiPlxyXG4gICAgICAgICAgICAgIDxhPlNvYnJlIG8gcHJvamV0bzwvYT5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICA8L3VsPlxyXG5cclxuICAgICAgICA8Um93IGd1dHRlcj17eyB4czogOCwgc206IDE2LCBtZDogMjQsIGxnOiAzMiB9fSBqdXN0aWZ5PVwic3BhY2UtYXJvdW5kXCI+XHJcbiAgICAgICAgICB7YW5pbWVzLm1hcCgoYW5pbWUsIGspID0+IHtcclxuICAgICAgICAgICAgY29uc3Qge2F0dHJpYnV0ZXM6IHthZ2VSYXRpbmdHdWlkZSwgY2Fub25pY2FsVGl0bGUsIGNvdmVySW1hZ2UsIHBvc3RlckltYWdlfX0gPSBhbmltZTtcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICA8Q29sIGNsYXNzTmFtZT1cImd1dHRlci1yb3dcIiBrZXk9e2t9PlxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj17e3BhdGhuYW1lOiBgL2FuaW1lLyR7YW5pbWUuaWR9YCwgcXVlcnk6IHsgaWQ6IGFuaW1lLmlkIH19fSByZWY9e2FuaW1lLnNlbGZ9PlxyXG4gICAgICAgICAgICAgICAgICA8Q2FyZFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPXthZ2VSYXRpbmdHdWlkZX0gICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBpbWc9e3Bvc3RlckltYWdlLnNtYWxsfVxyXG4gICAgICAgICAgICAgICAgICAgIG1ldGFJbWc9e2FuaW1lfVxyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlPXtjYW5vbmljYWxUaXRsZX1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgIH0pfVxyXG4gICAgICAgIDwvUm93PlxyXG4gICAgICA8L21haW4+XHJcbiAgICAgIDxGb290ZXIgLz5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9