'use strict';

angular.module('srApp.home', [
  'ngRoute'
])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/home', {
    templateUrl: 'home/home.html',
    controller: 'HomeCtrl'
  });
}])

.controller('HomeCtrl', [function slides($scope) {
  $scope.slides = [
            {image: 'images/slider_img1.jpg', description: 'Image 01'},
            {image: 'images/slider_img2.jpg', description: 'Image 02'},
            {image: 'images/slider_img3.jpg', description: 'Image 03'}
        ];
  
    $scope(function () {
        // Slideshow
        $("#slider2").responsiveSlides({
        auto: true,
        pager: true,
        speed: 500,
        maxwidth: 960
        });
    });
    $scope(function(){
        $(".slides").slides(); // контейнер с элементами слайдера
    });
    $scope(document).ready(function(){
    $(".slider .featuredList > li > a").lightbox({
    fitToScreen: true
    });
    });

}]);