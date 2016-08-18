(function () {
    'use strict';

    angular
            .module('curves')
            .controller('CurvesController', CurvesController);

    CurvesController.$inject = ['CurveFactory', '$modal', 'selectedCurve'];

    function CurvesController(CurveFactory, $modal, selectedCurve) {
        var vm = this;

        vm.add = add;
        vm.close = close;
        vm.curves = [];
        vm.del = del;
        vm.reset = reset;
//        vm.selectedCurve = null;
        vm.setSelectedCurve = setSelectedCurve;

        /*Ouverture modal NewCurve*/
        vm.openModalNewCurve = function () {
            var modalInstance = $modal.open({
                templateUrl: 'partials/modal.newCurve.html',
                controller: 'ModalNewCurveController',
                backdrop: 'static', // Interdit la fermeture modal sur clic extérieur
                controllerAs: 'vm',
//                size: 'md'
                windowClass: 'newCurve-modal-window' // Classe CSS pour fixer une taille à la modal, au lieu de 'md'
            });

            modalInstance.result.then(function (newCurves) {
                vm.curves = vm.curves.concat(newCurves);
            }, function () {

            });
        };

        function add(curve) {
            if (curve.name && curve.color) {
                vm.curves.push(CurveFactory.create(curve.name, curve.color));
                vm.newCurve = {};
            }
        }

        function del(curve) {
            var index = vm.curves.indexOf(curve);
            if (index !== -1) {
                vm.curves.splice(index, 1);
                vm.close();
            }
        }

        function close() {
            vm.selectedCurve = null;
        }

        function reset() {
            vm.newCurve = {};
        }

        function setSelectedCurve(curve) {
            selectedCurve.curve = curve;
        }

    }
})();