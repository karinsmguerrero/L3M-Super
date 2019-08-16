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
  .when ('/menu', {
    templateUrl: 'views/menu.html',
    controller:'ProductosController'
  })
  .when('/baseA', {
    templateUrl: 'views/cajeros.html',
    controller:'baseAController'
  })
  .when('/baseB', {
    templateUrl: 'views/cajeros.html',
    controller:'baseBController'
  })
  .when('/baseC', {
    templateUrl: 'views/cajeros.html',
    controller:'baseCController'
  })
  .when('/login-success', {
    templateUrl: 'views/login-success.html',
    controller:'LoginController'
  })
  .when('/login', {
    templateUrl: 'views/login.html',
    controller:'LoginController'
  })
  .when('/a', {
    templateUrl: 'views/gestionRoles.html',
    controller:'SuperController'
  })
  .when('/roles',{
    templateUrl: 'views/roles.html',
    controller:'SuperController'
  })
  .when('/C',{
    templateUrl: 'views/factura.html',
    controller:'baseBController'
  })
  .otherwise({
    redirectTo:'/home'
  })



}]);

/**
*Run when app is running
**/
superApp.run(function () {
/*  $scope.navs=[{
    url:'/nav-mobile.html'
  },{
    url:'/nav-bar.html'
  }];
  $scope.nav=$scope.navs[1];
  var nua = navigator.userAgent;
  var isAndroid = (nua.indexOf('Mozilla/5.0') > -1 && nua.indexOf('Android ') > -1 && nua.indexOf('AppleWebKit') > -1 && nua.indexOf('Chrome') === -1)
  if (isAndroid) {
    $scope.nav=$scope.navs[0];
  };*/
});

superApp.controller('SuperController', ['$scope', '$http', function ($scope, $http) {

  $scope.eliminarRol= function (rol) {
    var posRol = $scope.roles.indexOf(rol);
    $scope.roles.splice(posRol, 1);
  };

  $scope.addRol = function () {
    $scope.roles.push({
      nombre: $scope.nrol.nombre,
      descripcion: $scope.nrol.descripcion
    });
    $scope.nrol.nombre="";
    $scope.nrol.descripcion=""
  };

  $scope.removeAll = function(){
    $scope.roles = []
  };


  $http.get('data/roles.json').then(function(data){
    $scope.roles=data.data;
  });





}]);
superApp.controller('ProductosController', ['$scope', '$http', function ($scope, $http) {


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
superApp.controller('baseAController', ['$scope', '$http', function ($scope, $http) {

  $scope.eliminarProductoA= function (rol) {
    var posproc = $scope.productosA.indexOf(rol);
    $scope.productosA.splice(posproc, 1);
  };
  $scope.addProductoA = function () {
    $scope.productosA.push({
      nombre: $scope.nproc.nombre,
      costo: $scope.nproc.costo,
      descripcion:$scope.nproc.des,
      cantidad: $scope.nproc.cantidad,
    });
    $scope.nproc.nombre="";
    $scope.nproc.costo="";
    $scope.nproc.des="",
    $scope.nproc.cantidad="";
  };

  $http.get('data/productosA.json').then(function(data){
    $scope.productosA=data.data;
  });
}]);
superApp.controller('baseBController', ['$scope', '$http', function ($scope, $http) {

  $scope.eliminarProductoB= function (rol) {
    var posproc = $scope.productosB.indexOf(rol);
    $scope.productosB.splice(posproc, 1);
  };

  $scope.addProductoB = function () {
    $scope.productosB.push({
      nombre: $scope.nproc.nombre,
      costo: $scope.nproc.costo,
      descripcion:$scope.nproc.des,
      cantidad: $scope.nproc.cantidad,
    });
    $scope.nproc.nombre="";
    $scope.nproc.costo="";
    $scope.nproc.des="",
    $scope.nproc.cantidad="";
  };

  $http.get('data/productosB.json').then(function(data){
    $scope.productosB=data.data;
  });
}]);
superApp.controller('baseCController', ['$scope', '$http', function ($scope, $http) {

  $scope.eliminarProductoC= function (rol) {
    var posproc = $scope.productosC.indexOf(rol);
    $scope.productosC.splice(posproc, 1);
  };

  $scope.addProductoC = function () {
    $scope.productosC.push({
      nombre: $scope.nproc.nombre,
      costo: $scope.nproc.costo,
      descripcion:$scope.nproc.des,
      cantidad: $scope.nproc.cantidad,
    });
    $scope.nproc.nombre="";
    $scope.nproc.costo="";
    $scope.nproc.des="",
    $scope.nproc.cantidad="";
  };

  $http.get('data/productosC.json').then(function(data){
    $scope.productosC=data.data;
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

superApp.controller('LoginController', ['$scope','$location',function ($scope,$location) {
  $scope.sendMessage= function () {
    $location.path('/login-success');

  };
}]);


superApp.controller('NavController', ['$scope',function ($scope) {

    $scope.path=function () {
      var nua = navigator.userAgent;
      var isAndroid = (nua.indexOf('Mozilla/5.0') > -1 && nua.indexOf('Android ') > -1 && nua.indexOf('AppleWebKit') > -1 && nua.indexOf('Chrome') === -1)
      if (isAndroid) {
        $scope.path.src="'nav-mobile.html'";
      }else{
        $scope.path.src="'nav-bar.html'";
      }
    };


}]);

function NavController() {
  $scope.navs=[{
    url:'nav-mobile.html'
  },{
    url:'nav-bar.html'
  }];
  $scope.nav=$scope.navs[1];
  var nua = navigator.userAgent;
  var isAndroid = (nua.indexOf('Mozilla/5.0') > -1 && nua.indexOf('Android ') > -1 && nua.indexOf('AppleWebKit') > -1 && nua.indexOf('Chrome') === -1)
  if (isAndroid) {
    $scope.nav=$scope.navs[0];
  };

}
