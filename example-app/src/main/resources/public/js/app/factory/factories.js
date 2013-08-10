define(["factory1"], function(factory1) {
  var init = function(app) {
    app.factory("factory1", ["$q", factory1]);
  };
  return {init: init};
});