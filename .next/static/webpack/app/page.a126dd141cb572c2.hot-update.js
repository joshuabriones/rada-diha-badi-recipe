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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var typewriter_effect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! typewriter-effect */ \"(app-pages-browser)/./node_modules/typewriter-effect/dist/react.js\");\n/* harmony import */ var typewriter_effect__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(typewriter_effect__WEBPACK_IMPORTED_MODULE_2__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nconst Home = ()=>{\n    _s();\n    const [recipe, setRecipe] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [generating, setGenerating] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const getRecipe = async (event)=>{\n        event.preventDefault();\n        const apiKey = \"fc033e4428deacf92tb6o5f960d83508\";\n        const instructions = event.target.instructions.value;\n        const prompt = \"Provide me with any recipe that contain the following: \".concat(instructions);\n        const context = \"devide text in two parts/paragraphs: ingredients and instructions,  add an emoticon of the dish, include <br/> <br/> before instructions\";\n        const apiUrl = \"https://api.shecodes.io/ai/v1/generate?prompt=\".concat(prompt, \"&context=\").concat(context, \"&key=\").concat(apiKey);\n        setGenerating(true);\n        try {\n            const response = await axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get(apiUrl);\n            setRecipe(response.data.answer);\n        } catch (error) {\n            console.error(\"Error fetching recipe:\", error);\n            setRecipe(\"Error generating recipe.\");\n        } finally{\n            setGenerating(false);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"\",\n                        children: \"Welcome to:\"\n                    }, void 0, false, {\n                        fileName: \"/Users/joshua/Desktop/Projects/applied-ai/rada-diha-badi-recipe/app/page.jsx\",\n                        lineNumber: 36,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"/Users/joshua/Desktop/Projects/applied-ai/rada-diha-badi-recipe/app/page.jsx\",\n                        lineNumber: 37,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"\",\n                        children: \"AI recipes generator\"\n                    }, void 0, false, {\n                        fileName: \"/Users/joshua/Desktop/Projects/applied-ai/rada-diha-badi-recipe/app/page.jsx\",\n                        lineNumber: 38,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/joshua/Desktop/Projects/applied-ai/rada-diha-badi-recipe/app/page.jsx\",\n                lineNumber: 35,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/Users/joshua/Desktop/Projects/applied-ai/rada-diha-badi-recipe/app/page.jsx\",\n            lineNumber: 34,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/joshua/Desktop/Projects/applied-ai/rada-diha-badi-recipe/app/page.jsx\",\n        lineNumber: 33,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Home, \"Rc7ty6hNos9T3/efza/fSDtiNMM=\");\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9wYWdlLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDaUM7QUFDUDtBQUNpQjtBQUUzQyxNQUFNRyxPQUFPOztJQUNYLE1BQU0sQ0FBQ0MsUUFBUUMsVUFBVSxHQUFHTCwrQ0FBUUEsQ0FBQztJQUNyQyxNQUFNLENBQUNNLFlBQVlDLGNBQWMsR0FBR1AsK0NBQVFBLENBQUM7SUFFN0MsTUFBTVEsWUFBWSxPQUFPQztRQUN2QkEsTUFBTUMsY0FBYztRQUNwQixNQUFNQyxTQUFTO1FBQ2YsTUFBTUMsZUFBZUgsTUFBTUksTUFBTSxDQUFDRCxZQUFZLENBQUNFLEtBQUs7UUFDcEQsTUFBTUMsU0FBUywwREFBdUUsT0FBYkg7UUFDekUsTUFBTUksVUFDSjtRQUNGLE1BQU1DLFNBQVMsaURBQW1FRCxPQUFsQkQsUUFBTyxhQUEwQkosT0FBZkssU0FBUSxTQUFjLE9BQVBMO1FBRWpHSixjQUFjO1FBRWQsSUFBSTtZQUNGLE1BQU1XLFdBQVcsTUFBTWpCLDZDQUFLQSxDQUFDa0IsR0FBRyxDQUFDRjtZQUNqQ1osVUFBVWEsU0FBU0UsSUFBSSxDQUFDQyxNQUFNO1FBQ2hDLEVBQUUsT0FBT0MsT0FBTztZQUNkQyxRQUFRRCxLQUFLLENBQUMsMEJBQTBCQTtZQUN4Q2pCLFVBQVU7UUFDWixTQUFVO1lBQ1JFLGNBQWM7UUFDaEI7SUFDRjtJQUVBLHFCQUNFLDhEQUFDaUI7a0JBQ0MsNEVBQUNDO3NCQUNDLDRFQUFDQzs7a0NBQ0MsOERBQUNDO3dCQUFLQyxXQUFVO2tDQUFHOzs7Ozs7a0NBQ25CLDhEQUFDQzs7Ozs7a0NBQ0QsOERBQUNGO3dCQUFLQyxXQUFVO2tDQUFHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBMEM3QjtHQTFFTXpCO0tBQUFBO0FBNEVOLCtEQUFlQSxJQUFJQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9wYWdlLmpzeD82ZTQxIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCBUeXBld3JpdGVyIGZyb20gXCJ0eXBld3JpdGVyLWVmZmVjdFwiO1xuXG5jb25zdCBIb21lID0gKCkgPT4ge1xuICBjb25zdCBbcmVjaXBlLCBzZXRSZWNpcGVdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtnZW5lcmF0aW5nLCBzZXRHZW5lcmF0aW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCBnZXRSZWNpcGUgPSBhc3luYyAoZXZlbnQpID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IGFwaUtleSA9IFwiZmMwMzNlNDQyOGRlYWNmOTJ0YjZvNWY5NjBkODM1MDhcIjtcbiAgICBjb25zdCBpbnN0cnVjdGlvbnMgPSBldmVudC50YXJnZXQuaW5zdHJ1Y3Rpb25zLnZhbHVlO1xuICAgIGNvbnN0IHByb21wdCA9IGBQcm92aWRlIG1lIHdpdGggYW55IHJlY2lwZSB0aGF0IGNvbnRhaW4gdGhlIGZvbGxvd2luZzogJHtpbnN0cnVjdGlvbnN9YDtcbiAgICBjb25zdCBjb250ZXh0ID1cbiAgICAgIFwiZGV2aWRlIHRleHQgaW4gdHdvIHBhcnRzL3BhcmFncmFwaHM6IGluZ3JlZGllbnRzIGFuZCBpbnN0cnVjdGlvbnMsICBhZGQgYW4gZW1vdGljb24gb2YgdGhlIGRpc2gsIGluY2x1ZGUgPGJyLz4gPGJyLz4gYmVmb3JlIGluc3RydWN0aW9uc1wiO1xuICAgIGNvbnN0IGFwaVVybCA9IGBodHRwczovL2FwaS5zaGVjb2Rlcy5pby9haS92MS9nZW5lcmF0ZT9wcm9tcHQ9JHtwcm9tcHR9JmNvbnRleHQ9JHtjb250ZXh0fSZrZXk9JHthcGlLZXl9YDtcblxuICAgIHNldEdlbmVyYXRpbmcodHJ1ZSk7XG5cbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoYXBpVXJsKTtcbiAgICAgIHNldFJlY2lwZShyZXNwb25zZS5kYXRhLmFuc3dlcik7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBmZXRjaGluZyByZWNpcGU6XCIsIGVycm9yKTtcbiAgICAgIHNldFJlY2lwZShcIkVycm9yIGdlbmVyYXRpbmcgcmVjaXBlLlwiKTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgc2V0R2VuZXJhdGluZyhmYWxzZSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxoZWFkZXI+XG4gICAgICAgIDxoMT5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJcIj5XZWxjb21lIHRvOjwvc3Bhbj5cbiAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJcIj5BSSByZWNpcGVzIGdlbmVyYXRvcjwvc3Bhbj5cbiAgICAgICAgPC9oMT5cbiAgICAgIDwvaGVhZGVyPlxuICAgICAgey8qIDxtYWluPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyIG10LThcIj5cbiAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17Z2V0UmVjaXBlfSBpZD1cInJlY2lwZXMtZ2VuZXJhdG9yLWZvcm1cIj5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiVHlwZSB0aGUgaW5ncmVkaWVudHMuLi5cIlxuICAgICAgICAgICAgICBhdXRvRm9jdXNcbiAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicC0yXCJcbiAgICAgICAgICAgICAgaWQ9XCJ1c2VyLWluc3RydWN0aW9uc1wiXG4gICAgICAgICAgICAgIG5hbWU9XCJpbnN0cnVjdGlvbnNcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPVwicHktMiBweC00IHRleHQtbGcgbXQtNFwiIC8+XG4gICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtNCB0ZXh0LWdyYXktNTAwXCI+aS5lOiBUb2Z1LCBGaXNoIG9yIENob2NvbGF0ZTwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICB7Z2VuZXJhdGluZyA/IChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LThcIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtb3JhbmdlLTQwMFwiPuKPszwvc3Bhbj4gR2VuZXJhdGluZyBhIHJlY2lwZSB0aGF0XG4gICAgICAgICAgICBpbmNsdWRlcyB7cmVjaXBlfS4uXG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgcmVjaXBlICYmIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtOFwiIGlkPVwicmVjaXBlXCI+XG4gICAgICAgICAgICAgIDxUeXBld3JpdGVyXG4gICAgICAgICAgICAgICAgb3B0aW9ucz17e1xuICAgICAgICAgICAgICAgICAgc3RyaW5nczogcmVjaXBlLFxuICAgICAgICAgICAgICAgICAgYXV0b1N0YXJ0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgZGVsYXk6IDEwLFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApXG4gICAgICAgICl9XG4gICAgICA8L21haW4+XG4gICAgICA8Zm9vdGVyPkZPT1RFUiBOSSBNR0EgQkFESTwvZm9vdGVyPiAqL31cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWU7XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJheGlvcyIsIlR5cGV3cml0ZXIiLCJIb21lIiwicmVjaXBlIiwic2V0UmVjaXBlIiwiZ2VuZXJhdGluZyIsInNldEdlbmVyYXRpbmciLCJnZXRSZWNpcGUiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiYXBpS2V5IiwiaW5zdHJ1Y3Rpb25zIiwidGFyZ2V0IiwidmFsdWUiLCJwcm9tcHQiLCJjb250ZXh0IiwiYXBpVXJsIiwicmVzcG9uc2UiLCJnZXQiLCJkYXRhIiwiYW5zd2VyIiwiZXJyb3IiLCJjb25zb2xlIiwiZGl2IiwiaGVhZGVyIiwiaDEiLCJzcGFuIiwiY2xhc3NOYW1lIiwiYnIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/page.jsx\n"));

/***/ })

});