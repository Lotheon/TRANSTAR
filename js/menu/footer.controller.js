(function () {
    'use strict';

    angular
            .module('menu')
            .controller('FooterController', FooterController);

    FooterController.$inject = ['$scope'];

    function FooterController($scope) {
        var vm = this;
        
        vm.date = new Date();
    }
})();

