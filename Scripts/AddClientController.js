//var towingApp = angular.module("towingApp", ['ngRoute']);

towingApp.registerCrtl('AddClientController', function($scope, $http) {
        $scope.client = {};
      // calling our submit function.
        $scope.submitForm = function() {
        // Posting data to our backend
        $http({
          method  : 'POST',
          url     : 'http://localhost:4465/api/client',
          data    : $scope.client, //forms user object
          headers : {'Content-Type': 'application/x-www-form-urlencoded'} 
         })
          .success(function(data) {
            if (data.errors) {
              // Showing errors.
              $scope.errorName = data.errors.name;
              $scope.errorUserName = data.errors.username;
              $scope.errorEmail = data.errors.email;
            } else {
              $scope.message = data.message;
            }
          });
        };
    });