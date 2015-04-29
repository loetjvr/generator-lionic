'use strict';

/**
 * @ngdoc function
 * @name <%= appname %>.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of <%= appname %>
 */
angular.module('<%= appname %>')
  .controller('MainCtrl', function($scope) {
    $scope.tasks = [
      'view',
      'controller',
      'state',
      'directive',
      'filter',
      'service',
      'factory',
      'constant'
    ];
  });
