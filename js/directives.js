'use strict';

/* Directives */


angular.module('boLoraApp.directives', []).
  directive('boLora', function() {
    return {
        restrict: 'A',
        scope: true,
        templateUrl: 'partials/shared/person.html',
        controller: function($scope, bolora){
        	$scope.person = bolora;
        }
    };
  });
