angular.module("characterSheet.character", [])
    .factory("CharacterFactory", function() {
        var character = {
            name: "nameless",
            experience: 1,
            level: 1,
            abilities: {
                Strength: {
                    // id: 1,
                    // name: "Strength"
                },
                Dexterity: {
                    // id: 2,
                    // name: "Dexterity"
                },
                Constitution: {
                    // id: 3,
                    // name: "Constitution"
                },
                Intelligence: {
                    // id: 4,
                    // name: "Intelligence"
                },
                Wisdom: {
                    id: 5,
                    name: "Wisdom"
                },
                Charisma: {
                    id: 6,
                    name: "Charisma"
                }
            },
            skills: {},
            traits: {},

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
            }
        };

        return character;
    })
.controller('CharacterController', function($scope, CharacterFactory) {
    $scope.character = CharacterFactory;
});
