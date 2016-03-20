towingApp.registerCrtl('RemorqueurAlertesSentController',function($scope, $http, $cookies) {

    $scope.getAllAlerte=function(){
        $http({
            method: 'GET',
            url: 'http://localhost:4465/api/alerte/sent'
        })
        .success(function(data, status, headers, config) {
            if (data.errors) {
                // Showing errors.
                $scope.notok = 'il ya un erreur';
            } else {
                $scope.myAlertes = data;

            }
        
        
        });
        }
        $scope.getAllAlerte();
    
    //ouvrir le message de confirmation de suppression

        $scope.postchoisir = function (alerte) {
            alerteremorquer={};
            alerteremorquer.idalerte=alerte.Id;
            alerteremorquer.idremorq=$cookies.get("userId");
            
            
            
           $http({
            method: 'POST',
          url: 'http://localhost:4465/api/AlerteRemorqueur',
           data: $.param(alerteremorquer), //forms user object
           headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
            }
           })
            .success(function (data, status, headers, config) {
                if (data.errors) {
                    // Showing errors.
                    $scope.notok = 'il ya un erreur';
                } else {
                    $scope.getAllAlerte();
                   
                }
                //scroll to top
                window.scrollTo(0, 0);
            });

}
    
});