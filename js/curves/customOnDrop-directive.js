(function () {
    'use strict';
            angular
            .module('curves')
            .directive('customOnDrop', function () {
                return {
                    restrict: 'A',
                    link: function (scope, element, attrs) {
                        var onChangeHandler = scope.$eval(attrs.customOnDrop);
                        element.bind('drop', onChangeHandler);
                    }
                };
            });
})();


