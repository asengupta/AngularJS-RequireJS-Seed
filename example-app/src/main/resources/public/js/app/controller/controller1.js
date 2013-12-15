define([], function() {
  return function ($scope, service1, $q) {
  	var deferred = $q.defer();
    console.log("In controller1");
    deferred.resolve();
    return deferred.promise;
  };
});
