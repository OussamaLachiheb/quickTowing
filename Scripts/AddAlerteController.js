towingApp.registerCrtl('AddAlerteController', function($scope, $http, $timeout, NgMap, $cookies) {
    $scope.alerte = {};
    $scope.alerte.cin=$cookies.get("userId");
    
    //getting today date
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1; //January is 0!
    var yyyy = today.getFullYear();
    if(dd<10) {
    dd='0'+dd
    } 
    if(mm<10) {
    mm='0'+mm
    } 
    $scope.alerte.date = dd+'/'+mm+'/'+yyyy;
    NgMap.getMap().then(function(map) {                
        $scope.alerte.latitude = map.center.lat();
        $scope.alerte.longitude = map.center.lng();
     

    });
        
    // calling our submit function.
    $scope.submitForm = function() {

        $http({
                method: 'POST',
                url: 'http://localhost:4465/api/alerte',
                data: $.param($scope.alerte), //forms user object
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            })
            .success(function(data, status, headers, config) {
                if (data.errors) {
                    // Showing errors.
                    $scope.notok_alerte = 'il ya un erreur';
                } else {
                    $scope.message_alerte = 'Enregistrement effectué avec succées';
                    $scope.alerte = {};
                    //scroll to top
                    window.scrollTo(0,0);
                }
            });
    };
});