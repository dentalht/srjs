'use strict';

angular.module('srApp.features', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/features', {
    templateUrl: 'features/features.html',
    controller: 'FeaturesCtrl'
  });
}])

.controller('FeaturesCtrl', [function() {

}]);