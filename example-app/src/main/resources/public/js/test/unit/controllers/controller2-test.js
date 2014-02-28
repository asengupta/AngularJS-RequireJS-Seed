define(["spec_helper", "Q", "route2-controller"], function (mother, Q, Controller2Ctor) {
  describe("Controller 2 Test", function () {
    it("can set data on scope", function () {
      var service2 = { get: sinon.stub() };
      service2.get.returns(Q({fromService2: "Some Mock Data", fromService3: "More Mock Data"}));
      var location = { path: sinon.stub()};
      var scope = {};
      var controller = new Controller2Ctor(scope, location, Q, service2);
      return controller.loaded.then(function() {
        expect(scope.data).to.eql("Some Mock Data, More Mock Data");
      });
    });

    it("can navigate to another route", function () {
      var service2 = { get: sinon.stub() };
      service2.get.returns(Q({fromService2: "Some Mock Data", fromService3: "More Mock Data"}));
      var location = { path: sinon.stub()};
      var scope = {};
      var controller = new Controller2Ctor(scope, location, Q, service2);
      return controller.loaded.then(function() {
        scope.go();
        expect(location.path.calledWith("/route1")).to.be.ok;
      });
    });
  });
});
