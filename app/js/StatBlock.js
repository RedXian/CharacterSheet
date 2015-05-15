angular.module("characterSheet.statBlock", [])
    .directive("statBlock", function() {
        return {
            restrict: 'E',
            templateUrl: "partials/character-stat-block.html",
            controller: function ($scope, CharacterFactory, AbilityFactory, SkillFactory) {
                $scope.abilities = AbilityFactory;
                $scope.character = CharacterFactory;
                $scope.skills = SkillFactory;
            }
        };
    });
