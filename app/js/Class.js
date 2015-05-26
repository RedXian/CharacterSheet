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
                $scope.character = CharacterFactory;
                $scope.newClassSelected = false;
                $scope.addClassList = false;
                $scope.classSourceList = [];
                $scope.archetypeSourceList = [];
                $scope.archetypeList = [];
                $scope.selected = -1;

                $scope.favoredBonusPointsSpent = function() {
                    var tally = 0;
                    var bonuses = CharacterFactory.favoredBonuses;
                    for (var key in bonuses) {
                        tally += bonuses[key].points;
                    }
                    return tally;
                };

                $scope.addFavoredBonusPoint = function(bonus) {
                    bonus.points++;
                }

                $scope.removeFavoredBonusPoint = function(bonus) {
                    bonus.points--;
                }

                $scope.select = function(index, aClass) {
                    $scope.selectedClass = aClass;
                    $scope.selected = index;
                };

                $scope.displayClass = function(aClass) {
                    var archetype = "";
                    for (var key in aClass) {
                        if (aClass[key].type === "Archetype") {
                            archetype = aClass[key].name;
                        }
                    }
                    return aClass.name + (archetype.length ? (" (" + archetype + ")") : " ");
                };

                $scope.addNewClassButton = function() {
                    $scope.newClassSelected = false;
                    $scope.addClassList = true;
                    $scope.selectedClass = "";
                    $scope.classSourceList = [];
                    for (var key in $scope.classList) {
                        if ($scope.classSourceList.indexOf($scope.classList[key].source) <= -1) {
                            $scope.classSourceList.push($scope.classList[key].source);
                        };
                    }
                };

                $scope.isFavoredClass = function(aClass) {
                    return CharacterFactory.classes[aClass.name].favoredClass;
                };

                $scope.toggleFavoredClass = function(aClass) {
                    if (aClass.favoredClass) {
                        CharacterFactory.removeFavoredClass(aClass);
                    } else {
                        CharacterFactory.addFavoredClass(aClass);
                    }
                };

                $scope.removeClass = function(aClass) {
                    $scope.addClassList = false;
                    $scope.newClassSelected = false;
                    CharacterFactory.removeClass(aClass.name);
                };

                $scope.addClass = function(aClass) {
                    CharacterFactory.addClass(aClass);
                    $scope.addClassList = false;
                    $scope.newClassSelected = false;
                    $scope.selected = -1;
                    $scope.selectedClass = {};
                };

                $scope.addClassAndArchetype = function(aClass, archetype) {
                    CharacterFactory.addClass(aClass, archetype);
                    $scope.addClassList = false;
                    $scope.newClassSelected = false;
                };

                $scope.setSelectedClass = function(aClass) {
                    $scope.selectedClass = aClass;
                    $scope.newClassSelected = true;

                    // Generate Archetype List
                    $scope.archetypeSourceList = [];
                    $scope.archetypeList = [];

                    for (var key in aClass) {
                        if (aClass[key].type == "Archetype") {
                            if ($scope.archetypeSourceList.indexOf(aClass[key].source) <= -1) {
                                $scope.archetypeSourceList.push(aClass[key].source);
                            };
                            $scope.archetypeList.push(aClass[key]);
                        }
                    }
                };

                $scope.hasArchetypes = function(aClass) {
                    for (var key in aClass) {
                        if (aClass[key].type === "Archetype") {
                            return true;
                        }
                    }
                    return false;
                }

                $scope.setSelectedArchetype = function(archetype) {
                    $scope.selectedArchetype = archetype;
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
