
'use strict';

angular
    .module('PhoneBook')
    .controller('SignInController', ctrl);

ctrl.$inject = ['$scope', '$routeParams', '$location', '$uibModal', '$route', 'toastr'];

function ctrl($scope, $routeParams, $location, $uibModal, $route, toastr) {

    /*   var openToast=[];*/
    $scope.go = function (path) {
        $location.path(path);
        toastr.success("Uspesno ste kreirali profil")
    };
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