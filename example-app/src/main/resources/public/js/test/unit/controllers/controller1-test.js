define(["spec_helper", "Q", "test-setup", "chai", "sinon", "text", "chaiAsPromised", "chaiJquery", "app/app.config"], function (mother, Q) {
  describe("Controller1 Test", function () {
    it("sets up real registered service if dependency is not explicitly provided", function () {
      var testScopeMock = {};
      return mother.createController("route1Controller", { $scope: testScopeMock}).then(function(controller) {
        expect(testScopeMock.x).to.eql("Real Service1 Data");
      });
    });
  });
});
