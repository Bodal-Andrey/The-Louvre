const exploreImg = document.querySelector(".explore-img");
const sliderRange = exploreImg.querySelector(".explore-slider__container input");
const sliderToggle = exploreImg.querySelector(".slider-toggle");
const sliderOverlay = exploreImg.querySelector(".img-before");

function getSliderRange() {
	sliderRange.addEventListener("input", () => {
		let sliderValue = sliderRange.value;
	
		sliderToggle.style.left = `${sliderValue}%`;
		sliderOverlay.style.width = `${sliderValue}%`;
	});
};

export default getSliderRange;
