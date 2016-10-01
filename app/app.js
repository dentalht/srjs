'use strict';

// Declare app level module which depends on views, and components
angular.module('srApp', [
  'ngRoute',
  'srApp.home',
  'srApp.features',
  'srApp.whyus',
  'srApp.testimonials',
  'srApp.pricing',
  'srApp.support',
  'srApp.faq',
  'srApp.contact',
  'srApp.version'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/home'});
}]);
