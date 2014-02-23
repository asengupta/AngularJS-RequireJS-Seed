define(["spec_helper"], function(mother) {
	describe("Phone Directive", function() {
		it("can format phone number", function() {
			var template = "<span phone='{{phoneNumber}}'>{{phoneNumber}}</span>";
			var scope = {phoneNumber: "1234567890"};
			return mother.compileDirective(template, scope).spread(function(s, element) {
				expect(element.text()).to.eql("(123) 456-7890");
				s.phoneNumber = "5671234400";
				s.$apply();
				expect(element.text()).to.eql("(567) 123-4400");
			});
		});
	});
});