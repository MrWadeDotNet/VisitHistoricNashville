define(function(require){
  var angular = require('angular');
  var ngRoute = require('ngRoute');
  var bootstrap = require('bootstrap');
  angular
    .module('NashApp.about', ['ngRoute'])
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