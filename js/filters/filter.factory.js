(function() {
    'use strict';
    
    angular
        .module('filters')
        .factory('FilterFactory', FilterFactory);
    
    FilterFactory.$inject = ['Filter'];
    
    function FilterFactory(Filter) {
        return {
            create: function() {
                return new Filter();
            }
        };
    }
})();