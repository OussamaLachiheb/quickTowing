towingApp.registerCrtl('AddRemController', function($scope, $http, NgMap) {
   NgMap.getMap().then(function(map) {
    console.log(map.getCenter());
    console.log('markers', map.markers);
    console.log('shapes', map.shapes);
  });
    $scope.client = {};        
    // calling our submit function.
    $scope.submitForm = function() {
        
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