
    'use strict';

    angular
        .module('PhoneBook')
        .factory('ProductService', serviceFn);

    serviceFn.$inject = ['$http', '$route', 'toastr', '$location'];

    function serviceFn($http, $route, toastr, $location) {


      /*  var urlRoot = '';*/
      /*  console.log('$location',$location.$$absUrl);     ovo koristi umesto WebApiBaseUrl*/


      var WebApiBaseUrl = $location.protocol() + "://" + $location.host() + ":" + 9000;

        var service = {
            getProductByCode: getProductByCode,
            getCategoryGroup: getCategoryGroup,
            getSubCatByCategory: getSubCatByCategory,
            getCat: getCat,
       /*     getSubCategory: getSubCategory,*/
            getProductBySubCat: getProductBySubCat,
        };

        return service;

        function getCat() {
            var url = WebApiBaseUrl + "/category/";
            return $http.get(url);
        }

      /*  function getProductBySubCat() {
            var url = WebApiBaseUrl + "/product/category/:Organska hrana/";
            return $http.get(url);
        }*/

        function getProductBySubCat(){
            var testData = [
                {
                    name: "Musli organik bez dodatog secera 400g",
                    neto: "400g",
                    price: "374.99",
                    img: "resources/images/product/proizvod2.png",
                    description: "Napravljen od najkvalitetnijih integralnih žitarica, orašastih plodova i voća. Samo prirodni sastojci, bez dodatog šećera i konzervansa.",
                    category: "Zdrava i dijetalna hrana ",
                    subcategory: "Organska hrana",
                },
                {
                    name: "Napitak Alpro Badem bez secera 1L",
                    neto: "1l",
                    price: "359.99",
                    img: "resources/images/product/proizvod1.png",
                    description: "Napitak Alpro Badem bez secera 1L.",
                    category: "Mleko, mlečni proizvodi i jaja ",
                    subcategory: "Organska hrana",
                },
                {
                    name: "Sirovi kakao prah organski 100g",
                    neto: "100gr",
                    price: "299.99",
                    img: "resources/images/product/proizvod3.png",
                    description: "Sirovi kakao prah organski 100g.",
                    category: "Zdrava i dijetalna hrana ",
                    subcategory: "Organska hrana",
                },
                ];
           return testData;
        }

     /*   function getSubCategory() {
            var url = WebApiBaseUrl + "/subcategory/";
            return $http.get(url);*/
       /* }
*/
        function getProductByCode() {
/*            var url = WebApiBaseUrl + urlRoot;
            return $http.get(url);*/
            var testData = [{
                productImg: "resources/images/zlatnaMesavina.jpg",
                productName: "Zlatna mesavina",
                category: "Voce i povrce",
                manufacturer: "Frikom",
                description: "Zlatna mesavina sastoji se od kukuruza secerca, graska i sargarepe u kockicama," +
                " i vrlo je jednostavna za pripremu i dostupna tokom cele godine.",
                price: 169.99
            }];
            return testData;
        }
        function getCategoryGroup() {
            var icon = [
                {
                  imageIcon : "resources/images/categoryImg/k01.png"
                },
                {
                    imageIcon : "resources/images/categoryImg/k02.png"
                },
                {
                    imageIcon : "resources/images/categoryImg/k03.png"
                },
                {
                    imageIcon : "resources/images/categoryImg/k04.png"
                },
                {
                    imageIcon : "resources/images/categoryImg/k05.png"
                },
                {
                    imageIcon : "resources/images/categoryImg/k06.png"
                },
                {
                    imageIcon : "resources/images/categoryImg/k07.png"
                },
                {
                    imageIcon : "resources/images/categoryImg/k08.png"
                },
                {
                    imageIcon : "resources/images/categoryImg/k09.png"
                },
                {
                    imageIcon : "resources/images/categoryImg/k10.png"
                },
                {
                    imageIcon : "resources/images/categoryImg/k11.png"
                },
                {
                    imageIcon : "resources/images/categoryImg/k12.png"
                },
                {
                    imageIcon : "resources/images/categoryImg/k13.png"
                },
                {
                    imageIcon : "resources/images/categoryImg/k14.png"
                },
                {
                    imageIcon : "resources/images/categoryImg/k15.png"
                },
            ];
            return icon;
        }

        function getSubCatByCategory() {
            /*            var url = WebApiBaseUrl + urlRoot;
                        return $http.get(url);*/
            var podData = [{
                SubCategoryName: "Dobra hrana (254)",
            },
                {
                    SubCategoryName: "Dijetalna Hrana (86)",
                },
                {
                    SubCategoryName: "Bezglutenski proizvodi (118)",
                },
                {
                    SubCategoryName: "Organska hrana (64)",
                },
                {
                    SubCategoryName: "Cerealije i cereal barovi (182)",
                },
            ];
            return podData;
        }
    }

