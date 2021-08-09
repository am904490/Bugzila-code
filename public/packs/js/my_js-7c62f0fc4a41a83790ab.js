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

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: /home/king/bugzila/app/javascript/packs/my_js.js: Unexpected token, expected \",\" (12:2)\n\n  10 |               option.innerHTML = document.getElementById(\"bug_status\").value;\n  11 |             }\n> 12 | } else{\n     |   ^\n  13 |    var bug = ['new', 'started', 'resolved'];\n  14 |    status.options.length = 0;\n  15 |    for (i = 0; i < bug.length; i++) {\n    at Parser._raise (/home/king/bugzila/node_modules/@babel/parser/lib/index.js:816:17)\n    at Parser.raiseWithData (/home/king/bugzila/node_modules/@babel/parser/lib/index.js:809:17)\n    at Parser.raise (/home/king/bugzila/node_modules/@babel/parser/lib/index.js:770:17)\n    at Parser.unexpected (/home/king/bugzila/node_modules/@babel/parser/lib/index.js:9905:16)\n    at Parser.expect (/home/king/bugzila/node_modules/@babel/parser/lib/index.js:9879:28)\n    at Parser.parseCallExpressionArguments (/home/king/bugzila/node_modules/@babel/parser/lib/index.js:11066:14)\n    at Parser.parseCoverCallAndAsyncArrowHead (/home/king/bugzila/node_modules/@babel/parser/lib/index.js:10989:29)\n    at Parser.parseSubscript (/home/king/bugzila/node_modules/@babel/parser/lib/index.js:10922:19)\n    at Parser.parseSubscripts (/home/king/bugzila/node_modules/@babel/parser/lib/index.js:10895:19)\n    at Parser.parseExprSubscripts (/home/king/bugzila/node_modules/@babel/parser/lib/index.js:10884:17)\n    at Parser.parseUpdate (/home/king/bugzila/node_modules/@babel/parser/lib/index.js:10858:21)\n    at Parser.parseMaybeUnary (/home/king/bugzila/node_modules/@babel/parser/lib/index.js:10836:23)\n    at Parser.parseExprOps (/home/king/bugzila/node_modules/@babel/parser/lib/index.js:10693:23)\n    at Parser.parseMaybeConditional (/home/king/bugzila/node_modules/@babel/parser/lib/index.js:10667:23)\n    at Parser.parseMaybeAssign (/home/king/bugzila/node_modules/@babel/parser/lib/index.js:10630:21)\n    at Parser.parseExpressionBase (/home/king/bugzila/node_modules/@babel/parser/lib/index.js:10576:23)\n    at allowInAnd (/home/king/bugzila/node_modules/@babel/parser/lib/index.js:10570:39)\n    at Parser.allowInAnd (/home/king/bugzila/node_modules/@babel/parser/lib/index.js:12339:16)\n    at Parser.parseExpression (/home/king/bugzila/node_modules/@babel/parser/lib/index.js:10570:17)\n    at Parser.parseStatementContent (/home/king/bugzila/node_modules/@babel/parser/lib/index.js:12676:23)\n    at Parser.parseStatement (/home/king/bugzila/node_modules/@babel/parser/lib/index.js:12545:17)\n    at Parser.parseBlockOrModuleBlockBody (/home/king/bugzila/node_modules/@babel/parser/lib/index.js:13134:25)\n    at Parser.parseBlockBody (/home/king/bugzila/node_modules/@babel/parser/lib/index.js:13125:10)\n    at Parser.parseProgram (/home/king/bugzila/node_modules/@babel/parser/lib/index.js:12468:10)\n    at Parser.parseTopLevel (/home/king/bugzila/node_modules/@babel/parser/lib/index.js:12459:25)\n    at Parser.parse (/home/king/bugzila/node_modules/@babel/parser/lib/index.js:14186:10)\n    at parse (/home/king/bugzila/node_modules/@babel/parser/lib/index.js:14238:38)\n    at parser (/home/king/bugzila/node_modules/@babel/core/lib/parser/index.js:52:34)\n    at parser.next (<anonymous>)\n    at normalizeFile (/home/king/bugzila/node_modules/@babel/core/lib/transformation/normalize-file.js:82:38)");

/***/ })

/******/ });
//# sourceMappingURL=my_js-7c62f0fc4a41a83790ab.js.map