
'use strict';

angular
    .module('PhoneBook')
    .controller('Screen_1Controller', ctrl);

ctrl.$inject = ['$scope', '$routeParams', '$filter', '$location', '$uibModal', '$route', 'toastr', 'ProductService'];

function ctrl($scope, $routeParams, $filter, $location, $uibModal, $route, toastr, ProductService) {

    /*   var openToast=[];*/
 $scope.totalCheck = 0;
    $scope.valueOfProduct = 0;


    $scope.updateChartAndRedirect = function () {
        $scope.valueOfProduct = 1;
        $scope.totalCheck = 374.99;
      /*  $location.path(  '/screen_3') */
      myFunction()
    };

    function myFunction() {
        setTimeout(function(){window.location.href = "http://localhost:63342/Veverion%20-%20Web/index.html?_ijt=9rfbbokcbj0muge1eihce5scho#!/screen_3#home";}, 3000);
    }



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
