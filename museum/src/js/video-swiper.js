const videoInputs = document.querySelectorAll('.video-player__controls input');
const videoVolumes = document.querySelectorAll(".video-player__controls .video-volume");

const videoSwiper = new Swiper(".video-slider__swiper", {
	loop: true,
	allowTouchMove: false,
	autoHeight: true,
	spaceBetween: 10,
	slidesPerView: 1,
});

const youtubeSwiper = new Swiper(".youtube-slider__swiper", {
	loop: true,
	spaceBetween: 22,
	slidesPerView: 2,
	navigation: {
		nextEl: ".video-controls__next",
		prevEl: ".video-controls__prev",
	},
	pagination: {
		el: ".video-controls__pagination",
		clickable: true,
	},
	breakpoints: {
		770: {
			slidesPerView: 3,
			spaceBetween: 45,
		},
	},
});

const changeProgress = (el, val) => {
	el.style.background = `linear-gradient(to right, #710707 0%, #710707 ${val}%, #c4c4c4 ${val}%, #c4c4c4 100%)`;
};

function getYoutubeSwiper() {
    youtubeSwiper.on("slideChange", function () {
        let index = this.realIndex;
    	videoSwiper.slideTo(++index);
    });
}

function getVideoInputs() {
    videoInputs.forEach((input) => {
        input.addEventListener("input", () => {
            changeProgress(input, input.value);
        });
    });
};

function getVideoVolumes() {
    videoVolumes.forEach((volume) => {
        volume.value = 50;
        changeProgress(volume, 50);
    });
};

export {
    getYoutubeSwiper,
    getVideoInputs,
    getVideoVolumes
};
