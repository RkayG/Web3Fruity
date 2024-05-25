"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./Components/TokenFarming.jsx":
/*!*************************************!*\
  !*** ./Components/TokenFarming.jsx ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nconst TokenFarming = ()=>{\n    _s();\n    const [tokens, setTokens] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [filteredTokens, setFilteredTokens] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [blockchains, setBlockchains] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [selectedBlockchain, setSelectedBlockchain] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        // Fetch the tokens from your API endpoint\n        const fetchTokens = async ()=>{\n            try {\n                const response = await fetch(\"http://localhost:1225/farm-tokens\"); // Update this to your actual API endpoint\n                const data = await response.json();\n                setTokens(data);\n                // Extract unique blockchains\n                const uniqueBlockchains = [\n                    ...new Set(data.map((token)=>token.blockchain))\n                ];\n                setBlockchains(uniqueBlockchains);\n                setFilteredTokens(data);\n            } catch (error) {\n                console.error(\"Error fetching tokens:\", error);\n            }\n        };\n        fetchTokens();\n    }, []);\n    const handleFilterChange = (blockchain)=>{\n        setSelectedBlockchain(blockchain);\n        if (blockchain) {\n            setFilteredTokens(tokens.filter((token)=>token.blockchain === blockchain));\n        } else {\n            setFilteredTokens(tokens);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: \"py-12 md:py-24 lg:py-32 container m-auto max-w-[1580px]\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: \"text-2xl md:text-3xl lg:text-3xl font-bold mb-6 pl-8 inline-block bg-clip-text    text-transparent bg-gradient-to-r from-blue-500 to-red-500\",\n                children: \"Token Farming / Potential Airdrops\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\weB3fruity\\\\frontend\\\\Components\\\\TokenFarming.jsx\",\n                lineNumber: 40,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-wrap gap-4 mb-6 pl-8\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"px-4 py-2 rounded-lg \".concat(selectedBlockchain === \"\" ? \"bg-blue-500 text-white\" : \"bg-gray-200 text-black\"),\n                        onClick: ()=>handleFilterChange(\"\"),\n                        children: \"All\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\weB3fruity\\\\frontend\\\\Components\\\\TokenFarming.jsx\",\n                        lineNumber: 44,\n                        columnNumber: 9\n                    }, undefined),\n                    blockchains.map((blockchain)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"px-4 py-2 rounded-lg \".concat(selectedBlockchain === blockchain ? \"bg-blue-500 text-white\" : \"bg-gray-200 text-black\"),\n                            onClick: ()=>handleFilterChange(blockchain),\n                            children: blockchain\n                        }, blockchain, false, {\n                            fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\weB3fruity\\\\frontend\\\\Components\\\\TokenFarming.jsx\",\n                            lineNumber: 51,\n                            columnNumber: 11\n                        }, undefined))\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\weB3fruity\\\\frontend\\\\Components\\\\TokenFarming.jsx\",\n                lineNumber: 43,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"grid gap-10 md:grid-cols-2 lg:grid-cols-3 mx-6\",\n                children: filteredTokens.map((token, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"rounded-lg bg-gray-200 pb-6 flex flex-col items-center justify-between border\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                className: \"text-lg text-white font-medium bg-black text-center w-full h-24 rounded-t-lg pt-6   \",\n                                children: token.tokenName\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\weB3fruity\\\\frontend\\\\Components\\\\TokenFarming.jsx\",\n                                lineNumber: 64,\n                                columnNumber: 14\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"w-16 h-16 relative -top-8 \",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    src: token.logo,\n                                    className: \" w-16 h-16 rounded-full\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\weB3fruity\\\\frontend\\\\Components\\\\TokenFarming.jsx\",\n                                    lineNumber: 67,\n                                    columnNumber: 21\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\weB3fruity\\\\frontend\\\\Components\\\\TokenFarming.jsx\",\n                                lineNumber: 66,\n                                columnNumber: 14\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"flex flex-wrap pt-0 p-2 border-b border-b-gray-400 w-[90%] justify-between\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"text-red-900 text-sm \",\n                                        children: \"Platform:\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\weB3fruity\\\\frontend\\\\Components\\\\TokenFarming.jsx\",\n                                        lineNumber: 71,\n                                        columnNumber: 17\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        className: \"p-1 bg-blue-900 text-sm text-white px-3 rounded-3xl \",\n                                        children: \"Binance App\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\weB3fruity\\\\frontend\\\\Components\\\\TokenFarming.jsx\",\n                                        lineNumber: 72,\n                                        columnNumber: 17\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\weB3fruity\\\\frontend\\\\Components\\\\TokenFarming.jsx\",\n                                lineNumber: 70,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"flex flex-wrap p-2 border-b border-b-gray-400 w-[90%] justify-between\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"mr-18 text-red-900 text-sm\",\n                                        children: \"Requirements:\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\weB3fruity\\\\frontend\\\\Components\\\\TokenFarming.jsx\",\n                                        lineNumber: 76,\n                                        columnNumber: 17\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"text-sm\",\n                                        children: \"Telegram, Ton wallet\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\weB3fruity\\\\frontend\\\\Components\\\\TokenFarming.jsx\",\n                                        lineNumber: 77,\n                                        columnNumber: 17\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\weB3fruity\\\\frontend\\\\Components\\\\TokenFarming.jsx\",\n                                lineNumber: 75,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex-wrap flex w-[90%] justify-between mt-4 p-2\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"text-xl font-bold \".concat(token.status === \"Ongoing\" ? \"text-[green]\" : \"text-red-500\"),\n                                        children: token.status\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\weB3fruity\\\\frontend\\\\Components\\\\TokenFarming.jsx\",\n                                        lineNumber: 81,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                        href: token.guideUrl,\n                                        target: \"_blank\",\n                                        rel: \"noopener noreferrer\",\n                                        className: \" bg-blue-500 text-white px-3 py-1    rounded-md hover:bg-blue-600 font-semibold\",\n                                        children: \"Guide\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\weB3fruity\\\\frontend\\\\Components\\\\TokenFarming.jsx\",\n                                        lineNumber: 84,\n                                        columnNumber: 15\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\weB3fruity\\\\frontend\\\\Components\\\\TokenFarming.jsx\",\n                                lineNumber: 80,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, index, true, {\n                        fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\weB3fruity\\\\frontend\\\\Components\\\\TokenFarming.jsx\",\n                        lineNumber: 63,\n                        columnNumber: 11\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\weB3fruity\\\\frontend\\\\Components\\\\TokenFarming.jsx\",\n                lineNumber: 61,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"py-2 px-4 m-auto mt-6 flex justify-self-center hover:bg-blue-500 hover:text-white   text-black active:bg-blue-100 rounded-xl bg-gray-200 hover:transition-all hover:ease-in-out\",\n                children: \"More\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\weB3fruity\\\\frontend\\\\Components\\\\TokenFarming.jsx\",\n                lineNumber: 94,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\weB3fruity\\\\frontend\\\\Components\\\\TokenFarming.jsx\",\n        lineNumber: 39,\n        columnNumber: 5\n    }, undefined);\n};\n_s(TokenFarming, \"H/sVbiUlnRZJkSTkcvkdF7HS0rs=\");\n_c = TokenFarming;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TokenFarming); //Earn passive income by farming the latest crypto tokens.\nvar _c;\n$RefreshReg$(_c, \"TokenFarming\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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d0NBQUVDLFFBQU87d0NBQVNDLEtBQUk7d0NBQXNCbEIsV0FBVTtrREFDOUI7Ozs7Ozs7Ozs7Ozs7dUJBdEJ6Q0s7Ozs7Ozs7Ozs7MEJBK0JkLDhEQUFDRjtnQkFBT0gsV0FBVTswQkFDOEU7Ozs7Ozs7Ozs7OztBQUt0RztHQWpHTXhCO0tBQUFBO0FBbUdOLCtEQUFlQSxZQUFZQSxFQUFDLENBQzVCLDBEQUEwRCIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9Db21wb25lbnRzL1Rva2VuRmFybWluZy5qc3g/NWZjMyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5cclxuY29uc3QgVG9rZW5GYXJtaW5nID0gKCkgPT4ge1xyXG4gIGNvbnN0IFt0b2tlbnMsIHNldFRva2Vuc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW2ZpbHRlcmVkVG9rZW5zLCBzZXRGaWx0ZXJlZFRva2Vuc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW2Jsb2NrY2hhaW5zLCBzZXRCbG9ja2NoYWluc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW3NlbGVjdGVkQmxvY2tjaGFpbiwgc2V0U2VsZWN0ZWRCbG9ja2NoYWluXSA9IHVzZVN0YXRlKCcnKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIC8vIEZldGNoIHRoZSB0b2tlbnMgZnJvbSB5b3VyIEFQSSBlbmRwb2ludFxyXG4gICAgY29uc3QgZmV0Y2hUb2tlbnMgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDoxMjI1L2Zhcm0tdG9rZW5zJyk7IC8vIFVwZGF0ZSB0aGlzIHRvIHlvdXIgYWN0dWFsIEFQSSBlbmRwb2ludFxyXG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgc2V0VG9rZW5zKGRhdGEpO1xyXG5cclxuICAgICAgICAvLyBFeHRyYWN0IHVuaXF1ZSBibG9ja2NoYWluc1xyXG4gICAgICAgIGNvbnN0IHVuaXF1ZUJsb2NrY2hhaW5zID0gWy4uLm5ldyBTZXQoZGF0YS5tYXAodG9rZW4gPT4gdG9rZW4uYmxvY2tjaGFpbikpXTtcclxuICAgICAgICBzZXRCbG9ja2NoYWlucyh1bmlxdWVCbG9ja2NoYWlucyk7XHJcbiAgICAgICAgc2V0RmlsdGVyZWRUb2tlbnMoZGF0YSk7XHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgdG9rZW5zOicsIGVycm9yKTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBmZXRjaFRva2VucygpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlRmlsdGVyQ2hhbmdlID0gKGJsb2NrY2hhaW4pID0+IHtcclxuICAgIHNldFNlbGVjdGVkQmxvY2tjaGFpbihibG9ja2NoYWluKTtcclxuICAgIGlmIChibG9ja2NoYWluKSB7XHJcbiAgICAgIHNldEZpbHRlcmVkVG9rZW5zKHRva2Vucy5maWx0ZXIodG9rZW4gPT4gdG9rZW4uYmxvY2tjaGFpbiA9PT0gYmxvY2tjaGFpbikpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc2V0RmlsdGVyZWRUb2tlbnModG9rZW5zKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwicHktMTIgbWQ6cHktMjQgbGc6cHktMzIgY29udGFpbmVyIG0tYXV0byBtYXgtdy1bMTU4MHB4XVwiPlxyXG4gICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC0yeGwgbWQ6dGV4dC0zeGwgbGc6dGV4dC0zeGwgZm9udC1ib2xkIG1iLTYgcGwtOCBpbmxpbmUtYmxvY2sgYmctY2xpcC10ZXh0IFxyXG4gICAgICB0ZXh0LXRyYW5zcGFyZW50IGJnLWdyYWRpZW50LXRvLXIgZnJvbS1ibHVlLTUwMCB0by1yZWQtNTAwXCI+VG9rZW4gRmFybWluZyAvIFBvdGVudGlhbCBBaXJkcm9wczwvaDI+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC13cmFwIGdhcC00IG1iLTYgcGwtOFwiPlxyXG4gICAgICAgIDxidXR0b25cclxuICAgICAgICAgIGNsYXNzTmFtZT17YHB4LTQgcHktMiByb3VuZGVkLWxnICR7c2VsZWN0ZWRCbG9ja2NoYWluID09PSAnJyA/ICdiZy1ibHVlLTUwMCB0ZXh0LXdoaXRlJyA6ICdiZy1ncmF5LTIwMCB0ZXh0LWJsYWNrJ31gfVxyXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlRmlsdGVyQ2hhbmdlKCcnKX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICBBbGxcclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICB7YmxvY2tjaGFpbnMubWFwKChibG9ja2NoYWluKSA9PiAoXHJcbiAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgIGtleT17YmxvY2tjaGFpbn1cclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgcHgtNCBweS0yIHJvdW5kZWQtbGcgJHtzZWxlY3RlZEJsb2NrY2hhaW4gPT09IGJsb2NrY2hhaW4gPyAnYmctYmx1ZS01MDAgdGV4dC13aGl0ZScgOiAnYmctZ3JheS0yMDAgdGV4dC1ibGFjayd9YH1cclxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlRmlsdGVyQ2hhbmdlKGJsb2NrY2hhaW4pfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICB7YmxvY2tjaGFpbn1cclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBnYXAtMTAgbWQ6Z3JpZC1jb2xzLTIgbGc6Z3JpZC1jb2xzLTMgbXgtNlwiPlxyXG4gICAgICAgIHtmaWx0ZXJlZFRva2Vucy5tYXAoKHRva2VuLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgPGRpdiBrZXk9e2luZGV4fSBjbGFzc05hbWU9XCJyb3VuZGVkLWxnIGJnLWdyYXktMjAwIHBiLTYgZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIGJvcmRlclwiPlxyXG4gICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQtbGcgdGV4dC13aGl0ZSBmb250LW1lZGl1bSBiZy1ibGFjayB0ZXh0LWNlbnRlciB3LWZ1bGwgaC0yNCByb3VuZGVkLXQtbGcgcHQtNlxyXG4gICAgICAgICAgICAgXCI+e3Rva2VuLnRva2VuTmFtZX08L2gzPlxyXG4gICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTE2IGgtMTYgcmVsYXRpdmUgLXRvcC04IFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXt0b2tlbi5sb2dvfSBjbGFzc05hbWU9XCIgdy0xNiBoLTE2IHJvdW5kZWQtZnVsbFwiIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nZmxleCBmbGV4LXdyYXAgcHQtMCBwLTIgYm9yZGVyLWIgYm9yZGVyLWItZ3JheS00MDAgdy1bOTAlXSBqdXN0aWZ5LWJldHdlZW4nPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSd0ZXh0LXJlZC05MDAgdGV4dC1zbSAnPlBsYXRmb3JtOjwvcD5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSdwLTEgYmctYmx1ZS05MDAgdGV4dC1zbSB0ZXh0LXdoaXRlIHB4LTMgcm91bmRlZC0zeGwgJz5CaW5hbmNlIEFwcDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L3NwYW4+XHJcblxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J2ZsZXggZmxleC13cmFwIHAtMiBib3JkZXItYiBib3JkZXItYi1ncmF5LTQwMCB3LVs5MCVdIGp1c3RpZnktYmV0d2Vlbic+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9J21yLTE4IHRleHQtcmVkLTkwMCB0ZXh0LXNtJz5SZXF1aXJlbWVudHM6PC9wPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSd0ZXh0LXNtJz5UZWxlZ3JhbSwgVG9uIHdhbGxldDwvcD5cclxuICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgIFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtd3JhcCBmbGV4IHctWzkwJV0ganVzdGlmeS1iZXR3ZWVuIG10LTQgcC0yXCI+XHJcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtgdGV4dC14bCBmb250LWJvbGQgJHt0b2tlbi5zdGF0dXMgPT09ICdPbmdvaW5nJyA/ICd0ZXh0LVtncmVlbl0nIDogJ3RleHQtcmVkLTUwMCd9YH0+XHJcbiAgICAgICAgICAgICAgICB7dG9rZW4uc3RhdHVzfVxyXG4gICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICA8YSBocmVmPXt0b2tlbi5ndWlkZVVybH0gdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiIGNsYXNzTmFtZT1cIiBiZy1ibHVlLTUwMCB0ZXh0LXdoaXRlIHB4LTMgcHktMSBcclxuICAgICAgICAgICAgICAgICByb3VuZGVkLW1kIGhvdmVyOmJnLWJsdWUtNjAwIGZvbnQtc2VtaWJvbGRcIj5cclxuICAgICAgICAgICAgICBHdWlkZVxyXG4gICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApKX1cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8YnV0dG9uIGNsYXNzTmFtZT0ncHktMiBweC00IG0tYXV0byBtdC02IGZsZXgganVzdGlmeS1zZWxmLWNlbnRlciBob3ZlcjpiZy1ibHVlLTUwMCBob3Zlcjp0ZXh0LXdoaXRlXHJcbiAgICAgICAgIHRleHQtYmxhY2sgYWN0aXZlOmJnLWJsdWUtMTAwIHJvdW5kZWQteGwgYmctZ3JheS0yMDAgaG92ZXI6dHJhbnNpdGlvbi1hbGwgaG92ZXI6ZWFzZS1pbi1vdXQnPlxyXG4gICAgICAgICAgTW9yZVxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgPC9zZWN0aW9uPiBcclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVG9rZW5GYXJtaW5nO1xyXG4vL0Vhcm4gcGFzc2l2ZSBpbmNvbWUgYnkgZmFybWluZyB0aGUgbGF0ZXN0IGNyeXB0byB0b2tlbnMuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiVG9rZW5GYXJtaW5nIiwidG9rZW5zIiwic2V0VG9rZW5zIiwiZmlsdGVyZWRUb2tlbnMiLCJzZXRGaWx0ZXJlZFRva2VucyIsImJsb2NrY2hhaW5zIiwic2V0QmxvY2tjaGFpbnMiLCJzZWxlY3RlZEJsb2NrY2hhaW4iLCJzZXRTZWxlY3RlZEJsb2NrY2hhaW4iLCJmZXRjaFRva2VucyIsInJlc3BvbnNlIiwiZmV0Y2giLCJkYXRhIiwianNvbiIsInVuaXF1ZUJsb2NrY2hhaW5zIiwiU2V0IiwibWFwIiwidG9rZW4iLCJibG9ja2NoYWluIiwiZXJyb3IiLCJjb25zb2xlIiwiaGFuZGxlRmlsdGVyQ2hhbmdlIiwiZmlsdGVyIiwic2VjdGlvbiIsImNsYXNzTmFtZSIsImgyIiwiZGl2IiwiYnV0dG9uIiwib25DbGljayIsImluZGV4IiwiaDMiLCJ0b2tlbk5hbWUiLCJpbWciLCJzcmMiLCJsb2dvIiwic3BhbiIsInAiLCJzdGF0dXMiLCJhIiwiaHJlZiIsImd1aWRlVXJsIiwidGFyZ2V0IiwicmVsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./Components/TokenFarming.jsx\n"));

/***/ })

});