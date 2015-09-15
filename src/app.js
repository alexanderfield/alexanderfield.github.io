require('angular');

var app = angular.module('Homepage', ['ngMaterial', 'ui.router'])
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
      .module('Homepage')
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