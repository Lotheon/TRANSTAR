(function () {
    'use strict',
    
    angular
            .module('curves')
            .controller('FileChangeController', FileChangeController);
    
    FileChangeController.$inject = ['$scope'];
    
    function FileChangeController ($scope) {
        $scope.fileName = "";
        $scope.uploadFile = function(event) {
            $scope.fileName = event.target.files[0].name;
            console.log(event);
            $scope.$digest();
        };
    }
})();