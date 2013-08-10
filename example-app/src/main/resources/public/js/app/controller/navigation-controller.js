define([], function() {
  return function ($scope, $location) {
  	$scope.gotoRoute1 = function() {
  		console.log("Going to route1");
  		$location.path("/route1");
  	};
  	$scope.gotoRoute2 = function() {
  		console.log("Going to route2");
  		$location.path("/route2");
  	};
  };
});
