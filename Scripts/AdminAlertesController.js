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
                  $('#deleterow').modal('hide');  
                    $scope.message=''; 
                }
            
            });
}
    
});