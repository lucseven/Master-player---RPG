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

function backgroundUbdate() {
    if (cam.x < 0) {
        backgrondX = cam.x - 0;
    }
    if (cam.x > 0) {
        backgrondX = cam.x - 500;
    }
    if (cam.y < 0) {
        backgrondY = cam.y - 0;
    }
    if (cam.y > 0) {
        backgrondY = cam.y - 500;
    }
}

function dors1_1() {
    
}
function dors1_2() {
    
}
function dors2_2() {
    
}
function dors3_2() {
    
}
function dors4_2() {
    
}
function dors5_2() {
    
}
function dors6_2() {
    
}
function dors7_2() {
    
}
function dors8_2() {
    
}
function dors1_3() {
    
}
function dors2_3() {
    
}
function dors3_3() {
    
}
function dors4_3() {
    
}
function dors5_3() {
    
}
function dors6_3() {
    
}
function dors7_3() {
    
}
function dors8_3() {
    
}
function dors9_3() {
    
}
function dors10_3() {
    
}
function dors11_3() {
    
}
function dors12_3() {
    
}
function dors13_3() {
    
}
function dors14_3() {
    
}
function dors15_3() {
    
}
function dors16_3() {
    
}


function word1_1() {
    dors1_1();
    if(player.px >= backgroundUbdate()){keys.key_right=false;}
    else {keys.key_right=true;}

    if(player.px <= backgroundUbdate()){keys.left=false;}
    else {keys.key_left=true;}

    if(player.py >= backgroundUbdate()){keys.key_up=false;}
    else {keys.key_up=true;}

    if(player.px <= backgroundUbdate()){keys.key_down=false;}
    else {keys.key_down=true;}

    wordBackground.style.backgroundImage="url('../assets/img/words/word1_1/backgrond.png');";
}
function word1_2() {
    dors1_1();
    if(player.px >= backgroundUbdate()){keys.key_right=false;}
    else {keys.key_right=true;}

    if(player.px <= backgroundUbdate()){keys.left=false;}
    else {keys.key_left=true;}

    if(player.py >= backgroundUbdate()){keys.key_up=false;}
    else {keys.key_up=true;}

    if(player.px <= backgroundUbdate()){keys.key_down=false;}
    else {keys.key_down=true;}

    wordBackground.style.backgroundImage="url('../assets/img/words/word1_1/backgrond.png');";
}
function word2_2() {
    dors1_1();
    if(player.px >= backgroundUbdate()){keys.key_right=false;}
    else {keys.key_right=true;}

    if(player.px <= backgroundUbdate()){keys.left=false;}
    else {keys.key_left=true;}

    if(player.py >= backgroundUbdate()){keys.key_up=false;}
    else {keys.key_up=true;}

    if(player.px <= backgroundUbdate()){keys.key_down=false;}
    else {keys.key_down=true;}

    wordBackground.style.backgroundImage="url('../assets/img/words/word1_1/backgrond.png');";
}
function word3_2() {
    dors1_1();
    if(player.px >= backgroundUbdate()){keys.key_right=false;}
    else {keys.key_right=true;}

    if(player.px <= backgroundUbdate()){keys.left=false;}
    else {keys.key_left=true;}

    if(player.py >= backgroundUbdate()){keys.key_up=false;}
    else {keys.key_up=true;}

    if(player.px <= backgroundUbdate()){keys.key_down=false;}
    else {keys.key_down=true;}

    wordBackground.style.backgroundImage="url('../assets/img/words/word1_1/backgrond.png');";
}
function word4_2() {
    dors1_1();
    if(player.px >= backgroundUbdate()){keys.key_right=false;}
    else {keys.key_right=true;}

    if(player.px <= backgroundUbdate()){keys.left=false;}
    else {keys.key_left=true;}

    if(player.py >= backgroundUbdate()){keys.key_up=false;}
    else {keys.key_up=true;}

    if(player.px <= backgroundUbdate()){keys.key_down=false;}
    else {keys.key_down=true;}

    wordBackground.style.backgroundImage="url('../assets/img/words/word1_1/backgrond.png');";
}
function word5_2() {
    dors1_1();
    if(player.px >= backgroundUbdate()){keys.key_right=false;}
    else {keys.key_right=true;}

    if(player.px <= backgroundUbdate()){keys.left=false;}
    else {keys.key_left=true;}

    if(player.py >= backgroundUbdate()){keys.key_up=false;}
    else {keys.key_up=true;}

    if(player.px <= backgroundUbdate()){keys.key_down=false;}
    else {keys.key_down=true;}

    wordBackground.style.backgroundImage="url('../assets/img/words/word1_1/backgrond.png');";
}
function word6_2() {
    dors1_1();
    if(player.px >= backgroundUbdate()){keys.key_right=false;}
    else {keys.key_right=true;}

    if(player.px <= backgroundUbdate()){keys.left=false;}
    else {keys.key_left=true;}

    if(player.py >= backgroundUbdate()){keys.key_up=false;}
    else {keys.key_up=true;}

    if(player.px <= backgroundUbdate()){keys.key_down=false;}
    else {keys.key_down=true;}

    wordBackground.style.backgroundImage="url('../assets/img/words/word1_1/backgrond.png');";
}
function word7_2() {
    dors1_1();
    if(player.px >= backgroundUbdate()){keys.key_right=false;}
    else {keys.key_right=true;}

    if(player.px <= backgroundUbdate()){keys.left=false;}
    else {keys.key_left=true;}

    if(player.py >= backgroundUbdate()){keys.key_up=false;}
    else {keys.key_up=true;}

    if(player.px <= backgroundUbdate()){keys.key_down=false;}
    else {keys.key_down=true;}

    wordBackground.style.backgroundImage="url('../assets/img/words/word1_1/backgrond.png');";
}
function word8_2() {
    dors1_1();
    if(player.px >= backgroundUbdate()){keys.key_right=false;}
    else {keys.key_right=true;}

    if(player.px <= backgroundUbdate()){keys.left=false;}
    else {keys.key_left=true;}

    if(player.py >= backgroundUbdate()){keys.key_up=false;}
    else {keys.key_up=true;}

    if(player.px <= backgroundUbdate()){keys.key_down=false;}
    else {keys.key_down=true;}

    wordBackground.style.backgroundImage="url('../assets/img/words/word1_1/backgrond.png');";
}
function word1_3() {
    dors1_1();
    if(player.px >= backgroundUbdate()){keys.key_right=false;}
    else {keys.key_right=true;}

    if(player.px <= backgroundUbdate()){keys.left=false;}
    else {keys.key_left=true;}

    if(player.py >= backgroundUbdate()){keys.key_up=false;}
    else {keys.key_up=true;}

    if(player.px <= backgroundUbdate()){keys.key_down=false;}
    else {keys.key_down=true;}

    wordBackground.style.backgroundImage="url('../assets/img/words/word1_1/backgrond.png');";
}
function word2_3() {
    dors1_1();
    if(player.px >= backgroundUbdate()){keys.key_right=false;}
    else {keys.key_right=true;}

    if(player.px <= backgroundUbdate()){keys.left=false;}
    else {keys.key_left=true;}

    if(player.py >= backgroundUbdate()){keys.key_up=false;}
    else {keys.key_up=true;}

    if(player.px <= backgroundUbdate()){keys.key_down=false;}
    else {keys.key_down=true;}

    wordBackground.style.backgroundImage="url('../assets/img/words/word1_1/backgrond.png');";
}
function word3_3() {
    dors1_1();
    if(player.px >= backgroundUbdate()){keys.key_right=false;}
    else {keys.key_right=true;}

    if(player.px <= backgroundUbdate()){keys.left=false;}
    else {keys.key_left=true;}

    if(player.py >= backgroundUbdate()){keys.key_up=false;}
    else {keys.key_up=true;}

    if(player.px <= backgroundUbdate()){keys.key_down=false;}
    else {keys.key_down=true;}

    wordBackground.style.backgroundImage="url('../assets/img/words/word1_1/backgrond.png');";
}
function word4_3() {
    dors1_1();
    if(player.px >= backgroundUbdate()){keys.key_right=false;}
    else {keys.key_right=true;}

    if(player.px <= backgroundUbdate()){keys.left=false;}
    else {keys.key_left=true;}

    if(player.py >= backgroundUbdate()){keys.key_up=false;}
    else {keys.key_up=true;}

    if(player.px <= backgroundUbdate()){keys.key_down=false;}
    else {keys.key_down=true;}

    wordBackground.style.backgroundImage="url('../assets/img/words/word1_1/backgrond.png');";
}
function word5_3() {
    dors1_1();
    if(player.px >= backgroundUbdate()){keys.key_right=false;}
    else {keys.key_right=true;}

    if(player.px <= backgroundUbdate()){keys.left=false;}
    else {keys.key_left=true;}

    if(player.py >= backgroundUbdate()){keys.key_up=false;}
    else {keys.key_up=true;}

    if(player.px <= backgroundUbdate()){keys.key_down=false;}
    else {keys.key_down=true;}

    wordBackground.style.backgroundImage="url('../assets/img/words/word1_1/backgrond.png');";
}
function word6_3() {
    dors1_1();
    if(player.px >= backgroundUbdate()){keys.key_right=false;}
    else {keys.key_right=true;}

    if(player.px <= backgroundUbdate()){keys.left=false;}
    else {keys.key_left=true;}

    if(player.py >= backgroundUbdate()){keys.key_up=false;}
    else {keys.key_up=true;}

    if(player.px <= backgroundUbdate()){keys.key_down=false;}
    else {keys.key_down=true;}

    wordBackground.style.backgroundImage="url('../assets/img/words/word1_1/backgrond.png');";
}
function word7_3() {
    dors1_1();
    if(player.px >= backgroundUbdate()){keys.key_right=false;}
    else {keys.key_right=true;}

    if(player.px <= backgroundUbdate()){keys.left=false;}
    else {keys.key_left=true;}

    if(player.py >= backgroundUbdate()){keys.key_up=false;}
    else {keys.key_up=true;}

    if(player.px <= backgroundUbdate()){keys.key_down=false;}
    else {keys.key_down=true;}

    wordBackground.style.backgroundImage="url('../assets/img/words/word1_1/backgrond.png');";
}
function word8_3() {
    dors1_1();
    if(player.px >= backgroundUbdate()){keys.key_right=false;}
    else {keys.key_right=true;}

    if(player.px <= backgroundUbdate()){keys.left=false;}
    else {keys.key_left=true;}

    if(player.py >= backgroundUbdate()){keys.key_up=false;}
    else {keys.key_up=true;}

    if(player.px <= backgroundUbdate()){keys.key_down=false;}
    else {keys.key_down=true;}

    wordBackground.style.backgroundImage="url('../assets/img/words/word1_1/backgrond.png');";
}
function word9_3() {
    dors1_1();
    if(player.px >= backgroundUbdate()){keys.key_right=false;}
    else {keys.key_right=true;}

    if(player.px <= backgroundUbdate()){keys.left=false;}
    else {keys.key_left=true;}

    if(player.py >= backgroundUbdate()){keys.key_up=false;}
    else {keys.key_up=true;}

    if(player.px <= backgroundUbdate()){keys.key_down=false;}
    else {keys.key_down=true;}

    wordBackground.style.backgroundImage="url('../assets/img/words/word1_1/backgrond.png');";
}
function word10_3() {
    dors1_1();
    if(player.px >= backgroundUbdate()){keys.key_right=false;}
    else {keys.key_right=true;}

    if(player.px <= backgroundUbdate()){keys.left=false;}
    else {keys.key_left=true;}

    if(player.py >= backgroundUbdate()){keys.key_up=false;}
    else {keys.key_up=true;}

    if(player.px <= backgroundUbdate()){keys.key_down=false;}
    else {keys.key_down=true;}

    wordBackground.style.backgroundImage="url('../assets/img/words/word1_1/backgrond.png');";
}
function word11_3() {
    dors1_1();
    if(player.px >= backgroundUbdate()){keys.key_right=false;}
    else {keys.key_right=true;}

    if(player.px <= backgroundUbdate()){keys.left=false;}
    else {keys.key_left=true;}

    if(player.py >= backgroundUbdate()){keys.key_up=false;}
    else {keys.key_up=true;}

    if(player.px <= backgroundUbdate()){keys.key_down=false;}
    else {keys.key_down=true;}

    wordBackground.style.backgroundImage="url('../assets/img/words/word1_1/backgrond.png');";
}
function word12_3() {
    dors1_1();
    if(player.px >= backgroundUbdate()){keys.key_right=false;}
    else {keys.key_right=true;}

    if(player.px <= backgroundUbdate()){keys.left=false;}
    else {keys.key_left=true;}

    if(player.py >= backgroundUbdate()){keys.key_up=false;}
    else {keys.key_up=true;}

    if(player.px <= backgroundUbdate()){keys.key_down=false;}
    else {keys.key_down=true;}

    wordBackground.style.backgroundImage="url('../assets/img/words/word1_1/backgrond.png');";
}
function word13_3() {
    dors1_1();
    if(player.px >= backgroundUbdate()){keys.key_right=false;}
    else {keys.key_right=true;}

    if(player.px <= backgroundUbdate()){keys.left=false;}
    else {keys.key_left=true;}

    if(player.py >= backgroundUbdate()){keys.key_up=false;}
    else {keys.key_up=true;}

    if(player.px <= backgroundUbdate()){keys.key_down=false;}
    else {keys.key_down=true;}

    wordBackground.style.backgroundImage="url('../assets/img/words/word1_1/backgrond.png');";
}
function word14_3() {
    dors1_1();
    if(player.px >= backgroundUbdate()){keys.key_right=false;}
    else {keys.key_right=true;}

    if(player.px <= backgroundUbdate()){keys.left=false;}
    else {keys.key_left=true;}

    if(player.py >= backgroundUbdate()){keys.key_up=false;}
    else {keys.key_up=true;}

    if(player.px <= backgroundUbdate()){keys.key_down=false;}
    else {keys.key_down=true;}

    wordBackground.style.backgroundImage="url('../assets/img/words/word1_1/backgrond.png');";
}
function word15_3() {
    dors1_1();
    if(player.px >= backgroundUbdate()){keys.key_right=false;}
    else {keys.key_right=true;}

    if(player.px <= backgroundUbdate()){keys.left=false;}
    else {keys.key_left=true;}

    if(player.py >= backgroundUbdate()){keys.key_up=false;}
    else {keys.key_up=true;}

    if(player.px <= backgroundUbdate()){keys.key_down=false;}
    else {keys.key_down=true;}

    wordBackground.style.backgroundImage="url('../assets/img/words/word1_1/backgrond.png');";
}
function word16_3() {
    dors1_1();
    if(player.px >= backgroundUbdate()){keys.key_right=false;}
    else {keys.key_right=true;}

    if(player.px <= backgroundUbdate()){keys.left=false;}
    else {keys.key_left=true;}

    if(player.py >= backgroundUbdate()){keys.key_up=false;}
    else {keys.key_up=true;}

    if(player.px <= backgroundUbdate()){keys.key_down=false;}
    else {keys.key_down=true;}

    wordBackground.style.backgroundImage="url('../assets/img/words/word1_1/backgrond.png');";
}

function words() {
    if(word == 1 && layer == 1){word1_1()}
    if(word == 1 && layer == 2){word1_2()}
    if(word == 2 && layer == 2){word2_2()}
    if(word == 3 && layer == 2){word3_2()}
    if(word == 4 && layer == 2){word4_2()}
    if(word == 5 && layer == 2){word5_2()}
    if(word == 6 && layer == 2){word6_2()}
    if(word == 7 && layer == 2){word7_2()}
    if(word == 8 && layer == 2){word8_2()}
    if(word == 1 && layer == 3){word1_3()}
    if(word == 2 && layer == 3){word2_3()}
    if(word == 3 && layer == 3){word3_3()}
    if(word == 4 && layer == 3){word4_3()}
    if(word == 5 && layer == 3){word5_3()}
    if(word == 6 && layer == 3){word6_3()}
    if(word == 7 && layer == 3){word7_3()}
    if(word == 8 && layer == 3){word8_3()}
    if(word == 9 && layer == 3){word9_3()}
    if(word == 10 && layer == 3){word10_3()}
    if(word == 11 && layer == 3){word11_3()}
    if(word == 12 && layer == 3){word12_3()}
    if(word == 13 && layer == 3){word13_3()}
    if(word == 14 && layer == 3){word14_3()}
    if(word == 15 && layer == 3){word15_3()}
    if(word == 16 && layer == 3){word16_3()}
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

    if (playerStop) {player.style.backgroundImage="../assets/gif/character/gifPlayerStop.gif";}
    if (playerUp) {player.style.backgroundImage="../assets/gif/character/gifPlayerUp.gif";}
    if (playerLeft) {player.style.backgroundImage="../assets/gif/character/gifPlayerLeft.gif";}
    if (playerDown) {player.style.backgroundImage="../assets/gif/character/gifPlayerDown.gif";}
    if (playerRight) {player.style.backgroundImage="../assets/gif/character/gifPlayerRight.gif";}
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
    words();
}
movePlayer();