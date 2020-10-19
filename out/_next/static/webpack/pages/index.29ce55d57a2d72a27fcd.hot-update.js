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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZSIsInByb3BzIiwiYW5pbWVzIiwibWFyZ2luIiwieHMiLCJzbSIsIm1kIiwibGciLCJtYXAiLCJhbmltZSIsImsiLCJhdHRyaWJ1dGVzIiwiYWdlUmF0aW5nR3VpZGUiLCJjYW5vbmljYWxUaXRsZSIsImNvdmVySW1hZ2UiLCJwb3N0ZXJJbWFnZSIsInBhdGhuYW1lIiwiaWQiLCJxdWVyeSIsInNtYWxsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBaUJlLFNBQVNBLElBQVQsQ0FBY0MsS0FBZCxFQUFxQjtBQUFBOztBQUFBLE1BQzNCQyxNQUQyQixHQUNqQkQsS0FEaUIsQ0FDM0JDLE1BRDJCO0FBR2xDLFNBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsNERBQUQ7QUFBTSxTQUFLLEVBQUMsY0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFFRSxNQUFDLDREQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRixFQUdFO0FBQU0sU0FBSyxFQUFFO0FBQUNDLFlBQU0sRUFBRTtBQUFULEtBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxnREFBRDtBQUFNLFFBQUksRUFBQyxHQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsQ0FERixDQURGLEVBTUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUMsUUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFERixDQURGLENBTkYsQ0FERixFQWNFLE1BQUMsd0NBQUQ7QUFBSyxVQUFNLEVBQUU7QUFBRUMsUUFBRSxFQUFFLENBQU47QUFBU0MsUUFBRSxFQUFFLEVBQWI7QUFBaUJDLFFBQUUsRUFBRSxFQUFyQjtBQUF5QkMsUUFBRSxFQUFFO0FBQTdCLEtBQWI7QUFBZ0QsV0FBTyxFQUFDLGNBQXhEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR0wsTUFBTSxDQUFDTSxHQUFQLENBQVcsVUFBQ0MsS0FBRCxFQUFRQyxDQUFSLEVBQWM7QUFBQSw0QkFDd0RELEtBRHhELENBQ2pCRSxVQURpQjtBQUFBLFFBQ0pDLGNBREkscUJBQ0pBLGNBREk7QUFBQSxRQUNZQyxjQURaLHFCQUNZQSxjQURaO0FBQUEsUUFDNEJDLFVBRDVCLHFCQUM0QkEsVUFENUI7QUFBQSxRQUN3Q0MsV0FEeEMscUJBQ3dDQSxXQUR4QztBQUV4QixXQUNFLE1BQUMsd0NBQUQ7QUFBSyxlQUFTLEVBQUMsWUFBZjtBQUE0QixTQUFHLEVBQUVMLENBQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRSxNQUFDLGdEQUFEO0FBQU0sVUFBSSxFQUFFO0FBQUNNLGdCQUFRLG1CQUFZUCxLQUFLLENBQUNRLEVBQWxCLENBQVQ7QUFBaUNDLGFBQUssRUFBRTtBQUFFRCxZQUFFLEVBQUVSLEtBQUssQ0FBQ1E7QUFBWjtBQUF4QyxPQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRSxNQUFDLDREQUFEO0FBQ0UsaUJBQVcsRUFBRUwsY0FEZjtBQUVFLFNBQUcsRUFBRUcsV0FBVyxDQUFDSSxLQUZuQjtBQUdFLGFBQU8sRUFBRVYsS0FIWDtBQUlFLFdBQUssRUFBRUksY0FKVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREYsQ0FERixDQURGO0FBWUQsR0FkQSxDQURILENBZEYsQ0FIRixFQW1DRSxNQUFDLDREQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFuQ0YsQ0FERjtBQXVDRDtLQTFDdUJiLEkiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMjljZTU1ZDU3YTJkNzJhMjdmY2QuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnYW50ZC9kaXN0L2FudGQuY3NzJztcclxuaW1wb3J0IHsgUm93LCBDb2wgfSBmcm9tICdhbnRkJztcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuXHJcbmltcG9ydCBDYXJkIGZyb20gJy4uL3NyYy9jb21wb25lbnRzL0NhcmQnO1xyXG5pbXBvcnQgSGVhZCBmcm9tICcuLi9zcmMvY29tcG9uZW50cy9IZWFkJztcclxuaW1wb3J0IEZvb3RlciBmcm9tICcuLi9zcmMvcGF0dGVybnMvRm9vdGVyJztcclxuaW1wb3J0IEhlYWRlciBmcm9tICcuLi9zcmMvcGF0dGVybnMvSGVhZGVyJztcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcyhjb250ZXh0KSB7XHJcbiAgY29uc3QgYW5pbWVzID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8va2l0c3UuaW8vYXBpL2VkZ2UvYW5pbWU/cGFnZVtsaW1pdF09MjAmcGFnZVtvZmZzZXRdPTAgJylcclxuICAudGhlbigocmVzcG9uc2VTZXJ2ZXIpID0+IHtcclxuICAgIGlmIChyZXNwb25zZVNlcnZlci5vaykgcmV0dXJuIHJlc3BvbnNlU2VydmVyLmpzb24oKTtcclxuICAgIHRocm93IG5ldyBFcnJvcignRGV1IHByb2JsZW1hJyk7XHJcbiAgfSlcclxuICAudGhlbigocmVzcG9uc2VPYmplY3QpID0+IHJlc3BvbnNlT2JqZWN0LmRhdGEpO1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgcHJvcHM6IHtcclxuICAgICAgYW5pbWVzLFxyXG4gICAgfSxcclxuICB9O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKHByb3BzKSB7XHJcbiAgY29uc3Qge2FuaW1lc30gPSBwcm9wcztcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxIZWFkIHRpdGxlPVwiVHJhY2sgQW5pbWVzXCIgLz5cclxuICAgICAgPEhlYWRlciAvPlxyXG4gICAgICA8bWFpbiBzdHlsZT17e21hcmdpbjogJzQwcHgnfX0+XHJcbiAgICAgICAgPHVsPlxyXG4gICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxyXG4gICAgICAgICAgICAgIDxhPkhvbWU8L2E+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvc29icmVcIj5cclxuICAgICAgICAgICAgICA8YT5Tb2JyZSBvIHByb2pldG88L2E+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgPC91bD5cclxuXHJcbiAgICAgICAgPFJvdyBndXR0ZXI9e3sgeHM6IDgsIHNtOiAxNiwgbWQ6IDI0LCBsZzogMzIgfX0ganVzdGlmeT1cInNwYWNlLWFyb3VuZFwiPlxyXG4gICAgICAgICAge2FuaW1lcy5tYXAoKGFuaW1lLCBrKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHthdHRyaWJ1dGVzOiB7YWdlUmF0aW5nR3VpZGUsIGNhbm9uaWNhbFRpdGxlLCBjb3ZlckltYWdlLCBwb3N0ZXJJbWFnZX19ID0gYW5pbWU7XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgPENvbCBjbGFzc05hbWU9XCJndXR0ZXItcm93XCIga2V5PXtrfT5cclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e3twYXRobmFtZTogYC9hbmltZS8ke2FuaW1lLmlkfWAsIHF1ZXJ5OiB7IGlkOiBhbmltZS5pZCB9fX0+XHJcbiAgICAgICAgICAgICAgICAgIDxDYXJkXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb249e2FnZVJhdGluZ0d1aWRlfSAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIGltZz17cG9zdGVySW1hZ2Uuc21hbGx9XHJcbiAgICAgICAgICAgICAgICAgICAgbWV0YUltZz17YW5pbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU9e2Nhbm9uaWNhbFRpdGxlfVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgfSl9XHJcbiAgICAgICAgPC9Sb3c+XHJcbiAgICAgIDwvbWFpbj5cclxuICAgICAgPEZvb3RlciAvPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufSJdLCJzb3VyY2VSb290IjoiIn0=