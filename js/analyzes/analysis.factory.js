(function() {
    'use strict';
    
    angular
        .module('analyzes')
        .factory('AnalysisFactory', AnalysisFactory);

    AnalysisFactory.$inject = ['Analysis'];

    function AnalysisFactory(Analysis) {
        return {
            create: function() {
                return new Analysis();
            }
        };
    }
})();