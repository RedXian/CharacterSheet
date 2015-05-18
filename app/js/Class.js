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
                $scope.newClassSelected = false;

                $scope.character = CharacterFactory;

                $scope.displayClassAndLevel = function(aClass) {
                    var archetype = "";
                    for (var key in aClass) {
                        if (aClass[key].type === "Archetype") {
                            archetype = aClass[key].name;
                        }
                    }
                    return aClass.name + (archetype.length ? (" (" + archetype + ")") : " ") + ": " + aClass.level;
                };

                $scope.addNewClassButton = function() {
                    $scope.newClassSelected = false;
                    $scope.addClassList = true;
                    $scope.selectedClass = "";
                }

                $scope.removeClass = function (aClass) {
                    $scope.addClassList = false;
                    $scope.newClassSelected = false;
                    CharacterFactory.removeClass(aClass.name);
                };

                $scope.addClass = function(aClass) {
                    $scope.archetypeList = [{
                        name: "No Archetype"
                    }];

                    $scope.archetypeList2 = {};

                    for (var key in aClass) {
                        if (aClass[key].type == "Archetype") {
                            $scope.archetypeList.push(aClass[key])
                            if (!$scope.archetypeList2[aClass[key].source]) {$scope.archetypeList2[aClass[key].source] = {name:aClass[key].source, list: []}};
                            $scope.archetypeList2[aClass[key].source].list.push(aClass[key]);
                        }
                    }

                    // If is a new class and it has archetypes, display the archtype list.
                    if ($scope.archetypeList.length > 1 && !aClass.level) {
                        $scope.newClassSelected = aClass.level ? false : true;
                        $scope.selectedArchetype = "";
                    } else {
                        CharacterFactory.addClass(aClass);
                        $scope.addClassList = false;
                        $scope.newClassSelected = false;
                    }
                };

                $scope.addClassAndArchetype = function() {
                    CharacterFactory.addClass($scope.selectedClass, $scope.selectedArchetype);
                    $scope.addClassList = false;
                    $scope.newClassSelected = false;

                };

                $scope.availableClasses = function() {
                    return function(item) {
                        // Check if item is a class.
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
