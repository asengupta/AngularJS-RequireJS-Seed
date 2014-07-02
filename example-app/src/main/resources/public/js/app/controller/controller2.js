define([], function() {
  return function ($scope, $location, $q, service2) {
    console.log("Scope has " + $scope.lol);
  	var deferredLoaded = $q.defer();
  	this.loaded = deferredLoaded.promise;
    console.log("Service2 is " + service2);
	$scope.go = function() {
		$location.path("/route1");
	};

  $scope.changeSomeText = function() {
    $scope.data = "Some New Data";
  };

  $scope.refreshData = function() {
    return service2.get().then(function(data) {
      $scope.data = data.fromService2 + ", " + data.fromService3;
    });
  };

    console.log("In controller2");
    service2.get().then(function(data) {
      console.log("Data is " + JSON.stringify(data));
    	$scope.data = data.fromService2 + ", " + data.fromService3;
    	deferredLoaded.resolve();
    });
  };
});