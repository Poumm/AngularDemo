'use strict';

var app = angular.module('app', []);

app.controller('listController', function listController($scope, $http) {
    $scope.predicate = 'iso';
    $scope.reverse = 'false';
    $scope.adding = false;
    $scope.countryToAdd = {};
    $http.get('restapi/country').success(function (data) {
            $scope.countries = data;
        });

    $scope.edit = function (client) {
        $scope.currentClient = client;
    };

    $scope.addCountry = function () {
        $scope.error = false;
        $http.put('restapi/country', $scope.countryToAdd)
                .success(function (){
                                     $http.get('restapi/country').success(function (data) {
                                         $scope.countries = data;
                                     });
                                     $scope.adding = false;
                                 })
                .error(function(data, status){
                                   $scope.error = true;
                                   if(status == 409){
                                       $scope.errorMessage = 'This country already exists';
                                   } else {
                                       $scope.errorMessage = 'An error just occurred';
                                   }

                               });
        };
});


app.filter('wikipedia', function () {
    return function (countryName) {
        return 'http://fr.wikipedia.org/wiki/' + countryName;
    }
});
