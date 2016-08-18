(function () {
    'use strict';
            angular
            .module('curves')
            .directive('customOnChange', function () {
                return {
                    restrict: 'A',
                    link: function (scope, element, attrs) {
                        var onChangeHandler = scope.$eval(attrs.customOnChange);
                        element.bind('change', onChangeHandler);
                    }
                };
            });
})();

