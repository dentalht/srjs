'use strict';

angular.module('srApp.support', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/support', {
    templateUrl: 'support/support.html',
    controller: 'SupportCtrl'
  });
}])

.controller('SupportCtrl', [function() {

}]);