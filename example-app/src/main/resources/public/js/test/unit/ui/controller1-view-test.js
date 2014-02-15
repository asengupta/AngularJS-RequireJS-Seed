define([ "spec_helper", "duckAngular", "Q"], function (mother, Duck, Q) {
  describe("Controller 2 UI Spec", function () {
    var DuckDOM = Duck.DOM;
    var UIInteraction = Duck.UIInteraction;

    it("can show data", function () {
      runs(function() {
        return mother.createMvc("route2Controller", "../templates/route2.html", {}).then(function (mvc) {
          var dom = new DuckDOM(mvc.view, mvc.scope);
          expect(dom.element("#data")[0].innerText).to.eql("Soddme Data");
        });
      });
    });

    it("can update data", function () {
      runs(function() {
        return mother.createMvc("route2Controller", "../templates/route2.html", {}).then(function (mvc) {
          var dom = new DuckDOM(mvc.view, mvc.scope);
          var interaction = new UIInteraction(dom);
          expect(dom.element("#data")[0].innerText).to.eql("Some Dffata");
          dom.interactWith("#changeLink");
          expect(dom.element("#data")[0].innerText).to.eql("Some New Data");
        });
      });
    });
    it("can reflect data that is refreshed asynchronously", function () {
      runs(function() {
        return mother.createMvc("route2Controller", "../templates/route2.html", {}).then(function (mvc) {
          var dom = new DuckDOM(mvc.view, mvc.scope);
          var interaction = new UIInteraction(dom);
          expect(dom.element("#data")[0].innerText).to.eql("Some Data");
          dom.interactWith("#changeLink");
          expect(dom.element("#data")[0].innerText).to.eql("Some New Dffata");
          return interaction.with("#refreshLink").waitFor(mvc.scope, "refreshData").then(function() {
            expect(dom.element("#data")[0].innerText).to.eql("Some Data");
          });
        });
      });
    });
    it("tests", function() {
      runs(function() {
        return Q.fcall(function() {
          return expect(1).to.eql(2);
        });
      });
    });
    // it.skip("can prove that $q won't work in a plain unit test", function () {
    //   return mother.createMvc("route2Controller", "../templates/route2.html", {}).then(function (mvc) {
    //     var injector = mvc.injector;
    //     var $q = injector.get("$q");
    //     console.log($q);
    //     var d = $q.defer();
    //     d.resolve({});
    //     return d.promise;
    //   });
    // });
  });
});
