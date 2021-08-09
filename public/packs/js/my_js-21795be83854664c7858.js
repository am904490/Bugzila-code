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

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: /home/king/bugzila/app/javascript/packs/my_js.js: Missing semicolon. (3:6)\n\n  1 | var inputValue = document.getElementById(\"bug_type\").value\n  2 | document.getElementById(\"bug_type\").value = \"Feature\"; \n> 3 | render 'edit'\n    |       ^\n    at Parser._raise (/home/king/bugzila/node_modules/@babel/parser/lib/index.js:816:17)\n    at Parser.raiseWithData (/home/king/bugzila/node_modules/@babel/parser/lib/index.js:809:17)\n    at Parser.raise (/home/king/bugzila/node_modules/@babel/parser/lib/index.js:770:17)\n    at Parser.semicolon (/home/king/bugzila/node_modules/@babel/parser/lib/index.js:9875:10)\n    at Parser.parseExpressionStatement (/home/king/bugzila/node_modules/@babel/parser/lib/index.js:13092:10)\n    at Parser.parseStatementContent (/home/king/bugzila/node_modules/@babel/parser/lib/index.js:12681:19)\n    at Parser.parseStatement (/home/king/bugzila/node_modules/@babel/parser/lib/index.js:12545:17)\n    at Parser.parseBlockOrModuleBlockBody (/home/king/bugzila/node_modules/@babel/parser/lib/index.js:13134:25)\n    at Parser.parseBlockBody (/home/king/bugzila/node_modules/@babel/parser/lib/index.js:13125:10)\n    at Parser.parseProgram (/home/king/bugzila/node_modules/@babel/parser/lib/index.js:12468:10)\n    at Parser.parseTopLevel (/home/king/bugzila/node_modules/@babel/parser/lib/index.js:12459:25)\n    at Parser.parse (/home/king/bugzila/node_modules/@babel/parser/lib/index.js:14186:10)\n    at parse (/home/king/bugzila/node_modules/@babel/parser/lib/index.js:14238:38)\n    at parser (/home/king/bugzila/node_modules/@babel/core/lib/parser/index.js:52:34)\n    at parser.next (<anonymous>)\n    at normalizeFile (/home/king/bugzila/node_modules/@babel/core/lib/transformation/normalize-file.js:82:38)\n    at normalizeFile.next (<anonymous>)\n    at run (/home/king/bugzila/node_modules/@babel/core/lib/transformation/index.js:29:50)\n    at run.next (<anonymous>)\n    at Function.transform (/home/king/bugzila/node_modules/@babel/core/lib/transform.js:25:41)\n    at transform.next (<anonymous>)\n    at step (/home/king/bugzila/node_modules/gensync/index.js:261:32)\n    at gen.next (/home/king/bugzila/node_modules/gensync/index.js:273:13)\n    at async.call.value (/home/king/bugzila/node_modules/gensync/index.js:223:11)\n    at errback.call (/home/king/bugzila/node_modules/gensync/index.js:189:28)\n    at runGenerator.errback (/home/king/bugzila/node_modules/@babel/core/lib/gensync-utils/async.js:73:7)\n    at val (/home/king/bugzila/node_modules/gensync/index.js:113:33)\n    at step (/home/king/bugzila/node_modules/gensync/index.js:287:14)\n    at gen.next (/home/king/bugzila/node_modules/gensync/index.js:273:13)\n    at async.call.value (/home/king/bugzila/node_modules/gensync/index.js:223:11)");

/***/ })

/******/ });
//# sourceMappingURL=my_js-21795be83854664c7858.js.map