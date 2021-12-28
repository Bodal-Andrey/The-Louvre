const galleryImages = document.querySelectorAll('.gallery-img');

function offset(a) {
    const rect = a.getBoundingClientRect(),
        scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop }
}

function showPicture() {
    for (let i = 0; i < galleryImages.length; i++) {
        const galleryImage = galleryImages[i];
        const picOffset = offset(galleryImage).top;

        if (scrollY > picOffset - window.innerHeight * 1.4) {
            galleryImage.classList.add('active');
        }
        if (scrollY < picOffset - window.innerHeight * 1.4) {
            galleryImage.classList.remove('active');
        }
    }
}

function pictureUp() {
    window.addEventListener('scroll', showPicture);
};

export default pictureUp;
