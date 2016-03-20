towingApp.registerCrtl('AdminAlertesController',function($scope, $http, $cookies) {

    $scope.getAllAlerte=function(){
        $http({
            method: 'GET',
            url: 'http://localhost:4465/api/alerte'
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
$scope.deletealerte=function(id){
    $scope.id=id;
    $('#deleterow').modal('show');
}
$scope.confirmdelete=function(){
    $http({
                method: 'DELETE',
                url: 'http://localhost:4465/api/Alerte/'+$scope.id
                                
            })
            .success(function(data, status, headers, config) {
                if (data.errors) {
                    // Showing errors.
                    $scope.notok='il ya un erreur';
                } else {
                    $scope.message='Suppression effectué avec succées';                   
                    $scope.getAllAlerte();
                
                }
            
            });
}

$scope.editalerte = function (alerte, etat) {
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


$scope.findremorqueur = function (alerte) {
    $scope.alerte = alerte;

    $http({
        method: 'GET',
        url: 'http://localhost:4465/api/AlerteRemorqueur/'+alerte.Id,
    })
      .success(function(data, status, headers, config) {
          if (data.errors) {
              // Showing errors.
              $scope.notok = 'il ya un erreur';
          } else {
              $scope.remorqueurs = data;

          }
      });

    $('#findremorqueur').modal('show');
}


$scope.assignremorqueur= function()
{
    console.log($scope.ddlremorqueur);
    $scope.alerte.etat = 'Recherche Termine';
    $scope.alerte.matricule = $scope.ddlremorqueur;
    delete $scope.alerte.Client;
    delete $scope.alerte.Remorqueur;
    $http({
        method: 'PUT',
        url: 'http://localhost:4465/api/alerte/' + $scope.alerte.Id,
        data: $.param($scope.alerte), //forms user object
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
             $('#findremorqueur').modal('hide');
         }
         //scroll to top
         window.scrollTo(0, 0);
     });
}

    
});