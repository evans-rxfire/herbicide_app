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
        commonName: "",
        chemicalName: "",
        productName: [],
        activeIngredient: ""
    },

    {
        commonName: "",
        chemicalName: "",
        productName: [],
        activeIngredient: ""
    },

    {
        commonName: "",
        chemicalName: "",
        productName: [],
        activeIngredient: ""
    },

    {
        commonName: "",
        chemicalName: "",
        productName: [],
        activeIngredient: ""
    },

    {
        commonName: "",
        chemicalName: "",
        productName: [],
        activeIngredient: ""
    },
    {
        commonName: "",
        chemicalName: "",
        productName: [],
        activeIngredient: ""
    },

    {
        commonName: "",
        chemicalName: "",
        productName: [],
        activeIngredient: ""
    },

    {
        commonName: "",
        chemicalName: "",
        productName: [],
        activeIngredient: ""
    },

    {
        commonName: "",
        chemicalName: "",
        productName: [],
        activeIngredient: ""
    },

    {
        commonName: "",
        chemicalName: "",
        productName: [],
        activeIngredient: ""
    },

    {
        commonName: "",
        chemicalName: "",
        productName: [],
        activeIngredient: ""
    },

    {
        commonName: "",
        chemicalName: "",
        productName: [],
        activeIngredient: ""
    },

    {
        commonName: "",
        chemicalName: "",
        productName: [],
        activeIngredient: ""
    },

    {
        commonName: "",
        chemicalName: "",
        productName: [],
        activeIngredient: ""
    },

    {
        commonName: "",
        chemicalName: "",
        productName: [],
        activeIngredient: ""
    },

    {
        commonName: "",
        chemicalName: "",
        productName: [],
        activeIngredient: ""
    },

    {
        commonName: "",
        chemicalName: "",
        productName: [],
        activeIngredient: ""
    },

    {
        commonName: "",
        chemicalName: "",
        productName: [],
        activeIngredient: ""
    }
];

const weedControl = [
    {
        plantName: [],
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
        plantName: [],
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
        plantName: [],
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
        plantName: [],
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

    
];

const brushControl = [
    {
        plantName: [],
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
        plantName: [],
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
        plantName: [],
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


];

