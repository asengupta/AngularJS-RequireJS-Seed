define(["directive1"], function (exampleDirective) {
  var init = function (app) {
    app.directive('exampleDir', [exampleDirective]);
  };
  return {init: init};
});