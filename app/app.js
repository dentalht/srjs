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

  $routeProvider
              .when('/', {
                controller: 'HomeCtrl',
                templateUrl: 'home/home.html',
                controllerAs: 'vm'
            })
            .when('/login', {
                controller: 'LoginController',
                templateUrl: 'login/login.view.html',
                controllerAs: 'vm'
            })

            .when('/register', {
                controller: 'RegisterController',
                templateUrl: 'register/register.view.html',
                controllerAs: 'vm'
            })
  
            .otherwise({redirectTo: '/home'});
}]);
