 var superApp = angular.module('superApp',['ngRoute','ngAnimate']);
/**
* Run before the app Start
* Rutas de las pafinas
**/
superApp.config(['$routeProvider',function($routeProvider){
  $routeProvider
  .when('/home', {
    templateUrl: 'views/home.html',
    controller:'SuperController'
  })
  .when ('/horario', {
    templateUrl: 'views/horario.html',
    controller:'HorarioController'
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
    templateUrl: 'views/hora.html',
    controller:'HorarioController'
  })
  .when('/roles',{
    templateUrl: 'views/roles.html',
    controller:'SuperController'
  })
  .when('/sucursales',{
    templateUrl: 'views/sucursales.html',
    controller:'SucursalesController'
  })
  .when('/proveedores',{
    templateUrl: 'views/proveedores.html',
    controller:'ProveedoresController'
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

/**
*Controlador de la vista de gestion de Roles
*
*/
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


/**
*Controlador de la vista de gestion de
*proveedores
*
*/
superApp.controller('ProveedoresController', ['$scope', '$http', function ($scope, $http) {

  $scope.eliminarProveedor= function (proveedor) {
    var posProv = $scope.proveedores.indexOf(proveedor);
    $scope.proveedores.splice(posProv, 1);
  };

  $scope.addProveedor = function () {
    $scope.proveedores.push({
      nombre: $scope.nprov.nombre,
      cedula: $scope.nprov.cedula
    });
    $scope.nprov.nombre="";
    $scope.nprov.cedula=""
  };

  $scope.removeAll = function(){
    $scope.proveedores = []
  };


  $http.get('data/proveedores.json').then(function(data){
    $scope.proveedores=data.data;
  });
}]);


/**
* Controlador de la vista de horarios
*
*/
superApp.controller('HorarioController', ['$scope', '$http', function ($scope, $http) {

  $scope.eliminarHorario= function (rol) {
    var poshor = $scope.horario.indexOf(rol);
    $scope.horario.splice(poshor, 1);
  };

  $scope.addHorario = function () {
    $scope.horario.push({
      nombre: $scope.nhor.nombre,
      semana: $scope.nhor.semana,
      horas: $scope.nhor.horas,
      sucursal: $scope.nhor.sucursal,
    });
    $scope.nhor.nombre="";
    $scope.nhor.semana="";
    $scope.nhor.horas="";
    $scope.nhor.sucursal="";
  };

  $http.get('data/horario.json').then(function(data){
    $scope.horario=data.data;
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
