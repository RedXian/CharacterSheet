angular.module("characterSheet.combat", [])
    .directive("combatSection", function() {
        return {
            restrict: 'E',
            templateUrl: "partials/character-combat.html"
        };
    }).directive("initiative", function() {
        return {
            restrict: 'E',
            templateUrl: "partials/character-combat-initiative.html",
            controller: function($scope, CharacterFactory) {
                $scope.dexMod = function() {
                    return CharacterFactory.abilities.Dexterity.modifier | 0;
                };

                $scope.featBonus = function() {
                    return 0; //TODO: Placeholder until Feats are implemented.
                };

                $scope.traitBonus = function() {
                    return 0; //TODO: Placeholder until Traits are implemented.
                };

                $scope.initiative = function() {
                    return $scope.dexMod() + $scope.featBonus() + $scope.traitBonus();
                };

            }
        };
    }).directive("baseAttack", function() {
        return {
            restrict: 'E',
            templateUrl: "partials/character-combat-base-attack.html",
            controller: function($scope, CharacterFactory, ClassFactory) {
                $scope.character = CharacterFactory;

                $scope.getClassBABBonus = function (aClass) {
                    return parseInt(aClass.progression.BAB[aClass.level - 1]);
                };

                $scope.getBaseAttackBonus = function() {
                    var bonus = 0;
                    for (var key in CharacterFactory.classes) {
                        bonus += $scope.getClassBABBonus(CharacterFactory.classes[key]);
                    };

                    CharacterFactory.baseAttackBonus = bonus;
                    return bonus;
                };
            }
        }
    }).directive("combatManeuvers", function() {
        return {
            restrict: 'E',
            templateUrl: "partials/character-combat-maneuvers.html",
            controller: function($scope, CharacterFactory) {
                $scope.baseAttackBonus = function() {
                    return CharacterFactory.baseAttackBonus;
                }

                $scope.strMod = function() {
                    return CharacterFactory.abilities.Strength.modifier | 0;
                };

                $scope.dexMod = function() {
                    return CharacterFactory.abilities.Dexterity.modifier | 0;
                };

                $scope.getSizeModifer = function() {
                    sizeObject = {
                        "Fine": -8,
                        "Diminutive": -4,
                        "Tiny": -2,
                        "Small": -1,
                        "Medium": 0,
                        "Large": 1,
                        "Huge": 2,
                        "Gargantuan": 4,
                        "Huge": 8
                    };
                    var size = "Medium";
                    for (var key in CharacterFactory.traits) {
                        if (CharacterFactory.traits[key].Size) {
                            size = CharacterFactory.traits[key].Size;
                        }
                    }

                    return -sizeObject[size];
                };

                $scope.getManueverDefence = function() {
                    return 10 + $scope.strMod() + $scope.dexMod() + $scope.getSizeModifer() + $scope.baseAttackBonus();
                }

                $scope.getManueverBonus = function() {
                    return $scope.strMod() + $scope.getSizeModifer() + $scope.baseAttackBonus();
                }

            }
        };
    });
