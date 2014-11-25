function ListGenresController($scope, $http) {
    $http.get("/odata/Genres")
        .success(function (data, status) {
            $scope.Genres = data.value;
        });

    $scope.DeleteGenre = function (key) {
        $http.delete("/odata/Genres('" + key + "')")
            .success(function () {
                console.log($scope.DeleteGenre.name + ' ' + 'was deleted.');
            });
        console.log('Delete genre');
    };



};