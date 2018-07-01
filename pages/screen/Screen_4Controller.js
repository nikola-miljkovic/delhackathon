
'use strict';

angular
    .module('PhoneBook')
    .controller('Screen_4Controller', ctrl);

ctrl.$inject = ['$scope', '$routeParams', '$filter', '$location', '$uibModal', '$route', 'toastr', 'ProductService'];

function ctrl($scope, $routeParams, $filter, $location, $uibModal, $route, toastr, ProductService) {

    /*   var openToast=[];*/

    $scope.valueOfProduct = 2;
    $scope.totalCheck = 734.98;


    $scope.goOnSix = function (path) {
        $location.path(path);
    };


    $scope.scan = function () {
        Quagga.init({
            inputStream: {
                name: "Live",
                type: "LiveStream",
                constraints: {
                    width: 640,
                    height: 480,
                    facing: "environment"
                }
            },
            locator: {
                patchSize: "medium",
                halfSample: true
            },
            numOfWorkers: 4,
            locate: true,
            decoder : {
                readers: ["code_128_reader", "ean_reader"]
            }
        }, function() {
            Quagga.start();
        });

        Quagga.onDetected(function(result) {
            var code = result.codeResult.code;
            document.querySelector(".found").innerHTML = code;
            Quagga.stop();
            $("#interactive").addClass("quaggaDisplayNone")
            $scope.openDialogProduct = function () {
                $scope.openDialog();
            }
            $scope.openDialogProduct();

        });
    };



    $scope.openDialog = function (product) {
        var dialogOpts = {
            backdrop: 'static',
            keyboard: true,
            backdropClick: false,
            templateUrl: 'home/dialog/product-dialog.html',
            controller: 'ProductDialogController',
            resolve: {
                product: function () {
                    return angular.copy(product);
                }
            }
        }

        var dialog = $uibModal.open(dialogOpts);

        dialog.result.then(
            function (dialogItem) {
                if (dialogItem.Id){
                    openToast.push(toastr.success("Updated contact"))

                    // DataService.updateContact(dialogItem).then(function (response) {
                    //     // do something
                    // },
                    //     function (error) {
                    //     //do something
                    //     }
                    //     )
                }
                else
                    openToast.push(toastr.success("Created a new contact"))
                // DataService.addNewContact(dialogItem).then(function (response) {
                //     // do something
                // },
                //     function (error) {
                //     // do something
                //     }
                //     )
            }
        )
    };

    /*    function GetCategoryType() {
            $scope.items = ProductService.getCategoryGroup();
        }
        GetCategoryType();*/

    $scope.podCat = ProductService.getSubCatByCategory();

    $scope.openCatagory = function () {
        $("#ifFirst").remove();
        document.getElementById('categoryPlace').innerHTML = '<ul class="listOfCategory"><li ng-click="openPodCat()"><img class="categoryItemImg" src="resources/images/categoryImg/k01.png" /></li><li><img class="categoryItemImg" src="resources/images/categoryImg/k02.png" /></li><li><img class="categoryItemImg" src="resources/images/categoryImg/k03.png" /></li><li><img class="categoryItemImg" src="resources/images/categoryImg/k04.png" /></li><li><img class="categoryItemImg" src="resources/images/categoryImg/k05.png" /></li><li><img class="categoryItemImg" src="resources/images/categoryImg/k06.png" /></li><li><img class="categoryItemImg" src="resources/images/categoryImg/k07.png" /></li><li><img class="categoryItemImg" src="resources/images/categoryImg/k08.png" /></li><li><img class="categoryItemImg" src="resources/images/categoryImg/k09.png" /></li><li><img class="categoryItemImg" src="resources/images/categoryImg/k10.png" /></li><li><img class="categoryItemImg" src="resources/images/categoryImg/k11.png" /></li><li><img class="categoryItemImg" src="resources/images/categoryImg/k12.png" /></li><li><img class="categoryItemImg" src="resources/images/categoryImg/k13.png" /></li><li><img class="categoryItemImg" src="resources/images/categoryImg/k14.png" /></li><li><img class="categoryItemImg" src="resources/images/categoryImg/k15.png" /></li></ul>';
    };

    $scope.openPodCat = function () {
        $scope.openDialogPdkat();
    };

    $scope.openDialogPdkat = function (podCat) {
        var dialogOpts = {
            backdrop: 'static',
            keyboard: true,
            backdropClick: false,
            templateUrl: 'home/dialog/podCat-dialog.html',
            controller: 'PodCatDialogController',
            resolve: {
                podCat: function () {
                    return angular.copy(podCat);
                }
            }
        }

        var dialog = $uibModal.open(dialogOpts);

        dialog.result.then(
            function () {

                $scope.products =    ProductService.getProductBySubCat()/*.then(function (result) {
                        $scope.products = result.data;
                        console.log("proizvodi", $scope.products)
                    });*/
            }
        )
    };


    /*menu nav*/
    $(document).ready(function() {
        var sideslider = $('[data-toggle=collapse-side]');
        var sel = sideslider.attr('data-target');
        var sel2 = sideslider.attr('data-target-2');
        sideslider.click(function(event){
            $(sel).toggleClass('in');
            $(sel2).toggleClass('out');
        });
    });



}
/*  var doc =  ProductService.getCat();*/