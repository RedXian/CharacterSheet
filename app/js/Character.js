angular.module("characterSheet.character", [])
    .factory("CharacterFactory", function() {
        var character = {
            experience: 200000000,
            abilities: {},
            classes: {},
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

                for (var i = advancement[track].length-1; i > 0; i--) {
                    if (character.experience >= advancement[track][i]) {
                        return i+1;
                    }
                }
                return 1;
            },

            setRace: function(race) {
                delete character.race;
                character.race = {};

                // remove all Racial Traits
                for (var key in character.traits) {

                    if (character.traits[key].type.indexOf("Racial Trait") > -1) {
                        delete character.traits[character.traits[key].name];
                    }
                };

                for (var key in race) {
                    var element = race[key];
                    if (element.type) {
                        if (element.type != "Alternate Racial Trait") {
                            character.traits[key] = element;
                        }
                    } else character.race[key] = element;
                }
            },

            addClass: function(aClass) {
                if (character.classes[aClass.name]) {
                    character.classes[aClass.name].level++;
                } else {
                    character.classes[aClass.name] = aClass;
                    character.classes[aClass.name].level = 1;
                };
            },

            removeClass: function(aClass) {
                if (character.classes[aClass.name].level == 1) {
                    delete character.classes[aClass.name];
                } else {
                    character.classes[aClass.name].level--;
                }
            },

            getClassLevels: function() {
                var totalLevels = 0;
                for (var key in character.classes) {
                    totalLevels += character.classes[key].level;
                }
                return totalLevels;
            },

            showClassAndLevels: function () {
              var classAndLevels = [];
              for (var key in character.classes) {
                classAndLevels.push(character.classes[key].name + " " + character.classes[key].level);
              };

              return !classAndLevels === null ? 'none' : classAndLevels.join(' / ');
          }
        };

        return character;
    })
    .controller('CharacterController', function($scope, CharacterFactory) {
        $scope.character = CharacterFactory;
    });
