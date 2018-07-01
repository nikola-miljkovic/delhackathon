
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
            .when('/screen_1',
                {
                    controller : 'Screen_1Controller',
                    templateUrl : 'pages/screen/screen_1.html'
                })
            .when('/screen_3',
                {
                    controller : 'Screen_3Controller',
                    templateUrl : 'pages/screen/screen_3.html'
                })
            .when('/screen_4',
                {
                    controller : 'Screen_4Controller',
                    templateUrl : 'pages/screen/screen_4.html'
                })
            .when('/screen_6',
                {
                    controller : 'Screen_6Controller',
                    templateUrl : 'pages/screen/screen_6.html'
                })
            .when('/screen_7',
                {
                    controller : 'Screen_7Controller',
                    templateUrl : 'pages/screen/screen_7.html'
                })
            .when('/screen_8',
                {
                    controller : 'Screen_8Controller',
                    templateUrl : 'pages/screen/screen_8.html'
                })
            .when('/screen_9',
                {
                    controller : 'Screen_9Controller',
                    templateUrl : 'pages/screen/screen_9.html'
                })
            .when('/screen_10',
                {
                    controller : 'Screen_10Controller',
                    templateUrl : 'pages/screen/screen_10.html'
                })
            .when('/screen_11',
                {
                    controller : 'Screen_11Controller',
                    templateUrl : 'pages/screen/screen_11.html'
                })
            .when('/signin',
                {
                    controller : 'SignInController',
                    templateUrl : 'pages/sign-in/sign-in.html'
                })
            .otherwise({redirectTo: '/login'});
    }
