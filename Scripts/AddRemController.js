towingApp.registerCrtl('AddRemController', function($scope, $http, $timeout, NgMap) {
    $scope.remorqueur = {};
    NgMap.getMap().then(function(map) {
        console.log('markers', map.markers);
        console.log('shapes', map.shapes);
        //$scope.position = map.shapes.circle.center.lat();
        //$scope.position2 = map.shapes.circle.center.lng();
        //shape = map.shapes[0];
        $scope.centerChanged = function(event) {
        $timeout(function() {
            $scope.remorqueur.latitude = map.center.lat();
            $scope.remorqueur.longitude = map.center.lng();
        }, 3000);
    }

    });
        
    // calling our submit function.
    $scope.submitForm = function() {

        $http({
                method: 'POST',
                url: 'http://localhost:4465/api/remorqueur',
                data: $.param($scope.remorqueur), //forms user object
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            })
            .success(function(data, status, headers, config) {
                if (data.errors) {
                    // Showing errors.
                    $scope.notok_rem = 'il ya un erreur';
                } else {
                    $scope.message_rem = 'Enregistrement effectué avec succées';
                    $scope.remorqueur = {};
                }
            });
    };
});