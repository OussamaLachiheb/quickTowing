towingApp.controller('NotificationController', ['$scope', '$http', function($scope, $http) {
    
    $scope.getAllAlerte=function(){
        $http({
            method: 'GET',
            url: 'http://localhost:4465/api/alerte/new',
        })
        .success(function(data, status, headers, config) {
            if (data.errors) {
                // Showing errors.
                $scope.notok = 'il ya un erreur';
            } else {
                $scope.alertes = data;
                $scope.numberalertes=data.length;

            }
        
        
        });
    }
    $scope.getAllAlerte();



       
}]);