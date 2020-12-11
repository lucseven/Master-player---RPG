function move() {
    var px = 0;
    var py = 0;
    document.addEventListener("keydown",function(event){
        var player = document.getElementById("playerimg");
        var key = event.keyCode;
        if (key == 37 && keys.key_left) {py-=5; player.style.marginLeft=py+"px";}
        else if (key == 38 && keys.key_up) {px-=5; player.style.marginTop=px+"px";}
        else if (key == 39 && keys.key_right) {py+=5; player.style.marginLeft=py+"px";}
        else if (key == 40 && keys.key_down) {px+=5; player.style.marginTop=px+"px";}
        if (key == 65 && keys.key_left) {py-=5; player.style.marginLeft=py+"px";}
        else if (key == 87 && keys.key_up){px-=5; player.style.marginTop=px+"px";}
        else if (key == 68 && keys.key_right) {py+=5; player.style.marginLeft=py+"px";}
        else if (key == 83 && keys.key_down) {px+=5; player.style.marginTop=px+"px";}
    });
}