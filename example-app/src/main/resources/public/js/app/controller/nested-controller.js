define([], function() {
  return function ($scope, $q, service2) {
  	var deferredLoaded = $q.defer();
  	this.loaded = deferredLoaded.promise;
    deferredLoaded.resolve();
    console.log("In nested controller");
    console.log("Service 2 is in nested as : " + JSON.stringify(service2));
    console.log("Service 2 is in nested has get? : " + service2.get);
    $scope.nestedControllerData = "Yayaya";
    console.log("Does my scope have lol? " + $scope.lol);
  };
});