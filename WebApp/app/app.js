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
  .when('/contact', {
    templateUrl: 'views/contact.html',
    controller:'ContactController'
  })
  .when('/contact-success', {
    templateUrl: 'views/contact-success.html',
    controller:'ContactController'
  })
  .when('/login', {
    templateUrl: 'views/login.html',
    controller:'ContactController'
  })
  .when('/a', {
    templateUrl: 'views/a.html',
    controller:'ContactController'
  })
  .when('/roles',{
    templateUrl: 'views/gestionRoles.html',
    controller:'SuperController'
  }).otherwise({
    redirectTo:'/home'
  })

}]);

/**
*Run when app is running
**/
superApp.run(function () {

});


superApp.controller('SuperController', ['$scope', '$http', function ($scope, $http) {

  $scope.eliminarRol= function (rol) {
    var posRol = $scope.roles.indexOf(rol);
    $scope.roles.splice(posRol, 1);
  };

  $scope.addRol = function () {
    nombre: $scope.nrol.nombre,
    $scope.roles.push({
      descripcion: $scope.nrol.descripcion,
      available: true
    });
    $scope.nrol.nombre="";
    $scope.nrol.descripcion="";
  };

  $scope.removeAll = function(){
    $scope.roles = []
  };

  $http.get('data/roles.json').then(function(data){
    $scope.roles=data.data;
  });



}]);

superApp.controller('ContactController', ['$scope','$location',function ($scope,$location) {
  $scope.sendMessage= function () {
    $location.path('/contact-success');

  };
}]);
