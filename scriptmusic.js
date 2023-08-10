//Button Play Pause

const play = document.querySelector('.play');
const pause = document.querySelector('.pause');
const playBtn = document.querySelector('.circle__btn');
const btn=document.getElementById('playButton');
const mainImage=document.getElementById('mainImage');
const title=document.getElementById('title-music');
playBtn.addEventListener('click', function(e) {
  e.preventDefault();
  pause.classList.toggle('visibility');
  play.classList.toggle('visibility');
  playBtn.classList.toggle('shadow');
});
//Host Music
// Create the new player
var player;
function onYouTubeIframeAPIReady(){
    player = new YT.Player('playerContainer', {
        videoId: '4xDzrJKXOOY',
        playerVars: {
            autoplay: 0,
            controls: 1,
            quality:'small',
        },
    });
}
function changeRadio(videoId){
    player.loadVideoById({videoId:videoId});
    playButton.click();
    clickButton();
}
// 1 represents the "PLAYING" state
document.getElementById('playButton').addEventListener('click', function () {
  if (player && player.getPlayerState() !== 1) { 
      player.playVideo();
  }
  else{
      player.pauseVideo();
  }
});
function changeImageAndTitle(imageUrl,titre){

  const imagePath = imageUrl.slice(4, -1).replace(/['"]/g, "");
  mainImage.style.backgroundImage = "url(" + imagePath + ")";
  mainImage.style.display='block';
  btn.style.display='block';
  title.innerHTML=titre;
}
//Loading Proccess
const loadingOverlay = document.getElementById('loading-overlay');
function showLoadingOverlay() {
  loadingOverlay.style.display = 'flex';
}

function hideLoadingOverlay() {
  loadingOverlay.style.display = 'none';
}
function showLoadingAndHideAfterDelay(delay) {
  showLoadingOverlay();
  setTimeout(() => {
     hideLoadingOverlay();
  }, delay);
}
