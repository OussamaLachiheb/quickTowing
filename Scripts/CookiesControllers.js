towingApp.controller('ClientCookieController', ['$scope', '$http', '$cookies', '$cookieStore',  function ($scope, $http, $cookies, $cookieStore) {
    $scope.client = {};
    // calling our submit function.
    $scope.GetClient = function() {
        
        $http({
                method: 'Get',
                url: 'http://localhost:4465/api/client/ByCin/' + $cookies.get("userId"),

            })
            .success(function(data, status, headers, config) {
               
                $scope.client = data;

            });
    };
    $scope.GetClient();
}]);

towingApp.controller('RemorqueurCookieController', ['$scope', '$http', '$cookies', '$cookieStore',  function ($scope, $http, $cookies, $cookieStore) {
  
    $scope.remorqueur = {};
    // calling our submit function.
    $scope.GetRemorqueur= function () {

        $http({
            method: 'GET',
            url: 'http://localhost:4465/api/remorqueur/ByMatricule/' + $cookies.get("userId"),

        })
        .success(function (data, status, headers, config) {

            $scope.remorqueur = data;
        });
    };
  $scope.GetRemorqueur();
}]);