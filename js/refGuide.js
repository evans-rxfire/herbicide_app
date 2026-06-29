import { controlRating, herbicideNames, weedControl, brushControl } from "./weedBrushReference.js";

const controlTypeSelect = document.getElementById("control-type");
const plantNameSelect = document.getElementById("plant-name");

const getRecommendationBtn = document.getElementById("get-recommendation-button");

const placeholder = document.getElementById("recommendations-placeholder");
const recommendationsContainer = document.getElementById("recommendations-results");
recommendationsContainer.classList.add(
    "transition-opacity", 
    "duration-200"
);


let hasResults = false;
let resultsAreStale = false;


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
function resetRecommendationsView() {
    placeholder.innerHTML = 
        `<p class="text-center">Select a control type and target, then click <strong class="text-blue-600 dark:text-lime-600">Get Recommendations</strong>.</p>`;
}


// Helpers to show recommendations as stale if user selects different options
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


// Render the herbicide recommendations to the HTML
function renderRecommendations(recommendationGroups) {
    recommendationsContainer.innerHTML = "";
    placeholder.innerHTML = "";

    hasResults = true;
    resultsAreStale = false;

    updateStaleUI();

    recommendationGroups.forEach(group => {
        // console.log(group.plantName);
        const section = renderRecommendationSection(group);
        recommendationsContainer.appendChild(section);
    });
}


function renderRecommendationSection(group) {
    const section = document.createElement("section");
    section.className = "border border-stone-500 rounded-lg p-4 mb-6 bg-stone-200 dark:bg-stone-800 shadow-sm";

    const heading = document.createElement("h3");
    heading.textContent = "Applies to:";
    heading.className = "text-lg font-semibold border-b border-stone-400 dark:border-stone600 pb-2 mb-3";

    const targetList = document.createElement("ul");
    targetList.className = "list-disc list-inside text-sm mb-6";

    group.plantName.forEach(name => {
        const listItem = document.createElement("li");
        listItem.textContent = name;
        targetList.appendChild(listItem);
    });

    const cardContainer = document.createElement("div");
    cardContainer.className = "space-y-4 pt-4 border-stone-300 dark:border-stone-700";

    group.herbicides.forEach(herbicide => {
        // console.log(herbicideName);
        const card = renderHerbicideCard(herbicide);
        cardContainer.appendChild(card);
    });

    section.appendChild(heading);
    section.appendChild(targetList);
    section.appendChild(cardContainer);

    return section;
}


function renderHerbicideCard(herbicide) {
    const safe = (value) => value ?? "—";

    const { 
        herbicideName, 
        herbicideQuantity, 
        sprayVolume,
        timing,
        remarks
    } = herbicide;

    const broadcast = herbicideQuantity.broadcast;
    const IPT = herbicideQuantity.IPT;

    const broadcastRating = safe(broadcast.controlRating);
    const broadcastRate = safe(broadcast.rate);
    const iptRating = safe(IPT.controlRating);
    const iptRate = safe(IPT.rate);
    const volume = safe(sprayVolume);
    const applyTiming = safe(timing);

    const card = document.createElement("div");
    card.className ="border border-stone-400 rounded-md p-3 bg-stone-100 dark:bg-stone-700 shadow-sm";

    const title = document.createElement("h4");
    title.textContent = herbicideName;
    title.className = "font-semibold text-stone-900 dark:text-stone-100 mb-3";

    const body = document.createElement("div");
    body.className = "grid grid-cols-2 gap-3 text-sm";

    const broadcastEl = document.createElement("div");
    broadcastEl.innerHTML = `
        <p class="font-medium">Broadcast</p>
        <p> Rating: ${broadcastRating}</p>
        <p>Rate: ${broadcastRate}</p>
    `;

    const iptEl = document.createElement("div");
    iptEl.innerHTML = `
        <p class="font-medium">IPT</p>
        <p>Rating: ${iptRating}</p>
        <p>Rate: ${iptRate}</p>
    `;

    const meta = document.createElement("div");
    meta.className = "mt-3 text-sm space-y-1";

    const volumeEl = document.createElement("p");
    volumeEl.textContent = `Spray Volume: ${volume}`;

    const timingEl = document.createElement("p");
    timingEl.textContent = `Timing: ${applyTiming}`;

    meta.appendChild(volumeEl);
    meta.appendChild(timingEl);

    let remarksEl = null;

    if (remarks) {
        remarksEl = document.createElement("p");
        remarksEl.className = 
            "mt-3 text-xs italic text-stine-700 dark:text-stone-300";
        remarksEl.textContent = remarks;
    }

    card.appendChild(title);
    card.appendChild(body);

    body.appendChild(broadcastEl);
    body.appendChild(iptEl);

    card.appendChild(meta);

    if (remarksEl) {
        card.appendChild(remarksEl);
    }

    return card;
}


function renderNotes() {
    
}


// Event listeners
controlTypeSelect.addEventListener("change", () => {
    if (!controlTypeSelect.value) return;

    resetRecommendationsView();
    
    plantNameSelect.innerHTML = "";
    plantNameSelect.disabled = true;

    const controlArray = getControlArray();

    if (!controlArray) {
        return;
    }

    populatePlantSelect(controlArray);
    onInputChange();
});


plantNameSelect.addEventListener("change", () => {
    resetRecommendationsView();
    onInputChange();
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

    // console.log(recommedationGroups);

    renderRecommendations(recommedationGroups);

    resultsAreStale = false;
    updateStaleUI();
});

