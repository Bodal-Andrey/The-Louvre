const pictureInnerContainer = document.querySelector('.gallery-container__inner');

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

const shuffle = (arr) => {
    return arr.sort(() => Math.random() - 0.5);
}

const getImg = () => {
    let inner = '';

    let randomArr = shuffle(array);
    let imgArr = randomArr.map(num => `<img class="gallery-img" src="./assets/img/galery${num}.jpg" alt="galery${num}">`);

    for (let i = 0; i < imgArr.length; i++) {
        inner += imgArr[i];
    }
    return pictureInnerContainer.innerHTML = inner;
};

export default getImg;
