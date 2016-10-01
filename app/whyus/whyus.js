'use strict';

angular.module('srApp.whyus', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/whyus', {
    templateUrl: 'whyus/whyus.html',
    controller: 'WhyusCtrl'
  });
}])

.controller('WhyusCtrl', [function() {

}]);