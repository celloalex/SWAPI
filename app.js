angular.module("myApp", ["ngRoute"]);

angular.module("myApp").config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
    //$locationProvider.html5Mode(true);
    $routeProvider.when("/", {
        templateUrl: "templates/main.html"
    }).when("/people", {
        templateUrl: "templates/people.html"
    }).when("/planets", {
        templateUrl: "templates/planets.html"
    }).when("/films", {
        templateUrl: "templates/films.html"
    }).when("/species", {
        templateUrl: "templates/species.html"
    }).when("/vehicles", {
        templateUrl: "templates/vehicles.html"
    }).when("/starships", {
        templateUrl: "templates/starships.html"
        , controller: function () {}
    });
}]);