var x = 0
var y = 0
function move(event){
    var tecla = event.keyCode
    // alert(tecla)
    if(tecla == "68" && x < 857){ //ir pra direita
        x = x + 10
        document.getElementById("box").style.left=x+"px"
        document.getElementById("D").style.backgroundColor = "red"
        setTimeout(function() {
            document.getElementById("D").style.backgroundColor = ""
        }, 100);
    }
    if(tecla == "65" && x > 10){ //ir pra esquerda
        x = x - 10
        document.getElementById("box").style.left=x+"px"
        document.getElementById("A").style.backgroundColor = "red"
        setTimeout(function() {
            document.getElementById("A").style.backgroundColor = ""
        }, 100);
    }
    if(tecla == "83" && y < 580){ //ir pra baixo
        y = y + 10
        document.getElementById("box").style.top=y+"px"
        document.getElementById("S").style.backgroundColor = "red"
        setTimeout(function() {
            document.getElementById("S").style.backgroundColor = ""
        }, 100);
    }
    if(tecla == "87" && y > 10){ //ir pra cima
        y = y - 10
        document.getElementById("box").style.top=y+"px"
        document.getElementById("W").style.backgroundColor = "red"
        setTimeout(function() {
            document.getElementById("W").style.backgroundColor = ""
        }, 100);
    }
}
window.addEventListener("keydown",move)


