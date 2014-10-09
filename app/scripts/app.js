'use strict';

/**
 * @ngdoc overview
 * @name angularClickHandlerApp
 * @description
 * # angularClickHandlerApp
 *
 * Main module of the application.
 */
angular
  .module('angularClickHandlerApp', [
    'ngResource',
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
