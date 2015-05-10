angular.module("characterSheet.classes", [])
    .factory("ClassFactory", function($http, $q) {
        var factory = {}
        factory.getClassList = function() {
            var deferred = $q.defer();
            $http.get('data/classes.json').success(function(data) {
                var array = [];
                for (var key in data) {
                    array.push(data[key]);
                };
                deferred.resolve(array);
            });
            return deferred.promise;
        };
        factory.getClass = function(aClass) {
            var deferred = $q.defer();
            $http.get('data/classes.json').success(function(data) {
                if (data.name == aClass) {
                    deferred.resolve(data);
                }
            });
            return deferred.promise;
        };

        return factory;
    }).directive("classSelector", function() {
        return {
            restrict: 'E',
            templateUrl: "partials/character-class-selector.html",
            controller: function($scope, CharacterFactory, ClassFactory) {
                $scope.addClassList = false;
                $scope.selectedClass = "none";

                ClassFactory.getClassList().then(function(data) {
                    $scope.classes = data;
                });

                $scope.character = CharacterFactory;

                $scope.addClass = function(className) {
                    $scope.addClassList = false;
                    CharacterFactory.addClass(className);
                    $scope.selectedClass = "none";
                };



                $scope.newLevelAvailable = function() {
                    // Need to add check for max class levels for Prestige Classes.
                    return $scope.character.level("Medium") > $scope.character.getClassLevels();
                };
            }
        };
    });
