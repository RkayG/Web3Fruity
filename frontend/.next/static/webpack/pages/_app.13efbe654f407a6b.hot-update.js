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

/***/ "./Components/Airdrops.jsx":
/*!*********************************!*\
  !*** ./Components/Airdrops.jsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n// pages/index.js\n\nvar _s = $RefreshSig$();\n\n\n// Airdrops skeleton component\nconst AirdropsSkeleton = ()=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4\",\n        children: [\n            1,\n            2,\n            3,\n            4\n        ].map((index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"bg-white rounded-md shadow-md p-4 border-2 border-solid border-gray-200 animate-pulse\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"h-24 bg-gray-200 mb-4 rounded\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\weB3fruity\\\\frontend\\\\Components\\\\Airdrops.jsx\",\n                        lineNumber: 12,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"h-4 bg-gray-200 mb-2 rounded\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\weB3fruity\\\\frontend\\\\Components\\\\Airdrops.jsx\",\n                        lineNumber: 13,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"h-4 bg-gray-200 mb-2 rounded\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\weB3fruity\\\\frontend\\\\Components\\\\Airdrops.jsx\",\n                        lineNumber: 14,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"h-4 bg-gray-200 mb-2 rounded\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\weB3fruity\\\\frontend\\\\Components\\\\Airdrops.jsx\",\n                        lineNumber: 15,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"h-4 bg-gray-200 mb-2 rounded\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\weB3fruity\\\\frontend\\\\Components\\\\Airdrops.jsx\",\n                        lineNumber: 16,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"h-4 bg-gray-200 mb-2 rounded\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\weB3fruity\\\\frontend\\\\Components\\\\Airdrops.jsx\",\n                        lineNumber: 17,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, index, true, {\n                fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\weB3fruity\\\\frontend\\\\Components\\\\Airdrops.jsx\",\n                lineNumber: 11,\n                columnNumber: 9\n            }, undefined))\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\weB3fruity\\\\frontend\\\\Components\\\\Airdrops.jsx\",\n        lineNumber: 9,\n        columnNumber: 5\n    }, undefined);\n};\n_c = AirdropsSkeleton;\nconst Airdrops = ()=>{\n    _s();\n    const [airdrops, setAirdrops] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const fetchData = async ()=>{\n            try {\n                const response = await axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].get(\"http://localhost:1225/airdrops\", {\n                    params: {\n                        limit: 12 // query parameter to limit the number of results to 12\n                    }\n                });\n                setAirdrops(response.data);\n                setLoading(false); // Set loading to false after data is fetched\n            } catch (error) {\n                console.error(\"Error fetching airdrops:\", error);\n            }\n        };\n        fetchData();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"my-20 m-auto container m-auto\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: \"text-2xl md:text-3xl lg:text-3xl font-bold mb-6 pl-8 inline-block bg-clip-text    text-transparent bg-gradient-to-r from-blue-500 to-red-500\",\n                children: \"Confirmed Airdrops\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\weB3fruity\\\\frontend\\\\Components\\\\Airdrops.jsx\",\n                lineNumber: 48,\n                columnNumber: 9\n            }, undefined),\n            loading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AirdropsSkeleton, {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\weB3fruity\\\\frontend\\\\Components\\\\Airdrops.jsx\",\n                lineNumber: 53,\n                columnNumber: 9\n            }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 lg:px-8 lg:m-auto\",\n                children: airdrops.map((airdrop)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"bg-white mx-4 lg:mx-0 hover:bg-gray-50 cursor-pointer rounded-md pb-8    shadow-md p-4 border-2 border-solid border-gray-200 relative min-w-[340px]\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"absolute top-2 right-2 text-xs font-semibold green    py-1 px-2 rounded-xl text-white \",\n                                children: airdrop.platformType\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\weB3fruity\\\\frontend\\\\Components\\\\Airdrops.jsx\",\n                                lineNumber: 61,\n                                columnNumber: 15\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex items-center justify-between mb-8\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"w-16 h-16 relative\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                            src: airdrop.logo,\n                                            className: \" w-16 h-16 rounded-full\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\weB3fruity\\\\frontend\\\\Components\\\\Airdrops.jsx\",\n                                            lineNumber: 67,\n                                            columnNumber: 21\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\weB3fruity\\\\frontend\\\\Components\\\\Airdrops.jsx\",\n                                        lineNumber: 66,\n                                        columnNumber: 17\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                        className: \"text-lg font-bold absolute left-24 top-5\",\n                                        children: airdrop.title\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\weB3fruity\\\\frontend\\\\Components\\\\Airdrops.jsx\",\n                                        lineNumber: 69,\n                                        columnNumber: 17\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\weB3fruity\\\\frontend\\\\Components\\\\Airdrops.jsx\",\n                                lineNumber: 65,\n                                columnNumber: 15\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-sm text-gray-500 mb-2\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"text-xs absolute top-20 left-24\",\n                                        children: \"Total Airdrop Pool\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\weB3fruity\\\\frontend\\\\Components\\\\Airdrops.jsx\",\n                                        lineNumber: 72,\n                                        columnNumber: 17\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"font-semibold absolute top-14 left-24\",\n                                        children: airdrop.rewardPool || \"N/A\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\weB3fruity\\\\frontend\\\\Components\\\\Airdrops.jsx\",\n                                        lineNumber: 73,\n                                        columnNumber: 17\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\weB3fruity\\\\frontend\\\\Components\\\\Airdrops.jsx\",\n                                lineNumber: 71,\n                                columnNumber: 15\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-sm text-gray-500 mb-2\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"text-xs absolute top-20 left-56\",\n                                        children: \"% of Total Supply\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\weB3fruity\\\\frontend\\\\Components\\\\Airdrops.jsx\",\n                                        lineNumber: 76,\n                                        columnNumber: 17\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"font-semibold absolute top-14 left-56\",\n                                        children: airdrop.rewardPercentFromSupply || \"N/A\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\weB3fruity\\\\frontend\\\\Components\\\\Airdrops.jsx\",\n                                        lineNumber: 77,\n                                        columnNumber: 17\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\weB3fruity\\\\frontend\\\\Components\\\\Airdrops.jsx\",\n                                lineNumber: 75,\n                                columnNumber: 15\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-xs text-gray-500\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"\",\n                                        children: \"End Date\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\weB3fruity\\\\frontend\\\\Components\\\\Airdrops.jsx\",\n                                        lineNumber: 80,\n                                        columnNumber: 17\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"font-semibold absolute bottom-4 left-3 \",\n                                        children: new Date(airdrop.endDate).toLocaleDateString() || \"N/A\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\weB3fruity\\\\frontend\\\\Components\\\\Airdrops.jsx\",\n                                        lineNumber: 81,\n                                        columnNumber: 17\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\weB3fruity\\\\frontend\\\\Components\\\\Airdrops.jsx\",\n                                lineNumber: 79,\n                                columnNumber: 15\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-xs text-gray-500\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"absolute top-28 right-6\",\n                                        children: \"Chain\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\weB3fruity\\\\frontend\\\\Components\\\\Airdrops.jsx\",\n                                        lineNumber: 84,\n                                        columnNumber: 17\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"font-semibold absolute bottom-4 right-3\",\n                                        children: airdrop.chain || \"N/A\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\weB3fruity\\\\frontend\\\\Components\\\\Airdrops.jsx\",\n                                        lineNumber: 85,\n                                        columnNumber: 17\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\weB3fruity\\\\frontend\\\\Components\\\\Airdrops.jsx\",\n                                lineNumber: 83,\n                                columnNumber: 15\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                \"aria-label\": \"view\",\n                                title: \"view\",\n                                className: \"absolute top-28 text-center m-auto\",\n                                style: {\n                                    left: \"46%\"\n                                },\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    className: \"w-8 h-8 hover:w-7 hover:h-7 active:w-8 active:h-8\",\n                                    src: \"go-icon-13.jpg\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\weB3fruity\\\\frontend\\\\Components\\\\Airdrops.jsx\",\n                                    lineNumber: 89,\n                                    columnNumber: 18\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\weB3fruity\\\\frontend\\\\Components\\\\Airdrops.jsx\",\n                                lineNumber: 87,\n                                columnNumber: 15\n                            }, undefined)\n                        ]\n                    }, airdrop._id, true, {\n                        fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\weB3fruity\\\\frontend\\\\Components\\\\Airdrops.jsx\",\n                        lineNumber: 57,\n                        columnNumber: 13\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\weB3fruity\\\\frontend\\\\Components\\\\Airdrops.jsx\",\n                lineNumber: 55,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"py-2 px-4 m-auto mt-6 flex justify-self-center hover:bg-blue-500 hover:text-white hover:transition-[0.2s]   text-black active:bg-blue-100 rounded-xl bg-gray-200 hover:ease-in-out\",\n                children: \"More\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\weB3fruity\\\\frontend\\\\Components\\\\Airdrops.jsx\",\n                lineNumber: 96,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\weB3fruity\\\\frontend\\\\Components\\\\Airdrops.jsx\",\n        lineNumber: 47,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Airdrops, \"s2jUeNMH1Yfh2aAK40IS++oKhK0=\");\n_c1 = Airdrops;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Airdrops);\nvar _c, _c1;\n$RefreshReg$(_c, \"AirdropsSkeleton\");\n$RefreshReg$(_c1, \"Airdrops\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7Ozs7Ozs7OzBDQUU5RSw4REFBQ1o7Z0NBQUthLGNBQVc7Z0NBQU9SLE9BQU07Z0NBQU92QixXQUFVO2dDQUMvQ2dDLE9BQU87b0NBQUNDLE1BQU07Z0NBQUs7MENBQ2hCLDRFQUFDYjtvQ0FBSXBCLFdBQVU7b0NBQW9EcUIsS0FBSTs7Ozs7Ozs7Ozs7O3VCQS9CckVKLFFBQVFpQixHQUFHOzs7Ozs7Ozs7eUJBcUN2QjswQkFDQyw4REFBQ0M7Z0JBQU9uQyxXQUFVOzBCQUN1RDs7Ozs7Ozs7Ozs7O0FBS2pGO0dBOUVNRztNQUFBQTtBQWdGTiwrREFBZUEsUUFBUUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9Db21wb25lbnRzL0FpcmRyb3BzLmpzeD84MTA0Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIHBhZ2VzL2luZGV4LmpzXHJcblxyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5cclxuLy8gQWlyZHJvcHMgc2tlbGV0b24gY29tcG9uZW50XHJcbmNvbnN0IEFpcmRyb3BzU2tlbGV0b24gPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMSBnYXAtNCBtZDpncmlkLWNvbHMtMiBsZzpncmlkLWNvbHMtMyB4bDpncmlkLWNvbHMtNFwiPlxyXG4gICAgICB7WzEsIDIsIDMsIDRdLm1hcCgoaW5kZXgpID0+IChcclxuICAgICAgICA8ZGl2IGtleT17aW5kZXh9IGNsYXNzTmFtZT1cImJnLXdoaXRlIHJvdW5kZWQtbWQgc2hhZG93LW1kIHAtNCBib3JkZXItMiBib3JkZXItc29saWQgYm9yZGVyLWdyYXktMjAwIGFuaW1hdGUtcHVsc2VcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaC0yNCBiZy1ncmF5LTIwMCBtYi00IHJvdW5kZWRcIj48L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaC00IGJnLWdyYXktMjAwIG1iLTIgcm91bmRlZFwiPjwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoLTQgYmctZ3JheS0yMDAgbWItMiByb3VuZGVkXCI+PC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImgtNCBiZy1ncmF5LTIwMCBtYi0yIHJvdW5kZWRcIj48L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaC00IGJnLWdyYXktMjAwIG1iLTIgcm91bmRlZFwiPjwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoLTQgYmctZ3JheS0yMDAgbWItMiByb3VuZGVkXCI+PC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICkpfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmNvbnN0IEFpcmRyb3BzID0gKCkgPT4ge1xyXG4gIGNvbnN0IFthaXJkcm9wcywgc2V0QWlyZHJvcHNdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgZmV0Y2hEYXRhID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KCdodHRwOi8vbG9jYWxob3N0OjEyMjUvYWlyZHJvcHMnLCB7XHJcbiAgICAgICAgICBwYXJhbXM6IHtcclxuICAgICAgICAgICAgbGltaXQ6IDEyIC8vIHF1ZXJ5IHBhcmFtZXRlciB0byBsaW1pdCB0aGUgbnVtYmVyIG9mIHJlc3VsdHMgdG8gMTJcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICBzZXRBaXJkcm9wcyhyZXNwb25zZS5kYXRhKTtcclxuICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTsgLy8gU2V0IGxvYWRpbmcgdG8gZmFsc2UgYWZ0ZXIgZGF0YSBpcyBmZXRjaGVkXHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgYWlyZHJvcHM6JywgZXJyb3IpO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGZldGNoRGF0YSgpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPSdteS0yMCBtLWF1dG8gY29udGFpbmVyIG0tYXV0byc+XHJcbiAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtMnhsIG1kOnRleHQtM3hsIGxnOnRleHQtM3hsIGZvbnQtYm9sZCBtYi02IHBsLTggaW5saW5lLWJsb2NrIGJnLWNsaXAtdGV4dCBcclxuICAgICAgICB0ZXh0LXRyYW5zcGFyZW50IGJnLWdyYWRpZW50LXRvLXIgZnJvbS1ibHVlLTUwMCB0by1yZWQtNTAwXCI+XHJcbiAgICAgICAgICAgIENvbmZpcm1lZCBBaXJkcm9wc1xyXG4gICAgICAgIDwvaDI+XHJcbiAgICAgIHtsb2FkaW5nID8gKCAvLyBSZW5kZXIgbG9hZGluZyBza2VsZXRvbiBpZiBsb2FkaW5nIGlzIHRydWVcclxuICAgICAgICA8QWlyZHJvcHNTa2VsZXRvbiAvPlxyXG4gICAgICApIDogKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMSBnYXAtNCBtZDpncmlkLWNvbHMtMiBsZzpncmlkLWNvbHMtMyB4bDpncmlkLWNvbHMtNCBsZzpweC04IGxnOm0tYXV0b1wiID5cclxuICAgICAgICAgIHthaXJkcm9wcy5tYXAoKGFpcmRyb3ApID0+IChcclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgIGtleT17YWlyZHJvcC5faWR9XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctd2hpdGUgbXgtNCBsZzpteC0wIGhvdmVyOmJnLWdyYXktNTAgY3Vyc29yLXBvaW50ZXIgcm91bmRlZC1tZCBwYi04IFxyXG4gICAgICAgICAgICAgIHNoYWRvdy1tZCBwLTQgYm9yZGVyLTIgYm9yZGVyLXNvbGlkIGJvcmRlci1ncmF5LTIwMCByZWxhdGl2ZSBtaW4tdy1bMzQwcHhdXCI+XHJcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYWJzb2x1dGUgdG9wLTIgcmlnaHQtMiB0ZXh0LXhzIGZvbnQtc2VtaWJvbGQgZ3JlZW4gXHJcbiAgICAgICAgICAgICAgcHktMSBweC0yIHJvdW5kZWQteGwgdGV4dC13aGl0ZSBcIj5cclxuICAgICAgICAgICAgICAgIHthaXJkcm9wLnBsYXRmb3JtVHlwZX1cclxuICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gbWItOFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTE2IGgtMTYgcmVsYXRpdmVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17YWlyZHJvcC5sb2dvfSBjbGFzc05hbWU9XCIgdy0xNiBoLTE2IHJvdW5kZWQtZnVsbFwiIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LWxnIGZvbnQtYm9sZCBhYnNvbHV0ZSBsZWZ0LTI0IHRvcC01XCI+e2FpcmRyb3AudGl0bGV9PC9oMj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtZ3JheS01MDAgbWItMlwiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSd0ZXh0LXhzIGFic29sdXRlIHRvcC0yMCBsZWZ0LTI0Jz5Ub3RhbCBBaXJkcm9wIFBvb2w8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmb250LXNlbWlib2xkIGFic29sdXRlIHRvcC0xNCBsZWZ0LTI0XCI+e2FpcmRyb3AucmV3YXJkUG9vbCB8fCAnTi9BJ308L3NwYW4+XHJcbiAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1ncmF5LTUwMCBtYi0yXCI+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J3RleHQteHMgYWJzb2x1dGUgdG9wLTIwIGxlZnQtNTYnPiUgb2YgVG90YWwgU3VwcGx5PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZm9udC1zZW1pYm9sZCBhYnNvbHV0ZSB0b3AtMTQgbGVmdC01NlwiPnthaXJkcm9wLnJld2FyZFBlcmNlbnRGcm9tU3VwcGx5IHx8ICdOL0EnfTwvc3Bhbj5cclxuICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LWdyYXktNTAwXCI+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9Jyc+RW5kIERhdGU8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmb250LXNlbWlib2xkIGFic29sdXRlIGJvdHRvbS00IGxlZnQtMyBcIj57bmV3IERhdGUoYWlyZHJvcC5lbmREYXRlKS50b0xvY2FsZURhdGVTdHJpbmcoKSB8fCAnTi9BJ308L3NwYW4+XHJcbiAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1ncmF5LTUwMFwiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdhYnNvbHV0ZSB0b3AtMjggcmlnaHQtNic+Q2hhaW48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmb250LXNlbWlib2xkIGFic29sdXRlIGJvdHRvbS00IHJpZ2h0LTNcIj57YWlyZHJvcC5jaGFpbiB8fCAnTi9BJ308L3NwYW4+XHJcbiAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgIDxzcGFuIGFyaWEtbGFiZWw9J3ZpZXcnIHRpdGxlPSd2aWV3JyBjbGFzc05hbWU9XCJhYnNvbHV0ZSB0b3AtMjggdGV4dC1jZW50ZXIgbS1hdXRvXCJcclxuICAgICAgICAgICAgICBzdHlsZT17e2xlZnQ6IFwiNDYlXCJ9fT5cclxuICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT0ndy04IGgtOCBob3Zlcjp3LTcgaG92ZXI6aC03IGFjdGl2ZTp3LTggYWN0aXZlOmgtOCcgc3JjPSdnby1pY29uLTEzLmpwZyc+PC9pbWc+XHJcbiAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICkpfVxyXG5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKX1cclxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0ncHktMiBweC00IG0tYXV0byBtdC02IGZsZXgganVzdGlmeS1zZWxmLWNlbnRlciBob3ZlcjpiZy1ibHVlLTUwMCBob3Zlcjp0ZXh0LXdoaXRlIGhvdmVyOnRyYW5zaXRpb24tWzAuMnNdXHJcbiAgICAgICAgIHRleHQtYmxhY2sgYWN0aXZlOmJnLWJsdWUtMTAwIHJvdW5kZWQteGwgYmctZ3JheS0yMDAgaG92ZXI6ZWFzZS1pbi1vdXQnPlxyXG4gICAgICAgICAgTW9yZVxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFpcmRyb3BzOyJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsImF4aW9zIiwiQWlyZHJvcHNTa2VsZXRvbiIsImRpdiIsImNsYXNzTmFtZSIsIm1hcCIsImluZGV4IiwiQWlyZHJvcHMiLCJhaXJkcm9wcyIsInNldEFpcmRyb3BzIiwibG9hZGluZyIsInNldExvYWRpbmciLCJmZXRjaERhdGEiLCJyZXNwb25zZSIsImdldCIsInBhcmFtcyIsImxpbWl0IiwiZGF0YSIsImVycm9yIiwiY29uc29sZSIsImgyIiwiYWlyZHJvcCIsInNwYW4iLCJwbGF0Zm9ybVR5cGUiLCJpbWciLCJzcmMiLCJsb2dvIiwidGl0bGUiLCJwIiwicmV3YXJkUG9vbCIsInJld2FyZFBlcmNlbnRGcm9tU3VwcGx5IiwiRGF0ZSIsImVuZERhdGUiLCJ0b0xvY2FsZURhdGVTdHJpbmciLCJjaGFpbiIsImFyaWEtbGFiZWwiLCJzdHlsZSIsImxlZnQiLCJfaWQiLCJidXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./Components/Airdrops.jsx\n"));

/***/ })

});