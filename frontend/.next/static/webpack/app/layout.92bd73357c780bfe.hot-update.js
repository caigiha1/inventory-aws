"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/layout",{

/***/ "(app-pages-browser)/./src/app/globals.css":
/*!*****************************!*\
  !*** ./src/app/globals.css ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"05c68125f9b6\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvZ2xvYmFscy5jc3MiLCJtYXBwaW5ncyI6IjtBQUFBLCtEQUFlLGNBQWM7QUFDN0IsSUFBSSxJQUFVLElBQUksaUJBQWlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvZ2xvYmFscy5jc3M/MzEwNCJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBcIjA1YzY4MTI1ZjliNlwiXG5pZiAobW9kdWxlLmhvdCkgeyBtb2R1bGUuaG90LmFjY2VwdCgpIH1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/globals.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./src/app/(component)/sidebar/index.tsx":
/*!***********************************************!*\
  !*** ./src/app/(component)/sidebar/index.tsx ***!
  \***********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _app_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/app/redux */ \"(app-pages-browser)/./src/app/redux.tsx\");\n/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/state */ \"(app-pages-browser)/./src/state/index.ts\");\n/* harmony import */ var _barrel_optimize_names_Menu_lucide_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! __barrel_optimize__?names=Menu!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/menu.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\n\n\n\n\n\nconst SidebarLink = (param)=>{\n    let { href, icon: Icon, label, isCollapsed } = param;\n    _s();\n    const pathname = (0,next_navigation__WEBPACK_IMPORTED_MODULE_4__.usePathname)();\n    const isActive = pathname === href || pathname === \"/\" && href === \"/dashboard\";\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        href: href,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"cursor-pointer flex items-center \".concat(isCollapsed ? \"justify-center py-4\" : \"justify-start px-8 py-4\", \" hover:text-blue-500 hover:bg-blue-100 gap-3 transition-colors \").concat(isActive ? \"bg-blue-200 text-white\" : \"\"),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Icon, {\n                    className: \"w-6 h-6 text-gray-700\"\n                }, void 0, false, {\n                    fileName: \"/Users/quyettranminh/Developer/inventory-managerment/client/src/app/(component)/sidebar/index.tsx\",\n                    lineNumber: 32,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                    className: \"\".concat(isCollapsed ? \"hidden\" : \"block\", \" font-medium text-gray-700\"),\n                    children: label\n                }, void 0, false, {\n                    fileName: \"/Users/quyettranminh/Developer/inventory-managerment/client/src/app/(component)/sidebar/index.tsx\",\n                    lineNumber: 34,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/quyettranminh/Developer/inventory-managerment/client/src/app/(component)/sidebar/index.tsx\",\n            lineNumber: 29,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/quyettranminh/Developer/inventory-managerment/client/src/app/(component)/sidebar/index.tsx\",\n        lineNumber: 28,\n        columnNumber: 5\n    }, undefined);\n};\n_s(SidebarLink, \"xbyQPtUVMO7MNj7WjJlpdWqRcTo=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_4__.usePathname\n    ];\n});\n_c = SidebarLink;\nconst Sidebar = ()=>{\n    _s1();\n    const dispatch = (0,_app_redux__WEBPACK_IMPORTED_MODULE_1__.useAppDispatch)();\n    const isSidebarCollapsed = (0,_app_redux__WEBPACK_IMPORTED_MODULE_1__.useAppSelector)((state)=>state.global.isSidebarCollapsed);\n    const toggleSidebar = ()=>{\n        dispatch((0,_state__WEBPACK_IMPORTED_MODULE_2__.setIsSidebarCollapsed)(!isSidebarCollapsed));\n    };\n    const sidebarClassNames = \"fixed flex flex-col \".concat(isSidebarCollapsed ? \"w-0 md:w-16\" : \"w-72 md:w-64\", \" bg-white transition-all duration-300 overflow-hidden h-full shadow-md z-40\");\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: sidebarClassNames,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex gap-3 justify-between md:justify-normal items-center pt-8 \".concat(isSidebarCollapsed ? \"px-5\" : \"px-8\"),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: \"Logo\"\n                    }, void 0, false, {\n                        fileName: \"/Users/quyettranminh/Developer/inventory-managerment/client/src/app/(component)/sidebar/index.tsx\",\n                        lineNumber: 61,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"font-extrabold text-2xl \".concat(isSidebarCollapsed ? \"hidden\" : \"block\"),\n                        children: \"Stock\"\n                    }, void 0, false, {\n                        fileName: \"/Users/quyettranminh/Developer/inventory-managerment/client/src/app/(component)/sidebar/index.tsx\",\n                        lineNumber: 62,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"md:hidden px-3 py-3 bg-gray-100 rounded-full hover:bg-blue-100\",\n                        onClick: toggleSidebar,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Menu_lucide_react__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                            className: \"w-4 h-4\"\n                        }, void 0, false, {\n                            fileName: \"/Users/quyettranminh/Developer/inventory-managerment/client/src/app/(component)/sidebar/index.tsx\",\n                            lineNumber: 71,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/quyettranminh/Developer/inventory-managerment/client/src/app/(component)/sidebar/index.tsx\",\n                        lineNumber: 67,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/quyettranminh/Developer/inventory-managerment/client/src/app/(component)/sidebar/index.tsx\",\n                lineNumber: 58,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex-grow mt-8\"\n            }, void 0, false, {\n                fileName: \"/Users/quyettranminh/Developer/inventory-managerment/client/src/app/(component)/sidebar/index.tsx\",\n                lineNumber: 75,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"text-center text-xs text-gray-500\",\n                    children: \"\\xa9 2024 stock\"\n                }, void 0, false, {\n                    fileName: \"/Users/quyettranminh/Developer/inventory-managerment/client/src/app/(component)/sidebar/index.tsx\",\n                    lineNumber: 78,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/quyettranminh/Developer/inventory-managerment/client/src/app/(component)/sidebar/index.tsx\",\n                lineNumber: 77,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/quyettranminh/Developer/inventory-managerment/client/src/app/(component)/sidebar/index.tsx\",\n        lineNumber: 57,\n        columnNumber: 5\n    }, undefined);\n};\n_s1(Sidebar, \"PqQZzUnCvmXyMQtUoWWwPjOlbu4=\", false, function() {\n    return [\n        _app_redux__WEBPACK_IMPORTED_MODULE_1__.useAppDispatch,\n        _app_redux__WEBPACK_IMPORTED_MODULE_1__.useAppSelector\n    ];\n});\n_c1 = Sidebar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Sidebar);\nvar _c, _c1;\n$RefreshReg$(_c, \"SidebarLink\");\n$RefreshReg$(_c1, \"Sidebar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvKGNvbXBvbmVudCkvc2lkZWJhci9pbmRleC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFFNkQ7QUFDYjtBQUNNO0FBQ3pCO0FBQ2lCO0FBQ3BCO0FBUzFCLE1BQU1PLGNBQWM7UUFBQyxFQUNuQkMsSUFBSSxFQUNKQyxNQUFNQyxJQUFJLEVBQ1ZDLEtBQUssRUFDTEMsV0FBVyxFQUNNOztJQUNqQixNQUFNQyxXQUFXUiw0REFBV0E7SUFDNUIsTUFBTVMsV0FDSkQsYUFBYUwsUUFBU0ssYUFBYSxPQUFPTCxTQUFTO0lBRXJELHFCQUNFLDhEQUFDSixpREFBSUE7UUFBQ0ksTUFBTUE7a0JBQ1YsNEVBQUNPO1lBQ0NDLFdBQVcsb0NBQXFLRixPQUFqSUYsY0FBYyx3QkFBd0IsMkJBQTBCLG1FQUEwRyxPQUF6Q0UsV0FBVywyQkFBMkI7OzhCQUV0Tiw4REFBQ0o7b0JBQUtNLFdBQVU7Ozs7Ozs4QkFFaEIsOERBQUNDO29CQUNDRCxXQUFXLEdBQW9DLE9BQWpDSixjQUFjLFdBQVcsU0FBUTs4QkFFOUNEOzs7Ozs7Ozs7Ozs7Ozs7OztBQUtYO0dBekJNSjs7UUFNYUYsd0RBQVdBOzs7S0FOeEJFO0FBMkJOLE1BQU1XLFVBQVU7O0lBQ2QsTUFBTUMsV0FBV25CLDBEQUFjQTtJQUMvQixNQUFNb0IscUJBQXFCbkIsMERBQWNBLENBQ3ZDLENBQUNvQixRQUFVQSxNQUFNQyxNQUFNLENBQUNGLGtCQUFrQjtJQUc1QyxNQUFNRyxnQkFBZ0I7UUFDcEJKLFNBQVNqQiw2REFBcUJBLENBQUMsQ0FBQ2tCO0lBQ2xDO0lBRUEsTUFBTUksb0JBQW9CLHVCQUEyRSxPQUFwREoscUJBQXFCLGdCQUFnQixnQkFBZTtJQUVyRyxxQkFDRSw4REFBQ0w7UUFBSUMsV0FBV1E7OzBCQUNkLDhEQUFDVDtnQkFDQ0MsV0FBVyxrRUFBdUcsT0FBckNJLHFCQUFxQixTQUFTOztrQ0FFM0csOERBQUNMO2tDQUFJOzs7Ozs7a0NBQ0wsOERBQUNVO3dCQUNDVCxXQUFXLDJCQUFtRSxPQUF4Q0kscUJBQXFCLFdBQVc7a0NBQ3ZFOzs7Ozs7a0NBR0QsOERBQUNNO3dCQUNDVixXQUFVO3dCQUNWVyxTQUFTSjtrQ0FFVCw0RUFBQ3BCLGdGQUFJQTs0QkFBQ2EsV0FBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBSXBCLDhEQUFDRDtnQkFBSUMsV0FBVTs7Ozs7OzBCQUVmLDhEQUFDRDswQkFDQyw0RUFBQ2E7b0JBQUVaLFdBQVU7OEJBQW9DOzs7Ozs7Ozs7Ozs7Ozs7OztBQUl6RDtJQXRDTUU7O1FBQ2FsQixzREFBY0E7UUFDSkMsc0RBQWNBOzs7TUFGckNpQjtBQXdDTiwrREFBZUEsT0FBT0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwLyhjb21wb25lbnQpL3NpZGViYXIvaW5kZXgudHN4PzgyZmYiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5cbmltcG9ydCB7IHVzZUFwcERpc3BhdGNoLCB1c2VBcHBTZWxlY3RvciB9IGZyb20gXCJAL2FwcC9yZWR1eFwiO1xuaW1wb3J0IHsgc2V0SXNTaWRlYmFyQ29sbGFwc2VkIH0gZnJvbSBcIkAvc3RhdGVcIjtcbmltcG9ydCB7IEljb24sIEx1Y2lkZUljb24sIE1lbnUgfSBmcm9tIFwibHVjaWRlLXJlYWN0XCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgeyB1c2VQYXRobmFtZSB9IGZyb20gXCJuZXh0L25hdmlnYXRpb25cIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuaW50ZXJmYWNlIFNpZGViYXJMaW5rUHJvcHMge1xuICBocmVmOiBzdHJpbmc7XG4gIGljb246IEx1Y2lkZUljb247XG4gIGxhYmVsOiBzdHJpbmc7XG4gIGlzQ29sbGFwc2VkOiBib29sZWFuO1xufVxuXG5jb25zdCBTaWRlYmFyTGluayA9ICh7XG4gIGhyZWYsXG4gIGljb246IEljb24sXG4gIGxhYmVsLFxuICBpc0NvbGxhcHNlZCxcbn06IFNpZGViYXJMaW5rUHJvcHMpID0+IHtcbiAgY29uc3QgcGF0aG5hbWUgPSB1c2VQYXRobmFtZSgpO1xuICBjb25zdCBpc0FjdGl2ZSA9XG4gICAgcGF0aG5hbWUgPT09IGhyZWYgfHwgKHBhdGhuYW1lID09PSBcIi9cIiAmJiBocmVmID09PSBcIi9kYXNoYm9hcmRcIik7XG5cbiAgcmV0dXJuIChcbiAgICA8TGluayBocmVmPXtocmVmfT5cbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3NOYW1lPXtgY3Vyc29yLXBvaW50ZXIgZmxleCBpdGVtcy1jZW50ZXIgJHtpc0NvbGxhcHNlZCA/IFwianVzdGlmeS1jZW50ZXIgcHktNFwiIDogXCJqdXN0aWZ5LXN0YXJ0IHB4LTggcHktNFwifSBob3Zlcjp0ZXh0LWJsdWUtNTAwIGhvdmVyOmJnLWJsdWUtMTAwIGdhcC0zIHRyYW5zaXRpb24tY29sb3JzICR7aXNBY3RpdmUgPyBcImJnLWJsdWUtMjAwIHRleHQtd2hpdGVcIiA6IFwiXCJ9YH1cbiAgICAgID5cbiAgICAgICAgPEljb24gY2xhc3NOYW1lPVwidy02IGgtNiB0ZXh0LWdyYXktNzAwXCIgLz5cblxuICAgICAgICA8c3BhblxuICAgICAgICAgIGNsYXNzTmFtZT17YCR7aXNDb2xsYXBzZWQgPyBcImhpZGRlblwiIDogXCJibG9ja1wifSBmb250LW1lZGl1bSB0ZXh0LWdyYXktNzAwYH1cbiAgICAgICAgPlxuICAgICAgICAgIHtsYWJlbH1cbiAgICAgICAgPC9zcGFuPlxuICAgICAgPC9kaXY+XG4gICAgPC9MaW5rPlxuICApO1xufTtcblxuY29uc3QgU2lkZWJhciA9ICgpID0+IHtcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VBcHBEaXNwYXRjaCgpO1xuICBjb25zdCBpc1NpZGViYXJDb2xsYXBzZWQgPSB1c2VBcHBTZWxlY3RvcihcbiAgICAoc3RhdGUpID0+IHN0YXRlLmdsb2JhbC5pc1NpZGViYXJDb2xsYXBzZWRcbiAgKTtcblxuICBjb25zdCB0b2dnbGVTaWRlYmFyID0gKCkgPT4ge1xuICAgIGRpc3BhdGNoKHNldElzU2lkZWJhckNvbGxhcHNlZCghaXNTaWRlYmFyQ29sbGFwc2VkKSk7XG4gIH07XG5cbiAgY29uc3Qgc2lkZWJhckNsYXNzTmFtZXMgPSBgZml4ZWQgZmxleCBmbGV4LWNvbCAke2lzU2lkZWJhckNvbGxhcHNlZCA/IFwidy0wIG1kOnctMTZcIiA6IFwidy03MiBtZDp3LTY0XCJ9IGJnLXdoaXRlIHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTMwMCBvdmVyZmxvdy1oaWRkZW4gaC1mdWxsIHNoYWRvdy1tZCB6LTQwYDtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzaWRlYmFyQ2xhc3NOYW1lc30+XG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzTmFtZT17YGZsZXggZ2FwLTMganVzdGlmeS1iZXR3ZWVuIG1kOmp1c3RpZnktbm9ybWFsIGl0ZW1zLWNlbnRlciBwdC04ICR7aXNTaWRlYmFyQ29sbGFwc2VkID8gXCJweC01XCIgOiBcInB4LThcIn1gfVxuICAgICAgPlxuICAgICAgICA8ZGl2PkxvZ288L2Rpdj5cbiAgICAgICAgPGgxXG4gICAgICAgICAgY2xhc3NOYW1lPXtgZm9udC1leHRyYWJvbGQgdGV4dC0yeGwgJHtpc1NpZGViYXJDb2xsYXBzZWQgPyBcImhpZGRlblwiIDogXCJibG9ja1wifWB9XG4gICAgICAgID5cbiAgICAgICAgICBTdG9ja1xuICAgICAgICA8L2gxPlxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgY2xhc3NOYW1lPVwibWQ6aGlkZGVuIHB4LTMgcHktMyBiZy1ncmF5LTEwMCByb3VuZGVkLWZ1bGwgaG92ZXI6YmctYmx1ZS0xMDBcIlxuICAgICAgICAgIG9uQ2xpY2s9e3RvZ2dsZVNpZGViYXJ9XG4gICAgICAgID5cbiAgICAgICAgICA8TWVudSBjbGFzc05hbWU9XCJ3LTQgaC00XCIgLz5cbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICAgIHsvKiBMaW5rcyAqL31cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC1ncm93IG10LThcIj48L2Rpdj5cbiAgICAgIHsvKiBGb290ZXIgKi99XG4gICAgICA8ZGl2PlxuICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciB0ZXh0LXhzIHRleHQtZ3JheS01MDBcIj4mY29weTsgMjAyNCBzdG9jazwvcD5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU2lkZWJhcjtcbiJdLCJuYW1lcyI6WyJ1c2VBcHBEaXNwYXRjaCIsInVzZUFwcFNlbGVjdG9yIiwic2V0SXNTaWRlYmFyQ29sbGFwc2VkIiwiTWVudSIsIkxpbmsiLCJ1c2VQYXRobmFtZSIsIlJlYWN0IiwiU2lkZWJhckxpbmsiLCJocmVmIiwiaWNvbiIsIkljb24iLCJsYWJlbCIsImlzQ29sbGFwc2VkIiwicGF0aG5hbWUiLCJpc0FjdGl2ZSIsImRpdiIsImNsYXNzTmFtZSIsInNwYW4iLCJTaWRlYmFyIiwiZGlzcGF0Y2giLCJpc1NpZGViYXJDb2xsYXBzZWQiLCJzdGF0ZSIsImdsb2JhbCIsInRvZ2dsZVNpZGViYXIiLCJzaWRlYmFyQ2xhc3NOYW1lcyIsImgxIiwiYnV0dG9uIiwib25DbGljayIsInAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/(component)/sidebar/index.tsx\n"));

/***/ })

});