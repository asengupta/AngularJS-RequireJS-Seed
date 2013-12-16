require(["test.config"], function() {
  require(["test-setup", "chai", "sinon", "text", "mochaAsPromised", "mocha", "chaiAsPromised", "chaiJquery", "app/app.config"],
    function (setup, chai, sinon, text, mochaAsPromised, mocha, chaiAsPromised, chaiJquery) {
      window.initApp = setup.initApp;
      window.setupApp = setup.setupApp;
      window.bootstrapApp = setup.bootstrapApp;

      mocha.setup("bdd");
      mocha.setup({timeout: 10000});
      mocha.ui("bdd");
      chai.Assertion.includeStack = true
      assert = chai.assert;
      should = chai.should;
      expect = chai.expect;
      mochaAsPromised(Mocha);
      chai.should();
      chai.use(chaiAsPromised);
      chai.use(chaiJquery);
      console.log("Ready");
      require([
        "test/unit/services/service1-test",

        "test/unit/controllers/controller1-test",
        "test/unit/controllers/controller2-test",

        "test/unit/ui/controller1-view-test"
      ], function () {
        if (window.mochaPhantomJS) {
          mochaPhantomJS.run();
        }
        else mocha.run();
        console.log("Complete!");
      });
    });
});

