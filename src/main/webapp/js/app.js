'use strict';

var app = angular.module('app', ['ngResource']);

app.controller('listController', function listController($scope, $http) {
    $scope.predicate = 'iso';
    $scope.reverse = 'false';
    $http.get('restapi/country').success(function(data){
        $scope.countries = data;
    })

    $scope.edit = function (client) {
        $scope.currentClient = client;
    }
});


app.filter('wikipedia', function () {
    return function (countryName) {
        return 'http://fr.wikipedia.org/wiki/' + countryName;
    }
});
