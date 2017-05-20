var myApp = angular.module('myApp',["ngRoute"]);

var mainController = function($scope){

}

var peopleController = function($scope, $http){
    $http.get("http://swapi.co/api/people/").then(
        function(result){
            $scope.model = result.data;
        }
    );

    $scope.getId = function(person){
        var array = person.url.split("/");
        return array[array.length - 2];
    }

}

var personController = function($scope, $http, $location){
    var path = $location.path();
    $http.get("http://swapi.co/api/people/").then(
        function(result){
            $scope.model = result.data;
        }
    );

}







//allows you to go from one page to another


myApp.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
    //$locationProvider.html5Mode(true);
    $routeProvider.when("/", {
        templateUrl: "templates/main.html",
        controller: mainController
    }).when("/people", {
        templateUrl: "templates/people.html",
        controller: peopleController
    }).when("/person", {
        templateUrl: "templates/person.html",
        controller: personController
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
