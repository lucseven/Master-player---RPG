var keys = {
    key_down: true,
    key_left: true,
    key_right: true,
    key_up: true
};

const wordSize = {
    width: 400,
    heigt: 400
};

var player = {
    px: 0,
    py: 0
};

var word = {
    word: 1,
    layer: 1
};

const wordBackground = documen.getElementById("background");

function colision() {
    if(player.px >= 400){keys.key_right=false;}
    else {keys.key_right=true;}

    if(player.px <= 0){keys.left=false;}
    else {keys.key_left=true;}

    if(player.py >= 400){keys.key_up=false;}
    else {keys.key_up=true;}

    if(player.px <= 0){keys.key_down=false;}
    else {keys.key_down=true;}
}

function dors1_1() {
    
}

function words() {
    function word1_1() {
        dors1_1();
    }

    if(word == 1 && layer == 1){word1_1()}
    if(word == 1 && layer == 2){word1_2()}
    if(word == 2 && layer == 2){word2_2()}
    if(word == 3 && layer == 2){word3_2()}
    if(word == 4 && layer == 2){word4_2()}
    if(word == 5 && layer == 2){word5_2()}
    if(word == 6 && layer == 2){word6_2()}
    if(word == 7 && layer == 2){word7_2()}
    if(word == 8 && layer == 2){word8_2()}
}

function movCam() {
    var cam = {
        x: 0,
        y: 0,
        width: wordSize.width,
        heigt: wordSize.heigt,
        camTop: function(){return this.y + (this.heigt*0.25);},
        camDown: function(){return this.y + (this.heigt*0.75);},
        camLeft: function(){return this.x + (this.width*0.25);},
        camRight: function(){return this.x + (this.width*0.75);}
    };
   
    if(player.px == cam.camLeft){cam.x+=5;wordBackgroun.style.backgroundPositionLeft=cam.x+"px";player.px-=5;
    }else if(player.px == cam.camRight){cam.x-=5;wordBackgroun.style.backgroundPositionTop=-cam.x+"px";player.px+=5;
    }else if(player.py == cam.camTop){cam.y+=5;wordBackgroun.style.backgroundPositionLeft=cam.y+"px";player.py-=5;
    }else if(player.py == cam.camDown){cam.y-=5;wordBackgroun.style.backgroundPositionTop=-cam.y+"px";player.py+=5;}
}

function animationPlayer() {
    if(key == ""){var playerStop = true;}
    else if(key == w){var playerUp=true;}
    else if(key == a){var playerLeft=true;}
    else if(key == s){var playerDown=true;}
    else if(key == d){var playerRight=true;}

    if(key == ""){var playerUp=true;}
    else if(key == arrowUp){var playerUp=true;}
    else if(key == arrowLeft){var playerLeft=true;}
    else if(key == arrowDown){var playerDown=true;}
    else if(key == arrowRight){var playerRight=true;}

    if (playerStop) {player.style.backgroundImage="../assets/gifs/character/gifPlayerStop.gif";}
    if (playerUp) {player.style.backgroundImage="../assets/gifs/character/gifPlayerUp.gif";}
    if (playerLeft) {player.style.backgroundImage="../assets/gifs/character/gifPlayerLeft.gif";}
    if (playerDown) {player.style.backgroundImage="../assets/gifs/character/gifPlayerDown.gif";}
    if (playerRight) {player.style.backgroundImage="../assets/gifs/character/gifPlayerRight.gif";}
}

function movePlayer() {
    const keyPres = {w:38,a:37,s:40,d:39,arrowUp:87,arrowDown:83,arrowLeft:65,arrowRight:68};
    document.addEventListener("keydown",function(event){
        var player = document.getElementById("player");
        var key = event.keyCode;
        if (key == keyPres.a && keys.key_left) {player.py-=5; player.style.marginLeft=py+"px";animationPlayer();}
        else if (key == keyPres.w && keys.key_up) {player.px-=5; player.style.marginTop=px+"px";animationPlayer();}
        else if (key == keyPres.d && keys.key_right) {player.py+=5; player.style.marginLeft=py+"px";animationPlayer();}
        else if (key == keyPres.s && keys.key_down) {player.px+=5; player.style.marginTop=px+"px";animationPlayer();}
        if (key == keyPres.arrowLeft && keys.key_left) {player.py-=5; player.style.marginLeft=py+"px";animationPlayer();}
        else if (key == keyPres.arrowUp && keys.key_up){player.px-=5; player.style.marginTop=px+"px";animationPlayer();}
        else if (key == keyPres.arrowRight && keys.key_right) {player.py+=5; player.style.marginLeft=py+"px";animationPlayer();}
        else if (key == keyPres.arrowDown && keys.key_down) {player.px+=5; player.style.marginTop=px+"px";animationPlayer();}
    });
}

for (var cont=0;cont>2;cont++) {
    cont--;
    movCam();
    colision();
    words();
}
movePlayer();
