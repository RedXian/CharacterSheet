angular.module("characterSheet.background", [])
    .factory("BackgroundFactory", function(RollerFactory) {
        var raceTables = {
            "dwarf": {
                "homeland": [{
                    "lower": "01",
                    "upper": "40",
                    "name": "Hills or Mountains",
                    "addTrait": {
                        "condition": "race",
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
                        "condition": "race",
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
                        "condition": "race",
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
                        "condition": "race",
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
                    "addTrait": ["Orphaned"]
                }],
                "siblings": [{
                    "lower": "01",
                    "upper": "80",
                    "name": "1d4 biological siblings",
                    "action": { "biological": "1d4" },
                    "addTrait": { "condition": "numSiblings", "2+": ["Kin Guardian"] }
                }, {
                    "lower": "81",
                    "upper": "90",
                    "name": "1d4+1 biological siblings",
                    "action": { "biological": "1d4+1" },
                    "addTrait": { "condition": "numSiblings", "2+": ["Kin Guardian"] }
                }, {
                    "lower": "91",
                    "upper": "95",
                    "name": "1d3–1 biological siblings and 1d3–1 adopted siblings",
                    "action": { "biological": "1d3-1", "adopted": "1d3-1" },
                    "addTrait": { "condition": "numSiblings", "2+": ["Kin Guardian"] },
                    "roll": "adoptedSiblingsTable"
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
                        "condition": "race",
                        "any": ["Log Roller"]
                    }
                }, {
                    "lower": "61",
                    "upper": "80",
                    "name": "Non-Elven City or Metropolis",
                    "addTrait": {
                        "condition": "race",
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
                        "condition": "race",
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
                        "condition": "race",
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
                    "addTrait": ["Orphaned"]
                }],
                "siblings": [{
                    "lower": "01",
                    "upper": "80",
                    "name": "1d2 biological siblings",
                    "action": { "biological": "1d2"},
                    "addTrait": { "condition": "numSiblings", "2+": ["Kin Guardian"] }
                }, {
                    "lower": "81",
                    "upper": "85",
                    "name": "1d4+1 biological siblings",
                    "action": { "biological": "1d4+1" },
                    "addTrait": { "condition": "numSiblings", "2+": ["Kin Guardian"] }
                }, {
                    "lower": "86",
                    "upper": "90",
                    "name": "1d4+1 biological siblings, 1d3–1 of these siblings are half-elves, adopted, or a mix of the two (your choice)",
                    "action": { "biological": "1d4+1", "mixed": "-1d3-1" },
                    "addTrait": { "condition": "numSiblings", "2+": ["Kin Guardian"] }
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
                        "condition": "race",
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
                        "condition": "race",
                        "any": [
                            "Animal Friend"
                        ]
                    }
                }, {
                    "lower": "66",
                    "upper": "95",
                    "name": "Non-Gnome City or Metropolis",
                    "addTrait": {
                        "condition": "race",
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
                    "addTrait": ["Orphaned"]
                }],
                "siblings": [{
                    "lower": "01",
                    "upper": "50",
                    "name": "1d4 biological siblings",
                    "action": { "biological": "1d4"},
                    "addTrait": { "condition": "numSiblings", "2+": ["Kin Guardian"] }
                }, {
                    "lower": "51",
                    "upper": "60",
                    "name": "1d4–1 biological siblings and one adopted sibling",
                    "action": { "biological": "1d4+1", "adopted": "1" },
                    "addTrait": { "condition": "numSiblings", "2+": ["Kin Guardian"] }
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
                        "condition": "race",
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
                    "addTrait": ["Orphaned"]
                }],
                "siblings": [{
                    "lower": "01",
                    "upper": "20",
                    "name": "1d2 half-siblings (either elf or human, your choice)",
                    "action": { "half": "1d2"},
                    "addTrait": { "condition": "numSiblings", "2+": ["Kin Guardian"] }
                }, {
                    "lower": "21",
                    "upper": "30",
                    "name": "One half-elf sibling",
                    "action": { "half-elf": "1"},
                    "addTrait": { "condition": "numSiblings", "1+": ["Kin Bond"] }
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
                        "condition": "race",
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
                        "condition": "race",
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
                        "condition": "race",
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
                    "addTrait": ["Orphaned"]
                }],
                "siblings": [{
                    "lower": "01",
                    "upper": "60",
                    "name": "1d6+1 orc siblings",
                    "action": { "orc": "1d6+1"},
                    "addTrait": { "condition": "numSiblings", "2+": ["Kin Guardian"] }
                }, {
                    "lower": "61",
                    "upper": "70",
                    "name": "1d4 human siblings",
                    "action": { "human": "1d4"},
                    "addTrait": { "condition": "numSiblings", "2+": ["Kin Guardian"] }
                }, {
                    "lower": "71",
                    "upper": "80",
                    "name": "One half-orc sibling",
                    "action": { "half-orc": "1" }
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
                        "condition": "race",
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
                        "condition": "race",
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
                        "condition": "race",
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
                    "addTrait": ["Orphaned"]
                }],
                "siblings": [{
                    "lower": "01",
                    "upper": "30",
                    "name": "1d2 siblings",
                    "action": { "biological": "1d2" },
                    "addTrait": { "condition": "numSiblings", "2+": ["Kin Guardian"] }
                }, {
                    "lower": "31",
                    "upper": "90",
                    "name": "1d4+1 siblings",
                    "action": { "biological": "1d4+1" },
                    "addTrait": { "condition": "numSiblings", "2+": ["Kin Guardian"] }
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
                        "condition": "race",
                        "any": [
                            "Militia Veteran"
                        ]
                    }
                }, {
                    "lower": "51",
                    "upper": "85",
                    "name": "City or Metropolis",
                    "addTrait": {
                        "condition": "race",
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
                        "condition": "race",
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
                    "addTrait": ["Orphaned"]
                }],
                "siblings": [{
                    "lower": "01",
                    "upper": "40",
                    "name": "1d2 siblings",
                    "action": { "biological": "1d2" },
                    "addTrait": { "condition": "numSiblings", "2+": ["Kin Guardian"] }
                }, {
                    "lower": "41",
                    "upper": "70",
                    "name": "1d2 siblings and 1d2 half-siblings",
                    "action": { "biological": "1d2", "half": "1d2" },
                    "addTrait": { "condition": "numSiblings", "2+": ["Kin Guardian"] }
                }, {
                    "lower": "71",
                    "upper": "90",
                    "name": "2d4 siblings",
                    "action": { "biological": "2d4" },
                    "addTrait": { "condition": "numSiblings", "2+": ["Kin Guardian"] }
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
                        "condition": "race",
                        "any": [
                            "Surface Stranger"
                        ]
                    }
                }, {
                    "lower": "11",
                    "upper": "25",
                    "name": "Mountains",
                    "addTrait": {
                        "condition": "race",
                        "any": [
                            "Highlander"
                        ]
                    }
                }, {
                    "lower": "26",
                    "upper": "40",
                    "name": "Plains",
                    "addTrait": {
                        "condition": "race",
                        "any": [
                            "Savanna Child"
                        ]
                    }
                }, {
                    "lower": "41",
                    "upper": "50",
                    "name": "Town or Village",
                    "addTrait": {
                        "condition": "race",
                        "any": [
                            "Militia Veteran"
                        ]
                    }
                }, {
                    "lower": "51",
                    "upper": "60",
                    "name": "City or Metropolis",
                    "addTrait": {
                        "condition": "race",
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
                        "condition": "race",
                        "any": [
                            "Log Roller"
                        ]
                    }
                }, {
                    "lower": "71",
                    "upper": "80",
                    "name": "River, Swamp, or Wetlands",
                    "addTrait": {
                        "condition": "race",
                        "any": [
                            "River Rat"
                        ]
                    }
                }, {
                    "lower": "81",
                    "upper": "85",
                    "name": "Desert",
                    "addTrait": {
                        "condition": "race",
                        "any": [
                            "Desert Child"
                        ]
                    }
                }, {
                    "lower": "86",
                    "upper": "90",
                    "name": "Sea",
                    "addTrait": {
                        "condition": "race",
                        "any": [
                            "Sea-Souled"
                        ]
                    }
                }, {
                    "lower": "91",
                    "upper": "95",
                    "name": "Tundra",
                    "addTrait": {
                        "condition": "race",
                        "any": [
                            "Tundra Child"
                        ]
                    }
                }, {
                    "lower": "96",
                    "upper": "100",
                    "name": "Another Plane",
                    "addTrait": {
                        "condition": "race",
                        "any": [
                            "Scholar of the Great Beyond"
                        ]
                    }

                }]
            }
        }
        var adoptedSiblingTable = [
            { "index": "01", "name": "aasimar" },
            { "index": "02", "name": "catfolk" },
            { "index": "04", "name": "changeling" },
            { "index": "05", "name": "dhampir" },
            { "index": "06", "name": "duergar" },
            { "index": "16", "name": "dwarf" },
            { "index": "26", "name": "elf" },
            { "index": "27", "name": "fetchling" },
            { "index": "28", "name": "gillman" },
            { "index": "38", "name": "gnome" },
            { "index": "39", "name": "goblin" },
            { "index": "40", "name": "grippli" },
            { "index": "50", "name": "half-elf" },
            { "index": "60", "name": "half-orc" },
            { "index": "70", "name": "halfling" },
            { "index": "71", "name": "hobgoblin" },
            { "index": "81", "name": "human" },
            { "index": "82", "name": "ifrit" },
            { "index": "83", "name": "kitsune" },
            { "index": "84", "name": "kobold" },
            { "index": "85", "name": "merfolk" },
            { "index": "86", "name": "nagaji" },
            { "index": "87", "name": "orc" },
            { "index": "88", "name": "oread" },
            { "index": "89", "name": "ratfolk" },
            { "index": "90", "name": "samsaran" },
            { "index": "91", "name": "strix" },
            { "index": "92", "name": "suli" },
            { "index": "93", "name": "svirfneblin" },
            { "index": "94", "name": "sylph" },
            { "index": "95", "name": "tengu" },
            { "index": "96", "name": "tiefling" },
            { "index": "97", "name": "undine" },
            { "index": "98", "name": "vanara" },
            { "index": "99", "name": "vishkanya" },
            { "index": "100", "name": "wayang" }
        ];

        return {
            "numberOfHomelands": 0,
            "addHomeland": function(race) {
                var that = this;
                this.numberOfHomelands++;
                this["homeland" + that.numberOfHomelands] = {
                    "ind": that.numberOfHomelands,
                    "race": race,
                    "selectedRegion": "",
                    "selectRegionRandomly": function() {
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
            "addParents": function(race) {
                this.parents = {
                    "parentsTable": raceTables[race].parents,
                    "selected": "",
                    "selectRandomly": function() {
                        var roll = Math.floor((Math.random() * 100) + 1);
                        this.select(roll);
                    },
                    "select": function(roll) {
                        for (var parentOption in this.parentsTable) {
                            var parent = this.parentsTable[parentOption];
                            if (roll >= parent.lower && roll <= parent.upper) {
                                break;
                            }
                        }
                        this.selected = parent;
                    },
                    "getParents": function() {
                        var result = [];
                        for (var v in this.parentsTable) {
                            result.push(this.parentsTable[v]);
                        }
                        return result;
                    },
                    "reset": function() {
                        this.selected = "";
                    },
                    "getSuggestedTraits": function() {
                        var result = [];
                        result = this.selected.addTrait || [];
                        return result;
                    }
                }
            },

            "addSiblings": function(race) {
                this.siblings = {
                    "matrix": raceTables[race].siblings,
                    "numberOfSiblings": 0,
                    "selected": "",
                    "selectRandomly": function() {
                        var roll = Math.floor((Math.random() * 100) + 1);
                        this.select(roll);
                    },
                    "select": function(roll) {
                        var option;
                        for (var k in this.matrix) {
                            option = this.matrix[k];
                            if (roll >= option.lower && roll <= option.upper) {
                                break;
                            }
                        }
                        this.selected = option;
                        this.numberOfSiblings = 0;
                        console.log(option.action || "No Action");

                        if (angular.isDefined(option.action)) {
                            // "action": { "biological": "1d3-1", "adopted": "1d3-1" },
                            // "addTrait": { "condition": "numSiblings", "2+": ["Kin Guardian"] },
                            // "roll": "adoptedSiblingsTable"

                            var raceArray = [];
                            var half = Math.floor((Math.random() * 100) + 1) < 51 ? "elf" : "orc"; // if Half-sibling, determines which half.
                            for(var key in option.action) {
                                var raceType = option.action[key];
                                // Roll notations that begin with a '-' means that it is a subset of the current number of siblings.
                                if(raceType.charAt(0)=='-') { raceType=raceType.slice(1);

                                    var rollArray = RollerFactory.getResult(raceType);
                                    console.log(raceArray);
                                    var roll = rollArray[rollArray.length-1].value;
                                    console.log(raceArray.length + " - " + rollArray[rollArray.length-1].value + " = " + (raceArray.length - rollArray[rollArray.length-1].value) );
                                    console.log(-roll);
                                    //raceArray = raceArray.slice(-roll);
                                    raceArray.length = (raceArray.length - rollArray[rollArray.length-1].value);
                                    console.log(raceArray);
                                } else {
                                    var rollArray = RollerFactory.getResult(raceType);
                                    var roll = rollArray[rollArray.length-1].value;
                                }

                                console.log (roll + " " + key + " siblings")
                                for(var i = 1; i <= roll; i++) {
                                    var siblingRace = "";
                                    if (key == "mixed") {
                                        key = Math.floor((Math.random() * 100) + 1) < 51 ? "adopted" : "half";
                                    }
                                    switch(key) {
                                        case "biological":
                                            siblingRace = race;
                                        break;
                                        case "adopted":
                                            console.log("Adopted: " + raceArray.length);
                                            var randomIndex = Math.floor((Math.random() * 100) + 1);
                                            for (var j = 0; j < adoptedSiblingTable.length; j++) {
                                                if (adoptedSiblingTable[j].index > randomIndex) {
                                                    siblingRace += "Adopted " + adoptedSiblingTable[j-1].name;
                                                    break;
                                                }
                                            }

                                        break;
                                        case "half":
                                            if(race == "human") {
                                                siblingRace = "half-" + half;
                                            } else if (race == "half-elf") {
                                                siblingRace = (half == "orc") ? "human" : half;
                                            } else if (race == "half-orc") {
                                                siblingRace = (half == "elf") ? "human" : half;
                                            } else if (race == "elf") {
                                                siblingRace = "half-elf"
                                            }
                                        break;
                                        case "default":
                                            siblingRace = key;
                                    }
                                    this.addSibling(siblingRace);
                                     raceArray.push(siblingRace);
                                }
                                this.numberOfSiblings = raceArray.length;

                            }
                            console.log(raceArray);
                        }
                    },
                    "addSibling": function (type) {

                    },
                    "getMatrix": function() {
                        var result = [];
                        for (var v in this.matrix) {
                            result.push(this.matrix[v]);
                        }
                        return result;
                    },
                    "reset": function() {
                        this.numberOfSiblings = 0;
                        this.selected = "";
                    },
                    "getSuggestedTraits": function() {
                        var result = [];
                        result = this.selected.addTrait || [];
                        return result;
                    }
                }
            },

            "getSuggestedTraits": function(race) {
                var traits = [];
                traits = traits.concat(this.getSuggestedHomelandTraits(race));
                if (this.parents.getSuggestedTraits().length) {
                    traits = traits.concat(this.parents.getSuggestedTraits());
                }
                if (this.siblings.getSuggestedTraits().length) {
                    traits = traits.concat(this.siblings.getSuggestedTraits());
                }
                return traits;
            }
        };
    })
    .directive("background", function() {
        return {
            restrict: 'E',
            templateUrl: "partials/character-background.html",
            controller: function($scope, BackgroundFactory) {
                $scope.raceList = ["dwarf", "elf", "gnome", "half-elf", "half-orc", "halfling", "human"];
                $scope.classList = ["alchemist", "barbarian", "bard", "cavelier", "cleric", "druid", "fighter", "gunslinger", "inquisitor", "magus", "monk", "oracle", "paladin", "ranger", "rogue", "sorcerer", "summoner", "witch", "wizard"];

                $scope.selectedRace = "dwarf";
                $scope.selectedClass = "alchemist";

                $scope.changeRace = function() {
                    if ($scope.selectedRace.length) {
                        BackgroundFactory.addParents($scope.selectedRace);
                        BackgroundFactory.addSiblings($scope.selectedRace);

                        BackgroundFactory.resetHomelands($scope.selectedRace);
                        updateTraits();
                        $scope.homelandMatrix = BackgroundFactory.getHomelands();
                        $scope.parentsMatrix = BackgroundFactory.parents;
                        $scope.siblingsMatrix = BackgroundFactory.siblings;
                    }
                };

                $scope.selectRegion = function(ind, region) {
                    BackgroundFactory["homeland" + (ind + 1)].selectRegion(region);
                    updateTraits();
                    $scope.homelandMatrix = BackgroundFactory.getHomelands();
                }

                $scope.rerollHomelands = function() {
                    for (var i = 1; i <= BackgroundFactory.numberOfHomelands; i++) {
                        BackgroundFactory["homeland" + i].selectRegionRandomly();
                    }

                    //refresh Traits & Homeland Tables
                    updateTraits();
                    $scope.homelandMatrix = BackgroundFactory.getHomelands();
                }

                var updateTraits = function() {
                    $scope.suggestedTraits = BackgroundFactory.getSuggestedTraits($scope.selectedRace);
                }

                $scope.selectParents = function(roll) {
                    BackgroundFactory.parents.select(roll);
                    updateTraits();
                }
                $scope.selectSiblings = function(roll) {
                    BackgroundFactory.siblings.select(roll);
                    updateTraits();
                }


                $scope.step = 1;
            }
        };
    });
