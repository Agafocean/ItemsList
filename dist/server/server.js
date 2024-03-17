/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/server/server.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\n/*\r\n  MIT License http://www.opensource.org/licenses/mit-license.php\r\n  Author Tobias Koppers @sokra\r\n*/\r\n// css base code, injected by the css-loader\r\n// eslint-disable-next-line func-names\r\nmodule.exports = function (useSourceMap) {\r\n    var list = []; // return the list of modules as css string\r\n    list.toString = function toString() {\r\n        return this.map(function (item) {\r\n            var content = cssWithMappingToString(item, useSourceMap);\r\n            if (item[2]) {\r\n                return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\r\n            }\r\n            return content;\r\n        }).join('');\r\n    }; // import a list of modules into the list\r\n    // eslint-disable-next-line func-names\r\n    list.i = function (modules, mediaQuery, dedupe) {\r\n        if (typeof modules === 'string') {\r\n            // eslint-disable-next-line no-param-reassign\r\n            modules = [[null, modules, '']];\r\n        }\r\n        var alreadyImportedModules = {};\r\n        if (dedupe) {\r\n            for (var i = 0; i < this.length; i++) {\r\n                // eslint-disable-next-line prefer-destructuring\r\n                var id = this[i][0];\r\n                if (id != null) {\r\n                    alreadyImportedModules[id] = true;\r\n                }\r\n            }\r\n        }\r\n        for (var _i = 0; _i < modules.length; _i++) {\r\n            var item = [].concat(modules[_i]);\r\n            if (dedupe && alreadyImportedModules[item[0]]) {\r\n                // eslint-disable-next-line no-continue\r\n                continue;\r\n            }\r\n            if (mediaQuery) {\r\n                if (!item[2]) {\r\n                    item[2] = mediaQuery;\r\n                }\r\n                else {\r\n                    item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\r\n                }\r\n            }\r\n            list.push(item);\r\n        }\r\n    };\r\n    return list;\r\n};\r\nfunction cssWithMappingToString(item, useSourceMap) {\r\n    var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\r\n    var cssMapping = item[3];\r\n    if (!cssMapping) {\r\n        return content;\r\n    }\r\n    if (useSourceMap && typeof btoa === 'function') {\r\n        var sourceMapping = toComment(cssMapping);\r\n        var sourceURLs = cssMapping.sources.map(function (source) {\r\n            return \"/*# sourceURL=\".concat(cssMapping.sourceRoot || '').concat(source, \" */\");\r\n        });\r\n        return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\r\n    }\r\n    return [content].join('\\n');\r\n} // Adapted from convert-source-map (MIT)\r\nfunction toComment(sourceMap) {\r\n    // eslint-disable-next-line no-undef\r\n    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\r\n    var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\r\n    return \"/*# \".concat(data, \" */\");\r\n}\r\n\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./src/App.tsx":
/*!*********************!*\
  !*** ./src/App.tsx ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.App = void 0;\r\nconst react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\n__webpack_require__(/*! ./main.global.css */ \"./src/main.global.css\");\r\nconst root_1 = __webpack_require__(/*! react-hot-loader/root */ \"react-hot-loader/root\");\r\nconst redux_1 = __webpack_require__(/*! redux */ \"redux\");\r\nconst react_redux_1 = __webpack_require__(/*! react-redux */ \"react-redux\");\r\nconst redux_devtools_extension_1 = __webpack_require__(/*! redux-devtools-extension */ \"redux-devtools-extension\");\r\nconst reducer_1 = __webpack_require__(/*! ./store/reducer */ \"./src/store/reducer.ts\");\r\nconst Layout_1 = __webpack_require__(/*! ./shared/Layout/Layout */ \"./src/shared/Layout/Layout.tsx\");\r\nconst store = (0, redux_1.createStore)(reducer_1.rootReducer, (0, redux_devtools_extension_1.composeWithDevTools)());\r\nfunction AppComponent() {\r\n    return (react_1.default.createElement(react_redux_1.Provider, { store: store },\r\n        react_1.default.createElement(Layout_1.Layout, null)));\r\n}\r\nexports.App = (0, root_1.hot)(() => react_1.default.createElement(AppComponent, null));\r\n\n\n//# sourceURL=webpack:///./src/App.tsx?");

/***/ }),

/***/ "./src/main.global.css":
/*!*****************************!*\
  !*** ./src/main.global.css ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\nexports.push([module.i, \"@import url(https://fonts.googleapis.com/css2?family=Roboto&display=swap);\"]);\n// Module\nexports.push([module.i, \":root {\\n  --black:          #333333;\\n  --orange:         #CC6633;\\n  --green:          #A4CC33;\\n  --whiteLightness: 100%;\\n  --white:          hsl(0, 0%, var(--whiteLightness));\\n  --grayF4:         hsl(0, 0%, calc(var(--whiteLightness) - 4%));\\n  --greyF3:         hsl(0, 0%, calc(var(--whiteLightness) - 5%));\\n  --greyEC:         hsl(0, 0%, calc(var(--whiteLightness) - 7%));\\n  --greyD9:         hsl(0, 0%, calc(var(--whiteLightness) - 15%));\\n  --greyC4:         hsl(0, 0%, calc(var(--whiteLightness) - 23%));\\n  --grey99:         hsl(0, 0%, calc(var(--whiteLightness) - 40%));\\n  --grey66:         hsl(0, 0%, calc(var(--whiteLightness) - 60%));\\n}\\n\\nbody {  \\n  padding: 0;\\n  margin: 0;\\n  background-color: var(--grayF4);\\n  font-size: 14px;\\n  line-height: 16px;\\n  font-family: 'Roboto', serif;\\n}\\n\\n* {\\n  color: var(--black);\\n  box-sizing: border-box;\\n  -webkit-font-smoothing: antialiased;\\n  -moz-osx-font-smoothing: grayscale;\\n}\\n\\nul {\\n  margin: 0;\\n  padding: 0;\\n  list-style: none;\\n}\\n\\na {\\n  text-decoration: none;\\n}\\n\\nbutton {\\n  padding: 0;\\n  border: 0;\\n  background: transparent;\\n  cursor: pointer;\\n}\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/main.global.css?");

/***/ }),

/***/ "./src/server/indexTemplate.js":
/*!*************************************!*\
  !*** ./src/server/indexTemplate.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.indexTemplate = void 0;\r\nconst indexTemplate = (content) => `\r\n<!DOCTYPE html>\r\n<html lang=\"en\">\r\n<head>\r\n    <meta charset=\"UTF-8\">\r\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\r\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">       \r\n    <title>Reddit</title>    \r\n</head>\r\n<body>\r\n    <div id=\"react_root\">${content}</div>   \r\n    <script defer src=\"/static/client.js\" type=\"application/javascript\"></script>    \r\n</body>\r\n</html> `;\r\nexports.indexTemplate = indexTemplate;\r\n\n\n//# sourceURL=webpack:///./src/server/indexTemplate.js?");

/***/ }),

/***/ "./src/server/server.js":
/*!******************************!*\
  !*** ./src/server/server.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst express_1 = __importDefault(__webpack_require__(/*! express */ \"express\"));\r\nconst server_1 = __importDefault(__webpack_require__(/*! react-dom/server */ \"react-dom/server\"));\r\nconst App_1 = __webpack_require__(/*! ../App */ \"./src/App.tsx\");\r\nconst indexTemplate_1 = __webpack_require__(/*! ./indexTemplate */ \"./src/server/indexTemplate.js\");\r\nconst app = (0, express_1.default)();\r\napp.use('/static', express_1.default.static('./dist/client'));\r\napp.get('*', (req, res) => {\r\n    res.send((0, indexTemplate_1.indexTemplate)(server_1.default.renderToString((0, App_1.App)())));\r\n});\r\napp.listen(3000, () => {\r\n    console.log('Server started on http://localhost:3000');\r\n});\r\n\n\n//# sourceURL=webpack:///./src/server/server.js?");

/***/ }),

/***/ "./src/shared/ItemsList/ItemsListF.tsx":
/*!*********************************************!*\
  !*** ./src/shared/ItemsList/ItemsListF.tsx ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.ItemsListF = void 0;\r\nconst react_1 = __importStar(__webpack_require__(/*! react */ \"react\"));\r\nconst itemslist_css_1 = __importDefault(__webpack_require__(/*! ./itemslist.css */ \"./src/shared/ItemsList/itemslist.css\"));\r\nconst GetItems_1 = __webpack_require__(/*! ../api/GetItems */ \"./src/shared/api/GetItems.ts\");\r\nconst GetFilter_1 = __webpack_require__(/*! ../api/GetFilter */ \"./src/shared/api/GetFilter.ts\");\r\nconst react_redux_1 = __webpack_require__(/*! react-redux */ \"react-redux\");\r\nconst reducer_1 = __webpack_require__(/*! ../../store/reducer */ \"./src/store/reducer.ts\");\r\nconst md5 = __webpack_require__(/*! md5 */ \"md5\");\r\nconst eventChange = new Event('change');\r\nfunction ItemsListF() {\r\n    // если filtering = false переходим в компоненту itemsListM для работы без фильтров\r\n    const filtering = (0, react_redux_1.useSelector)(state => state.filtering);\r\n    const filters = (0, react_redux_1.useSelector)(state => state.filters);\r\n    const dispatch = (0, react_redux_1.useDispatch)();\r\n    // после первого прохода делаем init = false\r\n    const [init, setInit] = (0, react_1.useState)(true);\r\n    // включение-выключение сообщения об ожидании ответа API\r\n    const [loading, setLoading] = (0, react_1.useState)(false);\r\n    // включение-выключение кнопок: следующие 50 и предыдущие 50\r\n    const [loadingButtonDown, setLoadingButtonDown] = (0, react_1.useState)(false);\r\n    const [loadingButtonUp, setLoadingButtonUp] = (0, react_1.useState)(false);\r\n    const filterProduct = (0, react_1.useRef)(null);\r\n    const filterPrice = (0, react_1.useRef)(null);\r\n    const filterBrand = (0, react_1.useRef)(null);\r\n    // если loadMore = true, то загружаем порцию данных по API\r\n    const [loadMore, setLoadMore] = (0, react_1.useState)(true);\r\n    // loadMoreN это (номер показываемой страницы) - 1\r\n    const [loadMoreN, setLoadMoreN] = (0, react_1.useState)(0);\r\n    // общее число страниц\r\n    const [numberOfPages, setNumberOfPages] = (0, react_1.useState)(1);\r\n    const todayDate = new Date().toISOString().slice(0, 10).replace(/-/g, '');\r\n    const password = md5(`Valantis_${todayDate}`);\r\n    const itemsOnPage = 50;\r\n    // данные из items рендерятся на текущую страницу\r\n    const [items, setItems] = (0, react_1.useState)([]);\r\n    // в postItems накапливаем загруженные в items данные\r\n    const [postItems, setPostItems] = (0, react_1.useState)([]);\r\n    let productF = filters.product;\r\n    let priceF = filters.price;\r\n    let brandF = filters.brand;\r\n    let listFilter = [];\r\n    let listFilterProduct = [];\r\n    let listFilterPrice = [];\r\n    let listFilterBrand = [];\r\n    function clickLoadDown() {\r\n        if (loadMoreN + 1 < numberOfPages) {\r\n            setLoadMoreN(loadMoreN + 1);\r\n            setItems(postItems.slice((loadMoreN + 1) * itemsOnPage, ((loadMoreN + 1) * itemsOnPage) + itemsOnPage));\r\n            scroll(0, 0);\r\n            if (loadMoreN + 1 === numberOfPages - 1) {\r\n                setLoadingButtonDown(false);\r\n            }\r\n        }\r\n    }\r\n    function clickLoadUp() {\r\n        setLoadMoreN(loadMoreN - 1);\r\n        setItems(postItems.slice((loadMoreN - 1) * itemsOnPage, ((loadMoreN - 1) * itemsOnPage) + itemsOnPage));\r\n        setLoadingButtonDown(true);\r\n    }\r\n    // переключение на компоненту itemsListM для работы без фильтров\r\n    function switchComponent() {\r\n        var _a, _b, _c;\r\n        if (((_a = filterProduct.current) === null || _a === void 0 ? void 0 : _a.value.trim()) === '' &&\r\n            ((_b = filterPrice.current) === null || _b === void 0 ? void 0 : _b.value) === '' &&\r\n            ((_c = filterBrand.current) === null || _c === void 0 ? void 0 : _c.value.trim()) === '') {\r\n            dispatch((0, reducer_1.saveFilters)({ product: '', price: '', brand: '' }));\r\n            dispatch((0, reducer_1.saveFiltering)(false));\r\n            return true;\r\n        }\r\n        else\r\n            return false;\r\n    }\r\n    (0, react_1.useEffect)(() => {\r\n        var _a, _b, _c;\r\n        let temp = filterProduct.current;\r\n        if (temp && productF) {\r\n            temp.value = productF;\r\n        }\r\n        ;\r\n        temp = filterPrice.current;\r\n        if (temp && priceF) {\r\n            temp.value = priceF;\r\n        }\r\n        ;\r\n        temp = filterBrand.current;\r\n        if (temp && brandF) {\r\n            temp.value = brandF;\r\n        }\r\n        ;\r\n        // при первом проходе имитируем ввод полученных через redux store фильтров\r\n        if (init && productF !== '') {\r\n            (_a = filterProduct.current) === null || _a === void 0 ? void 0 : _a.dispatchEvent(eventChange);\r\n        }\r\n        if (init && priceF !== '') {\r\n            (_b = filterPrice.current) === null || _b === void 0 ? void 0 : _b.dispatchEvent(eventChange);\r\n        }\r\n        if (init && brandF !== '') {\r\n            (_c = filterBrand.current) === null || _c === void 0 ? void 0 : _c.dispatchEvent(eventChange);\r\n        }\r\n    }, [productF, priceF, brandF]);\r\n    (0, react_1.useEffect)(() => {\r\n        var _a, _b, _c;\r\n        // если изменился product\r\n        function filterProductFunc() {\r\n            var _a;\r\n            return __awaiter(this, void 0, void 0, function* () {\r\n                if (!switchComponent()) {\r\n                    productF = (_a = filterProduct.current) === null || _a === void 0 ? void 0 : _a.value.trim();\r\n                    listFilterProduct = yield (0, GetFilter_1.GetFilter)(password, { \"product\": productF });\r\n                    setLoadMore(true);\r\n                    loadF();\r\n                    setInit(false);\r\n                }\r\n            });\r\n        }\r\n        // если изменился price\r\n        function filterPriceFunc() {\r\n            var _a;\r\n            return __awaiter(this, void 0, void 0, function* () {\r\n                if (!switchComponent()) {\r\n                    priceF = (_a = filterPrice.current) === null || _a === void 0 ? void 0 : _a.value;\r\n                    listFilterPrice = yield (0, GetFilter_1.GetFilter)(password, { \"price\": Number(priceF) });\r\n                    setLoadMore(true);\r\n                    loadF();\r\n                    setInit(false);\r\n                }\r\n            });\r\n        }\r\n        // если изменился brand\r\n        function filterBrandFunc() {\r\n            var _a;\r\n            return __awaiter(this, void 0, void 0, function* () {\r\n                if (!switchComponent()) {\r\n                    brandF = (_a = filterBrand.current) === null || _a === void 0 ? void 0 : _a.value.trim();\r\n                    listFilterBrand = yield (0, GetFilter_1.GetFilter)(password, { \"brand\": brandF });\r\n                    setLoadMore(true);\r\n                    loadF();\r\n                    setInit(false);\r\n                }\r\n            });\r\n        }\r\n        (_a = filterProduct.current) === null || _a === void 0 ? void 0 : _a.addEventListener('change', filterProductFunc);\r\n        (_b = filterPrice.current) === null || _b === void 0 ? void 0 : _b.addEventListener('change', filterPriceFunc);\r\n        (_c = filterBrand.current) === null || _c === void 0 ? void 0 : _c.addEventListener('change', filterBrandFunc);\r\n        function loadF() {\r\n            return __awaiter(this, void 0, void 0, function* () {\r\n                const itemsTemp = [];\r\n                listFilter = [];\r\n                setLoadMoreN(0);\r\n                setItems([]);\r\n                setLoadingButtonDown(false);\r\n                setLoadingButtonUp(false);\r\n                if (loadMore && (productF !== '' || priceF !== '' || brandF !== '')) {\r\n                    setLoading(true);\r\n                    setLoadMore(false);\r\n                    // формируем массив данных с учетом всех фильтров\r\n                    if (productF !== \"\") {\r\n                        listFilter = listFilterProduct;\r\n                    }\r\n                    ;\r\n                    if (priceF !== '') {\r\n                        listFilter = listFilterPrice;\r\n                    }\r\n                    ;\r\n                    if (brandF !== \"\") {\r\n                        listFilter = listFilterBrand;\r\n                    }\r\n                    ;\r\n                    if (productF !== \"\") {\r\n                        listFilter = listFilter.filter(x => listFilterProduct.includes(x));\r\n                    }\r\n                    if (priceF !== '') {\r\n                        listFilter = listFilter.filter(x => listFilterPrice.includes(x));\r\n                    }\r\n                    if (brandF !== \"\") {\r\n                        listFilter = listFilter.filter(x => listFilterBrand.includes(x));\r\n                    }\r\n                    if (listFilter.length > 0) {\r\n                        const listItemsFilter = yield (0, GetItems_1.GetItems)(password, listFilter);\r\n                        let j = 0;\r\n                        for (let i = 0; i < listItemsFilter.length; i++) {\r\n                            if ((listItemsFilter[i].product.includes(productF) || productF === \"\") &&\r\n                                (listItemsFilter[i].price === Number(priceF) || priceF === '') &&\r\n                                (listItemsFilter[i].brand === brandF || brandF === \"\")) {\r\n                                j = i;\r\n                                break;\r\n                            }\r\n                        }\r\n                        ;\r\n                        itemsTemp.push(listItemsFilter[j]);\r\n                        for (let i = j + 1; i < listItemsFilter.length; i++) {\r\n                            if ((listItemsFilter[i].product.includes(productF) || productF === \"\") &&\r\n                                (listItemsFilter[i].price === Number(priceF) || priceF === '') &&\r\n                                (listItemsFilter[i].brand === brandF || brandF === \"\")) {\r\n                                if (listItemsFilter[i].id !== listItemsFilter[i - 1].id) {\r\n                                    itemsTemp.push(listItemsFilter[i]);\r\n                                }\r\n                            }\r\n                        }\r\n                        ;\r\n                    }\r\n                    ;\r\n                    setLoading(false);\r\n                    setItems(itemsTemp.slice(0, itemsOnPage));\r\n                    setPostItems(itemsTemp);\r\n                    setNumberOfPages(Math.ceil(itemsTemp.length / itemsOnPage));\r\n                    if (itemsTemp.length > itemsOnPage) {\r\n                        setLoadingButtonDown(true);\r\n                        setLoadingButtonUp(true);\r\n                    }\r\n                }\r\n            });\r\n        }\r\n        ;\r\n    }, []);\r\n    return (react_1.default.createElement(\"div\", { className: itemslist_css_1.default.itemsList },\r\n        react_1.default.createElement(\"div\", { className: itemslist_css_1.default.titleList },\r\n            react_1.default.createElement(\"p\", { className: itemslist_css_1.default.num }, \"\\u25BC\"),\r\n            react_1.default.createElement(\"input\", { type: \"text\", name: \"\", className: itemslist_css_1.default.id, disabled: true }),\r\n            react_1.default.createElement(\"input\", { type: \"text\", name: \"\", className: itemslist_css_1.default.prod, ref: filterProduct }),\r\n            react_1.default.createElement(\"input\", { type: \"number\", name: \"\", min: \"0\", className: itemslist_css_1.default.price, ref: filterPrice }),\r\n            react_1.default.createElement(\"input\", { type: \"text\", name: \"\", className: itemslist_css_1.default.brand, ref: filterBrand })),\r\n        react_1.default.createElement(\"div\", { className: itemslist_css_1.default.titleList },\r\n            react_1.default.createElement(\"h3\", { className: itemslist_css_1.default.num }, \"N\"),\r\n            react_1.default.createElement(\"h3\", { className: itemslist_css_1.default.id }, \"ID\"),\r\n            react_1.default.createElement(\"h3\", { className: itemslist_css_1.default.prod }, \"PRODUCT\"),\r\n            react_1.default.createElement(\"h3\", { className: itemslist_css_1.default.price }, \"PRICE\"),\r\n            react_1.default.createElement(\"h3\", { className: itemslist_css_1.default.brand }, \"BRAND\")),\r\n        loadingButtonUp && loadMoreN !== 0 && react_1.default.createElement(\"div\", { style: { textAlign: 'center' } },\r\n            react_1.default.createElement(\"button\", { style: { padding: '10px 30px', border: '1px', color: 'white', backgroundColor: 'grey' }, onClick: clickLoadUp }, \"Previous page\")),\r\n        react_1.default.createElement(\"ul\", null,\r\n            items.length === 0 && !loading && !init &&\r\n                react_1.default.createElement(\"div\", { style: { textAlign: 'center' } }, \"\\u041D\\u0435\\u0442 \\u043D\\u0438 \\u043E\\u0434\\u043D\\u043E\\u0433\\u043E \\u0442\\u043E\\u0432\\u0430\\u0440\\u0430\"),\r\n            items.map((item, index) => react_1.default.createElement(\"li\", { className: itemslist_css_1.default.itemsLine, key: index },\r\n                react_1.default.createElement(\"p\", { className: itemslist_css_1.default.num }, index + 1 + itemsOnPage * loadMoreN),\r\n                react_1.default.createElement(\"p\", { className: itemslist_css_1.default.id }, item.id),\r\n                react_1.default.createElement(\"p\", { className: itemslist_css_1.default.prod }, item.product),\r\n                react_1.default.createElement(\"p\", { className: itemslist_css_1.default.price }, item.price),\r\n                react_1.default.createElement(\"p\", { className: itemslist_css_1.default.brand }, item.brand))),\r\n            loading && react_1.default.createElement(\"div\", { className: itemslist_css_1.default.preloader }),\r\n            loadingButtonDown && react_1.default.createElement(\"div\", { style: { textAlign: 'center' } },\r\n                react_1.default.createElement(\"button\", { style: { padding: '10px 30px', border: '1px', color: 'white', backgroundColor: 'grey' }, onClick: clickLoadDown }, \"Next page\"))),\r\n        \" \"));\r\n}\r\nexports.ItemsListF = ItemsListF;\r\n\n\n//# sourceURL=webpack:///./src/shared/ItemsList/ItemsListF.tsx?");

/***/ }),

/***/ "./src/shared/ItemsList/ItemsListM.tsx":
/*!*********************************************!*\
  !*** ./src/shared/ItemsList/ItemsListM.tsx ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.ItemsListM = void 0;\r\nconst react_1 = __importStar(__webpack_require__(/*! react */ \"react\"));\r\nconst itemslist_css_1 = __importDefault(__webpack_require__(/*! ./itemslist.css */ \"./src/shared/ItemsList/itemslist.css\"));\r\nconst react_redux_1 = __webpack_require__(/*! react-redux */ \"react-redux\");\r\nconst reducer_1 = __webpack_require__(/*! ../../store/reducer */ \"./src/store/reducer.ts\");\r\nconst GetIds_1 = __webpack_require__(/*! ../api/GetIds */ \"./src/shared/api/GetIds.ts\");\r\nconst GetItems_1 = __webpack_require__(/*! ../api/GetItems */ \"./src/shared/api/GetItems.ts\");\r\nconst md5 = __webpack_require__(/*! md5 */ \"md5\");\r\nconst todayDate = new Date().toISOString().slice(0, 10).replace(/-/g, '');\r\nfunction ItemsListM() {\r\n    // если filtering = true переходим в компоненту itemsListF для работы с фильтрами\r\n    const filtering = (0, react_redux_1.useSelector)(state => state.filtering);\r\n    const filters = (0, react_redux_1.useSelector)(state => state.filters);\r\n    const dispatch = (0, react_redux_1.useDispatch)();\r\n    // после первого прохода делаем init = false\r\n    const [init, setInit] = (0, react_1.useState)(true);\r\n    const filterProduct = (0, react_1.useRef)(null);\r\n    const filterPrice = (0, react_1.useRef)(null);\r\n    const filterBrand = (0, react_1.useRef)(null);\r\n    // включение-выключение сообщения об ожидании ответа API\r\n    const [loading, setLoading] = (0, react_1.useState)(true);\r\n    // включение-выключение кнопок: следующие 50 и предыдущие 50\r\n    const [loadingButtonDown, setLoadingButtonDown] = (0, react_1.useState)(false);\r\n    const [loadingButtonUp, setLoadingButtonUp] = (0, react_1.useState)(false);\r\n    // если loadMore = true, то загружаем порцию данных по API\r\n    const [loadMore, setLoadMore] = (0, react_1.useState)(true);\r\n    // loadMoreN это (номер показываемой страницы) - 1\r\n    const [loadMoreN, setLoadMoreN] = (0, react_1.useState)(0);\r\n    // lastPageN это номер самой последней страницы, когда абсолютно все данные уже загружены\r\n    const [lastPageN, setLastPageN] = (0, react_1.useState)(-1);\r\n    const password = md5(`Valantis_${todayDate}`);\r\n    const itemsOnPage = 50;\r\n    // данные из items рендерятся на текущую страницу\r\n    const [items, setItems] = (0, react_1.useState)([]);\r\n    // в postItems накапливаем загруженные в items данные\r\n    const [postItems, setPostItems] = (0, react_1.useState)([]);\r\n    // номер записи, с которой нужно подгружать следующую порцию данных, если \r\n    // в текущей порции оказалось меньше 50 записей\r\n    const [lastReadItem, setLastReadItem] = (0, react_1.useState)(0);\r\n    // обработка нажатия на кнопку следующие 50\r\n    function clickLoadDown() {\r\n        setLoadMoreN(loadMoreN + 1);\r\n        // если нужно загружать следующую порцию данных\r\n        if (((loadMoreN + 1) * itemsOnPage) === postItems.length) {\r\n            setLoadMore(true);\r\n            setLoading(true);\r\n            setLoadingButtonDown(false);\r\n            setLoadingButtonUp(false);\r\n            setItems([]);\r\n        }\r\n        // если пользуемся массивом postItems (ранее загруженными данными)\r\n        else {\r\n            setLoadMore(false);\r\n            setItems(postItems.slice((loadMoreN + 1) * itemsOnPage, ((loadMoreN + 1) * itemsOnPage) + itemsOnPage));\r\n            scroll(0, 0);\r\n        }\r\n    }\r\n    function clickLoadUp() {\r\n        setLoadMore(false);\r\n        setLoadMoreN(loadMoreN - 1);\r\n        setItems(postItems.slice((loadMoreN - 1) * itemsOnPage, ((loadMoreN - 1) * itemsOnPage) + itemsOnPage));\r\n    }\r\n    // переключение на компоненту itemsListF для работы с фильтрами\r\n    function switchComponent() {\r\n        var _a, _b, _c, _d, _e, _f;\r\n        if (((_a = filterProduct.current) === null || _a === void 0 ? void 0 : _a.value.trim()) !== '' ||\r\n            ((_b = filterPrice.current) === null || _b === void 0 ? void 0 : _b.value) !== '' ||\r\n            ((_c = filterBrand.current) === null || _c === void 0 ? void 0 : _c.value.trim()) !== '') {\r\n            const filters = {\r\n                product: (_d = filterProduct.current) === null || _d === void 0 ? void 0 : _d.value.trim(),\r\n                price: (_e = filterPrice.current) === null || _e === void 0 ? void 0 : _e.value,\r\n                brand: (_f = filterBrand.current) === null || _f === void 0 ? void 0 : _f.value.trim()\r\n            };\r\n            dispatch((0, reducer_1.saveFiltering)(true));\r\n            dispatch((0, reducer_1.saveFilters)(filters));\r\n        }\r\n    }\r\n    (0, react_1.useEffect)(() => {\r\n        var _a, _b, _c;\r\n        // обработчики изменения фильтров устанавливаем только один раз в самом начале \r\n        if (init) {\r\n            setInit(false);\r\n            (_a = filterProduct.current) === null || _a === void 0 ? void 0 : _a.addEventListener('change', switchComponent);\r\n            (_b = filterPrice.current) === null || _b === void 0 ? void 0 : _b.addEventListener('change', switchComponent);\r\n            (_c = filterBrand.current) === null || _c === void 0 ? void 0 : _c.addEventListener('change', switchComponent);\r\n        }\r\n        ;\r\n        function load() {\r\n            return __awaiter(this, void 0, void 0, function* () {\r\n                const itemsTemp = [];\r\n                let lastReadItemPlus = 0;\r\n                if (loadMore) {\r\n                    setLoadMore(false);\r\n                    while (itemsTemp.length < itemsOnPage) {\r\n                        const listIds = yield (0, GetIds_1.GetIds)(password, lastReadItem + lastReadItemPlus, itemsOnPage - itemsTemp.length);\r\n                        lastReadItemPlus = lastReadItemPlus + itemsOnPage - itemsTemp.length;\r\n                        const listItems = yield (0, GetItems_1.GetItems)(password, listIds);\r\n                        itemsTemp.push(listItems[0]);\r\n                        for (let i = 1; i < listItems.length; i++) {\r\n                            if (listItems[i].id !== listItems[i - 1].id) {\r\n                                itemsTemp.push(listItems[i]);\r\n                            }\r\n                        }\r\n                        ;\r\n                        // если уже вообще все данные прочитаны\r\n                        if (listIds.length < itemsOnPage - itemsTemp.length) {\r\n                            setLastPageN(loadMoreN);\r\n                            break;\r\n                        }\r\n                        ;\r\n                    }\r\n                    ;\r\n                    setItems(itemsTemp);\r\n                    setPostItems(postItems.concat(itemsTemp));\r\n                    setLastReadItem(lastReadItem + lastReadItemPlus);\r\n                    setLoadingButtonDown(true);\r\n                    setLoadingButtonUp(true);\r\n                    setLoading(false);\r\n                    scroll(0, 0);\r\n                }\r\n            });\r\n        }\r\n        ;\r\n        load();\r\n    }, [loadMoreN]);\r\n    return (react_1.default.createElement(\"div\", { className: itemslist_css_1.default.itemsList },\r\n        react_1.default.createElement(\"div\", { className: itemslist_css_1.default.titleList },\r\n            react_1.default.createElement(\"p\", { className: itemslist_css_1.default.num }, \"\\u25BC\"),\r\n            react_1.default.createElement(\"input\", { type: \"text\", name: \"\", className: itemslist_css_1.default.id, disabled: true }),\r\n            react_1.default.createElement(\"input\", { type: \"text\", name: \"\", className: itemslist_css_1.default.prod, ref: filterProduct }),\r\n            react_1.default.createElement(\"input\", { type: \"number\", name: \"\", min: \"0\", className: itemslist_css_1.default.price, ref: filterPrice }),\r\n            react_1.default.createElement(\"input\", { type: \"text\", name: \"\", className: itemslist_css_1.default.brand, ref: filterBrand })),\r\n        react_1.default.createElement(\"div\", { className: itemslist_css_1.default.titleList },\r\n            react_1.default.createElement(\"h3\", { className: itemslist_css_1.default.num }, \"N\"),\r\n            react_1.default.createElement(\"h3\", { className: itemslist_css_1.default.id }, \"ID\"),\r\n            react_1.default.createElement(\"h3\", { className: itemslist_css_1.default.prod }, \"PRODUCT\"),\r\n            react_1.default.createElement(\"h3\", { className: itemslist_css_1.default.price }, \"PRICE\"),\r\n            react_1.default.createElement(\"h3\", { className: itemslist_css_1.default.brand }, \"BRAND\")),\r\n        loadingButtonUp && loadMoreN !== 0 && react_1.default.createElement(\"div\", { style: { textAlign: 'center' } },\r\n            react_1.default.createElement(\"button\", { style: { padding: '10px 30px', border: '1px', color: 'white', backgroundColor: 'grey' }, onClick: clickLoadUp }, \"Previous page\")),\r\n        react_1.default.createElement(\"ul\", null,\r\n            items.length === 0 && !loading &&\r\n                react_1.default.createElement(\"div\", { style: { textAlign: 'center' } }, \"\\u041D\\u0435\\u0442 \\u043D\\u0438 \\u043E\\u0434\\u043D\\u043E\\u0433\\u043E \\u0442\\u043E\\u0432\\u0430\\u0440\\u0430\"),\r\n            items.map((item, index) => react_1.default.createElement(\"li\", { className: itemslist_css_1.default.itemsLine, key: index },\r\n                react_1.default.createElement(\"p\", { className: itemslist_css_1.default.num }, index + 1 + itemsOnPage * loadMoreN),\r\n                react_1.default.createElement(\"p\", { className: itemslist_css_1.default.id }, item.id),\r\n                react_1.default.createElement(\"p\", { className: itemslist_css_1.default.prod }, item.product),\r\n                react_1.default.createElement(\"p\", { className: itemslist_css_1.default.price }, item.price),\r\n                react_1.default.createElement(\"p\", { className: itemslist_css_1.default.brand }, item.brand))),\r\n            react_1.default.createElement(\"div\", null),\r\n            loading && react_1.default.createElement(\"div\", { className: itemslist_css_1.default.preloader }),\r\n            loadingButtonDown && loadMoreN !== lastPageN && react_1.default.createElement(\"div\", { style: { textAlign: 'center' } },\r\n                react_1.default.createElement(\"button\", { style: { padding: '10px 30px', border: '1px', color: 'white', backgroundColor: 'grey' }, onClick: clickLoadDown }, \"Next page\"))),\r\n        \" \"));\r\n}\r\nexports.ItemsListM = ItemsListM;\r\n\n\n//# sourceURL=webpack:///./src/shared/ItemsList/ItemsListM.tsx?");

/***/ }),

/***/ "./src/shared/ItemsList/itemslist.css":
/*!********************************************!*\
  !*** ./src/shared/ItemsList/itemslist.css ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"titleList\": \"itemslist__titleList--3VIIi\",\n\t\"itemsList\": \"itemslist__itemsList--QZrEz\",\n\t\"itemsLine\": \"itemslist__itemsLine--PuZTM\",\n\t\"num\": \"itemslist__num--2G_YK\",\n\t\"id\": \"itemslist__id--1-eKd\",\n\t\"prod\": \"itemslist__prod--1OFjd\",\n\t\"price\": \"itemslist__price--1Gk2w\",\n\t\"brand\": \"itemslist__brand--1Ysbi\",\n\t\"preloader\": \"itemslist__preloader--ZSUmu\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/ItemsList/itemslist.css?");

/***/ }),

/***/ "./src/shared/Layout/Layout.tsx":
/*!**************************************!*\
  !*** ./src/shared/Layout/Layout.tsx ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Layout = void 0;\r\nconst React = __importStar(__webpack_require__(/*! react */ \"react\"));\r\nconst react_redux_1 = __webpack_require__(/*! react-redux */ \"react-redux\");\r\nconst ItemsListF_1 = __webpack_require__(/*! ../ItemsList/ItemsListF */ \"./src/shared/ItemsList/ItemsListF.tsx\");\r\nconst ItemsListM_1 = __webpack_require__(/*! ../ItemsList/ItemsListM */ \"./src/shared/ItemsList/ItemsListM.tsx\");\r\nfunction Layout() {\r\n    const filtering = (0, react_redux_1.useSelector)(state => state.filtering);\r\n    return (React.createElement(React.Fragment, null,\r\n        filtering && React.createElement(ItemsListF_1.ItemsListF, null),\r\n        !filtering && React.createElement(ItemsListM_1.ItemsListM, null)));\r\n}\r\nexports.Layout = Layout;\r\n\n\n//# sourceURL=webpack:///./src/shared/Layout/Layout.tsx?");

/***/ }),

/***/ "./src/shared/api/GetFilter.ts":
/*!*************************************!*\
  !*** ./src/shared/api/GetFilter.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.GetFilter = void 0;\r\nconst handleError_1 = __webpack_require__(/*! ./handleError */ \"./src/shared/api/handleError.ts\");\r\nfunction GetFilter(password, filter) {\r\n    return __awaiter(this, void 0, void 0, function* () {\r\n        let repeatFetch = true;\r\n        while (repeatFetch) {\r\n            repeatFetch = false;\r\n            try {\r\n                const res = yield fetch(\"http://api.valantis.store:40000\", {\r\n                    method: \"POST\",\r\n                    headers: {\r\n                        \"Content-Type\": \"application/json\",\r\n                        'X-Auth': password\r\n                    },\r\n                    body: JSON.stringify({\r\n                        \"action\": \"filter\",\r\n                        \"params\": filter\r\n                    })\r\n                });\r\n                repeatFetch = (0, handleError_1.handleError)(res.status);\r\n                const listFilter = yield res.json();\r\n                return listFilter.result;\r\n            }\r\n            catch (error) {\r\n                console.log('');\r\n            }\r\n            ;\r\n        }\r\n    });\r\n}\r\nexports.GetFilter = GetFilter;\r\n\n\n//# sourceURL=webpack:///./src/shared/api/GetFilter.ts?");

/***/ }),

/***/ "./src/shared/api/GetIds.ts":
/*!**********************************!*\
  !*** ./src/shared/api/GetIds.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.GetIds = void 0;\r\nconst handleError_1 = __webpack_require__(/*! ./handleError */ \"./src/shared/api/handleError.ts\");\r\nfunction GetIds(password, fromIndex, numberOfItems) {\r\n    return __awaiter(this, void 0, void 0, function* () {\r\n        let repeatFetch = true;\r\n        while (repeatFetch) {\r\n            repeatFetch = false;\r\n            try {\r\n                const res = yield fetch(\"http://api.valantis.store:40000\", {\r\n                    method: \"POST\",\r\n                    headers: {\r\n                        \"Content-Type\": \"application/json\",\r\n                        'X-Auth': password\r\n                    },\r\n                    body: JSON.stringify({\r\n                        \"action\": \"get_ids\",\r\n                        \"params\": { \"offset\": fromIndex, \"limit\": numberOfItems }\r\n                    })\r\n                });\r\n                repeatFetch = (0, handleError_1.handleError)(res.status);\r\n                const listIds = yield res.json();\r\n                return listIds.result;\r\n            }\r\n            catch (error) {\r\n                console.log('');\r\n            }\r\n        }\r\n    });\r\n}\r\nexports.GetIds = GetIds;\r\n;\r\n\n\n//# sourceURL=webpack:///./src/shared/api/GetIds.ts?");

/***/ }),

/***/ "./src/shared/api/GetItems.ts":
/*!************************************!*\
  !*** ./src/shared/api/GetItems.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.GetItems = void 0;\r\nconst handleError_1 = __webpack_require__(/*! ./handleError */ \"./src/shared/api/handleError.ts\");\r\nfunction GetItems(password, ids) {\r\n    return __awaiter(this, void 0, void 0, function* () {\r\n        let repeatFetch = true;\r\n        while (repeatFetch) {\r\n            repeatFetch = false;\r\n            try {\r\n                const res = yield fetch(\"http://api.valantis.store:40000\", {\r\n                    method: \"POST\",\r\n                    headers: {\r\n                        \"Content-Type\": \"application/json\",\r\n                        'X-Auth': password\r\n                    },\r\n                    body: JSON.stringify({\r\n                        \"action\": \"get_items\",\r\n                        \"params\": {\r\n                            \"ids\": ids\r\n                        }\r\n                    })\r\n                });\r\n                repeatFetch = (0, handleError_1.handleError)(res.status);\r\n                const listItems = yield res.json();\r\n                return listItems.result;\r\n            }\r\n            catch (error) {\r\n                console.log('');\r\n            }\r\n            ;\r\n        }\r\n    });\r\n}\r\nexports.GetItems = GetItems;\r\n\n\n//# sourceURL=webpack:///./src/shared/api/GetItems.ts?");

/***/ }),

/***/ "./src/shared/api/handleError.ts":
/*!***************************************!*\
  !*** ./src/shared/api/handleError.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.handleError = void 0;\r\nfunction handleError(err) {\r\n    let repeatFetch = false;\r\n    if (err == 401) {\r\n        console.log(`Произошла ошибка: 401`);\r\n        console.log('Проверьте правильность пароля');\r\n        repeatFetch = true;\r\n    }\r\n    else if (err !== 200) {\r\n        console.log(`Произошла ошибка: ${err}`);\r\n        console.log('Повторяем запрос');\r\n        repeatFetch = true;\r\n    }\r\n    return repeatFetch;\r\n}\r\nexports.handleError = handleError;\r\n\n\n//# sourceURL=webpack:///./src/shared/api/handleError.ts?");

/***/ }),

/***/ "./src/store/reducer.ts":
/*!******************************!*\
  !*** ./src/store/reducer.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.rootReducer = exports.saveFilters = exports.saveFiltering = void 0;\r\nconst initialState = {\r\n    filtering: false,\r\n    filters: { product: '', price: '', brand: '' }\r\n};\r\nconst SAVE_FILTERING = 'SAVE_FILTERING';\r\nconst saveFiltering = (filtering) => ({\r\n    type: SAVE_FILTERING,\r\n    filtering: filtering\r\n});\r\nexports.saveFiltering = saveFiltering;\r\nconst SAVE_FILTERS = 'SAVE_FILTERS';\r\nconst saveFilters = (filters) => ({\r\n    type: SAVE_FILTERS,\r\n    filters: { product: filters.product, price: filters.price, brand: filters.brand }\r\n});\r\nexports.saveFilters = saveFilters;\r\nconst rootReducer = (state = initialState, action) => {\r\n    switch (action.type) {\r\n        case SAVE_FILTERING:\r\n            return Object.assign(Object.assign({}, state), { filtering: action.filtering });\r\n        case SAVE_FILTERS:\r\n            return Object.assign(Object.assign({}, state), { filters: action.filters });\r\n        default:\r\n            return state;\r\n    }\r\n};\r\nexports.rootReducer = rootReducer;\r\n\n\n//# sourceURL=webpack:///./src/store/reducer.ts?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "md5":
/*!**********************!*\
  !*** external "md5" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"md5\");\n\n//# sourceURL=webpack:///external_%22md5%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");\n\n//# sourceURL=webpack:///external_%22react-dom/server%22?");

/***/ }),

/***/ "react-hot-loader/root":
/*!****************************************!*\
  !*** external "react-hot-loader/root" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-hot-loader/root\");\n\n//# sourceURL=webpack:///external_%22react-hot-loader/root%22?");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-redux\");\n\n//# sourceURL=webpack:///external_%22react-redux%22?");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux\");\n\n//# sourceURL=webpack:///external_%22redux%22?");

/***/ }),

/***/ "redux-devtools-extension":
/*!*******************************************!*\
  !*** external "redux-devtools-extension" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-devtools-extension\");\n\n//# sourceURL=webpack:///external_%22redux-devtools-extension%22?");

/***/ })

/******/ });