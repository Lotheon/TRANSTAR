(function () {
    'use strict';
    
    angular
            .module('curves')
            .controller('PropertiesController', PropertiesController);
    
    PropertiesController.$inject = ['selectedCurve'];
    
    function PropertiesController(selectedCurve) {
        var vm = this;
        
        vm.selectedCurve = selectedCurve;
    }
    
})();


