define(function (require) {

  var angular = require('angular');
  var ngRoute = require('ngRoute');
  var ngFilter = require('angularfilter');
  var home = require('controllers/homeCtrl');
  var about = require('controllers/aboutCtrl');
  var projects = require('controllers/projectsCtrl');

  return angular.module("NashApp", [
    'NashApp.home',
    'NashApp.about',
    'NashApp.projects',
    'angular.filter', 
    'ngRoute'])
  .config(['$routeProvider',
    function($routeProvider) {
      $routeProvider.otherwise({redirectTo: '/home'});
  }]);
});