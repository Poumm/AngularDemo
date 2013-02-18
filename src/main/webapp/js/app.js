'use strict';

var app = angular.module('app', []).
config(['$routeProvider', function($routeProvider) {
	  $routeProvider
	  	  .when('/home', {templateUrl: 'partials/home.html',   controller: 'homeCtrl'})
	      .when('/countries', {templateUrl: 'partials/country-list.html',   controller: 'listCountryCtrl'})
	      .when('/country/add', {templateUrl: 'partials/country-form.html', controller: 'addCountryCtrl'})
	      .when('/country/edit/:iso', {templateUrl: 'partials/country-form.html', controller: 'editCountryCtrl'})
	      .otherwise({redirectTo: '/home'});
	}]);
