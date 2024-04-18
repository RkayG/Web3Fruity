(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 302:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ App)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./styles/globals.css
var globals = __webpack_require__(764);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
;// CONCATENATED MODULE: ./Components/Footer.jsx


const Footer = ()=>{
    const productList = [
        "Airdrops",
        "Giveaways",
        "Play-to-earn games"
    ];
    const contactList = [
        "support@web3fruity.com",
        "info@example.com",
        "Contact Us"
    ];
    const usefulLink = [
        "Home",
        "About Us",
        "Blog"
    ];
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("footer", {
        className: "text-center text-white backgroundMain lg:text-left",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "mx-6 py-10 text-center md:text-left",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "grid-1 grid gap-8 md:grid-cols-2 lg:grid-cols-4",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                    className: "mb-4 flex items-center justify-center font-semibold uppercase   md:justify-start",
                                    children: "Web3Fruity"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    children: "Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                    className: "mb-4 flex items-center justify-center font-semibold uppercase   md:justify-start",
                                    children: "Earn"
                                }),
                                productList.map((el, i)=>/*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        className: "mb-4",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            href: "/",
                                            children: el
                                        })
                                    }, i + 1))
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                    className: "mb-4 flex items-center justify-center font-semibold uppercase   md:justify-start",
                                    children: "Useful Links"
                                }),
                                usefulLink.map((el, i)=>/*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        className: "mb-4",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            href: "#!",
                                            children: el
                                        })
                                    }, i + 1))
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                    className: "mb-4 flex items-center justify-center font-semibold uppercase   md:justify-start",
                                    children: "Contact"
                                }),
                                contactList.map((el, i)=>/*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        className: "mb-4",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            href: "/",
                                            children: el
                                        })
                                    }, i + 1))
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "backgroundMain p-6 text-center",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        children: "2024 Copyright: "
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        href: "https://tailwind-elements.com",
                        className: "font-semibold",
                        children: "Web3Fruity"
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const Components_Footer = (Footer);

;// CONCATENATED MODULE: ./Components/NavBar.jsx


// INTERNAL IMPORT 

const NavBar = ()=>{
    const [isMenuOpen, setIsMenuOpen] = (0,external_react_.useState)(false);
    const menuList = [
        "Home",
        "Airdrops",
        "Games",
        "Apps",
        "Blog",
        "Crypto Insights"
    ];
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "backgroundMain",
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl    md:px-24 lg:px-8",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "relative flex items-center justify-between",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "flex items-center",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                href: "/",
                                "aria-label": "Company",
                                title: "Company",
                                className: "inline-flex items-center mr-8",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(Components_Logo, {
                                        color: "text-white"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: "ml-2 text-xl font-bold tracking-wide tai uppercase",
                                        children: "Web3Fruity"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                className: "flex items-center hidden space-x-8 lg:flex",
                                children: menuList.map((el, i)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            href: "/",
                                            "aria-label": "Our Product",
                                            title: "Our Product",
                                            className: "font-medium   tracking text-gray-100 transition-colors duration-200 hover:text-teal-accent-400",
                                            children: el
                                        })
                                    }, i + 1))
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "lg:hidden z-40",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                "aria-label": "Open Menu",
                                title: "Open Menu",
                                className: "p-2 -mr-1 transition duration-200   rounded focus:outline-none focus:shadow-outline",
                                onClick: ()=>setIsMenuOpen(true),
                                children: /*#__PURE__*/ jsx_runtime_.jsx(Components_Menu, {})
                            }),
                            isMenuOpen && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "absolute top-0 left-0 w-full",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "p-5 bg-white border rounded shadow-sm",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "flex items-center justify-between mb-4",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                        href: "/",
                                                        "aria-label": "Company",
                                                        title: "Company",
                                                        className: "inline-flex items-center",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx(Components_Logo, {
                                                                color: "text-black"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                className: "ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase",
                                                                children: "Web3Fruity"
                                                            })
                                                        ]
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("buttton", {
                                                        "aria-label": "Close Menu",
                                                        title: "Close Menu",
                                                        className: "p-2 -mt-2 -mr-2 transition    duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline",
                                                        onClick: ()=>setIsMenuOpen(false),
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                                            className: "w-5 text-gray-600",
                                                            viewBox: "0 0 24 24",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                                fill: "currentColor",
                                                                d: "M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                                                            })
                                                        })
                                                    })
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("nav", {
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                className: "space-y-4",
                                                children: [
                                                    menuList.map((el, i)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                href: "/",
                                                                "aria-label": "Our Product",
                                                                title: "Our product",
                                                                className: "font-medium   tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400",
                                                                children: el
                                                            })
                                                        }, i + 1)),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            href: "/",
                                                            className: "inline-flex items-center background justify-center w-full h-12 px-6 font-medium   tracking-wide text-white transition duration-200 rounded shadow-md bg-blue-400   hover:bg-blue-700 focus:shadow-outline focus:outline-none",
                                                            "aria-label": "Sign up",
                                                            title: "Sign up",
                                                            children: "Sign Up"
                                                        })
                                                    })
                                                ]
                                            })
                                        })
                                    ]
                                })
                            })
                        ]
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const Components_NavBar = (NavBar);

;// CONCATENATED MODULE: ./Components/Card.jsx


const Card = ()=>{
    return /*#__PURE__*/ _jsx("div", {
        children: "Card"
    });
};
/* harmony default export */ const Components_Card = ((/* unused pure expression or super */ null && (Card)));

;// CONCATENATED MODULE: ./Components/Logo.jsx


const Logo = ({ color  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
        className: `w-8 ${color} text-teal-accent-400`,
        viewBox: "0 0 24 24",
        strokeLinejoin: "round",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeMiterlimit: "10",
        stroke: "currentColor",
        fill: "none",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("rect", {
                x: "3",
                y: "1",
                width: "7",
                height: "12"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("rect", {
                x: "3",
                y: "17",
                width: "7",
                height: "6"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("rect", {
                x: "14",
                y: "1",
                width: "7",
                height: "6"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("rect", {
                x: "14",
                y: "11",
                width: "7",
                height: "12"
            })
        ]
    });
};
/* harmony default export */ const Components_Logo = (Logo);

;// CONCATENATED MODULE: ./Components/Menu.jsx


const Menu = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
        className: "w-5 text-white",
        viewBox: "0 0 24 24",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "currentColor",
                d: "M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "currentColor",
                d: "M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "currentColor",
                d: "M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
            })
        ]
    });
};
/* harmony default export */ const Components_Menu = (Menu);

;// CONCATENATED MODULE: ./Components/ICON.jsx


const ICON = ()=>{
    return /*#__PURE__*/ _jsx("svg", {
        className: "absolute inset-x-0 bottom-0 text-white",
        viewBox: "0 0 1160 163",
        children: /*#__PURE__*/ _jsx("path", {
            fill: "currentColor",
            d: "M-164 13L-104 39.7C-44 66 76 120 196 141C316 162 436 152 556 119.7C676 88 796 34 916 13C1036 -8 1156 2 1216 7.7L1276 13V162.5H1216C1156 162.5 1036 162.5 916 162.5C796 162.5 676 162.5 556 162.5C436 162.5 316 162.5 196 162.5C76 162.5 -44 162.5 -104 162.5H-164V13Z"
        })
    });
};
/* harmony default export */ const Components_ICON = ((/* unused pure expression or super */ null && (ICON)));

;// CONCATENATED MODULE: ./Components/Close.jsx


const Close = ()=>{
    return /*#__PURE__*/ _jsx("svg", {
        class: "w-5 text-gray-600",
        viewBox: "0 0 24 24",
        children: /*#__PURE__*/ _jsx("path", {
            fill: "currentColor",
            d: "M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
        })
    });
};
/* harmony default export */ const Components_Close = ((/* unused pure expression or super */ null && (Close)));

;// CONCATENATED MODULE: ./Components/Arrow.jsx


const Arrow = ()=>{
    return /*#__PURE__*/ _jsx("svg", {
        className: "inline-block w-3 ml-2",
        fill: "currentColor",
        viewBox: "0 0 12 12",
        children: /*#__PURE__*/ _jsx("path", {
            d: "M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z"
        })
    });
};
/* harmony default export */ const Components_Arrow = ((/* unused pure expression or super */ null && (Arrow)));

;// CONCATENATED MODULE: ./Components/index.js










;// CONCATENATED MODULE: ./pages/_app.js


// INTERNAL IMPORTS

;
function App({ Component , pageProps  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Components_NavBar, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(Components_Menu, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                ...pageProps
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Components_Footer, {})
        ]
    });
}


/***/ }),

/***/ 764:
/***/ (() => {



/***/ }),

/***/ 689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 997:
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
var __webpack_exports__ = (__webpack_exec__(302));
module.exports = __webpack_exports__;

})();