angular.module("characterSheet.skills", [])
    .factory("SkillFactory", function() {
        var skills = [{
            name: "Acrobatics",
            trained: true,
            ability: "Dexterity",
            armorCheckPenalty: true
        }, {
            name: "Appraise",
            trained: true,
            ability: "Intelligence"
        }, {
            name: "Bluff",
            trained: true,
            ability: "Charisma"
        }, {
            name: "Climb",
            trained: true,
            ability: "Strength",
            armorCheckPenalty: true
        }, {
            name: "Craft",
            subCategory: ["alchemy", "armor", "baskets", "books", "bows", "calligraphy", "carpentry", "cloth", "clothing", "glass", "jewelry", "leather", "locks", "paintings", "pottery", "sculptures", "ships", "shoes", "stonemasonry", "traps", "weapons"],
            trained: true,
            ability: "Intelligence"
        }, {
            name: "Diplomacy",
            trained: true,
            ability: "Charisma"
        }, {
            name: "Disable Device",
            ability: "Dexterity",
            armorCheckPenalty: true
        }, {
            name: "Disguise",
            trained: true,
            ability: "Charisma"
        }, {
            name: "Escape Artist",
            trained: true,
            ability: "Dexterity",
            armorCheckPenalty: true
        }, {
            name: "Fly",
            trained: true,
            ability: "Dexterity",
            armorCheckPenalty: true
        }, {
            name: "Handle Animal",
            ability: "Charisma"
        }, {
            name: "Heal",
            trained: true,
            ability: "Wisdom"
        }, {
            name: "Intimidate",
            trained: true,
            ability: "Charisma"
        }, {
            name: "Knowledge",
            subCategory: ["arcana", "dungeoneering", "engineering", "geography", "history", "local", "nature", "nobility", "planes", "religion"],
            ability: "Intelligence"
        }, {
            name: "Linguistics",
            ability: "Intelligence"
        }, {
            name: "Perception",
            trained: true,
            ability: "Wisdom"
        }, {
            name: "Perform",
            trained: true,
            ability: "Charisma"
        }, {
            name: "Profession",
            subCategory: ["architect", "baker", "barrister", "brewer", "butcher", "clerk", "cook", "courtesan", "driver", "engineer", "farmer", "fisherman", "gambler", "gardener", "herbalist", "innkeeper", "librarian", "merchant", "midwife", "miller", "miner", "porter", "sailor", "scribe", "shepherd", "stable master", "soldier", "tanner", "trapper", "woodcutter"],
            ability: "Wisdom"
        }, {
            name: "Ride",
            trained: true,
            ability: "Dexterity",
            armorCheckPenalty: true
        }, {
            name: "Sense Motive",
            trained: true,
            ability: "Wisdom"
        }, {
            name: "Sleight of Hand",
            ability: "Dexterity",
            armorCheckPenalty: true
        }, {
            name: "Spellcraft",
            ability: "Intelligence"
        }, {
            name: "Stealth",
            trained: true,
            ability: "Dexterity",
            armorCheckPenalty: true
        }, {
            name: "Survival",
            trained: true,
            ability: "Wisdom"
        }, {
            name: "Swim",
            trained: true,
            ability: "Strength",
            armorCheckPenalty: true
        }, {
            name: "Use Magic Device",
            ability: "Charisma"
        }];
        return skills;
    }).directive("skillList", function() {
        return {
            restrict: 'E',
            templateUrl: "partials/character-skill-list.html",
            controller: 'SkillController',
            controllerAs: 'skillCtrl'
        };
    }).controller('SkillController', function($scope, CharacterFactory, SkillFactory) {
        $scope.character = CharacterFactory;
        $scope.skills = SkillFactory;

        $scope.isClassSkill = function(skill) {
            return $scope.character.skills[skill].isClassSkill;
        };

        $scope.skillBonus = function(skill, category) {
            if (!category) {
                var skillName = skill.name
            } else {
                var skillName = $scope.subCatName(skill.name, category);
            }
            var result = 0;
            if (CharacterFactory.skills[skillName]) {
                result = (CharacterFactory.skills[skillName].isClassSkill && CharacterFactory.skills[skill.Name].ranks) ? 3 : 0;
                result += CharacterFactory.skills[skillName].ranks;
            }
            result += CharacterFactory.abilities[skill.ability].modifier;
            return result;
        };

        $scope.subCatName = function(skill, category) {
            return skill.toLowerCase() + category.charAt(0).toUpperCase() + category.substr(1).toLowerCase();
        };
    });
