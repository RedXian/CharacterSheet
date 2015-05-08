angular.module("characterSheet.races", [])
    .factory("RaceFactory", function($http, $q) {
        var factory = {}
        factory.getRaceList = function() {
            var deferred = $q.defer();
            $http.get('data/races.json').success(function(data) {
                var array = [];
                for (var key in data) {
                    array.push(data[key]);
                };
                deferred.resolve(array);
            });
            return deferred.promise;
        };
        factory.getRaces = function() {
            var deferred = $q.defer();
            $http.get('data/races.json').success(function(data) {
                deferred.resolve(data);
            });
            return deferred.promise;
        };

        return factory;
    }).directive("raceSelector", function() {
        return {
            restrict: 'E',
            templateUrl: "partials/character-race-selector.html",
            controller: function($scope, CharacterFactory, RaceFactory) {
                RaceFactory.getRaceList().then(function(data) {
                    $scope.races = data;
                });

                $scope.character = CharacterFactory;
                $scope.setRace = CharacterFactory.setRace;


                $scope.elligibleRacialTraits = function (item) {
                    var elligible = true;
                    // Is the Trait the right type.  May be redundant given how the list is generated.
                    elligible = elligible && item.type == "Alternate Racial Trait";
                    // Does the Trait exist in Character
                    elligible = elligible && !$scope.character.traits[item.name];

                    // Do the Traits it replaces exists in Character.
                    if (item.replaces) {
                        for (var i = 0; i < item.replaces.length; i++) {
                            elligible = elligible && $scope.character.traits[item.replaces[i]];
                        }
                    }

                    return elligible;
                };

                // Returns an array of alternate racial traits of the selected Race.
                $scope.listAlternateRacialTraits = function() {
                    var traitList = [];
                    if ($scope.selectedRace) {
                        for (var key in $scope.selectedRace) {
                            var trait = $scope.selectedRace[key];
                            if (trait.type) {
                                if (trait.type == "Alternate Racial Trait") {
                                    traitList.push(trait);
                                }
                            }
                        }
                    }
                    return traitList;
                };

                $scope.isAlternateTrait = function(trait) {
                    return trait.type == "Alternate Racial Trait";
                }

                //TODO: Move to Character.js
                $scope.addAlternateRacialTrait = function(trait) {
                    if (trait.replaces) {
                        for (var i = 0; i < trait.replaces.length; i++) {
                            delete $scope.character.traits[trait.replaces[i]];
                        }
                    }
                    $scope.character.traits[trait.name] = trait;
                };

                //TODO: Move to Character.js
                $scope.removeAlternateRacialTrait = function(trait) {
                    if (trait.replaces) {
                        for (var i = 0; i < trait.replaces.length; i++) {
                            $scope.character.traits[trait.replaces[i]] = $scope.selectedRace[trait.replaces[i]];
                        }
                    }
                    delete $scope.character.traits[trait.name];
                };
            }
        };
    });
