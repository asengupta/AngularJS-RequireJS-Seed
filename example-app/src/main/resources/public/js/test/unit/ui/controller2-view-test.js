define([ "spec_helper", "duckAngular", "Q"], function (mother, Duck, Q) {
  describe("Controller 2 UI Spec", function () {
    var DuckDOM = Duck.DOM;
    var UIInteraction = Duck.UIInteraction;

    it("can mock out indirect dependencies", function () {
      var service3Mock = { getSomeData: function() {
        return "Mock Service 3 Data";
      }};
      return mother.createMvc("route2Controller", "../templates/route2.html", {$scope: {lol: "Hmm"}}, null, {service3: service3Mock}).then(function (mvc) {
        var dom = new DuckDOM(mvc.view, mvc.scope);
        expect(dom.element("#data")[0].innerText).to.eql("Some Data, Mock Service 3 Data");
      });
    });
    it("can support nested controllers with full DI", function () {
      var service3Mock = { getSomeData: function() {
        return "Mock Service 3 Data";
      }};
      return mother.createMvc("route2Controller", "../templates/route2.html", {$scope: {lol: "Hmm"}, "nestedController": { service2: {get: function() { return "Nested Controller Service2 Mock"; }}}}, null, {service3: service3Mock}, true).then(function (mvc) {
        var dom = new DuckDOM(mvc.view, mvc.scope);
        expect(dom.element("#data")[0].innerText).to.eql("Some Data, Mock Service 3 Data");
        expect(dom.element("#nestedData").text()).to.eql("The stuff is Yayaya/Nested Controller Service2 Mock");
      });
    });
    it("can support single controller-based, old style DI, by default", function () {
      var service3Mock = { getSomeData: function() {
        return "Mock Service 3 Data";
      }};
      return mother.createMvc("route2Controller", "../templates/route2.html", {service2: {get: function() {return Q({fromService2: "MockFromService2", fromService3: "MockFromService3"})}}}, null, {service3: service3Mock}).then(function (mvc) {
        var dom = new DuckDOM(mvc.view, mvc.scope);
        expect(dom.element("#data")[0].innerText).to.eql("MockFromService2, MockFromService3");
      });
    });
    it("can show data", function () {
      return mother.createMvc("route2Controller", "../templates/route2.html", {}, {}).then(function (mvc) {
        var dom = new DuckDOM(mvc.view, mvc.scope);
        expect(dom.element("#data")[0].innerText).to.eql("Some Data, True Data from Svc 3");
      });
    });
    it("can update data", function () {
      return mother.createMvc("route2Controller", "../templates/route2.html", {}).then(function (mvc) {
        var dom = new DuckDOM(mvc.view, mvc.scope);
        var interaction = new UIInteraction(dom);
        expect(dom.element("#data")[0].innerText).to.eql("Some Data, True Data from Svc 3");
        dom.interactWith("#changeLink");
        expect(dom.element("#data")[0].innerText).to.eql("Some New Data");
      });
    });
    it("can reflect data that is refreshed asynchronously", function () {
      return mother.createMvc("route2Controller", "../templates/route2.html", {}).then(function (mvc) {
        var dom = new DuckDOM(mvc.view, mvc.scope);
        var interaction = new UIInteraction(dom);
        expect(dom.element("#data")[0].innerText).to.eql("Some Data, True Data from Svc 3");
        dom.interactWith("#changeLink");
        expect(dom.element("#data")[0].innerText).to.eql("Some New Data");
        return interaction.with("#refreshLink").waitFor(mvc.scope, "refreshData").then(function() {
          expect(dom.element("#data")[0].innerText).to.eql("Some Data, True Data from Svc 3");
        });
      });
    });
  });
});
