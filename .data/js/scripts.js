const music = new Audio();
music.src="music.wav";
music.play();

var px = 0;
var py = 0;
document.addEventListener("keydown",function(event){
    var player = this.getElementById("");
    var key = event.keyCode();
    if (key == 37) {
        px-=5;
        player.style.marginLeft=px+"px";
    }else if (key == 38) {
        py-=5;
        player.style.marginTop=py+"px";
    }
    else if (key == 39) {
        px+=5;
        player.style.marginLeft=px+"px";
    }
    else if (key == 40) {
        py+=5;
        player.style.marginTop=py+"px";
    }
});
