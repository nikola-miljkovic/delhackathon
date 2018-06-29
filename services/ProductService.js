
    'use strict';

    angular
        .module('PhoneBook')
        .factory('ProductService', serviceFn);

    serviceFn.$inject = ['$http', '$route', 'toastr'];

    function serviceFn($http, $route, toastr) {


      /*  var urlRoot = '';*/
      /*  console.log('$location',$location.$$absUrl);     ovo koristi umesto WebApiBaseUrl*/



        var service = {
            getProductByCode: getProductByCode,
        };

        return service;

        function getProductByCode() {
/*            var url = WebApiBaseUrl + urlRoot;
            return $http.get(url);*/
            var testData = [{
                productImg: "http://www.frikom.rs/datastore/imagestore/original/1420713264ZLATNA_MESAVINA_1122X700_PROIZVOD.jpg?v=0",
                productName: "Zlatna mešavina",
                category: "Voce i povrce",
                manufacturer: "Frikom",
                description: "Zlatna mešavina sastoji se od kukuruza šećerca, graška i šargarepe u kockicama," +
                " i vrlo je jednostavna za pripremu i dostupna tokom cele godine.",
                price: 169.99
            }];
            return testData;
        }
    }

