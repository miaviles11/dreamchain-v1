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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ DreamRegistryForm)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _components_ui_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/ui/card */ \"(app-pages-browser)/./app/components/ui/card.tsx\");\n/* harmony import */ var _components_ui_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/ui/input */ \"(app-pages-browser)/./app/components/ui/input.tsx\");\n/* harmony import */ var _components_ui_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/ui/button */ \"(app-pages-browser)/./app/components/ui/button.tsx\");\n/* harmony import */ var _components_ui_label__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/ui/label */ \"(app-pages-browser)/./app/components/ui/label.tsx\");\n/* harmony import */ var _barrel_optimize_names_Gift_Sparkles_Target_Upload_lucide_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! __barrel_optimize__?names=Gift,Sparkles,Target,Upload!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/sparkles.js\");\n/* harmony import */ var _barrel_optimize_names_Gift_Sparkles_Target_Upload_lucide_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! __barrel_optimize__?names=Gift,Sparkles,Target,Upload!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/target.js\");\n/* harmony import */ var _barrel_optimize_names_Gift_Sparkles_Target_Upload_lucide_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! __barrel_optimize__?names=Gift,Sparkles,Target,Upload!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/gift.js\");\n/* harmony import */ var _barrel_optimize_names_Gift_Sparkles_Target_Upload_lucide_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! __barrel_optimize__?names=Gift,Sparkles,Target,Upload!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/upload.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction DreamRegistryForm() {\n    _s();\n    const [dreamForm, setDreamForm] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)({\n        name_sleep: '',\n        dream_description: '',\n        goals: '',\n        goals: ''\n    });\n    const handleChange = (e)=>{\n        const { name, value } = e.target;\n        setDreamForm((prev)=>({\n                ...prev,\n                [name]: value\n            }));\n    };\n    const handleSubmit = (e)=>{\n        e.preventDefault();\n        console.log(dreamForm); // Aquí puedes enviar el estado al servidor o hacer lo que necesites\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"container mx-auto px-4 py-8\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_1__.Card, {\n            className: \"w-full max-w-2xl mx-auto\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_1__.CardHeader, {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_1__.CardFooter, {\n                        className: \"text-3xl font-bold text-center\",\n                        children: \"Registrar tu Sue\\xf1o\"\n                    }, void 0, false, {\n                        fileName: \"/Users/alex/DreamChain/app/registrar-sueno/page.tsx\",\n                        lineNumber: 43,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/alex/DreamChain/app/registrar-sueno/page.tsx\",\n                    lineNumber: 42,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_1__.CardContent, {\n                    className: \"space-y-6\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"space-y-2\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_label__WEBPACK_IMPORTED_MODULE_4__.Label, {\n                                    htmlFor: \"dream-name\",\n                                    className: \"text-lg font-medium\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Gift_Sparkles_Target_Upload_lucide_react__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                            className: \"inline-block mr-2\",\n                                            size: 20\n                                        }, void 0, false, {\n                                            fileName: \"/Users/alex/DreamChain/app/registrar-sueno/page.tsx\",\n                                            lineNumber: 48,\n                                            columnNumber: 15\n                                        }, this),\n                                        \"Nombre del Sue\\xf1o\"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/alex/DreamChain/app/registrar-sueno/page.tsx\",\n                                    lineNumber: 47,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_input__WEBPACK_IMPORTED_MODULE_2__.Input, {\n                                    id: \"dream-name\",\n                                    name: \"name_sleep\",\n                                    value: dreamForm.name_sleep,\n                                    onChange: handleChange,\n                                    placeholder: \"Escribe el nombre de tu sue\\xf1o\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/alex/DreamChain/app/registrar-sueno/page.tsx\",\n                                    lineNumber: 51,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/alex/DreamChain/app/registrar-sueno/page.tsx\",\n                            lineNumber: 46,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"space-y-2\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_label__WEBPACK_IMPORTED_MODULE_4__.Label, {\n                                    htmlFor: \"dream-description\",\n                                    className: \"text-lg font-medium\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Gift_Sparkles_Target_Upload_lucide_react__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                                            className: \"inline-block mr-2\",\n                                            size: 20\n                                        }, void 0, false, {\n                                            fileName: \"/Users/alex/DreamChain/app/registrar-sueno/page.tsx\",\n                                            lineNumber: 56,\n                                            columnNumber: 15\n                                        }, this),\n                                        \"Descripci\\xf3n\"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/alex/DreamChain/app/registrar-sueno/page.tsx\",\n                                    lineNumber: 55,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_input__WEBPACK_IMPORTED_MODULE_2__.Input, {\n                                    id: \"dream-description\",\n                                    name: \"dream_description\",\n                                    placeholder: \"Describe tu sue\\xf1o en detalle\",\n                                    value: dreamForm.dream_description,\n                                    onChange: handleChange,\n                                    className: \"min-h-[100px]\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/alex/DreamChain/app/registrar-sueno/page.tsx\",\n                                    lineNumber: 59,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/alex/DreamChain/app/registrar-sueno/page.tsx\",\n                            lineNumber: 54,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"space-y-2\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_label__WEBPACK_IMPORTED_MODULE_4__.Label, {\n                                    htmlFor: \"dream-goals\",\n                                    className: \"text-lg font-medium\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Gift_Sparkles_Target_Upload_lucide_react__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                                            className: \"inline-block mr-2\",\n                                            size: 20\n                                        }, void 0, false, {\n                                            fileName: \"/Users/alex/DreamChain/app/registrar-sueno/page.tsx\",\n                                            lineNumber: 64,\n                                            columnNumber: 15\n                                        }, this),\n                                        \"Metas\"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/alex/DreamChain/app/registrar-sueno/page.tsx\",\n                                    lineNumber: 63,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_input__WEBPACK_IMPORTED_MODULE_2__.Input, {\n                                    id: \"dream-goals\",\n                                    name: \"dream_goals\",\n                                    value: dreamForm.goals,\n                                    onChange: handleChange,\n                                    placeholder: \"Define las metas de tu sue\\xf1o\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/alex/DreamChain/app/registrar-sueno/page.tsx\",\n                                    lineNumber: 67,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/alex/DreamChain/app/registrar-sueno/page.tsx\",\n                            lineNumber: 62,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"space-y-2\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_label__WEBPACK_IMPORTED_MODULE_4__.Label, {\n                                    htmlFor: \"dream-reward\",\n                                    className: \"text-lg font-medium\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Gift_Sparkles_Target_Upload_lucide_react__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                                            className: \"inline-block mr-2\",\n                                            size: 20\n                                        }, void 0, false, {\n                                            fileName: \"/Users/alex/DreamChain/app/registrar-sueno/page.tsx\",\n                                            lineNumber: 72,\n                                            columnNumber: 15\n                                        }, this),\n                                        \"Recompensa Ofrecida\"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/alex/DreamChain/app/registrar-sueno/page.tsx\",\n                                    lineNumber: 71,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_input__WEBPACK_IMPORTED_MODULE_2__.Input, {\n                                    id: \"dream-reward\",\n                                    name: \"dream_reward\",\n                                    value: dreamForm.goals,\n                                    onChange: handleChange,\n                                    placeholder: \"Especifica la recompensa por cumplir el sue\\xf1o\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/alex/DreamChain/app/registrar-sueno/page.tsx\",\n                                    lineNumber: 75,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/alex/DreamChain/app/registrar-sueno/page.tsx\",\n                            lineNumber: 70,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"space-y-2\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_label__WEBPACK_IMPORTED_MODULE_4__.Label, {\n                                    htmlFor: \"dream-attachments\",\n                                    className: \"text-lg font-medium\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Gift_Sparkles_Target_Upload_lucide_react__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                                            className: \"inline-block mr-2\",\n                                            size: 20\n                                        }, void 0, false, {\n                                            fileName: \"/Users/alex/DreamChain/app/registrar-sueno/page.tsx\",\n                                            lineNumber: 79,\n                                            columnNumber: 15\n                                        }, this),\n                                        \"Adjuntar Im\\xe1genes o Documentos (Opcional)\"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/alex/DreamChain/app/registrar-sueno/page.tsx\",\n                                    lineNumber: 78,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_input__WEBPACK_IMPORTED_MODULE_2__.Input, {\n                                    id: \"dream-attachments\",\n                                    type: \"file\",\n                                    multiple: true,\n                                    className: \"cursor-pointer\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/alex/DreamChain/app/registrar-sueno/page.tsx\",\n                                    lineNumber: 82,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/alex/DreamChain/app/registrar-sueno/page.tsx\",\n                            lineNumber: 77,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_button__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                            className: \"w-full text-lg py-6\",\n                            size: \"lg\",\n                            onClick: handleSubmit,\n                            children: \"Registrar en Blockchain\"\n                        }, void 0, false, {\n                            fileName: \"/Users/alex/DreamChain/app/registrar-sueno/page.tsx\",\n                            lineNumber: 85,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/alex/DreamChain/app/registrar-sueno/page.tsx\",\n                    lineNumber: 45,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/alex/DreamChain/app/registrar-sueno/page.tsx\",\n            lineNumber: 41,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/alex/DreamChain/app/registrar-sueno/page.tsx\",\n        lineNumber: 40,\n        columnNumber: 5\n    }, this);\n}\n_s(DreamRegistryForm, \"kqccy7FnvVpXZX9jQZ6W+gypFRw=\");\n_c = DreamRegistryForm;\nvar _c;\n$RefreshReg$(_c, \"DreamRegistryForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9yZWdpc3RyYXItc3Vlbm8vcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDZ0Y7QUFDbEM7QUFFRTtBQUNGO0FBQ2U7QUFDckI7QUFTekIsU0FBU2E7O0lBRXRCLE1BQU0sQ0FBQ0MsV0FBV0MsYUFBYSxHQUFJSCwrQ0FBUUEsQ0FBWTtRQUNyREksWUFBWTtRQUNaQyxtQkFBbUI7UUFDbkJDLE9BQU87UUFDUEEsT0FBTztJQUNUO0lBRUEsTUFBTUMsZUFBZSxDQUFDQztRQUNwQixNQUFNLEVBQUVDLElBQUksRUFBRUMsS0FBSyxFQUFFLEdBQUdGLEVBQUVHLE1BQU07UUFDaENSLGFBQWEsQ0FBQ1MsT0FBVTtnQkFDdEIsR0FBR0EsSUFBSTtnQkFDUCxDQUFDSCxLQUFLLEVBQUVDO1lBQ1Y7SUFDRjtJQUVBLE1BQU1HLGVBQWUsQ0FBQ0w7UUFDcEJBLEVBQUVNLGNBQWM7UUFDaEJDLFFBQVFDLEdBQUcsQ0FBQ2QsWUFBWSxvRUFBb0U7SUFDOUY7SUFFQSxxQkFDRSw4REFBQ2U7UUFBSUMsV0FBVTtrQkFDYiw0RUFBQzlCLHFEQUFJQTtZQUFDOEIsV0FBVTs7OEJBQ2QsOERBQUM1QiwyREFBVUE7OEJBQ1QsNEVBQUNDLDJEQUFVQTt3QkFBQzJCLFdBQVU7a0NBQWlDOzs7Ozs7Ozs7Ozs4QkFFekQsOERBQUM3Qiw0REFBV0E7b0JBQUM2QixXQUFVOztzQ0FDckIsOERBQUNEOzRCQUFJQyxXQUFVOzs4Q0FDYiw4REFBQ3hCLHVEQUFLQTtvQ0FBQ3lCLFNBQVE7b0NBQWFELFdBQVU7O3NEQUNwQyw4REFBQ3BCLHVHQUFRQTs0Q0FBQ29CLFdBQVU7NENBQW9CRSxNQUFNOzs7Ozs7d0NBQU07Ozs7Ozs7OENBR3RELDhEQUFDNUIsdURBQUtBO29DQUFDNkIsSUFBRztvQ0FBYVosTUFBSztvQ0FBYUMsT0FBT1IsVUFBVUUsVUFBVTtvQ0FBR2tCLFVBQVVmO29DQUFjZ0IsYUFBWTs7Ozs7Ozs7Ozs7O3NDQUc3Ryw4REFBQ047NEJBQUlDLFdBQVU7OzhDQUNiLDhEQUFDeEIsdURBQUtBO29DQUFDeUIsU0FBUTtvQ0FBb0JELFdBQVU7O3NEQUMzQyw4REFBQ3RCLHVHQUFNQTs0Q0FBQ3NCLFdBQVU7NENBQW9CRSxNQUFNOzs7Ozs7d0NBQU07Ozs7Ozs7OENBR3BELDhEQUFDNUIsdURBQUtBO29DQUFDNkIsSUFBRztvQ0FBb0JaLE1BQUs7b0NBQW9CYyxhQUFZO29DQUErQmIsT0FBT1IsVUFBVUcsaUJBQWlCO29DQUFHaUIsVUFBVWY7b0NBQWVXLFdBQVU7Ozs7Ozs7Ozs7OztzQ0FHNUssOERBQUNEOzRCQUFJQyxXQUFVOzs4Q0FDYiw4REFBQ3hCLHVEQUFLQTtvQ0FBQ3lCLFNBQVE7b0NBQWNELFdBQVU7O3NEQUNyQyw4REFBQ3RCLHVHQUFNQTs0Q0FBQ3NCLFdBQVU7NENBQW9CRSxNQUFNOzs7Ozs7d0NBQU07Ozs7Ozs7OENBR3BELDhEQUFDNUIsdURBQUtBO29DQUFDNkIsSUFBRztvQ0FBZVosTUFBSztvQ0FBY0MsT0FBT1IsVUFBVUksS0FBSztvQ0FBR2dCLFVBQVVmO29DQUFjZ0IsYUFBWTs7Ozs7Ozs7Ozs7O3NDQUczRyw4REFBQ047NEJBQUlDLFdBQVU7OzhDQUNiLDhEQUFDeEIsdURBQUtBO29DQUFDeUIsU0FBUTtvQ0FBZUQsV0FBVTs7c0RBQ3RDLDhEQUFDckIsdUdBQUlBOzRDQUFDcUIsV0FBVTs0Q0FBb0JFLE1BQU07Ozs7Ozt3Q0FBTTs7Ozs7Ozs4Q0FHbEQsOERBQUM1Qix1REFBS0E7b0NBQUM2QixJQUFHO29DQUFlWixNQUFLO29DQUFnQkMsT0FBT1IsVUFBVUksS0FBSztvQ0FBR2dCLFVBQVVmO29DQUFjZ0IsYUFBWTs7Ozs7Ozs7Ozs7O3NDQUU3Ryw4REFBQ047NEJBQUlDLFdBQVU7OzhDQUNiLDhEQUFDeEIsdURBQUtBO29DQUFDeUIsU0FBUTtvQ0FBb0JELFdBQVU7O3NEQUMzQyw4REFBQ3ZCLHVHQUFNQTs0Q0FBQ3VCLFdBQVU7NENBQW9CRSxNQUFNOzs7Ozs7d0NBQU07Ozs7Ozs7OENBR3BELDhEQUFDNUIsdURBQUtBO29DQUFDNkIsSUFBRztvQ0FBb0JHLE1BQUs7b0NBQU9DLFFBQVE7b0NBQUNQLFdBQVU7Ozs7Ozs7Ozs7OztzQ0FHL0QsOERBQUN6Qix5REFBTUE7NEJBQUN5QixXQUFVOzRCQUFzQkUsTUFBSzs0QkFBS00sU0FBU2I7c0NBQWU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT3BGO0dBM0V3Qlo7S0FBQUEiLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbGV4L0RyZWFtQ2hhaW4vYXBwL3JlZ2lzdHJhci1zdWVuby9wYWdlLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCdcbmltcG9ydCB7IENhcmQsIENhcmRDb250ZW50LCBDYXJkSGVhZGVyLCBDYXJkRm9vdGVyIH0gZnJvbSBcIkAvY29tcG9uZW50cy91aS9jYXJkXCJcbmltcG9ydCB7IElucHV0IH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvdWkvaW5wdXRcIlxuaW1wb3J0IHsgVGV4dGFyZWEgfSBmcm9tIFwiLi4vY29tcG9uZW50cy91aS90ZXh0YXJlYVwiXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwiLi4vY29tcG9uZW50cy91aS9idXR0b25cIlxuaW1wb3J0IHsgTGFiZWwgfSBmcm9tIFwiLi4vY29tcG9uZW50cy91aS9sYWJlbFwiXG5pbXBvcnQgeyBVcGxvYWQsIFRhcmdldCwgR2lmdCwgU3BhcmtsZXMgfSBmcm9tICdsdWNpZGUtcmVhY3QnXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5cbmludGVyZmFjZSAgRm9ybURyZWFtIHtcbiAgbmFtZV9zbGVlcDpzdHJpbmcsXG4gIGRyZWFtX2Rlc2NyaXB0aW9uOiBzdHJpbmcsXG4gIGdvYWxzOiBzdHJpbmcsXG4gIGRyZWFtX3Jld2FyZDogc3RyaW5nXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERyZWFtUmVnaXN0cnlGb3JtKCkge1xuICBcbiAgY29uc3QgW2RyZWFtRm9ybSwgc2V0RHJlYW1Gb3JtXSA9ICB1c2VTdGF0ZTxGb3JtRHJlYW0+KHtcbiAgICBuYW1lX3NsZWVwOiAnJyxcbiAgICBkcmVhbV9kZXNjcmlwdGlvbjogJycsXG4gICAgZ29hbHM6ICcnLCBcbiAgICBnb2FsczogJycsIFxuICB9KTtcbiAgXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChlOiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50IHwgSFRNTFRleHRBcmVhRWxlbWVudD4pID0+IHtcbiAgICBjb25zdCB7IG5hbWUsIHZhbHVlIH0gPSBlLnRhcmdldDtcbiAgICBzZXREcmVhbUZvcm0oKHByZXYpID0+ICh7XG4gICAgICAuLi5wcmV2LFxuICAgICAgW25hbWVdOiB2YWx1ZSxcbiAgICB9KSk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gKGU6IFJlYWN0LkZvcm1FdmVudCkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zb2xlLmxvZyhkcmVhbUZvcm0pOyAvLyBBcXXDrSBwdWVkZXMgZW52aWFyIGVsIGVzdGFkbyBhbCBzZXJ2aWRvciBvIGhhY2VyIGxvIHF1ZSBuZWNlc2l0ZXNcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIG14LWF1dG8gcHgtNCBweS04XCI+XG4gICAgICA8Q2FyZCBjbGFzc05hbWU9XCJ3LWZ1bGwgbWF4LXctMnhsIG14LWF1dG9cIj5cbiAgICAgICAgPENhcmRIZWFkZXI+XG4gICAgICAgICAgPENhcmRGb290ZXIgY2xhc3NOYW1lPVwidGV4dC0zeGwgZm9udC1ib2xkIHRleHQtY2VudGVyXCI+UmVnaXN0cmFyIHR1IFN1ZcOxbzwvQ2FyZEZvb3Rlcj5cbiAgICAgICAgPC9DYXJkSGVhZGVyPlxuICAgICAgICA8Q2FyZENvbnRlbnQgY2xhc3NOYW1lPVwic3BhY2UteS02XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTJcIj5cbiAgICAgICAgICAgIDxMYWJlbCBodG1sRm9yPVwiZHJlYW0tbmFtZVwiIGNsYXNzTmFtZT1cInRleHQtbGcgZm9udC1tZWRpdW1cIj5cbiAgICAgICAgICAgICAgPFNwYXJrbGVzIGNsYXNzTmFtZT1cImlubGluZS1ibG9jayBtci0yXCIgc2l6ZT17MjB9IC8+XG4gICAgICAgICAgICAgIE5vbWJyZSBkZWwgU3Vlw7FvXG4gICAgICAgICAgICA8L0xhYmVsPlxuICAgICAgICAgICAgPElucHV0IGlkPVwiZHJlYW0tbmFtZVwiIG5hbWU9XCJuYW1lX3NsZWVwXCIgdmFsdWU9e2RyZWFtRm9ybS5uYW1lX3NsZWVwfSAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0gcGxhY2Vob2xkZXI9XCJFc2NyaWJlIGVsIG5vbWJyZSBkZSB0dSBzdWXDsW9cIiAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS0yXCI+XG4gICAgICAgICAgICA8TGFiZWwgaHRtbEZvcj1cImRyZWFtLWRlc2NyaXB0aW9uXCIgY2xhc3NOYW1lPVwidGV4dC1sZyBmb250LW1lZGl1bVwiPlxuICAgICAgICAgICAgICA8VGFyZ2V0IGNsYXNzTmFtZT1cImlubGluZS1ibG9jayBtci0yXCIgc2l6ZT17MjB9IC8+XG4gICAgICAgICAgICAgIERlc2NyaXBjacOzblxuICAgICAgICAgICAgPC9MYWJlbD5cbiAgICAgICAgICAgIDxJbnB1dCBpZD1cImRyZWFtLWRlc2NyaXB0aW9uXCIgbmFtZT1cImRyZWFtX2Rlc2NyaXB0aW9uXCIgcGxhY2Vob2xkZXI9XCJEZXNjcmliZSB0dSBzdWXDsW8gZW4gZGV0YWxsZVwiIHZhbHVlPXtkcmVhbUZvcm0uZHJlYW1fZGVzY3JpcHRpb259ICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfSAgY2xhc3NOYW1lPVwibWluLWgtWzEwMHB4XVwiIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTJcIj5cbiAgICAgICAgICAgIDxMYWJlbCBodG1sRm9yPVwiZHJlYW0tZ29hbHNcIiBjbGFzc05hbWU9XCJ0ZXh0LWxnIGZvbnQtbWVkaXVtXCI+XG4gICAgICAgICAgICAgIDxUYXJnZXQgY2xhc3NOYW1lPVwiaW5saW5lLWJsb2NrIG1yLTJcIiBzaXplPXsyMH0gLz5cbiAgICAgICAgICAgICAgTWV0YXNcbiAgICAgICAgICAgIDwvTGFiZWw+XG4gICAgICAgICAgICA8SW5wdXQgaWQ9XCJkcmVhbS1nb2Fsc1wiICBuYW1lPVwiZHJlYW1fZ29hbHNcIiB2YWx1ZT17ZHJlYW1Gb3JtLmdvYWxzfSAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0gcGxhY2Vob2xkZXI9XCJEZWZpbmUgbGFzIG1ldGFzIGRlIHR1IHN1ZcOxb1wiIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTJcIj5cbiAgICAgICAgICAgIDxMYWJlbCBodG1sRm9yPVwiZHJlYW0tcmV3YXJkXCIgY2xhc3NOYW1lPVwidGV4dC1sZyBmb250LW1lZGl1bVwiPlxuICAgICAgICAgICAgICA8R2lmdCBjbGFzc05hbWU9XCJpbmxpbmUtYmxvY2sgbXItMlwiIHNpemU9ezIwfSAvPlxuICAgICAgICAgICAgICBSZWNvbXBlbnNhIE9mcmVjaWRhXG4gICAgICAgICAgICA8L0xhYmVsPlxuICAgICAgICAgICAgPElucHV0IGlkPVwiZHJlYW0tcmV3YXJkXCIgbmFtZT1cImRyZWFtX3Jld2FyZFwiICB2YWx1ZT17ZHJlYW1Gb3JtLmdvYWxzfSAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0gcGxhY2Vob2xkZXI9XCJFc3BlY2lmaWNhIGxhIHJlY29tcGVuc2EgcG9yIGN1bXBsaXIgZWwgc3Vlw7FvXCIgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktMlwiPlxuICAgICAgICAgICAgPExhYmVsIGh0bWxGb3I9XCJkcmVhbS1hdHRhY2htZW50c1wiIGNsYXNzTmFtZT1cInRleHQtbGcgZm9udC1tZWRpdW1cIj5cbiAgICAgICAgICAgICAgPFVwbG9hZCBjbGFzc05hbWU9XCJpbmxpbmUtYmxvY2sgbXItMlwiIHNpemU9ezIwfSAvPlxuICAgICAgICAgICAgICBBZGp1bnRhciBJbcOhZ2VuZXMgbyBEb2N1bWVudG9zIChPcGNpb25hbClcbiAgICAgICAgICAgIDwvTGFiZWw+XG4gICAgICAgICAgICA8SW5wdXQgaWQ9XCJkcmVhbS1hdHRhY2htZW50c1wiIHR5cGU9XCJmaWxlXCIgbXVsdGlwbGUgY2xhc3NOYW1lPVwiY3Vyc29yLXBvaW50ZXJcIiAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIFxuICAgICAgICAgIDxCdXR0b24gY2xhc3NOYW1lPVwidy1mdWxsIHRleHQtbGcgcHktNlwiIHNpemU9XCJsZ1wiIG9uQ2xpY2s9e2hhbmRsZVN1Ym1pdH0gPlxuICAgICAgICAgICAgUmVnaXN0cmFyIGVuIEJsb2NrY2hhaW5cbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgPC9DYXJkQ29udGVudD5cbiAgICAgIDwvQ2FyZD5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG4iXSwibmFtZXMiOlsiQ2FyZCIsIkNhcmRDb250ZW50IiwiQ2FyZEhlYWRlciIsIkNhcmRGb290ZXIiLCJJbnB1dCIsIkJ1dHRvbiIsIkxhYmVsIiwiVXBsb2FkIiwiVGFyZ2V0IiwiR2lmdCIsIlNwYXJrbGVzIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsIkRyZWFtUmVnaXN0cnlGb3JtIiwiZHJlYW1Gb3JtIiwic2V0RHJlYW1Gb3JtIiwibmFtZV9zbGVlcCIsImRyZWFtX2Rlc2NyaXB0aW9uIiwiZ29hbHMiLCJoYW5kbGVDaGFuZ2UiLCJlIiwibmFtZSIsInZhbHVlIiwidGFyZ2V0IiwicHJldiIsImhhbmRsZVN1Ym1pdCIsInByZXZlbnREZWZhdWx0IiwiY29uc29sZSIsImxvZyIsImRpdiIsImNsYXNzTmFtZSIsImh0bWxGb3IiLCJzaXplIiwiaWQiLCJvbkNoYW5nZSIsInBsYWNlaG9sZGVyIiwidHlwZSIsIm11bHRpcGxlIiwib25DbGljayJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/registrar-sueno/page.tsx\n"));

/***/ })

});