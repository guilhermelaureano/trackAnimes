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
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 17
      }
    }, __jsx("a", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 19
      }
    }, __jsx(_src_components_Card__WEBPACK_IMPORTED_MODULE_4__["default"], {
      description: ageRatingGuide,
      img: posterImage.small,
      metaImg: anime,
      title: canonicalTitle,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 19
      }
    }))));
  }))), __jsx(_src_patterns_Footer__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZSIsInByb3BzIiwiYW5pbWVzIiwibWFyZ2luIiwieHMiLCJzbSIsIm1kIiwibGciLCJtYXAiLCJhbmltZSIsImsiLCJhdHRyaWJ1dGVzIiwiYWdlUmF0aW5nR3VpZGUiLCJjYW5vbmljYWxUaXRsZSIsImNvdmVySW1hZ2UiLCJwb3N0ZXJJbWFnZSIsInBhdGhuYW1lIiwiaWQiLCJxdWVyeSIsInNtYWxsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBaUJlLFNBQVNBLElBQVQsQ0FBY0MsS0FBZCxFQUFxQjtBQUFBOztBQUFBLE1BQzNCQyxNQUQyQixHQUNqQkQsS0FEaUIsQ0FDM0JDLE1BRDJCO0FBR2xDLFNBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsNERBQUQ7QUFBTSxTQUFLLEVBQUMsY0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFFRSxNQUFDLDREQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRixFQUdFO0FBQU0sU0FBSyxFQUFFO0FBQUNDLFlBQU0sRUFBRTtBQUFULEtBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxnREFBRDtBQUFNLFFBQUksRUFBQyxHQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsQ0FERixDQURGLEVBTUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUMsUUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFERixDQURGLENBTkYsQ0FERixFQWNFLE1BQUMsd0NBQUQ7QUFBSyxVQUFNLEVBQUU7QUFBRUMsUUFBRSxFQUFFLENBQU47QUFBU0MsUUFBRSxFQUFFLEVBQWI7QUFBaUJDLFFBQUUsRUFBRSxFQUFyQjtBQUF5QkMsUUFBRSxFQUFFO0FBQTdCLEtBQWI7QUFBZ0QsV0FBTyxFQUFDLGNBQXhEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR0wsTUFBTSxDQUFDTSxHQUFQLENBQVcsVUFBQ0MsS0FBRCxFQUFRQyxDQUFSLEVBQWM7QUFBQSw0QkFDd0RELEtBRHhELENBQ2pCRSxVQURpQjtBQUFBLFFBQ0pDLGNBREkscUJBQ0pBLGNBREk7QUFBQSxRQUNZQyxjQURaLHFCQUNZQSxjQURaO0FBQUEsUUFDNEJDLFVBRDVCLHFCQUM0QkEsVUFENUI7QUFBQSxRQUN3Q0MsV0FEeEMscUJBQ3dDQSxXQUR4QztBQUV4QixXQUNFLE1BQUMsd0NBQUQ7QUFBSyxlQUFTLEVBQUMsWUFBZjtBQUE0QixTQUFHLEVBQUVMLENBQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRSxNQUFDLGdEQUFEO0FBQU0sVUFBSSxFQUFFO0FBQUNNLGdCQUFRLG1CQUFZUCxLQUFLLENBQUNRLEVBQWxCLENBQVQ7QUFBaUNDLGFBQUssRUFBRTtBQUFFRCxZQUFFLEVBQUVSLEtBQUssQ0FBQ1E7QUFBWjtBQUF4QyxPQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0EsTUFBQyw0REFBRDtBQUNFLGlCQUFXLEVBQUVMLGNBRGY7QUFFRSxTQUFHLEVBQUVHLFdBQVcsQ0FBQ0ksS0FGbkI7QUFHRSxhQUFPLEVBQUVWLEtBSFg7QUFJRSxXQUFLLEVBQUVJLGNBSlQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURBLENBREYsQ0FERixDQURGO0FBY0QsR0FoQkEsQ0FESCxDQWRGLENBSEYsRUFxQ0UsTUFBQyw0REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBckNGLENBREY7QUF5Q0Q7S0E1Q3VCYixJIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjdjNWIyOGY4OTQ3MDQxNjA5YWNmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJ2FudGQvZGlzdC9hbnRkLmNzcyc7XHJcbmltcG9ydCB7IFJvdywgQ29sIH0gZnJvbSAnYW50ZCc7XHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcblxyXG5pbXBvcnQgQ2FyZCBmcm9tICcuLi9zcmMvY29tcG9uZW50cy9DYXJkJztcclxuaW1wb3J0IEhlYWQgZnJvbSAnLi4vc3JjL2NvbXBvbmVudHMvSGVhZCc7XHJcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vc3JjL3BhdHRlcm5zL0Zvb3Rlcic7XHJcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vc3JjL3BhdHRlcm5zL0hlYWRlcic7XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoY29udGV4dCkge1xyXG4gIGNvbnN0IGFuaW1lcyA9IGF3YWl0IGZldGNoKCdodHRwczovL2tpdHN1LmlvL2FwaS9lZGdlL2FuaW1lP3BhZ2VbbGltaXRdPTIwJnBhZ2Vbb2Zmc2V0XT0wICcpXHJcbiAgLnRoZW4oKHJlc3BvbnNlU2VydmVyKSA9PiB7XHJcbiAgICBpZiAocmVzcG9uc2VTZXJ2ZXIub2spIHJldHVybiByZXNwb25zZVNlcnZlci5qc29uKCk7XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0RldSBwcm9ibGVtYScpO1xyXG4gIH0pXHJcbiAgLnRoZW4oKHJlc3BvbnNlT2JqZWN0KSA9PiByZXNwb25zZU9iamVjdC5kYXRhKTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHByb3BzOiB7XHJcbiAgICAgIGFuaW1lcyxcclxuICAgIH0sXHJcbiAgfTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZShwcm9wcykge1xyXG4gIGNvbnN0IHthbmltZXN9ID0gcHJvcHM7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8SGVhZCB0aXRsZT1cIlRyYWNrIEFuaW1lc1wiIC8+XHJcbiAgICAgIDxIZWFkZXIgLz5cclxuICAgICAgPG1haW4gc3R5bGU9e3ttYXJnaW46ICc0MHB4J319PlxyXG4gICAgICAgIDx1bD5cclxuICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cclxuICAgICAgICAgICAgICA8YT5Ib21lPC9hPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICA8TGluayBocmVmPVwiL3NvYnJlXCI+XHJcbiAgICAgICAgICAgICAgPGE+U29icmUgbyBwcm9qZXRvPC9hPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICA8L2xpPlxyXG4gICAgICAgIDwvdWw+XHJcblxyXG4gICAgICAgIDxSb3cgZ3V0dGVyPXt7IHhzOiA4LCBzbTogMTYsIG1kOiAyNCwgbGc6IDMyIH19IGp1c3RpZnk9XCJzcGFjZS1hcm91bmRcIj5cclxuICAgICAgICAgIHthbmltZXMubWFwKChhbmltZSwgaykgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCB7YXR0cmlidXRlczoge2FnZVJhdGluZ0d1aWRlLCBjYW5vbmljYWxUaXRsZSwgY292ZXJJbWFnZSwgcG9zdGVySW1hZ2V9fSA9IGFuaW1lO1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgIDxDb2wgY2xhc3NOYW1lPVwiZ3V0dGVyLXJvd1wiIGtleT17a30+XHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPXt7cGF0aG5hbWU6IGAvYW5pbWUvJHthbmltZS5pZH1gLCBxdWVyeTogeyBpZDogYW5pbWUuaWQgfX19PlxyXG4gICAgICAgICAgICAgICAgICA8YT5cclxuICAgICAgICAgICAgICAgICAgPENhcmRcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj17YWdlUmF0aW5nR3VpZGV9ICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgaW1nPXtwb3N0ZXJJbWFnZS5zbWFsbH1cclxuICAgICAgICAgICAgICAgICAgICBtZXRhSW1nPXthbmltZX1cclxuICAgICAgICAgICAgICAgICAgICB0aXRsZT17Y2Fub25pY2FsVGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgIH0pfVxyXG4gICAgICAgIDwvUm93PlxyXG4gICAgICA8L21haW4+XHJcbiAgICAgIDxGb290ZXIgLz5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9