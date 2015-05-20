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

                $scope.getClassBonus = function(aClass, bonus) {
                    return parseInt(aClass.progression[bonus][aClass.level - 1]);
                };

                //Need to populate ClassJSON to support this format.
                $scope.getClassBonuses = function(bonus) {
                    var classBonuses = [];
                    var characterClasses = function() {
                        return CharacterFactory.classes;
                    };
                    for (var key in characterClasses) {
                        var aClass = characterClasses[key];
                        classBonuses.push({
                            name: aClass.name,
                            bonus: parseInt(aClass.progression[bonus][aClass.level - 1])
                        });
                    }
                    return classBonuses;
                };

                $scope.getModifier = function(ability) {
                    return CharacterFactory.abilities[ability].modifier | 0;
                };

                $scope.getSaveTotal = function(save) {
                    var total = $scope.getModifier(save.ability);
                    for (var key in CharacterFactory.classes) {
                        var aClass = CharacterFactory.classes[key];
                        total += parseInt(aClass.progression[save.name][aClass.level - 1]);
                    }
                    // CharacterFactory.saves[save] = total;
                    return total;
                };
            }
        };
    }).directive("hitPoints", function() {
        return {
            restrict: 'E',
            templateUrl: "partials/character-defence-hit-points.html",
            controller: function($scope, CharacterFactory, ClassFactory) {
                $scope.character = CharacterFactory;

                $scope.classBonusArray = function() {
                    var hitDiceArray = [];
                    for (var key in CharacterFactory.classes) {
                        var aClass = CharacterFactory.classes[key];
                        hitDiceArray.push(aClass.level + "d" + aClass.hitDie);
                    };

                    var conBonus = $scope.conBonusHP();
                    if (conBonus > 0) {
                        hitDiceArray.push(conBonus);
                    };

                    var favoredBonus = $scope.favoredBonusHP();
                    if (favoredBonus > 0) {
                        hitDiceArray.push(favoredBonus);
                    };

                    return hitDiceArray.join('+');
                };

                $scope.minHP = -CharacterFactory.abilities.Constitution.adjustedScore | -10;

                $scope.conModifier = function() {
                    return CharacterFactory.abilities.Constitution.modifier | 0;
                };

                $scope.favoredBonusHP = function() {
                    var bonus = 0;
                    for (var i = 0; i < CharacterFactory.favoredClassLevelBonuses.length; i++) {
                        bonus += (CharacterFactory.favoredClassLevelBonuses[i].value=="HP")? 1 : 0;
                    };
                    return bonus;
                }

                $scope.conBonusHP = function() {
                    return CharacterFactory.level() * $scope.conModifier();
                }

                $scope.maxHP = function() {
                    var hp = $scope.conBonusHP() + $scope.favoredBonusHP();
                    for (var key in CharacterFactory.classes) {
                        hp += parseInt(CharacterFactory.classes[key].hitDie) * CharacterFactory.classes[key].level;
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

                        return sizeObject[size];
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
