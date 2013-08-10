define([], function() {
  return function ($scope, $location, $q, service2) {
    console.log("In controller2");
    $scope.y = 23;
  };
});