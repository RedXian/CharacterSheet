angular.module("characterSheet.background", [])
    .factory("BackgroundFactory", function() {
        var raceTables = {
            "dwarf": {
                "homeland": [{
                    "lower": "01",
                    "upper": "40",
                    "name": "Hills or Mountains",
                    "addTrait": {
                        "any": [
                            "Goldsniffer",
                            "Highlander"
                        ]
                    }
                }, {
                    "lower": "41",
                    "upper": "80",
                    "name": "Underground",
                    "addTrait": {
                        "any": [
                            "Surface Stranger",
                            "Tunnel Fighter"
                        ]
                    }
                }, {
                    "lower": "81",
                    "upper": "87",
                    "name": "Non-Dwarven Town or Village",
                    "addTrait": {
                        "any": [
                            "Brewmaster",
                            "Militia Veteran"
                        ]
                    }
                }, {
                    "lower": "88",
                    "upper": "95",
                    "name": "Non-Dwarven City or Metropolis",
                    "addTrait": {
                        "any": [
                            "Brewmaster",
                            "Vagabond Child"
                        ]
                    }
                }, {
                    "lower": "96",
                    "upper": "100",
                    "name": "Unusual Homeland",
                    "reroll": "unusual"
                }],
                "parents": [{
                    "lower": "01",
                    "upper": "60",
                    "name": "Both of your parents are alive"
                }, {
                    "lower": "61",
                    "upper": "73",
                    "name": "Only your father is alive"
                }, {
                    "lower": "74",
                    "upper": "86",
                    "name": "Only your mother is alive"
                }, {
                    "lower": "87",
                    "upper": "100",
                    "name": "Both of your parents are dead",
                    "action": "You gain access to the Orphaned social trait."
                }],
                "siblings": [{
                    "lower": "01",
                    "upper": "80",
                    "name": "1d4 biological siblings",
                    "action": "With two or more siblings, you gain access to the Kin Guardian combat trait."
                }, {
                    "lower": "81",
                    "upper": "90",
                    "name": "1d4+1 biological siblings",
                    "action": "You gain access to the Kin Guardian combat trait."
                }, {
                    "lower": "91",
                    "upper": "95",
                    "name": "1d3–1 biological siblings and 1d3–1 adopted siblings",
                    "action": "With two or more siblings, you gain access to the Kin Guardian combat trait. Roll on Table 1–23 to determine the race of any adopted siblings."
                }, {
                    "lower": "96",
                    "upper": "100",
                    "name": "No siblings"
                }]
            },
            "elf": {
                "homeland": [{
                    "lower": "01",
                    "upper": "60",
                    "name": "Forest",
                    "addTrait": {
                        "any": [
                            "Log Roller"
                        ]
                    }
                }, {
                    "lower": "61",
                    "upper": "80",
                    "name": "Non-Elven City or Metropolis",
                    "addTrait": {
                        "elf": [
                            "Civilized",
                            "Forlorn"
                        ],
                        "half-elf": [
                            "Civilized",
                            "Failed Apprentice"
                        ]
                    }
                }, {
                    "lower": "81",
                    "upper": "95",
                    "name": "Non-Elven Town or Village",
                    "addTrait": {
                        "elf": [
                            "Forlorn"
                        ],
                        "half-elf": [
                            "Failed Apprentice"
                        ]
                    }
                }, {
                    "lower": "96",
                    "upper": "100",
                    "name": "Unusual Homeland",
                    "reroll": "unusual",
                    "addTrait": {
                        "elf": [
                            "Forlorn"
                        ],
                        "half-elf": [
                            "Elven Reflexes"
                        ]
                    }
                }],
                "parents": [{
                    "lower": "01",
                    "upper": "79",
                    "name": "Both of your parents are alive"
                }, {
                    "lower": "80",
                    "upper": "87",
                    "name": "Only your father is alive"
                }, {
                    "lower": "88",
                    "upper": "95",
                    "name": "Only your mother is alive"
                }, {
                    "lower": "96",
                    "upper": "100",
                    "name": "Both of your parents are dead",
                    "action": "You gain access to the Orphaned social trait."
                }],
                "siblings": [{
                    "lower": "01",
                    "upper": "80",
                    "name": "1d2 biological siblings",
                    "action": "If you roll 2 siblings, you gain access to the Kin Guardian combat trait. "
                }, {
                    "lower": "81",
                    "upper": "85",
                    "name": "1d4+1 biological siblings",
                    "action": "You gain access to the Kin Guardian combat trait."
                }, {
                    "lower": "86",
                    "upper": "90",
                    "name": "1d4+1 biological siblings",
                    "action": "1d3–1 of these siblings are half-elves, adopted, or a mix of the two (your choice). You gain access to the Kin Guardian combat trait. Roll on Table 1–23 to determine the race of any adopted siblings."
                }, {
                    "lower": "91",
                    "upper": "100",
                    "name": "No siblings"
                }]
            },
            "gnome": {
                "homeland": [{
                    "lower": "01",
                    "upper": "30",
                    "name": "Forest",
                    "addTrait": {
                        "any": [
                            "Log Roller",
                            "Animal Friend"
                        ]
                    }
                }, {
                    "lower": "31",
                    "upper": "65",
                    "name": "Non-Gnome Town or Village",
                    "addTrait": {
                        "any": [
                            "Animal Friend"
                        ]
                    }
                }, {
                    "lower": "66",
                    "upper": "95",
                    "name": "Non-Gnome City or Metropolis",
                    "addTrait": {
                        "any": [
                            "Rapscallion"
                        ]
                    }
                }, {
                    "lower": "96",
                    "upper": "100",
                    "name": "Unusual Homeland",
                    "reroll": "unusual"
                }],
                "parents": [{
                    "lower": "01",
                    "upper": "90",
                    "name": "Both of your parents are alive"
                }, {
                    "lower": "91",
                    "upper": "93",
                    "name": "Only your father is alive"
                }, {
                    "lower": "94",
                    "upper": "96",
                    "name": "Only your mother is alive"
                }, {
                    "lower": "97",
                    "upper": "100",
                    "name": "Both of your parents are dead",
                    "action": "You gain access to the Orphaned social trait."
                }],
                "siblings": [{
                    "lower": "01",
                    "upper": "50",
                    "name": "1d4 biological siblings",
                    "action": "With two or more siblings, you gain access to the Kin Guardian combat trait."
                }, {
                    "lower": "51",
                    "upper": "60",
                    "name": "1d4–1 biological siblings and one adopted sibling",
                    "action": "With two or more siblings, you gain access to the Kin Guardian combat trait. Roll on Table 1–23 to determine the race of any adopted siblings."
                }, {
                    "lower": "61",
                    "upper": "100",
                    "name": "No siblings"
                }]
            },
            "half-elf": {
                "homeland": [{
                    "lower": "01",
                    "upper": "25",
                    "name": "Raised in an Elven Homeland",
                    "reroll": "elf"
                }, {
                    "lower": "26",
                    "upper": "75",
                    "name": "Raised in a Human Homeland",
                    "reroll": "human"
                }, {
                    "lower": "76",
                    "upper": "95",
                    "name": "Forest",
                    "addTrait": {
                        "any": [
                            "Log Roller"
                        ]
                    }
                }, {
                    "lower": "96",
                    "upper": "100",
                    "name": "Unusual Homeland",
                    "reroll": "unusual"
                }],
                "parents": [{
                    "lower": "01",
                    "upper": "20",
                    "name": "Both of your parents are alive"
                }, {
                    "lower": "21",
                    "upper": "55",
                    "name": "Only your father is alive"
                }, {
                    "lower": "56",
                    "upper": "90",
                    "name": "Only your mother is alive"
                }, {
                    "lower": "91",
                    "upper": "100",
                    "name": "Both of your parents are dead",
                    "action": "You gain access to the Orphaned social trait."
                }],
                "siblings": [{
                    "lower": "01",
                    "upper": "20",
                    "name": "1d2 half-siblings (either elf or human, your choice)",
                    "action": "With two or more siblings, you gain access to the Kin Guardian combat trait. "
                }, {
                    "lower": "21",
                    "upper": "30",
                    "name": "One half-elf sibling",
                    "action": "You gain access to the Kin Bond magic trait. "
                }, {
                    "lower": "31",
                    "upper": "100",
                    "name": "No siblings"
                }]
            },
            "half-orc": {
                "homeland": [{
                    "lower": "01",
                    "upper": "25",
                    "name": "Subterranean",
                    "addTrait": {
                        "any": [
                            "Scrapper",
                            "Surface Stranger"
                        ]
                    }
                }, {
                    "lower": "26",
                    "upper": "60",
                    "name": "Orc Settlement",
                    "addTrait": {
                        "any": [
                            "Scrapper"
                        ]
                    }
                }, {
                    "lower": "61",
                    "upper": "75",
                    "name": "Raised in a Human Homeland",
                    "reroll": "human"
                }, {
                    "lower": "76",
                    "upper": "90",
                    "name": "No True Homeland",
                    "addTrait": {
                        "any": [
                            "Outcast"
                        ]
                    }
                }, {
                    "lower": "91",
                    "upper": "100",
                    "name": "Unusual Homeland",
                    "reroll": "unusual"
                }],
                "parents": [{
                    "lower": "01",
                    "upper": "10",
                    "name": "Both of your parents are alive"
                }, {
                    "lower": "11",
                    "upper": "35",
                    "name": "Only your father is alive"
                }, {
                    "lower": "36",
                    "upper": "60",
                    "name": "Only your mother is alive"
                }, {
                    "lower": "61",
                    "upper": "100",
                    "name": "Both of your parents are dead",
                    "action": "You gain access to the Orphaned social trait."
                }],
                "siblings": [{
                    "lower": "01",
                    "upper": "60",
                    "name": "1d6+1 orc siblings",
                    "action": "You gain access to the Kin Guardian combat trait."
                }, {
                    "lower": "61",
                    "upper": "70",
                    "name": "1d4 human siblings",
                    "action": "With two or more siblings, you gain access to the Kin Guardian combat trait."
                }, {
                    "lower": "71",
                    "upper": "80",
                    "name": "One half-orc sibling"
                }, {
                    "lower": "81",
                    "upper": "100",
                    "name": "No siblings"
                }]
            },
            "halfling": {
                "homeland": [{
                    "lower": "01",
                    "upper": "50",
                    "name": "Halfling Settlement",
                    "addTrait": {
                        "any": [
                            "Civilized",
                            "Well-Informed"
                        ]
                    }
                }, {
                    "lower": "51",
                    "upper": "80",
                    "name": "Human Settlement",
                    "addTrait": {
                        "any": [
                            "Child of the Streets",
                            "Well-Informed"
                        ]
                    }
                }, {
                    "lower": "81",
                    "upper": "95",
                    "name": "Traveling Band or Caravan",
                    "addTrait": {
                        "any": [
                            "Friend in Every Town"
                        ]
                    }
                }, {
                    "lower": "96",
                    "upper": "100",
                    "name": "Unusual Homeland",
                    "reroll": "unusual"
                }],
                "parents": [{
                    "lower": "01",
                    "upper": "70",
                    "name": "Both parents living"
                }, {
                    "lower": "71",
                    "upper": "80",
                    "name": "Only your father is alive"
                }, {
                    "lower": "81",
                    "upper": "90",
                    "name": "Only your mother is alive"
                }, {
                    "lower": "91",
                    "upper": "100",
                    "name": "Both of your parents are dead",
                    "action": "You gain access to the Orphaned social trait."
                }],
                "siblings": [{
                    "lower": "01",
                    "upper": "30",
                    "name": "1d2 siblings",
                    "action": "With two siblings, you gain access to the Kin Guardian combat trait."
                }, {
                    "lower": "31",
                    "upper": "90",
                    "name": "1d4+1 siblings",
                    "action": "You gain access to the Kin Guardian combat trait."
                }, {
                    "lower": "91",
                    "upper": "100",
                    "name": "No siblings"
                }]
            },
            "human": {
                "homeland": [{
                    "lower": "01",
                    "upper": "50",
                    "name": "Town or Village",
                    "addTrait": {
                        "any": [
                            "Militia Veteran"
                        ]
                    }
                }, {
                    "lower": "51",
                    "upper": "85",
                    "name": "City or Metropolis",
                    "addTrait": {
                        "human": [
                            "Civilized",
                            "Vagabond Child"
                        ],
                        "half-elf": [
                            "Civilized",
                            "Failed Apprentice"
                        ],
                        "half-orc": [
                            "Brute",
                            "Vagabond Child"
                        ]
                    }
                }, {
                    "lower": "86",
                    "upper": "95",
                    "name": "Frontier",
                    "addTrait": {
                        "any": [
                            "Frontier-Forged"
                        ]
                    }
                }, {
                    "lower": "96",
                    "upper": "100",
                    "name": "Unusual Homeland",
                    "reroll": "unusual"
                }],
                "parents": [{
                    "lower": "01",
                    "upper": "50",
                    "name": "Both of your parents are alive"
                }, {
                    "lower": "51",
                    "upper": "70",
                    "name": "Only your father is alive"
                }, {
                    "lower": "71",
                    "upper": "90",
                    "name": "Only your mother is alive"
                }, {
                    "lower": "91",
                    "upper": "100",
                    "name": "Both of your parents are dead",
                    "action": "You gain access to the Orphaned social trait."
                }],
                "siblings": [{
                    "lower": "01",
                    "upper": "40",
                    "name": "1d2 siblings",
                    "action": "With two siblings, you gain access to the Kin Guardian combat trait."
                }, {
                    "lower": "41",
                    "upper": "70",
                    "name": "1d2 siblings and 1d2 half-siblings (roll d% to determine each one’s race; 01–50",
                    "action": "half-elf, 51–100: half-orc). You gain access to the Kin Guardian combat trait."
                }, {
                    "lower": "71",
                    "upper": "90",
                    "name": "2d4 siblings",
                    "action": "You gain access to the Kin Guardian combat trait."
                }, {
                    "lower": "91",
                    "upper": "100",
                    "name": "No siblings"
                }]
            },
            "unusual": {
                "homeland": [{
                    "lower": "01",
                    "upper": "10",
                    "name": "Subterranean",
                    "addTrait": {
                        "any": [
                            "Surface Stranger"
                        ]
                    }
                }, {
                    "lower": "11",
                    "upper": "25",
                    "name": "Mountains",
                    "addTrait": {
                        "any": [
                            "Highlander"
                        ]
                    }
                }, {
                    "lower": "26",
                    "upper": "40",
                    "name": "Plains",
                    "addTrait": {
                        "any": [
                            "Savanna Child"
                        ]
                    }
                }, {
                    "lower": "41",
                    "upper": "50",
                    "name": "Town or Village",
                    "addTrait": {
                        "any": [
                            "Militia Veteran"
                        ]
                    }
                }, {
                    "lower": "51",
                    "upper": "60",
                    "name": "City or Metropolis",
                    "addTrait": {
                        "any": [
                            "Civilized",
                            "Vagabond Child"
                        ]
                    }
                }, {
                    "lower": "61",
                    "upper": "70",
                    "name": "Forest",
                    "addTrait": {
                        "any": [
                            "Log Roller"
                        ]
                    }
                }, {
                    "lower": "71",
                    "upper": "80",
                    "name": "River, Swamp, or Wetlands",
                    "addTrait": {
                        "any": [
                            "River Rat"
                        ]
                    }
                }, {
                    "lower": "81",
                    "upper": "85",
                    "name": "Desert",
                    "addTrait": {
                        "any": [
                            "Desert Child"
                        ]
                    }
                }, {
                    "lower": "86",
                    "upper": "90",
                    "name": "Sea",
                    "addTrait": {
                        "any": [
                            "Sea-Souled"
                        ]
                    }
                }, {
                    "lower": "91",
                    "upper": "95",
                    "name": "Tundra",
                    "addTrait": {
                        "any": [
                            "Tundra Child"
                        ]
                    }
                }, {
                    "lower": "96",
                    "upper": "100",
                    "name": "Another Plane",
                    "addTrait": {
                        "any": [
                            "Scholar of the Great Beyond"
                        ]
                    }

                }]
            }
        }

        return {
            "numberOfHomelands": 0,
            "addHomeland": function(race) {
                var that = this;
                this.numberOfHomelands++;
                this["homeland" + that.numberOfHomelands] = {
                    "ind": that.numberOfHomelands,
                    "race": race,
                    "selectedRegion": "",
                    "selectRegionRandomly": function () {
                        var homelands = raceTables[this.race].homeland;
                        var roll = Math.floor((Math.random() * 100) + 1);

                        for (var homeland in homelands) {
                            var region = homelands[homeland];
                            if (roll >= region.lower && roll <= region.upper) {
                                this.selectRegion(region);
                            }
                        }
                    },

                    "selectRegion": function(region) {
                        // Remove following homelands from previous selection
                        if (that.numberOfHomelands > this.ind) {
                            for (var i = this.ind + 1; i <= that.numberOfHomelands; i++) {
                                delete that["homeland" + i];
                            }
                            that.numberOfHomelands = this.ind;
                        }

                        this.selectedRegion = region;

                        //Add new race homeland if required
                        if (angular.isDefined(region.reroll)) {
                            that.addHomeland(region.reroll);
                        }
                    }
                }
            },
            "getHomelands": function() {
                var that = this;
                result = [];
                for (var i = 1; i <= that.numberOfHomelands; i++) {
                    result[i - 1] = {
                        "race": that["homeland" + i].race,
                        matrix: []
                    };
                    var race = that["homeland" + i].race;
                    var homelands = raceTables[race].homeland;
                    for (var region in homelands) {
                        result[i - 1].matrix.push({
                            "region": homelands[region],
                            "display": homelands[region].lower + "-" + homelands[region].upper + " " + homelands[region].name,
                            "selected": that["homeland" + i].selectedRegion == homelands[region]
                        });
                    }
                };
                return result;
            },
            "getSuggestedHomelandTraits": function(race) {
                var that = this;
                var result = [];

                for (var i = 1; i <= that.numberOfHomelands; i++) {
                    var selectedRegion = that["homeland" + i].selectedRegion;

                    if (angular.isDefined(selectedRegion.addTrait) && angular.isDefined(selectedRegion.addTrait["any"])) {
                        result = result.concat(selectedRegion.addTrait["any"]);
                    }
                    //Add race specific traits
                    if (angular.isDefined(selectedRegion.addTrait) && jQuery.isArray(selectedRegion.addTrait[race])) {
                        result = result.concat(selectedRegion.addTrait[race]);
                    }
                }

                return result;
            },
            "resetHomelands": function(race) {
                var that = this;
                for (var i = 1; i <= that.numberOfHomelands; i++) {
                    delete that["homeland" + i];
                };
                that.numberOfHomelands = 0;
                that.addHomeland(race);
            },
            "getParents": function (race) {
                var result = [];
                var parentTable = raceTables[race].parents;
                for (var v in parentTable) {
                    result.push(parentTable[v]);
                }
                return result;
            },
            "getSiblings": function (race) {
                var result = [];
                var siblingsTable = raceTables[race].siblings;
                for (var v in siblingsTable) {
                    result.push(siblingsTable[v]);
                }
                return result;
            },
            "getSuggestedTraits": function (race) {
                var traits = [];
                traits = traits.concat(this.getSuggestedHomelandTraits(race));

                return traits;
            }
        };
    })
    .directive("background", function() {
        return {
            restrict: 'E',
            templateUrl: "partials/character-background.html",
            controller: function($scope, RollerFactory, BackgroundFactory) {
                $scope.raceList = ["dwarf", "elf", "gnome", "half-elf", "half-orc", "halfling", "human"];
                $scope.classList = ["alchemist", "barbarian", "bard", "cavelier", "cleric", "druid", "fighter", "gunslinger", "inquisitor", "magus", "monk", "oracle", "paladin", "ranger", "rogue", "sorcerer", "summoner", "witch", "wizard"];

                $scope.selectedRace = "dwarf";
                $scope.selectedClass = "alchemist";


                // $scope.raceTables = {
                //     "dwarf": {
                //         "homeland": [{
                //             "lower": "01",
                //             "upper": "40",
                //             "name": "Hills or Mountains",
                //             "addTrait": {
                //                 "any": [
                //                     "Goldsniffer",
                //                     "Highlander"
                //                 ]
                //             }
                //         }, {
                //             "lower": "41",
                //             "upper": "80",
                //             "name": "Underground",
                //             "addTrait": {
                //                 "any": [
                //                     "Surface Stranger",
                //                     "Tunnel Fighter"
                //                 ]
                //             }
                //         }, {
                //             "lower": "81",
                //             "upper": "87",
                //             "name": "Non-Dwarven Town or Village",
                //             "addTrait": {
                //                 "any": [
                //                     "Brewmaster",
                //                     "Militia Veteran"
                //                 ]
                //             }
                //         }, {
                //             "lower": "88",
                //             "upper": "95",
                //             "name": "Non-Dwarven City or Metropolis",
                //             "addTrait": {
                //                 "any": [
                //                     "Brewmaster",
                //                     "Vagabond Child"
                //                 ]
                //             }
                //         }, {
                //             "lower": "96",
                //             "upper": "100",
                //             "name": "Unusual Homeland",
                //             "reroll": "unusual"
                //         }],
                //         "parents": [{
                //             "lower": "01",
                //             "upper": "60",
                //             "name": "Both of your parents are alive"
                //         }, {
                //             "lower": "61",
                //             "upper": "73",
                //             "name": "Only your father is alive"
                //         }, {
                //             "lower": "74",
                //             "upper": "86",
                //             "name": "Only your mother is alive"
                //         }, {
                //             "lower": "87",
                //             "upper": "100",
                //             "name": "Both of your parents are dead",
                //             "action": "You gain access to the Orphaned social trait."
                //         }],
                //         "siblings": [{
                //             "lower": "01",
                //             "upper": "80",
                //             "name": "1d4 biological siblings",
                //             "action": "With two or more siblings, you gain access to the Kin Guardian combat trait."
                //         }, {
                //             "lower": "81",
                //             "upper": "90",
                //             "name": "1d4+1 biological siblings",
                //             "action": "You gain access to the Kin Guardian combat trait."
                //         }, {
                //             "lower": "91",
                //             "upper": "95",
                //             "name": "1d3–1 biological siblings and 1d3–1 adopted siblings",
                //             "action": "With two or more siblings, you gain access to the Kin Guardian combat trait. Roll on Table 1–23 to determine the race of any adopted siblings."
                //         }, {
                //             "lower": "96",
                //             "upper": "100",
                //             "name": "No siblings"
                //         }]
                //     },
                //     "elf": {
                //         "homeland": [{
                //             "lower": "01",
                //             "upper": "60",
                //             "name": "Forest",
                //             "addTrait": {
                //                 "any": [
                //                     "Log Roller"
                //                 ]
                //             }
                //         }, {
                //             "lower": "61",
                //             "upper": "80",
                //             "name": "Non-Elven City or Metropolis",
                //             "addTrait": {
                //                 "elf": [
                //                     "Civilized",
                //                     "Forlorn"
                //                 ],
                //                 "half-elf": [
                //                     "Civilized",
                //                     "Failed Apprentice"
                //                 ]
                //             }
                //         }, {
                //             "lower": "81",
                //             "upper": "95",
                //             "name": "Non-Elven Town or Village",
                //             "addTrait": {
                //                 "elf": [
                //                     "Forlorn"
                //                 ],
                //                 "half-elf": [
                //                     "Failed Apprentice"
                //                 ]
                //             }
                //         }, {
                //             "lower": "96",
                //             "upper": "100",
                //             "name": "Unusual Homeland",
                //             "reroll": "unusual",
                //             "addTrait": {
                //                 "elf": [
                //                     "Forlorn"
                //                 ],
                //                 "half-elf": [
                //                     "Elven Reflexes"
                //                 ]
                //             }
                //         }],
                //         "parents": [{
                //             "lower": "01",
                //             "upper": "79",
                //             "name": "Both of your parents are alive"
                //         }, {
                //             "lower": "80",
                //             "upper": "87",
                //             "name": "Only your father is alive"
                //         }, {
                //             "lower": "88",
                //             "upper": "95",
                //             "name": "Only your mother is alive"
                //         }, {
                //             "lower": "96",
                //             "upper": "100",
                //             "name": "Both of your parents are dead",
                //             "action": "You gain access to the Orphaned social trait."
                //         }],
                //         "siblings": [{
                //             "lower": "01",
                //             "upper": "80",
                //             "name": "1d2 biological siblings",
                //             "action": "If you roll 2 siblings, you gain access to the Kin Guardian combat trait. "
                //         }, {
                //             "lower": "81",
                //             "upper": "85",
                //             "name": "1d4+1 biological siblings",
                //             "action": "You gain access to the Kin Guardian combat trait."
                //         }, {
                //             "lower": "86",
                //             "upper": "90",
                //             "name": "1d4+1 biological siblings",
                //             "action": "1d3–1 of these siblings are half-elves, adopted, or a mix of the two (your choice). You gain access to the Kin Guardian combat trait. Roll on Table 1–23 to determine the race of any adopted siblings."
                //         }, {
                //             "lower": "91",
                //             "upper": "100",
                //             "name": "No siblings"
                //         }]
                //     },
                //     "gnome": {
                //         "homeland": [{
                //             "lower": "01",
                //             "upper": "30",
                //             "name": "Forest",
                //             "addTrait": {
                //                 "any": [
                //                     "Log Roller",
                //                     "Animal Friend"
                //                 ]
                //             }
                //         }, {
                //             "lower": "31",
                //             "upper": "65",
                //             "name": "Non-Gnome Town or Village",
                //             "addTrait": {
                //                 "any": [
                //                     "Animal Friend"
                //                 ]
                //             }
                //         }, {
                //             "lower": "66",
                //             "upper": "95",
                //             "name": "Non-Gnome City or Metropolis",
                //             "addTrait": {
                //                 "any": [
                //                     "Rapscallion"
                //                 ]
                //             }
                //         }, {
                //             "lower": "96",
                //             "upper": "100",
                //             "name": "Unusual Homeland",
                //             "reroll": "unusual"
                //         }],
                //         "parents": [{
                //             "lower": "01",
                //             "upper": "90",
                //             "name": "Both of your parents are alive"
                //         }, {
                //             "lower": "91",
                //             "upper": "93",
                //             "name": "Only your father is alive"
                //         }, {
                //             "lower": "94",
                //             "upper": "96",
                //             "name": "Only your mother is alive"
                //         }, {
                //             "lower": "97",
                //             "upper": "100",
                //             "name": "Both of your parents are dead",
                //             "action": "You gain access to the Orphaned social trait."
                //         }],
                //         "siblings": [{
                //             "lower": "01",
                //             "upper": "50",
                //             "name": "1d4 biological siblings",
                //             "action": "With two or more siblings, you gain access to the Kin Guardian combat trait."
                //         }, {
                //             "lower": "51",
                //             "upper": "60",
                //             "name": "1d4–1 biological siblings and one adopted sibling",
                //             "action": "With two or more siblings, you gain access to the Kin Guardian combat trait. Roll on Table 1–23 to determine the race of any adopted siblings."
                //         }, {
                //             "lower": "61",
                //             "upper": "100",
                //             "name": "No siblings"
                //         }]
                //     },
                //     "half-elf": {
                //         "homeland": [{
                //             "lower": "01",
                //             "upper": "25",
                //             "name": "Raised in an Elven Homeland",
                //             "reroll": "elf"
                //         }, {
                //             "lower": "26",
                //             "upper": "75",
                //             "name": "Raised in a Human Homeland",
                //             "reroll": "human"
                //         }, {
                //             "lower": "76",
                //             "upper": "95",
                //             "name": "Forest",
                //             "addTrait": {
                //                 "any": [
                //                     "Log Roller"
                //                 ]
                //             }
                //         }, {
                //             "lower": "96",
                //             "upper": "100",
                //             "name": "Unusual Homeland",
                //             "reroll": "unusual"
                //         }],
                //         "parents": [{
                //             "lower": "01",
                //             "upper": "20",
                //             "name": "Both of your parents are alive"
                //         }, {
                //             "lower": "21",
                //             "upper": "55",
                //             "name": "Only your father is alive"
                //         }, {
                //             "lower": "56",
                //             "upper": "90",
                //             "name": "Only your mother is alive"
                //         }, {
                //             "lower": "91",
                //             "upper": "100",
                //             "name": "Both of your parents are dead",
                //             "action": "You gain access to the Orphaned social trait."
                //         }],
                //         "siblings": [{
                //             "lower": "01",
                //             "upper": "20",
                //             "name": "1d2 half-siblings (either elf or human, your choice)",
                //             "action": "With two or more siblings, you gain access to the Kin Guardian combat trait. "
                //         }, {
                //             "lower": "21",
                //             "upper": "30",
                //             "name": "One half-elf sibling",
                //             "action": "You gain access to the Kin Bond magic trait. "
                //         }, {
                //             "lower": "31",
                //             "upper": "100",
                //             "name": "No siblings"
                //         }]
                //     },
                //     "half-orc": {
                //         "homeland": [{
                //             "lower": "01",
                //             "upper": "25",
                //             "name": "Subterranean",
                //             "addTrait": {
                //                 "any": [
                //                     "Scrapper",
                //                     "Surface Stranger"
                //                 ]
                //             }
                //         }, {
                //             "lower": "26",
                //             "upper": "60",
                //             "name": "Orc Settlement",
                //             "addTrait": {
                //                 "any": [
                //                     "Scrapper"
                //                 ]
                //             }
                //         }, {
                //             "lower": "61",
                //             "upper": "75",
                //             "name": "Raised in a Human Homeland",
                //             "reroll": "human"
                //         }, {
                //             "lower": "76",
                //             "upper": "90",
                //             "name": "No True Homeland",
                //             "addTrait": {
                //                 "any": [
                //                     "Outcast"
                //                 ]
                //             }
                //         }, {
                //             "lower": "91",
                //             "upper": "100",
                //             "name": "Unusual Homeland",
                //             "reroll": "unusual"
                //         }],
                //         "parents": [{
                //             "lower": "01",
                //             "upper": "10",
                //             "name": "Both of your parents are alive"
                //         }, {
                //             "lower": "11",
                //             "upper": "35",
                //             "name": "Only your father is alive"
                //         }, {
                //             "lower": "36",
                //             "upper": "60",
                //             "name": "Only your mother is alive"
                //         }, {
                //             "lower": "61",
                //             "upper": "100",
                //             "name": "Both of your parents are dead",
                //             "action": "You gain access to the Orphaned social trait."
                //         }],
                //         "siblings": [{
                //             "lower": "01",
                //             "upper": "60",
                //             "name": "1d6+1 orc siblings",
                //             "action": "You gain access to the Kin Guardian combat trait."
                //         }, {
                //             "lower": "61",
                //             "upper": "70",
                //             "name": "1d4 human siblings",
                //             "action": "With two or more siblings, you gain access to the Kin Guardian combat trait."
                //         }, {
                //             "lower": "71",
                //             "upper": "80",
                //             "name": "One half-orc sibling"
                //         }, {
                //             "lower": "81",
                //             "upper": "100",
                //             "name": "No siblings"
                //         }]
                //     },
                //     "halfling": {
                //         "homeland": [{
                //             "lower": "01",
                //             "upper": "50",
                //             "name": "Halfling Settlement",
                //             "addTrait": {
                //                 "any": [
                //                     "Civilized",
                //                     "Well-Informed"
                //                 ]
                //             }
                //         }, {
                //             "lower": "51",
                //             "upper": "80",
                //             "name": "Human Settlement",
                //             "addTrait": {
                //                 "any": [
                //                     "Child of the Streets",
                //                     "Well-Informed"
                //                 ]
                //             }
                //         }, {
                //             "lower": "81",
                //             "upper": "95",
                //             "name": "Traveling Band or Caravan",
                //             "addTrait": {
                //                 "any": [
                //                     "Friend in Every Town"
                //                 ]
                //             }
                //         }, {
                //             "lower": "96",
                //             "upper": "100",
                //             "name": "Unusual Homeland",
                //             "reroll": "unusual"
                //         }],
                //         "parents": [{
                //             "lower": "01",
                //             "upper": "70",
                //             "name": "Both parents living"
                //         }, {
                //             "lower": "71",
                //             "upper": "80",
                //             "name": "Only your father is alive"
                //         }, {
                //             "lower": "81",
                //             "upper": "90",
                //             "name": "Only your mother is alive"
                //         }, {
                //             "lower": "91",
                //             "upper": "100",
                //             "name": "Both of your parents are dead",
                //             "action": "You gain access to the Orphaned social trait."
                //         }],
                //         "siblings": [{
                //             "lower": "01",
                //             "upper": "30",
                //             "name": "1d2 siblings",
                //             "action": "With two siblings, you gain access to the Kin Guardian combat trait."
                //         }, {
                //             "lower": "31",
                //             "upper": "90",
                //             "name": "1d4+1 siblings",
                //             "action": "You gain access to the Kin Guardian combat trait."
                //         }, {
                //             "lower": "91",
                //             "upper": "100",
                //             "name": "No siblings"
                //         }]
                //     },
                //     "human": {
                //         "homeland": [{
                //             "lower": "01",
                //             "upper": "50",
                //             "name": "Town or Village",
                //             "addTrait": {
                //                 "any": [
                //                     "Militia Veteran"
                //                 ]
                //             }
                //         }, {
                //             "lower": "51",
                //             "upper": "85",
                //             "name": "City or Metropolis",
                //             "addTrait": {
                //                 "human": [
                //                     "Civilized",
                //                     "Vagabond Child"
                //                 ],
                //                 "half-elf": [
                //                     "Civilized",
                //                     "Failed Apprentice"
                //                 ],
                //                 "half-orc": [
                //                     "Brute",
                //                     "Vagabond Child"
                //                 ]
                //             }
                //         }, {
                //             "lower": "86",
                //             "upper": "95",
                //             "name": "Frontier",
                //             "addTrait": {
                //                 "any": [
                //                     "Frontier-Forged"
                //                 ]
                //             }
                //         }, {
                //             "lower": "96",
                //             "upper": "100",
                //             "name": "Unusual Homeland",
                //             "reroll": "unusual"
                //         }],
                //         "parents": [{
                //             "lower": "01",
                //             "upper": "50",
                //             "name": "Both of your parents are alive"
                //         }, {
                //             "lower": "51",
                //             "upper": "70",
                //             "name": "Only your father is alive"
                //         }, {
                //             "lower": "71",
                //             "upper": "90",
                //             "name": "Only your mother is alive"
                //         }, {
                //             "lower": "91",
                //             "upper": "100",
                //             "name": "Both of your parents are dead",
                //             "action": "You gain access to the Orphaned social trait."
                //         }],
                //         "siblings": [{
                //             "lower": "01",
                //             "upper": "40",
                //             "name": "1d2 siblings",
                //             "action": "With two siblings, you gain access to the Kin Guardian combat trait."
                //         }, {
                //             "lower": "41",
                //             "upper": "70",
                //             "name": "1d2 siblings and 1d2 half-siblings (roll d% to determine each one’s race; 01–50",
                //             "action": "half-elf, 51–100: half-orc). You gain access to the Kin Guardian combat trait."
                //         }, {
                //             "lower": "71",
                //             "upper": "90",
                //             "name": "2d4 siblings",
                //             "action": "You gain access to the Kin Guardian combat trait."
                //         }, {
                //             "lower": "91",
                //             "upper": "100",
                //             "name": "No siblings"
                //         }]
                //     },
                //     "unusual": {
                //         "homeland": [{
                //             "lower": "01",
                //             "upper": "10",
                //             "name": "Subterranean",
                //             "addTrait": {
                //                 "any": [
                //                     "Surface Stranger"
                //                 ]
                //             }
                //         }, {
                //             "lower": "11",
                //             "upper": "25",
                //             "name": "Mountains",
                //             "addTrait": {
                //                 "any": [
                //                     "Highlander"
                //                 ]
                //             }
                //         }, {
                //             "lower": "26",
                //             "upper": "40",
                //             "name": "Plains",
                //             "addTrait": {
                //                 "any": [
                //                     "Savanna Child"
                //                 ]
                //             }
                //         }, {
                //             "lower": "41",
                //             "upper": "50",
                //             "name": "Town or Village",
                //             "addTrait": {
                //                 "any": [
                //                     "Militia Veteran"
                //                 ]
                //             }
                //         }, {
                //             "lower": "51",
                //             "upper": "60",
                //             "name": "City or Metropolis",
                //             "addTrait": {
                //                 "any": [
                //                     "Civilized",
                //                     "Vagabond Child"
                //                 ]
                //             }
                //         }, {
                //             "lower": "61",
                //             "upper": "70",
                //             "name": "Forest",
                //             "addTrait": {
                //                 "any": [
                //                     "Log Roller"
                //                 ]
                //             }
                //         }, {
                //             "lower": "71",
                //             "upper": "80",
                //             "name": "River, Swamp, or Wetlands",
                //             "addTrait": {
                //                 "any": [
                //                     "River Rat"
                //                 ]
                //             }
                //         }, {
                //             "lower": "81",
                //             "upper": "85",
                //             "name": "Desert",
                //             "addTrait": {
                //                 "any": [
                //                     "Desert Child"
                //                 ]
                //             }
                //         }, {
                //             "lower": "86",
                //             "upper": "90",
                //             "name": "Sea",
                //             "addTrait": {
                //                 "any": [
                //                     "Sea-Souled"
                //                 ]
                //             }
                //         }, {
                //             "lower": "91",
                //             "upper": "95",
                //             "name": "Tundra",
                //             "addTrait": {
                //                 "any": [
                //                     "Tundra Child"
                //                 ]
                //             }
                //         }, {
                //             "lower": "96",
                //             "upper": "100",
                //             "name": "Another Plane",
                //             "addTrait": {
                //                 "any": [
                //                     "Scholar of the Great Beyond"
                //                 ]
                //             }
                //         }]
                //     }
                // }

                var testHomelands = BackgroundFactory;

                $scope.changeRace = function() {
                    if ($scope.selectedRace.length) {
                        $scope.selectedParents = "";
                        $scope.selectedSiblings = "";

                        BackgroundFactory.resetHomelands($scope.selectedRace);
                        $scope.suggestedTraits = BackgroundFactory.getSuggestedTraits($scope.selectedRace);
                        $scope.homelandMatrix = BackgroundFactory.getHomelands();
                        $scope.parentsMatrix = BackgroundFactory.getParents($scope.selectedRace);
                        $scope.siblingsMatrix = BackgroundFactory.getSiblings($scope.selectedRace);
                    }
                };

                $scope.selectRegion = function(ind, region) {
                    BackgroundFactory["homeland" + (ind + 1)].selectRegion(region);
                    updateTraits();
                    $scope.homelandMatrix = BackgroundFactory.getHomelands();
                }

                $scope.rerollHomelands = function () {
                    for(var i = 1; i<= BackgroundFactory.numberOfHomelands; i++) {
                        BackgroundFactory["homeland" + i].selectRegionRandomly();
                    }

                    //refresh Traits & Homeland Tables
                    updateTraits();
                    $scope.homelandMatrix = BackgroundFactory.getHomelands();
                }

                var updateTraits = function () {
                    $scope.suggestedTraits = BackgroundFactory.getSuggestedTraits($scope.selectedRace);
                }

                $scope.selectParents = function (parent) {
                    $scope.selectedParents = parent;
                    updateTraits();
                }
                $scope.selectSiblings = function (sibling) {
                    $scope.selectedSiblings = sibling;
                    updateTraits();
                }

                $scope.adoptedSiblingRaceList = [
                    {
                    "index": "01",
                    "name": "Aasimar"
                }, {
                    "index": "02",
                    "name": "Catfolk"
                }, {
                    "index": "04",
                    "name": "Changeling"
                }, {
                    "index": "05",
                    "name": "Dhampir"
                }, {
                    "index": "06",
                    "name": "Duergar"
                }, {
                    "index": "16",
                    "name": "Dwarf"
                }, {
                    "index": "26",
                    "name": "Elf"
                }, {
                    "index": "27",
                    "name": "Fetchling"
                }, {
                    "index": "28",
                    "name": "Gillman"
                }, {
                    "index": "38",
                    "name": "Gnome"
                }, {
                    "index": "39",
                    "name": "Goblin"
                }, {
                    "index": "40",
                    "name": "Grippli"
                }, {
                    "index": "50",
                    "name": "Half-Elf"
                }, {
                    "index": "60",
                    "name": "Half-Orc"
                }, {
                    "index": "70",
                    "name": "Halfling"
                }, {
                    "index": "71",
                    "name": "Hobgoblin"
                }, {
                    "index": "81",
                    "name": "Human"
                }, {
                    "index": "82",
                    "name": "Ifrit"
                }, {
                    "index": "83",
                    "name": "Kitsune"
                }, {
                    "index": "84",
                    "name": "Kobold"
                }, {
                    "index": "85",
                    "name": "Merfolk"
                }, {
                    "index": "86",
                    "name": "Nagaji"
                }, {
                    "index": "87",
                    "name": "Orc"
                }, {
                    "index": "88",
                    "name": "Oread"
                }, {
                    "index": "89",
                    "name": "Ratfolk"
                }, {
                    "index": "90",
                    "name": "Samsaran"
                }, {
                    "index": "91",
                    "name": "Strix"
                }, {
                    "index": "92",
                    "name": "Suli"
                }, {
                    "index": "93",
                    "name": "Svirfneblin"
                }, {
                    "index": "94",
                    "name": "Sylph"
                }, {
                    "index": "95",
                    "name": "Tengu"
                }, {
                    "index": "96",
                    "name": "Tiefling"
                }, {
                    "index": "97",
                    "name": "Undine"
                }, {
                    "index": "98",
                    "name": "Vanara"
                }, {
                    "index": "99",
                    "name": "Vishkanya"
                }, {
                    "index": "100",
                    "name": "Wayang"
                }];

                $scope.step = 1;
            }
        };
    });
