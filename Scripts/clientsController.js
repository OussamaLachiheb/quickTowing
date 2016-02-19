towingApp.registerCrtl('clientsController', function($scope, $http) {
    $http({
            method: 'GET',
            url: 'http://localhost:4465/api/client',
        })
        .success(function(data, status, headers, config) {
            if (data.errors) {
                // Showing errors.
                $scope.notok = 'il ya un erreur';
            } else {
                $scope.clients = data;

            }
        
        
        });
//cette fonction affiche le fenetre de modification client    
$scope.editrow=function(client ){
            $scope.client=client;
       $('#editClient').modal('show');
    }
$scope.confirmedit=function(){

   
    $http.put('http://localhost:4465/api/client/Update/'+$scope.client.cin);
}
//ouvrir le message de confirmation de suppression
$scope.deleteclient=function(cin){
    $('#deleterow').modal('show');
}
$scope.confirmdelete=function(cin){
    
}


       
});