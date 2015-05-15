angular.module("characterSheet.personal", [])
    .directive("personalDetails", function() {
        return {
            restrict: 'E',
            templateUrl: "partials/character-personal-details.html",
            controller: function($scope, CharacterFactory, RollerFactory) {
                $scope.character = CharacterFactory;

                $scope.getCharacterSize = function() {
                    var size = "Medium";
                    for (var key in CharacterFactory.traits) {
                        if (CharacterFactory.traits[key].size) {
                            size = CharacterFactory.traits[key].size;
                        }
                    }
                    // Include Active Spell Modifiers here
                    return size;
                };

                $scope.results = function () {
                    return RollerFactory.getResult($scope.sum);
                };
                $scope.getSum = function () {
                    var sum = 0;
                    var result = $scope.results();
                    for(var i = 0 ; i < result.length; i++) {
                        sum += result[i].value;
                    }
                    return sum;
                }

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
                    var speed = 30;
                    if (CharacterFactory.race) {
                        for (var key in CharacterFactory.traits) {
                            if (CharacterFactory.traits[key].baseSpeed) {
                                speed = parseInt(CharacterFactory.traits[key].baseSpeed);
                            };
                        };
                    };
                    switch (type) {
                        case "baseSpeed":
                            return speed;
                            break;
                        case "Swim":
                            // Need to check for swim speed
                            return null;
                            break;
                        case "Climb":
                            // Need to check for Climb speed
                            return null;
                            break;
                        case "Fly":
                            // Need to check for Fly speed
                            return null;
                            break;
                    }
                    return speed;
                };
            }
        };
    });
