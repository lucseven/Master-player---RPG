var keys = {
    key_down: true,
    key_left: true,
    key_right: true,
    key_up: true
};
function move() {
    var px = 0;
    var py = 0;
    const keyPres = {w:38,a:37,s:40,d:39,arrowUp:87,arrowDown:83,arrowLeft:65,arrowRight:68};
    document.addEventListener("keydown",function(event){
        var player = document.getElementById("playerimg");
        var key = event.keyCode;
        if (key == keyPres.a && keys.key_left) {py-=5; player.style.marginLeft=py+"px";}
        else if (key == keyPres.w && keys.key_up) {px-=5; player.style.marginTop=px+"px";player.style.display=solid;playerStop.style.display=none}
        else if (key == keyPres.d && keys.key_right) {py+=5; player.style.marginLeft=py+"px";}
        else if (key == keyPres.s && keys.key_down) {px+=5; player.style.marginTop=px+"px";}
        if (key == keyPres.arrowLeft && keys.key_left) {py-=5; player.style.marginLeft=py+"px";}
        else if (key == keyPres.arrowUp && keys.key_up){px-=5; player.style.marginTop=px+"px";player.style.display=solid;playerStop.style.display=none}
        else if (key == keyPres.arrowRight && keys.key_right) {py+=5; player.style.marginLeft=py+"px";}
        else if (key == keyPres.arrowDown && keys.key_down) {px+=5; player.style.marginTop=px+"px";}
    });
}

function movCam() {
    const cam = {
        x: 0,
        y: 0,
        width: wordSize.width,
        heigt: wordSize.heigt,
        camTop: function(){return this.y + (this.heigt*0.25);},
        camDown: function(){return this.y + (this.heigt*0.75);},
        camLeft: function(){return this.x + (this.width*0.25);},
        camRight: function(){return this.x + (this.width*0.75);}
    };

}

for (var cont=0; cont>2;cont++) {
    cont--;
    movCam();
}
move();