(function () {
    'use strict';

    angular
            .module('colorpick')
            .directive('colorpick', colorpick);

    colorpick.$inject = ['$document'];

    function colorpick($document) {
        var directive = {
            restrict: 'E',
            templateUrl: 'partials/colorpick.html',
            scope: {
            },
            replace: true,
            require: 'colorpick',
            link: link,
            controller: ColorpickController,
            controllerAs: 'vm',
            bindToController: true
        };

        function link(scope, element, attributes, ColorpickController) {
            scope.$on('toggleColorPanel', function (e) {

                if (!ColorpickController.panelOpen) {
                    element.find('dd').find('ul').css('display', 'initial');
                    ColorpickController.panelOpen = true;
                } else {
                    element.find('dd').find('ul').css('display', 'none');
                    ColorpickController.panelOpen = false;
                }

            });

            scope.$on('selectColor', function (e, args) {

                var color = args.colorSelected;
                element.find('dt').find('a').find('span').html('<span class="color" style="background-color:' + color + '">&nbsp;&nbsp;&nbsp;&nbsp;</span>' + color + '<span class="value">' + color + '</span>');
                element.find('dd').find('ul').css('display', 'none');
                ColorpickController.panelOpen = false;

            });

//            var documentClickHandler = function (event) {
//                console.log(angular.element(event.target).parent().hasClass('dropdown'));
//                var eventOutsideTarget = (element[0] !== event.target) && (0 === element.find(event.target).length);
//                if (eventOutsideTarget) {
//                    scope.$apply(function () {
//                        console.log('coucou');
//                    });
//                }
//            };
//
//            $document.on("click", documentClickHandler);
//            scope.$on("$destroy", function () {
//                $document.off("click", documentClickHandler);
//            });

        }

        return directive;
    }

    ColorpickController.$inject = ['$scope', '$http'];

    function ColorpickController($scope, $http) {
        var vm = this;

        vm.colors = null;
        vm.colorSelected = null;
        vm.panelOpen = false;
        vm.togglePanel = togglePanel;
        vm.selectColor = selectColor;

        activate();

        function activate() {
            $http.get('json/colors.json').success(function (data, status, headers, config) {
                vm.colors = data;
            });
        }

        function togglePanel() {
            $scope.$broadcast('toggleColorPanel');
        }

        function selectColor(color) {
            vm.colorSelected = color;
            $scope.$broadcast('selectColor', {colorSelected: color});
        }
    }
})();