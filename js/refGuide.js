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
                sprayVolume: "2-4 gal water for aerial spray; 10-25gal water for ground broadcast application. Thoroughly wet foliage for individual plant treatment. Add 32-64oz surfactant/100gal water.",
                timing: "Spring, during bud stage (pre-bloom).",
                remarks: "Bud stage usually occurs mid-May to early-June. Picloram:2,4-D (1:4), (3.8lb/gal product): Do not apply more than 80oz/acre per year. Because of metsulfuron methyl in the formulation, these herbicides are not recommended on bahiagrass pastures for weed control."
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
                sprayVolume: "2-4 gal water for aerial spray; 10-25gal water for ground broadcast application. Thoroughly wet foliage for individual plant treatment. Add 32-64oz surfactant/100gal water.",
                timing: "Spring, during bud stage (pre-bloom).",
                remarks: "Bud stage usually occurs mid-May to early-June. Picloram:2,4-D (1:4), (3.8lb/gal product): Do not apply more than 80oz/acre per year. Because of metsulfuron methyl in the formulation, these herbicides are not recommended on bahiagrass pastures for weed control."
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
                sprayVolume: "2-4 gal water for aerial spray; 10-25gal water for ground broadcast application. Thoroughly wet foliage for individual plant treatment. Add 32-64oz surfactant/100gal water.",
                timing: "Spring, during bud stage (pre-bloom).",
                remarks: "Bud stage usually occurs mid-May to early-June. Picloram:2,4-D (1:4), (3.8lb/gal product): Do not apply more than 80oz/acre per year. Because of metsulfuron methyl in the formulation, these herbicides are not recommended on bahiagrass pastures for weed control."
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
                sprayVolume: "2-4 gal water for aerial spray; 10-25gal water for ground broadcast application. Thoroughly wet foliage for individual plant treatment. Add 32-64oz surfactant/100gal water.",
                timing: "Spring, during bud stage (pre-bloom).",
                remarks: "Bud stage usually occurs mid-May to early-June. Picloram:2,4-D (1:4), (3.8lb/gal product): Do not apply more than 80oz/acre per year. Because of metsulfuron methyl in the formulation, these herbicides are not recommended on bahiagrass pastures for weed control."
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
                sprayVolume: "2-4 gal water for aerial spray; 10-25gal water for ground broadcast application. Thoroughly wet foliage for individual plant treatment. Add 32-64oz surfactant/100gal water.",
                timing: "Spring, during bud stage (pre-bloom).",
                remarks: "Bud stage usually occurs mid-May to early-June. Picloram:2,4-D (1:4), (3.8lb/gal product): Do not apply more than 80oz/acre per year. Because of metsulfuron methyl in the formulation, these herbicides are not recommended on bahiagrass pastures for weed control."
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
                sprayVolume: "2-4 gal water for aerial spray; 10-25gal water for ground broadcast application. Thoroughly wet foliage for individual plant treatment. Add 32-64oz surfactant/100gal water.",
                timing: "Spring, during bud stage (pre-bloom).",
                remarks: "Bud stage usually occurs mid-May to early-June. Picloram:2,4-D (1:4), (3.8lb/gal product): Do not apply more than 80oz/acre per year. Because of metsulfuron methyl in the formulation, these herbicides are not recommended on bahiagrass pastures for weed control."
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
                sprayVolume: "2-4 gal water for aerial spray; 10-25gal water for ground broadcast application. Thoroughly wet foliage for individual plant treatment. Add 32-64oz surfactant/100gal water.",
                timing: "Spring, during bud stage (pre-bloom).",
                remarks: "Bud stage usually occurs mid-May to early-June. Picloram:2,4-D (1:4), (3.8lb/gal product): Do not apply more than 80oz/acre per year. Because of metsulfuron methyl in the formulation, these herbicides are not recommended on bahiagrass pastures for weed control."
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
                sprayVolume: "2-4 gal water for aerial spray; 10-25gal water for ground broadcast application. Thoroughly wet foliage for individual plant treatment. Add 32-64oz surfactant/100gal water.",
                timing: "Spring, during bud stage (pre-bloom).",
                remarks: "Bud stage usually occurs mid-May to early-June. Picloram:2,4-D (1:4), (3.8lb/gal product): Do not apply more than 80oz/acre per year. Because of metsulfuron methyl in the formulation, these herbicides are not recommended on bahiagrass pastures for weed control."
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
                sprayVolume: "2-4 gal water for aerial spray; 10-25gal water for ground broadcast application. Thoroughly wet foliage for individual plant treatment. Add 32-64oz surfactant/100gal water.",
                timing: "Spring,during bud stage (pre-bloom).",
                remarks: "Bud stage usually occurs mid-May to early-June. Picloram:2,4-D (1:4), (3.8lb/gal product): Do not apply more than 80oz/acre per year. Because of metsulfuron methyl in the formulation, these herbicides are not recommended on bahiagrass pastures for weed control."
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
                sprayVolume: "2-4 gal water for aerial spray; 10-25gal water for ground broadcast application. Thoroughly wet foliage for individual plant treatment. Add 32-64oz surfactant/100gal water.",
                timing: "Spring, during bud stage (pre-bloom).",
                remarks: "Bud stage usually occurs mid-May to early-June. Picloram:2,4-D (1:4), (3.8lb/gal product): Do not apply more than 80oz/acre per year. Because of metsulfuron methyl in the formulation, these herbicides are not recommended on bahiagrass pastures for weed control."
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
                sprayVolume: "2-4 gal water for aerial spray; 10-25gal water for ground broadcast application. Thoroughly wet foliage for individual plant treatment. Add 32-64oz surfactant/100gal water.",
                timing: "Spring, during bud state (pre-bloom).",
                remarks: "Bud stage usually occurs mid-May to early-June. Picloram:2,4-D (1:4), (3.8lb/gal product): Do not apply more than 80oz/acre per year. Because of metsulfuron methyl in the formulation, these herbicides are not recommended on bahiagrass pastures for weed control."
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
                sprayVolume: "2-4 gal water for aerial spray; 10-25gal water for ground broadcast application. Thoroughly wet foliage for individual plant treatment. Add 32-64oz surfactant/100gal water.",
                timing: "Spring, during bud stage (pre-bloom).",
                remarks: "Bud stage usually occurs mid-May to early-June. Picloram:2,4-D (1:4), (3.8lb/gal product): Do not apply more than 80oz/acre per year. Because of metsulfuron methyl in the formulation, these herbicides are not recommended on bahiagrass pastures for weed control."
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
    }
];

const brushControl = [
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
        ]
    }, 

];

