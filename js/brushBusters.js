const brushBustersReccomends = {
    "mesquite": {
        "Leaf": {

        },
        "Stem": {

        }
    },
    "huisache": {
        "Leaf": {

        },
        "Stem": {

        }
    },
    "prickly-pear": {
        "Pad": {

        }
    },
    "ashe-juniper": {
        "Leaf": {

        },
        "Spot": {

        }
    },
    "blueberry-Juniper": {
        "Leaf": {

        },
        "Spot": {

        }
    },
    "chinese-tallow": {
        "Leaf": {

        },
        "Stem": {

        }
    },
    "greenbriar": {
        "Stem": {

        }
    },
    "texas-persimmon": {
        "Leaf": {

        },
        "Stem": {

        }
    },
    "agarita": {
        "Leaf": {

        }
    },
    "bumelia": {
        "Leaf": {

        }
    },
    "catclaw-acacia": {
        "Leaf": {

        }
    },
    "catclaw-mimosa": {
        "Leaf": {
            
        }
    },
    "coyotillo": {
        "Leaf": {

        }
    },
    "flameleaf-sumac": {
        "Leaf": {

        }
    },
    "lotebush": {
        "Leaf": {

        }
    },
    "tasajillo": {
        "Leaf": {

        }
    },
    "texas-mountain-laurel": {
        "Leaf": {

        }
    },
    "whitebrush": {
        "Leaf": {

        }
    }
};

const plantSelect = document.getElementById("plant-name");
const applicationType = document.getElementById("application-type");
const getRecommendationBtn = document.getElementById("get-recommendation-button");

const optionGroups = {
    groupA: ["Leaf", "Stem"],
    groupB: ["Leaf", "Spot"],
    groupC: ["Leaf"],
    groupD: ["Stem"],
    groupE: ["Pad"]
};

const groupMap = {
    "mesquite": "groupA",
    "huisache": "groupA",
    "prickly-pear": "groupE",
    "ashe-juniper": "groupB",
    "blueberry-juniper": "groupB",
    "chinese-tallow": "groupA",
    "greenbriar": "groupD",
    "texas-persimmon": "groupA",
    "agarita": "groupC",
    "bumelia": "groupC",
    "catclaw-acacia": "groupC",
    "catclaw-mimosa": "groupC",
    "coyotillo": "groupC",
    "flameleaf-sumac": "groupC",
    "lotebush": "groupC",
    "tasajillo": "groupC",
    "texas-mountain-laurel": "groupC",
    "whitebrush": "groupC"
};

plantSelect.addEventListener("change", () => {
    const selected = plantSelect.value;
    const groupKey = groupMap[selected];
    const options = optionGroups[groupKey] || [];

    applicationType.innerHTML = "";

    options.forEach(type => {
        const opt = document.createElement("option");
        opt.value = type;
        opt.textContent = type;
        applicationType.appendChild(opt);
    });
});

