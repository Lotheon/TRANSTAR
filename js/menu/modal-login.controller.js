
(function () {
    'use strict';

    angular
            .module('menu')
            .controller('ModalLoginController', ModalLoginController);

    ModalLoginController.$inject = ['$modalInstance', '$http', '$rootScope'];

    function ModalLoginController($modalInstance, $http, $rootScope) {
        var vm = this;
        
        vm.username = '';
        vm.password = '';

        vm.close = function () {
            $modalInstance.close();
        };
        vm.login = function () {
            var data = {
                username: vm.username,
                password: vm.password
            };
            
            $http.post('http://localhost/transtar-server-zmq/login', data).then(function (response) {
                $rootScope.jwt = response.data.jwt;
                // Pour l'affichage du token dans modal (à enlever quand tout fonctionne)
                vm.jwt = response.data.jwt;
            });
        };
    }
})();