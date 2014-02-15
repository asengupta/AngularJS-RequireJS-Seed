define(["spec_helper", "Q"], function (mother, Q) {
  describe("Controller1 Test", function () {
    it("sets up real registered service if dependency is not explicitly provided", function () {
      var testScopeMock = {};
      runs(function() {
	      return mother.createController("route1Controller", { $scope: testScopeMock}).then(function(controller) {
	        expect(testScopeMock.x).to.eql("Real Service1 Dataddd");
	      });
      });
    });
  });
});
