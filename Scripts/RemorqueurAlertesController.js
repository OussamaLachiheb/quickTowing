towingApp.registerCrtl('RemorqueurAlertesController',function($scope, $http, $cookies) {

    $scope.getAllAlerte=function(){
        $http({
            method: 'GET',
            url: 'http://localhost:4465/api/Remorqueur/Interventions/' + $cookies.get("userId")
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

        $scope.editalerte = function (alerte,etat) {
            alerte.etat = etat;
            delete alerte.Client;
            delete alerte.Remorqueur;
           $http({
            method: 'PUT',
          url: 'http://localhost:4465/api/alerte/' + alerte.Id,
           data: $.param(alerte), //forms user object
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