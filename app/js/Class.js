angular.module("characterSheet.classes", [])
    .factory("ClassFactory", function($http, $q) {
        var factory = {};
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
        factory.getClasses = function() {
            var deferred = $q.defer();
            $http.get('data/classes.json').success(function(data) {
                deferred.resolve(data);
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
                $scope.selectedClass = "";

                $scope.character = CharacterFactory;

                $scope.addClass = function(aClass) {
                    $scope.addClassList = false;
                    CharacterFactory.addClass(aClass);
                    $scope.selectedClass = "";
                };

                $scope.availableClasses = function() {
                    return function(item) {
                        // Check if item is a class.
                        console.log(item);
                        if (item.type === "Class") {
                            // Check if Class has already been selected.
                            for (var key in $scope.character.classes) {
                                if ($scope.character.classes[key].name == item.name) {
                                    return false;
                                }
                            }
                            return true;
                        }
                        return false;
                    }
                }

                $scope.newLevelAvailable = function() {
                    // Need to add check for max class levels for Prestige Classes.
                    return $scope.character.level("Medium") > $scope.character.getClassLevels();
                };
            }
        };
    });
