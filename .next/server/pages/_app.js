/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./artifacts/contracts/contractAddress.ts":
/*!************************************************!*\
  !*** ./artifacts/contracts/contractAddress.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"CheesecakePortalContract\": () => (/* binding */ CheesecakePortalContract),\n/* harmony export */   \"MulticallContract\": () => (/* binding */ MulticallContract)\n/* harmony export */ });\nconst CheesecakePortalContract = '0x836c4ae077061155337be5E427DF8b65c4d056Bf';\nconst MulticallContract = '0x5F642CDF5C3946574044bEc965B1e7CAc65845c4';\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hcnRpZmFjdHMvY29udHJhY3RzL2NvbnRyYWN0QWRkcmVzcy50cy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFPLEtBQUssQ0FBQ0Esd0JBQXdCLEdBQUcsQ0FBNEM7QUFDN0UsS0FBSyxDQUFDQyxpQkFBaUIsR0FBRyxDQUE0QyIsInNvdXJjZXMiOlsid2VicGFjazovL2Zyb250ZW5kLy4vYXJ0aWZhY3RzL2NvbnRyYWN0cy9jb250cmFjdEFkZHJlc3MudHM/NzQxMyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgQ2hlZXNlY2FrZVBvcnRhbENvbnRyYWN0ID0gJzB4ODM2YzRhZTA3NzA2MTE1NTMzN2JlNUU0MjdERjhiNjVjNGQwNTZCZidcbmV4cG9ydCBjb25zdCBNdWx0aWNhbGxDb250cmFjdCA9ICcweDVGNjQyQ0RGNUMzOTQ2NTc0MDQ0YkVjOTY1QjFlN0NBYzY1ODQ1YzQnXG4iXSwibmFtZXMiOlsiQ2hlZXNlY2FrZVBvcnRhbENvbnRyYWN0IiwiTXVsdGljYWxsQ29udHJhY3QiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./artifacts/contracts/contractAddress.ts\n");

/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ \"@chakra-ui/react\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _usedapp_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @usedapp/core */ \"@usedapp/core\");\n/* harmony import */ var _usedapp_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_usedapp_core__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _artifacts_contracts_contractAddress__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../artifacts/contracts/contractAddress */ \"./artifacts/contracts/contractAddress.ts\");\n/* harmony import */ var styles_global_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styles/global.scss */ \"./styles/global.scss\");\n/* harmony import */ var styles_global_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styles_global_scss__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\nconst config = {\n    readOnlyUrls: {\n        [_usedapp_core__WEBPACK_IMPORTED_MODULE_2__.ChainId.Hardhat]: 'http://localhost:8545',\n        [_usedapp_core__WEBPACK_IMPORTED_MODULE_2__.ChainId.Localhost]: 'http://localhost:8545'\n    },\n    networks: [\n        _usedapp_core__WEBPACK_IMPORTED_MODULE_2__.Polygon,\n        _usedapp_core__WEBPACK_IMPORTED_MODULE_2__.Mumbai,\n        _usedapp_core__WEBPACK_IMPORTED_MODULE_2__.Localhost,\n        _usedapp_core__WEBPACK_IMPORTED_MODULE_2__.Hardhat\n    ],\n    multicallAddresses: {\n        [_usedapp_core__WEBPACK_IMPORTED_MODULE_2__.ChainId.Hardhat]: _artifacts_contracts_contractAddress__WEBPACK_IMPORTED_MODULE_4__.MulticallContract,\n        [_usedapp_core__WEBPACK_IMPORTED_MODULE_2__.ChainId.Localhost]: _artifacts_contracts_contractAddress__WEBPACK_IMPORTED_MODULE_4__.MulticallContract,\n        [_usedapp_core__WEBPACK_IMPORTED_MODULE_2__.ChainId.Mumbai]: _artifacts_contracts_contractAddress__WEBPACK_IMPORTED_MODULE_4__.MulticallContract,\n        [_usedapp_core__WEBPACK_IMPORTED_MODULE_2__.ChainId.Polygon]: _artifacts_contracts_contractAddress__WEBPACK_IMPORTED_MODULE_4__.MulticallContract\n    }\n};\nconst MyApp = ({ Component , pageProps  })=>{\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_usedapp_core__WEBPACK_IMPORTED_MODULE_2__.DAppProvider, {\n        config: config,\n        __source: {\n            fileName: \"/Users/favourchukwuedo/Documents/Opensource/web3/polygon-send-cheesecake/packages/frontend/pages/_app.tsx\",\n            lineNumber: 32,\n            columnNumber: 5\n        },\n        __self: undefined,\n        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.ChakraProvider, {\n            __source: {\n                fileName: \"/Users/favourchukwuedo/Documents/Opensource/web3/polygon-send-cheesecake/packages/frontend/pages/_app.tsx\",\n                lineNumber: 33,\n                columnNumber: 7\n            },\n            __self: undefined,\n            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Component, {\n                ...pageProps,\n                __source: {\n                    fileName: \"/Users/favourchukwuedo/Documents/Opensource/web3/polygon-send-cheesecake/packages/frontend/pages/_app.tsx\",\n                    lineNumber: 34,\n                    columnNumber: 9\n                },\n                __self: undefined\n            })\n        })\n    }));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQWlEO0FBUzNCO0FBRUc7QUFDaUQ7QUFDL0M7QUFFM0IsS0FBSyxDQUFDUyxNQUFNLEdBQVcsQ0FBQztJQUN0QkMsWUFBWSxFQUFFLENBQUM7U0FDWlQsMERBQWUsR0FBRyxDQUF1QjtTQUN6Q0EsNERBQWlCLEdBQUcsQ0FBdUI7SUFDOUMsQ0FBQztJQUVEVSxRQUFRLEVBQUUsQ0FBQ0w7UUFBQUEsa0RBQU87UUFBRUQsaURBQU07UUFBRUQsb0RBQVM7UUFBRUQsa0RBQU87SUFBQSxDQUFDO0lBQy9DUyxrQkFBa0IsRUFBRSxDQUFDO1NBQ2xCWCwwREFBZSxHQUFHTyxtRkFBaUI7U0FDbkNQLDREQUFpQixHQUFHTyxtRkFBaUI7U0FDckNQLHlEQUFjLEdBQUdPLG1GQUFpQjtTQUNsQ1AsMERBQWUsR0FBR08sbUZBQWlCO0lBQ3RDLENBQUM7QUFDSCxDQUFDO0FBQ0QsS0FBSyxDQUFDSyxLQUFLLElBQUksQ0FBQyxDQUFDQyxTQUFTLEdBQUVDLFNBQVMsRUFBVyxDQUFDLEdBQWtCLENBQUM7SUFDbEUsTUFBTSxzRUFDSGIsdURBQVk7UUFBQ08sTUFBTSxFQUFFQSxNQUFNOzs7Ozs7O3VGQUN6QlQsNERBQWM7Ozs7Ozs7MkZBQ1pjLFNBQVM7bUJBQUtDLFNBQVM7Ozs7Ozs7Ozs7QUFJaEMsQ0FBQztBQUVELGlFQUFlRixLQUFLIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9wYWdlcy9fYXBwLnRzeD8yZmJlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYWtyYVByb3ZpZGVyIH0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCdcbmltcG9ydCB7XG4gIENoYWluSWQsXG4gIENvbmZpZyxcbiAgREFwcFByb3ZpZGVyLFxuICBIYXJkaGF0LFxuICBMb2NhbGhvc3QsXG4gIE11bWJhaSxcbiAgUG9seWdvbixcbn0gZnJvbSAnQHVzZWRhcHAvY29yZSdcbmltcG9ydCB7IEFwcFByb3BzIH0gZnJvbSAnbmV4dC9hcHAnXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBNdWx0aWNhbGxDb250cmFjdCB9IGZyb20gJy4uL2FydGlmYWN0cy9jb250cmFjdHMvY29udHJhY3RBZGRyZXNzJ1xuaW1wb3J0ICdzdHlsZXMvZ2xvYmFsLnNjc3MnXG5cbmNvbnN0IGNvbmZpZzogQ29uZmlnID0ge1xuICByZWFkT25seVVybHM6IHtcbiAgICBbQ2hhaW5JZC5IYXJkaGF0XTogJ2h0dHA6Ly9sb2NhbGhvc3Q6ODU0NScsXG4gICAgW0NoYWluSWQuTG9jYWxob3N0XTogJ2h0dHA6Ly9sb2NhbGhvc3Q6ODU0NScsXG4gIH0sXG5cbiAgbmV0d29ya3M6IFtQb2x5Z29uLCBNdW1iYWksIExvY2FsaG9zdCwgSGFyZGhhdF0sXG4gIG11bHRpY2FsbEFkZHJlc3Nlczoge1xuICAgIFtDaGFpbklkLkhhcmRoYXRdOiBNdWx0aWNhbGxDb250cmFjdCxcbiAgICBbQ2hhaW5JZC5Mb2NhbGhvc3RdOiBNdWx0aWNhbGxDb250cmFjdCxcbiAgICBbQ2hhaW5JZC5NdW1iYWldOiBNdWx0aWNhbGxDb250cmFjdCxcbiAgICBbQ2hhaW5JZC5Qb2x5Z29uXTogTXVsdGljYWxsQ29udHJhY3QsXG4gIH0sXG59XG5jb25zdCBNeUFwcCA9ICh7IENvbXBvbmVudCwgcGFnZVByb3BzIH06IEFwcFByb3BzKTogSlNYLkVsZW1lbnQgPT4ge1xuICByZXR1cm4gKFxuICAgIDxEQXBwUHJvdmlkZXIgY29uZmlnPXtjb25maWd9PlxuICAgICAgPENoYWtyYVByb3ZpZGVyPlxuICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgICA8L0NoYWtyYVByb3ZpZGVyPlxuICAgIDwvREFwcFByb3ZpZGVyPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IE15QXBwXG4iXSwibmFtZXMiOlsiQ2hha3JhUHJvdmlkZXIiLCJDaGFpbklkIiwiREFwcFByb3ZpZGVyIiwiSGFyZGhhdCIsIkxvY2FsaG9zdCIsIk11bWJhaSIsIlBvbHlnb24iLCJSZWFjdCIsIk11bHRpY2FsbENvbnRyYWN0IiwiY29uZmlnIiwicmVhZE9ubHlVcmxzIiwibmV0d29ya3MiLCJtdWx0aWNhbGxBZGRyZXNzZXMiLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ "./styles/global.scss":
/*!****************************!*\
  !*** ./styles/global.scss ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "@chakra-ui/react":
/*!***********************************!*\
  !*** external "@chakra-ui/react" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@chakra-ui/react");

/***/ }),

/***/ "@usedapp/core":
/*!********************************!*\
  !*** external "@usedapp/core" ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@usedapp/core");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.tsx"));
module.exports = __webpack_exports__;

})();