
'use strict';

angular
    .module('PhoneBook')
    .controller('PodCatDialogController', ctrl);

ctrl.$inject = ['$scope', '$routeParams', '$filter', '$location', 'DataService', '$uibModalInstance', 'podCat', 'ProductService'];

function ctrl($scope, $routeParams, $filter, $location, DataService, $uibModalInstance, podCat, ProductService) {

    $scope.podCat = podCat;

    $scope.close = function () {
        $uibModalInstance.dismiss()
    };


    $scope.subCategories =   ProductService.getSubCatByCategory();
   /* function getSubCat() {
        ProductService.getSubCategory().then(function (result) {
            var res = result.data;
            var x = [];
            for (var i = 0; i < res.length; i++){
                if (res[i].CategoryName === "Zdrava i dijetalna hrana " || res[i].CategoryName === "Zdrava i dijetalna hrana"){
                    x.push(res[i]);
                }
            }
            $scope.subCategories = x;
            $scope.podCat = $scope.subCategories[1].SubCategoryName;
        })
    }
    getSubCat();*/

    $scope.pickPodcat = function () {
        $uibModalInstance.close( $scope.podCat);
    };



}