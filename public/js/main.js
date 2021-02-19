angular
  .module("myApp", ['diretivasMainModule', 'ngRoute'])
  .config(function name($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);

    $routeProvider.when('/fotos', {
      templateUrl: 'partials/principal.html',
      controller: 'FotosController as fts'
    });

    $routeProvider.when('/fotos/new', {
      templateUrl: 'partials/foto.html',
      controller: 'FotoController as ft'
    });

    $routeProvider.when('/fotos/edit/:fotoId', {
      templateUrl: 'partials/foto.html',
      controller: 'FotoController as ft'
    });

    $routeProvider.otherwise({ redirectTo: '/fotos' });
  });
