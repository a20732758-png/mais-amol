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
exports.id = "pages/404";
exports.ids = ["pages/404"];
exports.modules = {

/***/ "./locales lazy recursive ^\\.\\/.*\\.json$":
/*!*******************************************************!*\
  !*** ./locales/ lazy ^\.\/.*\.json$ namespace object ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./en.json": [
		"./locales/en.json",
		"locales_en_json"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return __webpack_require__.e(ids[1]).then(() => {
		return __webpack_require__.t(id, 3 | 16);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = "./locales lazy recursive ^\\.\\/.*\\.json$";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./pages/404.js":
/*!**********************!*\
  !*** ./pages/404.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"getStaticProps\": () => (/* binding */ getStaticProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"styled-jsx/style\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_intl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next-intl */ \"next-intl\");\n/* harmony import */ var next_intl__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_intl__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nconst NotFound = (props)=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"jsx-2458e1769bc4b2a3\" + \" \" + \"not-found-container1\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                            className: \"jsx-2458e1769bc4b2a3\",\n                            children: \"404 - Not Found\"\n                        }, void 0, false, {\n                            fileName: \"/home/project/pages/404.js\",\n                            lineNumber: 11,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/home/project/pages/404.js\",\n                        lineNumber: 10,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        className: \"jsx-2458e1769bc4b2a3\",\n                        children: \"OOPS! PAGE NOT FOUND\"\n                    }, void 0, false, {\n                        fileName: \"/home/project/pages/404.js\",\n                        lineNumber: 13,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"jsx-2458e1769bc4b2a3\" + \" \" + \"not-found-container2\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            className: \"jsx-2458e1769bc4b2a3\" + \" \" + \"not-found-text2\",\n                            children: \"404\"\n                        }, void 0, false, {\n                            fileName: \"/home/project/pages/404.js\",\n                            lineNumber: 15,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/home/project/pages/404.js\",\n                        lineNumber: 14,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"jsx-2458e1769bc4b2a3\" + \" \" + \"not-found-container3\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            className: \"jsx-2458e1769bc4b2a3\" + \" \" + \"not-found-text3\",\n                            children: \"WE ARE SORRY, BUT THE PAGE YOU REQUESTED WAS NOT FOUND\"\n                        }, void 0, false, {\n                            fileName: \"/home/project/pages/404.js\",\n                            lineNumber: 18,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/home/project/pages/404.js\",\n                        lineNumber: 17,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/project/pages/404.js\",\n                lineNumber: 9,\n                columnNumber: 7\n            }, undefined),\n            (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {\n                id: \"2458e1769bc4b2a3\",\n                children: \".not-found-container1.jsx-2458e1769bc4b2a3{width:100%;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;overflow:auto;min-height:100vh;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center}.not-found-container2.jsx-2458e1769bc4b2a3{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;position:relative;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center}.not-found-text2.jsx-2458e1769bc4b2a3{color:rgb(38,38,38);font-size:252px;margin-top:-20px;font-weight:900;margin-bottom:-20px;letter-spacing:-20px}.not-found-container3.jsx-2458e1769bc4b2a3{width:421px;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center}.not-found-text3.jsx-2458e1769bc4b2a3{text-align:center;font-weight:400}\"\n            }, void 0, false, void 0, undefined)\n        ]\n    }, void 0, true);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NotFound);\nasync function getStaticProps(context) {\n    const messages = (await __webpack_require__(\"./locales lazy recursive ^\\\\.\\\\/.*\\\\.json$\")(\"./\" + context.locale + \".json\")).default;\n    return {\n        props: {\n            messages,\n            ...context\n        }\n    };\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy80MDQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQXlCO0FBQ0c7QUFFZTtBQUUzQyxNQUFNRyxRQUFRLEdBQUcsQ0FBQ0MsS0FBSyxHQUFLO0lBQzFCLHFCQUNFOzswQkFDRSw4REFBQ0MsS0FBRzswREFBVyxzQkFBc0I7O2tDQUNuQyw4REFBQ0osa0RBQUk7a0NBQ0gsNEVBQUNLLE9BQUs7O3NDQUFDLGlCQUFlOzs7OztxQ0FBUTs7Ozs7aUNBQ3pCO2tDQUNQLDhEQUFDQyxJQUFFOztrQ0FBQyxzQkFBb0I7Ozs7O2lDQUFLO2tDQUM3Qiw4REFBQ0YsS0FBRztrRUFBVyxzQkFBc0I7a0NBQ25DLDRFQUFDRyxJQUFFO3NFQUFXLGlCQUFpQjtzQ0FBQyxLQUFHOzs7OztxQ0FBSzs7Ozs7aUNBQ3BDO2tDQUNOLDhEQUFDSCxLQUFHO2tFQUFXLHNCQUFzQjtrQ0FDbkMsNEVBQUNJLElBQUU7c0VBQVcsaUJBQWlCO3NDQUFDLHdEQUVoQzs7Ozs7cUNBQUs7Ozs7O2lDQUNEOzs7Ozs7eUJBQ0Y7Ozs7OztvQkF3Q0wsQ0FDSjtBQUNILENBQUM7QUFFRCxpRUFBZU4sUUFBUTtBQUVoQixlQUFlTyxjQUFjLENBQUNDLE9BQU8sRUFBRTtJQUM1QyxNQUFNQyxRQUFRLEdBQUcsQ0FBQyxNQUFNLGtFQUFPLElBQVcsR0FBR0QsT0FBTyxDQUFDRSxNQUFNLEdBQUcsT0FBTyxDQUFDLEVBQ25FQyxPQUFPO0lBQ1YsT0FBTztRQUNMVixLQUFLLEVBQUU7WUFDTFEsUUFBUTtZQUNSLEdBQUdELE9BQU87U0FDWDtLQUNGO0FBQ0gsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2plYWxvdXMtYWZmZWN0aW9uYXRlLWNob3VnaC8uL3BhZ2VzLzQwNC5qcz8zZWQ5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcblxuaW1wb3J0IHsgdXNlVHJhbnNsYXRpb25zIH0gZnJvbSAnbmV4dC1pbnRsJ1xuXG5jb25zdCBOb3RGb3VuZCA9IChwcm9wcykgPT4ge1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5vdC1mb3VuZC1jb250YWluZXIxXCI+XG4gICAgICAgIDxIZWFkPlxuICAgICAgICAgIDx0aXRsZT40MDQgLSBOb3QgRm91bmQ8L3RpdGxlPlxuICAgICAgICA8L0hlYWQ+XG4gICAgICAgIDxoMz5PT1BTISBQQUdFIE5PVCBGT1VORDwvaDM+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibm90LWZvdW5kLWNvbnRhaW5lcjJcIj5cbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwibm90LWZvdW5kLXRleHQyXCI+NDA0PC9oMT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibm90LWZvdW5kLWNvbnRhaW5lcjNcIj5cbiAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwibm90LWZvdW5kLXRleHQzXCI+XG4gICAgICAgICAgICBXRSBBUkUgU09SUlksIEJVVCBUSEUgUEFHRSBZT1UgUkVRVUVTVEVEIFdBUyBOT1QgRk9VTkRcbiAgICAgICAgICA8L2gyPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAge2BcbiAgICAgICAgICAubm90LWZvdW5kLWNvbnRhaW5lcjEge1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgICAgICAgICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5ub3QtZm91bmQtY29udGFpbmVyMiB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICB9XG4gICAgICAgICAgLm5vdC1mb3VuZC10ZXh0MiB7XG4gICAgICAgICAgICBjb2xvcjogcmdiKDM4LCAzOCwgMzgpO1xuICAgICAgICAgICAgZm9udC1zaXplOiAyNTJweDtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IC0yMHB4O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IC0yMHB4O1xuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0yMHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAubm90LWZvdW5kLWNvbnRhaW5lcjMge1xuICAgICAgICAgICAgd2lkdGg6IDQyMXB4O1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5ub3QtZm91bmQtdGV4dDMge1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgICB9XG4gICAgICAgIGB9XG4gICAgICA8L3N0eWxlPlxuICAgIDwvPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IE5vdEZvdW5kXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcyhjb250ZXh0KSB7XG4gIGNvbnN0IG1lc3NhZ2VzID0gKGF3YWl0IGltcG9ydCgnL2xvY2FsZXMvJyArIGNvbnRleHQubG9jYWxlICsgJy5qc29uJykpXG4gICAgLmRlZmF1bHRcbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgbWVzc2FnZXMsXG4gICAgICAuLi5jb250ZXh0LFxuICAgIH0sXG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkhlYWQiLCJ1c2VUcmFuc2xhdGlvbnMiLCJOb3RGb3VuZCIsInByb3BzIiwiZGl2IiwidGl0bGUiLCJoMyIsImgxIiwiaDIiLCJnZXRTdGF0aWNQcm9wcyIsImNvbnRleHQiLCJtZXNzYWdlcyIsImxvY2FsZSIsImRlZmF1bHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/404.js\n");

/***/ }),

/***/ "next-intl":
/*!****************************!*\
  !*** external "next-intl" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next-intl");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("styled-jsx/style");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/404.js"));
module.exports = __webpack_exports__;

})();