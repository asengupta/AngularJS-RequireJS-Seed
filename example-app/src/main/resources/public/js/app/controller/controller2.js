define([], function() {
  return function ($scope, $location, $q, service2) {
  	var deferred = $q.defer();
    console.log("In controller2");
    $scope.y = 23;
    deferred.resolve();
    return deferred.promise;
  };
});