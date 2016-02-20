towingApp.registerCrtl('clientsController', function($scope, $http) {
    
    $scope.getAllclient=function(){
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
    }
    $scope.getAllclient();
//cette fonction affiche le fenetre de modification client    
$scope.editrow=function(client ){
            $scope.client=client;
       $('#editClient').modal('show');
    }
$scope.confirmedit=function(){
delete $scope.client.Alertes;
    $http({
                method: 'PUT',
                url: 'http://localhost:4465/api/client/Update/'+$scope.client.cin,
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
                    $scope.message='Modification effectué avec succées';
                    $scope.client={};
                  $('#editClient').modal('hide');  
                }
            //scroll to top
            window.scrollTo(0,0);
            });
    
}
//ouvrir le message de confirmation de suppression
$scope.deleteclient=function(cin){
    $scope.cin=cin;
    $('#deleterow').modal('show');
}
$scope.confirmdelete=function(){
    $http({
                method: 'DELETE',
                url: 'http://localhost:4465/api/client/Remove/'+$scope.cin
                                
            })
            .success(function(data, status, headers, config) {
                if (data.errors) {
                    // Showing errors.
                    $scope.notok='il ya un erreur';
                } else {
                    $scope.message='Suppression effectué avec succées';                   
                    $scope.getAllclient();
                  $('#deleterow').modal('hide');  
                }
            
            });
}


       
});