define([], function() {
  return function ($scope, $location, $q, service2) {
  	var deferredLoaded = $q.defer();
  	this.loaded = deferredLoaded.promise;
	$scope.go = function() {
		console.log("Was called");
		$location.path("/route1");
	};

    console.log("In controller2");
    service2.get().then(function(data) {
    	$scope.data = data;
    	console.log("Service2 returned");
    	deferredLoaded.resolve();
    });
  };
});