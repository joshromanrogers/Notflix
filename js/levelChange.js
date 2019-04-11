import { chillLevelArr, arr1, arr2, arr3, allArrs } from "./activities.js";
import { chillLevelWord } from "./index.js";

export let currentArrLevel = 1;
export let currentArr = arr1;

export function levelUp() {
	if (currentArrLevel < 2) {
		currentArrLevel++;
		currentArr = allArrs[currentArrLevel];
		chillLevelWord.forEach(clw => clw.innerHTML = `${chillLevelArr[currentArrLevel]}`);
	} else {
		console.log('no higher level');
	}
}

export function levelDown() {
	if (currentArrLevel > 0) {
		currentArrLevel--;
		currentArr = allArrs[currentArrLevel];
		chillLevelWord.forEach(clw => clw.innerHTML = `${chillLevelArr[currentArrLevel]}`);

	} else {
		console.log("no lower level");
	}
}