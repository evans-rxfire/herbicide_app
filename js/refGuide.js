const { useLayoutEffect } = require("react");

const herbicideNames = [
    {
        commonName: "aminocyclopryachlor:triclopyamine (1:2)",
        chemicalName: "6-amino-5-chloro-2-cyclopropyl-pyrimidinecarboxylic acid, potassium salt",
        productName: ["Invora"],
        activeIngredient: "2lb/gal"
    }, 

    {
        commonName: "aminopyralid",
        chemicalName: "2-pyridine carboxylic acid, 4-amino-3, 6-dichloro-2-pyrdine carboxylic acid, triisopropanolammonium slat",
        productName: null,
        activeIngredient: null
    },

    {
        commonName: "aminopyralid:2,4D (1:8)",
        chemicalName: "See aminopyralid and 2,4-D",
        productName: ["GrazonNext HL"],
        activeIngredient: "3.75 lb/gal"
    },

    {
        commonName: "aminopyralid:clopyralid (1:4.6)",
        chemicalName: "See aminopyralid and clopyralid",
        productName: ["Sendero"],
        activeIngredient: "2.8lb/gal"
    },

    {
        commonName: "aminpyralid:metsulfuron methyl (1:6.2)",
        chemicalName: "See amniopyralid and metsulfuron",
        productName: ["Chaparral"],
        activeIngredient: "0.62lb/gal"
    },

    {
        commonName: "aminopyralid:picloram:fluroxypyr (1:2.2)",
        chemicalName: "See aminopyralid, picloram, and fluroxypyr",
        productName: ["MezaVue"],
        activeIngredient: "2lb/gal"
    },

    {
        commonName: "clopyralid",
        chemicalName: "3,6-dichloro-2-pyridinecarboxylic acid",
        productName: ["Pyramid R&P", "Sonora"],
        activeIngredient: "3lb/gal"
    },

    {
        commonName: "2,4-D",
        chemicalName: "(2,4-diclorophenoxy) acetic acid",
        productName: ["Weedar 64", "Broad Range 55", "Hi-Dep", "Weedone LV4", "Esteron 99", "Unison", "others"],
        activeIngredient: "amine salts, free acidds, and esters of various concentration"
    },

    {
        commonName: "dicamba",
        chemicalName: "3/6-dichloro-2-methooxybenzoic acid",
        productName: ["Banvel", "Clarity", "Vision"],
        activeIngredient: "4lb/gal"
    },

    {
        commonName: "dicamba:2,4-D (1:3)",
        chemicalName: "See dicamba and 2,4-D",
        productName: ["Weedmaster", "Banvel + 2,4-D", "RangeStar", "Outlaw"],
        activeIngredient: "4lb/gal"
    },

    {
        commonName: "dicamba:2,4-D (1:1.3)",
        chemicalName: "See dicamba and 2,4-D",
        productName: ["Latigo"],
        activeIngredient: "4lb/gal"
    },

    {
        commonName: "diesel fuel oil or kerosene",
        chemicalName: "refined petroleum fractions",
        productName: ["Several manufacturers"],
        activeIngredient: null
    },

    {
        commonName: "fluroxypyr",
        chemicalName: "1-methylheptyl ester: ((4-amino-3,5-dichloro-6-fluoropyridin-2-yl)oxy)acetic acid",
        productName: ["Vista XRT"],
        activeIngredient: "2.8lb/gal"
    },

    {
        commonName: "glyphosate",
        chemicalName: "N-(phosphonomethyl) glycine",
        productName: ["Rodeo", "Roundup", "Roundup Ultradry", "Glyphosate 417"],
        activeIngredient: "isopropylamine salt; concentration varies depending on the product"
    },

    {
        commonName: "hexazinone",
        chemicalName: "3-cyclohexyl-6-(dimethylamino)-1-methyl-1,3,5-triazine-2,4(IH, 3H)-dione",
        productName: ["Velpar L", "Pronone Power Pellet"],
        activeIngredient: "2lb/gal (Velpar L), 75% (Pronone Power Pellet)"
    },

    {
        commonName: "imazapyr",
        chemicalName: "2-[4,5-dihydro-4-methyl-4-(1-methylethy)-5-oxo-lH-imidazol-2-yl]-3-pyridinecarboxylic acid",
        productName: ["Aresnal", "Habitat"],
        activeIngredient: "2lb/gal"
    },

    {
        commonName: "metsulfuron methyl",
        chemicalName: "methyl 2[(4-methoxy-6-methyl-1,3,5-triazin-2-yl)amino]carbonyl]amino] sulfonyl] benzoate",
        productName: ["Escort", "Clean Pasture", "MSM 60DF"],
        activeIngredient: "60%"
    },
    {
        commonName: "metsulfuron:cholosulfuron (3:1)",
        chemicalName: "See metsulfuron methyl + 2-chloro-N-[(4-methoxy-6-methyl-1,3,5-triazin-2-yl)aminocarbonyl benzenesulfonamide",
        productName: ["Cimarron Plus"],
        activeIngredient: "48% metsulfuron, 15% chlorosulfuron"
    },

    {
        commonName: "metsulfuron:chlorosulfuron (1:1)",
        chemicalName: "See metsulfuron:chlorosulfuron",
        productName: ["Cimarron X-Tra"],
        activeIngredient: "30% metsulfuron, 37.5% chlorosulfuron"
    },

    {
        commonName: "metsulfuron methyl dicamba:2,4-D (1:3)",
        chemicalName: "See metsulfuron methyl, dicamba, and 2,4-D",
        productName: ["Cimarron Max"],
        activeIngredient: "60% (Part A), 3.87lb/gal (Part B)"
    },

    {
        commonName: "picloram",
        chemicalName: "4-amino-3,5,6-trichloro-2-pyridinecarboxylic acid",
        productName: ["Tordon 22K", "Triumph 22K", "Picloram 22K"],
        activeIngredient: "2lb/gal"
    },

    {
        commonName: "picloram:fluroxypyr (1:1)",
        chemicalName: "See picloram and fluroxypyr",
        productName: ["Surmount"],
        activeIngredient: "1.34lb/gal"
    },

    {
        commonName: "picloram:2,4-D (1:4)",
        chemicalName: "See picloram and 2,4-D",
        productName: ["Grazon P+D", "Gunslinger", "Picloram + D"],
        activeIngredient: "2.5lb/gal"
    },

    {
        commonName: "picloram:2,4-D (1:4)",
        chemicalName: "See picloram and 2,4-D",
        productName: ["Grasaln L"],
        activeIngredient: "3.8lb/gal"
    },

    {
        commonName: "tebuthiuron",
        chemicalName: "N-[5-(1,1-dimethylethy)-1,3,4-thiadiazol-2-yl}-N-N'-dimethylurea",
        productName: ["Spike 20P", "Spike 80 DF"],
        activeIngredient: "20% (Spike 20P), 80% (Spike 80 DF)"
    },

    {
        commonName: "triclopyr amine",
        chemicalName: "3,5,6-trichloro-2-pyridinyloxyacetic acid, triethylamine salt",
        productName: ["Garlon 3A"],
        activeIngredient: "3lb/gal"
    },

    {
        commonName: "triclopyr ester",
        chemicalName: "3,5,6-trichloro-2-pyridinyloxyacetic acid, butoxyethyl ester",
        productName: ["Clear Pasture", "Pathfinder II", "Triclopyr R&P", "Remedy Ultra", "Triclopyr 4 EC"],
        activeIngredient: "0.75lb/gal (Pathfinder II-ready-to-use formulation for stem sprays, 4lb/gal (all others)"
    },

    {
        commonName: "triclopyr:fluroxypyr (3:1)",
        chemicalName: "See triclopyr and fluroxypyr",
        productName: ["PastureGard HL"],
        activeIngredient: "4lb/gal"
    },

    {
        commonName: "triclopyr:2,4-D",
        chemicalName: "See triclopyr and 2,4-D",
        productName: ["Crossbow"],
        activeIngredient: "3lb/gal"
    },
];

const weedControl = [
    {
        plantName: ["African rue"],
        herbicides: [
            {
                herbicideName: "hexazinone liquid",
                herbicideQuantity: {
                    broadcast: {
                        contolRating: null,
                        rate: null
                    }, 
                    IPT: {
                        contolRating: "VH",
                        rate: "2ml/plant"
                    }
                },
                sprayVolume: "Use an exact delivery handgun to apply undiluted herbicide to soil surface at teh edge of the plant canopy.",
                timing: "Spring-summer",
                remarks: "Do not use on heavy clay or caliche soils."
            },

            {
                herbicideName: "hexazinone pellet",
                herbicideQuantity: {
                    broadcast: {
                        contolRating: null,
                        rate: null
                    }, 
                    IPT: {
                        contolRating: null,
                        rate: "1 pellet/plant"
                    }
                },
                sprayVolume: null,
                timing: "Spring-summer",
                remarks: "Do not use on heavy clay or caliche soils."
            },

            {
                herbicideName: "tebuthiuron 20% pellets",
                herbicideQuantity: {
                    broadcast: {
                        contolRating: "H",
                        rate: "7.5lb (1.5lb)"
                    }, 
                    IPT: {
                        contolRating: null,
                        rate: null
                    }
                },
                sprayVolume: null,
                timing: "Spring-summer",
                remarks: "Do not use on heavy clay or caliche soils."
            },

            {
                herbicideName: "imazapyr",
                herbicideQuantity: {
                    broadcast: {
                        contolRating: "H",
                        rate: "32oz (0.5lb)"
                    }, 
                    IPT: {
                        contolRating: "VH",
                        rate: "0.5%"
                    }
                },
                sprayVolume: "10-25 gal/ac for ground broadcast. Thoroughly wet foliage for individual plant treatment. Add 32-64oz surfactant/100gal water.",
                timing: "Late Sept-Oct (to first frost)",
                remarks: "Apply to fall regrowth that is in good growing condition. Recommend using individual plant treatment when growing with desirable vegetation to reduce non-target damage. Imazapyr is a non-selective herbicide and will kill or damage desirable vegetation if sprayed."
            },
        ]
    }, 

    {
        plantName: ["Berlander lobelia", "bitter sneezeweed", "buffalobur", "camphorweed", "cocklebur", "croton", "horehound", "marshelder (sumpweed, sulfaweed)", "prairie gerardia", "ragweed", "smartweed", "sunflower", "thistles", "western bitterweed", "western ragweed"],
        herbicides: [
            {
                herbicideName: "2,4-D amine or low volatile ester",
                herbicideQuantity: {
                    broadcast: {
                        contolRating: "VH",
                        rate: "16-32oz (0.5-1lb) 4lb/gal product"
                    }, 
                    IPT: {
                        contolRating: "VH",
                        rate: "1% (4lb/gal product)"
                    }
                },
                sprayVolume: "2-4 gal water for aerial spray; 10-25gal water for ground broadcast application. Thoroughly wet foliage for individual plant treatment. Add 32-64oz surfactant/100gal water.",
                timing: "Spring, weeds 4-6in. high, good moisture conditions. Spray thistles in rosette stage.",
                remarks: "With 2,4-D, use the amine formulation in areas with 25in. of rainfall or more and the ester formulation in drier areas where no susceptible crops are nearby. For western bitterweed control, use 2,4-D low volatile ester or amine at 32oz/ac before plants flower, temperature above 72° F, and soil moisture favors plant growth. When 3/4 of plants are blooming, and/or temperature is less than 60°F, use dicamba:2,4-D (1:3), 2,4-D plus dicamba; picloram:2,4-D (1:4), (3.8lb/gal product), picloram:2,4-D (1:4), (2.5lb/gal product), aminopyralid:2,4-D (1:8) or 2,4-D plus picloram. For prairie gerardia control, use 48 oz/acre of 2,4-D or the low rate of dicamba:2,4-D (1:3), dicamba plus 2,4-D; picloram:2,4-D (1:4), (3.8lb/gal product), picloram:2,4-D (1:4), (2.5lb/gal product) or picloram plus 2,4-D when plants are 4-6in. high.Use 20 oz/acre of picloram:2,4-D (1:4), (3.8lb/gal product; Do not apply more than 80oz/acre per year), 32oz/acre of picloram:2,4-D (1:4), (2.5lb/gal product) or 8 oz of 2,4-D/acre when plants are 6-10 in. high before flowering."
            },

            {
                herbicideName: "dicamba:2,4-D (1:3)",
                herbicideQuantity: {
                    broadcast: {
                        contolRating: "VH",
                        rate: "16-32oz (0.5-1lb)"
                    }, 
                    IPT: {
                        contolRating: "VH",
                        rate: "1%"
                    }
                },
                sprayVolume: "2-4 gal water for aerial spray; 10-25gal water for ground broadcast application. Thoroughly wet foliage for individual plant treatment. Add 32-64oz surfactant/100gal water.",
                timing: "Spring, weeds 4-6in. high, good moisture conditions. Spray thistles in rosette stage.",
                remarks: "With 2,4-D, use the amine formulation in areas with 25in. of rainfall or more and the ester formulation in drier areas where no susceptible crops are nearby. For western bitterweed control, use 2,4-D low volatile ester or amine at 32oz/ac before plants flower, temperature above 72° F, and soil moisture favors plant growth. When 3/4 of plants are blooming, and/or temperature is less than 60°F, use dicamba:2,4-D (1:3), 2,4-D plus dicamba; picloram:2,4-D (1:4), (3.8lb/gal product), picloram:2,4-D (1:4), (2.5lb/gal product), aminopyralid:2,4-D (1:8) or 2,4-D plus picloram. For prairie gerardia control, use 48 oz/acre of 2,4-D or the low rate of dicamba:2,4-D (1:3), dicamba plus 2,4-D; picloram:2,4-D (1:4), (3.8lb/gal product), picloram:2,4-D (1:4), (2.5lb/gal product) or picloram plus 2,4-D when plants are 4-6in. high.Use 20 oz/acre of picloram:2,4-D (1:4), (3.8lb/gal product; Do not apply more than 80oz/acre per year), 32oz/acre of picloram:2,4-D (1:4), (2.5lb/gal product) or 8 oz of 2,4-D/acre when plants are 6-10 in. high before flowering."
            },

            {
                herbicideName: "dicamba:2,4-D (1:1.3) + 2,4-D amine of low volatile ester",
                herbicideQuantity: {
                    broadcast: {
                        contolRating: "VH",
                        rate: "9-22oz (0.28-0.69lb) dicamba:2,4-D (1:1.3) + 14-32oz (0.44-1lb) 2,4-D (4lb/gal product)"
                    }, 
                    IPT: {
                        contolRating: null,
                        rate: null
                    }
                },
                sprayVolume: "2-4 gal water for aerial spray; 10-25gal water for ground broadcast application. Thoroughly wet foliage for individual plant treatment. Add 32-64oz surfactant/100gal water.",
                timing: "Spring, weeds 4-6in. high, good moisture conditions. Spray thistles in rosette stage.",
                remarks: "With 2,4-D, use the amine formulation in areas with 25in. of rainfall or more and the ester formulation in drier areas where no susceptible crops are nearby. For western bitterweed control, use 2,4-D low volatile ester or amine at 32oz/ac before plants flower, temperature above 72° F, and soil moisture favors plant growth. When 3/4 of plants are blooming, and/or temperature is less than 60°F, use dicamba:2,4-D (1:3), 2,4-D plus dicamba; picloram:2,4-D (1:4), (3.8lb/gal product), picloram:2,4-D (1:4), (2.5lb/gal product), aminopyralid:2,4-D (1:8) or 2,4-D plus picloram. For prairie gerardia control, use 48 oz/acre of 2,4-D or the low rate of dicamba:2,4-D (1:3), dicamba plus 2,4-D; picloram:2,4-D (1:4), (3.8lb/gal product), picloram:2,4-D (1:4), (2.5lb/gal product) or picloram plus 2,4-D when plants are 4-6in. high.Use 20 oz/acre of picloram:2,4-D (1:4), (3.8lb/gal product; Do not apply more than 80oz/acre per year), 32oz/acre of picloram:2,4-D (1:4), (2.5lb/gal product) or 8 oz of 2,4-D/acre when plants are 6-10 in. high before flowering."
            },

            {
                herbicideName: "dicamba + 2,4-D amine or low volatile ester",
                herbicideQuantity: {
                    broadcast: {
                        contolRating: "VH",
                        rate: "4-8oz (0.125-0.75lb) dicamba + 12-24oz (0.375-0.75lb) 2,4-D (4lb/gal product)"
                    }, 
                    IPT: {
                        contolRating: "VH",
                        rate: "0.25% dicamba + 0.75% 2,4-D (4lb/gal product"
                    }
                },
                sprayVolume: "2-4 gal water for aerial spray; 10-25gal water for ground broadcast application. Thoroughly wet foliage for individual plant treatment. Add 32-64oz surfactant/100gal water.",
                timing: "Spring, weeds 4-6in. high, good moisture conditions. Spray thistles in rosette stage.",
                remarks: "With 2,4-D, use the amine formulation in areas with 25in. of rainfall or more and the ester formulation in drier areas where no susceptible crops are nearby. For western bitterweed control, use 2,4-D low volatile ester or amine at 32oz/ac before plants flower, temperature above 72° F, and soil moisture favors plant growth. When 3/4 of plants are blooming, and/or temperature is less than 60°F, use dicamba:2,4-D (1:3), 2,4-D plus dicamba; picloram:2,4-D (1:4), (3.8lb/gal product), picloram:2,4-D (1:4), (2.5lb/gal product), aminopyralid:2,4-D (1:8) or 2,4-D plus picloram. For prairie gerardia control, use 48 oz/acre of 2,4-D or the low rate of dicamba:2,4-D (1:3), dicamba plus 2,4-D; picloram:2,4-D (1:4), (3.8lb/gal product), picloram:2,4-D (1:4), (2.5lb/gal product) or picloram plus 2,4-D when plants are 4-6in. high.Use 20 oz/acre of picloram:2,4-D (1:4), (3.8lb/gal product; Do not apply more than 80oz/acre per year), 32oz/acre of picloram:2,4-D (1:4), (2.5lb/gal product) or 8 oz of 2,4-D/acre when plants are 6-10 in. high before flowering."
            },

            {
                herbicideName: "picloram:2,4-D (1:4), (3.8lb/gal product)",
                herbicideQuantity: {
                    broadcast: {
                        contolRating: "VH",
                        rate: "11-16oz (0.3-0.5lb)"
                    }, 
                    IPT: {
                        contolRating: "VH",
                        rate: "0.63%"
                    }
                },
                sprayVolume: "2-4 gal water for aerial spray; 10-25gal water for ground broadcast application. Thoroughly wet foliage for individual plant treatment. Add 32-64oz surfactant/100gal water.",
                timing: "Spring, weeds 4-6in. high, good moisture conditions. Spray thistles in rosette stage.",
                remarks: "With 2,4-D, use the amine formulation in areas with 25in. of rainfall or more and the ester formulation in drier areas where no susceptible crops are nearby. For western bitterweed control, use 2,4-D low volatile ester or amine at 32oz/ac before plants flower, temperature above 72° F, and soil moisture favors plant growth. When 3/4 of plants are blooming, and/or temperature is less than 60°F, use dicamba:2,4-D (1:3), 2,4-D plus dicamba; picloram:2,4-D (1:4), (3.8lb/gal product), picloram:2,4-D (1:4), (2.5lb/gal product), aminopyralid:2,4-D (1:8) or 2,4-D plus picloram. For prairie gerardia control, use 48 oz/acre of 2,4-D or the low rate of dicamba:2,4-D (1:3), dicamba plus 2,4-D; picloram:2,4-D (1:4), (3.8lb/gal product), picloram:2,4-D (1:4), (2.5lb/gal product) or picloram plus 2,4-D when plants are 4-6in. high.Use 20 oz/acre of picloram:2,4-D (1:4), (3.8lb/gal product; Do not apply more than 80oz/acre per year), 32oz/acre of picloram:2,4-D (1:4), (2.5lb/gal product) or 8 oz of 2,4-D/acre when plants are 6-10 in. high before flowering."
            },

            {
                herbicideName: "picloram:2,4-D (1:4) (2.5lb/gal product",
                herbicideQuantity: {
                    broadcast: {
                        contolRating: "VH",
                        rate: "16-24oz (0.3-0.5lb)"
                    }, 
                    IPT: {
                        contolRating: "VH",
                        rate: "1%"
                    }
                },
                sprayVolume: "2-4 gal water for aerial spray; 10-25gal water for ground broadcast application. Thoroughly wet foliage for individual plant treatment. Add 32-64oz surfactant/100gal water.",
                timing: "Spring, weeds 4-6in. high, good moisture conditions. Spray thistles in rosette stage.",
                remarks: "With 2,4-D, use the amine formulation in areas with 25in. of rainfall or more and the ester formulation in drier areas where no susceptible crops are nearby. For western bitterweed control, use 2,4-D low volatile ester or amine at 32oz/ac before plants flower, temperature above 72° F, and soil moisture favors plant growth. When 3/4 of plants are blooming, and/or temperature is less than 60°F, use dicamba:2,4-D (1:3), 2,4-D plus dicamba; picloram:2,4-D (1:4), (3.8lb/gal product), picloram:2,4-D (1:4), (2.5lb/gal product), aminopyralid:2,4-D (1:8) or 2,4-D plus picloram. For prairie gerardia control, use 48 oz/acre of 2,4-D or the low rate of dicamba:2,4-D (1:3), dicamba plus 2,4-D; picloram:2,4-D (1:4), (3.8lb/gal product), picloram:2,4-D (1:4), (2.5lb/gal product) or picloram plus 2,4-D when plants are 4-6in. high.Use 20 oz/acre of picloram:2,4-D (1:4), (3.8lb/gal product; Do not apply more than 80oz/acre per year), 32oz/acre of picloram:2,4-D (1:4), (2.5lb/gal product) or 8 oz of 2,4-D/acre when plants are 6-10 in. high before flowering."
            },

            {
                herbicideName: "picloram + 2,4-D amine or low volatile ester",
                herbicideQuantity: {
                    broadcast: {
                        contolRating: "VH",
                        rate: "8-24oz (0.0625-0.1875lb) picloram + 8-24oz (0.25-0.75lb) 2,4-D (4lb/gal product)"
                    }, 
                    IPT: {
                        contolRating: "VH",
                        rate: "0.25% picloram + 0.5% 2,4-D (4lb/gal product)"
                    }
                },
                sprayVolume: "2-4 gal water for aerial spray; 10-25gal water for ground broadcast application. Thoroughly wet foliage for individual plant treatment. Add 32-64oz surfactant/100gal water.",
                timing: "Spring, weeds 4-6in. high, good moisture conditions. Spray thistles in rosette stage.",
                remarks: "With 2,4-D, use the amine formulation in areas with 25in. of rainfall or more and the ester formulation in drier areas where no susceptible crops are nearby. For western bitterweed control, use 2,4-D low volatile ester or amine at 32oz/ac before plants flower, temperature above 72° F, and soil moisture favors plant growth. When 3/4 of plants are blooming, and/or temperature is less than 60°F, use dicamba:2,4-D (1:3), 2,4-D plus dicamba; picloram:2,4-D (1:4), (3.8lb/gal product), picloram:2,4-D (1:4), (2.5lb/gal product), aminopyralid:2,4-D (1:8) or 2,4-D plus picloram. For prairie gerardia control, use 48 oz/acre of 2,4-D or the low rate of dicamba:2,4-D (1:3), dicamba plus 2,4-D; picloram:2,4-D (1:4), (3.8lb/gal product), picloram:2,4-D (1:4), (2.5lb/gal product) or picloram plus 2,4-D when plants are 4-6in. high.Use 20 oz/acre of picloram:2,4-D (1:4), (3.8lb/gal product; Do not apply more than 80oz/acre per year), 32oz/acre of picloram:2,4-D (1:4), (2.5lb/gal product) or 8 oz of 2,4-D/acre when plants are 6-10 in. high before flowering."
            },

            {
                herbicideName: "metsulfuron methyl dicamba:2,4-D (1:3)",
                herbicideQuantity: {
                    broadcast: {
                        contolRating: "VH",
                        rate: "Rate 1-Rate 2"
                    }, 
                    IPT: {
                        contolRating: null,
                        rate: null
                    }
                },
                sprayVolume: "2-4 gal water for aerial spray; 10-25gal water for ground broadcast application. Thoroughly wet foliage for individual plant treatment. Add 32-64oz surfactant/100gal water.",
                timing: "Spring, weeds 4-6in. high, good moisture conditions. Spray thistles in rosette stage.",
                remarks: "Becasue of metsulfuron methyl in the formulation, there herbicides are not recommended on bahiagrass pastures for weed control."
            },

            {
                herbicideName: "picloram:furoxypyr (1:1)",
                herbicideQuantity: {
                    broadcast: {
                        contolRating: "VH",
                        rate: "24-32oz (0.25-0.33lb)"
                    }, 
                    IPT: {
                        contolRating: "VH",
                        rate: "1%"
                    }
                },
                sprayVolume: "2-4 gal water for aerial spray; 10-25gal water for ground broadcast application. Thoroughly wet foliage for individual plant treatment. Add 32-64oz surfactant/100gal water.",
                timing: "Spring, weeds 4-6in. high, good moisture conditions. Spray thistles in rosette stage.",
                remarks: "Use high end rate range for camphorweed, marshelder, and smartweed."
            },

            {
                herbicideName: "triclopyr:fluroxypyr (3:1)",
                herbicideQuantity: {
                    broadcast: {
                        contolRating: "H",
                        rate: "16-24oz (0.5-0.75lb)"
                    }, 
                    IPT: {
                        contolRating: "VH",
                        rate: "0.5%"
                    }
                },
                sprayVolume: "2-4 gal water for aerial spray; 10-25gal water for ground broadcast application. Thoroughly wet foliage for individual plant treatment. Add 32-64oz surfactant/100gal water.",
                timing: "Spring, weeds 4-6in. high, good moisture conditions. Spray thistles in rosette stage.",
                remarks: "Use high end of rate range for camphorweed, marshelder, and smartweed. Triclopyr:fluroxypyr (3:1) efficacy on smartweed is marginal."
            },

            {
                herbicideName: "aminopyralid:2,4-D (1:8)",
                herbicideQuantity: {
                    broadcast: {
                        contolRating: "VH",
                        rate: "24oz (0.70lb)"
                    }, 
                    IPT: {
                        contolRating: null,
                        rate: null
                    }
                },
                sprayVolume: "2-4 gal water for aerial spray; 10-25gal water for ground broadcast application. Thoroughly wet foliage for individual plant treatment. Add 32-64oz surfactant/100gal water.",
                timing: "Spring, weeds 4-6in. high, good moisture conditions. Spray thistles in rosette stage.",
                remarks: null
            },

            {
                herbicideName: "aminopyralid:metsulfuron methyl (1:6.2)",
                herbicideQuantity: {
                    broadcast: {
                        contolRating: "VH",
                        rate: "2.0-3.3oz (0.078-0.127lb)"
                    }, 
                    IPT: {
                        contolRating: null,
                        rate: null
                    }
                },
                sprayVolume: "2-4 gal water for aerial spray; 10-25gal water for ground broadcast application. Thoroughly wet foliage for individual plant treatment. Add 32-64oz surfactant/100gal water.",
                timing: "Spring, weeds 4-6in. high, good moisture conditions. Spray thistles in rosette stage.",
                remarks: "Becasue of metsulfuron methyl in the formulation, there herbicides are not recommended on bahiagrass pastures for weed control."
            },
        ]
    }, 

    {
        plantName: ["broomweed (annual or common)", "plantain (tallowweed)", "wild carrot"],
        herbicides: [
            {
                herbicideName: "2,4-D amine or low volatile ester",
                herbicideQuantity: {
                    broadcast: {
                        contolRating: "VH",
                        rate: "16-32oz (0.5-1lb) 4lb/gal product"
                    }, 
                    IPT: {
                        contolRating: "VH",
                        rate: "1% (4lb/gal product"
                    }
                },
                sprayVolume: "2-4 gal water for aerial spray; 10-25gal water for ground broadcast application. Thoroughly wet foliage for individual plant treatment. Add 32-64oz surfactant/100gal water.",
                timing: "Spring, weeds less than 4in. tall, good moisture conditions.",
                remarks: "Use 2,4-D amine in areas with 25 in. of rainfall or more. Use 2,4-D low volatile ester in drier areas where no susceptible crops are nearby. Picloram:2,4-D (1:4), (3.8lb/gal product): Do not apply more than 80oz/acre per year."
            },

            {
                herbicideName: "aminppyralid:2,4-D (1:8)",
                herbicideQuantity: {
                    broadcast: {
                        contolRating: "VH",
                        rate: "24oz (0.70lb)"
                    }, 
                    IPT: {
                        contolRating: null,
                        rate: null
                    }
                },
                sprayVolume: "2-4 gal water for aerial spray; 10-25gal water for ground broadcast application. Thoroughly wet foliage for individual plant treatment. Add 32-64oz surfactant/100gal water.",
                timing: "Spring, weeds less than 4in. tall, good moisture conditions.",
                remarks: "Use 2,4-D amine in areas with 25 in. of rainfall or more. Use 2,4-D low volatile ester in drier areas where no susceptible crops are nearby. Picloram:2,4-D (1:4), (3.8lb/gal product): Do not apply more than 80oz/acre per year."
            },

            {
                herbicideName: "aminpyralid:metsulfuron methyl (1:6.2)",
                herbicideQuantity: {
                    broadcast: {
                        contolRating: "VH",
                        rate: "2.0-3.3oz (0.078-0.127lb)"
                    }, 
                    IPT: {
                        contolRating: null,
                        rate: null
                    }
                },
                sprayVolume: "2-4 gal water for aerial spray; 10-25gal water for ground broadcast application. Thoroughly wet foliage for individual plant treatment. Add 32-64oz surfactant/100gal water.",
                timing: "Spring, weeds less than 4in. tall, good moisture conditions.",
                remarks: "Use 2,4-D amine in areas with 25 in. of rainfall or more. Use 2,4-D low volatile ester in drier areas where no susceptible crops are nearby. Picloram:2,4-D (1:4), (3.8lb/gal product): Do not apply more than 80oz/acre per year."
            },

            {
                herbicideName: "dicamba:2.4-D (1:3)",
                herbicideQuantity: {
                    broadcast: {
                        contolRating: "VH",
                        rate: "16-32oz (0.5-1lb)"
                    }, 
                    IPT: {
                        contolRating: "VH",
                        rate: "1%"
                    }
                },
                sprayVolume: "2-4 gal water for aerial spray; 10-25gal water for ground broadcast application. Thoroughly wet foliage for individual plant treatment. Add 32-64oz surfactant/100gal water.",
                timing: "Spring, weeds less than 4in. tall, good moisture conditions.",
                remarks: "Use 2,4-D amine in areas with 25 in. of rainfall or more. Use 2,4-D low volatile ester in drier areas where no susceptible crops are nearby. Picloram:2,4-D (1:4), (3.8lb/gal product): Do not apply more than 80oz/acre per year."
            },

            {
                herbicideName: "dicamba:2,4-D (1:1.3) + 2,4-D amine or low volatile ester",
                herbicideQuantity: {
                    broadcast: {
                        contolRating: "VH",
                        rate: "9-22oz (0.28-0.69lb) dicamba:2,4-D (1:1.3) + 14-32oz (0.44-1lb) 2,4-D (4lb/gal product)"
                    }, 
                    IPT: {
                        contolRating: null,
                        rate: null
                    }
                },
                sprayVolume: "2-4 gal water for aerial spray; 10-25gal water for ground broadcast application. Thoroughly wet foliage for individual plant treatment. Add 32-64oz surfactant/100gal water.",
                timing: "Spring, weeds less than 4in. tall, good moisture conditions.",
                remarks: "Use 2,4-D amine in areas with 25 in. of rainfall or more. Use 2,4-D low volatile ester in drier areas where no susceptible crops are nearby. Picloram:2,4-D (1:4), (3.8lb/gal product): Do not apply more than 80oz/acre per year."
            },

            {
                herbicideName: "dicamba + 2,4-D amine or low volatile ester",
                herbicideQuantity: {
                    broadcast: {
                        contolRating: "VH",
                        rate: "4-8oz (0.125-0.25lb) dicamba + 12-24oz (0.375-0.75lb) 2,4-D (4lb/gal product)"
                    }, 
                    IPT: {
                        contolRating: "VH",
                        rate: "0.25% dicamba + 0.75% 2,4-D (4lb/gal product)"
                    }
                },
                sprayVolume: "2-4 gal water for aerial spray; 10-25gal water for ground broadcast application. Thoroughly wet foliage for individual plant treatment. Add 32-64oz surfactant/100gal water.",
                timing: "Spring, weeds less than 4in. tall, good moisture conditions.",
                remarks: "Use 2,4-D amine in areas with 25 in. of rainfall or more. Use 2,4-D low volatile ester in drier areas where no susceptible crops are nearby. Picloram:2,4-D (1:4), (3.8lb/gal product): Do not apply more than 80oz/acre per year."
            },

            {
                herbicideName: "picloram:2,4-D (1:4), (3.8lb/gal product)",
                herbicideQuantity: {
                    broadcast: {
                        contolRating: "VH",
                        rate: "11-16oz (0.3-0.5lb)"
                    }, 
                    IPT: {
                        contolRating: "VH",
                        rate: "0.63%"
                    }
                },
                sprayVolume: "2-4 gal water for aerial spray; 10-25gal water for ground broadcast application. Thoroughly wet foliage for individual plant treatment. Add 32-64oz surfactant/100gal water.",
                timing: "Spring, weeds less than 4in. tall, good moisture conditions.",
                remarks: "Use 2,4-D amine in areas with 25 in. of rainfall or more. Use 2,4-D low volatile ester in drier areas where no susceptible crops are nearby. Picloram:2,4-D (1:4), (3.8lb/gal product): Do not apply more than 80oz/acre per year."
            },

            {
                herbicideName: "picloram:2,4-D (1:4), (2.5lb/gal product)",
                herbicideQuantity: {
                    broadcast: {
                        contolRating: "VH",
                        rate: "16-24oz (0.3-0.5lb)"
                    }, 
                    IPT: {
                        contolRating: "VH",
                        rate: "1%"
                    }
                },
                sprayVolume: "2-4 gal water for aerial spray; 10-25gal water for ground broadcast application. Thoroughly wet foliage for individual plant treatment. Add 32-64oz surfactant/100gal water.",
                timing: "Spring, weeds less than 4in. tall, good moisture conditions.",
                remarks: "Use 2,4-D amine in areas with 25 in. of rainfall or more. Use 2,4-D low volatile ester in drier areas where no susceptible crops are nearby. Picloram:2,4-D (1:4), (3.8lb/gal product): Do not apply more than 80oz/acre per year."
            },

            {
                herbicideName: "picloram + 2,4-D amine or low volatile ester",
                herbicideQuantity: {
                    broadcast: {
                        contolRating: "VH",
                        rate: "8-24oz (0.0625-0.1875lb) picloram + 8-24oz (0.25-0.75lb) 2,4-D (4lb/gal product)"
                    }, 
                    IPT: {
                        contolRating: "VH",
                        rate: "0.25% picloram + 0.5% 2,4-D (4lb/gal product)"
                    }
                },
                sprayVolume: "2-4 gal water for aerial spray; 10-25gal water for ground broadcast application. Thoroughly wet foliage for individual plant treatment. Add 32-64oz surfactant/100gal water.",
                timing: "Spring, weeds less than 4in. tall, good moisture conditions.",
                remarks: "Use 2,4-D amine in areas with 25 in. of rainfall or more. Use 2,4-D low volatile ester in drier areas where no susceptible crops are nearby. Picloram:2,4-D (1:4), (3.8lb/gal product): Do not apply more than 80oz/acre per year."
            },

            {
                herbicideName: "picloram:fluroxypr (1:1)",
                herbicideQuantity: {
                    broadcast: {
                        contolRating: "VH",
                        rate: "24-32oz (0.25-0.33lb)"
                    }, 
                    IPT: {
                        contolRating: "VH",
                        rate: "1%"
                    }
                },
                sprayVolume: "2-4 gal water for aerial spray; 10-25gal water for ground broadcast application. Thoroughly wet foliage for individual plant treatment. Add 32-64oz surfactant/100gal water.",
                timing: "Spring, weeds less than 4in. tall, good moisture conditions.",
                remarks: "Use 2,4-D amine in areas with 25 in. of rainfall or more. Use 2,4-D low volatile ester in drier areas where no susceptible crops are nearby. Picloram:2,4-D (1:4), (3.8lb/gal product): Do not apply more than 80oz/acre per year."
            },

            {
                herbicideName: "triclopyr:fluroxypyr (3:1)",
                herbicideQuantity: {
                    broadcast: {
                        contolRating: "H",
                        rate: "16-24oz (0.5-0.75lb)"
                    }, 
                    IPT: {
                        contolRating: "VH",
                        rate: "0.5%"
                    }
                },
                sprayVolume: "2-4 gal water for aerial spray; 10-25gal water for ground broadcast application. Thoroughly wet foliage for individual plant treatment. Add 32-64oz surfactant/100gal water.",
                timing: "Spring, weeds less than 4in. tall, good moisture conditions.",
                remarks: "Use 2,4-D amine in areas with 25 in. of rainfall or more. Use 2,4-D low volatile ester in drier areas where no susceptible crops are nearby. Picloram:2,4-D (1:4), (3.8lb/gal product): Do not apply more than 80oz/acre per year."
            },

            {
                herbicideName: "metsulfuron methyl dicamba:2,4-D (1:3)",
                herbicideQuantity: {
                    broadcast: {
                        contolRating: "VH",
                        rate: "Rate 1 - Rate 2"
                    }, 
                    IPT: {
                        contolRating: null,
                        rate: null
                    }
                },
                sprayVolume: "2-4 gal water for aerial spray; 10-25gal water for ground broadcast application. Thoroughly wet foliage for individual plant treatment. Add 32-64oz surfactant/100gal water.",
                timing: "Spring, weeds less than 4in. tall, good moisture conditions.",
                remarks: "Becasue of metsulfuron methyl in the formulation, there herbicides are not recommended on bahiagrass pastures for weed control."
            },

            {
                herbicideName: "metsulfuron methyl",
                herbicideQuantity: {
                    broadcast: {
                        contolRating: "VH",
                        rate: "0.1oz"
                    }, 
                    IPT: {
                        contolRating: null,
                        rate: null
                    }
                },
                sprayVolume: "2-4 gal water for aerial spray; 10-25gal water for ground broadcast application. Thoroughly wet foliage for individual plant treatment. Add 32-64oz surfactant/100gal water.",
                timing: "Spring, weeds less than 4in. tall, good moisture conditions.",
                remarks: "Becasue of metsulfuron methyl in the formulation, there herbicides are not recommended on bahiagrass pastures for weed control."
            },

            {
                herbicideName: "metsulfuron:chlorosulfuron (3:1)",
                herbicideQuantity: {
                    broadcast: {
                        contolRating: "VH",
                        rate: "0.125oz"
                    }, 
                    IPT: {
                        contolRating: null,
                        rate: null
                    }
                },
                sprayVolume: "2-4 gal water for aerial spray; 10-25gal water for ground broadcast application. Thoroughly wet foliage for individual plant treatment. Add 32-64oz surfactant/100gal water.",
                timing: "Spring, weeds less than 4in. tall, good moisture conditions.",
                remarks: "Becasue of metsulfuron methyl in the formulation, there herbicides are not recommended on bahiagrass pastures for weed control."
            },

            {
                herbicideName: "metsulfuron:chlorosulfuron (1:1)",
                herbicideQuantity: {
                    broadcast: {
                        contolRating: "VH",
                        rate: "0.2oz"
                    }, 
                    IPT: {
                        contolRating: null,
                        rate: null
                    }
                },
                sprayVolume: "2-4 gal water for aerial spray; 10-25gal water for ground broadcast application. Thoroughly wet foliage for individual plant treatment. Add 32-64oz surfactant/100gal water.",
                timing: "Spring, weeds less than 4in. tall, good moisture conditions.",
                remarks: "Becasue of metsulfuron methyl in the formulation, there herbicides are not recommended on bahiagrass pastures for weed control."
            },
        ]
    }, 

    {
        plantName: ["broom snakeweed (perennial broomweed)"],
        herbicides: [
            {
                herbicideName: "picloram",
                herbicideQuantity: {
                    broadcast: {
                        contolRating: "VH",
                        rate: "16-32oz (0.25-0.5lb)"
                    }, 
                    IPT: {
                        contolRating: "VH",
                        rate: "0.5%"
                    }
                },
                sprayVolume: "2-4 gal water for aerial spray; 10-25gal water for ground broadcast application. Thoroughly wet foliage for individual plant treatment. Add 32-64oz surfactant/100gal water.",
                timing: "During and after full flower stage in fall when growth conditions are good; or spring during peak plant growth when growth conditions are good.",
                remarks: "Use 16 oz/ac picloram only in the fall. Use 32oz/ac picloram in the spring. Poor control may be expected if dicamba:2,4-D (1:3) or dicamba:2,4-D mixture is used when growth conditions are less than ideal. Growth conditions should be optimum if picloram:2,4-D (1:4) or picloram:2,4-D mixture is used in the spring. Picloram:2,4-D (1:4), (3.8lb/gal product): Do not apply more than 80oz/acre per year."
            },

            {
                herbicideName: "picloram:2,4-D (1:4), (3.8lb/gal product)",
                herbicideQuantity: {
                    broadcast: {
                        contolRating: "VH",
                        rate: "43oz (1.25lb)"
                    }, 
                    IPT: {
                        contolRating: "VH",
                        rate: "0.63%"
                    }
                },
                sprayVolume: "2-4 gal water for aerial spray; 10-25gal water for ground broadcast application. Thoroughly wet foliage for individual plant treatment. Add 32-64oz surfactant/100gal water.",
                timing: "During and after full flower stage in fall when growth conditions are good; or spring during peak plant growth when growth conditions are good.",
                remarks: "Use 16 oz/ac picloram only in the fall. Use 32oz/ac picloram in the spring. Poor control may be expected if dicamba:2,4-D (1:3) or dicamba:2,4-D mixture is used when growth conditions are less than ideal. Growth conditions should be optimum if picloram:2,4-D (1:4) or picloram:2,4-D mixture is used in the spring. Picloram:2,4-D (1:4), (3.8lb/gal product): Do not apply more than 80oz/acre per year."
            },

            {
                herbicideName: "picloram:2,4-D (1:4) (2.5lb/gal product)",
                herbicideQuantity: {
                    broadcast: {
                        contolRating: "VH",
                        rate: "64oz (1.25lb)"
                    }, 
                    IPT: {
                        contolRating: "VH",
                        rate: "1%"
                    }
                },
                sprayVolume: "2-4 gal water for aerial spray; 10-25gal water for ground broadcast application. Thoroughly wet foliage for individual plant treatment. Add 32-64oz surfactant/100gal water.",
                timing: "During and after full flower stage in fall when growth conditions are good; or spring during peak plant growth when growth conditions are good.",
                remarks: "Use 16 oz/ac picloram only in the fall. Use 32oz/ac picloram in the spring. Poor control may be expected if dicamba:2,4-D (1:3) or dicamba:2,4-D mixture is used when growth conditions are less than ideal. Growth conditions should be optimum if picloram:2,4-D (1:4) or picloram:2,4-D mixture is used in the spring. Picloram:2,4-D (1:4), (3.8lb/gal product): Do not apply more than 80oz/acre per year."
            },

            {
                herbicideName: "picloram:fluroxypyr (1:1)",
                herbicideQuantity: {
                    broadcast: {
                        contolRating: "VH",
                        rate: "48-96oz (0.5-1.0lb)"
                    }, 
                    IPT: {
                        contolRating: "VH",
                        rate: "1%"
                    }
                },
                sprayVolume: "2-4 gal water for aerial spray; 10-25gal water for ground broadcast application. Thoroughly wet foliage for individual plant treatment. Add 32-64oz surfactant/100gal water.",
                timing: "During and after full flower stage in fall when growth conditions are good; or spring during peak plant growth when growth conditions are good.",
                remarks: "Use 16 oz/ac picloram only in the fall. Use 32oz/ac picloram in the spring. Poor control may be expected if dicamba:2,4-D (1:3) or dicamba:2,4-D mixture is used when growth conditions are less than ideal. Growth conditions should be optimum if picloram:2,4-D (1:4) or picloram:2,4-D mixture is used in the spring. Picloram:2,4-D (1:4), (3.8lb/gal product): Do not apply more than 80oz/acre per year."
            },

            {
                herbicideName: "picloram + 2,4-D amine or low volatile ester",
                herbicideQuantity: {
                    broadcast: {
                        contolRating: "VH",
                        rate: "16oz (0.25lb) picloram + 16-32oz (0.5-1.0lb) 2,4-D (4lb/gal product)"
                    }, 
                    IPT: {
                        contolRating: "VH",
                        rate: "0.25% picloram + 0.5% 2,4-D (4lb/gal product)"
                    }
                },
                sprayVolume: "2-4 gal water for aerial spray; 10-25gal water for ground broadcast application. Thoroughly wet foliage for individual plant treatment. Add 32-64oz surfactant/100gal water.",
                timing: "During and after full flower stage in fall when growth conditions are good; or spring during peak plant growth when growth conditions are good.",
                remarks: "Use 16 oz/ac picloram only in the fall. Use 32oz/ac picloram in the spring. Poor control may be expected if dicamba:2,4-D (1:3) or dicamba:2,4-D mixture is used when growth conditions are less than ideal. Growth conditions should be optimum if picloram:2,4-D (1:4) or picloram:2,4-D mixture is used in the spring. Picloram:2,4-D (1:4), (3.8lb/gal product): Do not apply more than 80oz/acre per year."
            },

            {
                herbicideName: "dicamba:2,4-D (1:1.3)",
                herbicideQuantity: {
                    broadcast: {
                        contolRating: "VH",
                        rate: "32oz (1lb)"
                    }, 
                    IPT: {
                        contolRating: "VH",
                        rate: "1%"
                    }
                },
                sprayVolume: "2-4 gal water for aerial spray; 10-25gal water for ground broadcast application. Thoroughly wet foliage for individual plant treatment. Add 32-64oz surfactant/100gal water.",
                timing: "During and after full flower stage in fall when growth conditions are good; or spring during peak plant growth when growth conditions are good.",
                remarks: "Use 16 oz/ac picloram only in the fall. Use 32oz/ac picloram in the spring. Poor control may be expected if dicamba:2,4-D (1:3) or dicamba:2,4-D mixture is used when growth conditions are less than ideal. Growth conditions should be optimum if picloram:2,4-D (1:4) or picloram:2,4-D mixture is used in the spring. Picloram:2,4-D (1:4), (3.8lb/gal product): Do not apply more than 80oz/acre per year."
            },

            {
                herbicideName: "dicamba:2,4-D (1:1.3) + 2,4-D amine or low volatile ester",
                herbicideQuantity: {
                    broadcast: {
                        contolRating: "VH",
                        rate: "9-22oz (0.28-0.69lb) dicamba:2,4-D (1:1.3) + 14-32oz (0.44-1.0lb) 2,4-D (4lb/gal product)"
                    }, 
                    IPT: {
                        contolRating: null,
                        rate: null
                    }
                },
                sprayVolume: "2-4 gal water for aerial spray; 10-25gal water for ground broadcast application. Thoroughly wet foliage for individual plant treatment. Add 32-64oz surfactant/100gal water.",
                timing: "During and after full flower stage in fall when growth conditions are good; or spring during peak plant growth when growth conditions are good.",
                remarks: "Use 16 oz/ac picloram only in the fall. Use 32oz/ac picloram in the spring. Poor control may be expected if dicamba:2,4-D (1:3) or dicamba:2,4-D mixture is used when growth conditions are less than ideal. Growth conditions should be optimum if picloram:2,4-D (1:4) or picloram:2,4-D mixture is used in the spring. Picloram:2,4-D (1:4), (3.8lb/gal product): Do not apply more than 80oz/acre per year."
            },

            {
                herbicideName: "dicamba + 2,4-D amine or low volatile ester",
                herbicideQuantity: {
                    broadcast: {
                        contolRating: "VH",
                        rate: "8oz (0.25lb) dicamba + 24oz (0.75lb) 2,4-D (4lb/gal product)"
                    }, 
                    IPT: {
                        contolRating: "VH",
                        rate: "0.25% dicamba + 0.75% 2,4-D (4lb/gal product)"
                    }
                },
                sprayVolume: "2-4 gal water for aerial spray; 10-25gal water for ground broadcast application. Thoroughly wet foliage for individual plant treatment. Add 32-64oz surfactant/100gal water.",
                timing: "During and after full flower stage in fall when growth conditions are good; or spring during peak plant growth when growth conditions are good.",
                remarks: "Use 16 oz/ac picloram only in the fall. Use 32oz/ac picloram in the spring. Poor control may be expected if dicamba:2,4-D (1:3) or dicamba:2,4-D mixture is used when growth conditions are less than ideal. Growth conditions should be optimum if picloram:2,4-D (1:4) or picloram:2,4-D mixture is used in the spring. Picloram:2,4-D (1:4), (3.8lb/gal product): Do not apply more than 80oz/acre per year."
            }, 

            {
                herbicideName: "metsulfuron methyl",
                herbicideQuantity: {
                    broadcast: {
                        contolRating: "VH",
                        rate: "0.6oz"
                    }, 
                    IPT: {
                        contolRating: null,
                        rate: null
                    }
                },
                sprayVolume: "2-4gal water for aerial spray; 10-25gal water for ground broadcast application. Add 32-64oz surfactant or 2gal crop oil/100gal water.",
                timing: "Optimum time is in the fall, but may be applied in the spring.",
                remarks: "Becasue of metsulfuron methyl in the formulation, there herbicides are not recommended on bahiagrass pastures for weed control."
            },

            {
                herbicideName: "metsulfuron:chlorosulfuron (3:1)",
                herbicideQuantity: {
                    broadcast: {
                        contolRating: "VH",
                        rate: "0.75oz"
                    }, 
                    IPT: {
                        contolRating: null,
                        rate: null
                    }
                },
                sprayVolume: "2-4gal water for aerial spray; 10-25gal water for ground broadcast application. Add 32-64oz surfactant or 2gal crop oil/100gal water.",
                timing: "Optimum time is in the fall, but may be applied in the spring.",
                remarks: "Becasue of metsulfuron methyl in the formulation, there herbicides are not recommended on bahiagrass pastures for weed control."
            },

            {
                herbicideName: "metsulfuron:chlorosulfuron (1:1)",
                herbicideQuantity: {
                    broadcast: {
                        contolRating: "VH",
                        rate: "1.2oz"
                    }, 
                    IPT: {
                        contolRating: null,
                        rate: null
                    }
                },
                sprayVolume: "2-4gal water for aerial spray; 10-25gal water for ground broadcast application. Add 32-64oz surfactant or 2gal crop oil/100gal water.",
                timing: "Optimum time is in the fall, but may be applied in the spring.",
                remarks: "Becasue of metsulfuron methyl in the formulation, there herbicides are not recommended on bahiagrass pastures for weed control."
            },

            {
                herbicideName: "metsulfuron methyl dicamba:2,4-D (1:3)",
                herbicideQuantity: {
                    broadcast: {
                        contolRating: "H-VH",
                        rate: "Rate 1-Rate 2"
                    }, 
                    IPT: {
                        contolRating: null,
                        rate: null
                    }
                },
                sprayVolume: "2-4gal water for aerial spray; 10-25gal water for ground broadcast application. Add 32-64oz surfactant or 2gal crop oil/100gal water.",
                timing: "Optimum time is in the fall, but may be applied in the spring.",
                remarks: "Becasue of metsulfuron methyl in the formulation, there herbicides are not recommended on bahiagrass pastures for weed control."
            },

            {
                herbicideName: "tebuthiuron 20% pellets",
                herbicideQuantity: {
                    broadcast: {
                        contolRating: "VH",
                        rate: "3.75lb pellets (0.75lb active ingredient)"
                    }, 
                    IPT: {
                        contolRating: "VH",
                        rate: "0.57oz of pellets (0.033oz active ingredient)/100sq ft of ground area"
                    }
                },
                sprayVolume: null,
                timing: "Anytime - optimum period is Oct 1-Apr 1 except in Trans Pecos, where optimum period is May 1-Jul 1",
                remarks: "Use only on sand, loamy sand, sandy loam, loam, silt loam, silt, or sandy clay loam soils."
            }
        ]
    }, 

    {
        plantName: ["bullnettle", "Carolina horsenettle", "dogfennel", "silverleaf nightshade", "upright prairie-coneflower", "western horsenettle (treadslave)", "yankeeweed (rosin weed)"],
        herbicides: [
            {
                herbicideName: "picloram:2,4-D (1:4), (3.8lb/gal product)",
                herbicideQuantity: {
                    broadcast: {
                        contolRating: "VH",
                        rate: "20-32oz (0.6-0.9lb)"
                    }, 
                    IPT: {
                        contolRating: "VH",
                        rate: "0.63%"
                    }
                },
                sprayVolume: "2-4 gal water for aerial spray; 10-25gal water for ground broadcast application. Thoroughly wet foliage for individual plant treatment. Add 32-64oz surfactant/100gal water.",
                timing: "Spring (see remarks)",
                remarks: "Spray bullnettle, Carolina horsenettle, silverleaf nightshade, and western horsenettle when plants begin to flower in the spring. Spray dogfennel and yankeeweed when plants are 8-10in. tall. Spray upright prairie-coneflower when plants are 2-6in. tall before flowering. Picloram:2,4-D (1:4), (3.8lb/gal product): Do not apply more than 80oz/acre per year. Because of metsulfuron methyl in the formulation, these herbicides are not recommended on bahiagrass pastures for weed control."
            },

            {
                herbicideName: "picloram:2,4-D (1:4), (2.5lb/gal product)",
                herbicideQuantity: {
                    broadcast: {
                        contolRating: "VH",
                        rate: "32-48oz (0.6-0.94lb)"
                    }, 
                    IPT: {
                        contolRating: "VH",
                        rate: "1%"
                    }
                },
                sprayVolume: "2-4 gal water for aerial spray; 10-25gal water for ground broadcast application. Thoroughly wet foliage for individual plant treatment. Add 32-64oz surfactant/100gal water.",
                timing: "Spring (see remarks)",
                remarks: "Spray bullnettle, Carolina horsenettle, silverleaf nightshade, and western horsenettle when plants begin to flower in the spring. Spray dogfennel and yankeeweed when plants are 8-10in. tall. Spray upright prairie-coneflower when plants are 2-6in. tall before flowering. Picloram:2,4-D (1:4), (3.8lb/gal product): Do not apply more than 80oz/acre per year. Because of metsulfuron methyl in the formulation, these herbicides are not recommended on bahiagrass pastures for weed control."
            },

            {
                herbicideName: "picloram + 2,4-D amine or low volatile ester",
                herbicideQuantity: {
                    broadcast: {
                        contolRating: "VH",
                        rate: "8-12oz (0.125-0.1875lb) picloram + 16-24oz (0.5-0.75lb) 2,4-D (4lb/gal product)"
                    }, 
                    IPT: {
                        contolRating: "VH",
                        rate: "0.25% picloram + 0.50% 2,4-D (4lb/gal product)"
                    }
                },
                sprayVolume: "2-4 gal water for aerial spray; 10-25gal water for ground broadcast application. Thoroughly wet foliage for individual plant treatment. Add 32-64oz surfactant/100gal water.",
                timing: "Spring (see remarks)",
                remarks: "Spray bullnettle, Carolina horsenettle, silverleaf nightshade, and western horsenettle when plants begin to flower in the spring. Spray dogfennel and yankeeweed when plants are 8-10in. tall. Spray upright prairie-coneflower when plants are 2-6in. tall before flowering. Picloram:2,4-D (1:4), (3.8lb/gal product): Do not apply more than 80oz/acre per year. Because of metsulfuron methyl in the formulation, these herbicides are not recommended on bahiagrass pastures for weed control."
            },

            {
                herbicideName: "picloram:fluroxypyr (1:1)",
                herbicideQuantity: {
                    broadcast: {
                        contolRating: "VH",
                        rate: "24-32oz (0.25-0.33lb)"
                    }, 
                    IPT: {
                        contolRating: "VH",
                        rate: "1%"
                    }
                },
                sprayVolume: "2-4 gal water for aerial spray; 10-25gal water for ground broadcast application. Thoroughly wet foliage for individual plant treatment. Add 32-64oz surfactant/100gal water.",
                timing: "Spring (see reamrks)",
                remarks: "Spray bullnettle, Carolina horsenettle, silverleaf nightshade, and western horsenettle when plants begin to flower in the spring. Spray dogfennel and yankeeweed when plants are 8-10in. tall. Spray upright prairie-coneflower when plants are 2-6in. tall before flowering. Picloram:2,4-D (1:4), (3.8lb/gal product): Do not apply more than 80oz/acre per year. Because of metsulfuron methyl in the formulation, these herbicides are not recommended on bahiagrass pastures for weed control."
            },

            {
                herbicideName: "metsulfuron methyl dicamba:2,4-D (1:3)",
                herbicideQuantity: {
                    broadcast: {
                        contolRating: "H-VH",
                        rate: "Rate 1-Rate 2"
                    }, 
                    IPT: {
                        contolRating: null,
                        rate: null
                    }
                },
                sprayVolume: "2-4 gal water for aerial spray; 10-25gal water for ground broadcast application. Thoroughly wet foliage for individual plant treatment. Add 32-64oz surfactant/100gal water.",
                timing: "Spring (see remarks)",
                remarks: "Spray bullnettle, Carolina horsenettle, silverleaf nightshade, and western horsenettle when plants begin to flower in the spring. Spray dogfennel and yankeeweed when plants are 8-10in. tall. Spray upright prairie-coneflower when plants are 2-6in. tall before flowering. Picloram:2,4-D (1:4), (3.8lb/gal product): Do not apply more than 80oz/acre per year. Because of metsulfuron methyl in the formulation, these herbicides are not recommended on bahiagrass pastures for weed control."
            },

            {
                herbicideName: "dicambe:2,4-D (1:3)",
                herbicideQuantity: {
                    broadcast: {
                        contolRating: "VH",
                        rate: "32oz (1lb"
                    }, 
                    IPT: {
                        contolRating: "VH",
                        rate: "1%"
                    }
                },
                sprayVolume: "2-4 gal water for aerial spray; 10-25gal water for ground broadcast application. Thoroughly wet foliage for individual plant treatment. Add 32-64oz surfactant/100gal water.",
                timing: "Spring (see remarks)",
                remarks: "Spray bullnettle, Carolina horsenettle, silverleaf nightshade, and western horsenettle when plants begin to flower in the spring. Spray dogfennel and yankeeweed when plants are 8-10in. tall. Spray upright prairie-coneflower when plants are 2-6in. tall before flowering. Picloram:2,4-D (1:4), (3.8lb/gal product): Do not apply more than 80oz/acre per year. Because of metsulfuron methyl in the formulation, these herbicides are not recommended on bahiagrass pastures for weed control."
            },

            {
                herbicideName: "dicamba:2,4-D + 2,4-D amine or low volatile ester",
                herbicideQuantity: {
                    broadcast: {
                        contolRating: "VH",
                        rate: "9-22oz (0.28-0.69lb) dicamba:2,4-D (1:1.3) + 14-32oz (0.44-1.0lb) 2,4-D (4lb/gal product)"
                    }, 
                    IPT: {
                        contolRating: null,
                        rate: null
                    }
                },
                sprayVolume: "2-4 gal water for aerial spray; 10-25gal water for ground broadcast application. Thoroughly wet foliage for individual plant treatment. Add 32-64oz surfactant/100gal water.",
                timing: "Spring (see remarks)",
                remarks: "Spray bullnettle, Carolina horsenettle, silverleaf nightshade, and western horsenettle when plants begin to flower in the spring. Spray dogfennel and yankeeweed when plants are 8-10in. tall. Spray upright prairie-coneflower when plants are 2-6in. tall before flowering. Picloram:2,4-D (1:4), (3.8lb/gal product): Do not apply more than 80oz/acre per year. Because of metsulfuron methyl in the formulation, these herbicides are not recommended on bahiagrass pastures for weed control."
            },

            {
                herbicideName: "dicamba + 2,4-D amine of low volatile ester",
                herbicideQuantity: {
                    broadcast: {
                        contolRating: "VH",
                        rate: "8oz (0.25lb) dicamba + 24oz (0.75lb) 2,4-D (4lb/gal product)"
                    }, 
                    IPT: {
                        contolRating: "VH",
                        rate: "0.25% dicamba + 0.75% 2,4-D (4lb/gal product)"
                    }
                },
                sprayVolume: "2-4 gal water for aerial spray; 10-25gal water for ground broadcast application. Thoroughly wet foliage for individual plant treatment. Add 32-64oz surfactant/100gal water.",
                timing: "Spring (see remarks)",
                remarks: "Spray bullnettle, Carolina horsenettle, silverleaf nightshade, and western horsenettle when plants begin to flower in the spring. Spray dogfennel and yankeeweed when plants are 8-10in. tall. Spray upright prairie-coneflower when plants are 2-6in. tall before flowering. Picloram:2,4-D (1:4), (3.8lb/gal product): Do not apply more than 80oz/acre per year. Because of metsulfuron methyl in the formulation, these herbicides are not recommended on bahiagrass pastures for weed control."
            },

            {
                herbicideName: "aminopyralid:metsulfuron methyl (1:6.2)",
                herbicideQuantity: {
                    broadcast: {
                        contolRating: "VH",
                        rate: "2.0-3.3oz (0.078-0.127lb)"
                    }, 
                    IPT: {
                        contolRating: null,
                        rate: null
                    }
                },
                sprayVolume: "2-4 gal water for aerial spray; 10-25gal water for ground broadcast application. Thoroughly wet foliage for individual plant treatment. Add 32-64oz surfactant/100gal water.",
                timing: "Spring (see remarks)",
                remarks: "Spray bullnettle, silverleaf nightshade, and western horsenettle when plants begin to flower in the spring. Because of metsulfuron methyl in the formulation, these herbicides are not recommended on bahiagrass pastures for weed control."
            },

            {
                herbicideName: "aminopyralid:2,4-D (1:8)",
                herbicideQuantity: {
                    broadcast: {
                        contolRating: "VH",
                        rate: "24oz (0.70lb)"
                    }, 
                    IPT: {
                        contolRating: null,
                        rate: null
                    }
                },
                sprayVolume: "2-4 gal water for aerial spray; 10-25gal water for ground broadcast application. Thoroughly wet foliage for individual plant treatment. Add 32-64oz surfactant/100gal water.",
                timing: "Spring (see remarks)",
                remarks: "Spray bullnettle, silverleaf nightshade, and western horsenettle when plants begin to flower in the spring. Because of metsulfuron methyl in the formulation, these herbicides are not recommended on bahiagrass pastures for weed control."
            }
        ]
    }, 

    {
        plantName: ["common goldenweed", "Drummond's goldenweed"],
        herbicides: [
            {
                herbicideName: "2,4-D low volatile ester",
                herbicideQuantity: {
                    broadcast: {
                        contolRating: "VH",
                        rate: "64oz (2lb) 4lb/gal product"
                    }, 
                    IPT: {
                        contolRating: "VH",
                        rate: "2% (4lb/gal product)"
                    }
                },
                sprayVolume: "2-4 gal water for aerial spray; 10-25gal water for ground broadcast application. Thoroughly wet foliage for individual plant treatment. Add 32-64oz surfactant/100gal water.",
                timing: "Spring, when growth conditions are good.",
                remarks: "Picloram:2,4-D (1:4), dicamba:2,4-D (1:3), and mixtures of dicamba:2,4-D and picloram:2,4-D are more effective than 2,4-D alone when growth conditions are less than optimal. Picloram:2,4-D (1:4), (3.8lb/gal product): Do not apply more than 80oz/acre per year. Because of metsulfuron methyl in the formulation, these herbicides are not recommended on bahiagrass pastures for weed control."
            },

            {
                herbicideName: "dicamba:2,4-D (1:3)",
                herbicideQuantity: {
                    broadcast: {
                        contolRating: "VH",
                        rate: "48oz (1.5lb)"
                    }, 
                    IPT: {
                        contolRating: "VH",
                        rate: "2%"
                    }
                },
                sprayVolume: "2-4 gal water for aerial spray; 10-25gal water for ground broadcast application. Thoroughly wet foliage for individual plant treatment. Add 32-64oz surfactant/100gal water.",
                timing: "Spring, when growth conditions are good.",
                remarks: "Picloram:2,4-D (1:4), dicamba:2,4-D (1:3), and mixtures of dicamba:2,4-D and picloram:2,4-D are more effective than 2,4-D alone when growth conditions are less than optimal. Picloram:2,4-D (1:4), (3.8lb/gal product): Do not apply more than 80oz/acre per year. Because of metsulfuron methyl in the formulation, these herbicides are not recommended on bahiagrass pastures for weed control."
            },

            {
                herbicideName: "dicamba:2,4-D (1:1.3) + 2,4-D amine or low volatile ester",
                herbicideQuantity: {
                    broadcast: {
                        contolRating: "VH",
                        rate: "9-22oz (0.28-0.69lb) dicamba:2,4-D (1:1.3) + 14-32oz (0.44-1.0lb) 2,4-D (4lb/gal product)"
                    }, 
                    IPT: {
                        contolRating: null,
                        rate: null
                    }
                },
                sprayVolume: "2-4 gal water for aerial spray; 10-25gal water for ground broadcast application. Thoroughly wet foliage for individual plant treatment. Add 32-64oz surfactant/100gal water.",
                timing: "Spring, when growth conditions are good.",
                remarks: "Picloram:2,4-D (1:4), dicamba:2,4-D (1:3), and mixtures of dicamba:2,4-D and picloram:2,4-D are more effective than 2,4-D alone when growth conditions are less than optimal. Picloram:2,4-D (1:4), (3.8lb/gal product): Do not apply more than 80oz/acre per year. Because of metsulfuron methyl in the formulation, these herbicides are not recommended on bahiagrass pastures for weed control."
            },

            {
                herbicideName: "picloram:fluroxypyr (1:1)",
                herbicideQuantity: {
                    broadcast: {
                        contolRating: "VH",
                        rate: "32oz (0.33lb)"
                    }, 
                    IPT: {
                        contolRating: "VH",
                        rate: "1%"
                    }
                },
                sprayVolume: "2-4 gal water for aerial spray; 10-25gal water for ground broadcast application. Thoroughly wet foliage for individual plant treatment. Add 32-64oz surfactant/100gal water.",
                timing: "Spring, when growth conditions are good.",
                remarks: "Picloram:2,4-D (1:4), dicamba:2,4-D (1:3), and mixtures of dicamba:2,4-D and picloram:2,4-D are more effective than 2,4-D alone when growth conditions are less than optimal. Picloram:2,4-D (1:4), (3.8lb/gal product): Do not apply more than 80oz/acre per year. Because of metsulfuron methyl in the formulation, these herbicides are not recommended on bahiagrass pastures for weed control."
            },

            {
                herbicideName: "triclopyr:fluroxypyr (3:1)",
                herbicideQuantity: {
                    broadcast: {
                        contolRating: "H",
                        rate: "32-48oz (0.5-0.75lb)"
                    }, 
                    IPT: {
                        contolRating: "VH",
                        rate: "1%"
                    }
                },
                sprayVolume: "2-4 gal water for aerial spray; 10-25gal water for ground broadcast application. Thoroughly wet foliage for individual plant treatment. Add 32-64oz surfactant/100gal water.",
                timing: "Spring, when growth conditions are good.",
                remarks: "Picloram:2,4-D (1:4), dicamba:2,4-D (1:3), and mixtures of dicamba:2,4-D and picloram:2,4-D are more effective than 2,4-D alone when growth conditions are less than optimal. Picloram:2,4-D (1:4), (3.8lb/gal product): Do not apply more than 80oz/acre per year. Because of metsulfuron methyl in the formulation, these herbicides are not recommended on bahiagrass pastures for weed control."
            },

            {
                herbicideName: "metsulfuron methyl dicamba:2,4-D (1:3)",
                herbicideQuantity: {
                    broadcast: {
                        contolRating: "VH",
                        rate: "Rate 3"
                    }, 
                    IPT: {
                        contolRating: null,
                        rate: null
                    }
                },
                sprayVolume: "2-4 gal water for aerial spray; 10-25gal water for ground broadcast application. Thoroughly wet foliage for individual plant treatment. Add 32-64oz surfactant/100gal water.",
                timing: "Spring, when growth conditions are good.",
                remarks: "Picloram:2,4-D (1:4), dicamba:2,4-D (1:3), and mixtures of dicamba:2,4-D and picloram:2,4-D are more effective than 2,4-D alone when growth conditions are less than optimal. Picloram:2,4-D (1:4), (3.8lb/gal product): Do not apply more than 80oz/acre per year. Because of metsulfuron methyl in the formulation, these herbicides are not recommended on bahiagrass pastures for weed control."
            },

            {
                herbicideName: "dicamba + 2,4-D amine or low volatile ester",
                herbicideQuantity: {
                    broadcast: {
                        contolRating: "VH",
                        rate: "12oz (0.375lb) dicamba + 36oz (1.125lb) 2,4-D (4lb/gal product)"
                    }, 
                    IPT: {
                        contolRating: "VH",
                        rate: "0.5% dicamba + 1.5% 2,4-D (4lb/gal product)"
                    }
                },
                sprayVolume: "2-4 gal water for aerial spray; 10-25gal water for ground broadcast application. Thoroughly wet foliage for individual plant treatment. Add 32-64oz surfactant/100gal water.",
                timing: "Spring, when growth conditions are good.",
                remarks: "Picloram:2,4-D (1:4), dicamba:2,4-D (1:3), and mixtures of dicamba:2,4-D and picloram:2,4-D are more effective than 2,4-D alone when growth conditions are less than optimal. Picloram:2,4-D (1:4), (3.8lb/gal product): Do not apply more than 80oz/acre per year. Because of metsulfuron methyl in the formulation, these herbicides are not recommended on bahiagrass pastures for weed control."
            },

            {
                herbicideName: "picloram:2,4-D (1:4), (3.8lb/gal product)",
                herbicideQuantity: {
                    broadcast: {
                        contolRating: "VH",
                        rate: "32oz (0.95lb)"
                    }, 
                    IPT: {
                        contolRating: "VH",
                        rate: "1.3%"
                    }
                },
                sprayVolume: "2-4 gal water for aerial spray; 10-25gal water for ground broadcast application. Thoroughly wet foliage for individual plant treatment. Add 32-64oz surfactant/100gal water.",
                timing: "Spring, when growth conditions are good.",
                remarks: "Picloram:2,4-D (1:4), dicamba:2,4-D (1:3), and mixtures of dicamba:2,4-D and picloram:2,4-D are more effective than 2,4-D alone when growth conditions are less than optimal. Picloram:2,4-D (1:4), (3.8lb/gal product): Do not apply more than 80oz/acre per year. Because of metsulfuron methyl in the formulation, these herbicides are not recommended on bahiagrass pastures for weed control."
            }, 

            {
                herbicideName: "picloram:2,4-D (1:4), (2.5lb/gal product)",
                herbicideQuantity: {
                    broadcast: {
                        contolRating: "VH",
                        rate: "48oz (0.64lb)"
                    }, 
                    IPT: {
                        contolRating: "VH",
                        rate: "2%"
                    }
                },
                sprayVolume: "2-4 gal water for aerial spray; 10-25gal water for ground broadcast application. Thoroughly wet foliage for individual plant treatment. Add 32-64oz surfactant/100gal water.",
                timing: "Spring, when growth conditions are good.",
                remarks: "Picloram:2,4-D (1:4), dicamba:2,4-D (1:3), and mixtures of dicamba:2,4-D and picloram:2,4-D are more effective than 2,4-D alone when growth conditions are less than optimal. Picloram:2,4-D (1:4), (3.8lb/gal product): Do not apply more than 80oz/acre per year. Because of metsulfuron methyl in the formulation, these herbicides are not recommended on bahiagrass pastures for weed control."
            },

            {
                herbicideName: "picloram + 2,4-D amine or low volatile ester",
                herbicideQuantity: {
                    broadcast: {
                        contolRating: "VH",
                        rate: "12oz (0.19lb) picloram + 24oz (0.75lb) 2,4-D (4lb/gal product)"
                    }, 
                    IPT: {
                        contolRating: "VH",
                        rate: "0.50% picloram + 2,4-D (4lb/gal product)"
                    }
                },
                sprayVolume: "2-4 gal water for aerial spray; 10-25gal water for ground broadcast application. Thoroughly wet foliage for individual plant treatment. Add 32-64oz surfactant/100gal water.",
                timing: "Spring, when growth conditions are good.",
                remarks: "Picloram:2,4-D (1:4), dicamba:2,4-D (1:3), and mixtures of dicamba:2,4-D and picloram:2,4-D are more effective than 2,4-D alone when growth conditions are less than optimal. Picloram:2,4-D (1:4), (3.8lb/gal product): Do not apply more than 80oz/acre per year. Because of metsulfuron methyl in the formulation, these herbicides are not recommended on bahiagrass pastures for weed control."
            }
        ]
    }, 

    {
        plantName: ["flat sedge"],
        herbicides: [
            {
                herbicideName: "dicamba:2,4-D (1:3)",
                herbicideQuantity: {
                    broadcast: {
                        contolRating: "VH",
                        rate: "64oz (2lb)"
                    }, 
                    IPT: {
                        contolRating: null,
                        rate: null
                    }
                },
                sprayVolume: "Ground broadcast 20-30gal per acre. Add 32-64oz surfactant/100gal water.",
                timing: "Spring or Fall",
                remarks: "Control may be enhanced if the stand is burned and/or shredded and allowed to regrow to a height of 12-15in. before spraying. Becasue of of metsulfuron methyl in the formulation, these herbicides are not recommended on bahiagrass pastures for weed control."
            },

            {
                herbicideName: "dicamba:2,4-D (1:1.3) + 2,4-D amine or low volatile ester",
                herbicideQuantity: {
                    broadcast: {
                        contolRating: "VH",
                        rate: "9-22oz (0.28-0.69lb) dicamba:2,4-D (1:1.3) + 14-32oz (0.44-1.0lb) 2,4-D (4lb/gal product)"
                    }, 
                    IPT: {
                        contolRating: null,
                        rate: null
                    }
                },
                sprayVolume: "Ground broadcast 20-30gal per acre. Add 32-64oz surfactant/100gal water.",
                timing: "Spring or Fall",
                remarks: "Control may be enhanced if the stand is burned and/or shredded and allowed to regrow to a height of 12-15in. before spraying. Becasue of of metsulfuron methyl in the formulation, these herbicides are not recommended on bahiagrass pastures for weed control."
            },

            {
                herbicideName: "metsulfuron methyl dicamba:2,4-D (1-3)",
                herbicideQuantity: {
                    broadcast: {
                        contolRating: "VH",
                        rate: "Rate 2"
                    }, 
                    IPT: {
                        contolRating: null,
                        rate: null
                    }
                },
                sprayVolume: "Ground broadcast 20-30gal per acre. Add 32-64oz surfactant/100gal water.",
                timing: "Spring or Fall",
                remarks: "Control may be enhanced if the stand is burned and/or shredded and allowed to regrow to a height of 12-15in. before spraying. Becasue of of metsulfuron methyl in the formulation, these herbicides are not recommended on bahiagrass pastures for weed control."
            } 
        ]
    }, 

    {
        plantName: ["garboncillo", "threadleaf groundsel", "wooly locoweed"],
        herbicides: [
            {
                herbicideName: "picloram:2,4-D (1:4), (3.8lb/gal product)",
                herbicideQuantity: {
                    broadcast: {
                        contolRating: "VH",
                        rate: "32oz (0.95lb)"
                    }, 
                    IPT: {
                        contolRating: "VH",
                        rate: "1.3%"
                    }
                },
                sprayVolume: "2-4 gal water for aerial spray; 10-25gal water for ground broadcast application. Thoroughly wet foliage for individual plant treatment. Add 32-64oz surfactant/100gal water.",
                timing: "Fall, when growing conditions are good.",
                remarks: "Herbicide application may increase palatability of these poisonous plants. Therefore, do not graze treated areas until the toxic plants dry up and lose their palatability. Picloram:2,4-D (1:4), (3.8lb/gal product): Do not apply more than 80oz/acre per year. Because of metsulfuron methyl in the formulation, these herbicides are not recommended on bahiagrass pastures for weed control."
            },

            {
                herbicideName: "picloram:2,4-D (1:4), (2.5lb/gal product)",
                herbicideQuantity: {
                    broadcast: {
                        contolRating: "VH",
                        rate: "48oz (0.94lb)"
                    }, 
                    IPT: {
                        contolRating: "VH",
                        rate: "2%"
                    }
                },
                sprayVolume: "2-4 gal water for aerial spray; 10-25gal water for ground broadcast application. Thoroughly wet foliage for individual plant treatment. Add 32-64oz surfactant/100gal water.",
                timing: "Fall, when growing conditions are good.",
                remarks: "Herbicide application may increase palatability of these poisonous plants. Therefore, do not graze treated areas until the toxic plants dry up and lose their palatability. Picloram:2,4-D (1:4), (3.8lb/gal product): Do not apply more than 80oz/acre per year. Because of metsulfuron methyl in the formulation, these herbicides are not recommended on bahiagrass pastures for weed control."
            },

            {
                herbicideName: "picloram + 2,4-D amine or low volatile ester",
                herbicideQuantity: {
                    broadcast: {
                        contolRating: "VH",
                        rate: "12oz (0.19lb) picloram + 24oz (0.75lb) 2,4-D (4lb/gal product)"
                    }, 
                    IPT: {
                        contolRating: "VH",
                        rate: "0.5% picloram + 1% 2,4-D (4lb/gal product"
                    }
                },
                sprayVolume: "2-4 gal water for aerial spray; 10-25gal water for ground broadcast application. Thoroughly wet foliage for individual plant treatment. Add 32-64oz surfactant/100gal water.",
                timing: "Fall, when growing conditions are good.",
                remarks: "Herbicide application may increase palatability of these poisonous plants. Therefore, do not graze treated areas until the toxic plants dry up and lose their palatability. Picloram:2,4-D (1:4), (3.8lb/gal product): Do not apply more than 80oz/acre per year. Because of metsulfuron methyl in the formulation, these herbicides are not recommended on bahiagrass pastures for weed control."
            },

            {
                herbicideName: "picloram:fluroxypyr (1:1)",
                herbicideQuantity: {
                    broadcast: {
                        contolRating: "VH",
                        rate: "32oz (0.33lb)"
                    }, 
                    IPT: {
                        contolRating: "VH",
                        rate: "1%"
                    }
                },
                sprayVolume: "2-4 gal water for aerial spray; 10-25gal water for ground broadcast application. Thoroughly wet foliage for individual plant treatment. Add 32-64oz surfactant/100gal water.",
                timing: "Fall, when growing conditions are good.",
                remarks: "Herbicide application may increase palatability of these poisonous plants. Therefore, do not graze treated areas until the toxic plants dry up and lose their palatability. Picloram:2,4-D (1:4), (3.8lb/gal product): Do not apply more than 80oz/acre per year. Because of metsulfuron methyl in the formulation, these herbicides are not recommended on bahiagrass pastures for weed control."
            },

            {
                herbicideName: "triclopyr:fluroxypyr (3:1)",
                herbicideQuantity: {
                    broadcast: {
                        contolRating: "H",
                        rate: "32-48oz (0.5-0.75lb)"
                    }, 
                    IPT: {
                        contolRating: "VH",
                        rate: "1%"
                    }
                },
                sprayVolume: "2-4 gal water for aerial spray; 10-25gal water for ground broadcast application. Thoroughly wet foliage for individual plant treatment. Add 32-64oz surfactant/100gal water.",
                timing: "Fall, when growing conditions are good.",
                remarks: "Herbicide application may increase palatability of these poisonous plants. Therefore, do not graze treated areas until the toxic plants dry up and lose their palatability. Picloram:2,4-D (1:4), (3.8lb/gal product): Do not apply more than 80oz/acre per year. Because of metsulfuron methyl in the formulation, these herbicides are not recommended on bahiagrass pastures for weed control."
            },

            {
                herbicideName: "metsulfuron methyl dicamba:2,4-D (1:3)",
                herbicideQuantity: {
                    broadcast: {
                        contolRating: "VH",
                        rate: "Rate 2"
                    }, 
                    IPT: {
                        contolRating: null,
                        rate: null
                    }
                },
                sprayVolume: "2-4 gal water for aerial spray; 10-25gal water for ground broadcast application. Thoroughly wet foliage for individual plant treatment. Add 32-64oz surfactant/100gal water.",
                timing: "Fall, when growing conditions are good.",
                remarks: "Herbicide application may increase palatability of these poisonous plants. Therefore, do not graze treated areas until the toxic plants dry up and lose their palatability. Picloram:2,4-D (1:4), (3.8lb/gal product): Do not apply more than 80oz/acre per year. Because of metsulfuron methyl in the formulation, these herbicides are not recommended on bahiagrass pastures for weed control."
            },

            {
                herbicideName: "dicamba:2,4-D (1:3)",
                herbicideQuantity: {
                    broadcast: {
                        contolRating: "VH",
                        rate: "32oz (1lb)"
                    }, 
                    IPT: {
                        contolRating: "VH",
                        rate: "2%"
                    }
                },
                sprayVolume: "2-4 gal water for aerial spray; 10-25gal water for ground broadcast application. Thoroughly wet foliage for individual plant treatment. Add 32-64oz surfactant/100gal water.",
                timing: "Fall, when growing conditions are good.",
                remarks: "Herbicide application may increase palatability of these poisonous plants. Therefore, do not graze treated areas until the toxic plants dry up and lose their palatability. Picloram:2,4-D (1:4), (3.8lb/gal product): Do not apply more than 80oz/acre per year. Because of metsulfuron methyl in the formulation, these herbicides are not recommended on bahiagrass pastures for weed control."
            },

            {
                herbicideName: "dicamba:2,4-D (1:1.3) + 2,4-D amine or low volatile ester",
                herbicideQuantity: {
                    broadcast: {
                        contolRating: "VH",
                        rate: "9-22oz (0.28-0.69lb) dicamba:2,4-D (1:1.3) + 14-32oz (0.44-1lb) 2,4-D (4lb/gal product)"
                    }, 
                    IPT: {
                        contolRating: null,
                        rate: null
                    }
                },
                sprayVolume: "2-4 gal water for aerial spray; 10-25gal water for ground broadcast application. Thoroughly wet foliage for individual plant treatment. Add 32-64oz surfactant/100gal water.",
                timing: "Fall, when growing conditions are good.",
                remarks: "Herbicide application may increase palatability of these poisonous plants. Therefore, do not graze treated areas until the toxic plants dry up and lose their palatability. Picloram:2,4-D (1:4), (3.8lb/gal product): Do not apply more than 80oz/acre per year. Because of metsulfuron methyl in the formulation, these herbicides are not recommended on bahiagrass pastures for weed control."
            }, 

            {
                herbicideName: "dicamba + 2,4-D amine or low volatile ester",
                herbicideQuantity: {
                    broadcast: {
                        contolRating: "VH",
                        rate: "12oz (0.375lb) dicamba + 36oz (1.125lb) 2,4-D (4lb/gal product)"
                    }, 
                    IPT: {
                        contolRating: "VH",
                        rate: "0.5% dicamba + 1.5% 2,4-D (4lb/gal product)"
                    }
                },
                sprayVolume: "2-4 gal water for aerial spray; 10-25gal water for ground broadcast application. Thoroughly wet foliage for individual plant treatment. Add 32-64oz surfactant/100gal water.",
                timing: "Fall, when growing conditions are good.",
                remarks: "Herbicide application may increase palatability of these poisonous plants. Therefore, do not graze treated areas until the toxic plants dry up and lose their palatability. Picloram:2,4-D (1:4), (3.8lb/gal product): Do not apply more than 80oz/acre per year. Because of metsulfuron methyl in the formulation, these herbicides are not recommended on bahiagrass pastures for weed control."
            }
        ]
    }, 

    {
        plantName: ["gray goldaster", "narrowleaf goldaster"],
        herbicides: [
            {
                herbicideName: "2,4-D low volatile ester",
                herbicideQuantity: {
                    broadcast: {
                        contolRating: "VH",
                        rate: "32oz (1lb)"
                    }, 
                    IPT: {
                        contolRating: "VH",
                        rate: "1%"
                    }
                },
                sprayVolume: "2-4 gal water for aerial spray; 10-25gal water for ground broadcast application. Thoroughly wet foliage for individual plant treatment. Add 32-64oz surfactant/100gal water.",
                timing: "Spring, during bud stage (pre-bloom).",
                remarks: "Bud stage usually occurs mid-May to early-June. Picloram:2,4-D (1:4), (3.8lb/gal product): Do not apply more than 80oz/acre per year. Because of metsulfuron methyl in the formulation, these herbicides are not recommended on bahiagrass pastures for weed control."
            },

            {
                herbicideName: "picloram:2,4-D (1:4) (3.8lb/gal product)",
                herbicideQuantity: {
                    broadcast: {
                        contolRating: "VH",
                        rate: "34oz (1lb)"
                    }, 
                    IPT: {
                        contolRating: "VH",
                        rate: "0.63%"
                    }
                },
                sprayVolume: "2-4 gal water for aerial spray; 10-25gal water for ground broadcast application. Thoroughly wet foliage for individual plant treatment. Add 32-64oz surfactant/100gal water.",
                timing: "Spring, during bud stage (pre-bloom).",
                remarks: "Bud stage usually occurs mid-May to early-June. Picloram:2,4-D (1:4), (3.8lb/gal product): Do not apply more than 80oz/acre per year. Because of metsulfuron methyl in the formulation, these herbicides are not recommended on bahiagrass pastures for weed control."
            },

            {
                herbicideName: "picloram:2,4-D (1:4) (2.5lb/gal product)",
                herbicideQuantity: {
                    broadcast: {
                        contolRating: "VH",
                        rate: "51oz (1lb)"
                    }, 
                    IPT: {
                        contolRating: "VH",
                        rate: "1%"
                    }
                },
                sprayVolume: "2-4 gal water for aerial spray; 10-25gal water for ground broadcast application. Thoroughly wet foliage for individual plant treatment. Add 32-64oz surfactant/100gal water.",
                timing: "Spring, during bud stage (pre-bloom).",
                remarks: "Bud stage usually occurs mid-May to early-June. Picloram:2,4-D (1:4), (3.8lb/gal product): Do not apply more than 80oz/acre per year. Because of metsulfuron methyl in the formulation, these herbicides are not recommended on bahiagrass pastures for weed control."
            },

            {
                herbicideName: "picloram + 2,4-D low volatile ester",
                herbicideQuantity: {
                    broadcast: {
                        contolRating: "VH",
                        rate: "13oz (0.2lb) picloram + 26oz (0.8lb) 2,4-D (4lb/gal product)"
                    }, 
                    IPT: {
                        contolRating: "VH",
                        rate: "0.25% picloram + 0.50% 2,4-D (4lb/gal product)"
                    }
                },
                sprayVolume: "2-4 gal water for aerial spray; 10-25gal water for ground broadcast application. Thoroughly wet foliage for individual plant treatment. Add 32-64oz surfactant/100gal water.",
                timing: "Spring, during bud stage (pre-bloom).",
                remarks: "Bud stage usually occurs mid-May to early-June. Picloram:2,4-D (1:4), (3.8lb/gal product): Do not apply more than 80oz/acre per year. Because of metsulfuron methyl in the formulation, these herbicides are not recommended on bahiagrass pastures for weed control."
            },

            {
                herbicideName: "picloram:fluroxypyr (1:1)",
                herbicideQuantity: {
                    broadcast: {
                        contolRating: "VH",
                        rate: "32oz (0.33lb)"
                    }, 
                    IPT: {
                        contolRating: "VH",
                        rate: "1%"
                    }
                },
                sprayVolume: "2-4 gal water for aerial spray; 10-25gal water for ground broadcast application. Thoroughly wet foliage for individual plant treatment. Add 32-64oz surfactant/100gal water.",
                timing: "Spring, during bud stage (pre-bloom).",
                remarks: "Bud stage usually occurs mid-May to early-June. Picloram:2,4-D (1:4), (3.8lb/gal product): Do not apply more than 80oz/acre per year. Because of metsulfuron methyl in the formulation, these herbicides are not recommended on bahiagrass pastures for weed control."
            },

            {
                herbicideName: "triclopyr:fluroxypyr (3:1)",
                herbicideQuantity: {
                    broadcast: {
                        contolRating: "H",
                        rate: "16-24oz (0.5-0.75lb)"
                    }, 
                    IPT: {
                        contolRating: "VH",
                        rate: "0.5%"
                    }
                },
                sprayVolume: "2-4 gal water for aerial spray; 10-25gal water for ground broadcast application. Thoroughly wet foliage for individual plant treatment. Add 32-64oz surfactant/100gal water.",
                timing: "Spring, during bud stage (pre-bloom).",
                remarks: "Bud stage usually occurs mid-May to early-June. Picloram:2,4-D (1:4), (3.8lb/gal product): Do not apply more than 80oz/acre per year. Because of metsulfuron methyl in the formulation, these herbicides are not recommended on bahiagrass pastures for weed control."
            },

            {
                herbicideName: "metsulfuron methyl dicamba:2,4-D (1:3)",
                herbicideQuantity: {
                    broadcast: {
                        contolRating: "H-VH",
                        rate: "Rate 1-Rate 2"
                    }, 
                    IPT: {
                        contolRating: null,
                        rate: null
                    }
                },
                sprayVolume: "2-4 gal water for aerial spray; 10-25gal water for ground broadcast application. Thoroughly wet foliage for individual plant treatment. Add 32-64oz surfactant/100gal water.",
                timing: "Spring, during bud stage (pre-bloom).",
                remarks: "Bud stage usually occurs mid-May to early-June. Picloram:2,4-D (1:4), (3.8lb/gal product): Do not apply more than 80oz/acre per year. Because of metsulfuron methyl in the formulation, these herbicides are not recommended on bahiagrass pastures for weed control."
            },

            {
                herbicideName: "dicamba:2,4-D (1:3)",
                herbicideQuantity: {
                    broadcast: {
                        contolRating: "VH",
                        rate: "32oz (1lb)"
                    }, 
                    IPT: {
                        contolRating: "VH",
                        rate: "1%"
                    }
                },
                sprayVolume: "2-4 gal water for aerial spray; 10-25gal water for ground broadcast application. Thoroughly wet foliage for individual plant treatment. Add 32-64oz surfactant/100gal water.",
                timing: "Spring, during bud stage (pre-bloom).",
                remarks: "Bud stage usually occurs mid-May to early-June. Picloram:2,4-D (1:4), (3.8lb/gal product): Do not apply more than 80oz/acre per year. Because of metsulfuron methyl in the formulation, these herbicides are not recommended on bahiagrass pastures for weed control."
            }, 

            {
                herbicideName: "dicamba:2,4-D (1:1.3) + 2,4-D amine or low volatile ester",
                herbicideQuantity: {
                    broadcast: {
                        contolRating: "VH",
                        rate: "9-22oz (0.28-0.69lb) dicamba:2,4-D (1:1.3) + 14-32oz (0.44-1lb) 2,4-D (4lb/gal product)"
                    }, 
                    IPT: {
                        contolRating: null,
                        rate: null
                    }
                },
                sprayVolume: "2-4 gal water for aerial spray; 10-25gal water for ground broadcast application. Thoroughly wet foliage for individual plant treatment. Add 32-64oz surfactant/100gal water.",
                timing: "Spring,during bud stage (pre-bloom).",
                remarks: "Bud stage usually occurs mid-May to early-June. Picloram:2,4-D (1:4), (3.8lb/gal product): Do not apply more than 80oz/acre per year. Because of metsulfuron methyl in the formulation, these herbicides are not recommended on bahiagrass pastures for weed control."
            },

            {
                herbicideName: "dicamba + 2,4-D low volatile ester",
                herbicideQuantity: {
                    broadcast: {
                        contolRating: "VH",
                        rate: "8oz (0.25lb) dicamba + 24oz (0.75lb) 2,4-D (4lb/gal product)"
                    }, 
                    IPT: {
                        contolRating: "VH",
                        rate: "0.25% dicamba + 0.75% 2,4-D (4lb/gal product)"
                    }
                },
                sprayVolume: "2-4 gal water for aerial spray; 10-25gal water for ground broadcast application. Thoroughly wet foliage for individual plant treatment. Add 32-64oz surfactant/100gal water.",
                timing: "Spring, during bud stage (pre-bloom).",
                remarks: "Bud stage usually occurs mid-May to early-June. Picloram:2,4-D (1:4), (3.8lb/gal product): Do not apply more than 80oz/acre per year. Because of metsulfuron methyl in the formulation, these herbicides are not recommended on bahiagrass pastures for weed control."
            } 
        ]
    }, 

    {
        plantName: ["lespedeza"],
        herbicides: [
            {
                herbicideName: "triclopyr",
                herbicideQuantity: {
                    broadcast: {
                        contolRating: "VH",
                        rate: "16-32oz (0.50-1.0lb)"
                    }, 
                    IPT: {
                        contolRating: null,
                        rate: null
                    }
                },
                sprayVolume: "Ground broadcast 20-30gal per acre with 32-64oz surfactant/100gal water.",
                timing: "June-Aug under good growing conditions.",
                remarks: "Plants need to be 12-18in. tall before spraying. USe the gigher rate if plants are large, approaching maturity, or if the infestation level is high. "
            },

            {
                herbicideName: "metsulfuron methyl",
                herbicideQuantity: {
                    broadcast: {
                        contolRating: "H",
                        rate: "0.5oz"
                    }, 
                    IPT: {
                        contolRating: null,
                        rate: null
                    }
                },
                sprayVolume: "Ground broadcast 20-30gal per acre with 32-64oz surfactant/100gal water.",
                timing: "June-Aug under good growing conditions.",
                remarks: "Begin application at flower bud initiation through full bloom. Because of metsulfuron methyl in the formulation, these herbicides are not recommended on bahiagrass pastures for weed control."
            },

            {
                herbicideName: "metsulfuron:chlorosulfuron (3:1)",
                herbicideQuantity: {
                    broadcast: {
                        contolRating: "H",
                        rate: "0.7oz"
                    }, 
                    IPT: {
                        contolRating: null,
                        rate: null
                    }
                },
                sprayVolume: "Ground broadcast 20-30gal per acre with 32-64oz surfactant/100gal water.",
                timing: "June-Aug under good growing conditions.",
                remarks: "Begin application at flower bud initiation through full bloom. Because of metsulfuron methyl in the formulation, these herbicides are not recommended on bahiagrass pastures for weed control."
            },

            {
                herbicideName: "metsulfuron:chlorosulfuron (1:1)",
                herbicideQuantity: {
                    broadcast: {
                        contolRating: "H",
                        rate: "1.0oz"
                    }, 
                    IPT: {
                        contolRating: null,
                        rate: null
                    }
                },
                sprayVolume: "Ground broadcast 20-30gal per acre with 32-64oz surfactant/100gal water.",
                timing: "June-Aug under good growing conditions.",
                remarks: "Begin application at flower bud initiation through full bloom. Because of metsulfuron methyl in the formulation, these herbicides are not recommended on bahiagrass pastures for weed control."
            },

            {
                herbicideName: "metsulfuron methyl dicamba:2,4-D (1:3)",
                herbicideQuantity: {
                    broadcast: {
                        contolRating: "H",
                        rate: "Rate 2"
                    }, 
                    IPT: {
                        contolRating: null,
                        rate: null
                    }
                },
                sprayVolume: "Ground broadcast 20-30gal per acre with 32-64oz surfactant/100gal water.",
                timing: "June-Aug under good growing conditions.",
                remarks: "Begin application at flower bud initiation through full bloom. Because of metsulfuron methyl in the formulation, these herbicides are not recommended on bahiagrass pastures for weed control."
            },

            {
                herbicideName: "picloram:fluroxypyr (1:1)",
                herbicideQuantity: {
                    broadcast: {
                        contolRating: "VH",
                        rate: "24-32oz (0.25-0.33lb)"
                    }, 
                    IPT: {
                        contolRating: "VH",
                        rate: "1%"
                    }
                },
                sprayVolume: "Ground broadcast 20-30gal per acre with 32-64oz surfactant/100gal water.",
                timing: "June-Aug under good growing conditions.",
                remarks: "Begin application at flower bud initiation through full bloom. Because of metsulfuron methyl in the formulation, these herbicides are not recommended on bahiagrass pastures for weed control."
            },

            {
                herbicideName: "triclopyr:fluroxypyr (3:1)",
                herbicideQuantity: {
                    broadcast: {
                        contolRating: "VH",
                        rate: "12-16oz (0.38-0.5lb)"
                    }, 
                    IPT: {
                        contolRating: "VH",
                        rate: "0.5%"
                    }
                },
                sprayVolume: "Ground broadcast 20-30gal per acre with 32-64oz surfactant/100gal water.",
                timing: "June-Aug under good growing conditions.",
                remarks: "Begin application at flower bud initiation through full bloom. Because of metsulfuron methyl in the formulation, these herbicides are not recommended on bahiagrass pastures for weed control."
            } 
        ]
    }, 

    {
        plantName: ["rayless goldenrod (jimmyweed)"],
        herbicides: [
            {
                herbicideName: "metsulfuron methyl",
                herbicideQuantity: {
                    broadcast: {
                        contolRating: "VH",
                        rate: "0.75oz"
                    }, 
                    IPT: {
                        contolRating: null,
                        rate: null
                    }
                },
                sprayVolume: "2-4 gal water for aerial spray; 10-25gal water for ground broadcast application. Thoroughly wet foliage for individual plant treatment. Add 32-64oz surfactant/100gal water.",
                timing: "Fall",
                remarks: "Because of metsulfuron methyl in the formulation, these herbicides are not recommended on bahiagrass pastures for weed control."
            },

            {
                herbicideName: "metsulfuron:chlorosulfuron (3:1)",
                herbicideQuantity: {
                    broadcast: {
                        contolRating: "VH",
                        rate: "1.0oz"
                    }, 
                    IPT: {
                        contolRating: null,
                        rate: null
                    }
                },
                sprayVolume: "2-4 gal water for aerial spray; 10-25gal water for ground broadcast application. Thoroughly wet foliage for individual plant treatment. Add 32-64oz surfactant/100gal water.",
                timing: "Fall",
                remarks: "Because of metsulfuron methyl in the formulation, these herbicides are not recommended on bahiagrass pastures for weed control."
            },

            {
                herbicideName: "metsulfuron:chlorosulfuron (1:1)",
                herbicideQuantity: {
                    broadcast: {
                        contolRating: "VH",
                        rate: "1.5oz"
                    }, 
                    IPT: {
                        contolRating: null,
                        rate: null
                    }
                },
                sprayVolume: "2-4 gal water for aerial spray; 10-25gal water for ground broadcast application. Thoroughly wet foliage for individual plant treatment. Add 32-64oz surfactant/100gal water.",
                timing: "Fall",
                remarks: "Because of metsulfuron methyl in the formulation, these herbicides are not recommended on bahiagrass pastures for weed control."
            },

            {
                herbicideName: "picloram:fluroxypyr (1:1)",
                herbicideQuantity: {
                    broadcast: {
                        contolRating: "VH",
                        rate: "96oz (1.0lb)"
                    }, 
                    IPT: {
                        contolRating: "VH",
                        rate: "2%"
                    }
                },
                sprayVolume: "2-4 gal water for aerial spray; 10-25gal water for ground broadcast application. Thoroughly wet foliage for individual plant treatment. Add 32-64oz surfactant/100gal water.",
                timing: "Fall",
                remarks: "Because of metsulfuron methyl in the formulation, these herbicides are not recommended on bahiagrass pastures for weed control."
            },

            {
                herbicideName: "picloram",
                herbicideQuantity: {
                    broadcast: {
                        contolRating: "VH",
                        rate: "32oz (0.6lb)"
                    }, 
                    IPT: {
                        contolRating: "VH",
                        rate: "1%"
                    }
                },
                sprayVolume: "2-4 gal water for aerial spray; 10-25gal water for ground broadcast application. Thoroughly wet foliage for individual plant treatment. Add 32-64oz surfactant/100gal water.",
                timing: "Fall",
                remarks: "Because of metsulfuron methyl in the formulation, these herbicides are not recommended on bahiagrass pastures for weed control."
            } 
        ]
    }, 

    {
        plantName: ["spiny aster (wolfweed)"],
        herbicides: [
            {
                herbicideName: "picloram:2,4-D (1:4) (3.8lb/gal product)",
                herbicideQuantity: {
                    broadcast: {
                        contolRating: "VH",
                        rate: "20oz (0.6lb)"
                    }, 
                    IPT: {
                        contolRating: "VH",
                        rate: "0.63%"
                    }
                },
                sprayVolume: "10-25gal water for ground broadcast application. Thoroughly wet foliage for individual platn treatment. Add 32-64oz surfactant/100gal water.",
                timing: "Spring, during good moisture and growth conditions.",
                remarks: "Shred plants during winter. Regrowth will have leaves. Apply herbicide when regrowth is 10-12in. tall. Picloram:2,4-D (1:4), (3.8lb/gal product): do not apply more than 80oz/acre per year."
            },

            {
                herbicideName: "picloram:2,4-D (1:4) (2.5lb/gal product)",
                herbicideQuantity: {
                    broadcast: {
                        contolRating: "VH",
                        rate: "32oz (0.63lb)"
                    }, 
                    IPT: {
                        contolRating: "VH",
                        rate: "1%"
                    }
                },
                sprayVolume: "10-25gal water for ground broadcast application. Thoroughly wet foliage for individual platn treatment. Add 32-64oz surfactant/100gal water.",
                timing: "Spring, during good moisture and growth conditions.",
                remarks: "Shred plants during winter. Regrowth will have leaves. Apply herbicide when regrowth is 10-12in. tall. Picloram:2,4-D (1:4), (3.8lb/gal product): do not apply more than 80oz/acre per year."
            },

            {
                herbicideName: "picloram + 2,4-D amine or low volatile ester",
                herbicideQuantity: {
                    broadcast: {
                        contolRating: "VH",
                        rate: "8oz (0.125lb) picloram + 16oz (0.5lb) 2,4-D (4lb/gal product)"
                    }, 
                    IPT: {
                        contolRating: "VH",
                        rate: "0.25% picloram + 0.5% 2,4-D (4lb/gal product)"
                    }
                },
                sprayVolume: "10-25gal water for ground broadcast application. Thoroughly wet foliage for individual platn treatment. Add 32-64oz surfactant/100gal water.",
                timing: "Spring, during good moisture and growth conditions.",
                remarks: "Shred plants during winter. Regrowth will have leaves. Apply herbicide when regrowth is 10-12in. tall. Picloram:2,4-D (1:4), (3.8lb/gal product): do not apply more than 80oz/acre per year."
            },

            {
                herbicideName: "picloram:fluroxypyr (1:1)",
                herbicideQuantity: {
                    broadcast: {
                        contolRating: "VH",
                        rate: "24-32oz (0.25-0.33lb)"
                    }, 
                    IPT: {
                        contolRating: "VH",
                        rate: "1%"
                    }
                },
                sprayVolume: "10-25gal water for ground broadcast application. Thoroughly wet foliage for individual platn treatment. Add 32-64oz surfactant/100gal water.",
                timing: "Spring, during good moisture and growth conditions.",
                remarks: "Shred plants during winter. Regrowth will have leaves. Apply herbicide when regrowth is 10-12in. tall. Picloram:2,4-D (1:4), (3.8lb/gal product): do not apply more than 80oz/acre per year."
            },

            {
                herbicideName: "triclopyr:fluroxypyr (3:1)",
                herbicideQuantity: {
                    broadcast: {
                        contolRating: "H",
                        rate: "16-24oz (0.5-0.75lb)"
                    }, 
                    IPT: {
                        contolRating: "VH",
                        rate: "0.5%"
                    }
                },
                sprayVolume: "10-25gal water for ground broadcast application. Thoroughly wet foliage for individual platn treatment. Add 32-64oz surfactant/100gal water.",
                timing: "Spring, during good moisture and growth conditions.",
                remarks: "Shred plants during winter. Regrowth will have leaves. Apply herbicide when regrowth is 10-12in. tall. Picloram:2,4-D (1:4), (3.8lb/gal product): do not apply more than 80oz/acre per year."
            },

            {
                herbicideName: "dicamba:2,4-D (1:3)",
                herbicideQuantity: {
                    broadcast: {
                        contolRating: "VH",
                        rate: "32oz (1lb)"
                    }, 
                    IPT: {
                        contolRating: "VH",
                        rate: "1%"
                    }
                },
                sprayVolume: "10-25gal water for ground broadcast application. Thoroughly wet foliage for individual platn treatment. Add 32-64oz surfactant/100gal water.",
                timing: "Spring, during good moisture and growth conditions.",
                remarks: "Shred plants during winter. Regrowth will have leaves. Apply herbicide when regrowth is 10-12in. tall. Picloram:2,4-D (1:4), (3.8lb/gal product): do not apply more than 80oz/acre per year."
            },

            {
                herbicideName: "dicamba:2,4-D (1:1.3) + 2,4-D amine or low volatile ester",
                herbicideQuantity: {
                    broadcast: {
                        contolRating: "VH",
                        rate: "9-22oz (0.28-0.69lb) dicamba:2,4-D (1:1.3) + 14-32oz (0.44-1lb) 2,4-D (4lb/gal product)"
                    }, 
                    IPT: {
                        contolRating: null,
                        rate: null
                    }
                },
                sprayVolume: "10-25gal water for ground broadcast application. Thoroughly wet foliage for individual platn treatment. Add 32-64oz surfactant/100gal water.",
                timing: "Spring, during good moisture and growth conditions.",
                remarks: "Shred plants during winter. Regrowth will have leaves. Apply herbicide when regrowth is 10-12in. tall. Picloram:2,4-D (1:4), (3.8lb/gal product): do not apply more than 80oz/acre per year."
            },

            {
                herbicideName: "dicamba + 2,4-D amine or low volatile ester",
                herbicideQuantity: {
                    broadcast: {
                        contolRating: "VH",
                        rate: "8oz (0.25lb) dicamba + 24oz (0.75lb) 2,4-D (4lb/gal product)"
                    }, 
                    IPT: {
                        contolRating: "VH",
                        rate: "0.25% dicamba + 0.75% 2,4-D (4lb/gal product)"
                    }
                },
                sprayVolume: "10-25gal water for ground broadcast application. Thoroughly wet foliage for individual platn treatment. Add 32-64oz surfactant/100gal water.",
                timing: "Spring, during good moisture and growth conditions.",
                remarks: "Shred plants during winter. Regrowth will have leaves. Apply herbicide when regrowth is 10-12in. tall. Picloram:2,4-D (1:4), (3.8lb/gal product): do not apply more than 80oz/acre per year."
            }
        ]
    }, 

    {
        plantName: ["threadleaf groundsel"],
        herbicides: [
            {
                herbicideName: "metsulfuron methyl",
                herbicideQuantity: {
                    broadcast: {
                        contolRating: "VH",
                        rate: "0.4oz"
                    }, 
                    IPT: {
                        contolRating: null,
                        rate: null
                    }
                },
                sprayVolume: "2-4gal water for aerial spray; 10-25gal water for ground broadcast application. Add 32-64oz surfactant/100gal water.",
                timing: "Fall",
                remarks: "Because of metsulfuron methyl in the formulation, these herbicides are not recommended on bahiagrass pastures for weed control."
            },

            {
                herbicideName: "metsulfuron:chlorosulfuron (3:1)",
                herbicideQuantity: {
                    broadcast: {
                        contolRating: "VH",
                        rate: "0.5oz"
                    }, 
                    IPT: {
                        contolRating: null,
                        rate: null
                    }
                },
                sprayVolume: "2-4gal water for aerial spray; 10-25gal water for ground broadcast application. Add 32-64oz surfactant/100gal water.",
                timing: "Fall",
                remarks: "Because of metsulfuron methyl in the formulation, these herbicides are not recommended on bahiagrass pastures for weed control."
            },

            {
                herbicideName: "metsulfuron:chlorosulfuron (1:1)",
                herbicideQuantity: {
                    broadcast: {
                        contolRating: "VH",
                        rate: "0.8oz"
                    }, 
                    IPT: {
                        contolRating: null,
                        rate: null
                    }
                },
                sprayVolume: "2-4gal water for aerial spray; 10-25gal water for ground broadcast application. Add 32-64oz surfactant/100gal water.",
                timing: "Fall",
                remarks: "Because of metsulfuron methyl in the formulation, these herbicides are not recommended on bahiagrass pastures for weed control."
            },

            {
                herbicideName: "metsulfuron methyl dicamba:2,4-D (1:3)",
                herbicideQuantity: {
                    broadcast: {
                        contolRating: "VH",
                        rate: "Rate 2"
                    }, 
                    IPT: {
                        contolRating: null,
                        rate: null
                    }
                },
                sprayVolume: "2-4gal water for aerial spray; 10-25gal water for ground broadcast application. Add 32-64oz surfactant/100gal water.",
                timing: "Fall",
                remarks: "Because of metsulfuron methyl in the formulation, these herbicides are not recommended on bahiagrass pastures for weed control."
            } 
        ]
    }, 

    {
        plantName: ["twinleaf senna (twoleaf senna)"],
        herbicides: [
            {
                herbicideName: "picloram:2,4-D (1:4), (3.8lb/gal product)",
                herbicideQuantity: {
                    broadcast: {
                        contolRating: null,
                        rate: null
                    }, 
                    IPT: {
                        contolRating: "VH",
                        rate: "0.63%"
                    }
                },
                sprayVolume: "Throughly wet foliage. Mix with water and add 32-64oz surfactant/100gal spray mix.",
                timing: "Late Spring, good moisture and growth conditions.",
                remarks: "Picloram:2,4-D (1:4), (3.8lb/gal product): Do not apply more than 80oz/acre per year."
            },

            {
                herbicideName: "picloram:2,4-D (1:4), (2.5lb/gal product)",
                herbicideQuantity: {
                    broadcast: {
                        contolRating: null,
                        rate: null
                    }, 
                    IPT: {
                        contolRating: "VH",
                        rate: "1%"
                    }
                },
                sprayVolume: "Throughly wet foliage. Mix with water and add 32-64oz surfactant/100gal spray mix.",
                timing: "Late Spring, good moisture and growth conditions.",
                remarks: "Picloram:2,4-D (1:4), (3.8lb/gal product): Do not apply more than 80oz/acre per year."
            },

            {
                herbicideName: "picloram:fluroxypyr (1:1)",
                herbicideQuantity: {
                    broadcast: {
                        contolRating: null,
                        rate: null
                    }, 
                    IPT: {
                        contolRating: "VH",
                        rate: "1%"
                    }
                },
                sprayVolume: "Throughly wet foliage. Mix with water and add 32-64oz surfactant/100gal spray mix.",
                timing: "Late Spring, good moisture and growth conditions.",
                remarks: "Picloram:2,4-D (1:4), (3.8lb/gal product): Do not apply more than 80oz/acre per year."
            },

            {
                herbicideName: "dicamba:2,4-D (1:3)",
                herbicideQuantity: {
                    broadcast: {
                        contolRating: null,
                        rate: null
                    }, 
                    IPT: {
                        contolRating: "VH",
                        rate: "1%"
                    }
                },
                sprayVolume: "Throughly wet foliage. Mix with water and add 32-64oz surfactant/100gal spray mix.",
                timing: "Late Spring, good moisture and growth conditions.",
                remarks: "Picloram:2,4-D (1:4), (3.8lb/gal product): Do not apply more than 80oz/acre per year."
            } 
        ]
    }, 

    {
        plantName: ["upright prairie-coneflower"],
        herbicides: [
            {
                herbicideName: "metsulfuron methyl",
                herbicideQuantity: {
                    broadcast: {
                        contolRating: "VH",
                        rate: "0.2oz"
                    }, 
                    IPT: {
                        contolRating: null,
                        rate: null
                    }
                },
                sprayVolume: "2-4gal water for aerial spray. 10-25gal water for ground broadcast application. Add 32-64oz surfactant/100gal water.",
                timing: "Spring, before flower stalk development.",
                remarks: "Because of metsulfuron methyl in the formulation, these herbicides are not recommended on bahiagrass pastures for weed control."
            },

            {
                herbicideName: "metsulfuron:chlorosulfuron (3:1)",
                herbicideQuantity: {
                    broadcast: {
                        contolRating: "VH",
                        rate: "0.25oz"
                    }, 
                    IPT: {
                        contolRating: null,
                        rate: null
                    }
                },
                sprayVolume: "2-4gal water for aerial spray. 10-25gal water for ground broadcast application. Add 32-64oz surfactant/100gal water.",
                timing: "Spring, before flower stalk development.",
                remarks: "Because of metsulfuron methyl in the formulation, these herbicides are not recommended on bahiagrass pastures for weed control."
            },

            {
                herbicideName: "metsulfuron:chlorosulfuron (1:1)",
                herbicideQuantity: {
                    broadcast: {
                        contolRating: "VH",
                        rate: "0.4oz"
                    }, 
                    IPT: {
                        contolRating: null,
                        rate: null
                    }
                },
                sprayVolume: "2-4gal water for aerial spray. 10-25gal water for ground broadcast application. Add 32-64oz surfactant/100gal water.",
                timing: "Spring, before flower stalk development.",
                remarks: "Because of metsulfuron methyl in the formulation, these herbicides are not recommended on bahiagrass pastures for weed control."
            } 
        ]
    } 
];

const brushControl = [
    {
        plantName: ["agarita", "bumelia", "catclaw acacia", "catclaw mimosa", "coyotillo", "flameleaf sumac", "lotebush", "tasajillo", "Texas mountain laurel", "whitebrush (beebrush, beebush)"],
        herbicides: [
            {
                herbicideName: "aminocyclopyrachlor:triclopyr amine (1:2)",
                herbicideQuantity: {
                    broadcast: {
                        contolRating: null,
                        rate: null
                    }, 
                    IPT: {
                        contolRating: "VH",
                        rate: "1.5%"
                    }
                },
                sprayVolume: "Thoroughly spray foliage to wet butn not dripping. Add32-64oz (0.25-0.5%) nonionic surfactant/100gal water.",
                timing: "Late Spring through Summer with mature, healthy leaves.",
                remarks: "Aminocyclopyrachlor:triclopyr amine requires specific picolinic acid chemistry training and certification before use. See label for additional site-use information and restrictions."
            } 
        ]
    }, 

    {
        plantName: ["Ashe juniper (blueberry cedar)"],
        herbicides: [
            {
                herbicideName: "hexazinone liquid",
                herbicideQuantity: {
                    broadcast: {
                        contolRating: null,
                        rate: null
                    }, 
                    IPT: {
                        contolRating: "VH",
                        rate: "2ml/3ft height or canopy diameter, whichever is greater"
                    }
                },
                sprayVolume: null,
                timing: "Late Winter through Summer",
                remarks: "Apply undiluted hexazinone liquid, picloram, or hexazinone pellets between the stem base and the edge of the canopy. Use an exact delivery handgun applicator to apply hexazinone liquid and picloram. If plant size requires more than a single 2ml or 4ml application of hexazinone liquid or picloram, or more than 1 hexazinone pellet, apply subsequent applications or pellets equally spaced around the plant. Do not use these treatments on marshy or poorly drained sites nor on soils classified as clays. Best results are expected on coarse-textured soils."
            },

            {
                herbicideName: "hexazinone pellet",
                herbicideQuantity: {
                    broadcast: {
                        contolRating: null,
                        rate: null
                    }, 
                    IPT: {
                        contolRating: "VH",
                        rate: "1 pellet/3ft height or canopy diamter, whichever is greater"
                    }
                },
                sprayVolume: null,
                timing: "Late Winter through Summer",
                remarks: "Apply undiluted hexazinone liquid, picloram, or hexazinone pellets between the stem base and the edge of the canopy. Use an exact delivery handgun applicator to apply hexazinone liquid and picloram. If plant size requires more than a single 2ml or 4ml application of hexazinone liquid or picloram, or more than 1 hexazinone pellet, apply subsequent applications or pellets equally spaced around the plant. Do not use these treatments on marshy or poorly drained sites nor on soils classified as clays. Best results are expected on coarse-textured soils."
            },

            {
                herbicideName: "picloram",
                herbicideQuantity: {
                    broadcast: {
                        contolRating: null,
                        rate: null
                    }, 
                    IPT: {
                        contolRating: "VH",
                        rate: "4ml/3ft height or canopy diameter, whichever is greater"
                    }
                },
                sprayVolume: null,
                timing: "Late Winter through Summer",
                remarks: "Apply undiluted hexazinone liquid, picloram, or hexazinone pellets between the stem base and the edge of the canopy. Use an exact delivery handgun applicator to apply hexazinone liquid and picloram. If plant size requires more than a single 2ml or 4ml application of hexazinone liquid or picloram, or more than 1 hexazinone pellet, apply subsequent applications or pellets equally spaced around the plant. Do not use these treatments on marshy or poorly drained sites nor on soils classified as clays. Best results are expected on coarse-textured soils."
            },

            {
                herbicideName: "picloram",
                herbicideQuantity: {
                    broadcast: {
                        contolRating: null,
                        rate: null
                    }, 
                    IPT: {
                        contolRating: "VH",
                        rate: "1%"
                    }
                },
                sprayVolume: "Thoroughly wet foliage and stems for individual plant treatment. Mix with water and add 32-64oz surfactant/100gal spray mix.",
                timing: "Anytime",
                remarks: null
            } 
        ]
    }, 

    {
        plantName: ["cholla", "dog cactus", "tasajillo"],
        herbicides: [
            {
                herbicideName: "picloram",
                herbicideQuantity: {
                    broadcast: {
                        contolRating: null,
                        rate: null
                    }, 
                    IPT: {
                        contolRating: "VH",
                        rate: "1%"
                    }
                },
                sprayVolume: "Thoroughly wet foliage and stems for individual plant treatment. Mix with water and add 32-64oz surfactant/100gal spray mix.",
                timing: "Anytime",
                remarks: null
            } 
        ]
    },

    {
        plantName: ["redberry juniper (redberry cedar)"],
        herbicides: [
            {
                herbicideName: "picloram",
                herbicideQuantity: {
                    broadcast: {
                        contolRating: null,
                        rate: null
                    }, 
                    IPT: {
                        contolRating: "VH",
                        rate: "1%"
                    }
                },
                sprayVolume: "Thoroughly wet foliage and stems for individual plant treatment. Mix with water and add 32-64oz surfactant/100gal spray mix.",
                timing: "Anytime",
                remarks: null
            },

            {
                herbicideName: "hexazinone liquid (plants <6ft tall)",
                herbicideQuantity: {
                    broadcast: {
                        contolRating: null,
                        rate: null
                    }, 
                    IPT: {
                        contolRating: "VH",
                        rate: "2ml/3ft height or canopy diameter, whichever is greater"
                    }
                },
                sprayVolume: null,
                timing: "Late Winter-Summer",
                remarks: "Apply undiluted hexazinone liquid or hexazinone pellets to soil surface between the stem base and the edge of the canopy. Use an exact delivery handgun applicator to apply hexazinone liquid. If plant size requires more than a single 2 or 4ml application of hexazinone liquid, or 1 hexazinone pellet, apply subsequent applications or pellets equally spaced around the plant. Do not use these treatments on marshy or poorly drained sites nor on soils classified as clays. Best results are expected on coarse-textured soils."
            },

            {
                herbicideName: "hexazinone pellet (plants <6ft tall)",
                herbicideQuantity: {
                    broadcast: {
                        contolRating: null,
                        rate: null
                    }, 
                    IPT: {
                        contolRating: "VH",
                        rate: "1 pellet/3ft height or canopy diameter, whichever is greater"
                    }
                },
                sprayVolume: null,
                timing: "Late Winter-Summer",
                remarks: "Apply undiluted hexazinone liquid or hexazinone pellets to soil surface between the stem base and the edge of the canopy. Use an exact delivery handgun applicator to apply hexazinone liquid. If plant size requires more than a single 2 or 4ml application of hexazinone liquid, or 1 hexazinone pellet, apply subsequent applications or pellets equally spaced around the plant. Do not use these treatments on marshy or poorly drained sites nor on soils classified as clays. Best results are expected on coarse-textured soils."
            },

            {
                herbicideName: "hexazinone liquid (plants >6ft tall)",
                herbicideQuantity: {
                    broadcast: {
                        contolRating: null,
                        rate: null
                    }, 
                    IPT: {
                        contolRating: "H",
                        rate: "4ml/3ft height or canopy diameter, whichever is greater"
                    }
                },
                sprayVolume: null,
                timing: "Late Winter-Summer",
                remarks: "Apply undiluted hexazinone liquid or hexazinone pellets to soil surface between the stem base and the edge of the canopy. Use an exact delivery handgun applicator to apply hexazinone liquid. If plant size requires more than a single 2 or 4ml application of hexazinone liquid, or 1 hexazinone pellet, apply subsequent applications or pellets equally spaced around the plant. Do not use these treatments on marshy or poorly drained sites nor on soils classified as clays. Best results are expected on coarse-textured soils."
            },

            {
                herbicideName: "hexazinone pellet (plants >6ft tal)",
                herbicideQuantity: {
                    broadcast: {
                        contolRating: null,
                        rate: null
                    }, 
                    IPT: {
                        contolRating: "H",
                        rate: "2 pellets/3ft height or canopy diameter, whichever is greater"
                    }
                },
                sprayVolume: null,
                timing: "Late Winter-Summer",
                remarks: "Apply undiluted hexazinone liquid or hexazinone pellets to soil surface between the stem base and the edge of the canopy. Use an exact delivery handgun applicator to apply hexazinone liquid. If plant size requires more than a single 2 or 4ml application of hexazinone liquid, or 1 hexazinone pellet, apply subsequent applications or pellets equally spaced around the plant. Do not use these treatments on marshy or poorly drained sites nor on soils classified as clays. Best results are expected on coarse-textured soils."
            },

            {
                herbicideName: "picloram",
                herbicideQuantity: {
                    broadcast: {
                        contolRating: null,
                        rate: null
                    }, 
                    IPT: {
                        contolRating: "VH",
                        rate: "4ml/3ft height or canopy diamter, whichever is greater"
                    }
                },
                sprayVolume: null,
                timing: "Spring-Fall, before expected rainfall.",
                remarks: "Apply undiluted picloram to the stem base at or near the ground line. Use an exact delivery handgun applicator to apply the 4ml dose. If plant size requires more than a single 4ml application, space subsequent applications equally around the plant. Do not use on marshy or poorly drained sites nor on soils classified as clays."
            } 
        ]
    }, 

    {
        plantName: ["redberry juniper (cut stumps)"],
        herbicides: [
            {
                herbicideName: "picloram",
                herbicideQuantity: {
                    broadcast: {
                        contolRating: null,
                        rate: null
                    }, 
                    IPT: {
                        contolRating: "VH",
                        rate: "4% in water"
                    }
                },
                sprayVolume: "Spray the sides of the stump and the cut surface, including the cambium, immediately after cutting, to thoroughly wet the stem and root collar area, but not to the point of runoff. Add 32-64oz surfactant to 100gal spray mix.",
                timing: "Anytime, except when snow or water prevent spraying to the ground line.",
                remarks: "This is commonly called the cut stump application method. Apply with a backpack or knapsack sprayer using low pressures and a solid cone or flat fan nozzle. Add 32-64oz surfactant/100gal water."
            } 
        ]
    }, 

    {
        plantName: ["baccharis (dryland willow, Roosevelt willow, seep willow, or willow baccharis)"],
        herbicides: [
            {
                herbicideName: "2,4-D low volatile ester",
                herbicideQuantity: {
                    broadcast: {
                        contolRating: "H",
                        rate: "48-96oz (1.5-3lb) 4lb/gal product"
                    }, 
                    IPT: {
                        contolRating: "H",
                        rate: "1%"
                    }
                },
                sprayVolume: "For aerial applications, minimum suggested total spray volume is 4gal water for aerial spray; 15-20gal water for ground broadcast. For individual plant treatment, thoroughly wet the entire foliage, stems, and trunks. Add 32-64oz surfactant/100gal water.",
                timing: "Spring, when leaves are fully expanded and dark green.",
                remarks: "Piclolram:2,4-D (1:4), (3.8lb/gal product): Do not apply more than 80oz/acre per year."
            },

            {
                herbicideName: "picloram:2,4-D (1:4), (3.8lb/gal product)",
                herbicideQuantity: {
                    broadcast: {
                        contolRating: null,
                        rate: null
                    }, 
                    IPT: {
                        contolRating: "H",
                        rate: "0.63%"
                    }
                },
                sprayVolume: "For individual plant treatment thoroughly we teh entire foliage, stems, and trunks. Add 32-64oz surfactant/100gal water.",
                timing: "Spring, when leaves are fully extended and dark green.",
                remarks: "Piclolram:2,4-D (1:4), (3.8lb/gal product): Do not apply more than 80oz/acre per year."
            },

            {
                herbicideName: "picloram:2,4-D (1:4), (2.5lb/gal product)",
                herbicideQuantity: {
                    broadcast: {
                        contolRating: null,
                        rate: null
                    }, 
                    IPT: {
                        contolRating: "H",
                        rate: "1%"
                    }
                },
                sprayVolume: "For individual plant treatment thoroughly we teh entire foliage, stems, and trunks. Add 32-64oz surfactant/100gal water.",
                timing: "Spring, when leaves are fully extended and dark green.",
                remarks: "Piclolram:2,4-D (1:4), (3.8lb/gal product): Do not apply more than 80oz/acre per year."
            },

            {
                herbicideName: "dicamba:2,4-D (1:3)",
                herbicideQuantity: {
                    broadcast: {
                        contolRating: null,
                        rate: null
                    }, 
                    IPT: {
                        contolRating: "H",
                        rate: "1%"
                    }
                },
                sprayVolume: "For individual plant treatment thoroughly we teh entire foliage, stems, and trunks. Add 32-64oz surfactant/100gal water.",
                timing: "Spring, when leaves are fully extended and dark green.",
                remarks: "Piclolram:2,4-D (1:4), (3.8lb/gal product): Do not apply more than 80oz/acre per year."
            },

            {
                herbicideName: "triclopyr ester",
                herbicideQuantity: {
                    broadcast: {
                        contolRating: null,
                        rate: null
                    }, 
                    IPT: {
                        contolRating: "VH",
                        rate: "1%"
                    }
                },
                sprayVolume: "For individual plant treatment thoroughly we teh entire foliage, stems, and trunks. Add 32-64oz surfactant/100gal water.",
                timing: "Spring, when leaves are fully extended and dark green.",
                remarks: "Piclolram:2,4-D (1:4), (3.8lb/gal product): Do not apply more than 80oz/acre per year."
            },

            {
                herbicideName: "triclopyr:fluroxypyr (3:1)",
                herbicideQuantity: {
                    broadcast: {
                        contolRating: null,
                        rate: null
                    }, 
                    IPT: {
                        contolRating: "VH",
                        rate: "0.5%"
                    }
                },
                sprayVolume: "For individual plant treatment thoroughly we teh entire foliage, stems, and trunks. Add 32-64oz surfactant/100gal water.",
                timing: "Spring, when leaves are fully extended and dark green.",
                remarks: "Piclolram:2,4-D (1:4), (3.8lb/gal product): Do not apply more than 80oz/acre per year."
            },

            {
                herbicideName: "picloram:fluroxypyr (1:1)",
                herbicideQuantity: {
                    broadcast: {
                        contolRating: null,
                        rate: null
                    }, 
                    IPT: {
                        contolRating: "VH",
                        rate: "1%"
                    }
                },
                sprayVolume: "For individual plant treatment thoroughly we teh entire foliage, stems, and trunks. Add 32-64oz surfactant/100gal water.",
                timing: "Spring, when leaves are fully extended and dark green.",
                remarks: "Piclolram:2,4-D (1:4), (3.8lb/gal product): Do not apply more than 80oz/acre per year."
            },

            {
                herbicideName: "hexazinone liquid",
                herbicideQuantity: {
                    broadcast: {
                        contolRating: null,
                        rate: null
                    }, 
                    IPT: {
                        contolRating: "VH",
                        rate: "2ml/3ft height or canopy diameter, whichever is greater"
                    }
                },
                sprayVolume: null,
                timing: "Late Winter-Summer",
                remarks: "Apply undiluted hexazinone liquid, picloram, or hexazinone pellets between the stem base and the edge of the canopy. Use an exact delivery handgun applicator to apply hexazinone liquid and picloram. If plant size requires more than a single 2ml or 4ml application of hexazinone liquid or picloram, or more than 1 hexazinone pellet, apply subsequent applications or pellets equally spaced around the plant. Do not use these treatments on marshy or poorly drained sites nor on soils classified as clays. Best results are expected on coarse-textured soils."
            },

            {
                herbicideName: "hexazinone pellet",
                herbicideQuantity: {
                    broadcast: {
                        contolRating: null,
                        rate: null
                    }, 
                    IPT: {
                        contolRating: "",
                        rate: "1 pellet/3ft height or canopy diameter, whichever is greater"
                    }
                },
                sprayVolume: "",
                timing: "Late Winter-Summer",
                remarks: "Apply undiluted hexazinone liquid, picloram, or hexazinone pellets between the stem base and the edge of the canopy. Use an exact delivery handgun applicator to apply hexazinone liquid and picloram. If plant size requires more than a single 2ml or 4ml application of hexazinone liquid or picloram, or more than 1 hexazinone pellet, apply subsequent applications or pellets equally spaced around the plant. Do not use these treatments on marshy or poorly drained sites nor on soils classified as clays. Best results are expected on coarse-textured soils."
            } 
        ]
    }, 

    {
        plantName: ["baccharis (dryland willow, Roosevelt willow, seep willow, or willow baccharis", "blackbrush", "bois d'arc", "catclaw acacia", "catclaw mimosa", "Chinese tallowtree", "elm", "greenbriar", "hackberry", "pricklyash (Hercules club", "Texas persimmon", "winged elm", "yaupon"],
        herbicides: [
            {
                herbicideName: "triclopyr ester",
                herbicideQuantity: {
                    broadcast: {
                        contolRating: null,
                        rate: null
                    }, 
                    IPT: {
                        contolRating: "VH",
                        rate: "25% in diesel fuel oil"
                    }
                },
                sprayVolume: "Apply to lower 12-18in. of trunk to wet the trunk; do not spray to point of runoff. Apply completely around the trunk.",
                timing: "Anytime - optimum time is during growing season when plants have mature leaves.",
                remarks: "This is a Brush Busters® low volume basal application method. A 5500-X1 adjustable cone nozzle is preferred. Use only on plants with smooth bark and a trunk diameter less than 4in. For Texas persimmon, apply in spring after leaves mature but before June 15."
            },

            {
                herbicideName: "triclopyr ester",
                herbicideQuantity: {
                    broadcast: {
                        contolRating: null,
                        rate: null
                    }, 
                    IPT: {
                        contolRating: "VH",
                        rate: "25% in diesel fuel oil - 10% d,l-limonene (a penetrant) may be added to the mixture - see remarks"
                    }
                },
                sprayVolume: "Apply to the trunk in a 3-to 4-in.-wide band near ground level or at line dividing smooth bark from corky bark. Apply completely around the trunk.",
                timing: "Anytime - optimum time is growing season when plants have mature leaves.",
                remarks: "This is commonly called the streamline basal application method. Use a straight stream nozzle. Use only on plants with smooth bark and trunk diameter less than 4in. Addition of a penetrant to the mixtures aids with coverage around the trunk and increases the control for most species. Trade names for d,l limonene are Quick Step II, AD 100, Cide-Kick II, and Cide-Kick. Other penetrants may be effective but have not been tested on rangeland in Texas. For Texas persimmon, apply in spring after leaves mature but before June 15."
            } 
        ]
    }, 

    {
        plantName: ["Bigelow shinoak (white shinoak"],
        herbicides: [
            {
                herbicideName: "tebuthiuron 20% pellets",
                herbicideQuantity: {
                    broadcast: {
                        contolRating: "VH",
                        rate: "7.5lb pellets (1.5lb active ingredient)"
                    }, 
                    IPT: {
                        contolRating: "VH",
                        rate: "0.5oz pellets (0.1oz active ingredient)/100sq ft of ground area"
                    }
                },
                sprayVolume: null,
                timing: "Anytime - optimum period is Oct 1-Apr 1.",
                remarks: "For individual plant treatment, apply pellets evenly on the soil under the plant canopy and 1ft beyond canopy edge."
            } 
        ]
    }, 

    {
        plantName: ["blackberry"],
        herbicides: [
            {
                herbicideName: "picloram:fluroxypyr (1:1)",
                herbicideQuantity: {
                    broadcast: {
                        contolRating: "VH",
                        rate: "48-64oz (0.5-0.67lb)"
                    }, 
                    IPT: {
                        contolRating: "VH",
                        rate: "1-2%"
                    }
                },
                sprayVolume: "Use at least 10gal water/ac, but increased volume up to 25gal/ac will improve coverage, and subsequent herbicide penetration into the plant. Add 32-64oz surfactant/100gal spray mix.",
                timing: "Apply when leaves are fully expanded and the foliage is dark green, either before first flower or after fruit drop. Do not treat balckberries in the same year after shredding or burning.",
                remarks: null
            },

            {
                herbicideName: "triclopyr:fluroxypyr (3:1)",
                herbicideQuantity: {
                    broadcast: {
                        contolRating: "H",
                        rate: "24-32oz (0.75-1.0lb)"
                    }, 
                    IPT: {
                        contolRating: "VH",
                        rate: "0.5-1%"
                    }
                },
                sprayVolume: "Use at least 10gal water/ac, but increased volume up to 25gal/ac will improve coverage, and subsequent herbicide penetration into the plant. Add 32-64oz surfactant/100gal spray mix.",
                timing: "Apply when leaves are fully expanded and the foliage is dark green, either before first flower or after fruit drop. Do not treat balckberries in the same year after shredding or burning.",
                remarks: null
            } 
        ]
    }, 

    {
        plantName: ["blackbrush"],
        herbicides: [
            {
                herbicideName: "aminopyralid:metsulfuron methyl (1:6.2)",
                herbicideQuantity: {
                    broadcast: {
                        contolRating: "VH",
                        rate: "3.3oz (0.127lb)"
                    }, 
                    IPT: {
                        contolRating: null,
                        rate: null
                    }
                },
                sprayVolume: "For aerial applications, suggested total spray volume is a minimum of 4gal/ac. Use water + surfactant, crop oil, or methylated seed oil. For ground broadcast applications, the suggested total spray volume is 10-25gal/ac. Use water + surfactant, crop oil or methylated seed oil.",
                timing: "Fall applications",
                remarks: "Because of metsulfuron methyl in the formulation, these herbicides are not recommended on bahiagrass pastures for weed control."
            } 
        ]
    }, 

    {
        plantName: ["blackbrush", "guajillo"],
        herbicides: [
            {
                herbicideName: "tebuthiuron 20% pellets",
                herbicideQuantity: {
                    broadcast: {
                        contolRating: "H",
                        rate: "10-15lb pellets (2-3lb active ingredient)"
                    }, 
                    IPT: {
                        contolRating: "VH",
                        rate: "0.5oz pellets (0.1oz active ingredient)/45sqft ground area or 2-4in. stem diameter"
                    }
                },
                sprayVolume: null,
                timing: "Anytime - optimim period is Oct 1-Apr 1.",
                remarks: "Use higher rate on deep soils with higher clay content. For individual plant treatment, apply pellets evenly on the soil under the plant canopy and 1ft beyond canopy edge. Best results are expected on coarse-textured soils."
            } 
        ]
    }, 

    {
        plantName: ["blackjack oak", "bois d'arc", "elm", "hackberry", "lotebush", "post oak", "pricklyash (Hercules club)", "whitebrush (beebrush, beebush)", "willow", "winged elm"],
        herbicides: [
            {
                herbicideName: "hexazinone liquid",
                herbicideQuantity: {
                    broadcast: {
                        contolRating: null,
                        rate: null
                    }, 
                    IPT: {
                        contolRating: "VH",
                        rate: "4ml/3ft canopy diameter or height, whichever is greater"
                    }
                },
                sprayVolume: null,
                timing: "Late Winter-Summer",
                remarks: "Apply undiluted hexazinone liquid or hexazinone pellets to soil surface between the stem base and the edge of the canopy. Use an exact delivery handgun applicator to apply hexazinone liquid. If plant size requires more than a single 4ml application of hexazinone liquid, or 2 hexazinone pellets, apply subsequent applications or pellets equally spaced around the plant. Do not use these treatments on marshy or poorly drained sites nor on soils classified as clays. Best results are expected on coarse-textured soils."
            }, 

            {
                herbicideName: "hexazinone pellet",
                herbicideQuantity: {
                    broadcast: {
                        contolRating: null,
                        rate: null
                    }, 
                    IPT: {
                        contolRating: "VH",
                        rate: "2 pellets/3ft canopy diameter or height, whichever is greater"
                    }
                },
                sprayVolume: null,
                timing: "Anytime - optimum period is Oct 1-Apr 1.",
                remarks: "Apply undiluted hexazinone liquid or hexazinone pellets to soil surface between the stem base and the edge of the canopy. Use an exact delivery handgun applicator to apply hexazinone liquid. If plant size requires more than a single 4ml application of hexazinone liquid, or 2 hexazinone pellets, apply subsequent applications or pellets equally spaced around the plant. Do not use these treatments on marshy or poorly drained sites nor on soils classified as clays. Best results are expected on coarse-textured soils."
            } 
        ]
    }, 

    {
        plantName: ["blackjack oak", "post oak", "winged elm"],
        herbicides: [
            {
                herbicideName: "tebuthiuron 20% pellets",
                herbicideQuantity: {
                    broadcast: {
                        contolRating: "VH",
                        rate: "10lb pellets (2lb active ingredient)"
                    }, 
                    IPT: {
                        contolRating: "VH",
                        rate: "0.5oz pellets (0.1oz active ingredient)/45sqft of ground area or 2-4in. of stem diameter"
                    }
                },
                sprayVolume: null,
                timing: "Anytime - optimum period is Oct 1-Apr 1.",
                remarks: "For individual plant treatment, apply pellets evenly on the soil under the plant canopy and 1ft beyond canopy edge."
            } 
        ]
    }, 

    {
        plantName: ["blackgum", "sweetgum", "other hardwoods"],
        herbicides: [
            {
                herbicideName: "triclopyr:2,4-D (1:2)",
                herbicideQuantity: {
                    broadcast: {
                        contolRating: null,
                        rate: null
                    }, 
                    IPT: {
                        contolRating: "H",
                        rate: "4% in diesel fuel oil"
                    }
                },
                sprayVolume: "Apply to freshly cut surface of stump immediately after cutting.",
                timing: "Anytime - best results when soil is dry.",
                remarks: null
            } 
        ]
    }, 

    {
        plantName: ["burrobrush"],
        herbicides: [
            {
                herbicideName: "picloram",
                herbicideQuantity: {
                    broadcast: {
                        contolRating: null,
                        rate: null
                    }, 
                    IPT: {
                        contolRating: "VH",
                        rate: "1%"
                    }
                },
                sprayVolume: "Thoroughly wet foliage for individual plant treatment.",
                timing: "Apr-Jul",
                remarks: null
            }, 

            {
                herbicideName: "picloram:2,4-D (1:4), (3.8lb/gal product)",
                herbicideQuantity: {
                    broadcast: {
                        contolRating: null,
                        rate: null
                    }, 
                    IPT: {
                        contolRating: "VH",
                        rate: "1.3%"
                    }
                },
                sprayVolume: "Thoroughly we foliage for individual plant treatment.",
                timing: "Apr-Jul",
                remarks: "Picloram:2,4-D (1:4), (3.8lb/gal product): Do not apply more than 80oz/acre per year."
            }, 

            {
                herbicideName: "picloram:2,4-D (1:4), (2.4lb/gal product)",
                herbicideQuantity: {
                    broadcast: {
                        contolRating: null,
                        rate: null
                    }, 
                    IPT: {
                        contolRating: "VH",
                        rate: "2%"
                    }
                },
                sprayVolume: "Thoroughly we foliage for individual plant treatment.",
                timing: "Apr=Jul",
                remarks: null
            } 
        ]
    }, 

    {
        plantName: ["catclaw mimosa"],
        herbicides: [
            {
                herbicideName: "tebuthiuron 20% pellets",
                herbicideQuantity: {
                    broadcast: {
                        contolRating: "H",
                        rate: "3.75lb pellets (0.75lb active ingredient)"
                    }, 
                    IPT: {
                        contolRating: "VH",
                        rate: "0.5oz pellets (0.1oz active ingredient)/100sqft of ground area or 2-4in. of stem diameter"
                    }
                },
                sprayVolume: null,
                timing: "Anytime - optimum period is May 1-Jul 1 in Trans-Pecos and Oct 1-Apr 1 in rest of state.",
                remarks: "Use only when brush is growing on sand, loamy sand, or sandy loam soil. For individual plant treatment, apply pellets evenly on the soil under the plant canopy and 1ft beyond canopy edge."
            } 
        ]
    }, 

    {
        plantName: [],
        herbicides: [
            {
                herbicideName: "tebuthiuron 20% pellets",
                herbicideQuantity: {
                    broadcast: {
                        contolRating: "VH",
                        rate: "3.75lb pellets (0.75lb active ingredient)"
                    }, 
                    IPT: {
                        contolRating: "VH",
                        rate: "0.5oz pellets (0.1oz active ingredient)/100sqft of ground area or 2-4in of stem diameter"
                    }
                },
                sprayVolume: null,
                timing: "Anytime - optimum period is Oct 1-Apr 1.",
                remarks: "For individual plant treatment, apply pellets evenly on the soil under the plant canopy and 1ft beyond canopy edge."
            } 
        ]
    }, 

    {
        plantName: ["Chinese tallowtree"],
        herbicides: [
            {
                herbicideName: "picloram:2,4-D (1:4) (3.8lb/gal product)",
                herbicideQuantity: {
                    broadcast: {
                        contolRating: "VH",
                        rate: "80oz (2.4lb)"
                    }, 
                    IPT: {
                        contolRating: "VH",
                        rate: "0.63%"
                    }
                },
                sprayVolume: "5-15 gal as aerial spray or 10-25gal for ground broadcast application. Thoroughly wet foliage for individual plant treatment. Add 32-64oz surfactant/100gal water.",
                timing: "Spring or Fall",
                remarks: "Picloram:2,4-D (1:4), (3.8lb/gal product): Do not apply more than 80oz/acre per year."
            }, 

            {
                herbicideName: "picloram:2,4-D (1:4) (2.5lb/gal product)",
                herbicideQuantity: {
                    broadcast: {
                        contolRating: "VH",
                        rate: "128oz (2.5lb)"
                    }, 
                    IPT: {
                        contolRating: "VH",
                        rate: "1%"
                    }
                },
                sprayVolume: "5-15 gal as aerial spray or 10-25gal for ground broadcast application. Thoroughly wet foliage for individual plant treatment. Add 32-64oz surfactant/100gal water.",
                timing: "Spring or Fall",
                remarks: null
            }, 

            {
                herbicideName: "picloram + 2,4-d amine",
                herbicideQuantity: {
                    broadcast: {
                        contolRating: "VH",
                        rate: "32oz (0.5lb) picloram + 64oz (2lb) 2,4-D (4lb/gal product)"
                    }, 
                    IPT: {
                        contolRating: "VH",
                        rate: "0.25% picloram + 0.5% 2,4-D (4lb/gal product)"
                    }
                },
                sprayVolume: "5-15 gal as aerial spray or 10-25gal for ground broadcast application. Thoroughly wet foliage for individual plant treatment. Add 32-64oz surfactant/100gal water.",
                timing: "Spring or Fall",
                remarks: null
            }, 

            {
                herbicideName: "picloram:fluroxypyr (1:1)",
                herbicideQuantity: {
                    broadcast: {
                        contolRating: "VH",
                        rate: "80oz (0.84lb)"
                    }, 
                    IPT: {
                        contolRating: "VH",
                        rate: "1%"
                    }
                },
                sprayVolume: "5-15 gal as aerial spray or 10-25gal for ground broadcast application. Thoroughly wet foliage for individual plant treatment. Add 32-64oz surfactant/100gal water.",
                timing: "Spring or Fall",
                remarks: null
            }, 

            {
                herbicideName: "picloram",
                herbicideQuantity: {
                    broadcast: {
                        contolRating: "VH",
                        rate: "32oz (0.5lb)"
                    }, 
                    IPT: {
                        contolRating: "VH",
                        rate: "0.5%"
                    }
                },
                sprayVolume: "5-15 gal as aerial spray or 10-25gal for ground broadcast application. Thoroughly wet foliage for individual plant treatment. Add 32-64oz surfactant/100gal water.",
                timing: "Spring or Fall",
                remarks: null
            }, 

            {
                herbicideName: "picloram + triclopyr ester",
                herbicideQuantity: {
                    broadcast: {
                        contolRating: "VH",
                        rate: "32oz (0.5lb) picloram + 16oz (0.5lb) triclopyr ester"
                    }, 
                    IPT: {
                        contolRating: "VH",
                        rate: "0.5% picloram + 0.25% triclopyr ester"
                    }
                },
                sprayVolume: "5-15 gal as aerial spray or 10-25gal for ground broadcast application. Thoroughly wet foliage for individual plant treatment. Add 32-64oz surfactant/100gal water.",
                timing: "Spring or Fall",
                remarks: null
            }, 
            {
                herbicideName: "hexazinone liquid",
                herbicideQuantity: {
                    broadcast: {
                        contolRating: null,
                        rate: null
                    }, 
                    IPT: {
                        contolRating: "VH",
                        rate: "4ml/3ft canopy diameter or height, whichever is greater"
                    }
                },
                sprayVolume: null,
                timing: "Late Winter-Summer",
                remarks: "Apply undiluted hexazinone liquid, tebuthiruon 20% pellets, or hexazinone pellets to soil between stem base and the edge of the canopy. Use an exact delivery handgun applicator to apply hexazinone liquid. If plant size requires more than a single 4ml application of hexazinone liquid, or 2 hexazinone pellets, apply subsequent applications or pellets equally spaced around the plant. Do not use these treatments on marshy or poorly drained sites nor on soils classified as clays. Best results are expected on coarse-textured soils."
            }, 

            {
                herbicideName: "hexazinone pellets",
                herbicideQuantity: {
                    broadcast: {
                        contolRating: null,
                        rate: null
                    }, 
                    IPT: {
                        contolRating: "VH",
                        rate: "2 pellets/3ft canopy diameter or height, whichever is greater"
                    }
                },
                sprayVolume: null,
                timing: null,
                remarks: "Apply undiluted hexazinone liquid, tebuthiruon 20% pellets, or hexazinone pellets to soil between stem base and the edge of the canopy. Use an exact delivery handgun applicator to apply hexazinone liquid. If plant size requires more than a single 4ml application of hexazinone liquid, or 2 hexazinone pellets, apply subsequent applications or pellets equally spaced around the plant. Do not use these treatments on marshy or poorly drained sites nor on soils classified as clays. Best results are expected on coarse-textured soils."
            }, 

            {
                herbicideName: "teuthiuron 20% pellets",
                herbicideQuantity: {
                    broadcast: {
                        contolRating: null,
                        rate: null
                    }, 
                    IPT: {
                        contolRating: "VH",
                        rate: "0.5oz pellets (0.1oz active ingredient)/45sqft of ground area or 2-4in. of stem diameter"
                    }
                },
                sprayVolume: null,
                timing: "Anytime - optimum period is Oct 1-Apr 1",
                remarks: "Apply undiluted hexazinone liquid, tebuthiruon 20% pellets, or hexazinone pellets to soil between stem base and the edge of the canopy. Use an exact delivery handgun applicator to apply hexazinone liquid. If plant size requires more than a single 4ml application of hexazinone liquid, or 2 hexazinone pellets, apply subsequent applications or pellets equally spaced around the plant. Do not use these treatments on marshy or poorly drained sites nor on soils classified as clays. Best results are expected on coarse-textured soils."
            }, 

            {
                herbicideName: "triclopyr ester",
                herbicideQuantity: {
                    broadcast: {
                        contolRating: null,
                        rate: null
                    }, 
                    IPT: {
                        contolRating: "VH",
                        rate: "15% in diesel fuel"
                    }
                },
                sprayVolume: "Apply to lower 12-18in. of trunk to wet the bark, but not to point of runoff. Apply completely around the trunk.",
                timing: "Anytime — optimum time is during growing season when plants have mature leaves.",
                remarks: "Use only on plants with a smooth bark and/or a trunk diameter less than 4in. This is a Brush Busters® low volume basal application method. A 5500-X1 nozzle is preferred."
            }, 

            {
                herbicideName: "triclopyr ester",
                herbicideQuantity: {
                    broadcast: {
                        contolRating: null,
                        rate: null
                    }, 
                    IPT: {
                        contolRating: "VH",
                        rate: "25% in diesel fuel"
                    }
                },
                sprayVolume: "Apply to lower 12-18in. of trunk to wet the bark, but not to point of runoff. Apply completely around the trunk.",
                timing: "Anytime — optimum time is during growing season when plants have mature leaves.",
                remarks: "Use only on plants with a smooth bark and/or a trunk diameter less than 4in. This is a Brush Busters® low volume basal application method. A 5500-X1 nozzle is preferred."
            } 
        ]
    }, 

    {
        plantName: ["Christ thorn"],
        herbicides: [
            {
                herbicideName: "triclopyr ester",
                herbicideQuantity: {
                    broadcast: {
                        contolRating: null,
                        rate: null
                    }, 
                    IPT: {
                        contolRating: "VH",
                        rate: "1%"
                    }
                },
                sprayVolume: "Add 32-64oz surfactant/100gal water. Thorohgly wet foliage.",
                timing: "Early Summer",
                remarks: null
            }, 

            {
                herbicideName: "triclopyr ester + picloram",
                herbicideQuantity: {
                    broadcast: {
                        contolRating: null,
                        rate: null
                    }, 
                    IPT: {
                        contolRating: "VH",
                        rate: "0.5% triclopyr ester + 0.5% picloram"
                    }
                },
                sprayVolume: "Add 32-64oz surfactant/100gal water. Thoroughly wet foliage.",
                timing: "Early Summer",
                remarks: null
            } 
        ]
    }, 

    {
        plantName: ["common or eastern persimmon"],
        herbicides: [
            {
                herbicideName: "dicamba",
                herbicideQuantity: {
                    broadcast: {
                        contolRating: "L",
                        rate: "64oz (2lb)"
                    }, 
                    IPT: {
                        contolRating: "H",
                        rate: "1%"
                    }
                },
                sprayVolume: "Ground broadcast 15-20gal water. Thoroughly wet foliage for individual plant treatment. Add 32-64oz surfactant/100gal water.",
                timing: "Spring, when leaves are fully developed.",
                remarks: null
            }, 

            {
                herbicideName: "picloram:fluroxypyr (1:1)",
                herbicideQuantity: {
                    broadcast: {
                        contolRating: null,
                        rate: null
                    }, 
                    IPT: {
                        contolRating: "VH",
                        rate: "1-2%"
                    }
                },
                sprayVolume: "Ground broadcast 15-20gal water. Thoroughly wet foliage for individual plant treatment. Add 32-64oz surfactant/100gal water.",
                timing: "Spring, when leaves are fully developed.",
                remarks: null
            } 
        ]
    }, 

    {
        plantName: ["creosotebush", "tarbush", "whitethorn acacia"],
        herbicides: [
            {
                herbicideName: "tebuthiuron 20% pellets",
                herbicideQuantity: {
                    broadcast: {
                        contolRating: "H",
                        rate: "3.75-5lb of pellets (0.75-1lb active ingredient)"
                    }, 
                    IPT: {
                        contolRating: "VH",
                        rate: "0.5oz pellets (0.1oz active ingredient)/100sqft of ground area"
                    }
                },
                sprayVolume: null,
                timing: "Anytime - optimum period is May 1-Jul 1.",
                remarks: "Use 5 lb pellets/ac when soil is a loam, silt loam, silt, sandy clay loam, or clay loam. Use low rate when soil is a sand, loamy sand, or sandy loam. Do not treat mountainside or gravelly ridges with slopes of 7% or more. Do not treat if soils have a cation exchange capacity greater than 30 meq/100 grams (commonly called “gyp” soils). For individual plant treatment, apply pellets evenly on soil under the plant canopy and 1ft beyond the canopy edge."
            } 
        ]
    }, 

    {
        plantName: ["eastern redcedar"],
        herbicides: [
            {
                herbicideName: "picloram",
                herbicideQuantity: {
                    broadcast: {
                        contolRating: null,
                        rate: null
                    }, 
                    IPT: {
                        contolRating: "VH",
                        rate: "4ml/3ft height or canopy diameter, whichever is greater"
                    }
                },
                sprayVolume: null,
                timing: "Spring or Fall",
                remarks: "Apply undiluted hexazinone liquid, picloram, or hexazinone pellets to soil surface between the stem base and the edge of the canopy. Use an exact delivery handgun applicator to apply hexazinone liquid and picloram. If plant size requires more than one 4ml application of hexazinone liquid or picloram, or more than 2 hexazinone pellets, apply subsequent applications or pellets equally spaced around the plant. Do not use these treatments on marshy or poorly drained sites nor on soils classified as clays. Best results are expected on coarse-textured soils."
            }, 

            {
                herbicideName: "hexazinone liquid",
                herbicideQuantity: {
                    broadcast: {
                        contolRating: null,
                        rate: null
                    }, 
                    IPT: {
                        contolRating: "VH",
                        rate: "4ml/3ft height or canopy diameter, whichever is greater, or 1in. trunk diameter"
                    }
                },
                sprayVolume: null,
                timing: "Later winter through Summer",
                remarks: "Apply undiluted hexazinone liquid, picloram, or hexazinone pellets to soil surface between the stem base and the edge of the canopy. Use an exact delivery handgun applicator to apply hexazinone liquid and picloram. If plant size requires more than one 4ml application of hexazinone liquid or picloram, or more than 2 hexazinone pellets, apply subsequent applications or pellets equally spaced around the plant. Do not use these treatments on marshy or poorly drained sites nor on soils classified as clays. Best results are expected on coarse-textured soils."
            }, 

            {
                herbicideName: "hexazinone pellet",
                herbicideQuantity: {
                    broadcast: {
                        contolRating: null,
                        rate: null
                    }, 
                    IPT: {
                        contolRating: "VH",
                        rate: "2 pellets/3ft height or canopy diameter, whichever is greater, or 1in. trunk diameter"
                    }
                },
                sprayVolume: null,
                timing: "Late Winter through Summer",
                remarks: "Apply undiluted hexazinone liquid, picloram, or hexazinone pellets to soil surface between the stem base and the edge of the canopy. Use an exact delivery handgun applicator to apply hexazinone liquid and picloram. If plant size requires more than one 4ml application of hexazinone liquid or picloram, or more than 2 hexazinone pellets, apply subsequent applications or pellets equally spaced around the plant. Do not use these treatments on marshy or poorly drained sites nor on soils classified as clays. Best results are expected on coarse-textured soils."
            } 
        ]
    }, 

    {
        plantName: ["elm", "granjeno (spiny hackberry)", "hackberry", "pricklyash (Hercules club)", "yaupon"],
        herbicides: [
            {
                herbicideName: "tebuthiuron 20% pellets",
                herbicideQuantity: {
                    broadcast: {
                        contolRating: null,
                        rate: null
                    }, 
                    IPT: {
                        contolRating: "VH",
                        rate: "0.5oz pellets (0.1oz active ingredient)/45sqft of ground area or 2-4in. of stem diameter"
                    }
                },
                sprayVolume: null,
                timing: "Anytime during the year - optimum period is Oct 1-Apr 1, except in Trans-Pecos, where optimum period is May 1-Jul 1.",
                remarks: "Apply pellets evenly on the soil under the plant canopy and 1ft beyond canopy edge."
            } 
        ]
    }, 

    {
        plantName: ["huisache", "lotebush"],
        herbicides: [
            {
                herbicideName: "tebuthiuron 20% pellets",
                herbicideQuantity: {
                    broadcast: {
                        contolRating: null,
                        rate: null
                    }, 
                    IPT: {
                        contolRating: "L",
                        rate: "0.5oz pellets (0.1oz active ingredient)/45sqft of ground area or 2-4in. of stem diameter"
                    }
                },
                ssprayVolume: null,
                timing: "Anytime during the year - optimum period is Oct 1-Apr 1, except in Trans-Pecos, where optimum period is May 1-Jul 1.",
                remarks: "Apply pellets evenly on the soil under the plant canopy and 1ft beyond canopy edge."
            } 
        ]
    }, 

    {
        plantName: ["flameleaf sumac"],
        herbicides: [
            {
                herbicideName: "picloram:2,4-D (1:4) (3.8lb/gal product)",
                herbicideQuantity: {
                    broadcast: {
                        contolRating: null,
                        rate: null
                    }, 
                    IPT: {
                        contolRating: "VH",
                        rate: "0.63%"
                    }
                },
                sprayVolume: "For aerial applications, the minimum suggested total spray volume is 4gal/ac. Use water + surfactant, crop oil, or methylated seed oil. For ground broadcast applications, the suggested total spray volume is 10-25gal/ac. Use water + surfactant, crop oil, or methylated seed oil. Thoroughly wet foliage for individual plant treatments. Add 32-64oz surfactant/100gal water.",
                timing: "Late Spring, when leaves mature.",
                remarks: "Picloram:2,4-D (1:4) (3.8lb/gal product): Do not apply more than 80oz/acre per year."
            }, 

            {
                herbicideName: "picloram:2,4-D (1:4) (2.5lb/gal product)",
                herbicideQuantity: {
                    broadcast: {
                        contolRating: null,
                        rate: null
                    }, 
                    IPT: {
                        contolRating: "VH",
                        rate: "1%"
                    }
                },
                sprayVolume: "For aerial applications, the minimum suggested total spray volume is 4gal/ac. Use water + surfactant, crop oil, or methylated seed oil. For ground broadcast applications, the suggested total spray volume is 10-25gal/ac. Use water + surfactant, crop oil, or methylated seed oil. Thoroughly wet foliage for individual plant treatments. Add 32-64oz surfactant/100gal water.",
                timing: "Late Spring, when leaves mature.",
                remarks: null
            }, 

            {
                herbicideName: "picloram:fluroxypyr (1:1)",
                herbicideQuantity: {
                    broadcast: {
                        contolRating: "H",
                        rate: "48-96oz (0.5-1.0lb)"
                    }, 
                    IPT: {
                        contolRating: "VH",
                        rate: "0.75%"
                    }
                },
                sprayVolume: "For aerial applications, the minimum suggested total spray volume is 4gal/ac. Use water + surfactant, crop oil, or methylated seed oil. For ground broadcast applications, the suggested total spray volume is 10-25gal/ac. Use water + surfactant, crop oil, or methylated seed oil. Thoroughly wet foliage for individual plant treatments. Add 32-64oz surfactant/100gal water.",
                timing: "Late Spring, when leaves mature.",
                remarks: null
            }, 

            {
                herbicideName: "picloram",
                herbicideQuantity: {
                    broadcast: {
                        contolRating: "H",
                        rate: "16-32oz (0.25-0.5lb)"
                    }, 
                    IPT: {
                        contolRating: "VH",
                        rate: "0.5%"
                    }
                },
                sprayVolume: "For aerial applications, the minimum suggested total spray volume is 4gal/ac. Use water + surfactant, crop oil, or methylated seed oil. For ground broadcast applications, the suggested total spray volume is 10-25gal/ac. Use water + surfactant, crop oil, or methylated seed oil. Thoroughly wet foliage for individual plant treatments. Add 32-64oz surfactant/100gal water.",
                timing: "Late Spring, when leaves mature.",
                remarks: null
            }, 

            {
                herbicideName: "picloram + triclopyr ester",
                herbicideQuantity: {
                    broadcast: {
                        contolRating: "H",
                        rate: "16oz (0.25lb) picloram + 8oz (0.25lb) triclopyr ester"
                    }, 
                    IPT: {
                        contolRating: "VH",
                        rate: "0.25% picloram + 0.25% triclopyr ester"
                    }
                },
                sprayVolume: "For aerial applications, the minimum suggested total spray volume is 4gal/ac. Use water + surfactant, crop oil, or methylated seed oil. For ground broadcast applications, the suggested total spray volume is 10-25gal/ac. Use water + surfactant, crop oil, or methylated seed oil. Thoroughly wet foliage for individual plant treatments. Add 32-64oz surfactant/100gal water.",
                timing: "Late Spring, when leaves mature.",
                remarks: null
            }, 

            {
                herbicideName: "picloram + 2,4-D amine or low volatile ester",
                herbicideQuantity: {
                    broadcast: {
                        contolRating: null,
                        rate: null
                    }, 
                    IPT: {
                        contolRating: "VH",
                        rate: "0.25% picloram + 0.5% 2,4-D (4lb/gal product)"
                    }
                },
                sprayVolume: "For aerial applications, the minimum suggested total spray volume is 4gal/ac. Use water + surfactant, crop oil, or methylated seed oil. For ground broadcast applications, the suggested total spray volume is 10-25gal/ac. Use water + surfactant, crop oil, or methylated seed oil. Thoroughly wet foliage for individual plant treatments. Add 32-64oz surfactant/100gal water.",
                timing: "Late Spring, when leaves mature.",
                remarks: null
            } 
        ]
    }, 

    {
        plantName: ["giant reed"],
        herbicides: [
            {
                herbicideName: "imazapyr",
                herbicideQuantity: {
                    broadcast: {
                        contolRating: "VH",
                        rate: "64oz (1lb)"
                    }, 
                    IPT: {
                        contolRating: "VH",
                        rate: "0.5%"
                    }
                },
                sprayVolume: "Use a minimum 20-30gal/ac total volume of ground broadcast applications and a minimum 15gal/ac for aerial. When using individual plant applications, spray plants to runoff. Add 1% MSO to individual plant treatments and 32oz/ac for broadcast applications.",
                timing: "Spray when plants are actiely growing during the Summer or Fall with a mimimum of 3ft plant height.",
                remarks: "Do not mow plants for 3-4mo. after treatment. When exposure to aquatic environments is possible, use an herbicide with aquatic label."
            } 
        ]
    }, 

    {
        plantName: ["greenbriar"],
        herbicides: [
            {
                herbicideName: "dicamba + 2,4-D low volatile ester",
                herbicideQuantity: {
                    broadcast: {
                        contolRating: null,
                        rate: null
                    }, 
                    IPT: {
                        contolRating: "H",
                        rate: "1.5% dicamba + 3% 2,4-D (4lb/gal product) in diesel fuel oil"
                    }
                },
                sprayVolume: "Thoroughly wet stems with diesel/hebicide mix",
                timing: "Winter",
                remarks: "Use as a dormant stem treatment. Constant agitation is needed to maintain proper mixture."
            } 
        ]
    }, 

    {
        plantName: ["hardwoods >1in. diameter except mesquite and huisache"],
        herbicides: [
            {
                herbicideName: "2.4-D amine",
                herbicideQuantity: {
                    broadcast: {
                        contolRating: null,
                        rate: null
                    }, 
                    IPT: {
                        contolRating: "H",
                        rate: "undiluted"
                    }
                },
                sprayVolume: "Use tree injector or other injecting equipment. Apply in cuts spaced 2in. apart at base of trees. Apply until 2,4-D runs from each end of cut.",
                timing: "Summer or Winter",
                remarks: null
            } 
        ]
    }, 

    {
        plantName: ["honeylocust"],
        herbicides: [
            {
                herbicideName: "Picloram:2,4-D (1:4), (3.8lb/gal product)",
                herbicideQuantity: {
                    broadcast: {
                        contolRating: null,
                        rate: null
                    }, 
                    IPT: {
                        contolRating: "VH",
                        rate: "0.63%"
                    }
                },
                sprayVolume: "For aerial applications, the minimum suggested total spray volume is 5gal/acre. Use water plus surfactant, crop oil, or methylated seed oil. For ground broadcast applications, the suggested total spray volume is 20-25gal/acre. Use water plus surfactant, crop oil, or methylated seed oil. Thoroughly wet foliage, but not to the point of dripping, for individual plant treatments. Add 32-64oz of surfactant per 100gal.",
                timing: "Late Spring after leaves mature through Summer.",
                remarks: "Picloram:2,4-D (1:4), (3.8lb/gal product): Do not apply more than 80oz/acre per year."
            }, 

            {
                herbicideName: "picloram:2,4-D (1:4), (2.5lb/gal product)",
                herbicideQuantity: {
                    broadcast: {
                        contolRating: null,
                        rate: null
                    }, 
                    IPT: {
                        contolRating: "VH",
                        rate: "1%"
                    }
                },
                sprayVolume: "For aerial applications, the minimum suggested total spray volume is 5gal/acre. Use water plus surfactant, crop oil, or methylated seed oil. For ground broadcast applications, the suggested total spray volume is 20-25gal/acre. Use water plus surfactant, crop oil, or methylated seed oil. Thoroughly wet foliage, but not to the point of dripping, for individual plant treatments. Add 32-64oz of surfactant per 100gal.",
                timing: "Late Spring after leaves mature through Summer.",
                remarks: null
            }, 

            {
                herbicideName: "aminopyralid:picloram:fluroxypyr (1:2:2)",
                herbicideQuantity: {
                    broadcast: {
                        contolRating: null,
                        rate: null
                    }, 
                    IPT: {
                        contolRating: "VH",
                        rate: "1%"
                    }
                },
                sprayVolume: "For aerial applications, the minimum suggested total spray volume is 5gal/acre. Use water plus surfactant, crop oil, or methylated seed oil. For ground broadcast applications, the suggested total spray volume is 20-25gal/acre. Use water plus surfactant, crop oil, or methylated seed oil. Thoroughly wet foliage, but not to the point of dripping, for individual plant treatments. Add 32-64oz of surfactant per 100gal.",
                timing: "Late Spring after leaves mature through Summer.",
                remarks: null
            }, 

            {
                herbicideName: "aminpyralid:clopyralid (1:4.6)",
                herbicideQuantity: {
                    broadcast: {
                        contolRating: "H",
                        rate: "28oz (0.61lb)"
                    }, 
                    IPT: {
                        contolRating: "VH",
                        rate: "1%"
                    }
                },
                sprayVolume: "For aerial applications, the minimum suggested total spray volume is 5gal/acre. Use water plus surfactant, crop oil, or methylated seed oil. For ground broadcast applications, the suggested total spray volume is 20-25gal/acre. Use water plus surfactant, crop oil, or methylated seed oil. Thoroughly wet foliage, but not to the point of dripping, for individual plant treatments. Add 32-64oz of surfactant per 100gal.",
                timing: "Late Spring after leaves mature through Summer.",
                remarks: null
            }, 

            {
                herbicideName: "aminpyralid:2,4-D (1:8)",
                herbicideQuantity: {
                    broadcast: {
                        contolRating: "H",
                        rate: "33.6oz (0.98lb)"
                    }, 
                    IPT: {
                        contolRating: "VH",
                        rate: "1%"
                    }
                },
                sprayVolume: "For aerial applications, the minimum suggested total spray volume is 5gal/acre. Use water plus surfactant, crop oil, or methylated seed oil. For ground broadcast applications, the suggested total spray volume is 20-25gal/acre. Use water plus surfactant, crop oil, or methylated seed oil. Thoroughly wet foliage, but not to the point of dripping, for individual plant treatments. Add 32-64oz of surfactant per 100gal.",
                timing: "Late Spring after leaves mature through Summer.",
                remarks: null
            }, 

            {
                herbicideName: "picloram:fluroxypyr (1:1)",
                herbicideQuantity: {
                    broadcast: {
                        contolRating: "M-H",
                        rate: "48oz (0.5lb)"
                    }, 
                    IPT: {
                        contolRating: null,
                        rate: null
                    }
                },
                sprayVolume: "For aerial applications, the minimum suggested total spray volume is 5gal/acre. Use water plus surfactant, crop oil, or methylated seed oil. For ground broadcast applications, the suggested total spray volume is 20-25gal/acre. Use water plus surfactant, crop oil, or methylated seed oil. Thoroughly wet foliage, but not to the point of dripping, for individual plant treatments. Add 32-64oz of surfactant per 100gal.",
                timing: "Late Spring after leaves mature through Summer.",
                remarks: null
            }, 
            {
                herbicideName: "aminpyralid:metsulfuron methyl (1:6.2)",
                herbicideQuantity: {
                    broadcast: {
                        contolRating: "M-H",
                        rate: "3.3oz (0.127lb)"
                    }, 
                    IPT: {
                        contolRating: null,
                        rate: null
                    }
                },
                sprayVolume: "For aerial applications, the minimum suggested total spray volume is 5gal/acre. Use water plus surfactant, crop oil, or methylated seed oil. For ground broadcast applications, the suggested total spray volume is 20-25gal/acre. Use water plus surfactant, crop oil, or methylated seed oil. Thoroughly wet foliage, but not to the point of dripping, for individual plant treatments. Add 32-64oz of surfactant per 100gal.",
                timing: "Late Spring after leaves mature through Summer.",
                remarks: "Because of metsulfuron methyl in the formulation, these herbicides are not recommended on bahiagrass pastures for weed control."
            } 
        ]
    }, 

    {
        plantName: ["huisache"],
        herbicides: [
            {
                herbicideName: "aminocyclopyrachlor:triclopyr amine (1:2)",
                herbicideQuantity: {
                    broadcast: {
                        contolRating: "VH",
                        rate: "36-48oz(0.56-0.75lb)"
                    }, 
                    IPT: {
                        contolRating: "VH",
                        rate: "1.5%"
                    }
                },
                sprayVolume: "For aerial applications, use at least 4gal/ac. total spray volume. For dense canopies, carrier volume may be increased to 10gal/ac. For ground broadcast applications, suggested total spray volume is 10-25gal/ac. Use 4-5fl oz/ac MSO or MSO-OS (organosilicone surfactant) spray adjuvant. For best results, use nozzles and pressure setting to deliver a mean spray droplet diameter within the range of 350 to 450 microns. For IPT, thoroughly spray foliage to wet but not dripping. Add 32-64oz (0.25-0.5%) nonionic surfactant/100gal water.",
                timing: "The best results are achieved in the fall months (typically late September-November 1). Do not spray when soil temperature at a depth of 12in. is below 75° F. For optimum root-kill, do not spray when >25% of the leaf canopy is damaged due to insects, disease, or hail. Apply with good soil moisture conditions and a full, healthy leaf canopy. May be best after cumulative rainfall of 4in. or more during the 4 weeks prior to treatment or 3in. or more during the 2 weeks prior to treatment.",
                remarks: "Aminocyclopyrachlor:triclopyr amine requires specific picolinic acid chemistry training and certification before use. See label for additional site-use information and restrictions. Higher plant-kill can be expected for trees under 7ft. tall. If plants are shredded, wait until regrowth is 3ft. tall or higher before treatment."
            }, 

            {
                herbicideName: "aminopyralid:clopyralid (1:4.6) + picloram",
                herbicideQuantity: {
                    broadcast: {
                        contolRating: "M-H",
                        rate: "28oz (0.61lb) aminopyralid:clopyralid + 32oz (0.5lb) picloram"
                    }, 
                    IPT: {
                        contolRating: null,
                        rate: null
                    }
                },
                sprayVolume: "For aerial applications, use at least 4gal/ac. total spray volume. For dense canopies, carrier volume may be increased to 10gal/ac. For ground broadcast applications, suggested total spray volume is 10-25gal/ac. Use 4-5fl oz/ac MSO or MSO-OS (organosilicone surfactant) spray adjuvant. For best results, use nozzles and pressure setting to deliver a mean spray droplet diameter within the range of 350 to 450 microns.",
                timing: "The best results are achieved in the fall months (typically late September-November 1). Do not spray when soil temperature at a depth of 12in. is below 75° F. For optimum root-kill, do not spray when >25% of the leaf canopy is damaged due to insects, disease, or hail. Apply with good soil moisture conditions and a full, healthy leaf canopy. May be best after cumulative rainfall of 4in. or more during the 4 weeks prior to treatment or 3in. or more during the 2 weeks prior to treatment.",
                remarks: "Higher plant-kill can be expected for trees under 7ft. tall. If plants are shredded, wait until regrowth is 3ft. tall or higher before treatment."
            }, 

            {
                herbicideName: "aminpyralid:2,4-D (1:8) + picloram:2,4-D (1:4) + picloram",
                herbicideQuantity: {
                    broadcast: {
                        contolRating: "M-H",
                        rate: "34oz (0.99lb) aminopyralid:2,4-D + 72oz (1.4lb) picloram:2,4-D + 13oz (0.2lb) picloram"
                    }, 
                    IPT: {
                        contolRating: null,
                        rate: null
                    }
                },
                sprayVolume: "For aerial applications, use at least 4gal/ac. total spray volume. For dense canopies, carrier volume may be increased to 10gal/ac. For ground broadcast applications, suggested total spray volume is 10-25gal/ac. Use 4-5fl oz/ac MSO or MSO-OS (organosilicone surfactant) spray adjuvant. For best results, use nozzles and pressure setting to deliver a mean spray droplet diameter within the range of 350 to 450 microns.",
                timing: "The best results are achieved in the fall months (typically late September-November 1). Do not spray when soil temperature at a depth of 12in. is below 75° F. For optimum root-kill, do not spray when >25% of the leaf canopy is damaged due to insects, disease, or hail. Apply with good soil moisture conditions and a full, healthy leaf canopy. May be best after cumulative rainfall of 4in. or more during the 4 weeks prior to treatment or 3in. or more during the 2 weeks prior to treatment.",
                remarks: "Higher plant-kill can be expected for trees under 7ft. tall. If plants are shredded, wait until regrowth is 3ft. tall or higher before treatment. Picloram:2,4-D (1:4), (3.8lb/gal product): Do not apply more than 80oz/acre per year."
            }, 

            {
                herbicideName: "picloram + triclopyr ester",
                herbicideQuantity: {
                    broadcast: {
                        contolRating: "L-M",
                        rate: "32oz (0.5lb) picloram + 16oz (0.5lb) triclopyr ester"
                    }, 
                    IPT: {
                        contolRating: "H",
                        rate: "0.5% picloram + 0.5% triclopyr ester"
                    }
                },
                sprayVolume: "For aerial applications, use at least 4gal/ac. total spray volume. For dense canopies, carrier volume may be increased to 10gal/ac. For ground broadcast applications, suggested total spray volume is 10-25gal/ac. Use 4-5fl oz/ac MSO or MSO-OS (organosilicone surfactant) spray adjuvant. For best results, use nozzles and pressure setting to deliver a mean spray droplet diameter within the range of 350 to 450 microns. For IPT, thoroughly spray foliage to wet but not dripping. Add 32-64oz (0.25-0.5%) nonionic surfactant/100gal water.",
                timing: "The best results are achieved in the fall months (typically late September-November 1). Do not spray when soil temperature at a depth of 12in. is below 75° F. For optimum root-kill, do not spray when >25% of the leaf canopy is damaged due to insects, disease, or hail. Apply with good soil moisture conditions and a full, healthy leaf canopy. May be best after cumulative rainfall of 4in. or more during the 4 weeks prior to treatment or 3in. or more during the 2 weeks prior to treatment.",
                remarks: "Higher plant-kill can be expected for trees under 7ft. tall. If plants are shredded, wait until regrowth is 3ft. tall or higher before treatment."
            }, 

            {
                herbicideName: "picloram + clopyralid",
                herbicideQuantity: {
                    broadcast: {
                        contolRating: "L-M",
                        rate: "32oz (0.5lb) picloram + 11-21oz (0.25-0.5lb) clopyralid"
                    }, 
                    IPT: {
                        contolRating: "H",
                        rate: "0.5% picloram + 0.5% clopyralid"
                    }
                },
                sprayVolume: "For aerial applications, use at least 4gal/ac. total spray volume. For dense canopies, carrier volume may be increased to 10gal/ac. For ground broadcast applications, suggested total spray volume is 10-25gal/ac. Use 4-5fl oz/ac MSO or MSO-OS (organosilicone surfactant) spray adjuvant. For best results, use nozzles and pressure setting to deliver a mean spray droplet diameter within the range of 350 to 450 microns. For IPT, thoroughly spray foliage to wet but not dripping. Add 32-64oz (0.25-0.5%) nonionic surfactant/100gal water.",
                timing: "The best results are achieved in the fall months (typically late September-November 1). Do not spray when soil temperature at a depth of 12in. is below 75° F. For optimum root-kill, do not spray when >25% of the leaf canopy is damaged due to insects, disease, or hail. Apply with good soil moisture conditions and a full, healthy leaf canopy. May be best after cumulative rainfall of 4in. or more during the 4 weeks prior to treatment or 3in. or more during the 2 weeks prior to treatment.",
                remarks: "Higher plant-kill can be expected for trees under 7ft. tall. If plants are shredded, wait until regrowth is 3ft. tall or higher before treatment."
            }, 

            {
                herbicideName: "picloram:fluroxypyr (1:1)",
                herbicideQuantity: {
                    broadcast: {
                        contolRating: "L-M",
                        rate: "96oz (1.0lb)"
                    }, 
                    IPT: {
                        contolRating: "H",
                        rate: "1%"
                    }
                },
                sprayVolume: "For aerial applications, use at least 4gal/ac. total spray volume. For dense canopies, carrier volume may be increased to 10gal/ac. For ground broadcast applications, suggested total spray volume is 10-25gal/ac. Use 4-5fl oz/ac MSO or MSO-OS (organosilicone surfactant) spray adjuvant. For best results, use nozzles and pressure setting to deliver a mean spray droplet diameter within the range of 350 to 450 microns. For IPT, thoroughly spray foliage to wet but not dripping. Add 32-64oz (0.25-0.5%) nonionic surfactant/100gal water.",
                timing: "The best results are achieved in the fall months (typically late September-November 1). Do not spray when soil temperature at a depth of 12in. is below 75° F. For optimum root-kill, do not spray when >25% of the leaf canopy is damaged due to insects, disease, or hail. Apply with good soil moisture conditions and a full, healthy leaf canopy. May be best after cumulative rainfall of 4in. or more during the 4 weeks prior to treatment or 3in. or more during the 2 weeks prior to treatment.",
                remarks: "Higher plant-kill can be expected for trees under 7ft. tall. If plants are shredded, wait until regrowth is 3ft. tall or higher before treatment."
            }, 

            {
                herbicideName: "picloram",
                herbicideQuantity: {
                    broadcast: {
                        contolRating: "L-M",
                        rate: "32oz (0.5lb)"
                    }, 
                    IPT: {
                        contolRating: "H",
                        rate: "1%"
                    }
                },
                sprayVolume: "For aerial applications, use at least 4gal/ac. total spray volume. For dense canopies, carrier volume may be increased to 10gal/ac. For ground broadcast applications, suggested total spray volume is 10-25gal/ac. Use 4-5fl oz/ac MSO or MSO-OS (organosilicone surfactant) spray adjuvant. For best results, use nozzles and pressure setting to deliver a mean spray droplet diameter within the range of 350 to 450 microns. For IPT, thoroughly spray foliage to wet but not dripping. Add 32-64oz (0.25-0.5%) nonionic surfactant/100gal water.",
                timing: "The best results are achieved in the fall months (typically late September-November 1). Do not spray when soil temperature at a depth of 12in. is below 75° F. For optimum root-kill, do not spray when >25% of the leaf canopy is damaged due to insects, disease, or hail. Apply with good soil moisture conditions and a full, healthy leaf canopy. May be best after cumulative rainfall of 4in. or more during the 4 weeks prior to treatment or 3in. or more during the 2 weeks prior to treatment.",
                remarks: "Higher plant-kill can be expected for trees under 7ft. tall. If plants are shredded, wait until regrowth is 3ft. tall or higher before treatment."
            }, 

            {
                herbicideName: "picloram:2,4-D (1:4), (3.8lb/gal product)",
                herbicideQuantity: {
                    broadcast: {
                        contolRating: null,
                        rate: null
                    }, 
                    IPT: {
                        contolRating: "VH",
                        rate: "0.63%"
                    }
                },
                sprayVolume: "For aerial applications, use at least 4gal/ac. total spray volume. For dense canopies, carrier volume may be increased to 10gal/ac. For ground broadcast applications, suggested total spray volume is 10-25gal/ac. Use 4-5fl oz/ac MSO or MSO-OS (organosilicone surfactant) spray adjuvant. For best results, use nozzles and pressure setting to deliver a mean spray droplet diameter within the range of 350 to 450 microns. For IPT, thoroughly spray foliage to wet but not dripping. Add 32-64oz (0.25-0.5%) nonionic surfactant/100gal water.",
                timing: "The best results are achieved in the fall months (typically late September-November 1). Do not spray when soil temperature at a depth of 12in. is below 75° F. For optimum root-kill, do not spray when >25% of the leaf canopy is damaged due to insects, disease, or hail. Apply with good soil moisture conditions and a full, healthy leaf canopy. May be best after cumulative rainfall of 4in. or more during the 4 weeks prior to treatment or 3in. or more during the 2 weeks prior to treatment.",
                remarks: "Higher plant-kill can be expected for trees under 7ft. tall. If plants are shredded, wait until regrowth is 3ft. tall or higher before treatment. Picloram:2,4-D (1:4), (3.8lb/gal product): Do not apply more than 80oz/acre per year."
            },
             
            {
                herbicideName: "picloram:2,4-D (1:4), (2.5lb/gal product)",
                herbicideQuantity: {
                    broadcast: {
                        contolRating: null,
                        rate: null
                    }, 
                    IPT: {
                        contolRating: "VH",
                        rate: "1%"
                    }
                },
                sprayVolume: "For aerial applications, use at least 4gal/ac. total spray volume. For dense canopies, carrier volume may be increased to 10gal/ac. For ground broadcast applications, suggested total spray volume is 10-25gal/ac. Use 4-5fl oz/ac MSO or MSO-OS (organosilicone surfactant) spray adjuvant. For best results, use nozzles and pressure setting to deliver a mean spray droplet diameter within the range of 350 to 450 microns. For IPT, thoroughly spray foliage to wet but not dripping. Add 32-64oz (0.25-0.5%) nonionic surfactant/100gal water.",
                timing: "The best results are achieved in the fall months (typically late September-November 1). Do not spray when soil temperature at a depth of 12in. is below 75° F. For optimum root-kill, do not spray when >25% of the leaf canopy is damaged due to insects, disease, or hail. Apply with good soil moisture conditions and a full, healthy leaf canopy. May be best after cumulative rainfall of 4in. or more during the 4 weeks prior to treatment or 3in. or more during the 2 weeks prior to treatment.",
                remarks: "Higher plant-kill can be expected for trees under 7ft. tall. If plants are shredded, wait until regrowth is 3ft. tall or higher before treatment."
            }, 

            {
                herbicideName: "aminopyralid:clopyralid (1:4.6)",
                herbicideQuantity: {
                    broadcast: {
                        contolRating: null,
                        rate: null
                    }, 
                    IPT: {
                        contolRating: "VH",
                        rate: "1%"
                    }
                },
                sprayVolume: "For aerial applications, use at least 4gal/ac. total spray volume. For dense canopies, carrier volume may be increased to 10gal/ac. For ground broadcast applications, suggested total spray volume is 10-25gal/ac. Use 4-5fl oz/ac MSO or MSO-OS (organosilicone surfactant) spray adjuvant. For best results, use nozzles and pressure setting to deliver a mean spray droplet diameter within the range of 350 to 450 microns. For IPT, thoroughly spray foliage to wet but not dripping. Add 32-64oz (0.25-0.5%) nonionic surfactant/100gal water.",
                timing: "The best results are achieved in the fall months (typically late September-November 1). Do not spray when soil temperature at a depth of 12in. is below 75° F. For optimum root-kill, do not spray when >25% of the leaf canopy is damaged due to insects, disease, or hail. Apply with good soil moisture conditions and a full, healthy leaf canopy. May be best after cumulative rainfall of 4in. or more during the 4 weeks prior to treatment or 3in. or more during the 2 weeks prior to treatment.",
                remarks: "Higher plant-kill can be expected for trees under 7ft. tall. If plants are shredded, wait until regrowth is 3ft. tall or higher before treatment."
            }, 

            {
                herbicideName: "aminopyralid:metsulfuron methyl (1:6.2)",
                herbicideQuantity: {
                    broadcast: {
                        contolRating: "L",
                        rate: "3.3oz (0.127lb)"
                    }, 
                    IPT: {
                        contolRating: null,
                        rate: null
                    }
                },
                sprayVolume: "10-15gal water as aerial spray; 10-20gal water as ground broadcast. Add 32-64oz surfactant/100gal water.",
                timing: "Fall, under good moisture conditions.",
                remarks: "Because of metsulfuron methyl in the formulation, this herbicide is not recommended on bahiagrass pastures for weed and brush control."
            }, 

            {
                herbicideName: "aminopyralid:metsulfuron methyl (1:6.2) + triclopyr ester",
                herbicideQuantity: {
                    broadcast: {
                        contolRating: "M-H",
                        rate: "3.3oz (0.127lb) aminopyralid:metsulfuron methyl + 16oz (0.5lb) triclopyr ester"
                    }, 
                    IPT: {
                        contolRating: null,
                        rate: null
                    }
                },
                sprayVolume: "10-15gal water as aerial spray; 10-20gal water as ground broadcast. Add 32-64oz surfactant/100gal water.",
                timing: "Fall, under good moisture conditions.",
                remarks: "Because of metsulfuron methyl in the formulation, this herbicide is not recommended on bahiagrass pastures for weed and brush control."
            }, 

            {
                herbicideName: "aminopyralid:2,4-D (1:8)",
                herbicideQuantity: {
                    broadcast: {
                        contolRating: "L",
                        rate: "24-34oz (0.7-0.98lb)"
                    }, 
                    IPT: {
                        contolRating: null,
                        rate: null
                    }
                },
                sprayVolume: "10-15gal water as aerial spray; 10-20gal water as ground broadcast. Add 32-64oz surfactant/100gal water.",
                timing: "Fall, under good moisture conditions.",
                remarks: null
            }, 

            {
                herbicideName: "aminopyralid:2,4-D (1:8) + triclopyr ester",
                herbicideQuantity: {
                    broadcast: {
                        contolRating: "L",
                        rate: "24oz (0.70lb) aminopyralid:2,4-D + 16oz (0.5lb) triclopyr ester"
                    }, 
                    IPT: {
                        contolRating: null,
                        rate: null
                    }
                },
                sprayVolume: "10-15gal water as aerial spray; 10-20gal water as ground broadcast. Add 32-64oz surfactant/100gal water.",
                timing: "Fall, under good moisture conditions.",
                remarks: null
            }, 
            
            {
                herbicideName: "triclopyr ester",
                herbicideQuantity: {
                    broadcast: {
                        contolRating: null,
                        rate: null
                    }, 
                    IPT: {
                        contolRating: "H",
                        rate: "15% in diesel fuel oil"
                    }
                },
                sprayVolume: "Apply to lower 12-18in. of trunk to wet the trunk; do not spray to point of runoff. Apply completely around the trunk.",
                timing: "Anytime - optimim time is growing season when plants have mature leaves.",
                remarks: "This is a Brush Busters® low volume basal application method. A 5500-X1 adjustable cone nozzle is preferred. Use only on plants with smooth bark and a trunk diameter less than 4in."
            }, 

            {
                herbicideName: "triclopyr ester",
                herbicideQuantity: {
                    broadcast: {
                        contolRating: null,
                        rate: null
                    }, 
                    IPT: {
                        contolRating: "VH",
                        rate: "25% in diesel fuel"
                    }
                },
                sprayVolume: "Apply to lower 12-18in. of trunk to wet the trunk; do not spray to point of runoff. Apply completely around the trunk.",
                timing: "Anytime - optimim time is growing season when plants have mature leaves.",
                remarks: "This is a Brush Busters® low volume basal application method. A 5500-X1 adjustable cone nozzle is preferred. Use only on plants with smooth bark and a trunk diameter less than 4in."
            } 
        ]
    }, 

    {
        plantName: ["lotebush"],
        herbicides: [
            {
                herbicideName: "triclopyr ester",
                herbicideQuantity: {
                    broadcast: {
                        contolRating: null,
                        rate: null
                    }, 
                    IPT: {
                        contolRating: "VH",
                        rate: "15% in diesel fuel"
                    }
                },
                sprayVolume: "Apply to lower 12-18in. of trunk to wet the trunk; do not spray to point of runoff. Apply completely around the trunk.",
                timing: "Anytime - optimim time is growing season when plants have mature leaves.",
                remarks: "This is a Brush Busters® low volume basal application method. A 5500-X1 adjustable cone nozzle is preferred."
            } 
        ]
    }, 

    {
        plantName: ["Macartney rose (mowed/distured stands w/in 3yrs of disturbance)"],
        herbicides: [
            {
                herbicideName: "2,4-D amine",
                herbicideQuantity: {
                    broadcast: {
                        contolRating: "L",
                        rate: "64oz (2lb) 4lb/gal product"
                    }, 
                    IPT: {
                        contolRating: "L",
                        rate: "1% 4lb/gal product"
                    }
                },
                sprayVolume: "5-15 gal water as aerial spray; 25-30gal water as ground broadcast. Thoroughly wet foliage and stems for individual plant treatment. Add 32-64oz surfactant/100gal water.",
                timing: "Spring, before Jun 1, good growth conditions.",
                remarks: "Avoid spraying earlier than 9-12mo. after mowing or when plants have high percentage of new growth. Poor control may be expected if plants are <3ft tall when sprayed. Repeat treatment when necessary."
            }, 

            {
                herbicideName: "picloram:2,4-D (1:4), (3.8lb/gal product)",
                herbicideQuantity: {
                    broadcast: {
                        contolRating: "H",
                        rate: "80oz (2.4lb)"
                    }, 
                    IPT: {
                        contolRating: "VH",
                        rate: "0.63%"
                    }
                },
                sprayVolume: "5-15 gal water as aerial spray; 25-30gal water as ground broadcast. Thoroughly wet foliage and stems for individual plant treatment. Add 32-64oz surfactant/100gal water.",
                timing: "Spring or Fall, good growth conditions.",
                remarks: "Avoid spraying earlier than 9-12mo. after mowing or when plants have high percentage of new growth. Poor control may be expected if plants are <3ft tall when sprayed. Repeat treatment when necessary. Picloram:2,4-D (1:4), (3.8lb/gal product): Do not apply more than 80oz/acre per year."
            }, 

            {
                herbicideName: "picloram:2,4-D (1:4), (2.5lb/gal product)",
                herbicideQuantity: {
                    broadcast: {
                        contolRating: "H",
                        rate: "128oz (2.5lb)"
                    }, 
                    IPT: {
                        contolRating: "VH",
                        rate: "1%"
                    }
                },
                sprayVolume: "5-15 gal water as aerial spray; 25-30gal water as ground broadcast. Thoroughly wet foliage and stems for individual plant treatment. Add 32-64oz surfactant/100gal water.",
                timing: "Spring of Fall, good growth conditions.",
                remarks: "Avoid spraying earlier than 9-12mo. after mowing or when plants have high percentage of new growth. Poor control may be expected if plants are <3ft tall when sprayed. Repeat treatment when necessary."
            }, 

            {
                herbicideName: "picloram + 2,4-D amine or low volatile ester",
                herbicideQuantity: {
                    broadcast: {
                        contolRating: "H",
                        rate: "32oz (0.5lb) picloram + 64oz (2lb) 2,4-D (4lb/gal product)"
                    }, 
                    IPT: {
                        contolRating: "VH",
                        rate: "0.25% picloram + 0.5% 2,4-D (4lb/gal product)"
                    }
                },
                sprayVolume: "5-15 gal water as aerial spray; 25-30gal water as ground broadcast. Thoroughly wet foliage and stems for individual plant treatment. Add 32-64oz surfactant/100gal water.",
                timing: "Spring or Fall, good growth conditions.",
                remarks: "Avoid spraying earlier than 9-12mo. after mowing or when plants have high percentage of new growth. Poor control may be expected if plants are <3ft tall when sprayed. Repeat treatment when necessary."
            }, 

            {
                herbicideName: "2,4-D low volatile ester",
                herbicideQuantity: {
                    broadcast: {
                        contolRating: "L",
                        rate: "64oz (2lb) 4lb/gal product"
                    }, 
                    IPT: {
                        contolRating: "L",
                        rate: "1% (4lb/gal product)"
                    }
                },
                sprayVolume: "5-15 gal water as aerial spray; 25-30gal water as ground broadcast. Thoroughly wet foliage and stems for individual plant treatment. Add 32-64oz surfactant/100gal water.",
                timing: "Fall, under good moisture conditions, before Nov 1.",
                remarks: "Avoid spraying earlier than 9-12mo. after mowing or when plants have high percentage of new growth. Poor control may be expected if plants are <3ft tall when sprayed. Repeat treatment when necessary."
            } 
        ]
    }, 

    {
        plantName: ["Macartney rose (undisturbed stands)"],
        herbicides: [
            {
                herbicideName: "2,4-D amine",
                herbicideQuantity: {
                    broadcast: {
                        contolRating: "L",
                        rate: "128oz (4lb) 4lb/gal product"
                    }, 
                    IPT: {
                        contolRating: "L",
                        rate: "1% (4lb/gal product)"
                    }
                },
                sprayVolume: "5-15 gal water as aerial spray; 25-30gal water as ground broadcast. Thoroughly wet foliage and stems for individual plant treatment. Add 32-64oz surfactant/100gal water.",
                timing: "Spring, before Jun 1, good growth conditions.",
                remarks: null
            }, 

            {
                herbicideName: "picloram:2,4-D (1:4), (3.8lb/gal product)",
                herbicideQuantity: {
                    broadcast: {
                        contolRating: "H",
                        rate: "80oz (2.4lb)"
                    }, 
                    IPT: {
                        contolRating: "VH",
                        rate: "0.63%"
                    }
                },
                sprayVolume: "5-15 gal water as aerial spray; 25-30gal water as ground broadcast. Thoroughly wet foliage and stems for individual plant treatment. Add 32-64oz surfactant/100gal water.",
                timing: "Spring or Fall, good growth conditions.",
                remarks: "Picloram:2,4-D (1:4), (3.8lb/gal product): Do not apply more than 80zo/acre per year."
            }, 

            {
                herbicideName: "picloram:2,4-D (1:4), (2.5lb/gal product)",
                herbicideQuantity: {
                    broadcast: {
                        contolRating: "H",
                        rate: "128oz (2.5lb)"
                    }, 
                    IPT: {
                        contolRating: "VH",
                        rate: "1%"
                    }
                },
                sprayVolume: "5-15 gal water as aerial spray; 25-30gal water as ground broadcast. Thoroughly wet foliage and stems for individual plant treatment. Add 32-64oz surfactant/100gal water.",
                timing: "Spring or Fall, good growth conditions.",
                remarks: null
            }, 

            {
                herbicideName: "picloram + 2,4-D amine or low volatile ester",
                herbicideQuantity: {
                    broadcast: {
                        contolRating: "H",
                        rate: "32oz (0.5lb) picloram + 64oz (2lb) 2,4-D (4lb/gal product)"
                    }, 
                    IPT: {
                        contolRating: "VH",
                        rate: "0.25% picloram + 0.5% 2,4-D (4lb/gal product)"
                    }
                },
                sprayVolume: "5-15 gal water as aerial spray; 25-30gal water as ground broadcast. Thoroughly wet foliage and stems for individual plant treatment. Add 32-64oz surfactant/100gal water.",
                timing: "Spring or Fall, good growth conditions.",
                remarks: null
            }, 

            {
                herbicideName: "2,4-D low volatile ester",
                herbicideQuantity: {
                    broadcast: {
                        contolRating: "L",
                        rate: "96oz (3lb) 4lb/gal product"
                    }, 
                    IPT: {
                        contolRating: "L",
                        rate: "1% (4lb/gal product)"
                    }
                },
                sprayVolume: "5-15 gal water as aerial spray; 25-30gal water as ground broadcast. Thoroughly wet foliage and stems for individual plant treatment. Add 32-64oz surfactant/100gal water.",
                timing: "Fall, good moisture conditions, before Nov 1.",
                remarks: null
            } 
        ]
    }, 

    {
        plantName: ["mesquite", "huisache"],
        herbicides: [
            {
                herbicideName: "hexazinone liquid",
                herbicideQuantity: {
                    broadcast: {
                        contolRating: null,
                        rate: null
                    }, 
                    IPT: {
                        contolRating: "M-H",
                        rate: "4-8lm/3ft of canopy diameter or height, whichever is greater"
                    }
                },
                sprayVolume: null,
                timing: "Late Winter-Summer",
                remarks: "Apply undiluted hexazinone liquid or hexazinone pellets to soil surface between the stem base and the edge of the canopy. Use an exact delivery handgun applicator to apply hexazinone liquid. If plant size requires more than a single 4ml application of hexazinone liquid, or 2 hexazinone pellets, apply subsequent applications or pellets equally spaced around the plant. Do not use these treatments on marshy or poorly drained sites nor on soils classified as clays. Best results are expected on coarse-textured soils."
            }, 

            {
                herbicideName: "hexazinone pellet",
                herbicideQuantity: {
                    broadcast: {
                        contolRating: null,
                        rate: null
                    }, 
                    IPT: {
                        contolRating: "M-H",
                        rate: "2-4 pellets/3ft of canopy diameter or height, whichever is greater"
                    }
                },
                sprayVolume: null,
                timing: "Late Winter-Summer",
                remarks: "Apply undiluted hexazinone liquid or hexazinone pellets to soil surface between the stem base and the edge of the canopy. Use an exact delivery handgun applicator to apply hexazinone liquid. If plant size requires more than a single 4ml application of hexazinone liquid, or 2 hexazinone pellets, apply subsequent applications or pellets equally spaced around the plant. Do not use these treatments on marshy or poorly drained sites nor on soils classified as clays. Best results are expected on coarse-textured soils."
            } 
        ]
    }, 

    {
        plantName: [],
        herbicides: [
            {
                herbicideName: "",
                herbicideQuantity: {
                    broadcast: {
                        contolRating: "",
                        rate: ""
                    }, 
                    IPT: {
                        contolRating: "",
                        rate: ""
                    }
                },
                sprayVolume: "",
                timing: "",
                remarks: ""
            }, 

            {
                herbicideName: "",
                herbicideQuantity: {
                    broadcast: {
                        contolRating: "",
                        rate: ""
                    }, 
                    IPT: {
                        contolRating: "",
                        rate: ""
                    }
                },
                sprayVolume: "",
                timing: "",
                remarks: ""
            }, 

            {
                herbicideName: "",
                herbicideQuantity: {
                    broadcast: {
                        contolRating: "",
                        rate: ""
                    }, 
                    IPT: {
                        contolRating: "",
                        rate: ""
                    }
                },
                sprayVolume: "",
                timing: "",
                remarks: ""
            }, 

            {
                herbicideName: "",
                herbicideQuantity: {
                    broadcast: {
                        contolRating: "",
                        rate: ""
                    }, 
                    IPT: {
                        contolRating: "",
                        rate: ""
                    }
                },
                sprayVolume: "",
                timing: "",
                remarks: ""
            }, 

            {
                herbicideName: "",
                herbicideQuantity: {
                    broadcast: {
                        contolRating: "",
                        rate: ""
                    }, 
                    IPT: {
                        contolRating: "",
                        rate: ""
                    }
                },
                sprayVolume: "",
                timing: "",
                remarks: ""
            }, 

            {
                herbicideName: "",
                herbicideQuantity: {
                    broadcast: {
                        contolRating: "",
                        rate: ""
                    }, 
                    IPT: {
                        contolRating: "",
                        rate: ""
                    }
                },
                sprayVolume: "",
                timing: "",
                remarks: ""
            }, 
            {
                herbicideName: "",
                herbicideQuantity: {
                    broadcast: {
                        contolRating: "",
                        rate: ""
                    }, 
                    IPT: {
                        contolRating: "",
                        rate: ""
                    }
                },
                sprayVolume: "",
                timing: "",
                remarks: ""
            }, 

            {
                herbicideName: "",
                herbicideQuantity: {
                    broadcast: {
                        contolRating: "",
                        rate: ""
                    }, 
                    IPT: {
                        contolRating: "",
                        rate: ""
                    }
                },
                sprayVolume: "",
                timing: "",
                remarks: ""
            } 
        ]
    }, 

    {
        plantName: [],
        herbicides: [
            {
                herbicideName: "",
                herbicideQuantity: {
                    broadcast: {
                        contolRating: "",
                        rate: ""
                    }, 
                    IPT: {
                        contolRating: "",
                        rate: ""
                    }
                },
                sprayVolume: "",
                timing: "",
                remarks: ""
            }, 

            {
                herbicideName: "",
                herbicideQuantity: {
                    broadcast: {
                        contolRating: "",
                        rate: ""
                    }, 
                    IPT: {
                        contolRating: "",
                        rate: ""
                    }
                },
                sprayVolume: "",
                timing: "",
                remarks: ""
            }, 

            {
                herbicideName: "",
                herbicideQuantity: {
                    broadcast: {
                        contolRating: "",
                        rate: ""
                    }, 
                    IPT: {
                        contolRating: "",
                        rate: ""
                    }
                },
                sprayVolume: "",
                timing: "",
                remarks: ""
            }, 

            {
                herbicideName: "",
                herbicideQuantity: {
                    broadcast: {
                        contolRating: "",
                        rate: ""
                    }, 
                    IPT: {
                        contolRating: "",
                        rate: ""
                    }
                },
                sprayVolume: "",
                timing: "",
                remarks: ""
            }, 

            {
                herbicideName: "",
                herbicideQuantity: {
                    broadcast: {
                        contolRating: "",
                        rate: ""
                    }, 
                    IPT: {
                        contolRating: "",
                        rate: ""
                    }
                },
                sprayVolume: "",
                timing: "",
                remarks: ""
            }, 

            {
                herbicideName: "",
                herbicideQuantity: {
                    broadcast: {
                        contolRating: "",
                        rate: ""
                    }, 
                    IPT: {
                        contolRating: "",
                        rate: ""
                    }
                },
                sprayVolume: "",
                timing: "",
                remarks: ""
            }, 
            {
                herbicideName: "",
                herbicideQuantity: {
                    broadcast: {
                        contolRating: "",
                        rate: ""
                    }, 
                    IPT: {
                        contolRating: "",
                        rate: ""
                    }
                },
                sprayVolume: "",
                timing: "",
                remarks: ""
            }, 

            {
                herbicideName: "",
                herbicideQuantity: {
                    broadcast: {
                        contolRating: "",
                        rate: ""
                    }, 
                    IPT: {
                        contolRating: "",
                        rate: ""
                    }
                },
                sprayVolume: "",
                timing: "",
                remarks: ""
            } 
        ]
    }, 

    {
        plantName: [],
        herbicides: [
            {
                herbicideName: "",
                herbicideQuantity: {
                    broadcast: {
                        contolRating: "",
                        rate: ""
                    }, 
                    IPT: {
                        contolRating: "",
                        rate: ""
                    }
                },
                sprayVolume: "",
                timing: "",
                remarks: ""
            }, 

            {
                herbicideName: "",
                herbicideQuantity: {
                    broadcast: {
                        contolRating: "",
                        rate: ""
                    }, 
                    IPT: {
                        contolRating: "",
                        rate: ""
                    }
                },
                sprayVolume: "",
                timing: "",
                remarks: ""
            }, 

            {
                herbicideName: "",
                herbicideQuantity: {
                    broadcast: {
                        contolRating: "",
                        rate: ""
                    }, 
                    IPT: {
                        contolRating: "",
                        rate: ""
                    }
                },
                sprayVolume: "",
                timing: "",
                remarks: ""
            }, 

            {
                herbicideName: "",
                herbicideQuantity: {
                    broadcast: {
                        contolRating: "",
                        rate: ""
                    }, 
                    IPT: {
                        contolRating: "",
                        rate: ""
                    }
                },
                sprayVolume: "",
                timing: "",
                remarks: ""
            }, 

            {
                herbicideName: "",
                herbicideQuantity: {
                    broadcast: {
                        contolRating: "",
                        rate: ""
                    }, 
                    IPT: {
                        contolRating: "",
                        rate: ""
                    }
                },
                sprayVolume: "",
                timing: "",
                remarks: ""
            }, 

            {
                herbicideName: "",
                herbicideQuantity: {
                    broadcast: {
                        contolRating: "",
                        rate: ""
                    }, 
                    IPT: {
                        contolRating: "",
                        rate: ""
                    }
                },
                sprayVolume: "",
                timing: "",
                remarks: ""
            }, 
            {
                herbicideName: "",
                herbicideQuantity: {
                    broadcast: {
                        contolRating: "",
                        rate: ""
                    }, 
                    IPT: {
                        contolRating: "",
                        rate: ""
                    }
                },
                sprayVolume: "",
                timing: "",
                remarks: ""
            }, 

            {
                herbicideName: "",
                herbicideQuantity: {
                    broadcast: {
                        contolRating: "",
                        rate: ""
                    }, 
                    IPT: {
                        contolRating: "",
                        rate: ""
                    }
                },
                sprayVolume: "",
                timing: "",
                remarks: ""
            } 
        ]
    }, 

    {
        plantName: [],
        herbicides: [
            {
                herbicideName: "",
                herbicideQuantity: {
                    broadcast: {
                        contolRating: "",
                        rate: ""
                    }, 
                    IPT: {
                        contolRating: "",
                        rate: ""
                    }
                },
                sprayVolume: "",
                timing: "",
                remarks: ""
            }, 

            {
                herbicideName: "",
                herbicideQuantity: {
                    broadcast: {
                        contolRating: "",
                        rate: ""
                    }, 
                    IPT: {
                        contolRating: "",
                        rate: ""
                    }
                },
                sprayVolume: "",
                timing: "",
                remarks: ""
            }, 

            {
                herbicideName: "",
                herbicideQuantity: {
                    broadcast: {
                        contolRating: "",
                        rate: ""
                    }, 
                    IPT: {
                        contolRating: "",
                        rate: ""
                    }
                },
                sprayVolume: "",
                timing: "",
                remarks: ""
            }, 

            {
                herbicideName: "",
                herbicideQuantity: {
                    broadcast: {
                        contolRating: "",
                        rate: ""
                    }, 
                    IPT: {
                        contolRating: "",
                        rate: ""
                    }
                },
                sprayVolume: "",
                timing: "",
                remarks: ""
            }, 

            {
                herbicideName: "",
                herbicideQuantity: {
                    broadcast: {
                        contolRating: "",
                        rate: ""
                    }, 
                    IPT: {
                        contolRating: "",
                        rate: ""
                    }
                },
                sprayVolume: "",
                timing: "",
                remarks: ""
            }, 

            {
                herbicideName: "",
                herbicideQuantity: {
                    broadcast: {
                        contolRating: "",
                        rate: ""
                    }, 
                    IPT: {
                        contolRating: "",
                        rate: ""
                    }
                },
                sprayVolume: "",
                timing: "",
                remarks: ""
            }, 
            {
                herbicideName: "",
                herbicideQuantity: {
                    broadcast: {
                        contolRating: "",
                        rate: ""
                    }, 
                    IPT: {
                        contolRating: "",
                        rate: ""
                    }
                },
                sprayVolume: "",
                timing: "",
                remarks: ""
            }, 

            {
                herbicideName: "",
                herbicideQuantity: {
                    broadcast: {
                        contolRating: "",
                        rate: ""
                    }, 
                    IPT: {
                        contolRating: "",
                        rate: ""
                    }
                },
                sprayVolume: "",
                timing: "",
                remarks: ""
            } 
        ]
    }, 

    {
        plantName: [],
        herbicides: [
            {
                herbicideName: "",
                herbicideQuantity: {
                    broadcast: {
                        contolRating: "",
                        rate: ""
                    }, 
                    IPT: {
                        contolRating: "",
                        rate: ""
                    }
                },
                sprayVolume: "",
                timing: "",
                remarks: ""
            }, 

            {
                herbicideName: "",
                herbicideQuantity: {
                    broadcast: {
                        contolRating: "",
                        rate: ""
                    }, 
                    IPT: {
                        contolRating: "",
                        rate: ""
                    }
                },
                sprayVolume: "",
                timing: "",
                remarks: ""
            }, 

            {
                herbicideName: "",
                herbicideQuantity: {
                    broadcast: {
                        contolRating: "",
                        rate: ""
                    }, 
                    IPT: {
                        contolRating: "",
                        rate: ""
                    }
                },
                sprayVolume: "",
                timing: "",
                remarks: ""
            }, 

            {
                herbicideName: "",
                herbicideQuantity: {
                    broadcast: {
                        contolRating: "",
                        rate: ""
                    }, 
                    IPT: {
                        contolRating: "",
                        rate: ""
                    }
                },
                sprayVolume: "",
                timing: "",
                remarks: ""
            }, 

            {
                herbicideName: "",
                herbicideQuantity: {
                    broadcast: {
                        contolRating: "",
                        rate: ""
                    }, 
                    IPT: {
                        contolRating: "",
                        rate: ""
                    }
                },
                sprayVolume: "",
                timing: "",
                remarks: ""
            }, 

            {
                herbicideName: "",
                herbicideQuantity: {
                    broadcast: {
                        contolRating: "",
                        rate: ""
                    }, 
                    IPT: {
                        contolRating: "",
                        rate: ""
                    }
                },
                sprayVolume: "",
                timing: "",
                remarks: ""
            }, 
            {
                herbicideName: "",
                herbicideQuantity: {
                    broadcast: {
                        contolRating: "",
                        rate: ""
                    }, 
                    IPT: {
                        contolRating: "",
                        rate: ""
                    }
                },
                sprayVolume: "",
                timing: "",
                remarks: ""
            }, 

            {
                herbicideName: "",
                herbicideQuantity: {
                    broadcast: {
                        contolRating: "",
                        rate: ""
                    }, 
                    IPT: {
                        contolRating: "",
                        rate: ""
                    }
                },
                sprayVolume: "",
                timing: "",
                remarks: ""
            } 
        ]
    }, 

    {
        plantName: [],
        herbicides: [
            {
                herbicideName: "",
                herbicideQuantity: {
                    broadcast: {
                        contolRating: "",
                        rate: ""
                    }, 
                    IPT: {
                        contolRating: "",
                        rate: ""
                    }
                },
                sprayVolume: "",
                timing: "",
                remarks: ""
            }, 

            {
                herbicideName: "",
                herbicideQuantity: {
                    broadcast: {
                        contolRating: "",
                        rate: ""
                    }, 
                    IPT: {
                        contolRating: "",
                        rate: ""
                    }
                },
                sprayVolume: "",
                timing: "",
                remarks: ""
            }, 

            {
                herbicideName: "",
                herbicideQuantity: {
                    broadcast: {
                        contolRating: "",
                        rate: ""
                    }, 
                    IPT: {
                        contolRating: "",
                        rate: ""
                    }
                },
                sprayVolume: "",
                timing: "",
                remarks: ""
            }, 

            {
                herbicideName: "",
                herbicideQuantity: {
                    broadcast: {
                        contolRating: "",
                        rate: ""
                    }, 
                    IPT: {
                        contolRating: "",
                        rate: ""
                    }
                },
                sprayVolume: "",
                timing: "",
                remarks: ""
            }, 

            {
                herbicideName: "",
                herbicideQuantity: {
                    broadcast: {
                        contolRating: "",
                        rate: ""
                    }, 
                    IPT: {
                        contolRating: "",
                        rate: ""
                    }
                },
                sprayVolume: "",
                timing: "",
                remarks: ""
            }, 

            {
                herbicideName: "",
                herbicideQuantity: {
                    broadcast: {
                        contolRating: "",
                        rate: ""
                    }, 
                    IPT: {
                        contolRating: "",
                        rate: ""
                    }
                },
                sprayVolume: "",
                timing: "",
                remarks: ""
            }, 
            {
                herbicideName: "",
                herbicideQuantity: {
                    broadcast: {
                        contolRating: "",
                        rate: ""
                    }, 
                    IPT: {
                        contolRating: "",
                        rate: ""
                    }
                },
                sprayVolume: "",
                timing: "",
                remarks: ""
            }, 

            {
                herbicideName: "",
                herbicideQuantity: {
                    broadcast: {
                        contolRating: "",
                        rate: ""
                    }, 
                    IPT: {
                        contolRating: "",
                        rate: ""
                    }
                },
                sprayVolume: "",
                timing: "",
                remarks: ""
            } 
        ]
    }, 

    {
        plantName: [],
        herbicides: [
            {
                herbicideName: "",
                herbicideQuantity: {
                    broadcast: {
                        contolRating: "",
                        rate: ""
                    }, 
                    IPT: {
                        contolRating: "",
                        rate: ""
                    }
                },
                sprayVolume: "",
                timing: "",
                remarks: ""
            }, 

            {
                herbicideName: "",
                herbicideQuantity: {
                    broadcast: {
                        contolRating: "",
                        rate: ""
                    }, 
                    IPT: {
                        contolRating: "",
                        rate: ""
                    }
                },
                sprayVolume: "",
                timing: "",
                remarks: ""
            }, 

            {
                herbicideName: "",
                herbicideQuantity: {
                    broadcast: {
                        contolRating: "",
                        rate: ""
                    }, 
                    IPT: {
                        contolRating: "",
                        rate: ""
                    }
                },
                sprayVolume: "",
                timing: "",
                remarks: ""
            }, 

            {
                herbicideName: "",
                herbicideQuantity: {
                    broadcast: {
                        contolRating: "",
                        rate: ""
                    }, 
                    IPT: {
                        contolRating: "",
                        rate: ""
                    }
                },
                sprayVolume: "",
                timing: "",
                remarks: ""
            }, 

            {
                herbicideName: "",
                herbicideQuantity: {
                    broadcast: {
                        contolRating: "",
                        rate: ""
                    }, 
                    IPT: {
                        contolRating: "",
                        rate: ""
                    }
                },
                sprayVolume: "",
                timing: "",
                remarks: ""
            }, 

            {
                herbicideName: "",
                herbicideQuantity: {
                    broadcast: {
                        contolRating: "",
                        rate: ""
                    }, 
                    IPT: {
                        contolRating: "",
                        rate: ""
                    }
                },
                sprayVolume: "",
                timing: "",
                remarks: ""
            }, 
            {
                herbicideName: "",
                herbicideQuantity: {
                    broadcast: {
                        contolRating: "",
                        rate: ""
                    }, 
                    IPT: {
                        contolRating: "",
                        rate: ""
                    }
                },
                sprayVolume: "",
                timing: "",
                remarks: ""
            }, 

            {
                herbicideName: "",
                herbicideQuantity: {
                    broadcast: {
                        contolRating: "",
                        rate: ""
                    }, 
                    IPT: {
                        contolRating: "",
                        rate: ""
                    }
                },
                sprayVolume: "",
                timing: "",
                remarks: ""
            } 
        ]
    }, 

    {
        plantName: [],
        herbicides: [
            {
                herbicideName: "",
                herbicideQuantity: {
                    broadcast: {
                        contolRating: "",
                        rate: ""
                    }, 
                    IPT: {
                        contolRating: "",
                        rate: ""
                    }
                },
                sprayVolume: "",
                timing: "",
                remarks: ""
            }, 

            {
                herbicideName: "",
                herbicideQuantity: {
                    broadcast: {
                        contolRating: "",
                        rate: ""
                    }, 
                    IPT: {
                        contolRating: "",
                        rate: ""
                    }
                },
                sprayVolume: "",
                timing: "",
                remarks: ""
            }, 

            {
                herbicideName: "",
                herbicideQuantity: {
                    broadcast: {
                        contolRating: "",
                        rate: ""
                    }, 
                    IPT: {
                        contolRating: "",
                        rate: ""
                    }
                },
                sprayVolume: "",
                timing: "",
                remarks: ""
            }, 

            {
                herbicideName: "",
                herbicideQuantity: {
                    broadcast: {
                        contolRating: "",
                        rate: ""
                    }, 
                    IPT: {
                        contolRating: "",
                        rate: ""
                    }
                },
                sprayVolume: "",
                timing: "",
                remarks: ""
            }, 

            {
                herbicideName: "",
                herbicideQuantity: {
                    broadcast: {
                        contolRating: "",
                        rate: ""
                    }, 
                    IPT: {
                        contolRating: "",
                        rate: ""
                    }
                },
                sprayVolume: "",
                timing: "",
                remarks: ""
            }, 

            {
                herbicideName: "",
                herbicideQuantity: {
                    broadcast: {
                        contolRating: "",
                        rate: ""
                    }, 
                    IPT: {
                        contolRating: "",
                        rate: ""
                    }
                },
                sprayVolume: "",
                timing: "",
                remarks: ""
            }, 
            {
                herbicideName: "",
                herbicideQuantity: {
                    broadcast: {
                        contolRating: "",
                        rate: ""
                    }, 
                    IPT: {
                        contolRating: "",
                        rate: ""
                    }
                },
                sprayVolume: "",
                timing: "",
                remarks: ""
            }, 

            {
                herbicideName: "",
                herbicideQuantity: {
                    broadcast: {
                        contolRating: "",
                        rate: ""
                    }, 
                    IPT: {
                        contolRating: "",
                        rate: ""
                    }
                },
                sprayVolume: "",
                timing: "",
                remarks: ""
            } 
        ]
    }, 

    {
        plantName: [],
        herbicides: [
            {
                herbicideName: "",
                herbicideQuantity: {
                    broadcast: {
                        contolRating: "",
                        rate: ""
                    }, 
                    IPT: {
                        contolRating: "",
                        rate: ""
                    }
                },
                sprayVolume: "",
                timing: "",
                remarks: ""
            }, 

            {
                herbicideName: "",
                herbicideQuantity: {
                    broadcast: {
                        contolRating: "",
                        rate: ""
                    }, 
                    IPT: {
                        contolRating: "",
                        rate: ""
                    }
                },
                sprayVolume: "",
                timing: "",
                remarks: ""
            }, 

            {
                herbicideName: "",
                herbicideQuantity: {
                    broadcast: {
                        contolRating: "",
                        rate: ""
                    }, 
                    IPT: {
                        contolRating: "",
                        rate: ""
                    }
                },
                sprayVolume: "",
                timing: "",
                remarks: ""
            }, 

            {
                herbicideName: "",
                herbicideQuantity: {
                    broadcast: {
                        contolRating: "",
                        rate: ""
                    }, 
                    IPT: {
                        contolRating: "",
                        rate: ""
                    }
                },
                sprayVolume: "",
                timing: "",
                remarks: ""
            }, 

            {
                herbicideName: "",
                herbicideQuantity: {
                    broadcast: {
                        contolRating: "",
                        rate: ""
                    }, 
                    IPT: {
                        contolRating: "",
                        rate: ""
                    }
                },
                sprayVolume: "",
                timing: "",
                remarks: ""
            }, 

            {
                herbicideName: "",
                herbicideQuantity: {
                    broadcast: {
                        contolRating: "",
                        rate: ""
                    }, 
                    IPT: {
                        contolRating: "",
                        rate: ""
                    }
                },
                sprayVolume: "",
                timing: "",
                remarks: ""
            }, 
            {
                herbicideName: "",
                herbicideQuantity: {
                    broadcast: {
                        contolRating: "",
                        rate: ""
                    }, 
                    IPT: {
                        contolRating: "",
                        rate: ""
                    }
                },
                sprayVolume: "",
                timing: "",
                remarks: ""
            }, 

            {
                herbicideName: "",
                herbicideQuantity: {
                    broadcast: {
                        contolRating: "",
                        rate: ""
                    }, 
                    IPT: {
                        contolRating: "",
                        rate: ""
                    }
                },
                sprayVolume: "",
                timing: "",
                remarks: ""
            } 
        ]
    }, 

    {
        plantName: [],
        herbicides: [
            {
                herbicideName: "",
                herbicideQuantity: {
                    broadcast: {
                        contolRating: "",
                        rate: ""
                    }, 
                    IPT: {
                        contolRating: "",
                        rate: ""
                    }
                },
                sprayVolume: "",
                timing: "",
                remarks: ""
            }, 

            {
                herbicideName: "",
                herbicideQuantity: {
                    broadcast: {
                        contolRating: "",
                        rate: ""
                    }, 
                    IPT: {
                        contolRating: "",
                        rate: ""
                    }
                },
                sprayVolume: "",
                timing: "",
                remarks: ""
            }, 

            {
                herbicideName: "",
                herbicideQuantity: {
                    broadcast: {
                        contolRating: "",
                        rate: ""
                    }, 
                    IPT: {
                        contolRating: "",
                        rate: ""
                    }
                },
                sprayVolume: "",
                timing: "",
                remarks: ""
            }, 

            {
                herbicideName: "",
                herbicideQuantity: {
                    broadcast: {
                        contolRating: "",
                        rate: ""
                    }, 
                    IPT: {
                        contolRating: "",
                        rate: ""
                    }
                },
                sprayVolume: "",
                timing: "",
                remarks: ""
            }, 

            {
                herbicideName: "",
                herbicideQuantity: {
                    broadcast: {
                        contolRating: "",
                        rate: ""
                    }, 
                    IPT: {
                        contolRating: "",
                        rate: ""
                    }
                },
                sprayVolume: "",
                timing: "",
                remarks: ""
            }, 

            {
                herbicideName: "",
                herbicideQuantity: {
                    broadcast: {
                        contolRating: "",
                        rate: ""
                    }, 
                    IPT: {
                        contolRating: "",
                        rate: ""
                    }
                },
                sprayVolume: "",
                timing: "",
                remarks: ""
            }, 
            {
                herbicideName: "",
                herbicideQuantity: {
                    broadcast: {
                        contolRating: "",
                        rate: ""
                    }, 
                    IPT: {
                        contolRating: "",
                        rate: ""
                    }
                },
                sprayVolume: "",
                timing: "",
                remarks: ""
            }, 

            {
                herbicideName: "",
                herbicideQuantity: {
                    broadcast: {
                        contolRating: "",
                        rate: ""
                    }, 
                    IPT: {
                        contolRating: "",
                        rate: ""
                    }
                },
                sprayVolume: "",
                timing: "",
                remarks: ""
            } 
        ]
    }, 

    {
        plantName: [],
        herbicides: [
            {
                herbicideName: "",
                herbicideQuantity: {
                    broadcast: {
                        contolRating: "",
                        rate: ""
                    }, 
                    IPT: {
                        contolRating: "",
                        rate: ""
                    }
                },
                sprayVolume: "",
                timing: "",
                remarks: ""
            }, 

            {
                herbicideName: "",
                herbicideQuantity: {
                    broadcast: {
                        contolRating: "",
                        rate: ""
                    }, 
                    IPT: {
                        contolRating: "",
                        rate: ""
                    }
                },
                sprayVolume: "",
                timing: "",
                remarks: ""
            }, 

            {
                herbicideName: "",
                herbicideQuantity: {
                    broadcast: {
                        contolRating: "",
                        rate: ""
                    }, 
                    IPT: {
                        contolRating: "",
                        rate: ""
                    }
                },
                sprayVolume: "",
                timing: "",
                remarks: ""
            }, 

            {
                herbicideName: "",
                herbicideQuantity: {
                    broadcast: {
                        contolRating: "",
                        rate: ""
                    }, 
                    IPT: {
                        contolRating: "",
                        rate: ""
                    }
                },
                sprayVolume: "",
                timing: "",
                remarks: ""
            }, 

            {
                herbicideName: "",
                herbicideQuantity: {
                    broadcast: {
                        contolRating: "",
                        rate: ""
                    }, 
                    IPT: {
                        contolRating: "",
                        rate: ""
                    }
                },
                sprayVolume: "",
                timing: "",
                remarks: ""
            }, 

            {
                herbicideName: "",
                herbicideQuantity: {
                    broadcast: {
                        contolRating: "",
                        rate: ""
                    }, 
                    IPT: {
                        contolRating: "",
                        rate: ""
                    }
                },
                sprayVolume: "",
                timing: "",
                remarks: ""
            }, 
            {
                herbicideName: "",
                herbicideQuantity: {
                    broadcast: {
                        contolRating: "",
                        rate: ""
                    }, 
                    IPT: {
                        contolRating: "",
                        rate: ""
                    }
                },
                sprayVolume: "",
                timing: "",
                remarks: ""
            }, 

            {
                herbicideName: "",
                herbicideQuantity: {
                    broadcast: {
                        contolRating: "",
                        rate: ""
                    }, 
                    IPT: {
                        contolRating: "",
                        rate: ""
                    }
                },
                sprayVolume: "",
                timing: "",
                remarks: ""
            } 
        ]
    }, 

    {
        plantName: [],
        herbicides: [
            {
                herbicideName: "",
                herbicideQuantity: {
                    broadcast: {
                        contolRating: "",
                        rate: ""
                    }, 
                    IPT: {
                        contolRating: "",
                        rate: ""
                    }
                },
                sprayVolume: "",
                timing: "",
                remarks: ""
            }, 

            {
                herbicideName: "",
                herbicideQuantity: {
                    broadcast: {
                        contolRating: "",
                        rate: ""
                    }, 
                    IPT: {
                        contolRating: "",
                        rate: ""
                    }
                },
                sprayVolume: "",
                timing: "",
                remarks: ""
            }, 

            {
                herbicideName: "",
                herbicideQuantity: {
                    broadcast: {
                        contolRating: "",
                        rate: ""
                    }, 
                    IPT: {
                        contolRating: "",
                        rate: ""
                    }
                },
                sprayVolume: "",
                timing: "",
                remarks: ""
            }, 

            {
                herbicideName: "",
                herbicideQuantity: {
                    broadcast: {
                        contolRating: "",
                        rate: ""
                    }, 
                    IPT: {
                        contolRating: "",
                        rate: ""
                    }
                },
                sprayVolume: "",
                timing: "",
                remarks: ""
            }, 

            {
                herbicideName: "",
                herbicideQuantity: {
                    broadcast: {
                        contolRating: "",
                        rate: ""
                    }, 
                    IPT: {
                        contolRating: "",
                        rate: ""
                    }
                },
                sprayVolume: "",
                timing: "",
                remarks: ""
            }, 

            {
                herbicideName: "",
                herbicideQuantity: {
                    broadcast: {
                        contolRating: "",
                        rate: ""
                    }, 
                    IPT: {
                        contolRating: "",
                        rate: ""
                    }
                },
                sprayVolume: "",
                timing: "",
                remarks: ""
            }, 
            {
                herbicideName: "",
                herbicideQuantity: {
                    broadcast: {
                        contolRating: "",
                        rate: ""
                    }, 
                    IPT: {
                        contolRating: "",
                        rate: ""
                    }
                },
                sprayVolume: "",
                timing: "",
                remarks: ""
            }, 

            {
                herbicideName: "",
                herbicideQuantity: {
                    broadcast: {
                        contolRating: "",
                        rate: ""
                    }, 
                    IPT: {
                        contolRating: "",
                        rate: ""
                    }
                },
                sprayVolume: "",
                timing: "",
                remarks: ""
            } 
        ]
    }, 
];

