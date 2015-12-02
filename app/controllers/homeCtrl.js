define(function(require){
  var angular = require('angular');
  var ngRoute = require('ngRoute');
  angular
    .module('SeedApp.home', ['ngRoute'])
    .config(["$routeProvider", function($routeProvider) {
      $routeProvider.when("/home", {
        templateUrl: "partials/home.html",
        controller: "HomeCtrl"
      });
    }])
    .controller("HomeCtrl", ["$scope", "$location", 
      function($scope, $location) {
      
    }]);
});