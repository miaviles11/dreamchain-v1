"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/registrar-sueno/page",{

/***/ "(app-pages-browser)/./app/registrar-sueno/page.tsx":
/*!**************************************!*\
  !*** ./app/registrar-sueno/page.tsx ***!
  \**************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ DreamRegistryForm)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _components_ui_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/ui/card */ \"(app-pages-browser)/./app/components/ui/card.tsx\");\n/* harmony import */ var _components_ui_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/ui/input */ \"(app-pages-browser)/./app/components/ui/input.tsx\");\n/* harmony import */ var _components_ui_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/ui/button */ \"(app-pages-browser)/./app/components/ui/button.tsx\");\n/* harmony import */ var _components_ui_label__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/ui/label */ \"(app-pages-browser)/./app/components/ui/label.tsx\");\n/* harmony import */ var _barrel_optimize_names_Gift_Sparkles_Target_Upload_lucide_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! __barrel_optimize__?names=Gift,Sparkles,Target,Upload!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/sparkles.js\");\n/* harmony import */ var _barrel_optimize_names_Gift_Sparkles_Target_Upload_lucide_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! __barrel_optimize__?names=Gift,Sparkles,Target,Upload!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/target.js\");\n/* harmony import */ var _barrel_optimize_names_Gift_Sparkles_Target_Upload_lucide_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! __barrel_optimize__?names=Gift,Sparkles,Target,Upload!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/gift.js\");\n/* harmony import */ var _barrel_optimize_names_Gift_Sparkles_Target_Upload_lucide_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! __barrel_optimize__?names=Gift,Sparkles,Target,Upload!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/upload.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction DreamRegistryForm() {\n    _s();\n    const [dreamForm, setDreamForm] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)({\n        name_sleep: '',\n        dream_description: '',\n        goals: ''\n    });\n    const handleChange = (e)=>{\n        const { name, value } = e.target;\n        setDreamForm((prev)=>({\n                ...prev,\n                [name]: value\n            }));\n    };\n    const handleSubmit = (e)=>{\n        e.preventDefault();\n        console.log(dreamForm); // Aquí puedes enviar el estado al servidor o hacer lo que necesites\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"container mx-auto px-4 py-8\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_1__.Card, {\n            className: \"w-full max-w-2xl mx-auto\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_1__.CardHeader, {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_1__.CardFooter, {\n                        className: \"text-3xl font-bold text-center\",\n                        children: \"Registrar tu Sue\\xf1o\"\n                    }, void 0, false, {\n                        fileName: \"/Users/alex/DreamChain/app/registrar-sueno/page.tsx\",\n                        lineNumber: 41,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/alex/DreamChain/app/registrar-sueno/page.tsx\",\n                    lineNumber: 40,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_1__.CardContent, {\n                    className: \"space-y-6\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"space-y-2\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_label__WEBPACK_IMPORTED_MODULE_4__.Label, {\n                                    htmlFor: \"dream-name\",\n                                    className: \"text-lg font-medium\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Gift_Sparkles_Target_Upload_lucide_react__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                            className: \"inline-block mr-2\",\n                                            size: 20\n                                        }, void 0, false, {\n                                            fileName: \"/Users/alex/DreamChain/app/registrar-sueno/page.tsx\",\n                                            lineNumber: 46,\n                                            columnNumber: 15\n                                        }, this),\n                                        \"Nombre del Sue\\xf1o\"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/alex/DreamChain/app/registrar-sueno/page.tsx\",\n                                    lineNumber: 45,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_input__WEBPACK_IMPORTED_MODULE_2__.Input, {\n                                    id: \"dream-name\",\n                                    name: \"name_sleep\",\n                                    value: dreamForm.name_sleep,\n                                    onChange: handleChange,\n                                    placeholder: \"Escribe el nombre de tu sue\\xf1o\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/alex/DreamChain/app/registrar-sueno/page.tsx\",\n                                    lineNumber: 49,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/alex/DreamChain/app/registrar-sueno/page.tsx\",\n                            lineNumber: 44,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"space-y-2\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_label__WEBPACK_IMPORTED_MODULE_4__.Label, {\n                                    htmlFor: \"dream-description\",\n                                    className: \"text-lg font-medium\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Gift_Sparkles_Target_Upload_lucide_react__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                                            className: \"inline-block mr-2\",\n                                            size: 20\n                                        }, void 0, false, {\n                                            fileName: \"/Users/alex/DreamChain/app/registrar-sueno/page.tsx\",\n                                            lineNumber: 54,\n                                            columnNumber: 15\n                                        }, this),\n                                        \"Descripci\\xf3n\"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/alex/DreamChain/app/registrar-sueno/page.tsx\",\n                                    lineNumber: 53,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_input__WEBPACK_IMPORTED_MODULE_2__.Input, {\n                                    id: \"dream-description\",\n                                    name: \"dream_description\",\n                                    placeholder: \"Describe tu sue\\xf1o en detalle\",\n                                    value: dreamForm.dream_description,\n                                    onChange: handleChange,\n                                    className: \"min-h-[100px]\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/alex/DreamChain/app/registrar-sueno/page.tsx\",\n                                    lineNumber: 57,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/alex/DreamChain/app/registrar-sueno/page.tsx\",\n                            lineNumber: 52,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"space-y-2\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_label__WEBPACK_IMPORTED_MODULE_4__.Label, {\n                                    htmlFor: \"dream-goals\",\n                                    className: \"text-lg font-medium\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Gift_Sparkles_Target_Upload_lucide_react__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                                            className: \"inline-block mr-2\",\n                                            size: 20\n                                        }, void 0, false, {\n                                            fileName: \"/Users/alex/DreamChain/app/registrar-sueno/page.tsx\",\n                                            lineNumber: 62,\n                                            columnNumber: 15\n                                        }, this),\n                                        \"Metas\"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/alex/DreamChain/app/registrar-sueno/page.tsx\",\n                                    lineNumber: 61,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_input__WEBPACK_IMPORTED_MODULE_2__.Input, {\n                                    id: \"dream-goals\",\n                                    name: \"dream_goals\",\n                                    value: dreamForm.goals,\n                                    onChange: handleChange,\n                                    placeholder: \"Define las metas de tu sue\\xf1o\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/alex/DreamChain/app/registrar-sueno/page.tsx\",\n                                    lineNumber: 65,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/alex/DreamChain/app/registrar-sueno/page.tsx\",\n                            lineNumber: 60,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"space-y-2\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_label__WEBPACK_IMPORTED_MODULE_4__.Label, {\n                                    htmlFor: \"dream-reward\",\n                                    className: \"text-lg font-medium\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Gift_Sparkles_Target_Upload_lucide_react__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                                            className: \"inline-block mr-2\",\n                                            size: 20\n                                        }, void 0, false, {\n                                            fileName: \"/Users/alex/DreamChain/app/registrar-sueno/page.tsx\",\n                                            lineNumber: 70,\n                                            columnNumber: 15\n                                        }, this),\n                                        \"Recompensa Ofrecida\"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/alex/DreamChain/app/registrar-sueno/page.tsx\",\n                                    lineNumber: 69,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_input__WEBPACK_IMPORTED_MODULE_2__.Input, {\n                                    id: \"dream-reward\",\n                                    placeholder: \"Especifica la recompensa por cumplir el sue\\xf1o\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/alex/DreamChain/app/registrar-sueno/page.tsx\",\n                                    lineNumber: 73,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/alex/DreamChain/app/registrar-sueno/page.tsx\",\n                            lineNumber: 68,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"space-y-2\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_label__WEBPACK_IMPORTED_MODULE_4__.Label, {\n                                    htmlFor: \"dream-attachments\",\n                                    className: \"text-lg font-medium\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Gift_Sparkles_Target_Upload_lucide_react__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                                            className: \"inline-block mr-2\",\n                                            size: 20\n                                        }, void 0, false, {\n                                            fileName: \"/Users/alex/DreamChain/app/registrar-sueno/page.tsx\",\n                                            lineNumber: 77,\n                                            columnNumber: 15\n                                        }, this),\n                                        \"Adjuntar Im\\xe1genes o Documentos (Opcional)\"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/alex/DreamChain/app/registrar-sueno/page.tsx\",\n                                    lineNumber: 76,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_input__WEBPACK_IMPORTED_MODULE_2__.Input, {\n                                    id: \"dream-attachments\",\n                                    type: \"file\",\n                                    multiple: true,\n                                    className: \"cursor-pointer\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/alex/DreamChain/app/registrar-sueno/page.tsx\",\n                                    lineNumber: 80,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/alex/DreamChain/app/registrar-sueno/page.tsx\",\n                            lineNumber: 75,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_button__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                            className: \"w-full text-lg py-6\",\n                            size: \"lg\",\n                            onClick: handleSubmit,\n                            children: \"Registrar en Blockchain\"\n                        }, void 0, false, {\n                            fileName: \"/Users/alex/DreamChain/app/registrar-sueno/page.tsx\",\n                            lineNumber: 83,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/alex/DreamChain/app/registrar-sueno/page.tsx\",\n                    lineNumber: 43,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/alex/DreamChain/app/registrar-sueno/page.tsx\",\n            lineNumber: 39,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/alex/DreamChain/app/registrar-sueno/page.tsx\",\n        lineNumber: 38,\n        columnNumber: 5\n    }, this);\n}\n_s(DreamRegistryForm, \"r2OLnTsSHgGpmqhG3CU0YrQPhVY=\");\n_c = DreamRegistryForm;\nvar _c;\n$RefreshReg$(_c, \"DreamRegistryForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9yZWdpc3RyYXItc3Vlbm8vcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDZ0Y7QUFDbEM7QUFFRTtBQUNGO0FBQ2U7QUFDckI7QUFRekIsU0FBU2E7O0lBRXRCLE1BQU0sQ0FBQ0MsV0FBV0MsYUFBYSxHQUFJSCwrQ0FBUUEsQ0FBWTtRQUNyREksWUFBWTtRQUNaQyxtQkFBbUI7UUFDbkJDLE9BQU87SUFDVDtJQUVBLE1BQU1DLGVBQWUsQ0FBQ0M7UUFDcEIsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLEtBQUssRUFBRSxHQUFHRixFQUFFRyxNQUFNO1FBQ2hDUixhQUFhLENBQUNTLE9BQVU7Z0JBQ3RCLEdBQUdBLElBQUk7Z0JBQ1AsQ0FBQ0gsS0FBSyxFQUFFQztZQUNWO0lBQ0Y7SUFFQSxNQUFNRyxlQUFlLENBQUNMO1FBQ3BCQSxFQUFFTSxjQUFjO1FBQ2hCQyxRQUFRQyxHQUFHLENBQUNkLFlBQVksb0VBQW9FO0lBQzlGO0lBRUEscUJBQ0UsOERBQUNlO1FBQUlDLFdBQVU7a0JBQ2IsNEVBQUM5QixxREFBSUE7WUFBQzhCLFdBQVU7OzhCQUNkLDhEQUFDNUIsMkRBQVVBOzhCQUNULDRFQUFDQywyREFBVUE7d0JBQUMyQixXQUFVO2tDQUFpQzs7Ozs7Ozs7Ozs7OEJBRXpELDhEQUFDN0IsNERBQVdBO29CQUFDNkIsV0FBVTs7c0NBQ3JCLDhEQUFDRDs0QkFBSUMsV0FBVTs7OENBQ2IsOERBQUN4Qix1REFBS0E7b0NBQUN5QixTQUFRO29DQUFhRCxXQUFVOztzREFDcEMsOERBQUNwQix1R0FBUUE7NENBQUNvQixXQUFVOzRDQUFvQkUsTUFBTTs7Ozs7O3dDQUFNOzs7Ozs7OzhDQUd0RCw4REFBQzVCLHVEQUFLQTtvQ0FBQzZCLElBQUc7b0NBQWFaLE1BQUs7b0NBQWFDLE9BQU9SLFVBQVVFLFVBQVU7b0NBQUdrQixVQUFVZjtvQ0FBY2dCLGFBQVk7Ozs7Ozs7Ozs7OztzQ0FHN0csOERBQUNOOzRCQUFJQyxXQUFVOzs4Q0FDYiw4REFBQ3hCLHVEQUFLQTtvQ0FBQ3lCLFNBQVE7b0NBQW9CRCxXQUFVOztzREFDM0MsOERBQUN0Qix1R0FBTUE7NENBQUNzQixXQUFVOzRDQUFvQkUsTUFBTTs7Ozs7O3dDQUFNOzs7Ozs7OzhDQUdwRCw4REFBQzVCLHVEQUFLQTtvQ0FBQzZCLElBQUc7b0NBQW9CWixNQUFLO29DQUFvQmMsYUFBWTtvQ0FBK0JiLE9BQU9SLFVBQVVHLGlCQUFpQjtvQ0FBR2lCLFVBQVVmO29DQUFlVyxXQUFVOzs7Ozs7Ozs7Ozs7c0NBRzVLLDhEQUFDRDs0QkFBSUMsV0FBVTs7OENBQ2IsOERBQUN4Qix1REFBS0E7b0NBQUN5QixTQUFRO29DQUFjRCxXQUFVOztzREFDckMsOERBQUN0Qix1R0FBTUE7NENBQUNzQixXQUFVOzRDQUFvQkUsTUFBTTs7Ozs7O3dDQUFNOzs7Ozs7OzhDQUdwRCw4REFBQzVCLHVEQUFLQTtvQ0FBQzZCLElBQUc7b0NBQWVaLE1BQUs7b0NBQWNDLE9BQU9SLFVBQVVJLEtBQUs7b0NBQUdnQixVQUFVZjtvQ0FBY2dCLGFBQVk7Ozs7Ozs7Ozs7OztzQ0FHM0csOERBQUNOOzRCQUFJQyxXQUFVOzs4Q0FDYiw4REFBQ3hCLHVEQUFLQTtvQ0FBQ3lCLFNBQVE7b0NBQWVELFdBQVU7O3NEQUN0Qyw4REFBQ3JCLHVHQUFJQTs0Q0FBQ3FCLFdBQVU7NENBQW9CRSxNQUFNOzs7Ozs7d0NBQU07Ozs7Ozs7OENBR2xELDhEQUFDNUIsdURBQUtBO29DQUFDNkIsSUFBRztvQ0FBZUUsYUFBWTs7Ozs7Ozs7Ozs7O3NDQUV2Qyw4REFBQ047NEJBQUlDLFdBQVU7OzhDQUNiLDhEQUFDeEIsdURBQUtBO29DQUFDeUIsU0FBUTtvQ0FBb0JELFdBQVU7O3NEQUMzQyw4REFBQ3ZCLHVHQUFNQTs0Q0FBQ3VCLFdBQVU7NENBQW9CRSxNQUFNOzs7Ozs7d0NBQU07Ozs7Ozs7OENBR3BELDhEQUFDNUIsdURBQUtBO29DQUFDNkIsSUFBRztvQ0FBb0JHLE1BQUs7b0NBQU9DLFFBQVE7b0NBQUNQLFdBQVU7Ozs7Ozs7Ozs7OztzQ0FHL0QsOERBQUN6Qix5REFBTUE7NEJBQUN5QixXQUFVOzRCQUFzQkUsTUFBSzs0QkFBS00sU0FBU2I7c0NBQWU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT3BGO0dBMUV3Qlo7S0FBQUEiLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbGV4L0RyZWFtQ2hhaW4vYXBwL3JlZ2lzdHJhci1zdWVuby9wYWdlLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCdcbmltcG9ydCB7IENhcmQsIENhcmRDb250ZW50LCBDYXJkSGVhZGVyLCBDYXJkRm9vdGVyIH0gZnJvbSBcIkAvY29tcG9uZW50cy91aS9jYXJkXCJcbmltcG9ydCB7IElucHV0IH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvdWkvaW5wdXRcIlxuaW1wb3J0IHsgVGV4dGFyZWEgfSBmcm9tIFwiLi4vY29tcG9uZW50cy91aS90ZXh0YXJlYVwiXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwiLi4vY29tcG9uZW50cy91aS9idXR0b25cIlxuaW1wb3J0IHsgTGFiZWwgfSBmcm9tIFwiLi4vY29tcG9uZW50cy91aS9sYWJlbFwiXG5pbXBvcnQgeyBVcGxvYWQsIFRhcmdldCwgR2lmdCwgU3BhcmtsZXMgfSBmcm9tICdsdWNpZGUtcmVhY3QnXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5cbmludGVyZmFjZSAgRm9ybURyZWFtIHtcbiAgbmFtZV9zbGVlcDpzdHJpbmcsXG4gIGRyZWFtX2Rlc2NyaXB0aW9uOiBzdHJpbmcsXG4gIGdvYWxzOiBzdHJpbmdcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRHJlYW1SZWdpc3RyeUZvcm0oKSB7XG4gIFxuICBjb25zdCBbZHJlYW1Gb3JtLCBzZXREcmVhbUZvcm1dID0gIHVzZVN0YXRlPEZvcm1EcmVhbT4oe1xuICAgIG5hbWVfc2xlZXA6ICcnLFxuICAgIGRyZWFtX2Rlc2NyaXB0aW9uOiAnJyxcbiAgICBnb2FsczogJycsIC8vIEluaWNpYWxpemEgY29uIHVuIHZhbG9yIHZhY8OtbyBvIHByZWRldGVybWluYWRvXG4gIH0pO1xuICBcbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGU6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQgfCBIVE1MVGV4dEFyZWFFbGVtZW50PikgPT4ge1xuICAgIGNvbnN0IHsgbmFtZSwgdmFsdWUgfSA9IGUudGFyZ2V0O1xuICAgIHNldERyZWFtRm9ybSgocHJldikgPT4gKHtcbiAgICAgIC4uLnByZXYsXG4gICAgICBbbmFtZV06IHZhbHVlLFxuICAgIH0pKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSAoZTogUmVhY3QuRm9ybUV2ZW50KSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnNvbGUubG9nKGRyZWFtRm9ybSk7IC8vIEFxdcOtIHB1ZWRlcyBlbnZpYXIgZWwgZXN0YWRvIGFsIHNlcnZpZG9yIG8gaGFjZXIgbG8gcXVlIG5lY2VzaXRlc1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgbXgtYXV0byBweC00IHB5LThcIj5cbiAgICAgIDxDYXJkIGNsYXNzTmFtZT1cInctZnVsbCBtYXgtdy0yeGwgbXgtYXV0b1wiPlxuICAgICAgICA8Q2FyZEhlYWRlcj5cbiAgICAgICAgICA8Q2FyZEZvb3RlciBjbGFzc05hbWU9XCJ0ZXh0LTN4bCBmb250LWJvbGQgdGV4dC1jZW50ZXJcIj5SZWdpc3RyYXIgdHUgU3Vlw7FvPC9DYXJkRm9vdGVyPlxuICAgICAgICA8L0NhcmRIZWFkZXI+XG4gICAgICAgIDxDYXJkQ29udGVudCBjbGFzc05hbWU9XCJzcGFjZS15LTZcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktMlwiPlxuICAgICAgICAgICAgPExhYmVsIGh0bWxGb3I9XCJkcmVhbS1uYW1lXCIgY2xhc3NOYW1lPVwidGV4dC1sZyBmb250LW1lZGl1bVwiPlxuICAgICAgICAgICAgICA8U3BhcmtsZXMgY2xhc3NOYW1lPVwiaW5saW5lLWJsb2NrIG1yLTJcIiBzaXplPXsyMH0gLz5cbiAgICAgICAgICAgICAgTm9tYnJlIGRlbCBTdWXDsW9cbiAgICAgICAgICAgIDwvTGFiZWw+XG4gICAgICAgICAgICA8SW5wdXQgaWQ9XCJkcmVhbS1uYW1lXCIgbmFtZT1cIm5hbWVfc2xlZXBcIiB2YWx1ZT17ZHJlYW1Gb3JtLm5hbWVfc2xlZXB9ICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfSBwbGFjZWhvbGRlcj1cIkVzY3JpYmUgZWwgbm9tYnJlIGRlIHR1IHN1ZcOxb1wiIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTJcIj5cbiAgICAgICAgICAgIDxMYWJlbCBodG1sRm9yPVwiZHJlYW0tZGVzY3JpcHRpb25cIiBjbGFzc05hbWU9XCJ0ZXh0LWxnIGZvbnQtbWVkaXVtXCI+XG4gICAgICAgICAgICAgIDxUYXJnZXQgY2xhc3NOYW1lPVwiaW5saW5lLWJsb2NrIG1yLTJcIiBzaXplPXsyMH0gLz5cbiAgICAgICAgICAgICAgRGVzY3JpcGNpw7NuXG4gICAgICAgICAgICA8L0xhYmVsPlxuICAgICAgICAgICAgPElucHV0IGlkPVwiZHJlYW0tZGVzY3JpcHRpb25cIiBuYW1lPVwiZHJlYW1fZGVzY3JpcHRpb25cIiBwbGFjZWhvbGRlcj1cIkRlc2NyaWJlIHR1IHN1ZcOxbyBlbiBkZXRhbGxlXCIgdmFsdWU9e2RyZWFtRm9ybS5kcmVhbV9kZXNjcmlwdGlvbn0gIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9ICBjbGFzc05hbWU9XCJtaW4taC1bMTAwcHhdXCIgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICBcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktMlwiPlxuICAgICAgICAgICAgPExhYmVsIGh0bWxGb3I9XCJkcmVhbS1nb2Fsc1wiIGNsYXNzTmFtZT1cInRleHQtbGcgZm9udC1tZWRpdW1cIj5cbiAgICAgICAgICAgICAgPFRhcmdldCBjbGFzc05hbWU9XCJpbmxpbmUtYmxvY2sgbXItMlwiIHNpemU9ezIwfSAvPlxuICAgICAgICAgICAgICBNZXRhc1xuICAgICAgICAgICAgPC9MYWJlbD5cbiAgICAgICAgICAgIDxJbnB1dCBpZD1cImRyZWFtLWdvYWxzXCIgIG5hbWU9XCJkcmVhbV9nb2Fsc1wiIHZhbHVlPXtkcmVhbUZvcm0uZ29hbHN9ICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfSBwbGFjZWhvbGRlcj1cIkRlZmluZSBsYXMgbWV0YXMgZGUgdHUgc3Vlw7FvXCIgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICBcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktMlwiPlxuICAgICAgICAgICAgPExhYmVsIGh0bWxGb3I9XCJkcmVhbS1yZXdhcmRcIiBjbGFzc05hbWU9XCJ0ZXh0LWxnIGZvbnQtbWVkaXVtXCI+XG4gICAgICAgICAgICAgIDxHaWZ0IGNsYXNzTmFtZT1cImlubGluZS1ibG9jayBtci0yXCIgc2l6ZT17MjB9IC8+XG4gICAgICAgICAgICAgIFJlY29tcGVuc2EgT2ZyZWNpZGFcbiAgICAgICAgICAgIDwvTGFiZWw+XG4gICAgICAgICAgICA8SW5wdXQgaWQ9XCJkcmVhbS1yZXdhcmRcIiBwbGFjZWhvbGRlcj1cIkVzcGVjaWZpY2EgbGEgcmVjb21wZW5zYSBwb3IgY3VtcGxpciBlbCBzdWXDsW9cIiAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS0yXCI+XG4gICAgICAgICAgICA8TGFiZWwgaHRtbEZvcj1cImRyZWFtLWF0dGFjaG1lbnRzXCIgY2xhc3NOYW1lPVwidGV4dC1sZyBmb250LW1lZGl1bVwiPlxuICAgICAgICAgICAgICA8VXBsb2FkIGNsYXNzTmFtZT1cImlubGluZS1ibG9jayBtci0yXCIgc2l6ZT17MjB9IC8+XG4gICAgICAgICAgICAgIEFkanVudGFyIEltw6FnZW5lcyBvIERvY3VtZW50b3MgKE9wY2lvbmFsKVxuICAgICAgICAgICAgPC9MYWJlbD5cbiAgICAgICAgICAgIDxJbnB1dCBpZD1cImRyZWFtLWF0dGFjaG1lbnRzXCIgdHlwZT1cImZpbGVcIiBtdWx0aXBsZSBjbGFzc05hbWU9XCJjdXJzb3ItcG9pbnRlclwiIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgXG4gICAgICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9XCJ3LWZ1bGwgdGV4dC1sZyBweS02XCIgc2l6ZT1cImxnXCIgb25DbGljaz17aGFuZGxlU3VibWl0fSA+XG4gICAgICAgICAgICBSZWdpc3RyYXIgZW4gQmxvY2tjaGFpblxuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICA8L0NhcmRDb250ZW50PlxuICAgICAgPC9DYXJkPlxuICAgIDwvZGl2PlxuICApXG59XG5cbiJdLCJuYW1lcyI6WyJDYXJkIiwiQ2FyZENvbnRlbnQiLCJDYXJkSGVhZGVyIiwiQ2FyZEZvb3RlciIsIklucHV0IiwiQnV0dG9uIiwiTGFiZWwiLCJVcGxvYWQiLCJUYXJnZXQiLCJHaWZ0IiwiU3BhcmtsZXMiLCJSZWFjdCIsInVzZVN0YXRlIiwiRHJlYW1SZWdpc3RyeUZvcm0iLCJkcmVhbUZvcm0iLCJzZXREcmVhbUZvcm0iLCJuYW1lX3NsZWVwIiwiZHJlYW1fZGVzY3JpcHRpb24iLCJnb2FscyIsImhhbmRsZUNoYW5nZSIsImUiLCJuYW1lIiwidmFsdWUiLCJ0YXJnZXQiLCJwcmV2IiwiaGFuZGxlU3VibWl0IiwicHJldmVudERlZmF1bHQiLCJjb25zb2xlIiwibG9nIiwiZGl2IiwiY2xhc3NOYW1lIiwiaHRtbEZvciIsInNpemUiLCJpZCIsIm9uQ2hhbmdlIiwicGxhY2Vob2xkZXIiLCJ0eXBlIiwibXVsdGlwbGUiLCJvbkNsaWNrIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/registrar-sueno/page.tsx\n"));

/***/ })

});