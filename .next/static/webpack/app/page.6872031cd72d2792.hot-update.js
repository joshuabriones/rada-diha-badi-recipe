"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./app/page.jsx":
/*!**********************!*\
  !*** ./app/page.jsx ***!
  \**********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var typewriter_effect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! typewriter-effect */ \"(app-pages-browser)/./node_modules/typewriter-effect/dist/react.js\");\n/* harmony import */ var typewriter_effect__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(typewriter_effect__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_components/Header */ \"(app-pages-browser)/./app/_components/Header.jsx\");\n/* provided dependency */ var process = __webpack_require__(/*! process */ \"(app-pages-browser)/./node_modules/next/dist/build/polyfills/process.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nconst Home = ()=>{\n    _s();\n    const [recipe, setRecipe] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [generating, setGenerating] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const getRecipe = async (event)=>{\n        event.preventDefault();\n        // const apiKey = \"fc033e4428deacf92tb6o5f960d83508\";\n        const instructions = event.target.instructions.value;\n        const prompt = \"Provide me with any recipe that contain the following: \".concat(instructions);\n        const context = \"devide text in two parts/paragraphs: ingredients and instructions,  add an emoticon of the dish, include <br/> <br/> before instructions\";\n        const apiUrl = \"https://api.shecodes.io/ai/v1/generate?prompt=\".concat(prompt, \"&context=\").concat(context, \"&key=\").concat(process.env.OPENAI_API_KEY);\n        setGenerating(true);\n        try {\n            const response = await axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].get(apiUrl);\n            setRecipe(response.data.answer);\n        } catch (error) {\n            console.error(\"Error fetching recipe:\", error);\n            setRecipe(\"Error generating recipe.\");\n        } finally{\n            setGenerating(false);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Header__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/joshua/Desktop/Projects/applied-ai/rada-diha-badi-recipe/app/page.jsx\",\n                lineNumber: 35,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"text-center mt-8\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                                onSubmit: getRecipe,\n                                id: \"recipes-generator-form\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        type: \"text\",\n                                        placeholder: \"Type the ingredients...\",\n                                        autoFocus: true,\n                                        required: true,\n                                        className: \"p-2\",\n                                        id: \"user-instructions\",\n                                        name: \"instructions\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/joshua/Desktop/Projects/applied-ai/rada-diha-badi-recipe/app/page.jsx\",\n                                        lineNumber: 39,\n                                        columnNumber: 13\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        type: \"submit\",\n                                        className: \"py-2 px-4 text-lg mt-4\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/joshua/Desktop/Projects/applied-ai/rada-diha-badi-recipe/app/page.jsx\",\n                                        lineNumber: 48,\n                                        columnNumber: 13\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/joshua/Desktop/Projects/applied-ai/rada-diha-badi-recipe/app/page.jsx\",\n                                lineNumber: 38,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"mt-4 text-gray-500\",\n                                children: \"i.e: Tofu, Fish or Chocolate\"\n                            }, void 0, false, {\n                                fileName: \"/Users/joshua/Desktop/Projects/applied-ai/rada-diha-badi-recipe/app/page.jsx\",\n                                lineNumber: 50,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/joshua/Desktop/Projects/applied-ai/rada-diha-badi-recipe/app/page.jsx\",\n                        lineNumber: 37,\n                        columnNumber: 9\n                    }, undefined),\n                    generating ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mt-8\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"text-orange-400\",\n                                children: \"⏳\"\n                            }, void 0, false, {\n                                fileName: \"/Users/joshua/Desktop/Projects/applied-ai/rada-diha-badi-recipe/app/page.jsx\",\n                                lineNumber: 55,\n                                columnNumber: 13\n                            }, undefined),\n                            \" Generating a recipe that includes \",\n                            recipe,\n                            \"..\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/joshua/Desktop/Projects/applied-ai/rada-diha-badi-recipe/app/page.jsx\",\n                        lineNumber: 54,\n                        columnNumber: 11\n                    }, undefined) : recipe && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mt-8\",\n                        id: \"recipe\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((typewriter_effect__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            options: {\n                                strings: recipe,\n                                autoStart: true,\n                                delay: 10\n                            }\n                        }, void 0, false, {\n                            fileName: \"/Users/joshua/Desktop/Projects/applied-ai/rada-diha-badi-recipe/app/page.jsx\",\n                            lineNumber: 61,\n                            columnNumber: 15\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/joshua/Desktop/Projects/applied-ai/rada-diha-badi-recipe/app/page.jsx\",\n                        lineNumber: 60,\n                        columnNumber: 13\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/joshua/Desktop/Projects/applied-ai/rada-diha-badi-recipe/app/page.jsx\",\n                lineNumber: 36,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"footer\", {\n                children: \"FOOTER NI MGA BADI\"\n            }, void 0, false, {\n                fileName: \"/Users/joshua/Desktop/Projects/applied-ai/rada-diha-badi-recipe/app/page.jsx\",\n                lineNumber: 72,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(Home, \"Rc7ty6hNos9T3/efza/fSDtiNMM=\");\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9wYWdlLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUNpQztBQUNQO0FBQ2lCO0FBQ0Q7QUFFMUMsTUFBTUksT0FBTzs7SUFDWCxNQUFNLENBQUNDLFFBQVFDLFVBQVUsR0FBR04sK0NBQVFBLENBQUM7SUFDckMsTUFBTSxDQUFDTyxZQUFZQyxjQUFjLEdBQUdSLCtDQUFRQSxDQUFDO0lBRTdDLE1BQU1TLFlBQVksT0FBT0M7UUFDdkJBLE1BQU1DLGNBQWM7UUFDcEIscURBQXFEO1FBQ3JELE1BQU1DLGVBQWVGLE1BQU1HLE1BQU0sQ0FBQ0QsWUFBWSxDQUFDRSxLQUFLO1FBQ3BELE1BQU1DLFNBQVMsMERBQXVFLE9BQWJIO1FBQ3pFLE1BQU1JLFVBQ0o7UUFDRixNQUFNQyxTQUFTLGlEQUFtRUQsT0FBbEJELFFBQU8sYUFBMEJHLE9BQWZGLFNBQVEsU0FBa0MsT0FBM0JFLE9BQU9BLENBQUNDLEdBQUcsQ0FBQ0MsY0FBYztRQUUzSFosY0FBYztRQUVkLElBQUk7WUFDRixNQUFNYSxXQUFXLE1BQU1wQiw2Q0FBS0EsQ0FBQ3FCLEdBQUcsQ0FBQ0w7WUFDakNYLFVBQVVlLFNBQVNFLElBQUksQ0FBQ0MsTUFBTTtRQUNoQyxFQUFFLE9BQU9DLE9BQU87WUFDZEMsUUFBUUQsS0FBSyxDQUFDLDBCQUEwQkE7WUFDeENuQixVQUFVO1FBQ1osU0FBVTtZQUNSRSxjQUFjO1FBQ2hCO0lBQ0Y7SUFFQSxxQkFDRTs7MEJBQ0UsOERBQUNMLDBEQUFNQTs7Ozs7MEJBQ1AsOERBQUN3Qjs7a0NBQ0MsOERBQUNDO3dCQUFJQyxXQUFVOzswQ0FDYiw4REFBQ0M7Z0NBQUtDLFVBQVV0QjtnQ0FBV3VCLElBQUc7O2tEQUM1Qiw4REFBQ0M7d0NBQ0NDLE1BQUs7d0NBQ0xDLGFBQVk7d0NBQ1pDLFNBQVM7d0NBQ1RDLFFBQVE7d0NBQ1JSLFdBQVU7d0NBQ1ZHLElBQUc7d0NBQ0hNLE1BQUs7Ozs7OztrREFFUCw4REFBQ0w7d0NBQU1DLE1BQUs7d0NBQVNMLFdBQVU7Ozs7Ozs7Ozs7OzswQ0FFakMsOERBQUNEO2dDQUFJQyxXQUFVOzBDQUFxQjs7Ozs7Ozs7Ozs7O29CQUdyQ3RCLDJCQUNDLDhEQUFDcUI7d0JBQUlDLFdBQVU7OzBDQUNiLDhEQUFDVTtnQ0FBS1YsV0FBVTswQ0FBa0I7Ozs7Ozs0QkFBUTs0QkFDaEN4Qjs0QkFBTzs7Ozs7O29DQUduQkEsd0JBQ0UsOERBQUN1Qjt3QkFBSUMsV0FBVTt3QkFBT0csSUFBRztrQ0FDdkIsNEVBQUM5QiwwREFBVUE7NEJBQ1RzQyxTQUFTO2dDQUNQQyxTQUFTcEM7Z0NBQ1RxQyxXQUFXO2dDQUNYQyxPQUFPOzRCQUNUOzs7Ozs7Ozs7Ozs7Ozs7OzswQkFNViw4REFBQ0M7MEJBQU87Ozs7Ozs7O0FBR2Q7R0FwRU14QztLQUFBQTtBQXNFTiwrREFBZUEsSUFBSUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvcGFnZS5qc3g/NmU0MSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgVHlwZXdyaXRlciBmcm9tIFwidHlwZXdyaXRlci1lZmZlY3RcIjtcbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4vX2NvbXBvbmVudHMvSGVhZGVyXCI7XG5cbmNvbnN0IEhvbWUgPSAoKSA9PiB7XG4gIGNvbnN0IFtyZWNpcGUsIHNldFJlY2lwZV0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW2dlbmVyYXRpbmcsIHNldEdlbmVyYXRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGNvbnN0IGdldFJlY2lwZSA9IGFzeW5jIChldmVudCkgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgLy8gY29uc3QgYXBpS2V5ID0gXCJmYzAzM2U0NDI4ZGVhY2Y5MnRiNm81Zjk2MGQ4MzUwOFwiO1xuICAgIGNvbnN0IGluc3RydWN0aW9ucyA9IGV2ZW50LnRhcmdldC5pbnN0cnVjdGlvbnMudmFsdWU7XG4gICAgY29uc3QgcHJvbXB0ID0gYFByb3ZpZGUgbWUgd2l0aCBhbnkgcmVjaXBlIHRoYXQgY29udGFpbiB0aGUgZm9sbG93aW5nOiAke2luc3RydWN0aW9uc31gO1xuICAgIGNvbnN0IGNvbnRleHQgPVxuICAgICAgXCJkZXZpZGUgdGV4dCBpbiB0d28gcGFydHMvcGFyYWdyYXBoczogaW5ncmVkaWVudHMgYW5kIGluc3RydWN0aW9ucywgIGFkZCBhbiBlbW90aWNvbiBvZiB0aGUgZGlzaCwgaW5jbHVkZSA8YnIvPiA8YnIvPiBiZWZvcmUgaW5zdHJ1Y3Rpb25zXCI7XG4gICAgY29uc3QgYXBpVXJsID0gYGh0dHBzOi8vYXBpLnNoZWNvZGVzLmlvL2FpL3YxL2dlbmVyYXRlP3Byb21wdD0ke3Byb21wdH0mY29udGV4dD0ke2NvbnRleHR9JmtleT0ke3Byb2Nlc3MuZW52Lk9QRU5BSV9BUElfS0VZfWA7XG5cbiAgICBzZXRHZW5lcmF0aW5nKHRydWUpO1xuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KGFwaVVybCk7XG4gICAgICBzZXRSZWNpcGUocmVzcG9uc2UuZGF0YS5hbnN3ZXIpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZmV0Y2hpbmcgcmVjaXBlOlwiLCBlcnJvcik7XG4gICAgICBzZXRSZWNpcGUoXCJFcnJvciBnZW5lcmF0aW5nIHJlY2lwZS5cIik7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHNldEdlbmVyYXRpbmcoZmFsc2UpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SGVhZGVyIC8+XG4gICAgICA8bWFpbj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBtdC04XCI+XG4gICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2dldFJlY2lwZX0gaWQ9XCJyZWNpcGVzLWdlbmVyYXRvci1mb3JtXCI+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlR5cGUgdGhlIGluZ3JlZGllbnRzLi4uXCJcbiAgICAgICAgICAgICAgYXV0b0ZvY3VzXG4gICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInAtMlwiXG4gICAgICAgICAgICAgIGlkPVwidXNlci1pbnN0cnVjdGlvbnNcIlxuICAgICAgICAgICAgICBuYW1lPVwiaW5zdHJ1Y3Rpb25zXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT1cInB5LTIgcHgtNCB0ZXh0LWxnIG10LTRcIiAvPlxuICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTQgdGV4dC1ncmF5LTUwMFwiPmkuZTogVG9mdSwgRmlzaCBvciBDaG9jb2xhdGU8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAge2dlbmVyYXRpbmcgPyAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC04XCI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LW9yYW5nZS00MDBcIj7ij7M8L3NwYW4+IEdlbmVyYXRpbmcgYSByZWNpcGUgdGhhdFxuICAgICAgICAgICAgaW5jbHVkZXMge3JlY2lwZX0uLlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApIDogKFxuICAgICAgICAgIHJlY2lwZSAmJiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LThcIiBpZD1cInJlY2lwZVwiPlxuICAgICAgICAgICAgICA8VHlwZXdyaXRlclxuICAgICAgICAgICAgICAgIG9wdGlvbnM9e3tcbiAgICAgICAgICAgICAgICAgIHN0cmluZ3M6IHJlY2lwZSxcbiAgICAgICAgICAgICAgICAgIGF1dG9TdGFydDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgIGRlbGF5OiAxMCxcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKVxuICAgICAgICApfVxuICAgICAgPC9tYWluPlxuICAgICAgPGZvb3Rlcj5GT09URVIgTkkgTUdBIEJBREk8L2Zvb3Rlcj5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWU7XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJheGlvcyIsIlR5cGV3cml0ZXIiLCJIZWFkZXIiLCJIb21lIiwicmVjaXBlIiwic2V0UmVjaXBlIiwiZ2VuZXJhdGluZyIsInNldEdlbmVyYXRpbmciLCJnZXRSZWNpcGUiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiaW5zdHJ1Y3Rpb25zIiwidGFyZ2V0IiwidmFsdWUiLCJwcm9tcHQiLCJjb250ZXh0IiwiYXBpVXJsIiwicHJvY2VzcyIsImVudiIsIk9QRU5BSV9BUElfS0VZIiwicmVzcG9uc2UiLCJnZXQiLCJkYXRhIiwiYW5zd2VyIiwiZXJyb3IiLCJjb25zb2xlIiwibWFpbiIsImRpdiIsImNsYXNzTmFtZSIsImZvcm0iLCJvblN1Ym1pdCIsImlkIiwiaW5wdXQiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJhdXRvRm9jdXMiLCJyZXF1aXJlZCIsIm5hbWUiLCJzcGFuIiwib3B0aW9ucyIsInN0cmluZ3MiLCJhdXRvU3RhcnQiLCJkZWxheSIsImZvb3RlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/page.jsx\n"));

/***/ })

});