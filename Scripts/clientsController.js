towingApp.registerCrtl('clientsController', function($scope, $http) {
    $http({
            method: 'GET',
            url: 'http://localhost:4465/api/client',
        })
        .success(function(data, status, headers, config) {
            if (data.errors) {
                // Showing errors.
                $scope.notok = 'il ya un erreur';
            } else {
                $scope.clients = data;

            }
        });

});