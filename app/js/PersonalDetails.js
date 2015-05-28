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

                $scope.results = function() {
                    return RollerFactory.getResult($scope.sum);
                };
                $scope.getSum = function() {
                    var sum = 0;
                    var result = $scope.results();
                    for (var i = 0; i < result.length; i++) {
                        sum += result[i].value;
                    }
                    return sum;
                }

                $scope.getCharacterWeight = function() {
                    if (CharacterFactory.race && CharacterFactory.gender) {
                        var raceGender = CharacterFactory.race["HeightWeight"][$scope.character.gender];
                        var heightIndex = parseInt($scope.character.height) - parseInt(raceGender.baseHeight);
                        return parseInt(raceGender.baseWeight) + (heightIndex * parseInt(raceGender.weightIncrement));
                    }
                    return "";
                };

                $scope.getAgingEffect = function() {
                    var ageGroup = "Adulthood";
                    if (CharacterFactory.race) {
                        if (CharacterFactory.age >= parseInt(CharacterFactory.race.agingEffects["Middle Age"])) {
                            ageGroup = "Middle Age";
                            if (CharacterFactory.age >= parseInt(CharacterFactory.race.agingEffects["Old"])) {
                                ageGroup = "Old Age";
                                if (CharacterFactory.age >= parseInt(CharacterFactory.race.agingEffects["Venerable"])) {
                                    ageGroup = "Venerable";
                                }
                            }
                        }
                    }
                    return ageGroup;
                };

                $scope.randomizeAge = function() {
                    if (CharacterFactory.race && CharacterFactory.classes) {
                        CharacterFactory.age = parseInt(CharacterFactory.race.Age.Adulthood);
                        var ageCat = "";
                        for (var key in CharacterFactory.classes) {
                            if (ageCat == "") {
                                ageCat = CharacterFactory.classes[key].ageCategory;
                                CharacterFactory.age += RollerFactory.parseRollNotation(CharacterFactory.race.Age[ageCat]);
                            }
                        }
                    }
                }

                $scope.randomizeHeight = function() {
                    if (CharacterFactory.race && CharacterFactory.gender) {
                        var raceGender = CharacterFactory.race["HeightWeight"][CharacterFactory.gender];
                        CharacterFactory.height = parseInt(raceGender.baseHeight);
                        CharacterFactory.height += RollerFactory.parseRollNotation(raceGender.rollModifier);
                    }
                }

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
