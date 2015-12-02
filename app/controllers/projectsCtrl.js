define(function(require){
  var angular = require('angular');
  var ngRoute = require('ngRoute');
  angular
    .module('SeedApp.projects', ['ngRoute'])
    .config(["$routeProvider", function($routeProvider) {
      $routeProvider.when("/projects", {
        templateUrl: "partials/projects.html",
        controller: "ProjectsCtrl"
      });
    }])
    .controller("ProjectsCtrl", ["$scope", "$location", 
      function($scope, $location) {
      
    }]);
});