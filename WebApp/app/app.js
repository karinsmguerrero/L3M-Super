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
    templateUrl: 'views/gestionRoles.html',
    controller:'SuperController'
  })
  .when('/roles',{
    templateUrl: 'views/roles.html',
    controller:'SuperController'
  })
  .when('/sucursales',{
    templateUrl: 'views/sucursales.html',
    controller:'SucursalesController'
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

  $scope.eliminarRol= function (rol) {
    var posRol = $scope.roles.indexOf(rol);
    $scope.roles.splice(posRol, 1);
  };

  $scope.addRol = function () {
    $scope.roles.push({
      nombre: $scope.nrol.nombre,
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


superApp.controller('SucursalesController', ['$scope', '$http', function ($scope, $http) {

  $scope.eliminarSucursal= function (rol) {
    var posSuc = $scope.sucursales.indexOf(rol);
    $scope.sucursales.splice(posSuc, 1);
  };

  $scope.addSuc = function () {

    $scope.sucursales.push({
      nombre: $scope.nsuc.nombre,
      direccion: $scope.nsuc.direccion,
      telefono: $scope.nsuc.telefono,
      administrador: $scope.nsuc.administrador,
    });
    $scope.nsuc.nombre="";
    $scope.nsuc.direccion="";
    $scope.nsuc.telefono="";
    $scope.nsuc.administrador="";
  };

  $http.get('data/sucursales.json').then(function(data){
    $scope.sucursales=data.data;
  });
}]);

superApp.controller('ContactController', ['$scope','$location',function ($scope,$location) {
  $scope.sendMessage= function () {
    $location.path('/contact-success');

  };
}]);
