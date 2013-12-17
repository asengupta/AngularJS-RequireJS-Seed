define(["service1", "Q"], function (Service1Ctor, Q) {
  describe("Service1", function () {
    it.skip("should work, even if the HTTP call succeeds", function () {
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
      var getStub = sinon.stub().returns(promise);
      var httpMock = {get: getStub};
      var service1 = new Service1Ctor(httpMock, Q);
      var run = service1.getHttp("http://google.com");
      return expect(run).to.be.fulfilled;
    });
  });
});
