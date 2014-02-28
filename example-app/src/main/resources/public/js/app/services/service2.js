define([], function(){
	return function($q, svc3) {
		var dataFromService3 = svc3.getSomeData();
		this.get = function() {
			var d = $q.defer();
			d.resolve({fromService2: "Some Data", fromService3: dataFromService3});
			return d.promise;
		};
	};
});
