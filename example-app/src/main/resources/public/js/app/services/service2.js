define([], function(){
	return function($q) {
		this.get = function() {
			var d = $q.defer();
			d.resolve("Some Data");
			return d.promise;
		};
	};
});
