var juice = document.querySelector('.orange-juice'); 


var video = document.getElementById("video");
function play() {
    if (video.paused) {
        document.getElementById("icon").src = "pause.png";
        video.play();
    }
    else {
        document.getElementById("icon").src = "play.png";
        video.pause();
    }
    setInterval(function () {
        document.getElementById("time").innerHTML = video.currentTime.toFixed(2)+" / "+video.duration.toFixed(2);
    }, 100)
}


video.addEventListener('timeupdate', function(){
    var juicePos=video.currentTime/video.duration;
    juice.style.width = juicePos * 100 + "%";
   
    if(video.ended){
        document.getElementById("icon").src = "play.png";
        document.getElementById("time").innerHTML = video.currentTime.toFixed(2)
    }
})