define(["Q"], function(Q) {
  var initApp = function () {
    return setupApp().spread(function (app, angularApp) {
      return bootstrapApp(app, angularApp);
    });
  };

  var setupApp = function () {
    var deferred = Q.defer();
    require(["app/app.config"], function () {
      require(["app/app"], function (app) {
        deferred.resolve([app, app.init()]);
      });
    });
    return deferred.promise;
  };

  var bootstrapApp = function (app, angularApp) {
    var deferred = Q.defer();
    app.bootstrap(angularApp).spread(function (injector, angularApp) {
      deferred.resolve([injector, angularApp]);
    });
    return deferred.promise;
  };

  return {
    initApp: initApp,
    setupApp: setupApp,
    bootstrapApp: bootstrapApp
  };
});
