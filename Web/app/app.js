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
  .when('/productos',{
    templateUrl: 'views/productos.html',
    controller:'ProductoController'
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
superApp.controller('ProductoController', ['$scope', '$http', function ($scope, $http) {

  $scope.eliminarProducto= function (rol) {
    var posproc = $scope.productos.indexOf(rol);
    $scope.productos.splice(posproc, 1);
  };

  $scope.addProducto = function () {
    $scope.productos.push({
      nombre: $scope.nproc.nombre,
      costo: $scope.nproc.costo,
      cantidad: $scope.nproc.cantidad,
    });
    $scope.nproc.nombre="";
    $scope.nproc.costo="";
    $scope.nproc.cantidad="";
  };

  $http.get('data/productos.json').then(function(data){
    $scope.productos=data.data;
  });
}]);
superApp.controller('LoginController', ['$scope','$location',function ($scope,$location) {
  $scope.sendMessage= function () {
    $location.path('/home');

  };
}]);
