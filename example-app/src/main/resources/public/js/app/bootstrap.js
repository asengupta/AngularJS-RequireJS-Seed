require(["app.config"], function(config) {
	require(["app/app"], function(app) {
	app.bootstrap(app.init());
	});
});
