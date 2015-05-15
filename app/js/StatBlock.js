angular.module("characterSheet.statBlock", [])
    .directive("statBlock", function() {
        return {
            restrict: 'E',
            templateUrl: "partials/stat-block.html",
            controller: function($scope, CharacterFactory, AbilityFactory, SkillFactory) {
                $scope.abilities = AbilityFactory;
                $scope.character = CharacterFactory;
                $scope.skills = SkillFactory;

                $scope.armor = {
                    armorClass: function() {
                        return 10;
                    },
                    touchAC: function() {
                        return 10;
                    },
                    flatFooted: function() {
                        return 10;
                    },
                    bonuses: [{
                        name: "armor",
                        value: 0
                    }, {
                        name: "deflection",
                        value: 0
                    }, {
                        name: "Dex",
                        value: 0
                    }, {
                        name: "dodge",
                        value: 0
                    }, {
                        name: "insight",
                        value: 0
                    }, {
                        name: "natural",
                        value: 1
                    }, {
                        name: "shield",
                        value: 0
                    }, {
                        name: "monk",
                        value: 0
                    }, {
                        name: "rage",
                        value: 0
                    }, {
                        name: "size",
                        value: 0
                    }, {
                        name: "Wis",
                        value: 0
                    }]
                };

                $scope.spellsPrepared = [
                    [{
                        name: "detect magic"
                    }, {
                        name: "light"
                    }, {
                        name: "mage hand"
                    }, {
                        name: "read magic"
                    }]
                ];
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
    }).directive("statBlockStatistics", function() {
        return {
            restrict: 'E',
            templateUrl: "partials/stat-block/stat-block-statistics.html"
        }
    });
