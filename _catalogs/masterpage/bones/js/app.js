/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 *
	 * Place your custom JavaScript into this file.
	 *
	 * SPBones uses ES6 JavaScript, which is compiled down to client-ready ES5 by
	 * running the included Gulp Propeller script.
	 *
	 */// bones
	const bones=window.bones=__webpack_require__(1);

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports={// form digest
	digest:document.getElementById('__REQUESTDIGEST').value,// current host
	host:{env:_spPageContextInfo.env,farm:_spPageContextInfo.farmLabel,name:window.location.host,protocol:window.location.protocol,url:window.location.protocol+'//'+window.location.host},// current list
	list:{id:_spPageContextInfo.listId,title:_spPageContextInfo.listTitle,url:_spPageContextInfo.listUrl},// current page
	page:{editmode:'1'==document.getElementById('MSOLayout_InDesignMode').value,id:_spPageContextInfo.pageItemId,language:_spPageContextInfo.currentLanguage,physical:_spPageContextInfo.serverRequestPath,title:document.title},// current site collection
	sitecollection:{id:_spPageContextInfo.siteId,relative:_spPageContextInfo.siteServerRelativeUrl.replace(/^\/|\/$/g,''),url:_spPageContextInfo.siteAbsoluteUrl.replace(/^\/|\/$/g,'')},// current user
	user:{id:_spPageContextInfo.userId,key:_spPageContextInfo.systemUserKey,name:_spPageContextInfo.userDisplayName},// current web
	web:{id:_spPageContextInfo.webId,logo:_spPageContextInfo.webLogoUrl,relative:_spPageContextInfo.webServerRelativeUrl.replace(/^\/|\/$/g,''),title:_spPageContextInfo.webTitle,url:_spPageContextInfo.webAbsoluteUrl.replace(/^\/|\/$/g,'')}};

/***/ }
/******/ ]);