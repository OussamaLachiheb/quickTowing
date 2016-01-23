  var TowingApp = angular.module("TowingApp", ['ngRoute']);
  TowingApp.config(['$routeProvider', function($routeProvider) {
      $routeProvider.

      when('/incidents', {
          templateUrl: '../admin/incidents.html',
          controller: 'incidentsController'
      }).

      when('/clients', {
          templateUrl: '../admin/clients.html',
          controller: 'clientsController'
      }).

      otherwise({
          redirectTo: '/clients'
      });
  }]);