angular.module("characterSheet.feats", [])
    .factory("FeatFactory", function($q, $http) {
        var factory = {
            getFeatList: function() {
                var deferred = $q.defer();
                $http.get('data/feats/core-rulebook.json').success(function(data) {
                    var array = [];
                    var source = data.source;
                    for (var key in data.feats) {
                        var feat = data.feats[key];
                        feat.source = source;
                        array.push(feat);
                    };
                    deferred.resolve(array);
                });
                return deferred.promise;
            }
        };
        return factory;
    })
    .directive("featList", function() {
        return {
            restrict: 'E',
            templateUrl: "partials/character-feat-list.html",
            controller: 'FeatController',
            controllerAs: 'FeatCtrl'
        };
    })
    .controller('FeatController', function($scope, CharacterFactory, FeatFactory) {
        $scope.character = CharacterFactory;

        $scope.levelFeats = function () {
            return Math.round(CharacterFactory.level() / 2, 0);
        }

        $scope.totalFeats = function () {
            var total = 0;
            // Include Racial Bonus Feats
            // Include Class Bonus Feats
            total += $scope.levelFeats();
            return total;
        };

        $scope.featsSelected = function () {
            var total = 0;
            for (var key in CharacterFactory.feats) {
                if (CharacterFactory.feats[key].type === "Feat") {
                    total++;
                }
            }
            return total;
        }

    });
