angular.module("characterSheet.defence", [])
    .directive("defenceSection", function() {
        return {
            restrict: 'E',
            templateUrl: "partials/character-defence.html"
        };
    }).directive("savingThrows", function() {
        return {
            restrict: 'E',
            templateUrl: "partials/character-defence-saving-throws.html",
            controller: function($scope, CharacterFactory, ClassFactory) {
                $scope.character = CharacterFactory;

                var classes = {};
                ClassFactory.getClasses().then(function(data) {
                    classes = data;
                });

                $scope.saves = [{
                    name: "Fortitude",
                    ability: "Constitution"
                }, {
                    name: "Reflex",
                    ability: "Dexterity"
                }, {
                    name: "Will",
                    ability: "Wisdom"
                }];

                //Need to populate ClassJSON to support this format.
                $scope.getClassBonuses = function(bonus) {
                    var classBonuses = [];
                    for (var key in CharacterFactory.classes) {
                        var aClass = CharacterFactory.classes[key];
                        classBonuses.push({
                            name: aClass.name,
                            bonus: parseInt(classes[aClass.name].progression[bonus][aClass.level - 1])
                        });
                    }
                    return classBonuses;
                };

                $scope.getModifier = function(ability) {
                    return CharacterFactory.abilities[ability].modifier | 0;
                };

                $scope.getSaveTotal = function(save) {
                    var total = $scope.getModifier(save.ability);
                    var classBonuses = $scope.getClassBonuses(save.name);
                    for (var i = 0; i < classBonuses.length; i++) {
                        total += classBonuses[i].bonus;
                    }
                    return total;
                };
            }
        };
    }).directive("hitPoints", function() {
        return {
            restrict: 'E',
            templateUrl: "partials/character-defence-hit-points.html",
            controller: function($scope, CharacterFactory, ClassFactory) {
                var classes = {};
                ClassFactory.getClasses().then(function(data) {
                    classes = data;
                });

                $scope.classBonusArray = function() {
                    var hitDiceArray = [];

                    for (var key in CharacterFactory.classes) {
                        var aClass = CharacterFactory.classes[key];
                        hitDiceArray.push(aClass.level + "d" + classes[aClass.name].hitDie);
                    };

                    if ($scope.conBonusHP() > 0) {
                        hitDiceArray.push($scope.conBonusHP().toString());
                    };
                    return hitDiceArray.join("+");
                };

                $scope.minHP = -CharacterFactory.abilities.Constitution.adjustedScore | -10;

                $scope.conModifier = function() {
                    return CharacterFactory.abilities.Constitution.modifier | 0;
                };

                $scope.conBonusHP = function() {
                    return CharacterFactory.level() * $scope.conModifier();
                }

                $scope.maxHP = function() {
                    var hp = $scope.conBonusHP();
                    for (var key in CharacterFactory.classes) {
                        hp += parseInt(classes[CharacterFactory.classes[key].name].hitDie) * CharacterFactory.classes[key].level;
                    };
                    return hp;
                };
                $scope.currentHP = $scope.maxHP();
            }
        };
    }).directive("armorClass", function() {
        return {
            restrict: 'E',
            templateUrl: "partials/character-defence-armor-class.html",
            controller: function($scope, CharacterFactory) {
                $scope.acBonusArray = [{
                    value: function() {
                        return $scope.flatfoot ? 0 : CharacterFactory.abilities.Dexterity.modifier;
                    },
                    name: "Dex Modifier"
                }, {
                    value: function() {
                        return $scope.touch ? 0 : 1;
                    },
                    name: "Armor Bonus"
                }, {
                    value: function() {
                        return $scope.touch ? 0 : 1;
                    },
                    name: "Shield Bonus"
                }, {
                    value: function() {
                        return 1;
                    },
                    name: "Deflection Bonus"
                }, {
                    value: function() {
                        return $scope.touch ? 0 : 1;
                    },
                    name: "Natural Armor"
                }, {
                    value: function() {
                        return $scope.flatfoot ? 0 : 1;
                    },
                    name: "Dodge Bonus"
                }, {
                    value: function() {
                        return 1;
                    },
                    name: "Size Modifier"
                }];

                $scope.flatfoot = false;
                $scope.touch = false;


                $scope.calculateAC = function() {
                    var AC = 10;
                    for (var i = 0; i < $scope.acBonusArray.length; i++) {
                        AC += $scope.acBonusArray[i].value();
                    }
                    return AC;
                }

            }
        };
    });
