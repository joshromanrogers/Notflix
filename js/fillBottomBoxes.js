import { emptyBoxBottom } from "./index.js";
import meditatingImage from "../imgs/mainImgs/meditate.jpg";
import sleepingImage from "../imgs/mainImgs/sleep.jpg";
import readingImage from "../imgs/mainImgs/read.jpg";
import theatreImage from "../imgs/mainImgs/theatre.jpg";
import stargazingImage from "../imgs/mainImgs/stargazing.jpg";
import libraryImage from "../imgs/mainImgs/library.jpg";
import hikingImage from "../imgs/mainImgs/hiking.jpg";

let bottomImgs = [meditatingImage, sleepingImage, readingImage, theatreImage, stargazingImage, libraryImage, hikingImage];
let num;

export default function fillBottomBoxes() {
	emptyBoxBottom.forEach( (box) => {
		// get random number from the length of the array
		num = Math.floor(Math.random() * bottomImgs.length);
		// add image to background of box
		box.style.background = `url(${bottomImgs[num]})`;
		// when img is added to box, remove from array so doesn't get used again on another box (no duplicates)
		bottomImgs.splice(num, 1);
	});
}