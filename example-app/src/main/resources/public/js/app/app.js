define(["angular", "Q", "jquery",
  "app/services/services",
  "lib/libs",
  "app/directive/directives",
  "app/controller/controllers",
  "app/factory/factories",
  "angular-route"],
  function(angular, Q, $, services, libs, directives, controllers, factories) {
    var init = function() {
      var app = angular.module('ExampleApp', ["ngI18n", "ngRoute"]);
      services.init(app);
      libs.init(app);
      directives.init(app);
      controllers.init(app);
      factories.init(app);
      app.config(['$routeProvider', '$provide', function ($routeProvider, $provide) {
        $routeProvider.
          when('/navigation', {templateUrl: '/example/static/templates/navigation.html', controller: 'navigationController'}).
          when('/route1', {templateUrl: '/example/static/templates/route1.html', controller: 'route1Controller'}).
          when('/route2', {templateUrl: '/example/static/templates/route2.html', controller: 'route2Controller'}).
          otherwise({redirectTo: '/navigation'});

        }]);
      app.value('ngI18nConfig', {
        defaultLocale: 'en',
        supportedLocales: ['en', 'es'],
        basePath: "/example/static/js/app/i18n"
      });
      return app;
    };

    var bootstrap = function(app) {
      var deferred = Q.defer();
      var injector = angular.bootstrap($('#ExampleApp'), ['ExampleApp']);
      deferred.resolve([injector, app]);

      return deferred.promise;

    }
    return  {init: init, bootstrap: bootstrap};
  });
