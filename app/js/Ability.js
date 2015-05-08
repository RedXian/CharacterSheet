angular.module("characterSheet.abilities", [])
    .factory("AbilityFactory", function() {
        var abilityNames = ["Strength", "Dexterity", "Constitution", "Intelligence", "Wisdom", "Charisma"];
        var abilities = {};
        for (var ability in abilityNames) {
            abilities[abilityNames[ability]] = {
                id: ability,
                name: abilityNames[ability]
            };
        };
        return abilities;
    })

.directive("abilityScores", function() {
    return {
        restrict: 'E',
        templateUrl: "partials/character-ability-score.html",
        controller: function($scope, CharacterFactory, AbilityFactory) {
            $scope.character = CharacterFactory;
            $scope.abilityList = AbilityFactory;

            $scope.getRacialModifier = function(ability) {
                var modifier = 0;
                try {
                    var abilityMods = $scope.character.traits["Ability Modifiers"];
                    if (abilityMods[ability]) {
                        modifier = abilityMods[ability];
                    } else if (abilityMods.Any && ability == $scope.racialBonus) {
                        modifier = abilityMods.Any;
                    }

                } catch (err) {
                    //console.log(err);
                };
                return parseInt(modifier);
            };

            $scope.getAgeModifier = function(ability) {
                return 0;
            };

            $scope.getAdjustedScore = function(ability) {
                $scope.character.abilities[ability].adjustedScore = $scope.character.abilities[ability].baseScore + $scope.getRacialModifier(ability) + $scope.getAgeModifier(ability);
                return $scope.character.abilities[ability].adjustedScore;
            };

            $scope.getAbilityModifier = function(ability) {
                $scope.character.abilities[ability].modifier = Math.floor($scope.getAdjustedScore(ability) / 2) - 5;
                return $scope.character.abilities[ability].modifier;
            }


            $scope.getPointBuyCost = function(score) {
                return [-4, -2, -1, 0, 1, 2, 3, 5, 7, 10, 13, 17][score - 7];
            };
        }
    };
});
