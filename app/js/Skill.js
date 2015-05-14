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

        $scope.isClassSkill = function(skill, category) {
            if (category) {
                category = skill + " (" + category.toLowerCase() + ")";
            };

            var classList = $scope.character.classes;

            for (var key in classList) {
                if (classList[key]["Class Skills"]) {
                    var classSkills = classList[key]["Class Skills"];
                    if (category) {
                        if (classSkills.indexOf(skill + " (all)") > -1 || classSkills.indexOf(category) > -1 || classSkills.indexOf(skill) > -1) {
                            return true;
                        }
                    } else if (classSkills.indexOf(skill) > -1) {
                        return true;
                    }
                } else {
                    console.log("Class Skills missing for " + classList[key].name);
                }
            };
            return false;
        };

        $scope.getMaxSkillsPoints = function() {
            var classList = $scope.character.classes;
            var points = 0;

            //skill points granted from Classes
            for (var key in classList) {
                if (classList[key].skillsPerLevel) {
                    var skillsPerLevel = parseInt(classList[key].skillsPerLevel) + CharacterFactory.abilities.Intelligence.modifier;
                    points += (skillsPerLevel > 0 ? skillsPerLevel : 1) * classList[key].level;
                } else {
                    console.log("skillsPerLevel missing for " + classList[key].name);
                };
            };

            // Skills points granted from Traits
            for (var key in CharacterFactory.traits) {
                if (CharacterFactory.traits[key].skillsPerLevel) {
                    points += parseInt(CharacterFactory.traits[key].skillsPerLevel * CharacterFactory.level());
                }
            };

            // Need to Added any Favored Class bonuses.
            return points;
        };

        $scope.getSkillsPointsSpent = function() {
            var characterSkills = CharacterFactory.skills;
            var spent = 0;

            for (var key in characterSkills) {
                spent += characterSkills[key].ranks;
            };
            return spent;
        }

        $scope.maxRanks = function(skill) {
            if ($scope.getMaxSkillsPoints() > $scope.getSkillsPointsSpent()) {
                return CharacterFactory.level();
            } else {
                return CharacterFactory.skills[skill].ranks;
            }
        }

        $scope.skillBonus = function(skill, category) {
            var result = 0;

            if (!category) {
                var skillName = skill.name
            } else {
                var skillName = $scope.subCatName(skill.name, category);
            }

            if (CharacterFactory.skills[skillName]) {
                if (category) {
                    result += ($scope.isClassSkill(skill.name, category) && CharacterFactory.skills[skillName].ranks) ? 3 : 0;
                } else {
                    result += ($scope.isClassSkill(skill.name) && CharacterFactory.skills[skillName].ranks) ? 3 : 0;
                }
                result += CharacterFactory.skills[skillName].ranks;
            }
            if (CharacterFactory.abilities[skill.ability]) {
                result += CharacterFactory.abilities[skill.ability].modifier;
            };

            return result;
        };

        $scope.subCatName = function(skill, category) {
            return skill.name + " (" + category.toLowerCase() + ")";
        };
    });
