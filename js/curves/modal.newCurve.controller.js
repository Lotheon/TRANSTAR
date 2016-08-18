// Controller du Modal New Curve

(function () {
    'use strict';

    angular
            .module('curves')
            .controller('ModalNewCurveController', ModalNewCurveController);

    ModalNewCurveController.$inject = ['$modalInstance', '$scope'];

    function ModalNewCurveController($modalInstance, $scope) {
        
        var vm = this;
        
        vm.curves = [];

        vm.close = function () {
            $modalInstance.close(vm.curves); // Fermeture modal
        };
        vm.cancel = function () {
            $modalInstance.dismiss('cancel'); // Annulation
        };
    }
})();




