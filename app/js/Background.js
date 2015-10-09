angular.module("characterSheet.background", [])
    .directive("background", function() {
        return {
            restrict: 'E',
            templateUrl: "partials/character-background.html",
            controller: function($scope, CharacterFactory, RollerFactory) {
                $scope.character = CharacterFactory;

                $scope.raceList = ["dwarf","elf","gnome","half-elf","half-orc","halfling","human"];
                $scope.classList = ["alchemist","barbarian","bard","cavelier","cleric","druid","fighter", "gunslinger", "inquisitor", "magus", "monk","oracle", "paladin", "ranger","rogue", "sorcerer", "summoner", "witch", "wizard"];

                $scope.selectedRace = "dwarf";
                $scope.selectedClass = "alchemist";
                $scope.selectedRegion = "";
                $scope.selectedHomeland = {};
                $scope.suggestedTraits = [];

                var randomHomeland = function(race) {
                    var homelands = $scope.homelands[race];
                    var roll = Math.floor((Math.random() * 100) + 1);
                    if (race == "elf") {roll=100;}
                    if (race == "human") {roll=100;}
                    console.log("Random homeland for " + race + " : " + roll);

                    var traits = [];
                    var region = {};

                    for(var homeland in homelands) {
                        region = homelands[homeland];
                        if (roll >= region.lower && roll <= region.upper) {
                            $scope.selectedHomeland = region;
                            console.log("Match Found - " + region.name);
                            if(jQuery.isArray(region.addTraits)) { $scope.suggestedTraits = $scope.suggestedTraits.concat(region.addTraits); }
                            if(jQuery.isFunction(region.addTraits)) { $scope.suggestedTraits = $scope.suggestedTraits.concat(region.addTraits()); }
                            if (jQuery.isFunction(region.action)) { region = region.action(); }
                            break;
                        }
                    };
                    return region;
                };

                $scope.homelands = {
                	"dwarf": [
                		{"lower": 01, "upper": 40, "name": "Hills or Mountains", "addTraits": ["Goldsniffer", "Highlander"]},
                		{"lower": 41, "upper": 80, "name": "Underground", "addTraits": ["Surface Stranger", "Tunnel Fighter"]},
                		{"lower": 81, "upper": 87, "name": "Non-Dwarven Town or Village", "addTraits": ["Brewmaster", "Militia Veteran"]},
                		{"lower": 88, "upper": 95, "name": "Non-Dwarven City or Metropolis", "addTraits": ["Brewmaster", "Vagabond Child"]},
                		{"lower": 96, "upper": 100, "name": "Unusual Homeland", "action": function () {return randomHomeland("unusual");}}
                    ],
                	"elf": [
                		{"lower": 01, "upper": 60, "name": "Forest", "addTraits": ["Log Roller"]},
                		{"lower": 61, "upper": 80, "name": "Non-Elven City or Metropolis", "addTraits": function () { return $scope.selectedRace == "elf" ? ["Civilized", "Forlorn"] : $scope.selectedRace == "half-elf" ? ["Civilized", "Failed Apprentice"] : [];}},
                		{"lower": 81, "upper": 95, "name": "Non-Elven Town or Village", "addTraits": function () { return $scope.selectedRace == "elf" ? ["Forlorn"] : $scope.selectedRace == "half-elf" ? ["Failed Apprentice"] : [];}},
                		{"lower": 96, "upper": 100, "name": "Unusual Homeland", "action": function () {return randomHomeland("unusual");}, "addTraits": function () { return $scope.selectedRace == "elf" ? ["Forlorn"] : $scope.selectedRace == "half-elf" ? ["Elven Reflexes"] : [];}}
                    ],
                	"gnome": [
                		{"lower": 01, "upper": 30, "name": "Forest", "addTraits": ["Log Roller", "Animal Friend"]},
                		{"lower": 31, "upper": 65, "name": "Non-Gnome Town or Village", "addTraits": ["Animal Friend"]},
                		{"lower": 66, "upper": 95, "name": "Non-Gnome City or Metropolis", "addTraits": ["Rapscallion"]},
                		{"lower": 96, "upper": 100, "name": "Unusual Homeland", "action": function () {return randomHomeland("unusual");}}
                		],
                	"half-elf": [
                		{"lower": 01, "upper": 25, "name": "Raised in an Elven Homeland", "action": function () {return randomHomeland("elf");}},
                		{"lower": 26, "upper": 75, "name": "Raised in a Human Homeland", "action": function () {return randomHomeland("human");}},
                		{"lower": 76, "upper": 95, "name": "Forest", "addTraits": ["Log Roller"]},
                		{"lower": 96, "upper": 100, "name": "Unusual Homeland", "action": function () { return randomHomeland("unusual"); }}
                    ],
                	"half-orc": [
                		{"lower": 01, "upper": 25, "name": "Subterranean", "addTraits": ["Scrapper", "Surface Stranger"]},
                		{"lower": 26, "upper": 60, "name": "Orc Settlement", "addTraits": ["Scrapper"]},
                		{"lower": 61, "upper": 75, "name": "Raised in a Human Homeland", "action": function () {return randomHomeland("human");}},
                		{"lower": 76, "upper": 90, "name": "No True Homeland", "addTraits": ["Outcast"]},
                		{"lower": 91, "upper": 100, "name": "Unusual Homeland", "action": function () {return randomHomeland("unusual");}}
                    ],
                	"halfling": [
                		{"lower": 01, "upper": 50, "name": "Halfling Settlement", "addTraits": ["Civilized", "Well-Informed"]},
                		{"lower": 51, "upper": 80, "name": "Human Settlement", "addTraits": ["Child of the Streets", "Well-Informed"]},
                		{"lower": 81, "upper": 95, "name": "Traveling Band or Caravan", "addTraits": ["Friend in Every Town"]},
                		{"lower": 96, "upper": 100, "name": "Unusual Homeland", "action": function () {return randomHomeland("unusual");}}
                    ],
                	"human": [
                		{"lower": 01, "upper": 50, "name": "Town or Village", "addTraits": ["Militia Veteran"]},
                		{"lower": 51, "upper": 85, "name": "City or Metropolis", "addTraits": function () { return $scope.selectedRace == "human" ? ["Civilized", "Vagabond Child"] : $scope.selectedRace == "half-elf" ? ["Civilized", "Failed Apprentice"] : $scope.selectedRace == "half-orc" ? ["Brute", "Vagabond Child"] : [];}},
                		{"lower": 86, "upper": 95, "name": "Frontier", "addTraits": ["Frontier-Forged"]},
                		{"lower": 96, "upper": 100, "name": "Unusual Homeland", "action": function () { return randomHomeland("unusual"); }}
                    ],
                	"unusual": [
                		{"lower": 01, "upper": 10, "name": "Subterranean", "addTraits": ["Surface Stranger"]},
                		{"lower": 11, "upper": 25, "name": "Mountains", "addTraits": ["Highlander"]},
                		{"lower": 26, "upper": 40, "name": "Plains", "addTraits": ["Savanna Child"]},
                		{"lower": 41, "upper": 50, "name": "Town or Village", "addTraits": ["Militia Veteran"]},
                		{"lower": 51, "upper": 60, "name": "City or Metropolis", "addTraits": ["Civilized", "Vagabond Child"]},
                		{"lower": 61, "upper": 70, "name": "Forest", "addTraits": ["Log Roller"]},
                		{"lower": 71, "upper": 80, "name": "River, Swamp, or Wetlands", "addTraits": ["River Rat"]},
                		{"lower": 81, "upper": 85, "name": "Desert", "addTraits": ["Desert Child"]},
                		{"lower": 86, "upper": 90, "name": "Sea", "addTraits": ["Sea-Souled"]},
                		{"lower": 91, "upper": 95, "name": "Tundra", "addTraits": ["Tundra Child"]},
                		{"lower": 96, "upper": 100, "name": "Another Plane", "addTraits": ["Scholar of the Great Beyond"]}
                    ]
                };



                $scope.rerollHomeland = function () {
                    console.log("START");
                    $scope.suggestedTraits = [];

                    $scope.selectedRegion = randomHomeland($scope.selectedRace).name;

                    console.log($scope.selectedRegion + " - " + $scope.suggestedTraits);

                    console.log("FINISH");
                };



                $scope.adoptedSiblingRaceList = [
                   {"index": "01", "name": "Aasimar"},
                   {"index": "02", "name": "Catfolk"},
                   {"index": "04", "name": "Changeling"},
                   {"index": "05", "name": "Dhampir"},
                   {"index": "06", "name": "Duergar"},
                   {"index": "16", "name": "Dwarf"},
                   {"index": "26", "name": "Elf"},
                   {"index": "27", "name": "Fetchling"},
                   {"index": "28", "name": "Gillman"},
                   {"index": "38", "name": "Gnome"},
                   {"index": "39", "name": "Goblin"},
                   {"index": "40", "name": "Grippli"},
                   {"index": "50", "name": "Half-Elf"},
                   {"index": "60", "name": "Half-Orc"},
                   {"index": "70", "name": "Halfling"},
                   {"index": "71", "name": "Hobgoblin"},
                   {"index": "81", "name": "Human"},
                   {"index": "82", "name": "Ifrit"},
                   {"index": "83", "name": "Kitsune"},
                   {"index": "84", "name": "Kobold"},
                   {"index": "85", "name": "Merfolk"},
                   {"index": "86", "name": "Nagaji"},
                   {"index": "87", "name": "Orc"},
                   {"index": "88", "name": "Oread"},
                   {"index": "89", "name": "Ratfolk"},
                   {"index": "90", "name": "Samsaran"},
                   {"index": "91", "name": "Strix"},
                   {"index": "92", "name": "Suli"},
                   {"index": "93", "name": "Svirfneblin"},
                   {"index": "94", "name": "Sylph"},
                   {"index": "95", "name": "Tengu"},
                   {"index": "96", "name": "Tiefling"},
                   {"index": "97", "name": "Undine"},
                   {"index": "98", "name": "Vanara"},
                   {"index": "99", "name": "Vishkanya"},
                   {"index": "100", "name": "Wayang"}];

                $scope.step=1;
            }
        };
    });
