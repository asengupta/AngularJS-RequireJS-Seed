define(["underscore"], function(_) {
  return function ($scope, $location) {
    $scope.gotoRoute1 = function() {
      console.log("Going to route1");
      $location.path("/route1");
    };
    $scope.gotoRoute2 = function() {
      console.log("Going to route2");
      $location.path("/route2");
    };

    var days = {
      sunday: {day: "Sun", index: 0},
      monday: {day: "Mon", index: 1},
      tuesday: {day: "Tue", index: 2},
      wednesday: {day: "Wed", index: 3},
      thursday: {day: "Thu", index: 4},
      friday: {day: "Fri", index: 5},
      saturday: {day: "Sat", index: 6},
    };

    var daysByHours = {
      h1: [days.sunday, days.monday, days.wednesday, days.friday, days.saturday]
    };

    var xx = _.reduce(daysByHours.h1, function(acc1, day) {
      if (acc1.value().length === 0) return _.chain([_.chain([day])]);
      if (acc1.last().last().value().index - day.index === -1) 
        return acc1.initial().push(acc1.last().push(day));
      return acc1.push(_.chain([day]));
    }, _.chain([]));

    var yy = _.map(xx.value(), function(dayRange) {
      var range = dayRange.value();
        if (range.length === 1) return _.first(range).day;
        return _.first(range).day + "-" + _.last(range).day;
    }).join(", ");

    console.log(yy);
  };
});
