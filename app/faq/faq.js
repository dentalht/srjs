'use strict';

angular.module('srApp.faq', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/faq', {
    templateUrl: 'faq/faq.html',
    controller: 'FaqCtrl'
  });
}])

.controller('FaqCtrl', [function() {

}]);