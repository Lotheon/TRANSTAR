(function () {
    'use strict';

    angular
            .module('menu')
            .controller('MenuController', MenuController);

    MenuController.$inject = ['$modal'];

    function MenuController($modal) {
        var vm = this;

        vm.openContacts = function () {
            $modal.open({
                templateUrl: 'partials/contacts.html',
                controller: 'ModalContactsController',
                controllerAs: 'vm',
                size: 'md',
                backdrop: 'static'  
            });
        };
        
        vm.openLogin = function () {
            $modal.open({
                templateUrl: 'partials/login.html',
                controller: 'ModalLoginController',
                controllerAs: 'vm',
                size: 'sm',
                backdrop: 'static'
//                windowClass: '' /*classe CSS pour fixer attributs (notamment de taille) à la modale*/
            });
        };    
    }
})();