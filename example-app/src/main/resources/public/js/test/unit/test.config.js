var tests = [];
var testNames = ["controller1-view-test.js",
"controller2-test.js",
"controller1-test.js",
"service1-test.js" ];
for (var file in window.__karma__.files) {
  if (window.__karma__.files.hasOwnProperty(file)) {
    for (var i in testNames) {
      if (new RegExp(testNames[i]).test(file)) {
        tests.push(file);
      }
    }
  }
}



require.config(
  {
    baseUrl: "/example/static/js",
    paths: {
      "test-setup": "test/unit/test-setup",
      angular: "lib/angular",
      mocha: "test/lib/mocha/mocha",
      chai: "test/lib/chai",
      Q: "test/lib/q",
      sinon: "test/lib/sinon-1.7.3",
      "jquery": "lib/jquery-1.8.2.min",
      spec_helper: "test/unit/spec-helper",
      text: "lib/text",
      mochaAsPromised: "test/lib/mocha-as-promised/mocha-as-promised",
      chaiAsPromised: "test/lib/chai-as-promised",
      chaiJquery: "test/lib/chai-jquery",
      duckAngular: "test/lib/duck-angular/duck-angular",
      underscore: "lib/underscore",
      "jasmine-as-promised": "test/lib/jasmine-as-promised",
      jasmineAsPromisedRequireJS: "test/lib/jasmine-as-promised-requirejs"
    },
    shim: {
      angular: { exports: "angular" },
      mocha: { exports: "mocha" },
      sinon: { exports: "sinon" },
      underscore: { exports: "_" },
      "jquery": { exports: "$"},
      "ng-i18n": {deps: ["angular"], exports: "i18n"},
      "jasmine-as-promised": {exports: "jasmineAsPromised"}
    },

    priority: ["angular"]
  }
);

