'use strict'

angular
    .module('PhoneBook')
    .directive('contactDetails', fun)

    fun.$inject = ['$uibModal', 'DataService', '$location', '$route', 'toastr'];

    function fun($uibModal, DataService, $location, $route, toastr) {
        return{
            restrict: 'AE',
            scope: {
                Id: '@',
                contact: '@'
            },
            link: function ($scope, element, attrs) {
                function getContact() {
                    $scope.$watch('contact', function () {
                        $scope.res = DataService.getContactById($scope.contact[7] + $scope.contact[8]);
                    })
                }
                getContact();

                $scope.delete = function (res) {
                    // DataService.deleteContact(res.Id);
                    $route.reload();
                    toastr.success("Successfully deleted contact");
                }
            },
            templateUrl: 'directives/contact-details.html'
        }
    }