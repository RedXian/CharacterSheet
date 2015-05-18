angular.module("characterSheet.statBlock", [])
    .directive("statBlock", function() {
        return {
            restrict: 'E',
            templateUrl: "partials/stat-block.html",
            controller: function ($scope, CharacterFactory) {
                $scope.character = CharacterFactory;
            }
        };
    })
    .directive("statBlockDefence", function() {
        return {
            restrict: 'E',
            templateUrl: "partials/stat-block/stat-block-defence.html"
        }
    })
    .directive("statBlockOffence", function() {
        return {
            restrict: 'E',
            templateUrl: "partials/stat-block/stat-block-offence.html"
        }
    })
    .directive("statBlockStatistics", function() {
        return {
            restrict: 'E',
            templateUrl: "partials/stat-block/stat-block-statistics.html"
        }
    })
    .directive("statisticsAbilityScores", function() {
        return {
            restrict: 'E',
            templateUrl: "partials/stat-block/statistics/statistics-ability-scores.html",
            controller: 'AbilityController'
        }
    })
    .directive("statisticsFeats", function() {
        return {
            restrict: 'E',
            templateUrl: "partials/stat-block/statistics/statistics-feats.html"
        }
    })
    .directive("statisticsGear", function() {
        return {
            restrict: 'E',
            templateUrl: "partials/stat-block/statistics/statistics-gear.html"
        }
    })
    .directive("statisticsLanguages", function() {
        return {
            restrict: 'E',
            templateUrl: "partials/stat-block/statistics/statistics-languages.html"
        }
    })
    .directive("statisticsSkills", function() {
        return {
            restrict: 'E',
            templateUrl: "partials/stat-block/statistics/statistics-skills.html",
            controller: 'SkillController'
        }
    })
    .directive("statisticsSpecialQualities", function() {
        return {
            restrict: 'E',
            templateUrl: "partials/stat-block/statistics/statistics-special-qualities.html"
        }
    })
    .directive("offenceMelee", function() {
        return {
            restrict: 'E',
            templateUrl: "partials/stat-block/offence/offence-melee.html"
        }
    })
    .directive("offenceRanged", function() {
        return {
            restrict: 'E',
            templateUrl: "partials/stat-block/offence/offence-ranged.html"
        }
    })
    .directive("offenceOppositionSchools", function() {
        return {
            restrict: 'E',
            templateUrl: "partials/stat-block/offence/offence-opposition-schools.html"
        }
    })
    .directive("offenceSpecialAttacks", function() {
        return {
            restrict: 'E',
            templateUrl: "partials/stat-block/offence/offence-special-attacks.html"
        }
    })
    .directive("offenceSpeed", function() {
        return {
            restrict: 'E',
            templateUrl: "partials/stat-block/offence/offence-speed.html"
        }
    })
    .directive("offenceSpellLikeAbilities", function() {
        return {
            restrict: 'E',
            templateUrl: "partials/stat-block/offence/offence-spell-like-abilities.html"
        }
    })
    .directive("offenceSpellsPrepared", function() {
        return {
            restrict: 'E',
            templateUrl: "partials/stat-block/offence/offence-spells-prepared.html",
            controller: function($scope) {
              $scope.spellsPrepared = [
                  { name: "detect magic" },
                  { name: "light" },
                  { name: "mage hand" },
                  { name: "read magic" }
              ];
            }
        }
    })
    .directive("defenceArmorClass", function() {
        return {
            restrict: 'E',
            templateUrl: "partials/stat-block/defence/defence-armor-class.html",
            controller: function($scope) {
                $scope.armor = {
                    armorClass: function() { return 10; },
                    touchAC: function() { return 10; },
                    flatFooted: function() { return 10; },
                    bonuses: [
                        { name: "armor", value: 0 },
                        { name: "deflection", value: 0 },
                        { name: "Dex", value: 0 },
                        { name: "dodge", value: 0 },
                        { name: "insight", value: 0 },
                        { name: "natural", value: 1 },
                        { name: "shield", value: 0 },
                        { name: "monk", value: 0 },
                        { name: "rage", value: 0 },
                        { name: "size", value: 0 },
                        { name: "Wis", value: 0 }
                    ]
                };
            }
        }
    })
    .directive("defenceDefensiveAbilities", function() {
        return {
            restrict: 'E',
            templateUrl: "partials/stat-block/defence/defence-defensive-abilities.html"
        }
    })
    .directive("defenceHitPoints", function() {
        return {
            restrict: 'E',
            templateUrl: "partials/stat-block/defence/defence-hit-points.html"
        }
    })
    .directive("defenceSavingThrows", function() {
        return {
            restrict: 'E',
            templateUrl: "partials/stat-block/defence/defence-saving-throws.html"
        }
    })
    ;
