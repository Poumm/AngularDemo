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
	$scope.country = {};
	$http.get('restapi/country/all').success(function(data) {
		$scope.countries = data;
	});
});
/**
 * Edit an existing country.
 * 
 * @param $scope
 * @param $http
 * @param $location
 * @param $i18n
 */
app.controller('editCountryCtrl', function editCountryCtrl($routeParams,
		$scope, $http, $location, i18n) {
	$scope.error = true;
	$scope.warn = false;
	$http({
		method : 'GET',
		url : "restapi/country/edit/" + $routeParams['iso']
	}).success(function(data, status) {
		$scope.country = data;
	}).error(function(data, status) {
		if (status == 404) {
			$scope.errorMessage = i18n.getString("countryNotExists");
			$scope.error = true;
		} else {
			$scope.errorMessage = "cassé !";
			$scope.error = true;
		}
	});
	$scope.goList = function(){
		$location.path("/countries");
	};

});
/**
 * Add a new country.
 * 
 * @param $scope
 * @param $http
 * @param $location
 */
app.controller('addCountryCtrl', function addCountryCtrl($scope, $http,
		$location) {
	$scope.error = false;
	$scope.warn = false;
	$http.put('restapi/country', $scope.country).success(function() {
		$http.get('restapi/country').success(function(data) {
			$scope.countries = data;
		});
		$scope.country = {};
		$scope.adding = false;
		$scope.warn = true;
		$scope.warnMessage = 'Country ' + $scope.country.name + ' just added.';
		$location.path('/countries');
	}).error(function(data, status) {
		if (status == 409) {
			$scope.errorMessage = 'This country already exists';
		} else {
			$scope.errorMessage = 'An error just occurred';

			$scope.error = true;
		}
	});
	$scope.goList = function(){
		$location.path("/countries");
	};
});
/**
 * Display Home !
 * 
 * @param $scope
 * @param $http
 */
app.controller('homeCtrl', function homeCtrl($scope, $http) {
	$scope.welcome = false;
	$scope.index = function() {
		$scope.welcome = true;
		if (!$scope.welcome) {
			alert("welcome !");
		}
	};
});