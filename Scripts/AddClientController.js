towingApp.registerCrtl('AddClientController', function($scope, $http) {
       $scope.client = {};
     // calling our submit function.
       $scope.submitForm = function () {
           console.log($scope.client)
           // Posting data to our backend
           //var client = new Object();
           //client.cin = '124578';
       $http({
         method : 'POST',
         url: 'http://localhost:4465/api/client',
         data: $.param($scope.client),//forms user object
         headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
        })
         .success(function(data, status, headers, config) {
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