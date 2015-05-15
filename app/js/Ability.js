angular.module("characterSheet.abilities", ['characterSheet.roller'])
    .factory("AbilityFactory", function() {
        var abilityNames = [{
            name: "Strength",
            type: "Physical"
        }, {
            name: "Dexterity",
            type: "Physical"
        }, {
            name: "Constitution",
            type: "Physical"
        }, {
            name: "Intelligence",
            type: "Mental"
        }, {
            name: "Wisdom",
            type: "Mental"
        }, {
            name: "Charisma",
            type: "Mental"
        }];
        var abilities = {};
        for (var ability in abilityNames) {
            abilities[abilityNames[ability].name] = {
                id: ability,
                type: abilityNames[ability].type,
                name: abilityNames[ability].name
            };
        };
        return abilities;
    })

.directive("abilityScores", function() {
    return {
        restrict: 'E',
        templateUrl: "partials/character-ability-score.html",
        controller: function($scope, CharacterFactory, AbilityFactory, RollerFactory) {
            $scope.character = CharacterFactory;
            $scope.abilityList = AbilityFactory;

            $scope.roll = function(notation) {
                for (var key in $scope.abilityList) {
                    var roll = RollerFactory.getResult(notation);
                     $scope.character.abilities[$scope.abilityList[key].name].baseScore = roll[roll.length-1].value;
                 }
            };

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
                var age = CharacterFactory.getAgingEffect();
                var modifier = 0;
                switch (age) {
                    case "Adulthood":
                        break;
                    case "Middle Age":
                        modifier = 1;
                        break;
                    case "Old":
                        modifier = 2;
                        break;
                    case "Venerable":
                        modifier = 3;
                        break;
                }
                return (ability.type == "Physical") ? -modifier : modifier;
            };

            $scope.getAdjustedScore = function(ability) {
                $scope.character.abilities[ability.name].adjustedScore = $scope.character.abilities[ability.name].baseScore + $scope.getRacialModifier(ability.name) + $scope.getAgeModifier(ability);
                return $scope.character.abilities[ability.name].adjustedScore;
            };

            $scope.getAbilityModifier = function(ability) {
                $scope.character.abilities[ability.name].modifier = Math.floor($scope.getAdjustedScore(ability) / 2) - 5;
                return $scope.character.abilities[ability.name].modifier;
            }

            $scope.getPointBuyCost = function(score) {
                return [-4, -2, -1, 0, 1, 2, 3, 5, 7, 10, 13, 17][score - 7];
            };
        }
    };
});
