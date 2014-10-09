'use strict';

/**
 * @ngdoc function
 * @name angularClickHandlerApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the angularClickHandlerApp
 */
angular.module('angularClickHandlerApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
