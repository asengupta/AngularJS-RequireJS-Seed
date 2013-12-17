define(["underscore"], function (_) {
	return function($q, $http) {
		this.get = function() {
			var d = $q.defer();
			d.resolve("Real Service1 Data");
			return d.promise;
		};

		this.getHttp = function(url) {
			return $http.get(url);
		};
	};
});
