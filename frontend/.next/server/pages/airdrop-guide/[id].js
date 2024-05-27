"use strict";
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
exports.id = "pages/airdrop-guide/[id]";
exports.ids = ["pages/airdrop-guide/[id]"];
exports.modules = {

/***/ "./pages/airdrop-guide/[id].js":
/*!*************************************!*\
  !*** ./pages/airdrop-guide/[id].js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst AirdropGuide = ()=>{\n    const [airdropData, setAirdropData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const { _id  } = router.query;\n        console.log(_id);\n        const fetchAirdrop = async ()=>{\n            try {\n                const response = await fetch(`http://localhost:1225/airdrops/${_id}`);\n                const data = await response.json();\n                setAirdropData(data.airdrop);\n            } catch (error) {\n                console.error(error);\n            // setError('Failed to load airdrop guide');\n            }\n        };\n        if (_id) {\n            fetchAirdrop();\n        }\n    }, [\n        router.query._id\n    ]);\n    if (!airdropData) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: \"Loading airdrop guide...\"\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\weB3fruity\\\\frontend\\\\pages\\\\airdrop-guide\\\\[id].js\",\n            lineNumber: 30,\n            columnNumber: 12\n        }, undefined);\n    }\n    const { title , description , logo , guide  } = airdropData;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            logo && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                src: logo.fields.file.url,\n                alt: title\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\weB3fruity\\\\frontend\\\\pages\\\\airdrop-guide\\\\[id].js\",\n                lineNumber: 37,\n                columnNumber: 16\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: title\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\weB3fruity\\\\frontend\\\\pages\\\\airdrop-guide\\\\[id].js\",\n                lineNumber: 38,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: description\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\weB3fruity\\\\frontend\\\\pages\\\\airdrop-guide\\\\[id].js\",\n                lineNumber: 40,\n                columnNumber: 7\n            }, undefined),\n            guide && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        children: \"Guide\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\weB3fruity\\\\frontend\\\\pages\\\\airdrop-guide\\\\[id].js\",\n                        lineNumber: 43,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: documentToReactComponents(guide)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\weB3fruity\\\\frontend\\\\pages\\\\airdrop-guide\\\\[id].js\",\n                        lineNumber: 44,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\weB3fruity\\\\frontend\\\\pages\\\\airdrop-guide\\\\[id].js\",\n                lineNumber: 42,\n                columnNumber: 9\n            }, undefined),\n            !guide && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"No guide available for this airdrop.\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\weB3fruity\\\\frontend\\\\pages\\\\airdrop-guide\\\\[id].js\",\n                lineNumber: 48,\n                columnNumber: 18\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\weB3fruity\\\\frontend\\\\pages\\\\airdrop-guide\\\\[id].js\",\n        lineNumber: 36,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AirdropGuide);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9haXJkcm9wLWd1aWRlL1tpZF0uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFDbUQ7QUFDWDtBQUV4QyxNQUFNSSxlQUFlLElBQU07SUFDekIsTUFBTSxDQUFDQyxhQUFhQyxlQUFlLEdBQUdMLCtDQUFRQSxDQUFDLElBQUk7SUFDbkQsTUFBTU0sU0FBU0osc0RBQVNBO0lBRXhCRCxnREFBU0EsQ0FBQyxJQUFNO1FBQ2QsTUFBTSxFQUFFTSxJQUFHLEVBQUUsR0FBR0QsT0FBT0UsS0FBSztRQUM1QkMsUUFBUUMsR0FBRyxDQUFDSDtRQUVaLE1BQU1JLGVBQWUsVUFBWTtZQUMvQixJQUFJO2dCQUNGLE1BQU1DLFdBQVcsTUFBTUMsTUFBTSxDQUFDLCtCQUErQixFQUFFTixJQUFJLENBQUM7Z0JBQ3BFLE1BQU1PLE9BQU8sTUFBTUYsU0FBU0csSUFBSTtnQkFDaENWLGVBQWVTLEtBQUtFLE9BQU87WUFDN0IsRUFBRSxPQUFPQyxPQUFPO2dCQUNkUixRQUFRUSxLQUFLLENBQUNBO1lBQ2YsNENBQTRDO1lBQzdDO1FBQ0Y7UUFFQSxJQUFJVixLQUFLO1lBQ1BJO1FBQ0YsQ0FBQztJQUNILEdBQUc7UUFBQ0wsT0FBT0UsS0FBSyxDQUFDRCxHQUFHO0tBQUM7SUFFckIsSUFBSSxDQUFDSCxhQUFhO1FBQ2hCLHFCQUFPLDhEQUFDYztzQkFBSTs7Ozs7O0lBQ2QsQ0FBQztJQUVELE1BQU0sRUFBRUMsTUFBSyxFQUFFQyxZQUFXLEVBQUVDLEtBQUksRUFBRUMsTUFBSyxFQUFFLEdBQUdsQjtJQUU1QyxxQkFDRSw4REFBQ2M7O1lBQ0VHLHNCQUFRLDhEQUFDRTtnQkFBSUMsS0FBS0gsS0FBS0ksTUFBTSxDQUFDQyxJQUFJLENBQUNDLEdBQUc7Z0JBQUVDLEtBQUtUOzs7Ozs7MEJBQzlDLDhEQUFDVTswQkFBSVY7Ozs7OzswQkFFTCw4REFBQ1c7MEJBQUdWOzs7Ozs7WUFDSEUsdUJBQ0MsOERBQUNKOztrQ0FDQyw4REFBQ2E7a0NBQUc7Ozs7OztrQ0FDSiw4REFBQ2I7a0NBQUtjLDBCQUEwQlY7Ozs7Ozs7Ozs7OztZQUluQyxDQUFDQSx1QkFBUyw4REFBQ1E7MEJBQUU7Ozs7Ozs7Ozs7OztBQUdwQjtBQUVBLGlFQUFlM0IsWUFBWUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYjNmcnVpdHkvLi9wYWdlcy9haXJkcm9wLWd1aWRlL1tpZF0uanM/NTliZCJdLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuXHJcbmNvbnN0IEFpcmRyb3BHdWlkZSA9ICgpID0+IHtcclxuICBjb25zdCBbYWlyZHJvcERhdGEsIHNldEFpcmRyb3BEYXRhXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgeyBfaWQgfSA9IHJvdXRlci5xdWVyeTtcclxuICAgIGNvbnNvbGUubG9nKF9pZCk7XHJcblxyXG4gICAgY29uc3QgZmV0Y2hBaXJkcm9wID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6MTIyNS9haXJkcm9wcy8ke19pZH1gKTtcclxuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAgIHNldEFpcmRyb3BEYXRhKGRhdGEuYWlyZHJvcCk7XHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcbiAgICAgICAvLyBzZXRFcnJvcignRmFpbGVkIHRvIGxvYWQgYWlyZHJvcCBndWlkZScpO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGlmIChfaWQpIHtcclxuICAgICAgZmV0Y2hBaXJkcm9wKCk7XHJcbiAgICB9XHJcbiAgfSwgW3JvdXRlci5xdWVyeS5faWRdKTtcclxuXHJcbiAgaWYgKCFhaXJkcm9wRGF0YSkge1xyXG4gICAgcmV0dXJuIDxkaXY+TG9hZGluZyBhaXJkcm9wIGd1aWRlLi4uPC9kaXY+O1xyXG4gIH1cclxuXHJcbiAgY29uc3QgeyB0aXRsZSwgZGVzY3JpcHRpb24sIGxvZ28sIGd1aWRlIH0gPSBhaXJkcm9wRGF0YTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIHtsb2dvICYmIDxpbWcgc3JjPXtsb2dvLmZpZWxkcy5maWxlLnVybH0gYWx0PXt0aXRsZX0gLz59XHJcbiAgICAgIDxoMT57dGl0bGV9PC9oMT5cclxuICAgICAgXHJcbiAgICAgIDxwPntkZXNjcmlwdGlvbn08L3A+XHJcbiAgICAgIHtndWlkZSAmJiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxoMj5HdWlkZTwvaDI+XHJcbiAgICAgICAgICA8ZGl2Pntkb2N1bWVudFRvUmVhY3RDb21wb25lbnRzKGd1aWRlKX08L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKX1cclxuICAgICAgey8qIGlmIGd1aWRlIGlzIG5vdCBmb3VuZCAqL31cclxuICAgICAgeyFndWlkZSAmJiA8cD5ObyBndWlkZSBhdmFpbGFibGUgZm9yIHRoaXMgYWlyZHJvcC48L3A+fVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFpcmRyb3BHdWlkZTtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ1c2VSb3V0ZXIiLCJBaXJkcm9wR3VpZGUiLCJhaXJkcm9wRGF0YSIsInNldEFpcmRyb3BEYXRhIiwicm91dGVyIiwiX2lkIiwicXVlcnkiLCJjb25zb2xlIiwibG9nIiwiZmV0Y2hBaXJkcm9wIiwicmVzcG9uc2UiLCJmZXRjaCIsImRhdGEiLCJqc29uIiwiYWlyZHJvcCIsImVycm9yIiwiZGl2IiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImxvZ28iLCJndWlkZSIsImltZyIsInNyYyIsImZpZWxkcyIsImZpbGUiLCJ1cmwiLCJhbHQiLCJoMSIsInAiLCJoMiIsImRvY3VtZW50VG9SZWFjdENvbXBvbmVudHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/airdrop-guide/[id].js\n");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/airdrop-guide/[id].js"));
module.exports = __webpack_exports__;

})();