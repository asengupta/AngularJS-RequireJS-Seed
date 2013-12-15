define(["service1", "Q"], function (Service1Ctor, Q) {
  describe("Service1", function () {
    it("should work, even if the HTTP call succeeds", function () {
      var httpResponse = {successful: false};
      var promise = Q.all(httpResponse);
      promise.success = function(onSuccess) {
        promise.then(function(data) { return onSuccess(data); });
        return promise;
      };
      promise.error = function(onError) {
        promise.fail(function(err) { return onError(err); });
        return promise;
      };
      var postStub = sinon.stub().returns(promise);
      var httpMock = {post: postStub};
      var service1 = new Service1Ctor(httpMock, Q);
      var request = {};
      var run = service1.get(request);
      return expect(run).to.be.rejected;
    });
  });
});
