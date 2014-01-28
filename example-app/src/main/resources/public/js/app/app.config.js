require.config({
  baseUrl: "/example/static/js",
  urlArgs: "bust=" + new Date().getTime(),
  paths: {
    "angular": "lib/angular",
    "Q": "lib/q",
    "jquery": "lib/jquery-1.8.2.min",
    //Libs
    "underscore": "lib/underscore-min",
    "lodash": "lib/lodash",
    "ng-i18n": "lib/ng-i18n",
    "angular-route": "lib/angular-route",

    //Controllers
    "route1-controller": "app/controller/controller1",
    "route2-controller": "app/controller/controller2",
    "navigation-controller": "app/controller/navigation-controller",

    //Directives
    "directive1": "app/directive/directive1",

    //Services
    "service1": "app/services/service1",
    "service2": "app/services/service2",

    //Factories
    "factory1": "app/factory/factory1",
  },
  shim: {
    "ng-i18n": {deps: ["angular"], exports: "i18n"},
    'underscore': {exports: '_'},
    'angular': {exports: 'angular'},
    'jquery': {exports: '$'},
    'angular-route': { deps: ["angular"], exports: 'angular_route'}
  },
  deps: []
});
console.log("Config is complete");
