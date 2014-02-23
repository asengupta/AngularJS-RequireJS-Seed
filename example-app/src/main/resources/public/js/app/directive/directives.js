define(["directive1"], function (exampleDirective) {
  var init = function (app) {
    app.directive('phone', [exampleDirective]);
  };
  return {init: init};
});