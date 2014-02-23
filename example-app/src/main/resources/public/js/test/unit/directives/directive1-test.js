define(["spec_helper"], function(mother) {
	describe("Phone Directive", function() {
		it("can format phone number", function() {
			runs(function() {
				var template = "<span phone='{{phoneNumber}}'>{{phoneNumber}}</span>";
				var scope = {phoneNumber: "1234567890"};
				return mother.compileDirective(template, scope).spread(function(s, element) {
					expect(element.text()).to.eql("(123) 456-7890");
				});
			});
		});
	});
});