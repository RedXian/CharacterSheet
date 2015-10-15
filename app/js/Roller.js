angular.module("characterSheet.roller", [])
    .factory("RollerFactory", function() {
        var roller = {
            getResult: function(notation) {
                var result = [];
                var validation = /([+-]?\d+(d\d+(-L)+)?)+/;
                var sum = 0;
                if (validation.test(notation)) {
                    var array = notation.replace(/\+?-(?=[^L])/, '+-').split(/\+/);
                    for (var i = 0; i < array.length; i++) {
                        if (array[i]) {
                            var roll = roller.parseRollNotation(array[i]);
                            result.push({
                                name: array[i],
                                value: roll
                            });
                            sum += roll;
                        }
                    }
                };
                result.push({
                    name: "Total",
                    value: sum
                });
                return result;
            },
            parseRollNotation: function(notation) {
                var dropLowest = false
                var result = parseInt(notation);
                if (notation.indexOf('d') > -1) {
                    result = 0;
                    if (notation.indexOf('-L') > -1) {
                        dropLowest = true;
                        notation = notation.replace(/-L/, "");
                    };
                    var numDice = parseInt(notation.split('d')[0]);
                    var diceFaces = parseInt(notation.split('d')[1]);
                    var lowest = dropLowest ? diceFaces : 0;
                    for (var i = 0; i < numDice; i++) {
                        var roll = Math.floor((Math.random() * diceFaces) + 1);
                        lowest = (dropLowest && roll < lowest) ? roll : lowest;
                        result += roll;

                    }
                    return result - (dropLowest ? lowest : 0);
                }
                return result;
            }
        };
        return roller;
    });
