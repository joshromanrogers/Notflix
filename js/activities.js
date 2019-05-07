import Activity from "./Activity.js";
import changingScreen from "./changingScreen.js";

// high chill
import meditatingImage from "../imgs/mainImgs/meditate.jpg";
import sleepingImage from "../imgs/mainImgs/sleep.jpg";
import readingImage from "../imgs/mainImgs/read.jpg";
import theatreImage from "../imgs/mainImgs/theatre.jpg";
import stargazingImage from "../imgs/mainImgs/stargazing.jpg";
import libraryImage from "../imgs/mainImgs/library.jpg";
import paintingImage from "../imgs/mainImgs/painting.jpg";
import drawingImage from "../imgs/mainImgs/drawing.jpg";

// medium chill
import outdoorConcertImage from "../imgs/mainImgs/outdoor-concert.jpg";
import planATripImage from "../imgs/mainImgs/plan-a-trip.jpg";
import golfImage from "../imgs/mainImgs/golf.jpg";
import botanicalGardenImage from "../imgs/mainImgs/botanical-garden.jpg";
import exhibitionOpeningImage from "../imgs/mainImgs/exhibition-opening.jpg";
import artFairImage from "../imgs/mainImgs/art-fair.jpg";
import artClassImage from "../imgs/mainImgs/art-class.jpg";
import museumLateImage from "../imgs/mainImgs/museum-late.jpg";
import museumImage from "../imgs/mainImgs/museum.jpg";
import campingImage from "../imgs/mainImgs/camping.jpg";

// low chill
import boxingImage from "../imgs/mainImgs/boxing.jpg";
import surfingImage from "../imgs/mainImgs/beach.jpg";
import tableTennisImage from "../imgs/mainImgs/tabletennis.jpg";
import gymImage from "../imgs/mainImgs/gym.jpg";
import hikingImage from "../imgs/mainImgs/hiking.jpg";
import basketballImage from "../imgs/mainImgs/basketball.jpg";
import runningImage from "../imgs/mainImgs/running.jpg";
import rockClimbingImage from "../imgs/mainImgs/rock-climbing.jpg";
import roadTripImage from "../imgs/mainImgs/road-trip.jpg";
import canoeingImage from "../imgs/mainImgs/canoeing.jpg";
import indoorClimbingImage from "../imgs/mainImgs/indoor-climbing.jpg";
import boulderingImage from "../imgs/mainImgs/bouldering.jpg";
import tennisImage from "../imgs/mainImgs/tennis.jpg";

// kids high chill
import kidsDrawingImage from "../imgs/kidsImgs/drawing.jpg";
import foodImage from "../imgs/kidsImgs/food.jpg";
import guitarImage from "../imgs/kidsImgs/guitar.jpg";
import hairstyleImage from "../imgs/kidsImgs/hairstyle.jpg";
import kidsPaintingImage from "../imgs/kidsImgs/painting.jpg";
import photographyImage from "../imgs/kidsImgs/photography.jpg";
import storyImage from "../imgs/kidsImgs/story.jpg";
// import Image from "../imgs/kidsImgs/.jpg";

// kids medium chill
import bakingImage from "../imgs/kidsImgs/baking.jpg";
import exploreNatureImage from "../imgs/kidsImgs/explore-nature.jpg";
import fancyDressImage from "../imgs/kidsImgs/fancy-dress.jpg";
import gardeningImage from "../imgs/kidsImgs/gardening.jpg";
import petImage from "../imgs/kidsImgs/pet.jpg";
import scienceImage from "../imgs/kidsImgs/science-experiment.jpg";
import superPowerImage from "../imgs/kidsImgs/super-power.jpg";
// import Image from "../imgs/kidsImgs/.jpg";
// import Image from "../imgs/kidsImgs/.jpg";
// import Image from "../imgs/kidsImgs/.jpg";

// kids low chill
import adventureParkImage from "../imgs/kidsImgs/adventure-park.jpg";
import beachAdventureImage from "../imgs/kidsImgs/beach-adventure.jpg";
import beachSportsImage from "../imgs/kidsImgs/beach-sports.jpg";
import bikeAdventureImage from "../imgs/kidsImgs/bike-adventure.jpg";
import kidsBoulderingImage from "../imgs/kidsImgs/bouldering.jpg";
import danceClassImage from "../imgs/kidsImgs/dance-class.jpg";
import footballImage from "../imgs/kidsImgs/football.jpg";
import iceHockeyImage from "../imgs/kidsImgs/ice-hockey.jpg";
import iceSkatingImage from "../imgs/kidsImgs/ice-skating.jpg";
import outdoorPoolImage from "../imgs/kidsImgs/outdoor-pool.jpg";
import skateboardingImage from "../imgs/kidsImgs/skateboarding.jpg";
import swimmingImage from "../imgs/kidsImgs/swimming.jpg";
// import Image from "../imgs/kidsImgs/.jpg";

// kids bg
import kidsBgImage from "../imgs/kidsImgs/kids-bg.jpg"

import updateCentralContainer from "./updateCentralContainer.js";
import { refresh } from "./levelChange.js";
// background image
import bgImage from "../imgs/bg-image.jpg";

// high chill
export let lvl3activity1 = new Activity("meditating", meditatingImage, "google.co.uk/related", ["self care"]);
export let lvl3activity2 = new Activity("sleeping", sleepingImage, "google.co.uk/related", ["pillow sports", "self care"]);
export let lvl3activity3 = new Activity("reading", readingImage, "google.co.uk/related", ["educational"]);
export let lvl3activity4 = new Activity("theatre", theatreImage, "google.co.uk/related", ["indoors", "educational"]);
export let lvl3activity5 = new Activity("stargazing", stargazingImage, "google.co.uk/related", ["outdoors", "educational"]);
export let lvl3activity6 = new Activity("library", libraryImage, "google.co.uk/related", ["educational", "indoors"]);
export let lvl3activity7 = new Activity("painting", paintingImage, "google.co.uk/related", ["educational", "self care"]);
export let lvl3activity8 = new Activity("drawing", drawingImage, "google.co.uk/related", ["educational", "self care"]);

// medium chill
export let lvl2activity1 = new Activity("outdoor concert", outdoorConcertImage, "google.co.uk/related", ["outdoors"]);
export let lvl2activity2 = new Activity("plan a trip", planATripImage, "google.co.uk/related", []);
export let lvl2activity3 = new Activity("golf", golfImage, "google.co.uk/related", ["sports", "outdoors"]);
export let lvl2activity4 = new Activity("botanical garden", botanicalGardenImage, "google.co.uk/related", ["outdoors", "self care", "educational"]);
export let lvl2activity5 = new Activity("exhibition opening", exhibitionOpeningImage, "google.co.uk/related", ["creative", "social"]);
export let lvl2activity6 = new Activity("art fair", artFairImage, "google.co.uk/related", ["creative"]);
export let lvl2activity7 = new Activity("art class", artClassImage, "google.co.uk/related", ["creative", "educational"]);
export let lvl2activity8 = new Activity("museum late", museumLateImage, "google.co.uk/related", ["educational"]);
export let lvl2activity9 = new Activity("museum", museumImage, "google.co.uk/related", ["educational"]);
export let lvl2activity10 = new Activity("camping", campingImage, "google.co.uk/related", ["outdoors"]);

// low chill
export let lvl1activity1 = new Activity("boxing", boxingImage, "google.co.uk/related", ["sports"]);
export let lvl1activity2 = new Activity("surfing", surfingImage, "google.co.uk/related", ["sports", "outdoors"]);
export let lvl1activity3 = new Activity("table tennis", tableTennisImage, "google.co.uk/related", ["sports", "social"]);
export let lvl1activity4 = new Activity("gym", gymImage, "google.co.uk/related", ["sports", "self care"]);
export let lvl1activity5 = new Activity("hiking", hikingImage, "google.co.uk/related", ["sports", "sports"]);
export let lvl1activity6 = new Activity("basketball", basketballImage, "google.co.uk/related",["sports"]);
export let lvl1activity7 = new Activity("running", runningImage, "google.co.uk/related", ["sports"]);
export let lvl1activity8 = new Activity("rock climbing", rockClimbingImage, "google.co.uk/related",["sports", "outdoors"]);
export let lvl1activity9 = new Activity("road trip", roadTripImage, "google.co.uk/related", ["outdoors", "educational"]);
export let lvl1activity10 = new Activity("canoeing", canoeingImage, "google.co.uk/related", ["sports", "outdoors"]);
export let lvl1activity11 = new Activity("indoor climbing", indoorClimbingImage, "google.co.uk/related", ["sports", "indoors"]);
export let lvl1activity12 = new Activity("bouldering", boulderingImage, "google.co.uk/related", ["sports", "indoors"]);
export let lvl1activity13 = new Activity("tennis", tennisImage, "google.co.uk/related", ["sports"]);

// kids high chill
export let kidsLvl3activity1 = new Activity("drawing", kidsDrawingImage, "google.co.uk/related", ["creative", "educational"]);
export let kidsLvl3activity2 = new Activity("try new food", foodImage, "google.co.uk/related", ["self care"]);
export let kidsLvl3activity3 = new Activity("guitar", guitarImage, "google.co.uk/related", ["music", "educational"]);
export let kidsLvl3activity4 = new Activity("new hairstyle", hairstyleImage, "google.co.uk/related", ["self care"]);
export let kidsLvl3activity5 = new Activity("painting", kidsPaintingImage, "google.co.uk/related", ["creative"]);
export let kidsLvl3activity6 = new Activity("photography", photographyImage, "google.co.uk/related", ["creative", "educational"]);
export let kidsLvl3activity7 = new Activity("read a story", storyImage, "google.co.uk/related", ["creative", "educational"]);
// export let kidsLvl3activity8 = new Activity("", Image, "google.co.uk/related", 1, []);

// kids medium chill
export let kidsLvl2activity1 = new Activity("baking", bakingImage, "google.co.uk/related", ["educational", "indoors"]);
export let kidsLvl2activity2 = new Activity("explore nature", exploreNatureImage, "google.co.uk/related", ["outdoors", "self care"]);
export let kidsLvl2activity3 = new Activity("fancy dress", fancyDressImage, "google.co.uk/related", ["creative"]);
export let kidsLvl2activity4 = new Activity("gardening", gardeningImage, "google.co.uk/related", ["outdoors", "self care"]);
export let kidsLvl2activity5 = new Activity("play with a pet", petImage, "google.co.uk/related", []);
export let kidsLvl2activity6 = new Activity("science experiment", scienceImage, "google.co.uk/related", ["educational"]);
export let kidsLvl2activity7 = new Activity("find your superpower", superPowerImage, "google.co.uk/related", ["creative"]);
// export let kidsLvl2activity8 = new Activity("", Image, "google.co.uk/related", 1, []);
// export let kidsLvl2activity9 = new Activity("", Image, "google.co.uk/related", 1, []);
// export let kidsLvl2activity10 = new Activity("", Image, "google.co.uk/related", 1, []);

// kids low chill
export let kidsLvl1activity1 = new Activity("adventure park", adventureParkImage, "google.co.uk/related", ["outdoors"]);
export let kidsLvl1activity2 = new Activity("beach adventure", beachAdventureImage, "google.co.uk/related", ["outdoors"]);
export let kidsLvl1activity3 = new Activity("beach sports", beachSportsImage, "google.co.uk/related", ["outdoors", "sports"]);
export let kidsLvl1activity4 = new Activity("bike adventure", bikeAdventureImage, "google.co.uk/related", ["outdoors", "sports"]);
export let kidsLvl1activity5 = new Activity("bouldering", kidsBoulderingImage, "google.co.uk/related", ["sports"]);
export let kidsLvl1activity6 = new Activity("dance class", danceClassImage, "google.co.uk/related", ["sports", "social"]);
export let kidsLvl1activity7 = new Activity("football", footballImage, "google.co.uk/related", ["sports", "outdoors"]);
export let kidsLvl1activity8 = new Activity("ice hockey", iceHockeyImage, "google.co.uk/related", ["sports"]);
export let kidsLvl1activity9 = new Activity("ice skating", iceSkatingImage, "google.co.uk/related", ["sports"]);
export let kidsLvl1activity10 = new Activity("outdoor pool", outdoorPoolImage, "google.co.uk/related", ["outdoors", "sports"]);
export let kidsLvl1activity11 = new Activity("skateboarding", skateboardingImage, "google.co.uk/related", ["sports"]);
export let kidsLvl1activity12 = new Activity("swimming", swimmingImage, "google.co.uk/related", ["sports"]);
// export let kidsLvl1activity13 = new Activity("", Image, "google.co.uk/related", 1, []);



export let arr1 = [lvl1activity1, lvl1activity2, lvl1activity3, lvl1activity4, lvl1activity5, lvl1activity6, 
    lvl1activity7, lvl1activity8, lvl1activity9, lvl1activity10, lvl1activity11, lvl1activity12, lvl1activity13];
export let arr2 = [lvl2activity1, lvl2activity2, lvl2activity3, lvl2activity4, lvl2activity5, lvl2activity6, 
    lvl2activity7, lvl2activity8, lvl2activity9, lvl2activity10];
export let arr3 = [lvl3activity1, lvl3activity2, lvl3activity3, lvl3activity4, lvl3activity5, lvl3activity6, lvl3activity7, lvl3activity8];
export let chillLevelArr = ["LOW", "MEDIUM", "HIGH"];
export let allArrs = [arr1, arr2, arr3];

export let kidsArr1 = [kidsLvl1activity1, kidsLvl1activity2, kidsLvl1activity3, kidsLvl1activity4, kidsLvl1activity5,
     kidsLvl1activity6, kidsLvl1activity7, kidsLvl1activity8, kidsLvl1activity9, kidsLvl1activity10, kidsLvl1activity11, kidsLvl1activity12];
export let kidsArr2 = [kidsLvl2activity1, kidsLvl2activity2, kidsLvl2activity3, kidsLvl2activity4, kidsLvl2activity5, kidsLvl2activity6,
    kidsLvl2activity7];
export let kidsArr3 = [kidsLvl3activity1, kidsLvl3activity2, kidsLvl3activity3, kidsLvl3activity4, kidsLvl3activity5, kidsLvl3activity6,
     kidsLvl3activity7];
export let allKidsArrs = [kidsArr1, kidsArr2, kidsArr3];

let backgroundImg = document.querySelector(".background-image");
let kidsButton = document.querySelector(".kids");

kidsButton.addEventListener("click", changingScreen);

kidsButton.addEventListener("click", function() { 
    setTimeout(kidsToggle, 1000);
});


// when the kids/main button is clicked:
// change the background image + button word,
// swap the activities to the kids activities [array]
// reset the current chill level
// run the application
function kidsToggle() {
    if(allArrs !== allKidsArrs) {
        allArrs = allKidsArrs;
        backgroundImg.style.backgroundImage = `url(${kidsBgImage})`;
        kidsButton.innerHTML = "main";
    }
    else {
        allArrs = [arr1, arr2, arr3];
        backgroundImg.style.backgroundImage = `url(${bgImage})`;
        kidsButton.innerHTML = "kids";
    }
    refresh();
    updateCentralContainer();
}


