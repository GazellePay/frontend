"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/layout/Head.tsx":
/*!************************************!*\
  !*** ./components/layout/Head.tsx ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"WEBSITE_HOST_URL\": function() { return /* binding */ WEBSITE_HOST_URL; },\n/* harmony export */   \"Head\": function() { return /* binding */ Head; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"../../node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"../../node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"../../node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"../../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {\n        };\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nvar _this = undefined;\nvar _s = $RefreshSig$();\n/**\n * Constants & Helpers\n */ var WEBSITE_HOST_URL = 'https://nextjs-ethereum-starter.vercel.app/';\n/**\n * Component\n */ var Head = function(param) {\n    var customMeta = param.customMeta;\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    var meta = _objectSpread({\n        title: 'GazellePay',\n        description: 'GoFundMe for Opensource Projects the Web3 Way :)',\n        // image: `/images/site-preview.png`,\n        type: 'website'\n    }, customMeta);\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n        __source: {\n            fileName: \"/Users/favourchukwuedo/Documents/Opensource/web3/polygon-send-cheesecake/packages/frontend/components/layout/Head.tsx\",\n            lineNumber: 38,\n            columnNumber: 5\n        },\n        __self: _this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"title\", {\n                __source: {\n                    fileName: \"/Users/favourchukwuedo/Documents/Opensource/web3/polygon-send-cheesecake/packages/frontend/components/layout/Head.tsx\",\n                    lineNumber: 39,\n                    columnNumber: 7\n                },\n                __self: _this,\n                children: meta.title\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"meta\", {\n                content: meta.description,\n                name: \"description\",\n                __source: {\n                    fileName: \"/Users/favourchukwuedo/Documents/Opensource/web3/polygon-send-cheesecake/packages/frontend/components/layout/Head.tsx\",\n                    lineNumber: 40,\n                    columnNumber: 7\n                },\n                __self: _this\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"meta\", {\n                property: \"og:url\",\n                content: \"\".concat(WEBSITE_HOST_URL).concat(router.asPath),\n                __source: {\n                    fileName: \"/Users/favourchukwuedo/Documents/Opensource/web3/polygon-send-cheesecake/packages/frontend/components/layout/Head.tsx\",\n                    lineNumber: 41,\n                    columnNumber: 7\n                },\n                __self: _this\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"link\", {\n                rel: \"canonical\",\n                href: \"\".concat(WEBSITE_HOST_URL).concat(router.asPath),\n                __source: {\n                    fileName: \"/Users/favourchukwuedo/Documents/Opensource/web3/polygon-send-cheesecake/packages/frontend/components/layout/Head.tsx\",\n                    lineNumber: 42,\n                    columnNumber: 7\n                },\n                __self: _this\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"link\", {\n                rel: \"shortcut icon\",\n                href: \"/favicon.ico\",\n                __source: {\n                    fileName: \"/Users/favourchukwuedo/Documents/Opensource/web3/polygon-send-cheesecake/packages/frontend/components/layout/Head.tsx\",\n                    lineNumber: 43,\n                    columnNumber: 7\n                },\n                __self: _this\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"meta\", {\n                property: \"og:type\",\n                content: meta.type,\n                __source: {\n                    fileName: \"/Users/favourchukwuedo/Documents/Opensource/web3/polygon-send-cheesecake/packages/frontend/components/layout/Head.tsx\",\n                    lineNumber: 44,\n                    columnNumber: 7\n                },\n                __self: _this\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"meta\", {\n                property: \"og:site_name\",\n                content: \"Send XX a Cheesecake\",\n                __source: {\n                    fileName: \"/Users/favourchukwuedo/Documents/Opensource/web3/polygon-send-cheesecake/packages/frontend/components/layout/Head.tsx\",\n                    lineNumber: 45,\n                    columnNumber: 7\n                },\n                __self: _this\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"meta\", {\n                property: \"og:description\",\n                content: meta.description,\n                __source: {\n                    fileName: \"/Users/favourchukwuedo/Documents/Opensource/web3/polygon-send-cheesecake/packages/frontend/components/layout/Head.tsx\",\n                    lineNumber: 46,\n                    columnNumber: 7\n                },\n                __self: _this\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"meta\", {\n                property: \"og:title\",\n                content: meta.title,\n                __source: {\n                    fileName: \"/Users/favourchukwuedo/Documents/Opensource/web3/polygon-send-cheesecake/packages/frontend/components/layout/Head.tsx\",\n                    lineNumber: 47,\n                    columnNumber: 7\n                },\n                __self: _this\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"meta\", {\n                property: \"og:image\",\n                content: meta.image,\n                __source: {\n                    fileName: \"/Users/favourchukwuedo/Documents/Opensource/web3/polygon-send-cheesecake/packages/frontend/components/layout/Head.tsx\",\n                    lineNumber: 48,\n                    columnNumber: 7\n                },\n                __self: _this\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"meta\", {\n                name: \"twitter:card\",\n                content: \"summary_large_image\",\n                __source: {\n                    fileName: \"/Users/favourchukwuedo/Documents/Opensource/web3/polygon-send-cheesecake/packages/frontend/components/layout/Head.tsx\",\n                    lineNumber: 49,\n                    columnNumber: 7\n                },\n                __self: _this\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"meta\", {\n                name: \"twitter:title\",\n                content: meta.title,\n                __source: {\n                    fileName: \"/Users/favourchukwuedo/Documents/Opensource/web3/polygon-send-cheesecake/packages/frontend/components/layout/Head.tsx\",\n                    lineNumber: 50,\n                    columnNumber: 7\n                },\n                __self: _this\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"meta\", {\n                name: \"twitter:description\",\n                content: meta.description,\n                __source: {\n                    fileName: \"/Users/favourchukwuedo/Documents/Opensource/web3/polygon-send-cheesecake/packages/frontend/components/layout/Head.tsx\",\n                    lineNumber: 51,\n                    columnNumber: 7\n                },\n                __self: _this\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"meta\", {\n                name: \"twitter:image\",\n                content: meta.image,\n                __source: {\n                    fileName: \"/Users/favourchukwuedo/Documents/Opensource/web3/polygon-send-cheesecake/packages/frontend/components/layout/Head.tsx\",\n                    lineNumber: 52,\n                    columnNumber: 7\n                },\n                __self: _this\n            })\n        ]\n    }));\n};\n_s(Head, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = Head;\nvar _c;\n$RefreshReg$(_c, \"Head\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2xheW91dC9IZWFkLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBZ0M7QUFDTztBQUNkOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV6QixFQUVHOztDQUFBLEdBQ0ksR0FBSyxDQUFDRyxnQkFBZ0IsR0FBRyxDQUE2QztBQVk3RSxFQUVHOztDQUFBLEdBQ0ksR0FBSyxDQUFDQyxJQUFJLEdBQUcsUUFDZixRQUdjLENBQUM7UUFIbEJDLFVBQVUsU0FBVkEsVUFBVTs7SUFJVixHQUFLLENBQUNDLE1BQU0sR0FBR0wsc0RBQVM7SUFDeEIsR0FBSyxDQUFDTSxJQUFJO1FBQ1JDLEtBQUssRUFBRSxDQUFZO1FBQ25CQyxXQUFXLEVBQUUsQ0FBa0Q7UUFDL0QsRUFBcUM7UUFDckNDLElBQUksRUFBRSxDQUFTO09BQ1pMLFVBQVU7SUFHZixNQUFNLHVFQUNITCxrREFBUTs7Ozs7Ozs7aUZBQ05RLENBQUs7Ozs7Ozs7MEJBQUVELElBQUksQ0FBQ0MsS0FBSzs7aUZBQ2pCRCxDQUFJO2dCQUFDSSxPQUFPLEVBQUVKLElBQUksQ0FBQ0UsV0FBVztnQkFBRUcsSUFBSSxFQUFDLENBQWE7Ozs7Ozs7O2lGQUNsREwsQ0FBSTtnQkFBQ00sUUFBUSxFQUFDLENBQVE7Z0JBQUNGLE9BQU8sRUFBRyxHQUFxQkwsTUFBYSxDQUFoQ0gsZ0JBQWdCLEVBQWlCLE9BQWRHLE1BQU0sQ0FBQ1EsTUFBTTs7Ozs7Ozs7aUZBQ25FQyxDQUFJO2dCQUFDQyxHQUFHLEVBQUMsQ0FBVztnQkFBQ0MsSUFBSSxFQUFHLEdBQXFCWCxNQUFhLENBQWhDSCxnQkFBZ0IsRUFBaUIsT0FBZEcsTUFBTSxDQUFDUSxNQUFNOzs7Ozs7OztpRkFDOURDLENBQUk7Z0JBQUNDLEdBQUcsRUFBQyxDQUFlO2dCQUFDQyxJQUFJLEVBQUMsQ0FBYzs7Ozs7Ozs7aUZBQzVDVixDQUFJO2dCQUFDTSxRQUFRLEVBQUMsQ0FBUztnQkFBQ0YsT0FBTyxFQUFFSixJQUFJLENBQUNHLElBQUk7Ozs7Ozs7O2lGQUMxQ0gsQ0FBSTtnQkFBQ00sUUFBUSxFQUFDLENBQWM7Z0JBQUNGLE9BQU8sRUFBQyxDQUFzQjs7Ozs7Ozs7aUZBQzNESixDQUFJO2dCQUFDTSxRQUFRLEVBQUMsQ0FBZ0I7Z0JBQUNGLE9BQU8sRUFBRUosSUFBSSxDQUFDRSxXQUFXOzs7Ozs7OztpRkFDeERGLENBQUk7Z0JBQUNNLFFBQVEsRUFBQyxDQUFVO2dCQUFDRixPQUFPLEVBQUVKLElBQUksQ0FBQ0MsS0FBSzs7Ozs7Ozs7aUZBQzVDRCxDQUFJO2dCQUFDTSxRQUFRLEVBQUMsQ0FBVTtnQkFBQ0YsT0FBTyxFQUFFSixJQUFJLENBQUNXLEtBQUs7Ozs7Ozs7O2lGQUM1Q1gsQ0FBSTtnQkFBQ0ssSUFBSSxFQUFDLENBQWM7Z0JBQUNELE9BQU8sRUFBQyxDQUFxQjs7Ozs7Ozs7aUZBQ3RESixDQUFJO2dCQUFDSyxJQUFJLEVBQUMsQ0FBZTtnQkFBQ0QsT0FBTyxFQUFFSixJQUFJLENBQUNDLEtBQUs7Ozs7Ozs7O2lGQUM3Q0QsQ0FBSTtnQkFBQ0ssSUFBSSxFQUFDLENBQXFCO2dCQUFDRCxPQUFPLEVBQUVKLElBQUksQ0FBQ0UsV0FBVzs7Ozs7Ozs7aUZBQ3pERixDQUFJO2dCQUFDSyxJQUFJLEVBQUMsQ0FBZTtnQkFBQ0QsT0FBTyxFQUFFSixJQUFJLENBQUNXLEtBQUs7Ozs7Ozs7Ozs7QUFHcEQsQ0FBQztHQWhDWWQsSUFBSTs7UUFLQUgsa0RBQVM7OztLQUxiRyxJQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvbGF5b3V0L0hlYWQudHN4PzY3NDYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE5leHRIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG4vKipcbiAqIENvbnN0YW50cyAmIEhlbHBlcnNcbiAqL1xuZXhwb3J0IGNvbnN0IFdFQlNJVEVfSE9TVF9VUkwgPSAnaHR0cHM6Ly9uZXh0anMtZXRoZXJldW0tc3RhcnRlci52ZXJjZWwuYXBwLydcblxuLyoqXG4gKiBQcm9wIFR5cGVzXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgTWV0YVByb3BzIHtcbiAgZGVzY3JpcHRpb24/OiBzdHJpbmdcbiAgaW1hZ2U/OiBzdHJpbmdcbiAgdGl0bGU6IHN0cmluZ1xuICB0eXBlPzogc3RyaW5nXG59XG5cbi8qKlxuICogQ29tcG9uZW50XG4gKi9cbmV4cG9ydCBjb25zdCBIZWFkID0gKHtcbiAgY3VzdG9tTWV0YSxcbn06IHtcbiAgY3VzdG9tTWV0YT86IE1ldGFQcm9wc1xufSk6IEpTWC5FbGVtZW50ID0+IHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcbiAgY29uc3QgbWV0YTogTWV0YVByb3BzID0ge1xuICAgIHRpdGxlOiAnR2F6ZWxsZVBheScsXG4gICAgZGVzY3JpcHRpb246ICdHb0Z1bmRNZSBmb3IgT3BlbnNvdXJjZSBQcm9qZWN0cyB0aGUgV2ViMyBXYXkgOiknLFxuICAgIC8vIGltYWdlOiBgL2ltYWdlcy9zaXRlLXByZXZpZXcucG5nYCxcbiAgICB0eXBlOiAnd2Vic2l0ZScsXG4gICAgLi4uY3VzdG9tTWV0YSxcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPE5leHRIZWFkPlxuICAgICAgPHRpdGxlPnttZXRhLnRpdGxlfTwvdGl0bGU+XG4gICAgICA8bWV0YSBjb250ZW50PXttZXRhLmRlc2NyaXB0aW9ufSBuYW1lPVwiZGVzY3JpcHRpb25cIiAvPlxuICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzp1cmxcIiBjb250ZW50PXtgJHtXRUJTSVRFX0hPU1RfVVJMfSR7cm91dGVyLmFzUGF0aH1gfSAvPlxuICAgICAgPGxpbmsgcmVsPVwiY2Fub25pY2FsXCIgaHJlZj17YCR7V0VCU0lURV9IT1NUX1VSTH0ke3JvdXRlci5hc1BhdGh9YH0gLz5cbiAgICAgIDxsaW5rIHJlbD1cInNob3J0Y3V0IGljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cbiAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6dHlwZVwiIGNvbnRlbnQ9e21ldGEudHlwZX0gLz5cbiAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6c2l0ZV9uYW1lXCIgY29udGVudD1cIlNlbmQgWFggYSBDaGVlc2VjYWtlXCIgLz5cbiAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6ZGVzY3JpcHRpb25cIiBjb250ZW50PXttZXRhLmRlc2NyaXB0aW9ufSAvPlxuICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzp0aXRsZVwiIGNvbnRlbnQ9e21ldGEudGl0bGV9IC8+XG4gICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOmltYWdlXCIgY29udGVudD17bWV0YS5pbWFnZX0gLz5cbiAgICAgIDxtZXRhIG5hbWU9XCJ0d2l0dGVyOmNhcmRcIiBjb250ZW50PVwic3VtbWFyeV9sYXJnZV9pbWFnZVwiIC8+XG4gICAgICA8bWV0YSBuYW1lPVwidHdpdHRlcjp0aXRsZVwiIGNvbnRlbnQ9e21ldGEudGl0bGV9IC8+XG4gICAgICA8bWV0YSBuYW1lPVwidHdpdHRlcjpkZXNjcmlwdGlvblwiIGNvbnRlbnQ9e21ldGEuZGVzY3JpcHRpb259IC8+XG4gICAgICA8bWV0YSBuYW1lPVwidHdpdHRlcjppbWFnZVwiIGNvbnRlbnQ9e21ldGEuaW1hZ2V9IC8+XG4gICAgPC9OZXh0SGVhZD5cbiAgKVxufVxuIl0sIm5hbWVzIjpbIk5leHRIZWFkIiwidXNlUm91dGVyIiwiUmVhY3QiLCJXRUJTSVRFX0hPU1RfVVJMIiwiSGVhZCIsImN1c3RvbU1ldGEiLCJyb3V0ZXIiLCJtZXRhIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsInR5cGUiLCJjb250ZW50IiwibmFtZSIsInByb3BlcnR5IiwiYXNQYXRoIiwibGluayIsInJlbCIsImhyZWYiLCJpbWFnZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/layout/Head.tsx\n");

/***/ })

});