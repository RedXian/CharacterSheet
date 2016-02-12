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
                    "addTrait": { "condition": "numberOfSiblings", "requirement": ">1", "trait": ["Kin Guardian"] }
                }, {
                    "lower": "81",
                    "upper": "90",
                    "name": "1d4+1 biological siblings",
                    "action": { "biological": "1d4+1" },
                    "addTrait": { "condition": "numberOfSiblings", "requirement": ">1", "trait": ["Kin Guardian"] }
                }, {
                    "lower": "91",
                    "upper": "95",
                    "name": "1d3–1 biological siblings and 1d3–1 adopted siblings",
                    "action": { "biological": "1d3-1", "adopted": "1d3-1" },
                    "addTrait": { "condition": "numberOfSiblings", "requirement": ">1", "trait": ["Kin Guardian"] },
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
                    "addTrait": { "condition": "numberOfSiblings", "requirement": ">1", "trait": ["Kin Guardian"] }
                }, {
                    "lower": "81",
                    "upper": "85",
                    "name": "1d4+1 biological siblings",
                    "action": { "biological": "1d4+1" },
                    "addTrait": { "condition": "numberOfSiblings", "requirement": ">1", "trait": ["Kin Guardian"] }
                }, {
                    "lower": "86",
                    "upper": "90",
                    "name": "1d4+1 biological siblings, 1d3–1 of these siblings are half-elves, adopted, or a mix of the two (your choice)",
                    "action": { "biological": "1d4+1", "mixed": "-1d3-1" },
                    "addTrait": { "condition": "numberOfSiblings", "requirement": ">1", "trait": ["Kin Guardian"] }
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
                    "addTrait": { "condition": "numberOfSiblings", "requirement": ">1", "trait": ["Kin Guardian"] }
                }, {
                    "lower": "51",
                    "upper": "60",
                    "name": "1d4–1 biological siblings and one adopted sibling",
                    "action": { "biological": "1d4+1", "adopted": "1" },
                    "addTrait": { "condition": "numberOfSiblings", "requirement": ">1", "trait": ["Kin Guardian"] }
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
                    "addTrait": { "condition": "numberOfSiblings", "requirement": ">1", "trait": ["Kin Guardian"] }
                }, {
                    "lower": "21",
                    "upper": "30",
                    "name": "One half-elf sibling",
                    "action": { "half-elf": "1"},
                    "addTrait": { "condition": "numberOfSiblings", "1+": ["Kin Bond"] }
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
                    "addTrait": { "condition": "numberOfSiblings", "requirement": ">1", "trait": ["Kin Guardian"] }
                }, {
                    "lower": "61",
                    "upper": "70",
                    "name": "1d4 human siblings",
                    "action": { "human": "1d4"},
                    "addTrait": { "condition": "numberOfSiblings", "requirement": ">1", "trait": ["Kin Guardian"] }
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
                    "addTrait": { "condition": "numberOfSiblings", "requirement": ">1", "trait": ["Kin Guardian"] }
                }, {
                    "lower": "31",
                    "upper": "90",
                    "name": "1d4+1 siblings",
                    "action": { "biological": "1d4+1" },
                    "addTrait": { "condition": "numberOfSiblings", "requirement": ">1", "trait": ["Kin Guardian"] }
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
                    "addTrait": { "condition": "numberOfSiblings", "requirement": ">1", "trait": ["Kin Guardian"] }
                }, {
                    "lower": "41",
                    "upper": "70",
                    "name": "1d2 siblings and 1d2 half-siblings",
                    "action": { "biological": "1d2", "half": "1d2" },
                    "addTrait": { "condition": "numberOfSiblings", "requirement": ">1", "trait": ["Kin Guardian"] }
                }, {
                    "lower": "71",
                    "upper": "90",
                    "name": "2d4 siblings",
                    "action": { "biological": "2d4" },
                    "addTrait": { "condition": "numberOfSiblings", "requirement": ">1", "trait": ["Kin Guardian"] }
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
        var adoptedSibling = [
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
        var birthCircumstance = [
            {"lower": "01", "upper": "40", "name": "Lower-Class Birth", "action": "You were born among peasants or slum denizens. You grew up working the land around a village or manor, practicing a rudimentary trade, or begging in a settlement. You gain access to the Poverty-Stricken social trait. Roll 2d20 on Table 1–26: Parents’ Profession to determine your parents’ occupation, instead of rolling d%."},
            {"lower": "41", "upper": "65", "name": "Middle-Class Birth", "action": "You were born to the middle class, which includes merchants, artisans, and tradespeople. You likely grew up in a good-sized settlement, and one of your parents is likely associated with a guild or other trade organization. As a free person, you don’t experience the bondage of serfdom or peasantry, but you also lack the privilege of the nobility. You gain access to the Artisan social trait and the Merchant social trait."},
            {"lower": "66", "upper": "70", "name": "Noble Birth", "action": "You were born to privilege among the nobility. Unless one of your parents is the regent, your family serves a higher-ranked noble but lesser nobles serve your family in turn. You gain access to the Influence social trait and the Rich Parents social trait. Roll on Table 1–28: Nobility to determine your family’s noble rank."},
            {"lower": "71", "upper": "72", "name": "Adopted Outside Your Race", "action": "You were not raised by your birth family and grew up in a family of a different race than your own. Roll on Table 1–27: Adopted Outside Your Race."},
            {"lower": "73", "upper": "77", "name": "Adopted", "action": "You were not raised by your birth family, but taken in by another family within your race or culture. Roll twice instead of once on Table 1–26: Parents’ Profession—once for your birth family and a second time for your adoptive family. You gain access to traits granted by both sets of parents."},
            {"lower": "78", "upper": "81", "name": "Bastard Born", "action": "Your parents had a tryst that resulted in your birth out of wedlock. You know one of your parents, but the other remains unknown or a distant presence at best. You gain access to the Bastard social trait and the Shamed story feat. 82 Blessed Birth: When you were born, you were blessed by a being of great power such as an angel, azata, or genie. This blessing has protected you from certain peril or marked you as special to some deity. You gain access to the Blessed faith trait and the Birthmark faith trait."},
            {"lower": "83", "upper": "84", "name": "Born of Violence", "action": "Your birth was caused by violent, unwilling means. You have one parent, and the other likely remains unknown. You gain access to the Axe to Grind combat trait and the Bastard social trait. 85 Born out of Time: You were born in a different era, either the distant past or the far future. Some event has displaced you from your time, and the ways and customs of the present seem strange and alien to you. You gain access to the Scholar of the Great Beyond faith trait."},
            {"lower": "86", "upper": "87", "name": "Born into Bondage", "action": "You were born into slavery or servitude. Your parents are likely slaves or servants, or you were sold into slavery as an infant. You gain access to the Life of Toil social trait. 88 Cursed Birth: When you were born, a powerful fiendish entity tainted your blood in some way and cursed you as an agent of dark prophecy. You gain access to the Fiend Blood bloodline race trait and the Accursed story feat."},
            {"lower": "89", "upper": "90", "name": "Dishonored Family", "action": "You were born into a family that once was honored among your society but has since fallen into disgrace. Now your family name is loathed and maligned by those who know it, putting you on your guard. You gain access to the Reactionary combat trait, the Lost Legacy story feat, and the Redemption story feat."},
            {"lower": "91", "upper": "92", "name": "Heir to a Legacy", "action": "You are the heir to a family with an old name and a distinguished past. Your  family might be wealthy or middle class, but your name itself is worth twice your fortunes. You gain access to the Influence social trait and the Rich Parents social trait."},
            {"lower": "93", "upper": "94", "name": "Left to Die", "action": "When you were born you were left to die, but by some twist of circumstance you survived. You gain access to the Courageous combat trait, the Savage social trait, and the Arisen story feat. "},
            {"lower": "95", "upper": "95", "name": "Marked by the Gods", "action": "A deity has marked you. That mark can be on your body or your soul. You gain access to the Birthmark faith trait, the Sacred Touch faith trait, and the Prophet story feat. "},
            {"lower": "96", "upper": "96", "name": "Energy Infused", "action": "During your birth you were exposed to potent source of divine energy. You gain access to the Sacred Conduit faith trait and the Sacred Touch faith trait. "},
            {"lower": "97", "upper": "97", "name": "Progeny of Power", "action": "You were born during a particularly powerful conjunction or in some other time of power. You gain access to the Magical Talent magic trait, the Charming social trait, and the Sacred Touch faith trait. "},
            {"lower": "98", "upper": "98", "name": "Prophesied", "action": "Your birth was foretold, as recently as during the last generation to as far back as thousands of years ago. You gain access to the Prophesied faith trait. "},
            {"lower": "99", "upper": "99", "name": "Reincarnated", "action": "You have been reborn in many cycles, and may be reborn in many more until you accomplish the ultimate task for which you are destined. You gain access to the Reincarnated faith trait, the Arisen story feat, and the Forgotten Past story feat. "},
            {"lower": "100", "upper": "100", "name": "The Omen", "action": "The sages, priests, or wizards of your society decreed your birth an omen of a coming age or event—perhaps you are an omen of promise, perhaps one of dark times ahead. You gain access to the Omen faith trait."}
        ];
        var adoptedOutsideYourRace = [
            {"lower": "01", "upper": "05", "name": "Adopted by Dragons", "action": "For its own purposes, a dragon raised you as its own. You have learned the language and history, wisdom, power, and might of dragonkind. You gain access to the Blood of Dragons bloodline race trait and the Magical Knack magic trait."},
            {"lower": "06", "upper": "10", "name": "Adopted by the Fey", "action": "Your adoptive parents were fey creatures such as korreds, pixies, or a dryad. You gain access to the Charming social trait and the Magical Knack magic trait."},
            {"lower": "11", "upper": "13", "name": "Raised Among the Dead", "action": "Your adoptive parent is a nonliving creature, such as a spectre, ghost, lich, or vampire. You were likely raised in empty ruined halls, among tombs and crypts, by a creature that feeds on life. What its purpose was for raising you, none can say. You gain access to the Deathtouched bloodline race trait, the Magical Knack magic trait, and the Glimpse Beyond story feat."},
            {"lower": "14", "upper": "19", "name": "Raised by Angels", "action": "Angels attended your birth and took you to live with them in the heavens. These cosmic beings expanded your view to encompass not just the world but the larger universe. You know that wherever you go, your angelic parents watch over you. You gain access to the Blessed faith trait."},
            {"lower": "20", "upper": "25", "name": "Raised by Beasts", "action": "When you were separated from your biological parents, you were found and raised by wild beasts. Your ways are the ways of the wild, and along with your advanced survival instincts you’ve adopted the natural habits of a specific beast. You gain access to the Resilient combat trait and the Feral Heart story feat."},
            {"lower": "26", "upper": "70", "name": "Raised by Civilized Humanoids", "action": "You were raised by a community of civilized humanoids of a race different from your own (chosen by your GM). Your attitudes, beliefs, and values reflect that race, although characteristics of your true nature frequently emerge. You gain access to a race trait from the race that raised you."},
            {"lower": "71", "upper": "95", "name": "Raised by Savage Humanoids", "action": "You were raised by savage humanoids such as orcs, kobolds, gnolls, troglodytes, or lizardfolk. As a result, your values, customs, and traditions are those of your adoptive parents, though characteristics of your true nature frequently emerge. You gain access to the Savage social trait."},
            {"lower": "96", "upper": "100", "name": "Fiend Raised", "action": "You were separated from your natural parents and raised by a fiend who taught you the cruelty and malice of the gods and worked to fashion you into its own mortal instrument to corrupt innocent souls. You gain access to the Fiend Blood bloodline race trait and the Damned story feat."}
        ];
        var noblility = [
            {"lower": "01", "upper": "60", "name": "Gentry", "action": "You are the child of a minor lord, lady, or noble with an income, hereditary land such as a manor, and titles. You likely grew up in a manor and your parents were paid tribute by peasants. Your parents serve a higher baron, count, or duke."},
            {"lower": "61", "upper": "78", "name": "Knight", "action": "You are the child of a knight, a noble with estates, titles, and lands who serves a lord. Your family has sworn an oath of fealty to a liege—such as a baron, count, or duke—and commits to military service in his or her name. As the child of a knight, you may serve as a squire to another knight while pursuing your own path to knighthood."},
            {"lower": "79", "upper": "85", "name": "Baron", "action": "You are the child of a baron or baroness, a noble responsible for a land encompassing several smaller manors that pay tribute. Your parents receive orders directly from the monarch, and you’re expected to attend the royal court. You are entitled to hereditary estates, titles, and land."},
            {"lower": "86", "upper": "91", "name": "Count", "action": "You are the noble child of a count or countess. Your family members receive hereditary titles, land, and estates, and are among the most wealthy nobles in your domain. Knights and minor lords pay tribute to your family, and your parents attend directly to the monarch. You’re expected to attend the"},
            {"lower": "92", "upper": "96", "name": "Duke", "action": "You royal court. are the child of a duke or duchess, the most powerful noble in the realm apart from the royal family. Your parents attend directly to the monarch and have the highest place at court. Your lands, titles, and estates are significant, and many lords and knights serve under your parents’ command."},
            {"lower": "97", "upper": "99", "name": "Minor Prince", "action": "You are the child of a prince or princess, and part of the royal family. You aren’t the next in succession, but your power and wealth are grand indeed. "},
            {"lower": "100", "upper": "100", "name": "Regent", "action": "You are a prince or princess, the son or daughter of the monarch. You owe fealty directly to your parents, and to no one else. Few command the power and wealth you do, and your presence inspires great respect, if not total awe, among those who kneel before the crown."}
        ];
        var majorChildhoodEvent = [
            {"lower": "01", "upper": "05", "name": "Academy Training", "action": "You attended a private academy where you studied a number of skills and gained training in your current profession. Whether you were a brilliant student or a dropout, the university environment was your home for a good portion of your formative years. You gain access to the Focused Mind magic trait."},
            {"lower": "06", "upper": "10", "name": "Betrayal", "action": "A friend or family member whom you trusted more than anyone else betrayed you. You have never fully trusted anyone since and prefer to rely on your own abilities rather than place your trust in others. You gain access to the Suspicious social trait."},
            {"lower": "11", "upper": "15", "name": "Bullied", "action": "In your early life, you were a victim— easy prey for those stronger or cleverer than yourself. They beat you when they could, using you for their sport. This abuse nursed a powerful flame of vengeance. You gain access to the Bullied combat trait."},
            {"lower": "16", "upper": "20", "name": "Competition Champion", "action": "You distinguished yourself at an early age when you won a competition. This might have been a martial contest of arms, a showing of apprentice magicians, high stakes gambling, or something mundane like an eating championship. You gain access to the Influence social trait and the Champion story feat."},
            {"lower": "21", "upper": "25", "name": "Death in the Family", "action": "You were profoundly affected by the death of the relative closest to you—a parent, grandparent, favorite sibling, aunt, uncle, or cousin. This death affected you profoundly, and you’ve never been able to let go of it. You gain access to the Reactionary combat trait and the Deny the Reaper story feat. "},
            {"lower": "26", "upper": "30", "name": "Died", "action": "You died, or came so close to death that you walked the boundary between the realms of the living and the dead. Having passed from life’s domain once, you have a unique perspective on life, perhaps even a greater appreciation for it—or maybe your experience caused you to reject all trivial things, focusing only on matters of true import. You gain access to the Fearless Defiance faith trait and the Arisen story feat."},
            {"lower": "31", "upper": "35", "name": "Fall of a Major Power", "action": "In your early years, an old power with far-reaching influence fell into decline. This could have been an empire, a major organization or gang, or a person such as a benevolent king or evil dictator. Your early memories were founded in a world where this great power affected your region for good or ill. You gain access to the Worldly social trait. "},
            {"lower": "36", "upper": "40", "name": "Fell in with a Bad Crowd", "action": "In your youth, you ran with a brutal, evil, or sadistic crowd. You might have belonged to a gang, a thieves’ guild, or some other nefarious organization. It was easy to cave in to pressure and do whatever they told you to do, and your outlook is colored by moral ambiguity. You gain access to the Child of the Streets social trait. "},
            {"lower": "41", "upper": "45", "name": "First Kill", "action": "You’ve had blood on your hands since your youth, when you first took the life of another creature. Whether this act repulsed you or gave you pleasure, it was a formative experience. You gain access to the Killer combat trait and the Innocent Blood story feat."},
            {"lower": "46", "upper": "50", "name": "Troubled First Love", "action": "Your first love was everything you imagined it would be. That is, until you were separated from your beloved. This may have been the result of distance, changing perspectives, death, or differences in class or family. Some have said this made you jaded—you think it has granted you insight on how the world really works. You gain access to the Worldly social trait and you roll a d12 instead of a d20 on Table 1–56: Romantic Relationships."},
            {"lower": "51", "upper": "55", "name": "Imprisoned", "action": "Your criminal record began when you were young. You were imprisoned, punished, and possibly displayed in public as a criminal. Whether or not you committed the crime, the experience has stayed with you. You gain access to the Criminal social trait. See the Crime and Punishment sidebar on page 23. You also gain access to the Liberator story feat."},
            {"lower": "56", "upper": "60", "name": "Inheritance", "action": "A great sum of wealth or property was bequeathed to you at an early age, providing you with extraordinary means. Daily costs of living have ceased to concern you, and you’ve learned that there is little that money cannot buy. You gain access to the Rich Parents social trait. "},
            {"lower": "61", "upper": "65", "name": "Kidnapped", "action": "You were kidnapped at some point in your childhood. The kidnappers might have been pirates, slavers, thieves looking for ransom, a powerful guild seeking to blackmail your parents, a cult, and so on else. Before you were released, were ransomed, or escaped, you picked up on various aspects of the criminal underworld. You gain access to the Canter social trait and the Liberator story feat."},
            {"lower": "66", "upper": "70", "name": "Magical Gift", "action": "When you were a child, you found, stole, or were given a magic item that gave you an extraordinary ability. You may have used this item for mischief, crime, or good. Since that time, magic items have always held a special fascination for you. You gain access to the Magical Talent magic trait."},
            {"lower": "71", "upper": "75", "name": "Major Disaster", "action": "You witnessed—and survived—a major disaster in your childhood years, such as a great fire, flood, earthquake, volcano, or storm. It obliterated the settlement where you lived, whether a small village, large city, or entire island. You gain access to the Resilient combat trait and the Unforgotten story feat."},
            {"lower": "76", "upper": "80", "name": "Mentorship/Patronage", "action": "A mentor or patron took an interest in your development and volunteered to train or sponsor you. This creature’s motives might not be entirely clear, but without its influence you would not be who you are. You gain access to the Mentored social trait."},
            {"lower": "81", "upper": "85", "name": "Met a Fantastic Creature", "action": "When you were only a child, you made contact with a magical creature, such as a dragon, unicorn, genie, pixie, or similar creature. You learned a powerful lesson or a magic trick from that creature. This meeting changed your life and made you different from the other children. You gain access to the Gifted Adept magic trait."},
            {"lower": "86", "upper": "90", "name": "Ordinary Childhood", "action": "Your childhood was fairly ordinary, with no major blessing or catastrophe—a stark contrast to an adventuring life. You lived your life in anticipation of growing up so you could affect the dull backdrop upon which your mundane life was painted. Now that you’ve grown, it’s easy to miss those tranquil days where nothing ever seemed to happen. You gain access to the Ordinary social trait."},
            {"lower": "91", "upper": "95", "name": "Raiders", "action": "A horde of raiders attacked your settlement and killed several of your people. This could have been a tribe of brutal humanoids or the conquering army of a civilized nation. As a result, you harbor deep resentment toward a particular faction, race, or country. You gain access to the Axe to Grind combat trait, the Foeslayer story feat, and the Vengeance story feat. "},
            {"lower": "96", "upper": "100", "name": "The War", "action": "You grew up against the backdrop of a major military conflict that affected much of your childhood world. You became accustomed to a short food supply, living in occupied territory, and moving from place to place. Several of the people you knew in your childhood were lost in the war, including members of your family. You gain access to the Vagabond Child regional trait and the Deny the Reaper story feat."}
        ];
        var crime = [
            {"lower": "01", "upper": "10", "name": "Adultery"},
            {"lower": "11", "upper": "20", "name": "Arson"},
            {"lower": "21", "upper": "30", "name": "Burglary"},
            {"lower": "31", "upper": "40", "name": "Heresy"},
            {"lower": "41", "upper": "50", "name": "Minor offense (sumptuary law)"},
            {"lower": "51", "upper": "60", "name": "Murder"},
            {"lower": "61", "upper": "70", "name": "Rebellion/treason"},
            {"lower": "71", "upper": "80", "name": "Robbery"},
            {"lower": "81", "upper": "90", "name": "Smuggling"},
            {"lower": "91", "upper": "100", "name": "Unlawful use of magic"}
        ];
        var punishment = [
            {"lower": "01", "upper": "10", "name": "Beating"},
            {"lower": "11", "upper": "20", "name": "Branding"},
            {"lower": "21", "upper": "30", "name": "Exile"},
            {"lower": "31", "upper": "40", "name": "Fine"},
            {"lower": "41", "upper": "50", "name": "Imprisonment"},
            {"lower": "51", "upper": "60", "name": "Stocks"},
            {"lower": "61", "upper": "70", "name": "Torture"},
            {"lower": "71", "upper": "80", "name": "Trial by combat"},
            {"lower": "81", "upper": "90", "name": "Trial by fire"},
            {"lower": "91", "upper": "100", "name": "Trial by water"}
        ];
        var classBackground = {
            "alchemist": [
                {"lower": "01", "upper": "10", "name": "Accidental Discovery", "action": "Your keen intellect has always been an asset in your studies of the alchemical arts, but along with your logic and rationale, you have a “sense” for alchemy. This intuition sometimes leads to discoveries through methods most of your peers would never have thought possible, but that you somehow know will work. You gain access to the Alchemical Intuition magic trait."},
                {"lower": "11", "upper": "20", "name": "Firebug", "action": "Although you’ve studied all aspects of the alchemist’s craft, your have a talent for fire. Fire has always been a seductive and powerful force that you have either embraced with glee or focused care. You are adept at exploiting a weakness to fire when you recognize it. You gain access to the Focused Burn magic trait."},
                {"lower": "21", "upper": "30", "name": "Wasn’t Strong Enough", "action": "You suffered something at an early age that made you feel powerless. Maybe a relative died from plague, a friend was crushed beneath rubble you were too weak to move, or some other horrible tragedy occurred. You turned to alchemy to transcend the limitations of your physical form. Your relentless dedication has made your bolstering abilities more persistent. You gain access to the Enduring Mutagen magic trait. "},
                {"lower": "31", "upper": "40", "name": "Magic for the Uninclined", "action": "You were always interested in the arcane, but lacked the innate magic of sorcerers or the single-minded dedication possessed by wizards. As a disciple of science, the magic of faith was also closed to you. You dedicated yourself to alchemy, focusing on extracts that mimic the magic you once hoped to wield. That original interest in magic still grants you occasional rare insight into the workings of your formulae. You gain access to the Cross-Knowledge magic trait."},
                {"lower": "41", "upper": "50", "name": "Master Craftsman", "action": "The first time you saw air mix with the shapeless goo of a tanglefoot bag or shielded your eyes at the heatless light of a sunrod, you became ensnared by the wonders of alchemy. You’ve since labored to learn the secrets to crafting such items. You gain access to the Alchemical Adept magic trait."},
                {"lower": "51", "upper": "60", "name": "Physician", "action": "Alchemy was the natural outgrowth of your time spent learning the healer’s craft. Your first extracts were the accidental byproduct of making poultices and elixirs. Continuing your studies, you found the natural compassion you had as a healer mixing with an alchemist’s cold logic, forging you into a clinician unlike most others. You gain access to the Precise Treatment magic trait. "},
                {"lower": "61", "upper": "70", "name": "Formulae Stickler", "action": "To you, alchemy is a delicate and complex symphony requiring multiple different elements to work together to produce the perfect result. Though others in your craft come up with ways to substitute certain ingredients when making bombs or mutagens, you disdain such practices, deeming them pollutions. To you, there is always a perfect ingredient and its addition makes your alchemy more potent. You gain access to the Meticulous Concoction magic trait."},
                {"lower": "71", "upper": "80", "name": "Nature’s Foe", "action": "You lost something or someone important to you through the cruel indifference of nature. Perhaps you watched someone get swallowed by a storm-tossed sea or witnessed a summer forest fire destroy your home and all of your possessions. No matter the impetus, the unpredictability of nature made you feel small and helpless. Your subsequent devotion to alchemy has been in no small part due to a desire to exert control over nature itself, a domineering intent palpable to all creatures of nature. You gain access to the Unnatural Revenge social trait."},
                {"lower": "81", "upper": "90", "name": "To Recreate a Miracle", "action": "Your life or the life of someone you loved was saved by a magical elixir. Witnessing this instilled a sense of awe for the art of alchemy. Although your research has not yet been able to recreate the sheer potency of that draught long ago, your years questing to duplicate it have made you adept at brewing potions. You gain access to the Perfectionist’s Brew magic trait. "},
                {"lower": "91", "upper": "100", "name": "Mad Alchemist", "action": "Rampant curiosity and a near fearlessness of the unknown drove you to experiment with the rudiments of alchemy. That curiosity has uncovered interesting alchemical secrets, at the cost of alchemical instability. Some consider your experiments mad. You gain access to the Unstable Mutagen magic trait."}
            ],
            "barbarian": [
                {"lower": "01", "upper": "10", "name": "Vengeance", "action": "When you were young, a great wrong was done to you, a loved one, your family, or your people. This experience tore you apart and reduced you to a being of primal emotions. Dreams of vengeance became your only promise of comfort. You gain access to the Axe to Grind combat trait, the Foeslayer story feat, and the Vengeance story feat."},
                {"lower": "11", "upper": "20", "name": "Champion of a God", "action": "At your coming-of-age ritual, your deity, totem, or patron spirit sparked your soul with a religious zeal. This entity might be a beast spirit, a warmongering god, a demon lord, or some other supernatural entity. In the name of this otherworldly force you become an unstoppable warrior—the bane of all your tribe’s foes. You gain access to the Inspired faith trait and the Champion story feat."},
                {"lower": "21", "upper": "30", "name": "Conquest", "action": "Upon coming of age, you went on your first raid, where you learned the thrill of violence and chaos and the satisfaction that came with the spoils of your victory. When your enemies dare to stand against you, your rage rekindles until you have conquered and subdued them. You gain access to the Killer combat trait."},
                {"lower": "31", "upper": "40", "name": "Hated Foe", "action": "In your formative years, you learned to despise a certain individual, tribe, kingdom, empire, race, or monster due to some slight it inflicted upon you or your people. This foe lurks ever close to your thoughts. So intense is your hatred that the mere thought of this foe can incite your rage. You gain access to the Reckless combat trait and the Foeslayer story feat."},
                {"lower": "41", "upper": "50", "name": "Personal Flaw", "action": "There is a part of yourself that you hate more than anything else. In your adolescence, you first realized this imperfection— to your lasting shame. This might be a gentle part of yourself you wish to eliminate or a brutal, prideful, greedy, or monstrous side you can’t control. Your rage is fueled by self-loathing, or by projecting this part of yourself onto a foe you wish to destroy. You gain access to the Axe to Grind combat trait."},
                {"lower": "51", "upper": "60", "name": "Hatred of Civilization", "action": "When you first encountered civilization in your youth, its weak and decadent people revolted you. Once, such people were free and strong, but rules and laws made them feeble. Your rage is the wild part— the pure part—of yourself that separates you from the craven ways of “civilized” people. You gain access to the Savage social trait."},
                {"lower": "61", "upper": "70", "name": "Persecution", "action": "You grew up under the persecution of another power—perhaps a rival tribe, an expansionistic empire, or a tribe of violent monsters. Beaten and bloodied, your people barely survived the onslaught. But the beatings made you strong and taught you how to channel the pain into something useful. Since that time, the flame of rage has burned inside you, waiting to be released against your oppressors. You gain access to the Bullied combat trait."},
                {"lower": "71", "upper": "80", "name": "One of a Dying Breed", "action": "You grew up knowing that your people were slowly dying out—that your extinction was inevitable in the face of the changing world. In youthful vigor, you declared that your fire would not be snuffed without a fight. Your rage stems from the desperate desire to be remembered, to make a mark upon the world before the sun sets on your dwindling kind. When you rage, a single thought permeates your burning mind: If you’re going down, you’re taking everyone with you. You gain access to the Reactionary combat trait."},
                {"lower": "81", "upper": "90", "name": "Chaos Embraced", "action": "You grew up in wild lands where there were no laws except for those of nature—the laws of the predator and the prey. You searched for meaning in the world, in the gods, in the prayers of priests, in the patterns of the stars, but you found nothing. There is no true order to the natural universe except for that of raw and unbridled power. Chaos is the natural state of all things, and that’s how you like it. You gain access to the Unpredictable social trait."},
                {"lower": "91", "upper": "100", "name": "Bloodthirsty", "action": "The first time you spilled a deserving foe’s blood and watched the thing’s life ebb out onto the hard ground, you found yourself filled with a mad, euphoric ecstasy like none other. The memory of this visceral experience returns to you in every battle, like an insatiable addiction that can only be abated with further bloodshed. You gain access to the Bloodthirsty combat trait and the Innocent Blood story feat."}
            ],
            "bard": [
                {"lower": "01", "upper": "10", "name": "Celebrity", "action": "In your formative years, you saw a player or troupe of players perform before an enthralled audience. That’s when youdecided that you wanted to be up on that stage performing for the adulation of the crowd. As a minor celebrity, you gain access to either the Charming social trait or the Influence social trait. "},
                {"lower": "11", "upper": "20", "name": "Cultural Mandate", "action": "There has always been a revered storyteller in your culture. This could be an official skald, a royal minstrel, the washerman who spins parables and folk wisdom, or the old farmer who tells tall tales at the pub. Ever since you were young, your community has groomed you to fulfill this role. As a silver-tongued storyteller, you gain access to the Fast Talker social trait."},
                {"lower": "21", "upper": "30", "name": "Dabbler", "action": "Whether you grew up rich or poor, you refused to accept the limits imposed by your social class or means. In your youth, you determined to learn a little bit of all there was to know. You may not be the master of any one career, but the breadth of your experience is wide, textured, and diverse. You gain access to the Worldly social trait. "},
                {"lower": "31", "upper": "40", "name": "For Love", "action": "When you were young, you tried to express yourself to your beloved using song or poetry. Driven by desire, you refined your skill and learned to articulate raw emotion in story and song. You gain access to the Ear for Music religion trait and the True Love story feat. You roll a d12 instead of a d20 on Table 1–56: Romantic Relationships."},
                {"lower": "41", "upper": "50", "name": "Gift", "action": "Someone gave you a special instrument or a collection of songs and stories at a time in your life when you needed them most. You have treasured this object above all other possessions, and it started you on a path to new songs and stories. You gain access to the Seeker social trait. "},
                {"lower": "51", "upper": "60", "name": "Ongoing Patron", "action": "When you were young, a person with money or power took an interest in your art and sponsored you. Most of what you created was dictated by the patron’s tastes, and you probably still work for this patron, who maintains a strong influence over your life. You gain access to the Oathbound faith trait."},
                {"lower": "61", "upper": "70", "name": "Spy", "action": "Someone once asked you to employ your artistic talents as an excuse to observe a person, steal an object, or retrieve a piece of information. Infiltrating various houses and estates in the guise of an actor, minstrel, or storyteller, you honed your art while being paid better than most other performers. You gain access to the Criminal social trait. See the Crime and Punishment sidebar on page 23."},
                {"lower": "71", "upper": "80", "name": "Troupe of Players", "action": "You were born into, helped found, or fell in with a troupe of traveling players. You spent your early years rambling from one place to another—from tavern to tavern, town to town, or even between countries. Long hours traveling gave you plenty of time to practice and hone your skill. You gain access to the World Traveler human race trait (which you may take regardless of your race). "},
                {"lower": "81", "upper": "90", "name": "Virtuoso", "action": "One day, you picked up an instrument or told a tale, and your raw natural ability captivated everyone who saw you perform. Words and music have always come to you effortlessly, as naturally as breathing. You gain access to the Talented social trait and the Magnum Opus story feat."},
                {"lower": "91", "upper": "100", "name": "Worldshaker", "action": "Since childhood, you’ve observed the world around you and translated those observations into story and song. Your unique, unabashed vision resonated with the audience, revealing new perspectives as well as simple truths. You’re used to people quoting your words and looking up to you, though some authority figures deem you a rabble-rouser and troublemaker. You gain access to the Natural- Born Leader social trait."}
            ],
            "cavalier": [
                {"lower": "01", "upper": "10", "name": "Tragedy and Loss", "action": "In your formative years, you experienced a significant tragedy that forged you into the person you’ve become. You gain access to the Grief-Filled social trait."},
                {"lower": "11", "upper": "20", "name": "Faith", "action": "You embraced a religious faith at an early age and devoted your life to its ideals. You soon learned that it was not enough to follow and worship. Faiths need champions—people capable of defending the virtues, tenets, and precepts of the faith from those who would seek to corrupt, alter, or destroy it. You gain access to the Indomitable Faith faith trait."},
                {"lower": "21", "upper": "30", "name": "Champion of the People", "action": "You grew up among common people. You were close to these people and you witnessed their oppression, their suffering, and their helplessness. Someone needed to stand up and protect them, and that someone would be you. You gain access to the Militia Veteran regional trait, the Champion story feat, and the Town Tamer story feat."},
                {"lower": "31", "upper": "40", "name": "Squired", "action": "You were a young squire who served a very different kind of knight. This knight taught you more than the art of battle: she taught you to live by a strict code to guide your actions and your sword. You gain access to the Influence social trait and the Oathbound faith trait."},
                {"lower": "41", "upper": "50", "name": "Military Order", "action": "At the beginning of your career, you served with a company of mercenaries, rogues, and professional soldiers. The experience taught you how to work strategically with diverse groups. You gain access to the Tactician combat trait and the Worldly social trait."},
                {"lower": "51", "upper": "60", "name": "Personal Code", "action": "In your early years, you made sense of the chaotic, disorderly world you grew up in by formulating your own code of ethics and behavior. Though you are the ultimate arbiter and authority over this code, you do not break it, for without it your existence loses all meaning. You gain access to the Principled faith trait. "},
                {"lower": "61", "upper": "70", "name": "Equestrian", "action": "The first time you rode a horse, you discovered a kinship with it and knew you were born to ride, and the superior horsemanship you gained through your bond with the animal propelled you into the ranks of the cavaliers. You gain access to the Beast Bond social trait. "},
                {"lower": "71", "upper": "80", "name": "Entitlement", "action": "You became a cavalier early in your career, not by personal action or effort but by family favor, connections, or promotion. You were given fine weapons, tactical training, a mount, and the edicts of your order. Now you must learn how to follow them. You gain access to the Rich Parents social trait."},
                {"lower": "81", "upper": "90", "name": "Honor Bound", "action": "Long ago, a promise was made that you are bound to fulfill. This could be a vow you made in your youth, or one made by an ancient forebear. Regardless, you must follow a cavalier’s code despite any personal doubts or misgivings until you have fulfilled the terms of the oath. You gain access to the Oathbound faith trait. "},
                {"lower": "91", "upper": "100", "name": "Old Soldier", "action": "When you were young, you discovered an ancient chivalric oath sworn by knights of yore. Though the beautiful edicts of this oath seem to have been forgotten by the world, this old way fulfills you and gives you purpose. You gain access to the Inspired faith trait."}
            ],
            "cleric": [
                {"lower": "01", "upper": "10", "name": "Angelic Encounter", "action": "A supernatural being, such as an angel or demon, appeared to you and proclaimed that you were destined to perform a great task in service to your god. You might have tried to deny it—and you even might still have doubts—but eventually you took up the mantle of a holy warrior and chose to meet this destiny head on, either to prove to yourself that you’re worthy of such a destiny or to show your supernatural messenger that you cannot be pigeon-holed so easily. You gain access to the Prophesied faith trait."},
                {"lower": "11", "upper": "20", "name": "Atonement", "action": "In your youth, you committed actions you are not proud of. Your deeds left dark stains upon your soul, ones so deep they might take a lifetime to wash away. When you hit rock-bottom—whether through greed, addiction, hedonism, or simply lack of good sense—you turned to faith, vowing to atone for all of the horrible acts you’ve committed. You gain access to the Oathbound faith trait."},
                {"lower": "21", "upper": "30", "name": "Converted", "action": "In your early life, you followed a different faith, a different god or powerful entity, or perhaps no faith at all. A representative of your current faith showed you the error of your ways and converted you, and you couldn’t be happier. You can only hope to do for others what this individual did for you. You gain access to the Inspired faith trait."},
                {"lower": "31", "upper": "40", "name": "Devoted", "action": "From your earliest memory, you’ve had a close relationship with your deity. This entity has been a constant presence in your life: your greatest comfort, best companion, truest love, or some combination of the three. You’ve never had to see or speak with your deity to know that he watches over you, and the beliefs and criticisms of others do not faze you—your faith is enough. You gain access to the Blessed faith trait and the Fearless Zeal story feat."},
                {"lower": "41", "upper": "50", "name": "Healed", "action": "As a child, you were afflicted with a terrible physical or mental illness or a debilitating wound that prevented you from functioning in society. A miracle worker touched your body and commanded you to be well, and—for perhaps the first time in your life—you were whole. Now you live your life in tribute to the deity whose divine healer restored you, and perhaps hope to bestow similar gifts unto deserving nonbelievers. You gain access to the Sacred Touch faith trait and the Battlefield Healer story feat."},
                {"lower": "51", "upper": "60", "name": "Reborn", "action": "You died or nearly died. In the midst of this experience, your mind came to a place of quiet where you witnessed your deity or its agents pulling your body and spirit back from the brink of death. Every day since has been a gift, and you strive to understand the reason you have been saved while countless others perish. You gain access to the Deathtouched bloodline race trait and the Arisen story feat."},
                {"lower": "61", "upper": "70", "name": "Religious Colony", "action": "You grew up in a religious colony or settlement. This may have been a small village in the hinterlands or a kingdomsized theocracy devoted to a single religion. When you came of age, you decided to serve your god and country as a cleric, a choice that garnered respect, dignity, and honor among your people. You gain access to the Natural- Born Leader social trait."},
                {"lower": "71", "upper": "80", "name": "Revelation", "action": "In your youth, a deity granted you visions or dreams that revealed startling truths. These visions might have been prophetic, deeply insightful, or filled with extraordinary solutions to problems that plagued you, your family, or your community. So powerful and compelling were the visions that you devoted your life to the deity. You gain access to the Worldly social trait."},
                {"lower": "81", "upper": "90", "name": "Sanctuary", "action": "When you were young, you did a very wicked deed—or were accused of one— and fled to the only place that could shelter you from the law. You found sanctuary among the worshipers of a deity, and they took you in and protected you. In time, you joined the faithful to serve their cause in the world, though the shadow of your past sin still lurks beyond the church’s walls. You gain access to the Criminal social trait. See the Crime and Punishment sidebar on page 23."},
                {"lower": "91", "upper": "100", "name": "Taken in by the Church", "action": "You spent your youth in a church or monastery serving as an acolyte or doing menial work on the grounds, either taken in as an orphan, sent there by your equally devout parents, or by taking on the faith of your own volition. The traditions and rituals of the religion served as your way of life throughout your adolescence, and you left that pious community with the skills to champion your faith in the world. You gain access to the Child of the Temple faith trait."},
            ],
            "druid": [
                {"lower": "01", "upper": "10", "name": "Lost in the Wild", "action": "You got lost in the wilderness and were forced to survive on your own. You may have wandered desert dunes, thick forest, or high mountains—or perhaps you were shipwrecked on a desert island. Young and vulnerable, you feared the natural dangers of the world at first, but acclimated to the natural way of life as you learned to tap into the primal power of the world. You gain access to the Resilient combat trait."},
                {"lower": "11", "upper": "20", "name": "Fey Meeting", "action": "Walking in the woods, you met a fey creature, such as a brownie, elf, nymph, gnome, sprite, or treant. This magical being taught you how to tend the natural world in the gentle manner of the fey. You gain access to the Magical Knack magic trait."},
                {"lower": "21", "upper": "30", "name": "Spirit of Nature", "action": "Through a ritual, vision, or dream, you communed with a primordial spirit of nature. In the form of a majestic beast, this spirit charged you with preserving the natural world from those who would destroy it. You are instilled with the spirit of this creature—a small fragment of its power grows in you as you mature. You gain access to the Sacred Touch faith trait."},
                {"lower": "31", "upper": "40", "name": "Tree Tender", "action": "You learned to care for plants in your youth by tending a small garden, orchard, grove, or field. These plants flourished like no others. You’ve always understood plants better than people. You gain access to the Devotee of the Green faith trait. "},
                {"lower": "41", "upper": "50", "name": "Druid Circle", "action": "You discovered, or were initiated into, a circle of druids that protects an expanse of wilderness. The druids taught you of their duty to nature and the powers that the natural world granted them. Soon you learned enough to join the circle as an initiate. You gain access to the Mentored social trait."},
                {"lower": "51", "upper": "60", "name": "Civilized Outcast", "action": "For a time, you lived in an urban environment. But you soon discovered that social communities, bureaucracies, and laws made you feel constrained and unnatural. You left civilization and retreated into the wild at the first opportunity. You still retain the lessons, habits, and refinements of civilized behavior, but your heart belongs to nature. You gain access to the Civilized social trait."},
                {"lower": "61", "upper": "70", "name": "Savage", "action": "You spent your formative years among a tribe or village far from civilization. The elders chose you as successor and taught you the lore of the elements and the animals. You gain access to the Savage social trait."},
                {"lower": "71", "upper": "80", "name": "Raised by Beasts", "action": "You were reared in part by wild animals. Most of what you know you learned by observing these beasts, their natural instincts being unburdened by artifice or manipulation. Even though you possess a humanoid body, the beasts recognize you as one of their own. You gain access to the Animal Friend gnome race trait (which you may take regardless of your race) and the Feral Heart story feat."},
                {"lower": "81", "upper": "90", "name": "Avatar", "action": "Once you were an ordinary youth. But when the natural world needed saving, the land chose you as its champion, lending you as much power as you were able to control. You might not understand the reasons for your power, but you are one with nature and your will is the will of the world. You gain access to the Child of Nature religion trait."},
                {"lower": "91", "upper": "100", "name": "Beastlord", "action": "Natural birds and beasts have always obeyed you. From your earliest years, you’ve possessed a gentleness or a power that allows you to communicate with animals as though you shared a common language. Perhaps you have fey blood or traces of lycanthrope ancestry. You gain access to the Beast Bond social trait."},
            ],
            "fighter": [
                {"lower": "01", "upper": "10", "name": "Adventure", "action": "Since you can remember, you sought to become a great warrior. Inspired by legends of the past or personal heroes of your civilization, you longed to wield steel and carve your way in the world. You gain access to the Seeker social trait. "},
                {"lower": "11", "upper": "20", "name": "Conscripted", "action": "You didn’t choose the military life so much as you were drafted into it. You have a non-military background and skill set. Who knows what course your life might have taken had you not been forced to take up arms? You gain access to the Worldly social trait."},
                {"lower": "21", "upper": "30", "name": "Duty", "action": "You took up the sword because no one else would. When a great dangerthreatened your home, you stepped forth to meet the challenge, though you were only a youth with just the strength of your arm and steadfastness of your courage to see you through. You gain access to the Courageous combat trait. "},
                {"lower": "31", "upper": "40", "name": "Gladiator", "action": "As an adolescent, you learned to fight and kill because your master made you, and if you had not learned, you would be dead. Killing was a way of life—a means of survival. At first you did it because you had to, but that soon changed when you heard the chorus of the crowd. You gain access to the Killer combat trait, the Life of Toil social trait, and the Champion story feat. "},
                {"lower": "41", "upper": "50", "name": "Joined the Watch", "action": "Your village, town, city, or tribe needed new recruits for the volunteer watch patrol, and you joined up—whether for money, duty, peace, or power. This rudimentary training gave you an understanding of civilized justice and showed you how to wield a weapon with skill. You gain access to the Militia Veteran regional trait. "},
                {"lower": "51", "upper": "60", "name": "Knighted", "action": "Your military path began when you were knighted or made a squire to a knight. Your family’s status could have influenced this event, or you might be a simple commoner rewarded with a title for a rare feat of courage. As a member of the nobility, you gain access to the Influence social trait."},
                {"lower": "61", "upper": "70", "name": "Mercenary", "action": "Everyone needs to earn a living, and in your youth you were fast, strong, or tough enough to fight for pay. There are good causes and bad causes, but at the end of the day, it all comes down to money. Sometimes you got easy jobs, like guarding merchant caravans; other times the jobs are rough, like fighting in a rebel lord’s private army. You gain access to the Mercenary social trait. "},
                {"lower": "71", "upper": "80", "name": "On the Street", "action": "You spent adolescence in a seedy part of town. You learned to fight dirty and fight mean. Turns out you were good at it. Your skills drew the interest of gang and guild leaders, tavern keepers, and anyone else who needed hired muscle. You gain access to the Child of the Streets social trait."},
                {"lower": "81", "upper": "90", "name": "Schooled", "action": "You learned to fight in a structured environment where you were exposed to avariety of weapons, armor, strategies, and tactics. You learned to fight as part of a unit, how to follow orders and how to command a squad. You gain access to the Tactician combat trait. "},
                {"lower": "91", "upper": "100", "name": "Survival", "action": "You spent some part of your life in the wild—in places that abide by the laws of nature rather than those of civilization. You survived by being stronger, faster, and more cunning than the predators. That meant you fought not for coin, honor, or principle, but for your very life. You gain access to the Resilient combat trait."},
            ],
            "gunslinger": [
                {"lower": "01", "upper": "10", "name": "Any Fool Can Swing a Sword", "action": "Sometime during your youth, you came to the conclusion that most melee and ranged weapons are crude and primitive compared to firearms. It puzzles you that anyone with martial aptitude deigns to devote their skill to anything other than firearms. You disregard such “lesser” weapons and prefer the feel of your trusty firearm over any other tool of war. You gain access to the Reckless Contempt combat trait."},
                {"lower": "11", "upper": "20", "name": "Bucking Tradition", "action": "You come from a proud tradition of ancient arms and august codes of conduct like those followed by paladins, cavaliers, and samurai. Instead of following in the vaunted steps of your predecessors, though, you chose to learn the art of firearms to the shock and perhaps even anger of your family and peers. Your break with tradition fostered in you a nearly insurmountable will that fuels your identity as a gunslinger. You gain access to the Resolve of the Rejected combat trait."},
                {"lower": "21", "upper": "30", "name": "Custodian of the Future", "action": "Firearms are not just an effective implement for killing or a curious mechanical trinket; they are the next step in the technological development of your people. Your passion for the workings of your weapons has you constantly assembling and dismantling firearms to truly understand their mechanics. This ongoing dedication improves your ability to repair firearms and make them deadlier while in your skilled hands. You gain access to the Unblemished Barrel combat trait."},
                {"lower": "31", "upper": "40", "name": "Defining Moment", "action": "Guns are inexorably linked to a moment where your life dramatically changed. Perhaps you were so sickly as a child that you couldn’t turn a crossbow’s winch or bend a bow, but firearms showed you that you could still hunt and fight. Perhaps you picked up a firearm in a desperate moment to help a woundedgunslinger and knew that you had just taken your first step along the same path. A firearm at your side instills in you a sense of purpose and destiny that no one can take away. You gain access to the Black Powder Fortune combat trait. "},
                {"lower": "41", "upper": "50", "name": "Look at What I Can Do", "action": "The lure of something new and showy drove you to first pick up a gun. Although several near mishaps taught you to respect the volatile weapon and the powder that powers it, you still enjoy doing trick shots and getting the oohs and aahs of a crowd. You gain access to the Black Powder Bravado combat trait."},
                {"lower": "51", "upper": "60", "name": "Mechanical Savant", "action": "For you, the lure of firearms is not the effect they produce, but the science and mechanical process behind the effect. Your endless tinkering and perfectionism have made your own gun easier to upgrade. You gain access to the Just Like New combat trait."},
                {"lower": "61", "upper": "70", "name": "Black Powder Presence", "action": "You grew up belittled and even beaten for not being the biggest or the strongest of your compatriots, family, or race. With no burgeoning aptitude for magic, you looked for some other way to exceed those who found superiority in brute strength—and you found it in gunslinging. You gain access to the Larger Than Life combat trait."},
                {"lower": "71", "upper": "80", "name": "Sacred Charge", "action": "Your gunslinger training is more than just martial skill—it’s a calling. Perhaps you are part of an elite group of guards serving and defending a temple or faith. Conversely, you might come from a land where firearms represent the pinnacle of your society’s advancement or are the last vestige of those who came before. Your sense of higher purpose allows you to fight on and keep firing when winning seems impossible. You gain access to the Never Stop Shooting combat trait."},
                {"lower": "81", "upper": "90", "name": "Shock and Awe", "action": "The sound and fury of gunfire is as potent a weapon as the pellets and bullets your weapon discharges. You live for the reflexive wince that others make when they jump at the sound of a firearm, and laugh heartily at the amazement you inspire in others with your cacophonous black-powder weapons. You gain access to the Startling Report combat trait."},
                {"lower": "91", "upper": "100", "name": "Some Things Are Stronger Than Magic", "action": "You grew up either oppressed by magic cruelly wielded or loathing the elitism of those who possessed such arcane or divine power. Searching for something nonmagical thatrelies on skill and practice led you to the study and wielding of firearms. You relish trumping pompous spellcasters with a quick draw and a keen eye. You gain access to the Black Powder Interjection combat trait."},
            ],
            "inquisitor": [
                {"lower": "01", "upper": "10", "name": "Bureaucracy’s Bane", "action": "You chose the inquisitor’s path because you have no taste for the petty rules and regulations that mire the leaders of your faith in inaction and inefficacy. You know that you are an instrument of your deity and that your directives do not require intercession by the less motivated. You gain access to the Focused Disciple faith trait. "},
                {"lower": "11", "upper": "20", "name": "Chaplain", "action": "You learned long ago that in the heat of battle and under the pall of war, even the most devout can waiver in faith. You subsequently dedicated yourself to stewarding the faith of soldiers and allies in times of great conflict. You gain access to the Battlefield Disciple combat trait and the Battlefield Healer story feat. "},
                {"lower": "21", "upper": "30", "name": "Exemplar", "action": "You found early on that you lacked the logic or the vocabulary to communicate the virtues of faith—more precisely, your faith—to others. You decided that the best way to foster respect and appreciation for your god was not with words, but with action. You gain access to the Beacon of Faith faith trait."},
                {"lower": "31", "upper": "40", "name": "Failed Cleric", "action": "Your original training in divine magic was as a cleric, but your faith eventually distilled into you the ability to hear lies and see weaknesses in the “unfaithful.” You gain access to the Schooled Inquisitor faith trait."},
                {"lower": "41", "upper": "50", "name": "Faith-Bringer", "action": "You know that in order to bring the light of your deity to others, you must traverse hostile territories and face even more hostile inhabitants. You gain access to the Weathered Emissary social trait and the Fearless Zeal story feat. "},
                {"lower": "51", "upper": "60", "name": "False Witness", "action": "You’ve seen innocent people suffer due to another’s lies. While these injustices made you feel powerless, they’ve also kindled a desire in you to punish those who regard truth so cheaply. You gain access to the Vigilant Battler combat trait. "},
                {"lower": "61", "upper": "70", "name": "Few Left to Safeguard the Faith", "action": "You are the vanguard of your faith. Perhaps you are a pilgrim for a good deity in an unholy land, or the secret enforcer of a sect that operates in the shadows of the world. You are accustomed to working alone and with little guidance from the superiors of your church, trusting your own moral judgment to act on behalf of your god. This certainty acts as a defense against the magic of other, “lesser” deities. You gain access to the Disdainful Defender faith trait. "},
                {"lower": "71", "upper": "80", "name": "Temple Detective", "action": "Your ability to sniff out falsehood and see weakness in others made you uniquely suited to guard the religious houses of your order. You gain access to the Truth’s Agent social trait."},
                {"lower": "81", "upper": "90", "name": "The Path of Righteous Rage", "action": "Your faith does not manifest in calm prayer or serene meditation. You achieve the transcendent feeling of the divine when you are in the throes of battle for your deity. You gain access to the Indelible Ire combat trait. "},
                {"lower": "91", "upper": "100", "name": "Zealot", "action": "Your devotion is fanatical and your powers are clearly proof of your connection with the divine. Although you know that other gods bestow similar powers upon their own disciples, you either revile or pity those of “lesser” faiths. You gain access to the Zealous Striker faith trait."},
            ],
            "magus": [
                {"lower": "01", "upper": "10", "name": "A Mage without Magic", "action": "Early in your arcane training, you were exposed to antimagic. The powerlessness you felt from all of your magic being stripped away left you feeling desperate and helpless. You vowed to never be that helpless child again, to be strong in such moments, putting you on the path of the magus. You gain access to the Dispelled Battler combat trait."},
                {"lower": "11", "upper": "20", "name": "Conflicting Legacy", "action": "You were born to a family or clan with two great pedigrees: one of magic and one of battle. Unable to choose either path for fear of alienating a mentor or parent, you sought to master both. Your dedication to the blending of martial and magical has been so intense that your martial prowess feeds your arcane power. You gain access to the Arcane Revitalization magic trait."},
                {"lower": "21", "upper": "30", "name": "Ready for Anything", "action": "For you, the path of the magus is not about the fluid blend of disparate fields of study or conquering an insurmountable challenge, but the art of preparation for any obstacle that comes your way. A dedicated and logical person, you hone the magus affinity for operating all manner of magical devices from blind luck to a refined procedure. You gain access to the Pragmatic Activator magic trait."},
                {"lower": "31", "upper": "40", "name": "Lost Teacher", "action": "Your magus training was interrupted when you lost your teacher through the displacement of your family, lack of funds to continue schooling, or the teacher’s unexpected death. Despite this hardship, the time you spent with your mentor had already sown the seeds of your training and you’ve been able to continue on your own in the time since—ceaselessly seeking, reading, and learning from any magical text you can find. You gain access to the Self- Taught Scholar magic trait."},
                {"lower": "41", "upper": "50", "name": "Promise Keeper", "action": "Your dreams of becoming a wizard were cut short by unfortunatecircumstances, such as the death of your family or clan’s matriarch or patriarch, hostile invading forces, conscription in the army, and so on. This forced you to become a protector and stunted the growth of your studies. Though you have successfully blended the two disciplines, you still long for the unfulfilled potential of your career as a wizard. You gain access to the Cross-Disciplined magic trait."},
                {"lower": "51", "upper": "60", "name": "Shameful Secret", "action": "You come from either a proud military and martial background or a legacy of skilled wizards. When you developed an aptitude for two different powers viewed as incompatible by your family or teachers, it drove you to hide half of your abilities and to pretend full-blown competency with the other. Some of the tricks you used to perpetrate this deception have stayed with you to this day. You gain access to the Partial Protege magic trait."},
                {"lower": "61", "upper": "70", "name": "Spell Backfire", "action": "At some point during your magical training, you attempted to cast a spell and failed. But rather than being wasted, the arcane energy reabsorbed itself into your body, waiting to be reused in some other way. When the arcane energy exploded outwardthrough your staff or some other instrument you wielded, you received your first glimpse of the ways that magic could be repurposed—a versatility you retain today. You gain access to the Malleable Magic magic trait."},
                {"lower": "71", "upper": "80", "name": "Spell’s Edge", "action": "The first time you held a magic weapon and felt the thrum of arcane energy within, you knew that magic and melee were meant to be joined. Since that moment, magic weaponry has become symbolic of the most potent syntheses of your magus training, and your ability to create magical weapons and imbue mundane arms with magic still resonates with this focus. You gain access to the Bladed Magic magic trait."},
                {"lower": "81", "upper": "90", "name": "Vindication", "action": "You spent your formative years trying to convince combat instructors of the virtues of magic and arcane mentors of the importance of strength in arms, only to be mocked and exiled from both disciplines. Since then, you’ve wandered from master to master, honing your knowledge of both fields of study to show them all that not only have you achieved power, but you’ve also eclipsed all those who shunned you. You gain access to the Arcane Temper magic trait."},
                {"lower": "91", "upper": "100", "name": "What If", "action": "You don’t know the meaning of impossible. Everyone around you thinks you have your head stuck in the clouds, but you continually strive to achieve things that have never been accomplished before—perhapsthings that have never even been dreamed of. Bucking convention has brought numerous failures, but you’ve learned from your mistakes and are able to snatch victory over seemingly impossible odds. You gain access to the Inspired faith trait."},
            ],
            "monk": [
                {"lower": "01", "upper": "10", "name": "Bellicose Historian", "action": "What started as a scholar’s curiosity in exotic fighting styles bloomed into a fanatical desire not just to learn about martial arts, but to master them. You gain access to the Style Sage social trait."},
                {"lower": "11", "upper": "20", "name": "Classically Schooled", "action": "Training from dawn to dusk to hone every inch of your body into a fighting instrument, you studied with scores of other students in an academy or school dedicated to one specific martial art. You gain access to the Simple Disciple social trait."},
                {"lower": "21", "upper": "30", "name": "Elite Fighting Force", "action": "You learned your fighting skills as one of a highly trained group dedicated to a special purpose, such as guarding a temple or protecting a noble. Your training emphasized unobtrusive teamwork and unquestioned dedication to some higher purpose. You gain access to the Veiled Disciple social trait. "},
                {"lower": "31", "upper": "40", "name": "Tournament Champion", "action": "A shining example of your style or order, you’ve honed martial prowess through spirited and exciting competition. You gain access to the Martial Performer combat trait. "},
                {"lower": "41", "upper": "50", "name": "Lineage Holder", "action": "You are the senior or sole student of a great master. You rose to prominence early and received secret training in an art that is rare and exotic. Having achieved a strong foundation in the physical and metaphysical elements of this martial art, you’ve been designated the lore keeper for its history and traditions, and must now find new student or students to train. You gain access to the Martial Manuscript faith trait."},
                {"lower": "51", "upper": "60", "name": "Nature’s Disciple", "action": "Just as many great masters learned and crafted styles from the beauty and majesty of nature, your fighting style comes from time spent in the wild rather than from formal training. You have seen firsthand how the mantis hunts, how the tiger swipes, and how the crane beats its wings. Your observance of the natural world gave you the ability to extrapolate combat forms without traditional training. You gain access to the Nature’s Mimic combat trait."},
                {"lower": "61", "upper": "70", "name": "Secret Student", "action": "Your teacher and fellow students grew up as part of a conquered people, forbidden to train at war and forced to conceal the fighting style as seemingly harmless dances and your weapons as mundane tools… until the day you all you could rise up against tyranny. You gain access to the Hidden Hand combat trait."},
                {"lower": "71", "upper": "80", "name": "Spirit Teacher", "action": "Your martial training is both physical and metaphysical in nature, allowing you to unlock a higher state of consciousness that allows you to draw on the wisdom and power of long-dead masters. You gain access to the Spirit Sense faith trait."},
                {"lower": "81", "upper": "90", "name": "Unsuspecting Master", "action": "You were trained in martial arts through unorthodox methods such as seemingly menial tasks or training through conditioning exercises that promised the smallest scrap of food as a reward. Your nontraditional training makes you resourceful and clever. You gain access to the Surprise Weapon combat trait. "},
                {"lower": "91", "upper": "100", "name": "Wandering Savant", "action": "Although you’ve received some formal training in exotic combat, you decided to put your skills to the test and further your learning by wandering the wide world. You gain access to the Wanderer’s Shroud faith trait. 35"}
            ],
            "oracle": [
                {"lower": "01", "upper": "10", "name": "Battle", "action": "In your early years, a battle broke out near your home and you were embroiled in the fighting. At the end of the battle, you were the only one left standing, with scores of slain foes strewn at your feet. You gain access to the Veteran of Battle religion trait and the Battlefield Healer story feat. "},
                {"lower": "11", "upper": "20", "name": "Bones", "action": "In your formative years, you were entombed or buried alive in a graveyard. For days, you lay within the grave until your terror strangely turned to comfort. Since your return, you’ve been a different person: part mortal and part ghost, in possession of the powers of the dead. You gain access to the Fearless Defiance faith trait. "},
                {"lower": "21", "upper": "30", "name": "Flame", "action": "A great fire consumed you and laid waste to the environment around you. It might have devoured your family, friends, or an entire settlement, but you survived unburned as if the fire did not dare to touch you. Since that day, you’ve tamed fire as though it were a savage animal bent to your will. You gain access to the Flame–Touched magic trait."},
                {"lower": "31", "upper": "40", "name": "Heavens", "action": "The night sky’s mysteries have always enthralled you. But one night, while you gazed upon the stars, the perfect order of the universe revealed itself and you nearly went mad from the revelation. Since that night, you’ve possessed strange powers over the heavens. You gain access to the Starchild religion trait."},
                {"lower": "41", "upper": "50", "name": "Life", "action": "A terrible plague afflicted your homeland, killing thousands. You caught the disease, but instead of dying from it, you flourished. As you grew healthier, so did everyone you came into contact with. You gain access to the Sacred Touch faith trait."},
                {"lower": "51", "upper": "60", "name": "Lore", "action": "You were able to speak before any other child your age. Rather than stumble through the rudimentary syllables of language, you spoke in full sentences, reciting the greatest literature of many languages in story, song, and poem. Sometimes you spoke of events that had not yet come to pass, and the wise came to seek your counsel. Your gift came at a cost, however—though your knowledge is vast, your body and mind carry a curse. You gain access to the Scholar of the Great Beyond faith trait. "},
                {"lower": "61", "upper": "70", "name": "Nature", "action": "You became separated from your family and lost in the untamed wilderness for many days, months, or years. The wilderness took its toll, but when you finally emerged from the wild, you were its master. You gain access to the Child of Nature religion trait."},
                {"lower": "71", "upper": "80", "name": "Stone", "action": "You were buried beneath the earth, possibly after an avalanche or earthquake. For 3 days the earth covered you, until at the end of the third day you emerged from the mountain unharmed but not unchanged. You gain access to the Earth-Touched magic trait."},
                {"lower": "81", "upper": "90", "name": "Waves", "action": "You were swept beneath the surface of the water once. You should have drowned, but instead you washed up on shore after a long interval. You emerged from the depths afflicted with a strange condition but otherwise unharmed. You gain access to the Water-Touched magic trait."},
                {"lower": "91", "upper": "100", "name": "Wind", "action": "In your early years, you were caught in a powerful storm that ravaged the countryside, destroying everything in its path. Bolts of lightning struck your body and thunder deafened your ears, but when you came to the storm’s tranquil center, the tempest ceased. Since then you’ve had power over storms, though you still bear the mark of the great storm you endured. You gain access to the Storm-Touched magic trait."}
            ],
            "paladin": [
                {"lower": "01", "upper": "10", "name": "Divine Calling", "action": "An otherworldly agent of law and good—such as an angel, empyreal lord, or perhaps some other celestial envoy of the gods—tasked you to be a divine champion. You accepted the calling (maybe grudgingly) because ultimately you realize that the laws of destiny and one’s divine calling cannot be denied. In return, that celestial agent watches over you and makes sure you can fully realize your destiny and meet the course that has been set for you by a higher power. You gain access to the Blessed faith trait."},
                {"lower": "11", "upper": "20", "name": "Dread Penance", "action": "You, or perhaps your family, owe a debt for some past wrongdoing or vice. Maybe you made deals with some unscrupulous loan sharks during a gambling binge or your not-so-distant ancestors were responsible for the persecution of a marginalized group of people. Whatever the offense, your past action hangs over your head and fills you with guilt. You’ve taken a solemn oath to make good on this past misdeed. Only then will you feel like your life is truly worthwhile. You gain access to the Oathbound faith trait."},
                {"lower": "21", "upper": "30", "name": "Holy Epiphany", "action": "Your faith and purpose came in a brilliant flash of insight. Maybe you suddenly realized that evil can be stopped only with vigilance and deliberate action, or maybe an epiphany showed you that the innocent need protection from corrupt forces for good to flourish in the world. Whatever the nature of your epiphany, it guides your actions and gives you insights others lack. You gain access to the Inspired faith trait."},
                {"lower": "31", "upper": "40", "name": "Zealous Devotion", "action": "Maybe your faith was not popular among those around you during your youth. Maybe you have strange or controversial views regarding your religion, and the other members of your congregation find yourpractices bizarre or insulting. Whatever the case, your faith is constantly being questioned regardless of your obviously pious nature, and such persecution only serves to embolden your zeal. You gain access to the Indomitable Faith faith trait."},
                {"lower": "41", "upper": "50", "name": "Moral Debt", "action": "The world and all things material are intrinsically corrupt. All creatures are born with a moral debt, and only by fighting evil, upholding law, and championing the common good can one be truly free of that corruption. You work every day to pay off this debt and move those around you to do the same. You gain access to the Principled faith trait and the Fearless Zeal story feat."},
                {"lower": "51", "upper": "60", "name": "Mark of Faith", "action": "You were born with the mark of your faith. Maybe at some point you rebelled against such branding, or it could be you’ve always accepted the mark as an indicator of your destiny. In either case, it was a harbinger of the paladin path. You gain access to the Birthmark faith trait."},
                {"lower": "61", "upper": "70", "name": "Righteous Mentor", "action": "A paladin of note and great honor took you under her wing and taught you many things. She taught you how to adhere to your oath with grace and dignity, and how the simple act of doing so was enough to earn the respect and devotions of others. You gain access to the Natural-Born Leader social trait. "},
                {"lower": "71", "upper": "80", "name": "Warrior of Truth", "action": "Early in your life, you learned that the philosophies of law and good not only create the best society but also reveal truths that would otherwise remain obscured. You are rarely clouded by pure dogma; instead you’re unafraid to question and create your own path toward truth, justice, and righteousness. You gain access to the Skeptic magic trait."},
                {"lower": "81", "upper": "90", "name": "Knight-Errant", "action": "You know that evil stalks the world, and only one who is dedicated to the spread of good can stop these vile forces. To make sure fiends and wrongdoers do not go unpunished, you adopted the code of the paladin in order to travel the land and eradicate the wicked. Your goal is the relentless pursuit to seek out evil and put it down. You gain access to the Seeker social trait."},
                {"lower": "91", "upper": "100", "name": "Terrible Secret", "action": "You know a terrible secret about an ancient evil that threatens your homeland or perhaps even the entire world. You have sworn to keep this secret quiet lest it gain power in the retelling, but you also must work to thwart the evil whenever possible. This at times contradictory path has led you many places in your travels, and the knowledge you have gleaned from your adventures continues to serve you well in your fight against the wicked. You gain access to the Scholar of the Great Beyond faith trait."}
            ],
            "ranger": [
                {"lower": "01", "upper": "10", "name": "An Eye for an Eye", "action": "The choice of your favored enemy was nothing more than simplevengeance. Perhaps you lost a loved one, family, or even a whole community to the vicious rampaging of a ferocious beast, or saw your entire homeland swallowed up by monstrous hordes. No matter the reason, your drive to hunt down and destroy creatures of their kind won’t be sated so long as even one lives. You gain access to the Tireless Avenger faith trait and the Foeslayer story feat."},
                {"lower": "11", "upper": "20", "name": "Ancient Hatred", "action": "The history of your people is a saga of struggle against another race. Though common among elves and orcs or dwarvesand giants, many different races can have such longstanding animosity. Your choice of a favored enemy was a simple outgrowth of this racial antipathy. You gain access to the Knowing the Enemy social trait."},
                {"lower": "21", "upper": "30", "name": "Big Game Hunter", "action": "Whether you sought out the thrill of hunting large prey or merely grew up in the shadows of creatures large enough to crush an entire village with a careless step, you have learned how to be quick and to size up weaknesses in those behemoths who seem to have none. You gain access to the Evasive Sting combat trait."},
                {"lower": "31", "upper": "40", "name": "Blood Cleansing", "action": "Either you have forsaken your kinsfolk or they have forsaken you. Maybe you grew up among a wicked or corrupt people who you needed to escape, or maybe they exiled you for being different. Whatever the case, your own kind are now your favored enemy, much to your continued chagrin or morbid amusement. You gain access to the Scarred Descendant combat trait."},
                {"lower": "41", "upper": "50", "name": "Bounty Hunter", "action": "You have always been good at finding and extracting people from their hidey-holes. Most likely you hunt humanoids of either your own subtype or of one common to your region. You gain access to the Easy Way or the Hard Way combat trait and the Town Tamer story feat."},
                {"lower": "51", "upper": "60", "name": "Detached Observer", "action": "You set yourself apart with a pall of cold logic that allows you to see weaknesses in members of your own racethat you strive not to succumb to yourself. Most likely, you pick your own race as your dominant favored enemy, and you excel as a spy or assassin paid to capture enemies of your organization. You gain access to the Cold and Calculating combat trait."},
                {"lower": "61", "upper": "70", "name": "Divine Purpose", "action": "Not all those who hear the voices of the gods can distill that echo into magical power like clerics or oracles. These whispers of belief encouraged you to track and hunt those creatures who pose the greatest threat to your faith. Perhaps you’re a good ranger who hunts the undead or devotes effort to slaying fiends, or you could choose to target good fey and celestials, emboldened by divine invective. You gain access to the Faith’s Hunter combat trait."},
                {"lower": "71", "upper": "80", "name": "Nightmare Slayer", "action": "From an early age, you stood up against some of the most terrifying creatures imaginable, facing off against creatures most mortals only dream of in their wildest nightmares. Possibly hailing from lands besieged by dragons or plagued by the living dead, you are not only resistent to the fear such creatures normally engender, but you live to show your enemies the face of the unafraid. You gain access to the Fearless Defiance faith trait."},
                {"lower": "81", "upper": "90", "name": "Opportunist", "action": "You are an expert in creatures both common and exotic, particularly in terms of what valuable items you can harvest from their remains. The natural world exists for the benefit of those who know what to take, and you have learned how to scavenge pelts, toxins, and even rare spell components from your defeated foes. You might pick animals, magical beasts, or dragons as your dominant favored enemy—or humanoids if you’re a particularly grisly trophy collector. You gain access to the Harvester social trait."},
                {"lower": "91", "upper": "100", "name": "Survivalist", "action": "You were orphaned at a young age and left to fend for yourself in the wilds, or simply lived a life at the edge of society that required a constant scrabble for basic existence. You probably have animals or magical beasts (the edible ones) as your dominant favored enemy, and are adept at lying in wait and springing into action. You gain access to the Hunter’s Knack combat trait."}
            ],
            "rogue": [
                {"lower": "01", "upper": "10", "name": "Gang War", "action": "Growing up in the backstreets of an urban jungle, you were forced to choose between surviving as a predator or suffering as prey. You affiliated with a guild, gang, or group of thieves and thugs, carrying out illicit missions to further their interests and sabotage those of rival gangs. You gain access to the Dirty Fighter combat trait. "},
                {"lower": "11", "upper": "20", "name": "Greed", "action": "No matter how much or little you had growing up, it was never enough. You discovered a talent for lifting items and coin purses from others’ belts. The world always provided for you, and when you saw something you wanted, you learned to take it. You gain access to the Ambitious social trait and the Thief of Legend story feat."},
                {"lower": "21", "upper": "30", "name": "Poverty", "action": "In your youth, you rarely had enough food to keep from starving. Poverty and hunger forced you to steal to survive, or to help your loved ones survive. You gain access to the Poverty-Stricken social trait."},
                {"lower": "31", "upper": "40", "name": "Spy", "action": "You’ve always had an innocent expression and a silver tongue, so naturally you were recruited as a spy during your childhood. You could have come from any social class; you might have gathered information as an urchin on the streets or acted as servant to one lord while you reported to another. You gain access to the Fast Talker social trait. "},
                {"lower": "41", "upper": "50", "name": "The Kill", "action": "You killed someone when you were relatively young. You might have done it in selfdefense, in anger, or as part of an initiation ritual. And it was easier than you suspected. Afterward, some individuals or groups started paying you to kill for them, and you made a lucrative career of assassination. You gain access to the Killer combat trait and the Innocent Blood story feat. "},
                {"lower": "51", "upper": "60", "name": "The Trained", "action": "Your early talent for feats of agility and acrobatics garnered you an experienced mentor. Impressed by your natural ability, this mentor taught you how to fight, dodge, and throw. He may have been a master thief, circus performer, fencing master, or swashbuckling pirate. You gain access to the Mentored social trait."},
                {"lower": "61", "upper": "70", "name": "Outlawed", "action": "For reasons just or unjust, you became a fugitive at an early age. You have lived outside the light of society for some time, risking capture or punishment whenever you need to break the law again. You gain access to the Criminal social trait. See the Crime and Punishment sidebar on page 23. "},
                {"lower": "71", "upper": "80", "name": "Thrill Seeker", "action": "As an adolescent, you and your friends took turns daring one another to take risks, each new challenge inspiring greater excitement. Since then, you’ve become an adrenaline junkie, performing dangerous tasks in order to chase that high. You gain access to the Acrobat social trait. "},
                {"lower": "81", "upper": "90", "name": "Henchman", "action": "You’ve always worked for someone else. You do what you are told and in return you are appreciated by the boss, rewarded, and paid. You gain access to either the Oathbound faith trait or the Child of the Streets social trait. "},
                {"lower": "91", "upper": "100", "name": "Scout", "action": "Your natural ability turned into employment in an elite squad of stealthy infiltrators. You penetrate enemy lines, gather information, deliver coded messages, and sabotage enemy supplies. You likely work for a private individual or military order. You gain access to the Canter social trait. 39"}
            ],
            "sorcerer": [
                {"lower": "01", "upper": "10", "name": "Awakened Moment", "action": "At some point, the dormant power within you awakened with a fright. It might have been the first time you came close to a dragon, celestial, or genie. Or the moment could have come at the grave of a great ancestor or in a lush and verdant glen. What slumbered in your blood has never quieted, and you frequently draw upon the inspiration of your awakening. You gain access to the Ascendant Recollection magic trait. "},
                {"lower": "11", "upper": "20", "name": "Dreams of Something Different", "action": "The first hints of your exceptional nature came to you as fragments of remembered dreams or split-second visions. As these episodes increased in both frequency and clarity, they unlocked a power in your blood you didn’t know you had. You gain access to the Strength Foretold magic trait."},
                {"lower": "21", "upper": "30", "name": "Failed Wizard", "action": "Although your arcane aptitude was evident at an early age, you were pushed toward wizardry as the conduit for your magic. While you never mastered magic in this fashion, your time spent studying arcane tomes gave you obscure but often pertinent knowledge. You gain access to the Reluctant Apprentice magic trait. "},
                {"lower": "31", "upper": "40", "name": "One of a Kind", "action": "You know that sorcerous power comes from the blood, but as far as you know, none of your ancestors possessed your gift. You keep searching for the reason for your magical powers, which has led you to greater proficiency with divinations and a keen interest in the workings of your bloodline. You gain access to the Knowledgeable Caster magic trait."},
                {"lower": "41", "upper": "50", "name": "Outcast", "action": "Driven away by your family and people, your arcane gifts have always inspired both fear and revulsion. You’ve become adept at spotting hostility in others who would despise you for your power. You gain access to the Outcast’s Intuition magic trait."},
                {"lower": "51", "upper": "60", "name": "Proud Heritage", "action": "You hail from a long line of prominent sorcerers with even more prominent ancestral features. Your acceptance of your bloodline brings with it a pride and imposing mien that becomes amplified among others. You gain access to the Imposing Scion social trait. "},
                {"lower": "61", "upper": "70", "name": "Shameful Heritage", "action": "The obvious hints of your heritage were a source of shame to your family. No matter the manifestation of your differences, being a pariah taught you to practice your arts in secret. You gain access to the Unseen But Not Undone magic trait."},
                {"lower": "71", "upper": "80", "name": "Too Lucky", "action": "You’ve always had a knack for getting out of trouble. This sense of preternatural good fortune led to your inquiries into magic and the discovery of your own sorcerous powers. You gain access to the Fate’s Favored faith trait. "},
                {"lower": "81", "upper": "90", "name": "Unharmed", "action": "At some point in your early life, you were exposed to something dangerous like a fall into stormy waters or a spell cast your way. But instead of dying, you survived entirely unscathed. This experience either first hinted at or confirmed that you were different, marking the first step on your path to sorcery. You gain access to the Unscathed magic trait."},
                {"lower": "91", "upper": "100", "name": "Wild Talent", "action": "The magic in your blood was always as uncontrollable as it has powerful. You were forced to learn control at an early age, either out of fear that your powers might hurt someone or out of remorse once they had. This relentless vigilance and self-control gave you tremendous focus and arm you with strategic methods to redirect those wild energies coursing through you. You gain access to the Volatile Conduit magic trait."}
            ],
            "summoner": [
                {"lower": "01", "upper": "10", "name": "Abandoned", "action": "At some point early on, you were abandoned. This sense of loss always made you feel as though something were missing. The discovery of your eidolon and your subsequent mutual bond fostered in you the sense of companionship you’ve always longed for. You gain access to the Greater Link magic trait."},
                {"lower": "11", "upper": "20", "name": "Caretaker", "action": "You met your eidolon or another outsider in a moment of danger. Wounded or lost, the creature crashed between worlds and ended up at your feet. In helping this panicked, otherworldly creature, you felt a link to it. You can still draw on the inspiration from that moment when dealing with others, outsider or not. You gain access to the Destined Diplomat social trait. "},
                {"lower": "21", "upper": "30", "name": "Forced to Confront Your Own Limits", "action": "The bond with your eidolon first manifested when you saw someone in danger and were unable to help. Your feeling of desperation and frustration at the limits of your own form attracted your eidolon—whether or not it was able to help you in that moment. This need to exceed your own limitations continues to manifest in the evolution of your eidolon. You gain access to the Desperate Speed magic trait. "},
                {"lower": "31", "upper": "40", "name": "Imaginary Friends", "action": "As a child, you created imaginary playmates that you felt truly spoke to and heard you. These whispers were actually the wandering thoughts of outsiders trying to make contact, knowing that someday you would have an affinity with their kind. By the time you learned to summon your eidolon and other outsiders, these whispered fragments had turned themselves into an understanding of the language of outsiders. You gain access to the Unintentional Linguist social trait. "},
                {"lower": "41", "upper": "50", "name": "Monophobic", "action": "You were always terrified of being alone when you were younger, so you surrounded yourself with others. But it was establishing this link to your eidolon that ultimately allowed you to overcome this debilitating fear. Now, even when your eidolon is not with you, you know it’s never far away; conversely, when you have your true friend and companion with you, you are far better for it. You gain access to the Perpetual Companion faith trait."},
                {"lower": "51", "upper": "60", "name": "Outsider’s Lineage", "action": "You have the blood of outsiders in your veins. This lineage either laid dormant until your powers manifested or was a storied part of your family heritage. Regardless, your connection to the planes has always been potent. No matter what other subjects you studied, your understanding of planar matters has always seemed instinctive or innate rather than the product of memorization and study. You gain access to the Planar Savant faith trait. "},
                {"lower": "61", "upper": "70", "name": "Pick On Someone Your Own Size", "action": "When you were young, you or others you cared for were bullied by agents of an oppressive power. At some point, you stood up against one or many of the tyrants, feeling that somehow you were bigger, stronger and more resilient than you actually were. You later realized that this support was the first trace of your eidolon trying to make contact with you. You can still draw on that power today, making your aura strong and your presence powerful. You gain access to the Twinned Presence magic trait. "},
                {"lower": "71", "upper": "80", "name": "Raising Gone Wrong", "action": "You lost someone important to you. Through means, luck, or simple pity, you had the chance to raise that person from the dead, but something went wrong with the spell and the raising did not occur… at least not as planned. Your lost friend or kin’s soul bonded with a powerful outsider on the other side of the veil and returned to you as your eidolon. Possessed of some of the memories and experiences of the life you spent together, your companion feels a stronger devotion than even most others of its kind. You gain access to the Loyalty across Lifetimes faith trait. "},
                {"lower": "81", "upper": "90", "name": "Saved by Another", "action": "Someone or something saved you from great danger. It might have been a family member who saved youfrom a precipitous fall or adventurers who saved you from a marauding monster. Your sense of gratitude fostered a strong sense of protectiveness, particularly when defending your allies or your eidolon. You gain access to the Dedicated Defender combat trait."},
                {"lower": "91", "upper": "100", "name": "Stranger in Your Own Skin", "action": "You have felt awkward and uncomfortable your entire life, as if you were born into a body that wasn’t truly yours. Your quest to become what you’ve always felt you should be led you to your eidolon, in which you found what you see as your own idealized form. The link that you and your eidolon share allows you to escape some of the inherent limits of your form from time to time. You gain access to the Linked Surge magic trait."}
            ],
            "witch": [
                {"lower": "01", "upper": "10", "name": "Apprenticed", "action": "Your development was guided by a mortal or magical creature, such as a wisewoman, hag, dryad, elf, or pixie, who instructed you in the arts of spellcasting, potions, charms, and hexes. You gain access to the Hedge Magician magic trait. "},
                {"lower": "11", "upper": "20", "name": "Desperate Accident", "action": "You lived an ordinary life until one day catastrophe struck and you called out desperately to any power that would come to your aid. The entity that gave you this power might be benevolent or sinister in nature, but ever since you called it, the being remains close to you. You gain access to the Reckless combat trait. "},
                {"lower": "21", "upper": "30", "name": "Forbidden Lore", "action": "In your youth, there was something you fervently desired—perhaps love, wealth, or revenge. But no matter how hard you tried, you couldn’t obtain that which you coveted. Only when you turned your eye to ancient tomes and ruins and experimented with strange powers beyond your comprehension were you able to get what you wanted. You gain access to the Dangerously Curious magic trait."},
                {"lower": "31", "upper": "40", "name": "Found Familiar", "action": "When you were young, you happened upon a strange animal with whom you forged an instant bond. It instructed you in casting spells and became your closest, most trusted companion. You gain access to the Animal Friend gnome race trait (which you may take regardless of your race)."},
                {"lower": "41", "upper": "50", "name": "Gifted", "action": "You received your magical ability as a gift from a supernatural being, such as an angel, devil, god, ancient dragon, or powerful fey. This creature expects you to act on its behalf in exchange for the power it loaned you. You gain access to the Magical Knack magic trait."},
                {"lower": "51", "upper": "60", "name": "Inborn Power", "action": "Many fey creatures are born with the innate ability to cast spells, and either because of having fey blood in your lineage or being born near fey lands you too were gifted this talent. You gain access to the Magical Lineage magic trait. "},
                {"lower": "61", "upper": "70", "name": "Initiated", "action": "When you came of age, a coven of witches initiated you into their circle because you showed great promise. After your initiation ritual, you changed on a fundamental level. You gain access to the Mentored social trait."},
                {"lower": "71", "upper": "80", "name": "Invocation", "action": "When you reached adolescence, you wanted power and you wanted it immediately. You didn’t have the patience or tolerance to endure endless years of boring theory and formal magical training, so you offered up your body and soul in an invocation to an entity that would grant your desire. You gain access to the Oathbound faith trait. "},
                {"lower": "81", "upper": "90", "name": "Possessed", "action": "For reasons you may never understand, an otherworldly entity took possession of you in your formative years. Since then, your mortal body has been the vessel for this mysterious power. You gain access to the Possessed magic trait. "},
                {"lower": "91", "upper": "100", "name": "Unknown", "action": "The circumstances by which you gained your powers are confusing, even to you. You may have received them when you stepped into a enchanted land or touched a strange artifact, or perhaps you simply awoke one day with them. You strive to find the meaning of your powers, as they drive your life in unforeseen directions. You gain access to the Seeker social trait."}
            ],
            "wizard": [
                {"lower": "01", "upper": "10", "name": "Brains over Brawn", "action": "You were bullied or excluded throughout your life because you lacked physical power and fighting prowess. To compensate, you turned to transmutation magic. Your practice and perseverance has granted you skill with spells of that school. You gain access to the Tenacious Shifting magic trait."},
                {"lower": "11", "upper": "20", "name": "Dangerous Intellect", "action": "At a young age, those around you, whether family or friends, realized that your intellect was more than mereprecociousness. As your sense of curiosity became dangerous, those responsible for you pushed you into studying magic in the hopes that you would find infinite puzzles to solve. You gain access to the Tireless Logic social trait. "},
                {"lower": "21", "upper": "30", "name": "Fitting In", "action": "You hail from a long line of sorcerers or from a community known for its natural affinity for magic. Your manifestation of wizardly talent, as opposed to blood-based sorcery, caused you to hide those talents at a young age, and then to disguise them as sorcery to the best of your ability later. You still retain some tricks from this early misdirection. You gain access to the Shrouded Casting magic trait."},
                {"lower": "31", "upper": "40", "name": "Gifted Pride", "action": "Your affinity for magic has made you somewhat crass and arrogant, though some find your blunt disposition charming or worthy of respect. The air of superiority surrounding you is palpable and allows you to use you intellect to cow others at times when lesser individuals might barely get a word in. You gain access to the Bruising Intellect social trait."},
                {"lower": "41", "upper": "50", "name": "Mortality’s Mirror", "action": "Your childhood innocence ended the moment you realized that someday you would die. This revelation may have come to you at the deathbed of a beloved relative, during a bloody siege against your homeland, or via some other eye-opening event. You have spent the rest of your life trying to master magic in order to change this most universal fate from stealing your last breaths away. You now have a keen eye for the magic of death and for discerning answers to ancient riddles. You gain access to the Greater Purpose magic trait. "},
                {"lower": "51", "upper": "60", "name": "Righting a Wrong", "action": "In your youth, you witnessed an event that changed the fate of many or of a tragic few, such as a natural disaster (like a flood, hurricane, or fire) or simply a friend’s unfortunate accident during a childish game. You were burdened by the knowledge that magic— perhaps even a spell as simple as feather fall— could have changed the course of lives. You’ve dedicated yourself to magic in an effort to make sure that you are never subject to the capricious whims of fate again. You gain access to the Desperate Resolve magic trait."},
                {"lower": "61", "upper": "70", "name": "Storied Lineage", "action": "Your family name is synonymous with wizardry of the highest caliber. Magic was your destined path before you were even born, and both your family and those who knowof your lineage have supported this notion your entire life, granting you an unwavering confidence in your talents. While the pursuit of arcane mastery is never easy, you are driven to live up to the expectations set forth for you. You gain access to the Resilient Caster magic trait. "},
                {"lower": "71", "upper": "80", "name": "The Way Things Work", "action": "Magic came alive the first time you held a magic item. The notion of extraordinary magic resting within something as seemingly ordinary as a ring, amulet, or stoppered vial changed the way you viewed the world, and ever since you’ve possessed a sense of curiosity and awe for all magic items. You gain access to the Magic Crafter magic trait and the Eldritch Researcher story feat."},
                {"lower": "81", "upper": "90", "name": "Unpaid Debt", "action": "Someone saved your life at great cost. Whether through healing magic or basic heroism, your savior gave her life that you might live. Striving to repay this debt has led you to study magic, the only thing capable of making enough of a difference in the world to make you feel that you have earned the gift given to you. This sense of purpose has engendered an unshakable resolve in you. You gain access to the Principled faith trait."},
                {"lower": "91", "upper": "100", "name": "Unquenchable Hunger for Knowledge", "action": "For most wizards, magic is an end to which all studies strive, but not for you. For you, magic is a means to an end—and that end is knowledge. Your desire to know all of the secrets of the world requires the ability to cross continents in a blink, ride the winds, breathe water like a fish, and survive any kind of trap. Your unquenching quest for knowledge has made you ever ready for danger. You gain access to the Eldritch Delver magic trait."}
            ]
        };
        var influentialAssociates = [
            {"lower": "01", "upper": "05", "name": "The Hunter", "action": "This person was a lone wolf who nonetheless cautiously allowed you to become a member of her solitary pack. She taught you how to thrive on your own in spite of the many perils and natural dangers of your native environment. You gain access to the Child of Nature religion trait."},
            {"lower": "06", "upper": "10", "name": "The Pariah", "action": "You met a disgraced exile, and found in his words and attitudes something that spoke to you. What once seemed true in your religion, society, or family began to appear false the more time you spent with this person, and you quickly learned not to trust everyone you meet—especially among those who would claim to be most deserving of it. You gain access to the Suspicious social trait."},
            {"lower": "11", "upper": "15", "name": "The Confidante", "action": "There was a person in your life to whom you could tell anything. She knows your deepest secrets and your emotional weaknesses and vulnerabilities just as you know hers. This person could be a valuable friend and a frightening enemy, so you make sure to never divulge her secrets or give her a reason to do so with yours. You gain access to the Trustworthy social trait."},
            {"lower": "16", "upper": "20", "name": "The Mentor", "action": "You had a mentor who taught you everything worth knowing about life. This could have been the person who taught you the heroic abilities you possess, or simply a kindred spirit who helped form your worldview. You gain access to the Mentored social trait."},
            {"lower": "21", "upper": "25", "name": "The Mercenary", "action": "With this person, there was always a cost. No deed was done making a trade for something of equal or greater value. Whether this individual’s actions tended toward good, evil, or pure balance, he was always fair in his dealings. You respected this trait and it influenced your own philosophy. You gain access to the Mercenary social trait."},
            {"lower": "26", "upper": "30", "name": "The Lover", "action": "You had a romantic connection in your adolescent years, and this person deeply influenced your personality. Perhaps this was a first love, a casual partner you grew close to, or the one who got away. The experience bolstered your confidence in romantic interactions even though you often find your thoughts still straying toward that special someone from so long ago. You gain access to the Charming social trait and the True Love story feat. Roll a d12 instead of a d20 on Table 1–56: Romantic Relationships. "},
            {"lower": "31", "upper": "35", "name": "The Fool", "action": "One of your close associates was a clown who mocked propriety and custom, instead engaging in wild and somewhat random actions from time to time. After a while, you learned that there was simple wisdom to this foolery—a careless worldview that taught you how to cast off concern. You gain access to the Unpredictable social trait."},
            {"lower": "36", "upper": "40", "name": "The Liege Lord", "action": "You became close with someone you were bound to serve, be it a minor lord or lady, master (in the case of a slave), prince or princess, king or queen. Though this person held power over you, she held you closer than a subject or servant. As a result, you’re used to dealing with and being close to power, and your name is known among the ranks of the privileged. You gain access to the Influence social trait. "},
            {"lower": "41", "upper": "45", "name": "The Relative", "action": "There is a relative you were especially close to. To you, this person was the meaning of family. He helped shepherd you into adulthood, teaching you everything you know about the world. You are bound to this person or his memory, and you strive to keep a promise, vow, or oath that you made to him. You gain access to the Oathbound faith trait."},
            {"lower": "46", "upper": "50", "name": "The Boss", "action": "You once gained employment under an organized and powerful individual with farreaching influence. When the boss was present,everyone listened. This could have been a military commander, tribal chieftain, guild leader, or gang leader. From the boss, you learned how to make people listen, make them see reason, and keep them in line. You gain access to the Natural-Born Leader social trait."},
            {"lower": "51", "upper": "55", "name": "The Academic", "action": "One of your associates had such a lust for knowledge that she could never be satisfied with simple answers or obvious solutions. This desire for knowledge frequently exceeded her need for companionship, but you were the single exception. Through this association you developed a keen appreciation for numbers, geometry, logic, hard study, and problem solving. You gain access to the Mathematical Prodigy magic trait."},
            {"lower": "56", "upper": "60", "name": "The Criminal", "action": "One of your associates committed crimes regularly. He regaled you with many stories of daring robberies and break-ins—and perhaps even murders. You learned most of what you know of the criminal element from him, andhe trusted you as a friend. You gain access to the Canter social trait."},
            {"lower": "61", "upper": "65", "name": "The Seer", "action": "You were close to a person who claimed to see the future—perhaps an oracle, seer, prophet, or merely some festival charlatan. Whether they’re true or a trick, you’ve seen visions of distant places and of times that may come to pass. The seer’s influence either made you into an optimist with a drive to change the future or a fatalist resigned to accept it. You gain access to the Scholar of the Great Beyond faith trait. "},
            {"lower": "66", "upper": "70", "name": "The Mystic", "action": "You were especially close to a holy person in your community who fundamentally changed your life by opening your eyes to the incredible powers that exist beyond the natural world. Regardless of whether you follow a faith, certain religious artifacts, rituals, and texts played a large part in making you the person you are. You gain access to the Child of the Temple faith trait."},
            {"lower": "71", "upper": "75", "name": "The Dead One", "action": "One of your greatest influences was a sentient undead creature, such as a ghost, lich, grave knight, wraith, or vampire. You encountered it on several occasions and survived… mostly unscathed. Through this strange relationship you learned of its mortal life, giving you perspective on your own life. You gain access to the Deathtouched bloodline race trait and the Glimpse Beyond story feat. "},
            {"lower": "76", "upper": "80", "name": "The Fiend", "action": "In your adolescent years, you dealt with or were possessed by a fiend who lent you raw power at a time of great need. This experience tainted your body and mind and changed your life. Some part of thedemon remains inside you like an old friend, influencing you toward destructive ends. You gain access to the Possessed magic trait and the Damned story feat."},
            {"lower": "81", "upper": "85", "name": "The Wanderer", "action": "You knew someone who traveled from place to place with the changing of the wind, such as a minstrel, convict, merchant, outcast, soldier, or sailor. This person brought you wondrous mementos and told you of all the places he had traveled and the people who lived there, inspiring a wanderlust within you. You gain access to the Worldly social trait."},
            {"lower": "86", "upper": "90", "name": "The Champion", "action": "You were close to someone who excelled at athletic endeavors and tests of strength or skill. Through your friendship or rivalry, you developed the competitive spirit that continues to drive you in everything you do. You gain access to the Ambitious social trait. "},
            {"lower": "91", "upper": "95", "name": "The Craftsperson", "action": "One of your major influences cherished perfection in every form of art. This person might have followed any path in life, from craftsperson to artist to assassin. From this person you developed a disciplined mind, a solitary focus, and the ability to create something useful and beautiful. You gain access to the Artisan social trait."},
            {"lower": "96", "upper": "100", "name": "Well-Connected Friend", "action": "In your circle of disparate associates, there was someone everyone knew. This person collected friends like trophies, and she had contacts in every social or professional circle. Through this connection, you continue to meet and associate with a wide variety of people in every walk of life. You gain access to the Well- Informed halfling race trait (which you may take regardless of your race).regardless of your race)."}
        ];
        var conflicts = [
        	{"index": "1", "name": "Minor Failure", "action": "You failed a friend, family member, or loved one who depended on you to fulfill an important task.", "points": "1"},
        	{"index": "2", "name": "Petty Crime", "action": "You committed a minor crime, like vandalism, trespassing, or mischief.", "points": "1"},
        	{"index": "3", "name": "Told a Lie", "action": "You deliberately made someone believe something that was not true to further your own goals.", "points": "1"},
        	{"index": "4", "name": "Broke a Promise", "action": "You swore an oath or vow that was important to someone else, but you did not keep your promise.", "points": "1"},
        	{"index": "5", "name": "Humiliation", "action": "You publicly humiliated or scandalized someone with either true or slanderous information.", "points": "2"},
        	{"index": "6", "name": "Negligence", "action": "You caused someone else to suffer by your own inaction, disregard, or excessive recklessness.", "points": "2"},
        	{"index": "7", "name": "Minor Theft", "action": "You stole several small or inexpensive items that belonged to someone else.", "points": "2"},
        	{"index": "8", "name": "Seducer", "action": "You tempted or manipulated someone to act in accordance with your whim, careless of whether it was in their own best interests.", "points": "3"},
        	{"index": "9", "name": "Cheater", "action": "You broke a rule, law, contract, or agreement for your own gain.", "points": "3"},
        	{"index": "10", "name": "Betrayal", "action": "You betrayed someone who trusted you.", "points": "4"},
        	{"index": "11", "name": "Malign Associates", "action": "You allied with a destructive creature, organization, or individual.", "points": "4"},
        	{"index": "12", "name": "Destroyed a Reputation", "action": "You deliberately ruined the honor, reputation, or fortunes of another individual or group.", "points": "5"},
        	{"index": "13", "name": "Major Theft", "action": "You stole expensive items.", "points": "5"},
        	{"index": "14", "name": "Corrupted an Innocent", "action": "You counseled an otherwise innocent person who trusted you, toward adverse choices.", "points": "6"},
        	{"index": "15", "name": "Blackmailed", "action": "You used sensitive knowledge or threats to force someone’s cooperation.", "points": "6"},
        	{"index": "16", "name": "Destruction", "action": "You destroyed someone else’s property.", "points": "6"},
        	{"index": "17", "name": "Armed Robbery", "action": "You robbed someone with the threat of violence.", "points": "6"},
        	{"index": "18", "name": "Violent Crime", "action": "You beat, assaulted, or mutilated someone.", "points": "7"},
        	{"index": "19", "name": "Murder", "action": "You killed someone.", "points": "8"},
        	{"index": "20", "name": "Mass Murder", "action": "You killed several sentient beings.", "points": "12"}
        ];
        var conflictSubject = [
        	{"index": "1", "name": "Commoner"},
        	{"index": "2", "name": "Merchant"},
        	{"index": "3", "name": "Tradesperson"},
        	{"index": "4", "name": "Artisan"},
        	{"index": "5", "name": "Civic or military official"},
        	{"index": "6", "name": "Noble"},
        	{"index": "7", "name": "Leader"},
        	{"index": "8", "name": "Clergy"},
        	{"index": "9", "name": "Soldier or warrior"},
        	{"index": "10", "name": "Spellcaster"},
        	{"index": "11", "name": "Scoundrel"},
        	{"index": "12", "name": "Child or young person (increase your CP by 1)"},
        	{"index": "13", "name": "Family member"},
        	{"index": "14", "name": "Close friend"},
        	{"index": "15", "name": "Lover or former lover (roll a d12 instead of a d20 on Table 1–56: Romantic Relationships)"},
        	{"index": "16", "name": "Enemy or rival"},
        	{"index": "17", "name": "Gangster or underworld figure"},
        	{"index": "18", "name": "Adventurer"},
        	{"index": "19", "name": "Humanoid monster"},
        	{"index": "20", "name": "Non-humanoid monster"}
        ];
        var conflictMotivation = [
        	{"index": "1", "name": "Justice", "points": "1"},
        	{"index": "2", "name": "Love", "points": "1"},
        	{"index": "3", "name": "Pressured or Manipulated", "points": "2"},
        	{"index": "4", "name": "Religion", "points": "2"},
        	{"index": "5", "name": "Family", "points": "3"},
        	{"index": "6", "name": "Money", "points": "3"},
        	{"index": "7", "name": "Jealousy", "points": "4"},
        	{"index": "8", "name": "Hatred or Malice", "points": "4"},
        	{"index": "9", "name": "Pleasure", "points": "5"},
        	{"index": "10", "name": "Amusement or Entertainment", "points": "5"}
        ];
        var deityTraits = [
        	{"Abadar": "Eyes and Ears"},
        	{"Asmodeus": "Asmodean Demon Hunter"},
        	{"Cayden Cailean": "Fortified Drinker"},
        	{"Calistria": "Calistrian Courtesan"},
        	{"Desna": "Starchild"},
        	{"Erastil": "Patient Optimist"},
        	{"Gorum": "Veteran of Battle"},
        	{"Gozreh": "Child of Nature"},
        	{"Iomedae": "Divine Warrior"},
        	{"Irori": "Wisdom in the Flesh"},
        	{"Lamashtu": "Voice of Monsters"},
        	{"Nethys": "Magic Is Life"},
        	{"Norgorber": "Shadow Whispers"},
        	{"Pharasma": "Undead Slayer"},
        	{"Rovagug": "Wrecking Wrath"},
        	{"Sarenrae": "Flame of the Dawnflower"},
        	{"Shelyn": "Ear for Music"},
        	{"Torag": "Guardian of the Forge"},
        	{"Urgathoa": "Corpse Cannibal"},
        	{"Zon-Kuthon": "Pain Is Pleasure"},
        	{"No Deity": "Even in a world filled with the powers of the divine, you have decided to follow reason, put your faith in the potential of mortals, or otherwise invest in the ways of the material world instead of embracing the teachings of deities. You gain access to the Tireless Logic social trait."},
        	{"Undecided": "You have remained undecided when it comes to your faith, but are accepting of others' faiths and are at least somewhat open to the idea of joining an organized faith should you find one that strikes your fancy. You gain access to the Ease of Faith faith trait."}
        ];
        var relationshipWithFellowAdventurers = [
        	{"index": "01—05", "name": "Family"},
        	{"index": "06—10", "name": "Friend"},
        	{"index": "11—15", "name": "Tavern"},
        	{"index": "16—20", "name": "Hunting"},
        	{"index": "21—25", "name": "Business"},
        	{"index": "26—30", "name": "Contractor"},
        	{"index": "31—35", "name": "Former"},
        	{"index": "36—40", "name": "Former"},
        	{"index": "41—45", "name": "Friendly"},
        	{"index": "46—50", "name": "Romantic"},
        	{"index": "51—55", "name": "Know"},
        	{"index": "56—60", "name": "Former"},
        	{"index": "61—65", "name": "Criminal"},
        	{"index": "66—70", "name": "Servants"},
        	{"index": "71—75", "name": "Met"},
        	{"index": "76—80", "name": "Veterans"},
        	{"index": "81—85", "name": "Follow"},
        	{"index": "86—90", "name": "Best"},
        	{"index": "91—95", "name": "Gaming"},
        	{"index": "96—100", "name": "From"}
        ];
        var romanticRelationships = [
        	{"index": "1—2", "name": "One Significant Relationship", "action": "You had a true love once, but that time has passed."},
        	{"index": "3—6", "name": "A Few Significant Relationships", "action": "You've tried to make deep connections with individuals on several occasions, but it's never worked out."},
        	{"index": "7—9", "name": "Several Significant Relationships", "action": "You've engaged in a number of partnerships, but for some reason or another your relationships always fail."},
        	{"index": "10—12", "name": "Current Lover", "action": "You are currently involved in a romantic relationship. You gain access to the True Love story feat."},
        	{"index": "13—16", "name": "Several Inconsequential Relationships", "action": "You have had many lovers but no long-lasting, meaningful relationships."},
        	{"index": "17—18", "name": "Experience but No Substantial Relationships", "action": "You've had a fling or two, but have so far shied away from any ties or commitments."},
        	{"index": "19—20", "name": "No Experience", "action": "You have never experienced any kind of romantic connection whatsoever."}
        ];
        var characterDrawbacks = [
        	{"index": "01—05", "name": "Attachment (Object)", "action": "You are attached to a precious possession with immense sentimental value and significance. Without it, you are no longer yourself and are prone to suffer from depression, moodiness, or aggressive behavior. You gain access to the Attached drawback."},
        	{"index": "06—10", "name": "Attachment (Person)", "action": "You are attached to a particular person—a friend, family member, or loved one—who means more than anything or anyone in the world. Your thoughts always return to this person. You gain access to the Attached drawback."},
        	{"index": "11—15", "name": "Family", "action": "Your family means everything to you, and there is nothing you wouldn't do for them. Maybe your ties extend to your entire clan or bloodline, or perhaps there is one specific member of your family you hold closer than any other. You gain access to the Family Ties drawback."},
        	{"index": "16—20", "name": "Justice", "action": "Unfairness and injustice are intolerable. Whenever you witness them, you feel compelled to act or speak out. When you're personally wronged, you require appeasement—or revenge if you don't receive it. You gain access to the Headstrong drawback."},
        	{"index": "21—25", "name": "Love", "action": "Your love for someone motivates you. When this person is in danger, you're prone to feel weak, powerless, or angry. You gain access to the Lovesick drawback."},
        	{"index": "26—30", "name": "Loyalty", "action": "You value loyalty over all things. You treasure the friends, associates, and lovers you have earned throughout the years, and when someone breaks your trust or betrays you in some way, you become utterly unhinged. You gain access to the Pride drawback."},
        	{"index": "31—35", "name": "Material Wealth", "action": "You have a weakness for material things—money, fine jewelry, exquisite foods, expensive or rare items, and so on. When such riches are within your reach, you're driven to possess them, and you claim them either as an honest collector or a cunning thief. You gain access to the Avarice drawback."},
        	{"index": "36—40", "name": "Pleasure", "action": "You crave luxury, entertainment, and pleasure. You might indulge in every passing fancy or hold strong against a temptation that constantly eats at you. You gain access to the Hedonistic drawback."},
        	{"index": "41—45", "name": "Power", "action": "You long for the ability to influence the world around you, whether that's as small as a village or as large as a plane of reality. You gain access to the Power-Hungry drawback."},
        	{"index": "46—50", "name": "Pride", "action": "You present an image to the world that can't be tarnished. When someone questions your motives, criticizes your actions, or insults your honor or pride, you question his friendship or count him among your enemies until he makes amends. You gain access to the Pride drawback."},
        	{"index": "51—55", "name": "Race", "action": "You are truly comfortable only around others of your race, and you have a hard time putting faith or trust in those of races different from your own. You gain access to the Xenophobic drawback."},
        	{"index": "56—60", "name": "Religion", "action": "Your beliefs are of paramount importance in your life, whether you belong to a temple, follow a cult, or practice a religious philosophy independently. When others question or attack the beliefs, principles, relics, or structures of your faith, you respond with fury. You gain access to the Zealous drawback."},
        	{"index": "61—65", "name": "Reputation or Fame", "action": "You've worked hard to establish your identity and reputation, and someone who slanders or insults you must answer for it. You strive to promote your identity to the point where everyone knows your reputation. You gain access to the Vain drawback."},
        	{"index": "66—70", "name": "Safety or Security", "action": "You are cautious and guarded—wary of others who might harm you, steal from you, or betray your trust. As such, you sleep lightly, always suspecting someone or something to sneak in upon you in the dark. Even when in relationships with people who trust you, there's always the fear that they harbor hidden agendas or will change and turn against you. You gain access to the Paranoid drawback."},
        	{"index": "71—75", "name": "Self-Doubt", "action": "No matter what you do, it's never good enough. You cannot help but see in your victories many little defeats and failures. If you were stronger, smarter, faster, or more powerful, maybe you could be better. However, stuck in the body and mind you have, you feel you're destined to fail. You gain access to the Doubt drawback."},
        	{"index": "76—80", "name": "Social Acceptance", "action": "You want others to accept you, to believe you're special and worthy of merit. You are self-conscious about your social flaws and breaches of etiquette. Rejection is among your greatest fears. You might go to extraordinary lengths to be accepted by or seek favor from your peers. You gain access to the Dependent drawback."},
        	{"index": "81—85", "name": "The Future", "action": "Your concerns lie not with the present, but with preparation for the future. You may be an avid and organized planner, or perhaps you see the signs of a coming dark age or troubled time. You behave cautiously, conservatively, and methodically as you plan for events that might one day occur. You gain access to the Meticulous drawback."},
        	{"index": "86—90", "name": "The Past", "action": "You long for the world to return to a past age. You've adopted the manners and style of this age, and are fascinated by its customs, relics, and artifacts, and by the historical figures of that time. Perhaps you live so much in this past age that your connection to the present is tenuous. Or your pretentiousness annoys others. You gain access to the Sentimental drawback."},
        	{"index": "91—95", "name": "Worldview", "action": "In your eyes, your moral philosophy—your alignment—is the only correct and true way of the world. Perhaps you gently pity, argue with, or brawl with those misguided souls who don't see the world your way or by your light of reason. You gain access to the Provincial drawback."},
        	{"index": "96—100", "name": "Youth", "action": "You reflect upon your youth as a golden time, one ever present in your mind and that refuses to fade into the background. Every day, you feel yourself growing older and closer to your inevitable end. You seek ways to make yourself look and feel young in attempt to rekindle that fire of your adolescence, but despite your attempts, you realize that your time still draws ever nearer. You gain access to the Vain drawback."},
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
                var that= this;
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
                            var raceArray = [];
                            var half = Math.floor((Math.random() * 100) + 1) < 51 ? "elf" : "orc"; // if Half-sibling, determines which half.
                            for(var key in option.action) {
                                var raceType = option.action[key];
                                // Roll notations that begin with a '-' means that it is a subset of the current number of siblings.
                                if(raceType.charAt(0)=='-') { raceType=raceType.slice(1);
                                    var rollArray = RollerFactory.getResult(raceType);
                                    // console.log(raceArray);
                                    var roll = rollArray[rollArray.length-1].value;
                                    // console.log(raceArray.length + " - " + rollArray[rollArray.length-1].value + " = " + (raceArray.length - rollArray[rollArray.length-1].value) );
                                    // console.log(-roll);
                                    //raceArray = raceArray.slice(-roll);
                                    raceArray.length = (raceArray.length - rollArray[rollArray.length-1].value);
                                    // console.log(raceArray);
                                } else {
                                    var rollArray = RollerFactory.getResult(raceType);
                                    var roll = rollArray[rollArray.length-1].value;
                                }
                                console.log("Adding " + roll + " " + key + " siblings");

                                for(var i = 1; i <= roll; i++) {
                                    var siblingRelation = key;
                                    if (key == "mixed") {
                                        siblingRelation = Math.floor((Math.random() * 100) + 1) < 51 ? "adopted" : "half";
                                    }
                                    var siblingRace = key;

                                    switch(siblingRelation) {
                                        case "biological":
                                            siblingRace = race;
                                        break;
                                        case "adopted":
                                            var randomIndex = Math.floor((Math.random() * 100) + 1);
                                            for (var j = 0; j < adoptedSibling.length; j++) {
                                                if (adoptedSibling[j].index > randomIndex) {
                                                    siblingRace = adoptedSibling[j-1].name;
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
                                            siblingRelation = "biological";
                                    }
                                    raceArray.push({"race": siblingRace, "relation": siblingRelation});
                                }
                            }
                            for(var i = 0; i < raceArray.length; i++){
                                this.addSibling(raceArray[i].race, raceArray[i].relation);
                            }
                        }
                    },
                    "addSibling": function (type, relation) {
                        var sibling = {};
                        sibling.race = type;
                        sibling.relation = relation + " " + (Math.floor((Math.random() *100) + 1) >50 ? "brother": "sister");
                        var roll = Math.floor((Math.random() * 100) + 1);
                        if (roll >= 1 && roll <= 48) {
                            sibling.relativeAge = "older";
                        } else if (roll >= 49 && roll <= 96) {
                            sibling.relativeAge = "younger";
                        } else if (roll >= 97 && roll <= 100) {
                            sibling.relativeAge = (type == race) ? "twin" : "same age";
                        }
                        this.numberOfSiblings++;
                        this["sibling" + this.numberOfSiblings] = sibling;
                    },
                    "getSiblings": function () {
                        result = [];
                        for (var i = 1; i <= this.numberOfSiblings; i++) {
                            result.push(this["sibling" + i]);
                        }
                        return result;
                    },
                    "getMatrix": function() {
                        var result = [];
                        for (var v in this.matrix) {
                            result.push(this.matrix[v]);
                        }
                        return result;
                    },
                    "reset": function() {
                        for(var i = 1; i <= this.numberOfSiblings; i++){
                            delete this["sibling" + i];
                        }
                        this.numberOfSiblings = 0;

                        this.selected = "";
                    },
                    "getSuggestedTraits": function() {
                        var result = [];
                        var trait = this.selected.addTrait;
                        if (angular.isDefined(trait)) {
                            if(angular.isDefined(trait.condition)) {
                                var requirement = that.siblings[trait.condition] + trait.requirement;
                                if (eval(requirement)) {
                                    result = trait.trait;
                                }
                            }
                            else {
                                result = trait;
                            }
                        }
                        return result;
                    }
                }
            },
            "getSuggestedTraits": function(race) {
                var traits = [];
                traits = traits.concat(this.getSuggestedHomelandTraits(race));
                traits = traits.concat(this.parents.getSuggestedTraits()) || traits;
                traits = traits.concat(this.siblings.getSuggestedTraits()) || traits;
                // if (this.parents.getSuggestedTraits().length) {
                //     traits = traits.concat(this.parents.getSuggestedTraits());
                // }
                // if (this.siblings.getSuggestedTraits().length) {
                //     traits = traits.concat(this.siblings.getSuggestedTraits());
                // }

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
                    $scope.siblingList = BackgroundFactory.siblings.getSiblings();
                    console.log($scope.siblingList);
                }
            }
        };
    })
    .directive("rollTable", function() {
        return {
            restrict: 'E',
            scope: {
                name: '=',
                rollItems: '='
            },
            templateUrl: "partials/elements/roll-table.html",
            controller: function($scope, BackgroundFactory) {
                scope.table = {
                    "name" : "Table Name",
                    "items": [
                        {"description": "This"}
                    ],
                    "reset": function () { alert("reset");},
                    "select": function () { alert("select");},

                }
            }
        };
    });
