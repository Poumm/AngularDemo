'use strict';

/**
 * Games list controller.
 */ 
function GameListCtrl($scope ,$http){
	$http.get('/rest/games/games.json').success(function(data) {
    	$scope.games = data;
  	});
}

/**
 * Game details controller.
 */ 
function GameDetailCtrl($scope, $routeParams, $http) {
	$scope.gameId = $routeParams.gameId;
	$http.get('/rest/game/games.json').success(function(data) {
		$scope.game = data;
	});
}