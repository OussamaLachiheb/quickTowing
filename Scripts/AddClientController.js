towingApp.registerCrtl('AddClientController', function($scope, $http) {
    $scope.client = {};
    // calling our submit function.
    $scope.submitForm = function() {
        console.log($scope.client)
        $http({
                method: 'POST',
                url: 'http://localhost:4465/api/client',
                data: $.param($scope.client), //forms user object
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            })
            .success(function(data, status, headers, config) {
                if (data.errors) {
                    // Showing errors.
                    $scope.notok='il ya un erreur';
                } else {
                    $scope.message='Enregistrement effectué avec succées';
                    $scope.client={};
                }
            });
    };
});