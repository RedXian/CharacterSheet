angular.module("characterSheet.elements", [])
    .directive("rollTable", function() {
        return {
            restrict: 'E',
            scope: { table: '=' },
            templateUrl: "partials/elements/table.html",
            link: function($scope, scope, element, attrs) {}
        };
    });
