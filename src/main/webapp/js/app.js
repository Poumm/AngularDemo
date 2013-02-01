'use strict';

var app = angular.module('app', []).
config(['$routeProvider', function($routeProvider) {
	  $routeProvider.
	  	  when('/home', {templateUrl: 'views/home.html',   controller: 'homeCtrl'}).
	      when('/countries', {templateUrl: 'views/country-list.html',   controller: 'listCountryCtrl'}).
	      when('/addCountry', {templateUrl: 'views/country-form.html', controller: 'addCountryCtrl'}).
	      otherwise({redirectTo: '/home'});
	}]);;

