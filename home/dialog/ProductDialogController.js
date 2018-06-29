
    'use strict';

    angular
        .module('PhoneBook')
        .controller('ProductDialogController', ctrl);

    ctrl.$inject = ['$scope', '$routeParams', '$filter', '$location', 'DataService', '$uibModalInstance', 'product'];

    function ctrl($scope, $routeParams, $filter, $location, DataService, $uibModalInstance, product) {

        $scope.product = product;
        console.log("proiz dijalog", $scope.product)
        $scope.close = function () {
            $uibModalInstance.dismiss()
        };

      /*  $scope.save = function () {
            if(validate()){
               $scope.contact;

            }
            $scope.close()
        };


        function validate() {
            var valid = true;

            if (!$scope.contact || !$scope.contact.Name || ($scope.contact.Name === '') ||
            !$scope.contact.Phone || ($scope.contact.Phone === '') ||
            !$scope.contact.Mail || ($scope.contact.Mail === '')){
                swal("Phone Book", "Please input all data: Full Name, Phone number and Mail address")
            }
            return valid;
        }
*/

    }