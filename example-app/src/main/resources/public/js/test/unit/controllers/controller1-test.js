define(["controller1", "Q"], function (Controller1, Q) {
  describe("Controller1 Test", function () {
    var testScopeMock, locationMock;

    beforeEach(function () {
      testScopeMock = {};
      locationMock = { path: sinon.stub(), search: sinon.stub()};
      locationMock.path.returns(locationMock);
      locationMock.search.returns(locationMock);
    });

    var initController = function () {
      return new Controller1();
    };

    describe("initialize", function () {
      it("works", function () {
        return initController().loaded.then(function () {
        });
      });
    });
  });
});
