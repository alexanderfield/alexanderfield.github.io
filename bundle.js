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
/***/ function(module, exports) {

	var app = angular.module('homePage', ['ngMaterial'])
	    .config(function($mdThemingProvider) {
	        $mdThemingProvider.theme('default')
	            .primaryPalette('grey')
	            .accentPalette('red');
	    });

	app.controller('AppCtrl', ['$scope', '$mdSidenav', function($scope, $mdSidenav){
	    $scope.toggleSidenav = function(menuId) {
	    $mdSidenav(menuId).toggle();
	    };
	}]);

	(function () {
	  'use strict';
	  angular
	      .module('homePage')
	      .controller('DemoCtrl', DemoCtrl);
	    
	  function DemoCtrl ($timeout, $q, $log) {
	    var self = this;
	    self.simulateQuery = false;
	    self.isDisabled    = false;

	    self.interests       = loadAll();
	    self.querySearch   = querySearch;

	    function querySearch (query) {
	      var results = query ? self.interests.filter( createFilterFor(query) ) : self.interests,
	          deferred;
	      return results;
	      
	    }

	    function loadAll() {
	      var allInterests = 'Code, Crypto, Design, Health, Wealth';
	      return allInterests.split(/, +/g).map( function (interest) {
	        return {
	          value: interest.toLowerCase(),
	          display: interest
	        };
	      });
	    }
	    /**
	     * Create filter function for a query string
	     */
	    function createFilterFor(query) {
	      var lowercaseQuery = angular.lowercase(query);
	      return function filterFn(interest) {
	        return (interest.value.indexOf(lowercaseQuery) === 0);
	      };
	    }
	  }
	})();

/***/ }
/******/ ]);