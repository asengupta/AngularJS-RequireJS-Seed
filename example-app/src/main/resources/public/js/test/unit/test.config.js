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
    },
    shim: {
      angular: { exports: "angular" },
      mocha: { exports: "mocha" },
      sinon: { exports: "sinon" },
      underscore: { exports: "_" },
      "jquery": { exports: "$"},
      "ng-i18n": {deps: ["angular"], exports: "i18n"},
    },
    priority: ["angular"]
  }
);
