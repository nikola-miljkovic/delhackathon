'use strict'

angular
    .module('PhoneBook')
    .factory('DataService', serviceFn);

    serviceFn.$inject = ['$http'];

    function serviceFn($http) {
        var service = {
            getAllContact: getAllContact,
            deleteContact: deleteContact,
            updateContact: updateContact,
            addNewContact: addNewContact,
            getContactById: getContactById,
        };
        return service;
    }

    function getAllContact() {
        var testData1 = [
            {Id: '10', Name: 'Marija Petrovic', Mail: 'm.petrovic.com', Phone: '06555667788'},
            {Id: '11', Name: 'Marko Jankovic', Mail: 'm.jankovic@gmail.com', Phone: '06411223344'},
            {Id: '12', Name: 'Mica Peric', Mail: 'm.peric.com', Phone: '06555667788'},
            {Id: '13', Name: 'Mica Zikic', Mail: 'm.zikic.com', Phone: '06555667788'},
            {Id: '14', Name: 'Aleksandar Jovanovic', Mail: 'a.jovanovic.com', Phone: '06555667788'},
            {Id: '15', Name: 'Igor Spasic', Mail: 'i.spasic.com', Phone: '06555667788'},
            {Id: '16', Name: 'Nikola Radovic', Mail: 'n.radovic.com', Phone: '06555667788'},
            {Id: '17', Name: 'Stevan Vitkovic', Mail: 's.vitkovic.com', Phone: '06555667788'},
            {Id: '18', Name: 'Goran Spasojevic', Mail: 'g.spasojevic.com', Phone: '06555667788'},
            {Id: '19', Name: 'Maja Perisic', Mail: 'm.perisic.com', Phone: '06555667788'},
            {Id: '20', Name: 'Marija Petrovic', Mail: 'm.petrovic.com', Phone: '06555667788'},
            {Id: '21', Name: 'Marko Jankovic', Mail: 'm.jankovic@gmail.com', Phone: '06411223344'},
            {Id: '22', Name: 'Mica Peric', Mail: 'm.peric.com', Phone: '06555667788'},
            {Id: '23', Name: 'Mica Zikic', Mail: 'm.zikic.com', Phone: '06555667788'},
            {Id: '24', Name: 'Aleksandar Jovanovic', Mail: 'a.jovanovic.com', Phone: '06555667788'},
            {Id: '25', Name: 'Igor Spasic', Mail: 'i.spasic.com', Phone: '06555667788'},
            {Id: '26', Name: 'Nikola Radovic', Mail: 'n.radovic.com', Phone: '06555667788'},
            {Id: '27', Name: 'Stevan Vitkovic', Mail: 's.vitkovic.com', Phone: '06555667788'},
            {Id: '28', Name: 'Goran Spasojevic', Mail: 'g.spasojevic.com', Phone: '06555667788'},
            {Id: '29', Name: 'Maja Perisic', Mail: 'm.perisic.com', Phone: '06555667788'},
            {Id: '30', Name: 'Marija Petrovic', Mail: 'm.petrovic.com', Phone: '06555667788'},
            {Id: '31', Name: 'Marko Jankovic', Mail: 'm.jankovic@gmail.com', Phone: '06411223344'},
            {Id: '32', Name: 'Mica Peric', Mail: 'm.peric.com', Phone: '06555667788'},
            {Id: '33', Name: 'Mica Zikic', Mail: 'm.zikic.com', Phone: '06555667788'},
            {Id: '34', Name: 'Aleksandar Jovanovic', Mail: 'a.jovanovic.com', Phone: '06555667788'},
            {Id: '35', Name: 'Igor Spasic', Mail: 'i.spasic.com', Phone: '06555667788'},
            {Id: '36', Name: 'Nikola Radovic', Mail: 'n.radovic.com', Phone: '06555667788'},
            {Id: '37', Name: 'Stevan Vitkovic', Mail: 's.vitkovic.com', Phone: '06555667788'},
            {Id: '38', Name: 'Goran Spasojevic', Mail: 'g.spasojevic.com', Phone: '06555667788'},
            {Id: '39', Name: 'Maja Perisic', Mail: 'm.perisic.com', Phone: '06555667788'},
            {Id: '40', Name: 'Marija Petrovic', Mail: 'm.petrovic.com', Phone: '06555667788'},
            {Id: '41', Name: 'Marko Jankovic', Mail: 'm.jankovic@gmail.com', Phone: '06411223344'},
            {Id: '42', Name: 'Mica Peric', Mail: 'm.peric.com', Phone: '06555667788'},
            {Id: '43', Name: 'Mica Zikic', Mail: 'm.zikic.com', Phone: '06555667788'},
            {Id: '44', Name: 'Aleksandar Jovanovic', Mail: 'a.jovanovic.com', Phone: '06555667788'},
            {Id: '45', Name: 'Igor Spasic', Mail: 'i.spasic.com', Phone: '06555667788'},
            {Id: '46', Name: 'Nikola Radovic', Mail: 'n.radovic.com', Phone: '06555667788'},
            {Id: '47', Name: 'Stevan Vitkovic', Mail: 's.vitkovic.com', Phone: '06555667788'},
            {Id: '48', Name: 'Goran Spasojevic', Mail: 'g.spasojevic.com', Phone: '06555667788'},
            {Id: '49', Name: 'Maja Perisic', Mail: 'm.perisic.com', Phone: '06555667788'},
            {Id: '50', Name: 'Marija Petrovic', Mail: 'm.petrovic.com', Phone: '06555667788'},
            {Id: '51', Name: 'Marko Jankovic', Mail: 'm.jankovic@gmail.com', Phone: '06411223344'},
            {Id: '52', Name: 'Mica Peric', Mail: 'm.peric.com', Phone: '06555667788'},
            {Id: '53', Name: 'Mica Zikic', Mail: 'm.zikic.com', Phone: '06555667788'},
            {Id: '54', Name: 'Aleksandar Jovanovic', Mail: 'a.jovanovic.com', Phone: '06555667788'},
            {Id: '55', Name: 'Igor Spasic', Mail: 'i.spasic.com', Phone: '06555667788'},
            {Id: '56', Name: 'Nikola Radovic', Mail: 'n.radovic.com', Phone: '06555667788'},
            {Id: '57', Name: 'Stevan Vitkovic', Mail: 's.vitkovic.com', Phone: '06555667788'},
            {Id: '58', Name: 'Goran Spasojevic', Mail: 'g.spasojevic.com', Phone: '06555667788'},
            {Id: '59', Name: 'Maja Perisic', Mail: 'm.perisic.com', Phone: '06555667788'},
            {Id: '60', Name: 'Marija Petrovic', Mail: 'm.petrovic.com', Phone: '06555667788'},
            {Id: '61', Name: 'Marko Jankovic', Mail: 'm.jankovic@gmail.com', Phone: '06411223344'},
            {Id: '62', Name: 'Mica Peric', Mail: 'm.peric.com', Phone: '06555667788'},
            {Id: '63', Name: 'Mica Zikic', Mail: 'm.zikic.com', Phone: '06555667788'},
            {Id: '64', Name: 'Aleksandar Jovanovic', Mail: 'a.jovanovic.com', Phone: '06555667788'},
            {Id: '65', Name: 'Igor Spasic', Mail: 'i.spasic.com', Phone: '06555667788'},
            {Id: '66', Name: 'Nikola Radovic', Mail: 'n.radovic.com', Phone: '06555667788'},
            {Id: '67', Name: 'Stevan Vitkovic', Mail: 's.vitkovic.com', Phone: '06555667788'},
            {Id: '68', Name: 'Goran Spasojevic', Mail: 'g.spasojevic.com', Phone: '06555667788'},
            {Id: '69', Name: 'Maja Perisic', Mail: 'm.perisic.com', Phone: '06555667788'},
        ];

        return testData1;
    }

    function deleteContact() {
        // var url = ....
        // return $http.delete(url)
    }

    function addNewContact(item) {
        // var url = WebApiBaseUrl + '/api/contacts/add/' + item;
        // return $http.post(url)
    }

    function updateContact(id, model) {
        // var url = WebApiBaseUrl + '/api/contacts/update/' + id + model;
        // return $http.put(id, model)
    }

    function getContactById(id) {
        var testData1 = [
            {Id: '10', Name: 'Marija Petrovic', Mail: 'm.petrovic.com', Phone: '06555667788'},
            {Id: '11', Name: 'Marko Jankovic', Mail: 'm.jankovic@gmail.com', Phone: '06411223344'},
            {Id: '12', Name: 'Mica Peric', Mail: 'm.peric.com', Phone: '06555667788'},
            {Id: '13', Name: 'Mica Zikic', Mail: 'm.zikic.com', Phone: '06555667788'},
            {Id: '14', Name: 'Aleksandar Jovanovic', Mail: 'a.jovanovic.com', Phone: '06555667788'},
            {Id: '15', Name: 'Igor Spasic', Mail: 'i.spasic.com', Phone: '06555667788'},
            {Id: '16', Name: 'Nikola Radovic', Mail: 'n.radovic.com', Phone: '06555667788'},
            {Id: '17', Name: 'Stevan Vitkovic', Mail: 's.vitkovic.com', Phone: '06555667788'},
            {Id: '18', Name: 'Goran Spasojevic', Mail: 'g.spasojevic.com', Phone: '06555667788'},
            {Id: '19', Name: 'Maja Perisic', Mail: 'm.perisic.com', Phone: '06555667788'},
            {Id: '20', Name: 'Marija Petrovic', Mail: 'm.petrovic.com', Phone: '06555667788'},
            {Id: '21', Name: 'Marko Jankovic', Mail: 'm.jankovic@gmail.com', Phone: '06411223344'},
            {Id: '22', Name: 'Mica Peric', Mail: 'm.peric.com', Phone: '06555667788'},
            {Id: '23', Name: 'Mica Zikic', Mail: 'm.zikic.com', Phone: '06555667788'},
            {Id: '24', Name: 'Aleksandar Jovanovic', Mail: 'a.jovanovic.com', Phone: '06555667788'},
            {Id: '25', Name: 'Igor Spasic', Mail: 'i.spasic.com', Phone: '06555667788'},
            {Id: '26', Name: 'Nikola Radovic', Mail: 'n.radovic.com', Phone: '06555667788'},
            {Id: '27', Name: 'Stevan Vitkovic', Mail: 's.vitkovic.com', Phone: '06555667788'},
            {Id: '28', Name: 'Goran Spasojevic', Mail: 'g.spasojevic.com', Phone: '06555667788'},
            {Id: '29', Name: 'Maja Perisic', Mail: 'm.perisic.com', Phone: '06555667788'},
            {Id: '30', Name: 'Marija Petrovic', Mail: 'm.petrovic.com', Phone: '06555667788'},
            {Id: '31', Name: 'Marko Jankovic', Mail: 'm.jankovic@gmail.com', Phone: '06411223344'},
            {Id: '32', Name: 'Mica Peric', Mail: 'm.peric.com', Phone: '06555667788'},
            {Id: '33', Name: 'Mica Zikic', Mail: 'm.zikic.com', Phone: '06555667788'},
            {Id: '34', Name: 'Aleksandar Jovanovic', Mail: 'a.jovanovic.com', Phone: '06555667788'},
            {Id: '35', Name: 'Igor Spasic', Mail: 'i.spasic.com', Phone: '06555667788'},
            {Id: '36', Name: 'Nikola Radovic', Mail: 'n.radovic.com', Phone: '06555667788'},
            {Id: '37', Name: 'Stevan Vitkovic', Mail: 's.vitkovic.com', Phone: '06555667788'},
            {Id: '38', Name: 'Goran Spasojevic', Mail: 'g.spasojevic.com', Phone: '06555667788'},
            {Id: '39', Name: 'Maja Perisic', Mail: 'm.perisic.com', Phone: '06555667788'},
            {Id: '40', Name: 'Marija Petrovic', Mail: 'm.petrovic.com', Phone: '06555667788'},
            {Id: '41', Name: 'Marko Jankovic', Mail: 'm.jankovic@gmail.com', Phone: '06411223344'},
            {Id: '42', Name: 'Mica Peric', Mail: 'm.peric.com', Phone: '06555667788'},
            {Id: '43', Name: 'Mica Zikic', Mail: 'm.zikic.com', Phone: '06555667788'},
            {Id: '44', Name: 'Aleksandar Jovanovic', Mail: 'a.jovanovic.com', Phone: '06555667788'},
            {Id: '45', Name: 'Igor Spasic', Mail: 'i.spasic.com', Phone: '06555667788'},
            {Id: '46', Name: 'Nikola Radovic', Mail: 'n.radovic.com', Phone: '06555667788'},
            {Id: '47', Name: 'Stevan Vitkovic', Mail: 's.vitkovic.com', Phone: '06555667788'},
            {Id: '48', Name: 'Goran Spasojevic', Mail: 'g.spasojevic.com', Phone: '06555667788'},
            {Id: '49', Name: 'Maja Perisic', Mail: 'm.perisic.com', Phone: '06555667788'},
            {Id: '50', Name: 'Marija Petrovic', Mail: 'm.petrovic.com', Phone: '06555667788'},
            {Id: '51', Name: 'Marko Jankovic', Mail: 'm.jankovic@gmail.com', Phone: '06411223344'},
            {Id: '52', Name: 'Mica Peric', Mail: 'm.peric.com', Phone: '06555667788'},
            {Id: '53', Name: 'Mica Zikic', Mail: 'm.zikic.com', Phone: '06555667788'},
            {Id: '54', Name: 'Aleksandar Jovanovic', Mail: 'a.jovanovic.com', Phone: '06555667788'},
            {Id: '55', Name: 'Igor Spasic', Mail: 'i.spasic.com', Phone: '06555667788'},
            {Id: '56', Name: 'Nikola Radovic', Mail: 'n.radovic.com', Phone: '06555667788'},
            {Id: '57', Name: 'Stevan Vitkovic', Mail: 's.vitkovic.com', Phone: '06555667788'},
            {Id: '58', Name: 'Goran Spasojevic', Mail: 'g.spasojevic.com', Phone: '06555667788'},
            {Id: '59', Name: 'Maja Perisic', Mail: 'm.perisic.com', Phone: '06555667788'},
            {Id: '60', Name: 'Marija Petrovic', Mail: 'm.petrovic.com', Phone: '06555667788'},
            {Id: '61', Name: 'Marko Jankovic', Mail: 'm.jankovic@gmail.com', Phone: '06411223344'},
            {Id: '62', Name: 'Mica Peric', Mail: 'm.peric.com', Phone: '06555667788'},
            {Id: '63', Name: 'Mica Zikic', Mail: 'm.zikic.com', Phone: '06555667788'},
            {Id: '64', Name: 'Aleksandar Jovanovic', Mail: 'a.jovanovic.com', Phone: '06555667788'},
            {Id: '65', Name: 'Igor Spasic', Mail: 'i.spasic.com', Phone: '06555667788'},
            {Id: '66', Name: 'Nikola Radovic', Mail: 'n.radovic.com', Phone: '06555667788'},
            {Id: '67', Name: 'Stevan Vitkovic', Mail: 's.vitkovic.com', Phone: '06555667788'},
            {Id: '68', Name: 'Goran Spasojevic', Mail: 'g.spasojevic.com', Phone: '06555667788'},
            {Id: '69', Name: 'Maja Perisic', Mail: 'm.perisic.com', Phone: '06555667788'},
    ];

        return testData1[id];
    }