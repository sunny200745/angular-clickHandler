'use strict';

/**
 * @ngdoc function
 * @name angularClickHandlerApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularClickHandlerApp
 */
angular.module('angularClickHandlerApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
