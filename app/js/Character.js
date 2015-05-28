angular.module("characterSheet.character", [])
    .factory("CharacterFactory", function() {
        var character = {
            experience: 200000000,
            abilities: {},
            classes: {},
            favoredClasses: 1,
            favoredBonuses: {
                "Skill": {
                    name: "Skill Point",
                    points: 0
                },
                "HP": {
                    name: "Hit Point",
                    points: 0
                }
            },
            skills: {},
            traits: {},
            level: function(track) {
                var advancement = {
                    "Slow": [0,
                        3000,
                        7500,
                        14000,
                        23000,
                        35000,
                        53000,
                        77000,
                        115000,
                        160000,
                        235000,
                        330000,
                        475000,
                        665000,
                        955000,
                        1350000,
                        1900000,
                        2700000,
                        3850000,
                        5350000
                    ],
                    "Medium": [0,
                        2000,
                        5000,
                        9000,
                        15000,
                        23000,
                        35000,
                        51000,
                        75000,
                        105000,
                        155000,
                        220000,
                        315000,
                        445000,
                        635000,
                        890000,
                        1300000,
                        1800000,
                        2550000,
                        3600000
                    ],
                    "Fast": [0,
                        1300,
                        3300,
                        6000,
                        10000,
                        15000,
                        23000,
                        34000,
                        50000,
                        71000,
                        105000,
                        145000,
                        210000,
                        295000,
                        425000,
                        600000,
                        850000,
                        1200000,
                        1700000,
                        2400000
                    ]
                };

                track = track ? track : "Medium";

                for (var i = advancement[track].length - 1; i > 0; i--) {
                    if (character.experience >= advancement[track][i]) {
                        return i + 1;
                    }
                }
                return 1;
            },

            setRace: function(race) {
                for (var key in character.favoredBonuses) {
                    if (character.favoredBonuses[key].race) {
                        if (character.favoredBonuses[key].race == character.race.name) {
                            delete character.favoredBonuses[key];
                        }
                    }
                }
                delete character.race;
                character.race = {};

                // remove all Racial Traits
                for (var key in character.traits) {
                    if (character.traits[key].type.indexOf("Racial Trait") > -1) {
                        delete character.traits[character.traits[key].name];
                    }
                };
                // Add Race Elements
                for (var key in race) {
                    var element = race[key];
                    if (element.type) {
                        if (element.type != "Alternate Racial Trait") {
                            character.traits[key] = element;
                        }
                    } else character.race[key] = element;
                };

                for (var key in race.favoredOptions) {
                    character.favoredBonuses[key] = race.favoredOptions[key];
                    character.favoredBonuses[key].race = race.name;
                    character.favoredBonuses[key].points = 0;
                }
            },

            addClass: function(aClass, archetype) {
                if (character.classes[aClass.name]) {
                    character.classes[aClass.name].level++;
                } else {
                    character.classes[aClass.name] = {};
                    for (var key in aClass) {
                        var element = aClass[key];
                        if (element.type !== "Archetype") {
                            character.classes[aClass.name][key] = element;
                        } else {
                            if (archetype && element.name == archetype.name) {
                                character.classes[aClass.name][key] = element;
                            }
                        }
                    };
                    character.classes[aClass.name].level = 1;
                    character.addFavoredClass(aClass);
                };
            },

            addFavoredClass: function(aClass) {
                var favoredClassCount = 0;
                if (character.classes[aClass.name]) {
                    for (var key in character.classes) {
                        if (character.classes[key].favoredClass) {
                            favoredClassCount++;
                        }
                    }

                    var maxFavoredClasses = character.favoredClasses;
                    for (var key in character.traits) {
                        if (character.traits[key].favoredClass) {
                            maxFavoredClasses += parseInt(character.traits[key].favoredClass);
                        }
                    }
                    if (favoredClassCount < maxFavoredClasses) {
                        character.classes[aClass.name].favoredClass = true;
                        return true;
                    }
                }
                return false;
            },

            getFavoredClassLevels: function() {
                var total = 0;
                for (var key in character.classes) {
                    if (character.classes[key].favoredClass) {
                        total += character.classes[key].level;
                    }
                }
                return total;
            },

            removeFavoredClass: function(aClass) {
                if (character.classes[aClass.name].favoredClass) {
                    delete character.classes[aClass.name].favoredClass;
                    return true;
                }
                return false;
            },

            removeClass: function(aClassName) {
                if (character.classes[aClassName].level == 1) {
                    delete character.classes[aClassName];
                } else {
                    character.classes[aClassName].level--;
                };
            },

            // TODO: Maybe move to Class.js as this is only required there.
            getClassLevels: function() {
                var totalLevels = 0;
                for (var key in character.classes) {
                    totalLevels += character.classes[key].level;
                }
                return totalLevels;
            },
            getAgingEffect: function() {
                var ageGroup = "Adulthood";
                if (character.race) {
                    if (character.age >= parseInt(character.race.agingEffects["Middle Age"])) {
                        ageGroup = "Middle Age";
                        if (character.age >= parseInt(character.race.agingEffects["Old"])) {
                            ageGroup = "Old";
                            if (character.age >= parseInt(character.race.agingEffects["Venerable"])) {
                                ageGroup = "Venerable";
                            }
                        }
                    }
                }
                return ageGroup;
            }
        };

        return character;
    })
    .controller('CharacterController', function($scope, CharacterFactory) {
        $scope.character = CharacterFactory;
    });
