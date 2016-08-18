(function() {
    'use strict';
    
    angular
        .module('curves')
        .factory('CurveFactory', CurveFactory);
    
    CurveFactory.$inject = ['Curve'];
    
    function CurveFactory(Curve) {
        return {
            create: function(name, lineColor, lineStyle, lineThickness, pointStyle) {
                return new Curve(name, lineColor, lineStyle, lineThickness, pointStyle);
            }
        };
    }
})();