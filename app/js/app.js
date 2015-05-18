(function() {
    'use strict';

    // Declare app level module which depends on views, and components
    var app = angular.module('characterSheet', [
        'characterSheet.character',
        'characterSheet.skills',
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

    app.filter('BAB', function () {
        return function(bonus) {
            var temp=[];
            while (bonus >= 0) {
                temp.push("\u002B" + bonus);
                bonus -= 5;
            }
            return temp.join("\u2044");
        };
    });

    app.filter('displayClassAndLevels', function() {
        return function (classes) {
                var output = [];
                for (var key in classes) {
                    output.push(classes[key].name + " " + classes[key].level);
                };
                return output.length > 0 ? output.join(' \u2044 ') : 'none';
        };
    });

    app.filter('movement', function() {
        return function(speed){
            return speed ? speed + " feet (" + Math.round(speed / 5, 0) + " squares)" : "\u2014";
        };
    });

    app.controller('MainController', function($scope, CharacterFactory, ClassFactory, RaceFactory, SkillFactory) {
        $scope.character = CharacterFactory;

        $scope.raceList = [];
        RaceFactory.getRaceList().then(function(data) {
            $scope.raceList = data;
        });

        $scope.classList = [];
        ClassFactory.getClassList().then(function(data) {
            $scope.classList = data;
        });

        $scope.skillList = [];
        SkillFactory.getSkillList().then(function(data) {
            $scope.skillList = data;
            console.log(data);
        });

    });
})();
