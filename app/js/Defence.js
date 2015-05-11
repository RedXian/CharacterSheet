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
            controller: function($scope, CharacterFactory) {
                $scope.abilities = CharacterFactory.abilities;
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
                $scope.classBonusArray = [{
                    name: "Class1",
                    level: 2,
                    Fortitude: 2,
                    Reflex: 0,
                    Will: 1
                }, {
                    name: "Class2",
                    level: 2,
                    Fortitude: 0,
                    Reflex: 2,
                    Will: 1
                }];

                $scope.getSaveTotal = function(save) {
                    var total = $scope.abilities[save.ability].modifier;
                    for (var i = 0; i < $scope.classBonusArray.length; i++) {
                        total += $scope.classBonusArray[i][save.name];
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
                    var array = {};
                    var hitDiceArray = [];

                    for (var key in CharacterFactory.classes) {
                        var aClass = CharacterFactory.classes[key];
                        hitDiceArray.push(aClass.level + "d" + classes[aClass.name].hitDie);
                        array[aClass.name] = aClass;
                        array[aClass.name].hitDie = classes[aClass.name].hitDie;
                    };
                    if ($scope.conBonusHP() > 0) {
                        hitDiceArray.push($scope.conBonusHP().toString());
                    };

                    console.log(hitDiceArray);
                    return hitDiceArray.join("+")
                        // return array;
                };

                $scope.minHP = -CharacterFactory.abilities.Constitution.adjustedScore;

                $scope.conModifier = function() {
                    if (CharacterFactory.abilities.Constitution.modifier) {
                        return CharacterFactory.abilities.Constitution.modifier;
                    };
                    return 0;
                };

                $scope.conBonusHP = function() {
                    return CharacterFactory.level() * $scope.conModifier();
                }

                $scope.maxHP = function() {
                    var hp = $scope.conBonusHP();
                    for (var key in CharacterFactory.classes) {
                        try {
                            hp += parseInt(classes[CharacterFactory.classes[key].name].hitDie) * CharacterFactory.classes[key].level;
                        } catch (err) {};
                    };
                    // for (var i = 0; i < $scope.classBonusArray.length; i++) {
                    //     hp += $scope.classBonusArray[i].level * $scope.classBonusArray[i].hitDie;
                    // }
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
                $scope.bonuses = [{
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
                    for (var i = 0; i < $scope.bonuses.length; i++) {
                        AC += $scope.bonuses[i].value();
                    }
                    return AC;
                }

            }
        };
    });
