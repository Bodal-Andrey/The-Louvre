const videoPlayer = document.querySelector('.video-player');
const playerControls = videoPlayer.querySelector('.video-player__controls');
const playButton = playerControls.querySelector('.video-play__toggle--play');
const pauseButton = playerControls.querySelector('.video-play__toggle--pause');
const video = videoPlayer.querySelector('.viewer');
const videoIconBig = videoPlayer.querySelector('.video-play__rectangle');
const button = playerControls.querySelector('.video-play__toggle');

function videoPaused() {
    if (!video.paused) {
        playButton.classList.remove('block');
        playButton.classList.add('none');
        pauseButton.classList.remove('none');
        pauseButton.classList.add('block');
    } else {
        pauseButton.classList.remove('block');
        pauseButton.classList.add('none');
        playButton.classList.remove('none');
        playButton.classList.add('block');
    }
};

function updateButton() {
    if (!video.paused) {
        videoIconBig.classList.remove('block');
        videoIconBig.classList.add('none');
    } else {
        videoIconBig.classList.remove('none');
        videoIconBig.classList.add('block');
    }
};

function togglePlay() {
    const method = video.paused ? 'play' : 'pause';
    video[method]();
    videoPaused();
    updateButton();
};

function videoButtons() {
    button.addEventListener('click', togglePlay);
    // video.addEventListener('play', updateButton);
    // video.addEventListener('pause', updateButton);
};

export {
    videoButtons
};
