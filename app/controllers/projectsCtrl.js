define(function(require){
  var angular = require('angular');
  var ngRoute = require('ngRoute');
  var bootstrap = require('bootstrap');
  angular
    .module('NashApp.projects', ['ngRoute'])
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