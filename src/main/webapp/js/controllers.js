'use strict';

/**
 * Country list controller.
 * 
 * @param $scope
 * @param $http
 */
app.controller('listCountryCtrl', function listCountryCtrl($scope, $http) {
	$scope.predicate = 'iso';
	$scope.reverse = 'false';
	$scope.countryToAdd = {};
	$http.get('restapi/country').success(function(data) {
		$scope.countries = data;
	});

	$scope.edit = function(client) {
		$scope.currentClient = client;
	};
});
app.controller('addCountryCtrl', 
	function addCountryCtrl($scope, $http, $location) {
		$scope.addCountry = function() {
			$scope.error = false;
			$scope.warn = false;
			$http.put('restapi/country', $scope.countryToAdd).success(function() {
				$http.get('restapi/country').success(function(data) {
					$scope.countries = data;
				});
				$scope.countryToAdd = {};
				$scope.adding = false;
				$scope.warn=true;
				$scope.warnMessage = 'Country '+$scope.countryToAdd.name+' just added.';
				$location.path('/countries');
			}).error(function(data, status) {
				$scope.error = true;
				if (status == 409) {
					$scope.errorMessage = 'This country already exists';
				} else {
					$scope.errorMessage = 'An error just occurred';
				}	
		});
	};
});
app.controller('homeCtrl', function homeCtrl($scope, $http) {
	$scope.index = function() {
		$scope.adding = false;
	};
});