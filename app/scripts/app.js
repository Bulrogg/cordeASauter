'use strict';

/**
 * @ngdoc overview
 * @name cordeAsauterApp
 * @description
 * # cordeAsauterApp
 *
 * Main module of the application.
 */
angular
  .module('cordeAsauterApp', [
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
