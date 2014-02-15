require(["/example/static/js/test/unit/test.config"], function() {
  require(["test-setup", "chai", "sinon", "text", "chaiAsPromised", "chaiJquery", "jasmineAsPromisedRequireJS", "app/app.config"],
    function (setup, chai, sinon, text, chaiAsPromised, chaiJquery) {
      window.initApp = setup.initApp;
      window.setupApp = setup.setupApp;
      window.bootstrapApp = setup.bootstrapApp;
      chai.Assertion.includeStack = true
      assert = chai.assert;
      should = chai.should;
      expect = chai.expect;
      chai.should();
      chai.use(chaiAsPromised);
      chai.use(chaiJquery);
      console.log("Ready");
      // jasmineAsPromised(jasmine);
      require.config(
      {
        deps: tests,
        callback: window.__karma__.start,
      });

  });
});
