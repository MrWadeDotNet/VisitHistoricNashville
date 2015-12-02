require.config({
  paths: {
      'angular' : '../lib/bower_components/angular/angular.min',
      'ngRoute' : '../lib/bower_components/angular-route/angular-route',
      'angularfilter' : '../lib/bower_components/angular-filter/dist/angular-filter.min'
  },
  shim: {
    'angular': {
      exports : 'angular'
    },
    'ngRoute': {
        deps: ['angular']
    },
    'angularfilter': {
        deps: ['angular']
    }
  },
  priority: [
    "angular"
  ],
  baseUrl: './app' 
});

require([
  'angular',
  'app',
  ], function(angular, app) {
  var $html = angular.element(document.getElementsByTagName('body')[0]);
      angular.element($html).ready(function() {
        // bootstrap the app manually
        angular.bootstrap(document, ['SeedApp']);
    });
  }
);