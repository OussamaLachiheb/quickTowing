var towingApp = angular.module("towingApp", ['ngCookies']);

towingApp.controller('LoginController', ['$scope', '$http', '$cookies', '$cookieStore', '$window', function($scope, $http, $cookies, $cookieStore, $window) {
    $scope.user = {};
    var url = "";
    // calling our submit function.
    $scope.LoginUser = function() {
        // Admin
        if ($scope.user.role == 1) {
            if ($scope.user.username == 'admin' && $scope.user.password == 'admin') {
                $window.location.href = 'Views/admin/admin.html';
            } else

            {
                $scope.message = 'Login ou Mot de passe incorrect';
            }

        }
        //Client
        else if ($scope.user.role == 2) {
            var Client = {
                cin: $scope.user.username,
                password: $scope.user.password
            }
            $http({
                    method: 'POST',
                    url: 'http://localhost:4465/api/client/Login',
                    data: $.param(Client), //forms user object
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                    }
                })
                .success(function(data, status, headers, config) {
                    if (data) {
                        // Showing errors.
                        $cookies.put("userId", Client.cin);
                        $window.location.href = 'Views/client/client.html';
                    } else {
                        $scope.message = 'Login ou Mot de passe incorrect';
                    }
                });

        }
        //Remorqueur
        else {

            var Remorqueur = {
                matricule: $scope.user.username,
                password: $scope.user.password
            }
            $http({
                    method: 'POST',
                    url: 'http://localhost:4465/api/Remorqueur/Login',
                    data: $.param(Remorqueur), //forms user object
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                    }
                })
                .success(function(data, status, headers, config) {
                    if (data) {
                        $cookies.put("userId", Remorqueur.matricule);
                        $window.location.href = 'Views/remorqueur/remorqueur.html';
                    } else {
                        $scope.message = 'Login ou Mot de passe incorrect';
                    }
                });
        }

    };



    //console.log($cookies.get("key"))
}]);