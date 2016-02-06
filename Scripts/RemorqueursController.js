towingApp.registerCrtl('RemorqueursController', function($scope, $http) {
    $http({
            method: 'GET',
            url: 'http://localhost:4465/api/remorqueur',
        })
        .success(function(data, status, headers, config) {
            if (data.errors) {
                // Showing errors.
                $scope.notok = 'il ya un erreur';
            } else {
                $scope.remorqueurs = data;

            }
        });

});