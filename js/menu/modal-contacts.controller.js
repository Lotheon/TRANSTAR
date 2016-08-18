(function () {
    'use strict';

    angular
            .module('menu')
            .controller('ModalContactsController', ModalContactsController);

    ModalContactsController.$inject = ['$modalInstance', '$scope'];

    function ModalContactsController($modalInstance, $scope) {
        
        var vm = this;

        vm.close = function () {
            $modalInstance.close();
        };
        vm.cancel = function () {
            $modalInstance.dismiss('close');
        };
    }
})();