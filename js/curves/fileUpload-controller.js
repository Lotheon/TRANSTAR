(function () {
    'use strict';
    angular
            .module('curves')
            .controller('FormCtrl', FormCtrl);
    FormCtrl.$inject = ['$scope', '$rootScope', 'FileUploader', 'CurveFactory'];

    function FormCtrl($scope, $rootScope, FileUploader, CurveFactory) {

        $scope.init = false;

        var vm = this;

        /*fonction d'initialisation*/
        vm.initService = function () {
            if ($scope.init === true) {
                document.getElementById('filename').value = "";
                vm.uploader.clearQueue();
                $scope.type = 'primary';
                $scope.labelsuccess = "";
                $scope.init = false;
            }
            $scope.init;
        };


        vm.uploader = new FileUploader({
            headers: {
                Authorization: 'Bearer ' + $rootScope.jwt
            },
            queueLimit: 1,
            url: "http://localhost/transtar-server-zmq/upload",
            formData: [
                //{name: "default"}, {etc.} exemple synthaxe si besoin
            ],
            onBeforeUploadItem: function (item) {
                var o = {
                    name: vm.formfile.name,
                    filename: item.file.name,
                    format: vm.formfile.format.toString(),
                    description: vm.formfile.description

                };
                item.formData.push(o);
            },
            onAfterAddingFile: function (item) {
                vm.fileName = item.file.name;
            },
            onProgressItem: function (item, progress) {
                /*NOTE : fonctionnement à confirmer => prend immédiatement la valeur de retour (100)*/
                
                var type;
                var value = vm.uploader.progress;
                if (value < 100) {
                    type = 'primary';
                    $scope.labelsuccess = "Loading... ";
                    $scope.type = type;
                } else {
                    type = 'success';
                    $scope.labelsuccess = "UPLOAD  COMPLETE  ! - ";
                }
                $scope.type = type;
            },
            onCompleteItem: function () {
                $scope.init = true;
            },
            onSuccessItem: function (data, item, response, status, headers) {

//                $scope.type = 'success';
                var curve = CurveFactory.create(vm.formfile.name, 'black');
                $scope.$parent.vm.curves.push(curve);
            },
            onErrorItem: function (item, response, status, headers) {
                alert("JS (fileUpload-controller) : Retour du callback onErrorItem => ERREUR !");
            }

        });

        console.log("JS : Test chargement FormCtrl OK !");
        vm.clearQueue = function () {
            vm.uploader.clearQueue(); /*clearQueue pour clean lors d'un drop après une première sélection*/
            console.log("JS : Test 'clearQueue()' pour drop OK !");
        };
        /*Méthode cancel pour bouton Reset*/
        vm.cancelAll = function () {
            vm.uploader.clearQueue();
            document.getElementById('name').value = "";
            document.getElementById('filename').value = "";
            document.getElementById('format').selectedIndex = 0;
            document.getElementById('description').value = "";
            $scope.type = 'primary';
            $scope.labelsuccess = "";
            
            vm.initService();
        };


        /*Ajouter des courbes en liste avec copy*/
//        vm.curves = [];
//        vm.addCurves = function () {
//            console.log(" Name : " + vm.formfile.name + "\n curveName : " + vm.fileName + "\n Format :" + vm.formfile.format + "\n Description : " + vm.formfile.description);
//            var curveCopy = angular.copy({
//                name: vm.formfile.name,
//                curveName: vm.fileName,
//                format: vm.formfile.format,
//                description: vm.formfile.description
//            });
//            console.log(" Name : " + curveCopy.name + "\n curveName : " + curveCopy.curveName + "\n Format : " + curveCopy.format + "\n Description : " + curveCopy.description);
//            vm.curves.push(curveCopy);
//            
//            /*$rootScope pour renvoyer les variables au 'curveController'*/
//            var curves = vm.curves;
//            $rootScope.curves = curves;
//            
//            var name = curveCopy.name;
//            $rootScope.name = name;
//            
//            var curveName = curveCopy.curveName;
//            $rootScope.curveName = curveName;
//            
//            var format = curveCopy.format;
//            $rootScope.format = format;
//            
//            var description = curveCopy.description;
//            $rootScope.description = description;
//            
//        };




    }
})();