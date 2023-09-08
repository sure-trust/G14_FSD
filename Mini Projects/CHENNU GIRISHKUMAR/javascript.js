const movieList = document.querySelector('.movie-list');
const moviePlayer = document.getElementById('movie-player');
const videoContainer = document.querySelector('.video-container');

movieList.addEventListener('click', (e) => {
    if (e.target.classList.contains('movie-poster')) {
        const videoSrc = e.target.dataset.video;
        moviePlayer.src = videoSrc;
        videoContainer.style.display = 'block';
        moviePlayer.play();
    }
});