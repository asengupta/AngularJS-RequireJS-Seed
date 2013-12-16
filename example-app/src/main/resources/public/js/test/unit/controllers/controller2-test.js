define(["spec_helper", "Q", "route2-controller"], function (mother, Q, Controller2Ctor) {
  describe("Controller 2 Test", function () {
    it("Can work", function () {
      console.log("Starting");
      var service2 = { get: sinon.stub() };
      service2.get.returns(Q("Some Mock Data"));
      var location = { path: sinon.stub()};
      var scope = {}
      var controller = new Controller2Ctor(scope, location, Q, service2);
      return controller.loaded.then(function() {
        expect(scope.data).to.eql("Some Mock Data");
      });
      // return mother.createController("route1Controller", {$scope: scope, $q: Q}).then(function (controller) {
      // });
    });
  });
});
