'use strict';

angular.module('srApp.testimonials', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/testimonials', {
    templateUrl: 'testimonials/testimonials.html',
    controller: 'TestimonialsCtrl'
  });
}])

.controller('TestimonialsCtrl', [function() {

}]);