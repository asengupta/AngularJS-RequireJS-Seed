define([], function() {
  return function ($scope, $location, $q, service2) {
  	var deferredLoaded = $q.defer();
  	this.loaded = deferredLoaded.promise;
	$scope.go = function() {
		$location.path("/route1");
	};

  $scope.changeSomeText = function() {
    $scope.data = "Some New Data";
  };

  $scope.refreshData = function() {
    return service2.get().then(function(data) {
      $scope.data = data;
    });
  };

    console.log("In controller2");
    service2.get().then(function(data) {
    	$scope.data = data;
    	deferredLoaded.resolve();
    });
  };
});