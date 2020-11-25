// Audio
var audio = document.getElementById("audio");
//audio.play();

var px = 240;
var py = 240;

var keys = {
    key_left: true,
    key_up: true,
    key_down: true,
    key_right: true
};

document.addEventListener("keydown",function(event){
    // movimentação pelas setas
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
    // entrada da porta inferior
    if (px == 480 && py == 240) {
        px = 15;
        player.style.marginTop=px+"px";
    }

    // entrada da porta direita
    if (px == 240 && py == 480) {
        py = 15;
        player.style.marginLeft=py+"px";
    }    
     // entrada da porta superior
    if (px == 0 && py == 240) {
        px = 465;
        player.style.marginTop=px+"px";
    }
    // entrada da porta esquerda
    if (px == 240 && py == 0) {
        py = 465;
        player.style.marginLeft=py+"px";
    }
    // entrada caverna
    if(px == 85 && py == 115){
        py = 135;
        player.style.marginLeft=py+"px";
    }

    block(px,py);

    function block(x,y) {
        blocked = {
            X: 22,
            Y: 44
        };

        

    }

    block();

 //   var cavernaInfo = [[35] [40] [45] [50] [55] [60] [65] [70] [75] [80][ 85] [90] [95] [100] [105] [110] [115] [120] [125] [130] [135];


    function caverna() {
        const caverna = {
            widith: 115,
            heigth: 110,
            top: 60,
            left: 65
        };
    
        const cavernaLados = {
            up: caverna.top,
            down: caverna.top + caverna.heigth,
            left: caverna.left + caverna.widith,
            right: caverna.left,
            limitis: {
                limitUp: caverna.heigth,
                limitDown: caverna.heigth,
                limitLeft: caverna.widith,
                limitRight: caverna.widith
            }
        };   
    }
    
   
    // teste de colisão com paredes
    if (px == 15 && py != 240 /*&& px == */) {
        keys.key_up = false;
    } else {
        keys.key_up = true;
    }if (px == 465 && py != 240) {
        keys.key_down = false;
    } else {
        keys.key_down = true;
    }if (py == 15 && px != 240) {
            keys.key_left = false;
    } else {
        keys.key_left = true;
    }if (py == 465 && px != 240) {
            keys.key_right = false;
    } else {
        keys.key_right = true;
    }

    // exibe na tela posição x e y do char
    document.getElementById('posicao').innerHTML = "x="+px+" / y="+py;
});