import { controlRating, herbicideNames, weedControl, brushControl } from "./weedBrushReference.js";

const controlTypeSelect = document.getElementById("control-type");
const plantNameSelect = document.getElementById("plant-name");

const getRecommendationBtn = document.getElementById("get-recommendation-button");

const recommendationsContainer = document.getElementById("output-container");

let plantSelectList = [];


//Functions

// Helper to get control array based on user selection
function getControlArray() {
    if (controlTypeSelect.value === "weed") {
        return weedControl;
    }

    if (controlTypeSelect.value === "brush") {
        return brushControl;
    }

    return null;
}


// Helper to disable/enable getRecommendationBtn based on user selections
function updateRecommendationButton() {
    getRecommendationBtn.disabled = 
        !controlTypeSelect.value || !plantNameSelect.value;
}


// Helper to clear recommendations from the HTML
function clearRecommendations() {
    recommendationsContainer.innerHTML = 
        `<p class="text-center">Select a control type and target, then click <strong class="text-blue-600 dark:text-lime-600">Get Recommendations</strong>.</p>`;
}


// Get list of plant names from control array
function getPlantList(controlArray) {
    const plantSet = new Set();

    controlArray.forEach(entry => {
        entry.plantName.forEach(name => {
            plantSet.add(name);
        });
    });
        
    return [...plantSet].sort((a, b) => a.localeCompare(b));
}

// console.log(getPlantList(weedControl));
// console.log(getPlantList(brushControl));


// Populate <select> element with plant list names
function populatePlantSelect(controlArray) {
    plantSelectList.innerHTML = "";

    const defaultOption = document.createElement("option");
    defaultOption.value = "";
    defaultOption.textContent = "Select a plant / target";
    defaultOption.selected = true;
    defaultOption.disabled = true;

    plantNameSelect.appendChild(defaultOption);

    const plantList = getPlantList(controlArray);

    plantList.forEach(name => {
        const option = document.createElement("option");
        option.value = name;
        option.textContent = name;
        plantNameSelect.appendChild(option);
    });

    plantNameSelect.disabled = false;
}


// Find all entries that match selected plnat/target
function findMatchingEntries(controlArray, selectedPlant) {
    return controlArray.filter(entry => 
        entry.plantName.includes(selectedPlant)
    );
}

// console.log(findMatchingEntries(brushControl, "tasajillo"));
// console.log(findMatchingEntries(weedControl, "ragweed"));


// Event listeners
controlTypeSelect.addEventListener("change", () => {
    if (!controlTypeSelect.value) return;

    clearRecommendations();
    
    plantNameSelect.innerHTML = "";
    plantNameSelect.disabled = true;

    const controlArray = getControlArray();

    if (!controlArray) {
        return;
    }

    populatePlantSelect(controlArray);
    updateRecommendationButton();
});


plantNameSelect.addEventListener("change", () => {
    clearRecommendations();
    updateRecommendationButton();
});


getRecommendationBtn.addEventListener("click", (e) => {
    e.preventDefault();

    if(!controlTypeSelect.value || !plantNameSelect.value) {
        return;
    }

    const controlArray = getControlArray();

    const recommedationGroups = findMatchingEntries(
        controlArray, 
        plantNameSelect.value
    );
});

