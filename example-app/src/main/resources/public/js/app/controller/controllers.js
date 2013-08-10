define(["route1-controller",
  "route2-controller",
  "navigation-controller"
], function (route1Ctrl, route2Ctrl, navigationCtrl) {
    var init = function (app) {
      app.controller('route1Controller', ['$scope', 'service1', '$q', route1Ctrl]);
      app.controller('route2Controller', ['$scope', '$location', '$q', 'service2', route2Ctrl]);
      app.controller('navigationController', ['$scope', '$location', navigationCtrl]);
  };
  return {init: init};
});
