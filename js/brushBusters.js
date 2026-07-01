import { brushBustersRecomendations, optionGroups, groupMap } from "./brushBustersReference.js";

const plantSelect = document.getElementById("plant-name");
const applicationTypeSelect = document.getElementById("application-type");

const getRecommendationBtn = document.getElementById("get-recommendation-button");

const placeholder = document.getElementById("recommendations-placeholder");

const recommendationsContainer = document.getElementById("recommendations-results");
recommendationsContainer.classList.add(
    "transition-opacity", 
    "duration-200"
);

let hasResults = false;
let resultsAreStale = false;

const outputMessage = document.getElementById("output-message");


//Functions

// disable/enable Get Recommendations button based on user selections
function updateRecommendationButton() {
    getRecommendationBtn.disabled = 
        !plantSelect.value || !applicationTypeSelect.value;
}


// reset recommendations view
function resetRecommendationsView() {
    placeholder.innerHTML = 
        `<p class="text-center">Select a control type and target, then click <strong class="text-blue-600 dark:text-lime-600">Get Treatment Recommendations</strong>.</p>`;
}


// show recommendations as stale if user selects different options
function updateStaleUI() {
    if (resultsAreStale) {
        recommendationsContainer.classList.add("opacity-60");
    } else {
        recommendationsContainer.classList.remove("opacity-60");
    }
}

function onInputChange() {
    if (hasResults) {
        resultsAreStale = true;
        updateStaleUI();
    }

    updateRecommendationButton();
}


// find entry in Brush Busters reference that matches user selected options
function findMatchingEntry(plant, application) {
    // need to determine how to find correct entry. May need to refactor reference
}


// render recommendations to HTML
function renderRecommendations() {
    recommendationsContainer.innerHTML = "";
    placeholder.innerHTML = "";

    hasResults = true;
    resultsAreStale = false;

    updateStaleUI();

    
}


// Event listeners
plantSelect.addEventListener("change", () => {
    const selected = plantSelect.value;
    const groupKey = groupMap[selected];
    const options = optionGroups[groupKey] || [];

    applicationTypeSelect.innerHTML = "";

    options.forEach(type => {
        const opt = document.createElement("option");
        opt.value = type;
        opt.textContent = type;
        applicationTypeSelect.appendChild(opt);
    });
});


getRecommendationBtn.addEventListener("click", (e) => {
    e.preventDefault();

    outputMessage.textContent = "Recommendation engine under construction";
});

