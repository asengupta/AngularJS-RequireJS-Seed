define([], function() {
	return function () {
		return {
			link: function (scope, element, attrs) {
					attrs.$observe("phone", function(value) {
						var rawPhoneNumber = value.replace(/[^0-9]/g, "");
						rawPhoneNumber = rawPhoneNumber.slice(rawPhoneNumber.length - 10, 10);

						var areaCode = rawPhoneNumber.substr(0,3);
						var phonePrefix = rawPhoneNumber.substr(3,3);
						var phoneSuffix = rawPhoneNumber.substr(6,4);

						if (rawPhoneNumber.length === 10) {
							var prettyPrintedNumber = "(" + areaCode + ")" + " " + phonePrefix + "-" + phoneSuffix;
							element.text(prettyPrintedNumber);
						}
						else {
							element.text(rawPhoneNumber);
						}
				});
	    	}
		};
	};
});
