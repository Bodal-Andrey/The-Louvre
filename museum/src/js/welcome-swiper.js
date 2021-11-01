const currentCounter = document.querySelector(".controls-num__current");

const welcomeSwiper = new Swiper(".slider-wrapper__swiper", {
    loop: true,
    slidesPerView: 1,
    pagination: {
        el: ".slider-controls__pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".slider-controls__next",
        prevEl: ".slider-controls__prev",
    },
});

function getWelcomeSwiper() {
    welcomeSwiper.on("slideChange", function () {
        let swiperIndex = welcomeSwiper.realIndex;
        currentCounter.innerHTML = `0${++swiperIndex}`;
    });
};

export default getWelcomeSwiper;
