towingApp.registerCrtl('RemorqueursController', function($scope, $http) {
    $scope.getAllrem=function(){
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
    
    }
    $scope.getAllrem();
    //cette fonction affiche le fenetre de modification client    
$scope.editrow=function(remorqueur){
            $scope.remorqueur=remorqueur;
       $('#editremorqueur').modal('show');
    }
$scope.confirmedit=function(){
delete $scope.remorqueur.Alertes;
    $http({
                method: 'PUT',
                url: 'http://localhost:4465/api/Remorqueur/Update/'+$scope.remorqueur.matricule,
                data: $.param($scope.remorqueur), //forms user object
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            })
            .success(function(data, status, headers, config) {
                if (data.errors) {
                    // Showing errors.
                    $scope.notok='il ya un erreur';
                } else {
                    $scope.message='Modification effectué avec succées';
                    $scope.remorqueur={};
                  $('#editremorqueur').modal('hide');  
                }
            //scroll to top
            window.scrollTo(0,0);
            });
    
}
//ouvrir le message de confirmation de suppression
$scope.deleteremorqueur=function(matricule){
    $scope.matricule=matricule
    $('#deleterow').modal('show');
}
$scope.confirmdelete=function(){
    $http({
                method: 'DELETE',
                url: 'http://localhost:4465/api/Remorqueur/Remove/'+$scope.matricule
                                
            })
            .success(function(data, status, headers, config) {
                if (data.errors) {
                    // Showing errors.
                    $scope.notok='il ya un erreur';
                } else {
                    $scope.message='Suppression effectué avec succées';                   
                    $scope.getAllrem();
                  $('#deleterow').modal('hide');  
                }
            
            });
}

});