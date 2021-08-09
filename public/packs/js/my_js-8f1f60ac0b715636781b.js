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
/******/ 	__webpack_require__.p = "/packs/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/javascript/packs/my_js.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/javascript/packs/my_js.js":
/*!***************************************!*\
  !*** ./app/javascript/packs/my_js.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: /home/king/bugzila/app/javascript/packs/my_js.js: Missing semicolon. (14:18)\n\n  12 |         option = document.getElementById(\"bug_status\");\n  13 |        var option = document.createElement(\"option\");\n> 14 |        option.text \"new\"\n     |                   ^\n  15 |         options.value = document.getElementById(\"bug_status\").value;\n  16 |         debugger\n  17 |         bug_status.options.add(option);\n    at Parser._raise (/home/king/bugzila/node_modules/@babel/parser/lib/index.js:816:17)\n    at Parser.raiseWithData (/home/king/bugzila/node_modules/@babel/parser/lib/index.js:809:17)\n    at Parser.raise (/home/king/bugzila/node_modules/@babel/parser/lib/index.js:770:17)\n    at Parser.semicolon (/home/king/bugzila/node_modules/@babel/parser/lib/index.js:9875:10)\n    at Parser.parseExpressionStatement (/home/king/bugzila/node_modules/@babel/parser/lib/index.js:13092:10)\n    at Parser.parseStatementContent (/home/king/bugzila/node_modules/@babel/parser/lib/index.js:12681:19)\n    at Parser.parseStatement (/home/king/bugzila/node_modules/@babel/parser/lib/index.js:12545:17)\n    at Parser.parseBlockOrModuleBlockBody (/home/king/bugzila/node_modules/@babel/parser/lib/index.js:13134:25)\n    at Parser.parseBlockBody (/home/king/bugzila/node_modules/@babel/parser/lib/index.js:13125:10)\n    at Parser.parseBlock (/home/king/bugzila/node_modules/@babel/parser/lib/index.js:13109:10)\n    at Parser.parseStatementContent (/home/king/bugzila/node_modules/@babel/parser/lib/index.js:12621:21)\n    at Parser.parseStatement (/home/king/bugzila/node_modules/@babel/parser/lib/index.js:12545:17)\n    at node.body.withTopicForbiddingContext (/home/king/bugzila/node_modules/@babel/parser/lib/index.js:13174:60)\n    at Parser.withTopicForbiddingContext (/home/king/bugzila/node_modules/@babel/parser/lib/index.js:12314:14)\n    at Parser.parseFor (/home/king/bugzila/node_modules/@babel/parser/lib/index.js:13174:22)\n    at Parser.parseForStatement (/home/king/bugzila/node_modules/@babel/parser/lib/index.js:12897:17)\n    at Parser.parseStatementContent (/home/king/bugzila/node_modules/@babel/parser/lib/index.js:12570:21)\n    at Parser.parseStatement (/home/king/bugzila/node_modules/@babel/parser/lib/index.js:12545:17)\n    at Parser.parseBlockOrModuleBlockBody (/home/king/bugzila/node_modules/@babel/parser/lib/index.js:13134:25)\n    at Parser.parseBlockBody (/home/king/bugzila/node_modules/@babel/parser/lib/index.js:13125:10)\n    at Parser.parseBlock (/home/king/bugzila/node_modules/@babel/parser/lib/index.js:13109:10)\n    at Parser.parseStatementContent (/home/king/bugzila/node_modules/@babel/parser/lib/index.js:12621:21)\n    at Parser.parseStatement (/home/king/bugzila/node_modules/@babel/parser/lib/index.js:12545:17)\n    at Parser.parseIfStatement (/home/king/bugzila/node_modules/@babel/parser/lib/index.js:12908:28)\n    at Parser.parseStatementContent (/home/king/bugzila/node_modules/@babel/parser/lib/index.js:12590:21)\n    at Parser.parseStatement (/home/king/bugzila/node_modules/@babel/parser/lib/index.js:12545:17)\n    at Parser.parseBlockOrModuleBlockBody (/home/king/bugzila/node_modules/@babel/parser/lib/index.js:13134:25)\n    at Parser.parseBlockBody (/home/king/bugzila/node_modules/@babel/parser/lib/index.js:13125:10)\n    at Parser.parseBlock (/home/king/bugzila/node_modules/@babel/parser/lib/index.js:13109:10)\n    at Parser.parseFunctionBody (/home/king/bugzila/node_modules/@babel/parser/lib/index.js:11992:24)");

/***/ })

/******/ });
//# sourceMappingURL=my_js-8f1f60ac0b715636781b.js.map