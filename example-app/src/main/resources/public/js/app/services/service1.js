define(["underscore"], function (_) {
	return function($q) {
		this.get = function() {
			var d = $q.defer();
			d.resolve("Real Service1 Data");
			return d.promise;
		};
	};
});
