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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ DreamRegistryForm)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _components_ui_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/ui/card */ \"(app-pages-browser)/./app/components/ui/card.tsx\");\n/* harmony import */ var _components_ui_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/ui/input */ \"(app-pages-browser)/./app/components/ui/input.tsx\");\n/* harmony import */ var _components_ui_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/ui/button */ \"(app-pages-browser)/./app/components/ui/button.tsx\");\n/* harmony import */ var _components_ui_label__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/ui/label */ \"(app-pages-browser)/./app/components/ui/label.tsx\");\n/* harmony import */ var _barrel_optimize_names_Gift_Sparkles_Target_Upload_lucide_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! __barrel_optimize__?names=Gift,Sparkles,Target,Upload!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/sparkles.js\");\n/* harmony import */ var _barrel_optimize_names_Gift_Sparkles_Target_Upload_lucide_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! __barrel_optimize__?names=Gift,Sparkles,Target,Upload!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/target.js\");\n/* harmony import */ var _barrel_optimize_names_Gift_Sparkles_Target_Upload_lucide_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! __barrel_optimize__?names=Gift,Sparkles,Target,Upload!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/gift.js\");\n/* harmony import */ var _barrel_optimize_names_Gift_Sparkles_Target_Upload_lucide_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! __barrel_optimize__?names=Gift,Sparkles,Target,Upload!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/upload.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction DreamRegistryForm() {\n    _s();\n    const [dreamForm, setDreamForm] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)({\n        name_sleep: '',\n        dream_description: '',\n        dream_goals: '',\n        dream_reward_offered: ''\n    });\n    const handleChange = (e)=>{\n        const { name, value } = e.target;\n        setDreamForm((prev)=>({\n                ...prev,\n                [name]: value\n            }));\n    };\n    const handleSubmit = (e)=>{\n        e.preventDefault();\n        localStorage.setItem(\"form-dream\", JSON.stringify(dreamForm));\n        localStorage.getItem(\"\");\n        console.log(dreamForm); // Aquí puedes enviar el estado al servidor o hacer lo que necesites\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"container mx-auto px-4 py-8\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_1__.Card, {\n            className: \"w-full max-w-2xl mx-auto\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_1__.CardHeader, {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_1__.CardFooter, {\n                        className: \"text-3xl font-bold text-center\",\n                        children: \"Registrar tu Sue\\xf1o\"\n                    }, void 0, false, {\n                        fileName: \"/Users/alex/DreamChain/app/registrar-sueno/page.tsx\",\n                        lineNumber: 45,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/alex/DreamChain/app/registrar-sueno/page.tsx\",\n                    lineNumber: 44,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_1__.CardContent, {\n                    className: \"space-y-6\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"space-y-2\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_label__WEBPACK_IMPORTED_MODULE_4__.Label, {\n                                    htmlFor: \"dream-name\",\n                                    className: \"text-lg font-medium\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Gift_Sparkles_Target_Upload_lucide_react__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                            className: \"inline-block mr-2\",\n                                            size: 20\n                                        }, void 0, false, {\n                                            fileName: \"/Users/alex/DreamChain/app/registrar-sueno/page.tsx\",\n                                            lineNumber: 50,\n                                            columnNumber: 15\n                                        }, this),\n                                        \"Nombre del Sue\\xf1o\"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/alex/DreamChain/app/registrar-sueno/page.tsx\",\n                                    lineNumber: 49,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_input__WEBPACK_IMPORTED_MODULE_2__.Input, {\n                                    id: \"dream-name\",\n                                    name: \"name_sleep\",\n                                    value: dreamForm.name_sleep,\n                                    onChange: handleChange,\n                                    placeholder: \"Escribe el nombre de tu sue\\xf1o\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/alex/DreamChain/app/registrar-sueno/page.tsx\",\n                                    lineNumber: 53,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/alex/DreamChain/app/registrar-sueno/page.tsx\",\n                            lineNumber: 48,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"space-y-2\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_label__WEBPACK_IMPORTED_MODULE_4__.Label, {\n                                    htmlFor: \"dream-description\",\n                                    className: \"text-lg font-medium\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Gift_Sparkles_Target_Upload_lucide_react__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                                            className: \"inline-block mr-2\",\n                                            size: 20\n                                        }, void 0, false, {\n                                            fileName: \"/Users/alex/DreamChain/app/registrar-sueno/page.tsx\",\n                                            lineNumber: 58,\n                                            columnNumber: 15\n                                        }, this),\n                                        \"Descripci\\xf3n\"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/alex/DreamChain/app/registrar-sueno/page.tsx\",\n                                    lineNumber: 57,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_input__WEBPACK_IMPORTED_MODULE_2__.Input, {\n                                    id: \"dream-description\",\n                                    name: \"dream_description\",\n                                    placeholder: \"Describe tu sue\\xf1o en detalle\",\n                                    value: dreamForm.dream_description,\n                                    onChange: handleChange,\n                                    className: \"min-h-[100px]\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/alex/DreamChain/app/registrar-sueno/page.tsx\",\n                                    lineNumber: 61,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/alex/DreamChain/app/registrar-sueno/page.tsx\",\n                            lineNumber: 56,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"space-y-2\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_label__WEBPACK_IMPORTED_MODULE_4__.Label, {\n                                    htmlFor: \"dream-goals\",\n                                    className: \"text-lg font-medium\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Gift_Sparkles_Target_Upload_lucide_react__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                                            className: \"inline-block mr-2\",\n                                            size: 20\n                                        }, void 0, false, {\n                                            fileName: \"/Users/alex/DreamChain/app/registrar-sueno/page.tsx\",\n                                            lineNumber: 66,\n                                            columnNumber: 15\n                                        }, this),\n                                        \"Metas\"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/alex/DreamChain/app/registrar-sueno/page.tsx\",\n                                    lineNumber: 65,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_input__WEBPACK_IMPORTED_MODULE_2__.Input, {\n                                    id: \"dream-goals\",\n                                    name: \"dream_goals\",\n                                    value: dreamForm.dream_goals,\n                                    onChange: handleChange,\n                                    placeholder: \"Define las metas de tu sue\\xf1o\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/alex/DreamChain/app/registrar-sueno/page.tsx\",\n                                    lineNumber: 69,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/alex/DreamChain/app/registrar-sueno/page.tsx\",\n                            lineNumber: 64,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"space-y-2\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_label__WEBPACK_IMPORTED_MODULE_4__.Label, {\n                                    htmlFor: \"dream-reward\",\n                                    className: \"text-lg font-medium\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Gift_Sparkles_Target_Upload_lucide_react__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                                            className: \"inline-block mr-2\",\n                                            size: 20\n                                        }, void 0, false, {\n                                            fileName: \"/Users/alex/DreamChain/app/registrar-sueno/page.tsx\",\n                                            lineNumber: 74,\n                                            columnNumber: 15\n                                        }, this),\n                                        \"Recompensa Ofrecida\"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/alex/DreamChain/app/registrar-sueno/page.tsx\",\n                                    lineNumber: 73,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_input__WEBPACK_IMPORTED_MODULE_2__.Input, {\n                                    id: \"dream-reward\",\n                                    name: \"dream_reward_offered\",\n                                    value: dreamForm.dream_reward_offered,\n                                    onChange: handleChange,\n                                    placeholder: \"Especifica la recompensa por cumplir el sue\\xf1o\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/alex/DreamChain/app/registrar-sueno/page.tsx\",\n                                    lineNumber: 77,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/alex/DreamChain/app/registrar-sueno/page.tsx\",\n                            lineNumber: 72,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"space-y-2\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_label__WEBPACK_IMPORTED_MODULE_4__.Label, {\n                                    htmlFor: \"dream-attachments\",\n                                    className: \"text-lg font-medium\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Gift_Sparkles_Target_Upload_lucide_react__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                                            className: \"inline-block mr-2\",\n                                            size: 20\n                                        }, void 0, false, {\n                                            fileName: \"/Users/alex/DreamChain/app/registrar-sueno/page.tsx\",\n                                            lineNumber: 81,\n                                            columnNumber: 15\n                                        }, this),\n                                        \"Adjuntar Im\\xe1genes o Documentos (Opcional)\"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/alex/DreamChain/app/registrar-sueno/page.tsx\",\n                                    lineNumber: 80,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_input__WEBPACK_IMPORTED_MODULE_2__.Input, {\n                                    id: \"dream-attachments\",\n                                    type: \"file\",\n                                    multiple: true,\n                                    className: \"cursor-pointer\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/alex/DreamChain/app/registrar-sueno/page.tsx\",\n                                    lineNumber: 84,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/alex/DreamChain/app/registrar-sueno/page.tsx\",\n                            lineNumber: 79,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_button__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                            className: \"w-full text-lg py-6\",\n                            size: \"lg\",\n                            onClick: handleSubmit,\n                            children: \"Registrar en Blockchain\"\n                        }, void 0, false, {\n                            fileName: \"/Users/alex/DreamChain/app/registrar-sueno/page.tsx\",\n                            lineNumber: 87,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/alex/DreamChain/app/registrar-sueno/page.tsx\",\n                    lineNumber: 47,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/alex/DreamChain/app/registrar-sueno/page.tsx\",\n            lineNumber: 43,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/alex/DreamChain/app/registrar-sueno/page.tsx\",\n        lineNumber: 42,\n        columnNumber: 5\n    }, this);\n}\n_s(DreamRegistryForm, \"eS5PTbBOiWbNXNkVA+wJB5eOgEY=\");\n_c = DreamRegistryForm;\nvar _c;\n$RefreshReg$(_c, \"DreamRegistryForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9yZWdpc3RyYXItc3Vlbm8vcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDZ0Y7QUFDbEM7QUFFRTtBQUNGO0FBQ2U7QUFDckI7QUFTekIsU0FBU2E7O0lBRXRCLE1BQU0sQ0FBQ0MsV0FBV0MsYUFBYSxHQUFJSCwrQ0FBUUEsQ0FBWTtRQUNyREksWUFBWTtRQUNaQyxtQkFBbUI7UUFDbkJDLGFBQWE7UUFDYkMsc0JBQXNCO0lBQ3hCO0lBRUEsTUFBTUMsZUFBZSxDQUFDQztRQUNwQixNQUFNLEVBQUVDLElBQUksRUFBRUMsS0FBSyxFQUFFLEdBQUdGLEVBQUVHLE1BQU07UUFDaENULGFBQWEsQ0FBQ1UsT0FBVTtnQkFDdEIsR0FBR0EsSUFBSTtnQkFDUCxDQUFDSCxLQUFLLEVBQUVDO1lBQ1Y7SUFDRjtJQUVBLE1BQU1HLGVBQWUsQ0FBQ0w7UUFDcEJBLEVBQUVNLGNBQWM7UUFDaEJDLGFBQWFDLE9BQU8sQ0FBQyxjQUFjQyxLQUFLQyxTQUFTLENBQUNqQjtRQUNsRGMsYUFBYUksT0FBTyxDQUFDO1FBQ3JCQyxRQUFRQyxHQUFHLENBQUNwQixZQUFZLG9FQUFvRTtJQUM5RjtJQUVBLHFCQUNFLDhEQUFDcUI7UUFBSUMsV0FBVTtrQkFDYiw0RUFBQ3BDLHFEQUFJQTtZQUFDb0MsV0FBVTs7OEJBQ2QsOERBQUNsQywyREFBVUE7OEJBQ1QsNEVBQUNDLDJEQUFVQTt3QkFBQ2lDLFdBQVU7a0NBQWlDOzs7Ozs7Ozs7Ozs4QkFFekQsOERBQUNuQyw0REFBV0E7b0JBQUNtQyxXQUFVOztzQ0FDckIsOERBQUNEOzRCQUFJQyxXQUFVOzs4Q0FDYiw4REFBQzlCLHVEQUFLQTtvQ0FBQytCLFNBQVE7b0NBQWFELFdBQVU7O3NEQUNwQyw4REFBQzFCLHVHQUFRQTs0Q0FBQzBCLFdBQVU7NENBQW9CRSxNQUFNOzs7Ozs7d0NBQU07Ozs7Ozs7OENBR3RELDhEQUFDbEMsdURBQUtBO29DQUFDbUMsSUFBRztvQ0FBYWpCLE1BQUs7b0NBQWFDLE9BQU9ULFVBQVVFLFVBQVU7b0NBQUd3QixVQUFVcEI7b0NBQWNxQixhQUFZOzs7Ozs7Ozs7Ozs7c0NBRzdHLDhEQUFDTjs0QkFBSUMsV0FBVTs7OENBQ2IsOERBQUM5Qix1REFBS0E7b0NBQUMrQixTQUFRO29DQUFvQkQsV0FBVTs7c0RBQzNDLDhEQUFDNUIsdUdBQU1BOzRDQUFDNEIsV0FBVTs0Q0FBb0JFLE1BQU07Ozs7Ozt3Q0FBTTs7Ozs7Ozs4Q0FHcEQsOERBQUNsQyx1REFBS0E7b0NBQUNtQyxJQUFHO29DQUFvQmpCLE1BQUs7b0NBQW9CbUIsYUFBWTtvQ0FBK0JsQixPQUFPVCxVQUFVRyxpQkFBaUI7b0NBQUd1QixVQUFVcEI7b0NBQWVnQixXQUFVOzs7Ozs7Ozs7Ozs7c0NBRzVLLDhEQUFDRDs0QkFBSUMsV0FBVTs7OENBQ2IsOERBQUM5Qix1REFBS0E7b0NBQUMrQixTQUFRO29DQUFjRCxXQUFVOztzREFDckMsOERBQUM1Qix1R0FBTUE7NENBQUM0QixXQUFVOzRDQUFvQkUsTUFBTTs7Ozs7O3dDQUFNOzs7Ozs7OzhDQUdwRCw4REFBQ2xDLHVEQUFLQTtvQ0FBQ21DLElBQUc7b0NBQWVqQixNQUFLO29DQUFjQyxPQUFPVCxVQUFVSSxXQUFXO29DQUFHc0IsVUFBVXBCO29DQUFjcUIsYUFBWTs7Ozs7Ozs7Ozs7O3NDQUdqSCw4REFBQ047NEJBQUlDLFdBQVU7OzhDQUNiLDhEQUFDOUIsdURBQUtBO29DQUFDK0IsU0FBUTtvQ0FBZUQsV0FBVTs7c0RBQ3RDLDhEQUFDM0IsdUdBQUlBOzRDQUFDMkIsV0FBVTs0Q0FBb0JFLE1BQU07Ozs7Ozt3Q0FBTTs7Ozs7Ozs4Q0FHbEQsOERBQUNsQyx1REFBS0E7b0NBQUNtQyxJQUFHO29DQUFlakIsTUFBSztvQ0FBd0JDLE9BQU9ULFVBQVVLLG9CQUFvQjtvQ0FBR3FCLFVBQVVwQjtvQ0FBY3FCLGFBQVk7Ozs7Ozs7Ozs7OztzQ0FFcEksOERBQUNOOzRCQUFJQyxXQUFVOzs4Q0FDYiw4REFBQzlCLHVEQUFLQTtvQ0FBQytCLFNBQVE7b0NBQW9CRCxXQUFVOztzREFDM0MsOERBQUM3Qix1R0FBTUE7NENBQUM2QixXQUFVOzRDQUFvQkUsTUFBTTs7Ozs7O3dDQUFNOzs7Ozs7OzhDQUdwRCw4REFBQ2xDLHVEQUFLQTtvQ0FBQ21DLElBQUc7b0NBQW9CRyxNQUFLO29DQUFPQyxRQUFRO29DQUFDUCxXQUFVOzs7Ozs7Ozs7Ozs7c0NBRy9ELDhEQUFDL0IseURBQU1BOzRCQUFDK0IsV0FBVTs0QkFBc0JFLE1BQUs7NEJBQUtNLFNBQVNsQjtzQ0FBZTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPcEY7R0E3RXdCYjtLQUFBQSIsInNvdXJjZXMiOlsiL1VzZXJzL2FsZXgvRHJlYW1DaGFpbi9hcHAvcmVnaXN0cmFyLXN1ZW5vL3BhZ2UudHN4Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50J1xuaW1wb3J0IHsgQ2FyZCwgQ2FyZENvbnRlbnQsIENhcmRIZWFkZXIsIENhcmRGb290ZXIgfSBmcm9tIFwiQC9jb21wb25lbnRzL3VpL2NhcmRcIlxuaW1wb3J0IHsgSW5wdXQgfSBmcm9tIFwiLi4vY29tcG9uZW50cy91aS9pbnB1dFwiXG5pbXBvcnQgeyBUZXh0YXJlYSB9IGZyb20gXCIuLi9jb21wb25lbnRzL3VpL3RleHRhcmVhXCJcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gXCIuLi9jb21wb25lbnRzL3VpL2J1dHRvblwiXG5pbXBvcnQgeyBMYWJlbCB9IGZyb20gXCIuLi9jb21wb25lbnRzL3VpL2xhYmVsXCJcbmltcG9ydCB7IFVwbG9hZCwgVGFyZ2V0LCBHaWZ0LCBTcGFya2xlcyB9IGZyb20gJ2x1Y2lkZS1yZWFjdCdcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcblxuaW50ZXJmYWNlICBGb3JtRHJlYW0ge1xuICBuYW1lX3NsZWVwOnN0cmluZyxcbiAgZHJlYW1fZGVzY3JpcHRpb246IHN0cmluZyxcbiAgZHJlYW1fZ29hbHM6IHN0cmluZyxcbiAgZHJlYW1fcmV3YXJkX29mZmVyZWQ6IHN0cmluZ1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEcmVhbVJlZ2lzdHJ5Rm9ybSgpIHtcbiAgXG4gIGNvbnN0IFtkcmVhbUZvcm0sIHNldERyZWFtRm9ybV0gPSAgdXNlU3RhdGU8Rm9ybURyZWFtPih7XG4gICAgbmFtZV9zbGVlcDogJycsXG4gICAgZHJlYW1fZGVzY3JpcHRpb246ICcnLFxuICAgIGRyZWFtX2dvYWxzOiAnJywgXG4gICAgZHJlYW1fcmV3YXJkX29mZmVyZWQ6ICcnLCBcbiAgfSk7XG4gIFxuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZTogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudCB8IEhUTUxUZXh0QXJlYUVsZW1lbnQ+KSA9PiB7XG4gICAgY29uc3QgeyBuYW1lLCB2YWx1ZSB9ID0gZS50YXJnZXQ7XG4gICAgc2V0RHJlYW1Gb3JtKChwcmV2KSA9PiAoe1xuICAgICAgLi4ucHJldixcbiAgICAgIFtuYW1lXTogdmFsdWUsXG4gICAgfSkpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IChlOiBSZWFjdC5Gb3JtRXZlbnQpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJmb3JtLWRyZWFtXCIsIEpTT04uc3RyaW5naWZ5KGRyZWFtRm9ybSkpO1xuICAgIGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiXCIpXG4gICAgY29uc29sZS5sb2coZHJlYW1Gb3JtKTsgLy8gQXF1w60gcHVlZGVzIGVudmlhciBlbCBlc3RhZG8gYWwgc2Vydmlkb3IgbyBoYWNlciBsbyBxdWUgbmVjZXNpdGVzXG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBteC1hdXRvIHB4LTQgcHktOFwiPlxuICAgICAgPENhcmQgY2xhc3NOYW1lPVwidy1mdWxsIG1heC13LTJ4bCBteC1hdXRvXCI+XG4gICAgICAgIDxDYXJkSGVhZGVyPlxuICAgICAgICAgIDxDYXJkRm9vdGVyIGNsYXNzTmFtZT1cInRleHQtM3hsIGZvbnQtYm9sZCB0ZXh0LWNlbnRlclwiPlJlZ2lzdHJhciB0dSBTdWXDsW88L0NhcmRGb290ZXI+XG4gICAgICAgIDwvQ2FyZEhlYWRlcj5cbiAgICAgICAgPENhcmRDb250ZW50IGNsYXNzTmFtZT1cInNwYWNlLXktNlwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS0yXCI+XG4gICAgICAgICAgICA8TGFiZWwgaHRtbEZvcj1cImRyZWFtLW5hbWVcIiBjbGFzc05hbWU9XCJ0ZXh0LWxnIGZvbnQtbWVkaXVtXCI+XG4gICAgICAgICAgICAgIDxTcGFya2xlcyBjbGFzc05hbWU9XCJpbmxpbmUtYmxvY2sgbXItMlwiIHNpemU9ezIwfSAvPlxuICAgICAgICAgICAgICBOb21icmUgZGVsIFN1ZcOxb1xuICAgICAgICAgICAgPC9MYWJlbD5cbiAgICAgICAgICAgIDxJbnB1dCBpZD1cImRyZWFtLW5hbWVcIiBuYW1lPVwibmFtZV9zbGVlcFwiIHZhbHVlPXtkcmVhbUZvcm0ubmFtZV9zbGVlcH0gIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9IHBsYWNlaG9sZGVyPVwiRXNjcmliZSBlbCBub21icmUgZGUgdHUgc3Vlw7FvXCIgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICBcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktMlwiPlxuICAgICAgICAgICAgPExhYmVsIGh0bWxGb3I9XCJkcmVhbS1kZXNjcmlwdGlvblwiIGNsYXNzTmFtZT1cInRleHQtbGcgZm9udC1tZWRpdW1cIj5cbiAgICAgICAgICAgICAgPFRhcmdldCBjbGFzc05hbWU9XCJpbmxpbmUtYmxvY2sgbXItMlwiIHNpemU9ezIwfSAvPlxuICAgICAgICAgICAgICBEZXNjcmlwY2nDs25cbiAgICAgICAgICAgIDwvTGFiZWw+XG4gICAgICAgICAgICA8SW5wdXQgaWQ9XCJkcmVhbS1kZXNjcmlwdGlvblwiIG5hbWU9XCJkcmVhbV9kZXNjcmlwdGlvblwiIHBsYWNlaG9sZGVyPVwiRGVzY3JpYmUgdHUgc3Vlw7FvIGVuIGRldGFsbGVcIiB2YWx1ZT17ZHJlYW1Gb3JtLmRyZWFtX2Rlc2NyaXB0aW9ufSAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0gIGNsYXNzTmFtZT1cIm1pbi1oLVsxMDBweF1cIiAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS0yXCI+XG4gICAgICAgICAgICA8TGFiZWwgaHRtbEZvcj1cImRyZWFtLWdvYWxzXCIgY2xhc3NOYW1lPVwidGV4dC1sZyBmb250LW1lZGl1bVwiPlxuICAgICAgICAgICAgICA8VGFyZ2V0IGNsYXNzTmFtZT1cImlubGluZS1ibG9jayBtci0yXCIgc2l6ZT17MjB9IC8+XG4gICAgICAgICAgICAgIE1ldGFzXG4gICAgICAgICAgICA8L0xhYmVsPlxuICAgICAgICAgICAgPElucHV0IGlkPVwiZHJlYW0tZ29hbHNcIiAgbmFtZT1cImRyZWFtX2dvYWxzXCIgdmFsdWU9e2RyZWFtRm9ybS5kcmVhbV9nb2Fsc30gIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9IHBsYWNlaG9sZGVyPVwiRGVmaW5lIGxhcyBtZXRhcyBkZSB0dSBzdWXDsW9cIiAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS0yXCI+XG4gICAgICAgICAgICA8TGFiZWwgaHRtbEZvcj1cImRyZWFtLXJld2FyZFwiIGNsYXNzTmFtZT1cInRleHQtbGcgZm9udC1tZWRpdW1cIj5cbiAgICAgICAgICAgICAgPEdpZnQgY2xhc3NOYW1lPVwiaW5saW5lLWJsb2NrIG1yLTJcIiBzaXplPXsyMH0gLz5cbiAgICAgICAgICAgICAgUmVjb21wZW5zYSBPZnJlY2lkYVxuICAgICAgICAgICAgPC9MYWJlbD5cbiAgICAgICAgICAgIDxJbnB1dCBpZD1cImRyZWFtLXJld2FyZFwiIG5hbWU9XCJkcmVhbV9yZXdhcmRfb2ZmZXJlZFwiICB2YWx1ZT17ZHJlYW1Gb3JtLmRyZWFtX3Jld2FyZF9vZmZlcmVkfSAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0gcGxhY2Vob2xkZXI9XCJFc3BlY2lmaWNhIGxhIHJlY29tcGVuc2EgcG9yIGN1bXBsaXIgZWwgc3Vlw7FvXCIgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktMlwiPlxuICAgICAgICAgICAgPExhYmVsIGh0bWxGb3I9XCJkcmVhbS1hdHRhY2htZW50c1wiIGNsYXNzTmFtZT1cInRleHQtbGcgZm9udC1tZWRpdW1cIj5cbiAgICAgICAgICAgICAgPFVwbG9hZCBjbGFzc05hbWU9XCJpbmxpbmUtYmxvY2sgbXItMlwiIHNpemU9ezIwfSAvPlxuICAgICAgICAgICAgICBBZGp1bnRhciBJbcOhZ2VuZXMgbyBEb2N1bWVudG9zIChPcGNpb25hbClcbiAgICAgICAgICAgIDwvTGFiZWw+XG4gICAgICAgICAgICA8SW5wdXQgaWQ9XCJkcmVhbS1hdHRhY2htZW50c1wiIHR5cGU9XCJmaWxlXCIgbXVsdGlwbGUgY2xhc3NOYW1lPVwiY3Vyc29yLXBvaW50ZXJcIiAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIFxuICAgICAgICAgIDxCdXR0b24gY2xhc3NOYW1lPVwidy1mdWxsIHRleHQtbGcgcHktNlwiIHNpemU9XCJsZ1wiIG9uQ2xpY2s9e2hhbmRsZVN1Ym1pdH0gPlxuICAgICAgICAgICAgUmVnaXN0cmFyIGVuIEJsb2NrY2hhaW5cbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgPC9DYXJkQ29udGVudD5cbiAgICAgIDwvQ2FyZD5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG4iXSwibmFtZXMiOlsiQ2FyZCIsIkNhcmRDb250ZW50IiwiQ2FyZEhlYWRlciIsIkNhcmRGb290ZXIiLCJJbnB1dCIsIkJ1dHRvbiIsIkxhYmVsIiwiVXBsb2FkIiwiVGFyZ2V0IiwiR2lmdCIsIlNwYXJrbGVzIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsIkRyZWFtUmVnaXN0cnlGb3JtIiwiZHJlYW1Gb3JtIiwic2V0RHJlYW1Gb3JtIiwibmFtZV9zbGVlcCIsImRyZWFtX2Rlc2NyaXB0aW9uIiwiZHJlYW1fZ29hbHMiLCJkcmVhbV9yZXdhcmRfb2ZmZXJlZCIsImhhbmRsZUNoYW5nZSIsImUiLCJuYW1lIiwidmFsdWUiLCJ0YXJnZXQiLCJwcmV2IiwiaGFuZGxlU3VibWl0IiwicHJldmVudERlZmF1bHQiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwiSlNPTiIsInN0cmluZ2lmeSIsImdldEl0ZW0iLCJjb25zb2xlIiwibG9nIiwiZGl2IiwiY2xhc3NOYW1lIiwiaHRtbEZvciIsInNpemUiLCJpZCIsIm9uQ2hhbmdlIiwicGxhY2Vob2xkZXIiLCJ0eXBlIiwibXVsdGlwbGUiLCJvbkNsaWNrIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/registrar-sueno/page.tsx\n"));

/***/ })

});