 var superApp = angular.module('superApp',['ngRoute']);
/**
* Run before the app Start
**/
superApp.config(['$routeProvider',function($routeProvider){
  $routeProvider
  .when('/home', {
    templateUrl: 'views/home.html'
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

superApp.controller('SuperController', ['$scope', function ($scope) {

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

  $scope.message="Testing";
  $scope.roles = [
    {
      nombre: "Jefe",
      descripcion: "blue",
      available: true,
      thumb: "content/img/dare.png"
    },
    {
      nombre: "Gerente",
      descripcion: "red",
      available: true,
      thumb: "content/img/bat.png"
    },
    {
      nombre: "Contador",
      descripcion: "black",
      available: true,
      thumb: "content/img/wol.png"
    },
    {
      nombre: "Conserje",
      descripcion: "green",
      available: true,
      thumb: "content/img/spi.png"
    }
  ];


}]);
