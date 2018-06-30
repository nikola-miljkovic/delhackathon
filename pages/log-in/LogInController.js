
'use strict';

angular
    .module('PhoneBook')
    .controller('LogInController', ctrl);

ctrl.$inject = ['$scope', '$routeParams', '$location', '$uibModal', '$route', 'toastr'];

function ctrl($scope, $routeParams, $location, $uibModal, $route, toastr) {

    /*   var openToast=[];*/

    $scope.go = function (path) {
        $location.path(path);
    };
    $(document).ready(function() {
        var sideslider = $('[data-toggle=collapse-side]');
        var sel = sideslider.attr('data-target');
        var sel2 = sideslider.attr('data-target-2');
        sideslider.click(function(event){
            $(sel).toggleClass('in');
            $(sel2).toggleClass('out');
        });

        $("#fadeIn").addClass("displayInline");
        function myFunction() {
            setTimeout(function(){
                $("#fadeIn").removeClass("displayInline");
                $("#fadeIn").addClass("displayNone");
            }, 3000);
        }
        myFunction()

    });



}
