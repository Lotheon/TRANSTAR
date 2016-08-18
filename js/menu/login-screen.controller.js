(function () {
    'use strict';

    angular
            .module('menu')
            .controller('LoginScreenController', LoginScreenController);

    LoginScreenController.$inject = ['$http', '$rootScope'];

    function LoginScreenController($http, $rootScope) {
        var vm = this;
        
        vm.username = '';
        vm.password = '';

        vm.login = function () {
            var data = {
                username: vm.username,
                password: vm.password
            };
            
            $http.post('http://localhost/transtar-server-zmq/login', data).then(function (response) {
                $rootScope.jwt = response.data.jwt;
                // Pour l'affichage du token (à enlever quand tout fonctionne)
                vm.jwt = response.data.jwt;
            });
        };
    }
})();


