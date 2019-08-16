var superApp = angular.module('superApp', ['ngRoute', 'ngAnimate']);
/**
* Run before the app Start
* Rutas de las pafinas
**/
superApp.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
    .when('/home', {
      templateUrl: 'views/home.html',
      controller: 'SuperController'
    })
    .when('/horario', {
      templateUrl: 'views/horario.html',
      controller: 'HorarioController'
    })
    .when('/login-success', {
      templateUrl: 'views/login-success.html',
      controller: 'LoginController'
    })
    .when('/login', {
      templateUrl: 'views/login.html',
      controller: 'LoginController'
    })
    .when('/a', {
      templateUrl: 'views/hora.html',
      controller: 'HorarioController'
    })
    .when('/roles', {
      templateUrl: 'views/roles.html',
      controller: 'SuperController'
    })
    .when('/sucursales', {
      templateUrl: 'views/sucursales.html',
      controller: 'SucursalesController'
    })
    .when('/proveedores', {
      templateUrl: 'views/proveedores.html',
      controller: 'ProveedoresController'
    })
    .when('/trabajadores', {
      templateUrl: 'views/trabajadores.html',
      controller: 'TrabajadoresController'
    })
    .when('/productos', {
      templateUrl: 'views/productos.html',
      controller: 'ProductosController'
    })
    .when('/compras', {
      templateUrl: 'views/compras.html',
      controller: 'ComprasController'
    })
    .otherwise({
      redirectTo: '/home'
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

  $scope.eliminarRol = function (rol) {
    var posRol = $scope.roles.indexOf(rol);
    $scope.roles.splice(posRol, 1);
  };

  $scope.addRol = function () {
    $scope.roles.push({
      nombre: $scope.nrol.nombre,
      descripcion: $scope.nrol.descripcion
    });
    $scope.nrol.nombre = "";
    $scope.nrol.descripcion = ""
  };

  $scope.removeAll = function () {
    $scope.roles = []
  };


  $http.get('data/roles.json').then(function (data) {
    $scope.roles = data.data;
  });
}]);

/**
*
*Controlador de la vista de gestion de Trabajadores
*
*/
superApp.controller('TrabajadoresController', ['$scope', '$http', function ($scope, $http) {
  $scope.eliminarTrabajador = function (trabajador) {
    var posTrab = $scope.trabajadores.indexOf(trabajador);
    $scope.trabajadores.splice(posTrab, 1);
  };

  $scope.addTrabajador = function () {
    $scope.trabajadores.push({
      nombre: $scope.ntrab.nombre,
      cedula: $scope.ntrab.cedula,
      fechaNacimiento: $scope.ntrab.fechaNacimiento,
      fechaIniTrabajo: $scope.ntrab.fechaIniTrabajo,
      sucursal: $scope.ntrab.sucursal,
      salarioPH: $scope.ntrab.salarioPH
    });
    $scope.ntrab.nombre = "";
    $scope.ntrab.cedula = "";
    $scope.ntrab.fechaNacimiento = "";
    $scope.ntrab.fechaIniTrabajo = "";
    $scope.ntrab.sucursal = "";
    $scope.ntrab.salarioPH = ""
  };

  $scope.removeAll = function () {
    $scope.trabajadores = []
  };

  $http.get('data/trabajadores.json').then(function (data) {
    $scope.trabajadores = data.data;
  });
}]);

/**
*Controlador de la vista de gestion de
*proveedores
*
*/
superApp.controller('ProveedoresController', ['$scope', '$http', function ($scope, $http) {

  $scope.eliminarProveedor = function (proveedor) {
    var posProv = $scope.proveedores.indexOf(proveedor);
    $scope.proveedores.splice(posProv, 1);
  };

  $scope.addProveedor = function () {
    $scope.proveedores.push({
      nombre: $scope.nprov.nombre,
      cedula: $scope.nprov.cedula
    });
    $scope.nprov.nombre = "";
    $scope.nprov.cedula = ""
  };

  $scope.removeAll = function () {
    $scope.proveedores = []
  };


  $http.get('data/proveedores.json').then(function (data) {
    $scope.proveedores = data.data;
  });
}]);

/**
*Controlador de la vista de gestion de
*productos
*
*/
superApp.controller('ProductosController', ['$scope', '$http', function ($scope, $http) {

  $scope.eliminarProducto = function (producto) {
    var posProd = $scope.productos.indexOf(producto);
    $scope.productos.splice(posProd, 1);
  };

  $scope.addProducto = function () {
    $scope.productos.push({
      nombre: $scope.nprod.nombre,
      descripcion: $scope.nprod.descripcion,
      codigoBarras: $scope.nprod.codigoBarras,
      proveedor: $scope.nprod.proveedor,
      precioCompra: $scope.nprod.precioCompra,
      impuesto: $scope.nprod.impuesto,
      descuento: $scope.nprod.descuento,
    });
    $scope.nprod.nombre = "";
    $scope.nprod.descripcion = "";
    $scope.nprod.codigoBarras = "";
    $scope.nprod.proveedor = "";
    $scope.nprod.precioCompra = "";
    $scope.nprod.impuesto = "";
    $scope.nprod.descuento = "";
  };

  $scope.removeAll = function () {
    $scope.productos = []
  };


  $http.get('data/productos.json').then(function (data) {
    $scope.productos = data.data;
  });
}]);

/**
*Controlador de la vista de gestion de las compras
*
*/
superApp.controller('ComprasController', ['$scope', '$http', function ($scope, $http) {

  $scope.eliminarCompra = function (compra) {
    var posComp = $scope.compras.indexOf(compra);
    $scope.compras.splice(posComp, 1);
  };

  $scope.addCompra = function () {
    $scope.compras.push({
      descripcion: $scope.ncomp.descripcion,
      fechaDeCompra: $scope.ncomp.fechaDeCompra,
      fechaRegistroCompra: $scope.ncomp.fechaRegistroCompra,
      proveedor: $scope.ncomp.proveedor,
      sucursalCompra: $scope.ncomp.sucursalCompra,
    });
    $scope.ncomp.descripcion = "";
    $scope.ncomp.fechaDeCompra = "";
    $scope.ncomp.fechaRegistroCompra = "";
    $scope.ncomp.proveedor = "";
    $scope.ncomp.sucursalCompra = "";
  };

  $scope.removeAll = function () {
    $scope.compras = []
  };


  $http.get('data/compras.json').then(function (data) {
    $scope.compras = data.data;
  });
}]);

/**
* Controlador de la vista de horarios
*
*/
superApp.controller('HorarioController', ['$scope', '$http', function ($scope, $http) {

  $scope.eliminarHorario = function (rol) {
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
    $scope.nhor.nombre = "";
    $scope.nhor.semana = "";
    $scope.nhor.horas = "";
    $scope.nhor.sucursal = "";
  };

  $http.get('data/horario.json').then(function (data) {
    $scope.horario = data.data;
  });
}]);

superApp.controller('SucursalesController', ['$scope', '$http', function ($scope, $http) {

  $scope.eliminarSucursal = function (rol) {
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
    $scope.nsuc.nombre = "";
    $scope.nsuc.direccion = "";
    $scope.nsuc.telefono = "";
    $scope.nsuc.administrador = "";
  };

  $http.get('data/sucursales.json').then(function (data) {
    $scope.sucursales = data.data;
  });
}]);

superApp.controller('LoginController', ['$scope', '$location', function ($scope, $location) {
  $scope.sendMessage = function () {
    $location.path('/login-success');

  };
}]);


superApp.controller('NavController', ['$scope', function ($scope) {

  $scope.path = function () {
    var nua = navigator.userAgent;
    var isAndroid = (nua.indexOf('Mozilla/5.0') > -1 && nua.indexOf('Android ') > -1 && nua.indexOf('AppleWebKit') > -1 && nua.indexOf('Chrome') === -1)
    if (isAndroid) {
      $scope.path.src = "'nav-mobile.html'";
    } else {
      $scope.path.src = "'nav-bar.html'";
    }
  };


}]);

function NavController() {
  $scope.navs = [{
    url: 'nav-mobile.html'
  }, {
    url: 'nav-bar.html'
  }];
  $scope.nav = $scope.navs[1];
  var nua = navigator.userAgent;
  var isAndroid = (nua.indexOf('Mozilla/5.0') > -1 && nua.indexOf('Android ') > -1 && nua.indexOf('AppleWebKit') > -1 && nua.indexOf('Chrome') === -1)
  if (isAndroid) {
    $scope.nav = $scope.navs[0];
  };

}
