
    'use strict';

    angular
        .module('PhoneBook')
        .config(routeFn);

    routeFn.$inject = ['$routeProvider'];

    function routeFn($routeProvider) {
        $routeProvider

            .when('/home',
                {
                    controller : 'HomeController',
                    templateUrl : 'home/home.html'
                })
            .when('/login',
                {
                    controller : 'LogInController',
                    templateUrl : 'pages/log-in/log-in.html'
                })
            .when('/location',
                {
                    controller : 'LocationController',
                    templateUrl : 'pages/location/location.html'
                })
            .when('/signin',
                {
                    controller : 'SignInController',
                    templateUrl : 'pages/sign-in/sign-in.html'
                })
            .otherwise({redirectTo: '/login'});
    }
