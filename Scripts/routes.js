
var towingApp = angular.module("towingApp", ['ngRoute','ngMap']);
  towingApp.config(['$routeProvider','$controllerProvider', function($routeProvider, $controllerProvider) {
      //register all controllers
      towingApp.registerCrtl=$controllerProvider.register;
      $routeProvider.
      when('/incidents', {
          templateUrl: '../admin/incidents.html',
          
      }).

      when('/clients', {
          templateUrl: '../admin/clients.html',
          
      }).
      when('/remorqueurs', {
          templateUrl: '../admin/remorqueurs.html',
          
      }).
      when('/addremorqueur', {
          templateUrl: '../admin/ajouterRemorqueur.html',
          
      }).
      
      when('/addclient', {
          templateUrl: '../admin/ajouterClient.html',
          
      }).

      otherwise({
          redirectTo: '/incidents'
      });
  }]);