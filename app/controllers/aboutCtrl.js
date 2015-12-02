define(function(require){
  var angular = require('angular');
  var ngRoute = require('ngRoute');
  angular
    .module('SeedApp.about', ['ngRoute'])
    .config(["$routeProvider", function($routeProvider) {
      $routeProvider.when("/about", {
        templateUrl: "partials/about.html",
        controller: "AboutCtrl"
      });
    }])
    .controller("AboutCtrl", ["$scope", "$location", 
      function($scope, $location) {
      
    }]);
});