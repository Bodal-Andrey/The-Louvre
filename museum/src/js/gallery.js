const pictureInnerContainer = document.querySelector('.gallery-container__inner');

pictureInnerContainer.innerHTML = "";

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

const shuffle = (arr) => {
    return arr.sort(() => Math.random() - 0.5);
}

const getImg = () => {
    let randomArr = shuffle(array);

    let imgArr = randomArr.map(num => {
        const img = document.createElement('img');
        img.classList.add('gallery-img');
        img.src = `./assets/img/galery${num}.jpg`;
        img.alt = `galery${num}`;
        pictureInnerContainer.append(img);
    });

    return imgArr;
};

getImg();

export default getImg;
