import * as fontsStyling from "./fonts-styling.js";
import shuffle from "./shuffle.js";
import { currentArr } from "./levelChange.js";

let img = document.querySelector(".img");
let x = 0;
let name = document.querySelector(".name");
let activityInfoA = document.querySelector(".activity-info-a");
let categories = document.querySelector(".categories");


// executed when user hits the refresh button
// 1. checks if we have reached the end of the array, if so, shuffle the array and start again
// 2. activity img, name + google link changed
// 3. Choose a random font from the fonts array, repeat for all other characteristics
// 4. Take categoires, style w/ string replace + add to innerHTML

export default function updateCentralContainer() {
	// 1.
	if (x >= currentArr.length) {
		x = 0;
		shuffle(currentArr);
	}


	// 2.
	img.style.background = `url('${currentArr[x].media}')`;
	TweenMax.fromTo(".img", 2, {opacity:0}, {opacity:1});
	img.style.backgroundSize = "cover";
	name.innerHTML = currentArr[x].name;
	TweenMax.fromTo(".activity-info", 1, {opacity:0}, {opacity:1});
	let str = name.innerHTML;
	str = str.replace(/ /g, "+");
	activityInfoA.setAttribute("href", `https://www.google.com/search?q=${str}+near+me`);

	// 3.
	name.style.fontFamily = fontsStyling.fonts[Math.floor(Math.random() * fontsStyling.fonts.length)];
	// (responsive font size)
	if (window.innerWidth < 400) {
		name.style.fontSize = fontsStyling.vwsMobile[Math.floor(Math.random() * fontsStyling.vwsMobile.length)];
	} else {
		name.style.fontSize = fontsStyling.vws[Math.floor(Math.random() * fontsStyling.vws.length)];
	}
	name.style.fontWeight = fontsStyling.fontWeight[Math.floor(Math.random() * fontsStyling.fontWeight.length)];
	name.style.fontStyle = fontsStyling.fontStyle[Math.floor(Math.random() * fontsStyling.fontStyle.length)];
	name.style.fontVariant = fontsStyling.fontVariant[Math.floor(Math.random() * fontsStyling.fontVariant.length)];
	name.style.color = fontsStyling.colours[Math.floor(Math.random() * fontsStyling.colours.length)];
	name.style.letterSpacing = fontsStyling.letterSpacing[Math.floor(Math.random() * fontsStyling.letterSpacing.length)];
	name.style.lineHeight = fontsStyling.lineHeight[Math.floor(Math.random() * fontsStyling.lineHeight.length)];
	name.style.justifySelf = fontsStyling.justifyAlignSelf[Math.floor(Math.random() * fontsStyling.justifyAlignSelf.length)];
	name.style.alignSelf = fontsStyling.justifyAlignSelf[Math.floor(Math.random() * fontsStyling.justifyAlignSelf.length)];

	// 4.
	categories.innerHTML = currentArr[x].categories.toString().replace(/,/g, " ⸰ ");
	x++;

}