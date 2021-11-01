import './sass/style.scss';
import getImg from './js/gallery';
import { onBurgerClick, onCloseClick } from './js/nav.js';
import getMap from './js/map.js';
import getSliderRange from './js/explore.js';
import getWelcomeSwiper from './js/welcome-swiper.js';
import { getYoutubeSwiper, getVideoInputs, getVideoVolumes } from './js/video-swiper.js';
import {videoButtons} from './js/video.js';

getImg();
onBurgerClick();
onCloseClick();
getMap();
getSliderRange();
getWelcomeSwiper();
getYoutubeSwiper();
getVideoVolumes();
getVideoInputs();
videoButtons();

console.log(`
    Слайдер в секции Welcome +24;
    Слайдер в секции Video +14;
    Кастомный видеоплеер 0;
    Слайдер сравнения изображений в секции Explore +10;
    Анимация при прокрутке изображений в секции Galery 0;
    Калькулятор продажи билетов в секции Tiskets 0;
    Калькулятор продажи билетов в форме продажи билетов 0;
    Валидация формы 0;
    Интерактивная карта в секции Contacts +12;
    Score: 60/150.
`);
