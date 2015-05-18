angular.module("characterSheet.skills", [])
    .factory("SkillFactory", function($q, $http) {
        var factory = {
            getSkillList: function() {
                var deferred = $q.defer();
                $http.get('data/skills.json').success(function(data) {
                    deferred.resolve(data);
                });
                return deferred.promise;
            }
        };
        return factory;
    })
    .directive("skillList", function() {
        return {
            restrict: 'E',
            templateUrl: "partials/character-skill-list.html",
            controller: 'SkillController',
            controllerAs: 'skillCtrl'
        };
    })
    .controller('SkillController', function($scope, CharacterFactory, SkillFactory) {
        $scope.character = CharacterFactory;

        $scope.isClassSkill = function(skill, category) {
            if (category) {
                category = skill + " (" + category.toLowerCase() + ")";
            };

            var classList = $scope.character.classes;
            for (var key in classList) {
                if (classList[key].classSkills) {
                    var classSkills = classList[key].classSkills;
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
            // Need to add any Favored Class bonuses.
            return points;
        };

        $scope.getSkillsPointsSpent = function() {
            var characterSkills = ($scope.character.skills);
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
                var skillName = $scope.subCatName(skill, category);
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
            // CharacterFactory.skills[skillName].bonus = result;
            return result;
        };

        $scope.subCatName = function(skill, category) {
            return skill.name + " (" + category.toLowerCase() + ")";
        };

        $scope.skillFilter = function() {
            return function(item, skill) {
              var skillName = "";
              if (skill) {
                  console.log(skill);
                  skillName = $scope.subCatName(skill, item);
              } else {
                  skillName = item.name;
              }
                return CharacterFactory.skills[skillName].ranks > 0 ? true : false;
            }
        }
    });
