angular.module("characterSheet.personal", [])
    .directive("personalDetails", function() {
        return {
            restrict: 'E',
            templateUrl: "partials/character-personal-details.html",
            controller: function($scope, CharacterFactory) {
                $scope.character = CharacterFactory;

                $scope.getCharacterSize = function() {
                    for (var key in CharacterFactory.traits) {
                        if (CharacterFactory.traits[key].Size) {
                            return CharacterFactory.traits[key].Size;
                        }
                    }
                    // Include Active Spell Modifiers here
                    return "Medium";
                };

                $scope.getCharacterWeight = function() {
                    return 100;
                };

                $scope.getAgingEffect = function() {
                    var ageGroup = "Adulthood";
                    if (CharacterFactory.race) {
                        if ($scope.character.age >= parseInt(CharacterFactory.race.agingEffects["Middle Age"])) {
                            ageGroup = "Middle Age";
                            if ($scope.character.age >= parseInt(CharacterFactory.race.agingEffects["Old"])) {
                                ageGroup = "Old Age";
                                if ($scope.character.age >= parseInt(CharacterFactory.race.agingEffects["Venerable"])) {
                                    ageGroup = "Venerable";
                                }
                            }
                        }
                    }
                    return ageGroup;
                };

                $scope.getMovementSpeed = function(type) {
                    var speed = "none";
                    if (CharacterFactory.race) {
                        for (var key in CharacterFactory.traits) {
                            if (CharacterFactory.traits[key].Speed) {
                                speed = parseInt(CharacterFactory.traits[key].Speed);
                            };
                        };
                    };
                    switch (type) {
                        case "Walk":
                            return speed;
                            break;
                        case "Swim":
                            // Need to check for swim speed
                            return "none";
                            break;
                        case "Climb":
                            // Need to check for Climb speed
                            return "none";
                            break;
                        case "Fly":
                            // Need to check for Fly speed
                            return "none";
                            break;
                    }
                    return speed;
                };
            }
        };
    });
