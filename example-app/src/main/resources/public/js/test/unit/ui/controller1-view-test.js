define([ "spec_helper", "duckAngular", "underscore", "Q"], function (mother, Duck, _, Q) {
  describe("Answer some questions", function () {
    var DuckDOM = Duck.DOM;
    var UIInteraction = Duck.UIInteraction;

    it.skip("should validate input", function () {
      securityQuestionsService.getQuestions.returns(Q([]));
      securityQuestionsService.getAllQuestions.returns(Q(allQuestions));

      return mother.createMvc("route1Controller", "../templates/route1.html", {}).then(function (mvc) {
        var dom = new DuckDOM(mvc.view, mvc.scope);
        var interaction = new UIInteraction(dom);
        expect(dom.element(editModeSelector)).to.have.css("display", "");
        dom.interactWith("#securityQuestions .secured-answers:eq(4)", "");

        return expect(interaction.with("#someButton").waitFor(mvc.scope, "update")).to.be.rejected.then(function () {
          expect(dom.element("#securityQuestions li:eq(2) .alert-error:eq(0)")).to.have.css("display", "");
          dom.interactWith("#securityQuestions .secured-answers:eq(0)", "same answer");

          return expect(interaction.with("#someOtherButton").waitFor(mvc.scope, "update")).to.be.rejected.then(function () {
            expect(dom.element("#uniqueAnswersValidationMessage")).to.have.css("display", "");
          });
        });
      });
    });
  });
});
