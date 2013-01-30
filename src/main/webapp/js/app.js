'use strict';

var app = angular.module('app', ['ngResource']);

app.controller('listController', function listController($scope) {
    $scope.predicate = 'iso';
    $scope.reverse = 'false';
    $scope.countries = [
        {iso: 'FR', name: 'France'},
        {iso: 'US', name: 'Etats-Unis'}
    ];

    $scope.edit = function (client) {
        $scope.currentClient = client;
    }
});

app.filter('wikipedia', function () {
    return function (countryName) {
        return 'http://fr.wikipedia.org/wiki/' + countryName;
    }
});
