  var TowingApp = angular.module("TowingApp", ['ngRoute']);
  TowingApp.config(['$routeProvider', function($routeProvider) {
      $routeProvider.

      when('/incidents', {
          templateUrl: '../views/incidents.html',
          controller: 'incidentsController'
      }).

      when('/clients', {
          templateUrl: '../views/clients.html',
          controller: 'clientsController'
      }).

      otherwise({
          redirectTo: '/addStudent'
      });
  }]);