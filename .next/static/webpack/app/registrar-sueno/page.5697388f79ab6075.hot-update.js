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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ DreamRegistryForm)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _components_ui_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/ui/card */ \"(app-pages-browser)/./app/components/ui/card.tsx\");\n/* harmony import */ var _components_ui_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/ui/input */ \"(app-pages-browser)/./app/components/ui/input.tsx\");\n/* harmony import */ var _components_ui_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/ui/button */ \"(app-pages-browser)/./app/components/ui/button.tsx\");\n/* harmony import */ var _components_ui_label__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/ui/label */ \"(app-pages-browser)/./app/components/ui/label.tsx\");\n/* harmony import */ var _barrel_optimize_names_Gift_Sparkles_Target_Upload_lucide_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! __barrel_optimize__?names=Gift,Sparkles,Target,Upload!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/sparkles.js\");\n/* harmony import */ var _barrel_optimize_names_Gift_Sparkles_Target_Upload_lucide_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! __barrel_optimize__?names=Gift,Sparkles,Target,Upload!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/target.js\");\n/* harmony import */ var _barrel_optimize_names_Gift_Sparkles_Target_Upload_lucide_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! __barrel_optimize__?names=Gift,Sparkles,Target,Upload!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/gift.js\");\n/* harmony import */ var _barrel_optimize_names_Gift_Sparkles_Target_Upload_lucide_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! __barrel_optimize__?names=Gift,Sparkles,Target,Upload!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/upload.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction DreamRegistryForm() {\n    _s();\n    const [dreamForm, setDreamForm] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)({\n        name_sleep: '',\n        dream_description: '',\n        dream_goals: '',\n        dream_reward_offered: ''\n    });\n    const handleChange = (e)=>{\n        const { name, value } = e.target;\n        setDreamForm((prev)=>({\n                ...prev,\n                [name]: value\n            }));\n    };\n    const handleSubmit = (e)=>{\n        e.preventDefault();\n        localStorage.setItem(\"formdream\");\n        console.log(dreamForm); // Aquí puedes enviar el estado al servidor o hacer lo que necesites\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"container mx-auto px-4 py-8\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_1__.Card, {\n            className: \"w-full max-w-2xl mx-auto\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_1__.CardHeader, {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_1__.CardFooter, {\n                        className: \"text-3xl font-bold text-center\",\n                        children: \"Registrar tu Sue\\xf1o\"\n                    }, void 0, false, {\n                        fileName: \"/Users/alex/DreamChain/app/registrar-sueno/page.tsx\",\n                        lineNumber: 44,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/alex/DreamChain/app/registrar-sueno/page.tsx\",\n                    lineNumber: 43,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_1__.CardContent, {\n                    className: \"space-y-6\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"space-y-2\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_label__WEBPACK_IMPORTED_MODULE_4__.Label, {\n                                    htmlFor: \"dream-name\",\n                                    className: \"text-lg font-medium\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Gift_Sparkles_Target_Upload_lucide_react__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                            className: \"inline-block mr-2\",\n                                            size: 20\n                                        }, void 0, false, {\n                                            fileName: \"/Users/alex/DreamChain/app/registrar-sueno/page.tsx\",\n                                            lineNumber: 49,\n                                            columnNumber: 15\n                                        }, this),\n                                        \"Nombre del Sue\\xf1o\"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/alex/DreamChain/app/registrar-sueno/page.tsx\",\n                                    lineNumber: 48,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_input__WEBPACK_IMPORTED_MODULE_2__.Input, {\n                                    id: \"dream-name\",\n                                    name: \"name_sleep\",\n                                    value: dreamForm.name_sleep,\n                                    onChange: handleChange,\n                                    placeholder: \"Escribe el nombre de tu sue\\xf1o\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/alex/DreamChain/app/registrar-sueno/page.tsx\",\n                                    lineNumber: 52,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/alex/DreamChain/app/registrar-sueno/page.tsx\",\n                            lineNumber: 47,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"space-y-2\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_label__WEBPACK_IMPORTED_MODULE_4__.Label, {\n                                    htmlFor: \"dream-description\",\n                                    className: \"text-lg font-medium\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Gift_Sparkles_Target_Upload_lucide_react__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                                            className: \"inline-block mr-2\",\n                                            size: 20\n                                        }, void 0, false, {\n                                            fileName: \"/Users/alex/DreamChain/app/registrar-sueno/page.tsx\",\n                                            lineNumber: 57,\n                                            columnNumber: 15\n                                        }, this),\n                                        \"Descripci\\xf3n\"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/alex/DreamChain/app/registrar-sueno/page.tsx\",\n                                    lineNumber: 56,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_input__WEBPACK_IMPORTED_MODULE_2__.Input, {\n                                    id: \"dream-description\",\n                                    name: \"dream_description\",\n                                    placeholder: \"Describe tu sue\\xf1o en detalle\",\n                                    value: dreamForm.dream_description,\n                                    onChange: handleChange,\n                                    className: \"min-h-[100px]\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/alex/DreamChain/app/registrar-sueno/page.tsx\",\n                                    lineNumber: 60,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/alex/DreamChain/app/registrar-sueno/page.tsx\",\n                            lineNumber: 55,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"space-y-2\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_label__WEBPACK_IMPORTED_MODULE_4__.Label, {\n                                    htmlFor: \"dream-goals\",\n                                    className: \"text-lg font-medium\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Gift_Sparkles_Target_Upload_lucide_react__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                                            className: \"inline-block mr-2\",\n                                            size: 20\n                                        }, void 0, false, {\n                                            fileName: \"/Users/alex/DreamChain/app/registrar-sueno/page.tsx\",\n                                            lineNumber: 65,\n                                            columnNumber: 15\n                                        }, this),\n                                        \"Metas\"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/alex/DreamChain/app/registrar-sueno/page.tsx\",\n                                    lineNumber: 64,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_input__WEBPACK_IMPORTED_MODULE_2__.Input, {\n                                    id: \"dream-goals\",\n                                    name: \"dream_goals\",\n                                    value: dreamForm.dream_goals,\n                                    onChange: handleChange,\n                                    placeholder: \"Define las metas de tu sue\\xf1o\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/alex/DreamChain/app/registrar-sueno/page.tsx\",\n                                    lineNumber: 68,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/alex/DreamChain/app/registrar-sueno/page.tsx\",\n                            lineNumber: 63,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"space-y-2\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_label__WEBPACK_IMPORTED_MODULE_4__.Label, {\n                                    htmlFor: \"dream-reward\",\n                                    className: \"text-lg font-medium\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Gift_Sparkles_Target_Upload_lucide_react__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                                            className: \"inline-block mr-2\",\n                                            size: 20\n                                        }, void 0, false, {\n                                            fileName: \"/Users/alex/DreamChain/app/registrar-sueno/page.tsx\",\n                                            lineNumber: 73,\n                                            columnNumber: 15\n                                        }, this),\n                                        \"Recompensa Ofrecida\"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/alex/DreamChain/app/registrar-sueno/page.tsx\",\n                                    lineNumber: 72,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_input__WEBPACK_IMPORTED_MODULE_2__.Input, {\n                                    id: \"dream-reward\",\n                                    name: \"dream_reward_offered\",\n                                    value: dreamForm.dream_reward_offered,\n                                    onChange: handleChange,\n                                    placeholder: \"Especifica la recompensa por cumplir el sue\\xf1o\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/alex/DreamChain/app/registrar-sueno/page.tsx\",\n                                    lineNumber: 76,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/alex/DreamChain/app/registrar-sueno/page.tsx\",\n                            lineNumber: 71,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"space-y-2\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_label__WEBPACK_IMPORTED_MODULE_4__.Label, {\n                                    htmlFor: \"dream-attachments\",\n                                    className: \"text-lg font-medium\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Gift_Sparkles_Target_Upload_lucide_react__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                                            className: \"inline-block mr-2\",\n                                            size: 20\n                                        }, void 0, false, {\n                                            fileName: \"/Users/alex/DreamChain/app/registrar-sueno/page.tsx\",\n                                            lineNumber: 80,\n                                            columnNumber: 15\n                                        }, this),\n                                        \"Adjuntar Im\\xe1genes o Documentos (Opcional)\"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/alex/DreamChain/app/registrar-sueno/page.tsx\",\n                                    lineNumber: 79,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_input__WEBPACK_IMPORTED_MODULE_2__.Input, {\n                                    id: \"dream-attachments\",\n                                    type: \"file\",\n                                    multiple: true,\n                                    className: \"cursor-pointer\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/alex/DreamChain/app/registrar-sueno/page.tsx\",\n                                    lineNumber: 83,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/alex/DreamChain/app/registrar-sueno/page.tsx\",\n                            lineNumber: 78,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_button__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                            className: \"w-full text-lg py-6\",\n                            size: \"lg\",\n                            onClick: handleSubmit,\n                            children: \"Registrar en Blockchain\"\n                        }, void 0, false, {\n                            fileName: \"/Users/alex/DreamChain/app/registrar-sueno/page.tsx\",\n                            lineNumber: 86,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/alex/DreamChain/app/registrar-sueno/page.tsx\",\n                    lineNumber: 46,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/alex/DreamChain/app/registrar-sueno/page.tsx\",\n            lineNumber: 42,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/alex/DreamChain/app/registrar-sueno/page.tsx\",\n        lineNumber: 41,\n        columnNumber: 5\n    }, this);\n}\n_s(DreamRegistryForm, \"eS5PTbBOiWbNXNkVA+wJB5eOgEY=\");\n_c = DreamRegistryForm;\nvar _c;\n$RefreshReg$(_c, \"DreamRegistryForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9yZWdpc3RyYXItc3Vlbm8vcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDZ0Y7QUFDbEM7QUFFRTtBQUNGO0FBQ2U7QUFDckI7QUFTekIsU0FBU2E7O0lBRXRCLE1BQU0sQ0FBQ0MsV0FBV0MsYUFBYSxHQUFJSCwrQ0FBUUEsQ0FBWTtRQUNyREksWUFBWTtRQUNaQyxtQkFBbUI7UUFDbkJDLGFBQWE7UUFDYkMsc0JBQXNCO0lBQ3hCO0lBRUEsTUFBTUMsZUFBZSxDQUFDQztRQUNwQixNQUFNLEVBQUVDLElBQUksRUFBRUMsS0FBSyxFQUFFLEdBQUdGLEVBQUVHLE1BQU07UUFDaENULGFBQWEsQ0FBQ1UsT0FBVTtnQkFDdEIsR0FBR0EsSUFBSTtnQkFDUCxDQUFDSCxLQUFLLEVBQUVDO1lBQ1Y7SUFDRjtJQUVBLE1BQU1HLGVBQWUsQ0FBQ0w7UUFDcEJBLEVBQUVNLGNBQWM7UUFDaEJDLGFBQWFDLE9BQU8sQ0FBQztRQUNyQkMsUUFBUUMsR0FBRyxDQUFDakIsWUFBWSxvRUFBb0U7SUFDOUY7SUFFQSxxQkFDRSw4REFBQ2tCO1FBQUlDLFdBQVU7a0JBQ2IsNEVBQUNqQyxxREFBSUE7WUFBQ2lDLFdBQVU7OzhCQUNkLDhEQUFDL0IsMkRBQVVBOzhCQUNULDRFQUFDQywyREFBVUE7d0JBQUM4QixXQUFVO2tDQUFpQzs7Ozs7Ozs7Ozs7OEJBRXpELDhEQUFDaEMsNERBQVdBO29CQUFDZ0MsV0FBVTs7c0NBQ3JCLDhEQUFDRDs0QkFBSUMsV0FBVTs7OENBQ2IsOERBQUMzQix1REFBS0E7b0NBQUM0QixTQUFRO29DQUFhRCxXQUFVOztzREFDcEMsOERBQUN2Qix1R0FBUUE7NENBQUN1QixXQUFVOzRDQUFvQkUsTUFBTTs7Ozs7O3dDQUFNOzs7Ozs7OzhDQUd0RCw4REFBQy9CLHVEQUFLQTtvQ0FBQ2dDLElBQUc7b0NBQWFkLE1BQUs7b0NBQWFDLE9BQU9ULFVBQVVFLFVBQVU7b0NBQUdxQixVQUFVakI7b0NBQWNrQixhQUFZOzs7Ozs7Ozs7Ozs7c0NBRzdHLDhEQUFDTjs0QkFBSUMsV0FBVTs7OENBQ2IsOERBQUMzQix1REFBS0E7b0NBQUM0QixTQUFRO29DQUFvQkQsV0FBVTs7c0RBQzNDLDhEQUFDekIsdUdBQU1BOzRDQUFDeUIsV0FBVTs0Q0FBb0JFLE1BQU07Ozs7Ozt3Q0FBTTs7Ozs7Ozs4Q0FHcEQsOERBQUMvQix1REFBS0E7b0NBQUNnQyxJQUFHO29DQUFvQmQsTUFBSztvQ0FBb0JnQixhQUFZO29DQUErQmYsT0FBT1QsVUFBVUcsaUJBQWlCO29DQUFHb0IsVUFBVWpCO29DQUFlYSxXQUFVOzs7Ozs7Ozs7Ozs7c0NBRzVLLDhEQUFDRDs0QkFBSUMsV0FBVTs7OENBQ2IsOERBQUMzQix1REFBS0E7b0NBQUM0QixTQUFRO29DQUFjRCxXQUFVOztzREFDckMsOERBQUN6Qix1R0FBTUE7NENBQUN5QixXQUFVOzRDQUFvQkUsTUFBTTs7Ozs7O3dDQUFNOzs7Ozs7OzhDQUdwRCw4REFBQy9CLHVEQUFLQTtvQ0FBQ2dDLElBQUc7b0NBQWVkLE1BQUs7b0NBQWNDLE9BQU9ULFVBQVVJLFdBQVc7b0NBQUdtQixVQUFVakI7b0NBQWNrQixhQUFZOzs7Ozs7Ozs7Ozs7c0NBR2pILDhEQUFDTjs0QkFBSUMsV0FBVTs7OENBQ2IsOERBQUMzQix1REFBS0E7b0NBQUM0QixTQUFRO29DQUFlRCxXQUFVOztzREFDdEMsOERBQUN4Qix1R0FBSUE7NENBQUN3QixXQUFVOzRDQUFvQkUsTUFBTTs7Ozs7O3dDQUFNOzs7Ozs7OzhDQUdsRCw4REFBQy9CLHVEQUFLQTtvQ0FBQ2dDLElBQUc7b0NBQWVkLE1BQUs7b0NBQXdCQyxPQUFPVCxVQUFVSyxvQkFBb0I7b0NBQUdrQixVQUFVakI7b0NBQWNrQixhQUFZOzs7Ozs7Ozs7Ozs7c0NBRXBJLDhEQUFDTjs0QkFBSUMsV0FBVTs7OENBQ2IsOERBQUMzQix1REFBS0E7b0NBQUM0QixTQUFRO29DQUFvQkQsV0FBVTs7c0RBQzNDLDhEQUFDMUIsdUdBQU1BOzRDQUFDMEIsV0FBVTs0Q0FBb0JFLE1BQU07Ozs7Ozt3Q0FBTTs7Ozs7Ozs4Q0FHcEQsOERBQUMvQix1REFBS0E7b0NBQUNnQyxJQUFHO29DQUFvQkcsTUFBSztvQ0FBT0MsUUFBUTtvQ0FBQ1AsV0FBVTs7Ozs7Ozs7Ozs7O3NDQUcvRCw4REFBQzVCLHlEQUFNQTs0QkFBQzRCLFdBQVU7NEJBQXNCRSxNQUFLOzRCQUFLTSxTQUFTZjtzQ0FBZTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPcEY7R0E1RXdCYjtLQUFBQSIsInNvdXJjZXMiOlsiL1VzZXJzL2FsZXgvRHJlYW1DaGFpbi9hcHAvcmVnaXN0cmFyLXN1ZW5vL3BhZ2UudHN4Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50J1xuaW1wb3J0IHsgQ2FyZCwgQ2FyZENvbnRlbnQsIENhcmRIZWFkZXIsIENhcmRGb290ZXIgfSBmcm9tIFwiQC9jb21wb25lbnRzL3VpL2NhcmRcIlxuaW1wb3J0IHsgSW5wdXQgfSBmcm9tIFwiLi4vY29tcG9uZW50cy91aS9pbnB1dFwiXG5pbXBvcnQgeyBUZXh0YXJlYSB9IGZyb20gXCIuLi9jb21wb25lbnRzL3VpL3RleHRhcmVhXCJcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gXCIuLi9jb21wb25lbnRzL3VpL2J1dHRvblwiXG5pbXBvcnQgeyBMYWJlbCB9IGZyb20gXCIuLi9jb21wb25lbnRzL3VpL2xhYmVsXCJcbmltcG9ydCB7IFVwbG9hZCwgVGFyZ2V0LCBHaWZ0LCBTcGFya2xlcyB9IGZyb20gJ2x1Y2lkZS1yZWFjdCdcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcblxuaW50ZXJmYWNlICBGb3JtRHJlYW0ge1xuICBuYW1lX3NsZWVwOnN0cmluZyxcbiAgZHJlYW1fZGVzY3JpcHRpb246IHN0cmluZyxcbiAgZHJlYW1fZ29hbHM6IHN0cmluZyxcbiAgZHJlYW1fcmV3YXJkX29mZmVyZWQ6IHN0cmluZ1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEcmVhbVJlZ2lzdHJ5Rm9ybSgpIHtcbiAgXG4gIGNvbnN0IFtkcmVhbUZvcm0sIHNldERyZWFtRm9ybV0gPSAgdXNlU3RhdGU8Rm9ybURyZWFtPih7XG4gICAgbmFtZV9zbGVlcDogJycsXG4gICAgZHJlYW1fZGVzY3JpcHRpb246ICcnLFxuICAgIGRyZWFtX2dvYWxzOiAnJywgXG4gICAgZHJlYW1fcmV3YXJkX29mZmVyZWQ6ICcnLCBcbiAgfSk7XG4gIFxuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZTogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudCB8IEhUTUxUZXh0QXJlYUVsZW1lbnQ+KSA9PiB7XG4gICAgY29uc3QgeyBuYW1lLCB2YWx1ZSB9ID0gZS50YXJnZXQ7XG4gICAgc2V0RHJlYW1Gb3JtKChwcmV2KSA9PiAoe1xuICAgICAgLi4ucHJldixcbiAgICAgIFtuYW1lXTogdmFsdWUsXG4gICAgfSkpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IChlOiBSZWFjdC5Gb3JtRXZlbnQpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJmb3JtZHJlYW1cIilcbiAgICBjb25zb2xlLmxvZyhkcmVhbUZvcm0pOyAvLyBBcXXDrSBwdWVkZXMgZW52aWFyIGVsIGVzdGFkbyBhbCBzZXJ2aWRvciBvIGhhY2VyIGxvIHF1ZSBuZWNlc2l0ZXNcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIG14LWF1dG8gcHgtNCBweS04XCI+XG4gICAgICA8Q2FyZCBjbGFzc05hbWU9XCJ3LWZ1bGwgbWF4LXctMnhsIG14LWF1dG9cIj5cbiAgICAgICAgPENhcmRIZWFkZXI+XG4gICAgICAgICAgPENhcmRGb290ZXIgY2xhc3NOYW1lPVwidGV4dC0zeGwgZm9udC1ib2xkIHRleHQtY2VudGVyXCI+UmVnaXN0cmFyIHR1IFN1ZcOxbzwvQ2FyZEZvb3Rlcj5cbiAgICAgICAgPC9DYXJkSGVhZGVyPlxuICAgICAgICA8Q2FyZENvbnRlbnQgY2xhc3NOYW1lPVwic3BhY2UteS02XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTJcIj5cbiAgICAgICAgICAgIDxMYWJlbCBodG1sRm9yPVwiZHJlYW0tbmFtZVwiIGNsYXNzTmFtZT1cInRleHQtbGcgZm9udC1tZWRpdW1cIj5cbiAgICAgICAgICAgICAgPFNwYXJrbGVzIGNsYXNzTmFtZT1cImlubGluZS1ibG9jayBtci0yXCIgc2l6ZT17MjB9IC8+XG4gICAgICAgICAgICAgIE5vbWJyZSBkZWwgU3Vlw7FvXG4gICAgICAgICAgICA8L0xhYmVsPlxuICAgICAgICAgICAgPElucHV0IGlkPVwiZHJlYW0tbmFtZVwiIG5hbWU9XCJuYW1lX3NsZWVwXCIgdmFsdWU9e2RyZWFtRm9ybS5uYW1lX3NsZWVwfSAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0gcGxhY2Vob2xkZXI9XCJFc2NyaWJlIGVsIG5vbWJyZSBkZSB0dSBzdWXDsW9cIiAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS0yXCI+XG4gICAgICAgICAgICA8TGFiZWwgaHRtbEZvcj1cImRyZWFtLWRlc2NyaXB0aW9uXCIgY2xhc3NOYW1lPVwidGV4dC1sZyBmb250LW1lZGl1bVwiPlxuICAgICAgICAgICAgICA8VGFyZ2V0IGNsYXNzTmFtZT1cImlubGluZS1ibG9jayBtci0yXCIgc2l6ZT17MjB9IC8+XG4gICAgICAgICAgICAgIERlc2NyaXBjacOzblxuICAgICAgICAgICAgPC9MYWJlbD5cbiAgICAgICAgICAgIDxJbnB1dCBpZD1cImRyZWFtLWRlc2NyaXB0aW9uXCIgbmFtZT1cImRyZWFtX2Rlc2NyaXB0aW9uXCIgcGxhY2Vob2xkZXI9XCJEZXNjcmliZSB0dSBzdWXDsW8gZW4gZGV0YWxsZVwiIHZhbHVlPXtkcmVhbUZvcm0uZHJlYW1fZGVzY3JpcHRpb259ICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfSAgY2xhc3NOYW1lPVwibWluLWgtWzEwMHB4XVwiIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTJcIj5cbiAgICAgICAgICAgIDxMYWJlbCBodG1sRm9yPVwiZHJlYW0tZ29hbHNcIiBjbGFzc05hbWU9XCJ0ZXh0LWxnIGZvbnQtbWVkaXVtXCI+XG4gICAgICAgICAgICAgIDxUYXJnZXQgY2xhc3NOYW1lPVwiaW5saW5lLWJsb2NrIG1yLTJcIiBzaXplPXsyMH0gLz5cbiAgICAgICAgICAgICAgTWV0YXNcbiAgICAgICAgICAgIDwvTGFiZWw+XG4gICAgICAgICAgICA8SW5wdXQgaWQ9XCJkcmVhbS1nb2Fsc1wiICBuYW1lPVwiZHJlYW1fZ29hbHNcIiB2YWx1ZT17ZHJlYW1Gb3JtLmRyZWFtX2dvYWxzfSAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0gcGxhY2Vob2xkZXI9XCJEZWZpbmUgbGFzIG1ldGFzIGRlIHR1IHN1ZcOxb1wiIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTJcIj5cbiAgICAgICAgICAgIDxMYWJlbCBodG1sRm9yPVwiZHJlYW0tcmV3YXJkXCIgY2xhc3NOYW1lPVwidGV4dC1sZyBmb250LW1lZGl1bVwiPlxuICAgICAgICAgICAgICA8R2lmdCBjbGFzc05hbWU9XCJpbmxpbmUtYmxvY2sgbXItMlwiIHNpemU9ezIwfSAvPlxuICAgICAgICAgICAgICBSZWNvbXBlbnNhIE9mcmVjaWRhXG4gICAgICAgICAgICA8L0xhYmVsPlxuICAgICAgICAgICAgPElucHV0IGlkPVwiZHJlYW0tcmV3YXJkXCIgbmFtZT1cImRyZWFtX3Jld2FyZF9vZmZlcmVkXCIgIHZhbHVlPXtkcmVhbUZvcm0uZHJlYW1fcmV3YXJkX29mZmVyZWR9ICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfSBwbGFjZWhvbGRlcj1cIkVzcGVjaWZpY2EgbGEgcmVjb21wZW5zYSBwb3IgY3VtcGxpciBlbCBzdWXDsW9cIiAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS0yXCI+XG4gICAgICAgICAgICA8TGFiZWwgaHRtbEZvcj1cImRyZWFtLWF0dGFjaG1lbnRzXCIgY2xhc3NOYW1lPVwidGV4dC1sZyBmb250LW1lZGl1bVwiPlxuICAgICAgICAgICAgICA8VXBsb2FkIGNsYXNzTmFtZT1cImlubGluZS1ibG9jayBtci0yXCIgc2l6ZT17MjB9IC8+XG4gICAgICAgICAgICAgIEFkanVudGFyIEltw6FnZW5lcyBvIERvY3VtZW50b3MgKE9wY2lvbmFsKVxuICAgICAgICAgICAgPC9MYWJlbD5cbiAgICAgICAgICAgIDxJbnB1dCBpZD1cImRyZWFtLWF0dGFjaG1lbnRzXCIgdHlwZT1cImZpbGVcIiBtdWx0aXBsZSBjbGFzc05hbWU9XCJjdXJzb3ItcG9pbnRlclwiIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgXG4gICAgICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9XCJ3LWZ1bGwgdGV4dC1sZyBweS02XCIgc2l6ZT1cImxnXCIgb25DbGljaz17aGFuZGxlU3VibWl0fSA+XG4gICAgICAgICAgICBSZWdpc3RyYXIgZW4gQmxvY2tjaGFpblxuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICA8L0NhcmRDb250ZW50PlxuICAgICAgPC9DYXJkPlxuICAgIDwvZGl2PlxuICApXG59XG5cbiJdLCJuYW1lcyI6WyJDYXJkIiwiQ2FyZENvbnRlbnQiLCJDYXJkSGVhZGVyIiwiQ2FyZEZvb3RlciIsIklucHV0IiwiQnV0dG9uIiwiTGFiZWwiLCJVcGxvYWQiLCJUYXJnZXQiLCJHaWZ0IiwiU3BhcmtsZXMiLCJSZWFjdCIsInVzZVN0YXRlIiwiRHJlYW1SZWdpc3RyeUZvcm0iLCJkcmVhbUZvcm0iLCJzZXREcmVhbUZvcm0iLCJuYW1lX3NsZWVwIiwiZHJlYW1fZGVzY3JpcHRpb24iLCJkcmVhbV9nb2FscyIsImRyZWFtX3Jld2FyZF9vZmZlcmVkIiwiaGFuZGxlQ2hhbmdlIiwiZSIsIm5hbWUiLCJ2YWx1ZSIsInRhcmdldCIsInByZXYiLCJoYW5kbGVTdWJtaXQiLCJwcmV2ZW50RGVmYXVsdCIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJjb25zb2xlIiwibG9nIiwiZGl2IiwiY2xhc3NOYW1lIiwiaHRtbEZvciIsInNpemUiLCJpZCIsIm9uQ2hhbmdlIiwicGxhY2Vob2xkZXIiLCJ0eXBlIiwibXVsdGlwbGUiLCJvbkNsaWNrIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/registrar-sueno/page.tsx\n"));

/***/ })

});