 var superApp = angular.module('superApp',['ngRoute','ngAnimate']);
/**
* Run before the app Start
**/
superApp.config(['$routeProvider',function($routeProvider){
  $routeProvider
  .when('/home', {
    templateUrl: 'views/home.html',
    controller:'SuperController'
  })

  .when('/login-success', {
    templateUrl: 'views/login-success.html',
    controller:'LoginController'
  })
  .when('/login', {
    templateUrl: 'views/login.html',
    controller:'LoginController'
  })
  .otherwise({
    redirectTo:'/home'
  })

}]);

/**
*Run when app is running
**/
superApp.run(function () {

});


superApp.controller('SuperController', ['$scope', '$http', function ($scope, $http) {

}]);


superApp.controller('LoginController', ['$scope','$location',function ($scope,$location) {
  $scope.sendMessage= function () {
    $location.path('/home');

  };
}]);
