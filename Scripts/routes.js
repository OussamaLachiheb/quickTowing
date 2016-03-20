
var towingApp = angular.module("towingApp", ['ngRoute','ngMap','ngCookies']);
  towingApp.config(['$routeProvider','$controllerProvider', function($routeProvider, $controllerProvider) {
      //register all controllers
      towingApp.registerCrtl=$controllerProvider.register;
      $routeProvider.
      when('/alertesAdmin', {
          templateUrl: '../admin/alertes_admin.html',
          
      }).
      when('/welcome', {
          templateUrl: '../admin/welcome.html',
          
      }).

      when('/clients', {
          templateUrl: '../admin/clients.html',
          
      }).
      when('/alertes_client', {
          templateUrl: '../client/client_alertes.html',
          
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
      when('/addalerte', {
          templateUrl: '../client/ajouterAlerte.html',
          
      }).
      when('/alertes', {
          templateUrl: '../client/alertesClient.html',
          
      }).
      when('/remorqueuralertes', {
          templateUrl: '../remorqueur/remorqueur_alertes.html',
          
      }).
      when('/remorqueursentalertes', {
          templateUrl: '../remorqueur/remorqueur_alertes_sent.html',
          
      }).

      otherwise({
          redirectTo: '/welcome'
      });
  }]);