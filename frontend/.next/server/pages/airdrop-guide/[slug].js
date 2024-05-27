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
exports.id = "pages/airdrop-guide/[slug]";
exports.ids = ["pages/airdrop-guide/[slug]"];
exports.modules = {

/***/ "./pages/airdrop-guide/[slug].js":
/*!***************************************!*\
  !*** ./pages/airdrop-guide/[slug].js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst AirdropGuide = ()=>{\n    const [airdropData, setAirdropData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const { id  } = router.query;\n        console.log(id);\n        const fetchAirdrop = async ()=>{\n            try {\n                const response = await fetch(`http://localhost:1225/airdrops/${id}`);\n                const data = await response.json();\n                setAirdropData(data.airdrop);\n            } catch (error) {\n                console.error(error);\n                setError(\"Failed to load airdrop guide\");\n            }\n        };\n        if (id) {\n            fetchAirdrop();\n        }\n    }, [\n        router.query.id\n    ]);\n    if (!airdropData) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: \"Loading airdrop guide...\"\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\weB3fruity\\\\frontend\\\\pages\\\\airdrop-guide\\\\[slug].js\",\n            lineNumber: 30,\n            columnNumber: 12\n        }, undefined);\n    }\n    const { title , description , logo , guide  } = airdropData;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            logo && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                src: logo.fields.file.url,\n                alt: title\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\weB3fruity\\\\frontend\\\\pages\\\\airdrop-guide\\\\[slug].js\",\n                lineNumber: 37,\n                columnNumber: 16\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: title\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\weB3fruity\\\\frontend\\\\pages\\\\airdrop-guide\\\\[slug].js\",\n                lineNumber: 38,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: description\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\weB3fruity\\\\frontend\\\\pages\\\\airdrop-guide\\\\[slug].js\",\n                lineNumber: 40,\n                columnNumber: 7\n            }, undefined),\n            guide && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        children: \"Guide\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\weB3fruity\\\\frontend\\\\pages\\\\airdrop-guide\\\\[slug].js\",\n                        lineNumber: 43,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: documentToReactComponents(guide)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\weB3fruity\\\\frontend\\\\pages\\\\airdrop-guide\\\\[slug].js\",\n                        lineNumber: 44,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\weB3fruity\\\\frontend\\\\pages\\\\airdrop-guide\\\\[slug].js\",\n                lineNumber: 42,\n                columnNumber: 9\n            }, undefined),\n            !guide && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"No guide available for this airdrop.\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\weB3fruity\\\\frontend\\\\pages\\\\airdrop-guide\\\\[slug].js\",\n                lineNumber: 48,\n                columnNumber: 18\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\weB3fruity\\\\frontend\\\\pages\\\\airdrop-guide\\\\[slug].js\",\n        lineNumber: 36,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AirdropGuide);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9haXJkcm9wLWd1aWRlL1tzbHVnXS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUNtRDtBQUNYO0FBRXhDLE1BQU1JLGVBQWUsSUFBTTtJQUN6QixNQUFNLENBQUNDLGFBQWFDLGVBQWUsR0FBR0wsK0NBQVFBLENBQUMsSUFBSTtJQUNuRCxNQUFNTSxTQUFTSixzREFBU0E7SUFFeEJELGdEQUFTQSxDQUFDLElBQU07UUFDZCxNQUFNLEVBQUVNLEdBQUUsRUFBRSxHQUFHRCxPQUFPRSxLQUFLO1FBQzNCQyxRQUFRQyxHQUFHLENBQUNIO1FBRVosTUFBTUksZUFBZSxVQUFZO1lBQy9CLElBQUk7Z0JBQ0YsTUFBTUMsV0FBVyxNQUFNQyxNQUFNLENBQUMsK0JBQStCLEVBQUVOLEdBQUcsQ0FBQztnQkFDbkUsTUFBTU8sT0FBTyxNQUFNRixTQUFTRyxJQUFJO2dCQUNoQ1YsZUFBZVMsS0FBS0UsT0FBTztZQUM3QixFQUFFLE9BQU9DLE9BQU87Z0JBQ2RSLFFBQVFRLEtBQUssQ0FBQ0E7Z0JBQ2RDLFNBQVM7WUFDWDtRQUNGO1FBRUEsSUFBSVgsSUFBSTtZQUNOSTtRQUNGLENBQUM7SUFDSCxHQUFHO1FBQUNMLE9BQU9FLEtBQUssQ0FBQ0QsRUFBRTtLQUFDO0lBRXBCLElBQUksQ0FBQ0gsYUFBYTtRQUNoQixxQkFBTyw4REFBQ2U7c0JBQUk7Ozs7OztJQUNkLENBQUM7SUFFRCxNQUFNLEVBQUVDLE1BQUssRUFBRUMsWUFBVyxFQUFFQyxLQUFJLEVBQUVDLE1BQUssRUFBRSxHQUFHbkI7SUFFNUMscUJBQ0UsOERBQUNlOztZQUNFRyxzQkFBUSw4REFBQ0U7Z0JBQUlDLEtBQUtILEtBQUtJLE1BQU0sQ0FBQ0MsSUFBSSxDQUFDQyxHQUFHO2dCQUFFQyxLQUFLVDs7Ozs7OzBCQUM5Qyw4REFBQ1U7MEJBQUlWOzs7Ozs7MEJBRUwsOERBQUNXOzBCQUFHVjs7Ozs7O1lBQ0hFLHVCQUNDLDhEQUFDSjs7a0NBQ0MsOERBQUNhO2tDQUFHOzs7Ozs7a0NBQ0osOERBQUNiO2tDQUFLYywwQkFBMEJWOzs7Ozs7Ozs7Ozs7WUFJbkMsQ0FBQ0EsdUJBQVMsOERBQUNROzBCQUFFOzs7Ozs7Ozs7Ozs7QUFHcEI7QUFFQSxpRUFBZTVCLFlBQVlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWIzZnJ1aXR5Ly4vcGFnZXMvYWlyZHJvcC1ndWlkZS9bc2x1Z10uanM/YTQ0MCJdLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuXHJcbmNvbnN0IEFpcmRyb3BHdWlkZSA9ICgpID0+IHtcclxuICBjb25zdCBbYWlyZHJvcERhdGEsIHNldEFpcmRyb3BEYXRhXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgeyBpZCB9ID0gcm91dGVyLnF1ZXJ5O1xyXG4gICAgY29uc29sZS5sb2coaWQpO1xyXG5cclxuICAgIGNvbnN0IGZldGNoQWlyZHJvcCA9IGFzeW5jICgpID0+IHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwOi8vbG9jYWxob3N0OjEyMjUvYWlyZHJvcHMvJHtpZH1gKTtcclxuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAgIHNldEFpcmRyb3BEYXRhKGRhdGEuYWlyZHJvcCk7XHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcbiAgICAgICAgc2V0RXJyb3IoJ0ZhaWxlZCB0byBsb2FkIGFpcmRyb3AgZ3VpZGUnKTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBpZiAoaWQpIHtcclxuICAgICAgZmV0Y2hBaXJkcm9wKCk7XHJcbiAgICB9XHJcbiAgfSwgW3JvdXRlci5xdWVyeS5pZF0pO1xyXG5cclxuICBpZiAoIWFpcmRyb3BEYXRhKSB7XHJcbiAgICByZXR1cm4gPGRpdj5Mb2FkaW5nIGFpcmRyb3AgZ3VpZGUuLi48L2Rpdj47XHJcbiAgfVxyXG5cclxuICBjb25zdCB7IHRpdGxlLCBkZXNjcmlwdGlvbiwgbG9nbywgZ3VpZGUgfSA9IGFpcmRyb3BEYXRhO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAge2xvZ28gJiYgPGltZyBzcmM9e2xvZ28uZmllbGRzLmZpbGUudXJsfSBhbHQ9e3RpdGxlfSAvPn1cclxuICAgICAgPGgxPnt0aXRsZX08L2gxPlxyXG4gICAgICBcclxuICAgICAgPHA+e2Rlc2NyaXB0aW9ufTwvcD5cclxuICAgICAge2d1aWRlICYmIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPGgyPkd1aWRlPC9oMj5cclxuICAgICAgICAgIDxkaXY+e2RvY3VtZW50VG9SZWFjdENvbXBvbmVudHMoZ3VpZGUpfTwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApfVxyXG4gICAgICB7LyogaWYgZ3VpZGUgaXMgbm90IGZvdW5kICovfVxyXG4gICAgICB7IWd1aWRlICYmIDxwPk5vIGd1aWRlIGF2YWlsYWJsZSBmb3IgdGhpcyBhaXJkcm9wLjwvcD59XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQWlyZHJvcEd1aWRlO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZVJvdXRlciIsIkFpcmRyb3BHdWlkZSIsImFpcmRyb3BEYXRhIiwic2V0QWlyZHJvcERhdGEiLCJyb3V0ZXIiLCJpZCIsInF1ZXJ5IiwiY29uc29sZSIsImxvZyIsImZldGNoQWlyZHJvcCIsInJlc3BvbnNlIiwiZmV0Y2giLCJkYXRhIiwianNvbiIsImFpcmRyb3AiLCJlcnJvciIsInNldEVycm9yIiwiZGl2IiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImxvZ28iLCJndWlkZSIsImltZyIsInNyYyIsImZpZWxkcyIsImZpbGUiLCJ1cmwiLCJhbHQiLCJoMSIsInAiLCJoMiIsImRvY3VtZW50VG9SZWFjdENvbXBvbmVudHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/airdrop-guide/[slug].js\n");

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
var __webpack_exports__ = (__webpack_exec__("./pages/airdrop-guide/[slug].js"));
module.exports = __webpack_exports__;

})();