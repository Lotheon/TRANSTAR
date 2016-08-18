(function() {
    'use strict';
    
    angular
            .module('curves')
            .factory('selectedCurve', selectedCurve);
    
    function selectedCurve() {
        var service = {
            curve: null
        };     
        return service;
    }
})();