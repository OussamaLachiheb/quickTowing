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
towingApp.controller('RemorqueurNotificationController', ['$scope', '$http','$cookies', '$cookieStore', function($scope, $http, $cookies, $cookieStore) {
    
    $scope.getAllAlerte=function(){
        $http({
            method: 'GET',
            url: 'http://localhost:4465/api/Remorqueur/Interventions/'+$cookies.get("userId")+'/null',
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