var app = angular.module('MyApp', ['ngRoute']);

app.config(function ($routeProvider) {
    $routeProvider.when('/',
        {
            templateUrl: '/App/Partials/NewGenre.html',
            controller: 'NewGenreController'
        })
        .when('/List', {
            templateUrl: '/App/Partials/ListGenres.html',
            controller: 'ListGenresController'
        });
});

app.controller('NewGenreController', NewGenreController)
    .controller('ListGenresController', ListGenresController);