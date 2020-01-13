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
/******/ 	return __webpack_require__(__webpack_require__.s = "./client/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./client/index.js":
/*!*************************!*\
  !*** ./client/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _projects_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projects-data */ \"./client/projects-data.js\");\n\n\nconst projectNavigation = document.getElementsByClassName('navigation')[0];\nconst projectSection = document.getElementById('projects');\n\nfunction buildProjectSection() {\n  for (let i = 0; i < _projects_data__WEBPACK_IMPORTED_MODULE_0__[\"default\"].length; ++i) {\n    const project = _projects_data__WEBPACK_IMPORTED_MODULE_0__[\"default\"][i];\n    const card = document.createElement('div');\n    card.classList.add('project-card');\n    const technologyList = project.builtWith.map(tech => {\n      return `\n            <div class=\"tech-item\">\n                <p>${tech.title}</p>\n                <img src=\"${tech.filename}\" alt=\"${tech.title}\" class=\"tech-img\">\n            </div>\n        `;\n    });\n    const template = `\n        <div class=\"project-details\">\n            <h2 class=\"project-title\">${project.title} - </h2><h3>${\n      project.role\n    }</h3>\n            <p>${project.description}</p>\n            <div class=\"tech-stack\">${technologyList.join('')}</div>\n        </div>\n        <img src=\"${project.gif}\" alt=\"${project.title}\" class=\"project-gif\">\n        `;\n    card.innerHTML = template;\n    projectSection.appendChild(card);\n  }\n}\n\nbuildProjectSection();\n\nprojectNavigation.addEventListener('click', () => {\n  projectSection.scrollIntoView({ behavior: 'smooth' });\n});\n\n\n//# sourceURL=webpack:///./client/index.js?");

/***/ }),

/***/ "./client/projects-data.js":
/*!*********************************!*\
  !*** ./client/projects-data.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst allProjects = [\n  {\n    title: 'MusicBoy',\n    role: 'sole developer',\n    description:\n      'a browser-based musical instrument that handles composition, edits, and playback of musical sequences.',\n    gif: './images/MBdemo.gif',\n    builtWith: [\n      { title: 'HTML', filename: './images/HTML_Logo.png' },\n      { title: 'CSS', filename: './images/css-logo.png' },\n      { title: 'JavaScript', filename: './images/JavaScript-logo.png' },\n      { title: 'Webpack', filename: './images/webpack-logo.png' },\n      { title: 'Heroku', filename: './images/heroku.png' },\n      { title: 'tone.js', filename: './images/tone.png' },\n      { title: 'Express', filename: './images/ExpressJS.png' },\n    ],\n    deploymentLink: 'http://www.thisismusicboy.com',\n    sourceCode: 'https://github.com/JakeLo123/musicBoy2.0',\n  },\n  {\n    title: 'Tandem Plant Tracker',\n    role: 'sole developer',\n    description:\n      'An application for creating and maintaining a watering schedule for all your plants. Make sure your plants are watered when they need it!',\n    gif: './images/tandemplanttracker.gif',\n    builtWith: [\n      { title: 'PostgreSQL', filename: './images/postgresql-logo.png' },\n      { title: 'React', filename: './images/logo512.png' },\n      { title: 'Node', filename: './images/nodejs-logo.png' },\n      { title: 'Express', filename: './images/ExpressJS.png' },\n      { title: 'Webpack', filename: './images/webpack-logo.png' },\n    ],\n    deploymentLink: '',\n    sourceCode: 'https://github.com/JakeLo123/plant-tracker',\n  },\n  {\n    title: 'scrum board pro',\n    role: 'sole developer',\n    description:\n      'scrum board pro will help your team prioritize tasks and make deadlines! Users can collaborate on a project and assign/claim tasks.',\n    gif: './images/scrum-demo.gif',\n    builtWith: [\n      { title: 'React', filename: './images/logo512.png' },\n      { title: 'Material-UI', filename: './images/material-ui.png' },\n      { title: 'PostgreSQL', filename: './images/postgresql-logo.png' },\n      { title: 'Express', filename: './images/ExpressJS.png' },\n      { title: 'Webpack', filename: './images/webpack-logo.png' },\n      { title: 'Node', filename: './images/nodejs-logo.png' },\n    ],\n    deploymentLink: '',\n    sourceCode: 'https://github.com/JakeLo123/scrum-board-pro',\n  },\n  {\n    title: 'JAAM',\n    role: 'developer',\n    description:\n      'a GarageBand-esque application that allows multiple users to collaborate in real-time on separate devices. Users can select instruments and drums from an instrument library and create a song together.',\n    gif: './images/JAAM.gif',\n    builtWith: [\n      { title: 'React', filename: './images/logo512.png' },\n      { title: 'Cloud Firestore', filename: './images/firestore.png' },\n      { title: 'Webpack', filename: './images/webpack-logo.png' },\n      { title: 'tone.js', filename: './images/tone.png' },\n    ],\n    deploymentLink: 'http://jaam-fullstack.herokuapp.com',\n    sourceCode: 'https://github.com/TEAM-JAAM/musicboy2.0',\n  },\n  {\n    title: 'Bookazon',\n    role: 'full stack developer',\n    description:\n      'Bookazon is a simulated e-commerce website. Users can create accounts or shop anonymously, browse and review books, add or remove them from their cart, and checkout.',\n    gif: './images/bookazon.gif',\n    builtWith: [\n      { title: 'PostgreSQL', filename: './images/postgresql-logo.png' },\n      { title: 'Node', filename: './images/nodejs-logo.png' },\n      { title: 'Express', filename: './images/ExpressJS.png' },\n      { title: 'React', filename: './images/logo512.png' },\n      { title: 'Redux', filename: './images/redux-logo.png' },\n      { title: 'Webpack', filename: './images/webpack-logo.png' },\n    ],\n    deploymentLink: 'http://books-grace-shopper.herokuapp.com',\n    sourceCode: 'https://github.com/books-grace-shopper/books-grace-shopper',\n  },\n];\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (allProjects);\n\n\n//# sourceURL=webpack:///./client/projects-data.js?");

/***/ })

/******/ });