define(function(require){
  var angular = require('angular');
  var ngRoute = require('ngRoute');
  var bootstrap = require('bootstrap');
  angular
    .module('NashApp.home', ['ngRoute'])
    .config(["$routeProvider", function($routeProvider) {
      $routeProvider.when("/home", {
        templateUrl: "partials/home.html",
        controller: "HomeCtrl"
      });
    }])
    .controller("HomeCtrl", ["$scope", "$location", "$http", 
      function($scope, $location, $http) {
        $http.get('https://data.nashville.gov/resource/m4hn-ihe4?$$app_token=2HidFmxrQKRkdIzCsVe4bhqk9')
        .then(function(data){
          console.log(data.data);
          $scope.places = data.data;
        });
    }]);
});