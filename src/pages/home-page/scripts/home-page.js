/// Homepage JavaScript File
/// Here we import all the JavaScript files we need for our homepage.

import "../styles/home-page.scss";

// import { setupCounter } from "../../../global-scripts/scripts/counter/counter.js";

// setupCounter(document.querySelector("#counter"));

//assign DOM elements to variables
const heartBtn = document.querySelector(".user-controls__heart");
const songLikeBtn = document.querySelectorAll(
	".playlist__card__buttons__heart"
);
const card = document.querySelectorAll(".playlist__card");
const playIcon = document.querySelectorAll(".playlist__card-number__play-icon");
const bottomMenuBtn = document.querySelectorAll(".bottom-menu__button");

//main heart button listener and toggle class on click
heartBtn.addEventListener("click", () => {
	heartBtn.classList.toggle("active");
});
//listener for click on heart button in each song card
songLikeBtn.forEach((btn) => {
	btn.addEventListener("click", () => {
		btn.classList.toggle("active");
	});
});

//listener for click on card
card.forEach((card) => {
	card.addEventListener("click", () => {
		card.classList.add("active");
		card.firstElementChild.classList.add("active");
	});
	//listener on mouse hover
	card.addEventListener("mouseover", () => {
		card.firstElementChild.classList.add("active");
	});
	//listener for mouse out
	card.addEventListener("mouseout", () => {
		if (!card.classList.contains("active")) {
			card.firstElementChild.classList.remove("active");
		}
	});
});

//listeners for click on menu buttons
bottomMenuBtn.forEach((btn) => {
	btn.addEventListener("click", () => {
		btn.classList.add("active");
	});
});

//removing active class when clicked outside of current active element

document.addEventListener("click", (e) => {
	bottomMenuBtn.forEach((btn) => {
		!btn.contains(e.target) ? btn.classList.remove("active") : null;
	});
	card.forEach((card) => {
		if (!card.contains(e.target)) {
			card.classList.remove("active");
			card.firstElementChild.classList.remove("active");
		}
	});
});
