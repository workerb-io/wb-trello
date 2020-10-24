(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["main"] = factory();
	else
		root["main"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/actions/boards/option/lists/option/rename.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/actions/boards/option/lists/option/rename.ts":
/*!**********************************************************!*\
  !*** ./src/actions/boards/option/lists/option/rename.ts ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\n/* eslint-disable default-case */\nvar api_1 = __webpack_require__(/*! ../../../../../utils/api */ \"./src/utils/api.ts\");\nvar helper_1 = __webpack_require__(/*! ../../../../../utils/helper */ \"./src/utils/helper.ts\");\nif (options.boards && options.lists) {\n    var _a = options.boards, html_url = _a.html_url, name_1 = _a.name;\n    var id = options.lists.id;\n    var listName = args.filter(Boolean).join(' ');\n    if (!listName) {\n        listName = prompt('Please enter a new list name');\n    }\n    var response = api_1.renameList(id, listName);\n    var result = response;\n    if (result.status >= 200 && result.status <= 299) {\n        result = helper_1.decodeApiResponse(response);\n        notify('List Renamed', 'success', 2000);\n        open(html_url);\n        reIndex(['trello', 'boards', name_1, 'lists']);\n    }\n    else {\n        helper_1.handleErrors(result.status, result.response);\n    }\n}\n\n\n//# sourceURL=webpack://main/./src/actions/boards/option/lists/option/rename.ts?");

/***/ }),

/***/ "./src/utils/api.ts":
/*!**************************!*\
  !*** ./src/utils/api.ts ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.addMemberToCardId = exports.getAllBoardMembers = exports.updateCard = exports.deleteCard = exports.createNewCard = exports.getAllCardsInList = exports.archiveList = exports.renameList = exports.createNewList = exports.getSingleBoard = exports.getAllListsOfBoard = exports.renameBoard = exports.deleteBoard = exports.createNewBoard = exports.getAllBoards = void 0;\n/* eslint-disable import/prefer-default-export */\nvar request_1 = __importDefault(__webpack_require__(/*! ./request */ \"./src/utils/request.ts\"));\nexports.getAllBoards = function () { return request_1.default.get('/1/members/me/boards?fields=name,url&'); };\nexports.createNewBoard = function (name) { return request_1.default.post(\"/1/boards/?name=\" + name + \"&\"); };\nexports.deleteBoard = function (id) { return request_1.default.delete(\"/1/boards/\" + id + \"?\"); };\nexports.renameBoard = function (id, newName) { return request_1.default.put(\"/1/boards/\" + id + \"?name=\" + newName + \"&\"); };\nexports.getAllListsOfBoard = function (id) { return request_1.default.get(\"/1/boards/\" + id + \"/lists?\"); };\nexports.getSingleBoard = function (id) { return request_1.default.get(\"/1/boards/\" + id + \"?\"); };\nexports.createNewList = function (boardId, listName) {\n    return request_1.default.post(\"/1/lists?idBoard=\" + boardId + \"&name=\" + listName + \"&\");\n};\nexports.renameList = function (listId, listName) { return request_1.default.put(\"/1/lists/\" + listId + \"?name=\" + listName + \"&\"); };\nexports.archiveList = function (listId) { return request_1.default.put(\"/1/lists/\" + listId + \"/closed?value=true&\"); };\nexports.getAllCardsInList = function (listId) { return request_1.default.get(\"/1/lists/\" + listId + \"/cards?\"); };\nexports.createNewCard = function (listId, cardName) {\n    return request_1.default.post(\"/1/cards?name=\" + cardName + \"&idList=\" + listId + \"&\");\n};\nexports.deleteCard = function (cardId) { return request_1.default.delete(\"/1/cards/\" + cardId + \"?\"); };\nexports.updateCard = function (_a) {\n    var cardId = _a.cardId, newCardName = _a.newCardName, _b = _a.shouldAddDescription, shouldAddDescription = _b === void 0 ? false : _b, _c = _a.description, description = _c === void 0 ? '' : _c;\n    return request_1.default.put(\"/1/cards/\" + cardId + \"?\" + (shouldAddDescription ? \"desc=\" + description + \"&\" : \"name=\" + newCardName + \"&\"));\n};\nexports.getAllBoardMembers = function (boardId) { return request_1.default.get(\"/1/boards/\" + boardId + \"/members?\"); };\nexports.addMemberToCardId = function (cardId, memberId) {\n    return request_1.default.post(\"/1/cards/\" + cardId + \"/idMembers?value=\" + memberId + \"&\");\n};\n\n\n//# sourceURL=webpack://main/./src/utils/api.ts?");

/***/ }),

/***/ "./src/utils/constants.ts":
/*!********************************!*\
  !*** ./src/utils/constants.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// import * as config from \"../../config.json\";\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.secret = exports.key = exports.uri = void 0;\n/* eslint-disable import/prefer-default-export */\nexports.uri = 'https://api.trello.com';\nexports.key = VARS.TRELLO_KEY;\nexports.secret = VARS.TRELLO_SECRET;\n\n\n//# sourceURL=webpack://main/./src/utils/constants.ts?");

/***/ }),

/***/ "./src/utils/helper.ts":
/*!*****************************!*\
  !*** ./src/utils/helper.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.handleErrors = exports.decodeApiResponse = exports.api = void 0;\n/* eslint-disable default-case */\nvar constants_1 = __webpack_require__(/*! ./constants */ \"./src/utils/constants.ts\");\nfunction api(endpoint) {\n    return \"\" + constants_1.uri + endpoint + \"key=\" + constants_1.key + \"&token=\" + constants_1.secret;\n}\nexports.api = api;\nfunction decodeApiResponse(apiResponse) {\n    var result = apiResponse;\n    if (!result.response) {\n        return {\n            response: {},\n            status: result.status,\n        };\n    }\n    return {\n        response: JSON.parse(result.response),\n        status: result.status,\n    };\n}\nexports.decodeApiResponse = decodeApiResponse;\nexports.handleErrors = function (status, response) {\n    switch (status) {\n        case 401:\n        case 500:\n        case 403:\n        case 404:\n        case 400:\n            notify(response, 'error', 3000);\n    }\n};\n\n\n//# sourceURL=webpack://main/./src/utils/helper.ts?");

/***/ }),

/***/ "./src/utils/request.ts":
/*!******************************!*\
  !*** ./src/utils/request.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar helper_1 = __webpack_require__(/*! ./helper */ \"./src/utils/helper.ts\");\nvar Request = /** @class */ (function () {\n    function Request() {\n        this.api = helper_1.api;\n    }\n    Request.prototype.get = function (uri, headers) {\n        if (headers === void 0) { headers = {}; }\n        return httpGet(this.api(uri), headers);\n    };\n    Request.prototype.delete = function (uri, headers) {\n        if (headers === void 0) { headers = {}; }\n        return httpDelete(this.api(uri), headers);\n    };\n    Request.prototype.put = function (uri, headers) {\n        if (headers === void 0) { headers = {}; }\n        return httpPut(this.api(uri), headers);\n    };\n    Request.prototype.post = function (uri, headers) {\n        if (headers === void 0) { headers = {}; }\n        return httpPost(this.api(uri), headers);\n    };\n    return Request;\n}());\nvar request = new Request();\nexports.default = request;\n\n\n//# sourceURL=webpack://main/./src/utils/request.ts?");

/***/ })

/******/ });
});