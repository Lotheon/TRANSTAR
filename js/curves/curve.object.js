(function() {
    'use strict';
    
    angular
        .module('curves')
        .factory('Curve', Curve);
    
    function Curve() {
        // Constructeur, avec le nom de la classe
        function Curve(name, lineColor, lineStyle, lineThickness, pointStyle) {
            this.name =  name;
            this.lineColor = lineColor;
            this.lineStyle = lineStyle;
            this.lineThickness = lineThickness;
            this.pointStyle = pointStyle;
            this.display = true;
            this.filters = [];
            this.analyzes = [];
        };
        
        // On peut ajouter des fonctionnalités à notre objet ici
        
        return Curve;
    }
})();