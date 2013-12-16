define([], function() {
  return function ($scope, service1, $q) {
  	var deferredLoaded = $q.defer();
  	this.loaded = deferredLoaded.promise;

    console.log("In controller1");
  	service1.get().then(function(data) {
  		$scope.x = data;
  		deferredLoaded.resolve();
  	});
  };
});
