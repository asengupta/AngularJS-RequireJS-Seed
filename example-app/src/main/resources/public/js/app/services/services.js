define(["service1", "service2"], function(service1, service2) {
      var init = function(app) {
        app.service('service1', [service1]);
        app.service('service2', [service2]);
      };
      return {init: init};
});
