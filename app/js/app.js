(function() {
    'use strict';

    // Declare app level module which depends on views, and components
    var app = angular.module('characterSheet', [
        'ngResource',
        'characterSheet.character',
        'characterSheet.skills',
        'characterSheet.feats',
        'characterSheet.races',
        'characterSheet.classes',
        'characterSheet.abilities',
        'characterSheet.combat',
        'characterSheet.defence',
        'characterSheet.personal',
        'characterSheet.statBlock',
        'characterSheet.roller'
    ]);

    app.filter('signedNumber', function() {
        return function(input) {
            if (!input) input = 0;
            return (input < 0 ? "\u2212" : "\u002B") + Math.abs(input);
        };
    });

    app.filter('orderObjectBy', function() {
        return function(items, field, reverse) {
            var filtered = [];
            angular.forEach(items, function(item) {
                filtered.push(item);
            });
            filtered.sort(function(a, b) {
                return (a[field] > b[field] ? 1 : -1);
            });
            if (reverse) filtered.reverse();
            return filtered;
        };
    });

    app.filter('serialComma', function() {
        return function(arrayList, conjunction) {
            if (arrayList) {
                var list = arrayList.slice(0);
                conjunction = (conjunction || "and") + " "; // set default list type to "and"
                if (list.length < 3) {
                    return list.join(" " + conjunction);
                } else {
                    list[list.length - 1] = conjunction + list[list.length - 1];
                }
                return list.join(", ");
            }
            return "none";
        };
    });

    app.filter('BAB', function() {
        return function(bonus) {
            var temp = [];
            while (bonus >= 0) {
                temp.push("\u002B" + bonus);
                bonus -= 5;
            }
            return temp.join("\u2044");
        };
    });

    app.filter('displayClassAndLevels', function() {
        return function(classes) {
            var output = [];
            for (var key in classes) {
                output.push(classes[key].name + " " + classes[key].level);
            };
            return output.length > 0 ? output.join(' \u2044 ') : 'none';
        };
    });

    app.filter('movement', function() {
        return function(speed) {
            return speed ? speed + " feet (" + Math.round(speed / 5, 0) + " squares)" : "\u2014";
        };
    });

    app.filter('unique', function() {
        return function(arr, field) {
            if (!arr) return [];
            var o = {},
                i, l = arr.length,
                r = [];
            for (i = 0; i < l; i += 1) {
                o[arr[i][field]] = arr[i];
            }
            for (i in o) {
                r.push(o[i]);
            }
            return r;
        };
    });

    app.filter("sanitize", function($sce) {
        return function(htmlCode) {
            return $sce.trustAsHtml(htmlCode);
        }
    });

    app.filter("feet", function() {
        return function(height) {
            height = parseInt(height);
            var feet = Math.floor(height / 12, 0);
            var inches = height % 12;
            return feet + " ft. " + inches + " in.";
        }
    });

    app.filter("lbs", function() {
        return function(weight) {
            return parseInt(weight) ? parseInt(weight) + " lbs." : " \u2014 ";
        }
    });

    app.controller('MainController', function($scope, CharacterFactory, ClassFactory, RaceFactory, SkillFactory, FeatFactory) {
        $scope.character = CharacterFactory;

        $scope.raceList = [];
        $scope.raceSourceList = [];
        RaceFactory.getRaceList().then(function(data) {
            $scope.raceList = data;
            for (var key in data) {
                $scope.raceSourceList.push(data[key].source);
            }
        });

        $scope.classList = [];
        $scope.classSourceList = [];
        ClassFactory.getClassList().then(function(data) {
            $scope.classList = data;
            for (var key in data) {
                $scope.classSourceList.push(data[key].source);
            }
        });

        $scope.skillList = [];
        SkillFactory.getSkillList().then(function(data) {
            $scope.skillList = data;
        });

        $scope.featList = [];
        FeatFactory.getFeatList().then(function(data) {
            $scope.featList = data;
        });

        $scope.dimensions = {
            male: [],
            female: []
        };

    });
})();
