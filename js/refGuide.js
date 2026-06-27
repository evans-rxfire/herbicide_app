import { controlRating, herbicideNames, weedControl, brushControl } from "./weedBrushReference";

const controlTypeSelect = document.getElementById("control-type");
const plantNameSelect = document.getElementById("plant-name");

const getRecommendationBtn = document.getElementById("get-recommendation-button");


//Functions

// Get list of plant names from control array
function getPlantList(controlArray) {
    const plantSet = new Set();

    controlArray.forEach(entry => {
        entry.plantName.forEach(name => {
            plantSet.add(name);
        });
    });
        
    return [...plantSet].sort((a, b) => a.localCompare(b));
}

console.log(getPlantList(weedControl));


// Event listeners
getRecommendationBtn.addEventListener("click", (e) => {
    e.preventDefault();


});

