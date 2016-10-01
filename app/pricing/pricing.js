'use strict';

angular.module('srApp.pricing', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/pricing', {
    templateUrl: 'pricing/pricing.html',
    controller: 'PricingCtrl'
  });
}])

.controller('PricingCtrl', [function() {

}]);