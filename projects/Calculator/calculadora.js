var visor = '';
var digito = '';

function insert(num) {
    console.log(`valor inserido: ${num}`);
    visor = document.getElementById('result');
    digito = num;
    visor.innerHTML += digito;
}

function back() {
    var visor = document.getElementById('result');
    var conteudo = visor.innerHTML;
    visor.innerHTML = conteudo.substring(0, conteudo.length -1);
    //retorna a string do inicio até o penultimo digito.
}

function clean() {
    var visor = document.getElementById('result');
    visor.innerHTML = '';
}

function calculate(){
    visor = document.getElementById('result')
    conteudo = visor.innerHTML
        resultado = eval(conteudo)
        if(resultado == undefined){
            window.alert('selecione as teclas.')
        }
        else if(isNaN(resultado) || !isFinite(resultado) ){
            visor.innerHTML = 'indefinido'
        }
        else if(resultado){
            console.log(resultado)
            console.log(`visor: ${visor}`)
            visor.innerHTML = resultado
        }
}

