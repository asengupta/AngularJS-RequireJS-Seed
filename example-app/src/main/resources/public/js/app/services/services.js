define(["service1", "service2", "service3"], function(service1, service2, service3) {
      var init = function(app) {
        app.service('service1', ["$q", "$http", service1]);
        app.service('service3', [service3]);
        app.service('service2', ["$q", "service3", service2]);
      };
      return {init: init};
});
