define([ "spec_helper", "Q"], function (mother, Q) {
  describe("Controller 2 Test", function () {
    it("Can work", function (done) {
      var scope = {};
      return mother.createController("route1Controller", {$scope: scope, $q: Q}).then(function (controller) {
      });
    });
  });
});
