towingApp.registerCrtl('ClientAlertesController',function($scope, $http, $cookies) {
$http({
            method: 'GET',
            url: 'http://localhost:4465/api/client/Alertes/'+$cookies.get("userId")
        })
        .success(function(data, status, headers, config) {
            if (data.errors) {
                // Showing errors.
                $scope.notok = 'il ya un erreur';
            } else {
                $scope.myAlertes = data;

            }
        
        
        });
    
});