// Audio


var px = 240;
var py = 240;

var key_left = true;
var key_up = true;
var key_down = true;
var key_right = true;

document.addEventListener("keydown",function(event){
    // movimentação pelas setas
    var player = document.getElementById("playerimg");
    var key = event.keyCode;
    if (key == 37 && key_left) {py-=5; player.style.marginLeft=py+"px";}
    else if (key == 38 && key_up) {px-=5; player.style.marginTop=px+"px";}
    else if (key == 39 && key_right) {py+=5; player.style.marginLeft=py+"px";}
    else if (key == 40 && key_down) {px+=5; player.style.marginTop=px+"px";}
    if (key == 65 && key_left) {py-=5; player.style.marginLeft=py+"px";}
    else if (key == 87 && key_up){px-=5; player.style.marginTop=px+"px";}
    else if (key == 68 && key_right) {py+=5; player.style.marginLeft=py+"px";}
    else if (key == 83 && key_down) {px+=5; player.style.marginTop=px+"px";}
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
   
    // teste de colisão com paredes
    if (px == 15 && py != 240) {
        key_up = false;
    } else {
        key_up = true;
    }if (px == 465 && py != 240) {
        key_down = false;
    } else {
            key_down = true;
        }if (py == 15 && px != 240) {
        key_left = false;
    } else {
            key_left = true;
        }if (py == 465 && px != 240) {
        key_right = false;
    } else {
            key_right = true;
        }

    function obistaculos() {
        const caverna = {
            widith: 95,
            heigth: 100,
            top: 60,
            left: 65
        }
        const cavernaCantos = {
            up: caverna.top,
            down: caverna.top + caverna.heigth,
            left: caverna.left,
            right: caverna.left + caverna.widith
        };

        if (px == cavernaCantos.up && py == cavernaCantos.left && py == cavernaCantos.right && px == cavernaCantos.down) {
            key_down = false;
        }else if (px == cavernaCantos.up && py == cavernaCantos.left && py == cavernaCantos.right && px == cavernaCantos.down) {
            key_up = false;
        }else if (px == cavernaCantos.up && py == cavernaCantos.left && py == cavernaCantos.right && px == cavernaCantos.down) {
            key_right
        }else if (px == cavernaCantos.up && py == cavernaCantos.left && py == cavernaCantos.right && px == cavernaCantos.down) {
            key_left = false;
        }
    }
    obistaculos();

    // exibe na tela posição x e y do char
    document.getElementById('posicao').innerHTML = "x="+px+" / y="+py;
});