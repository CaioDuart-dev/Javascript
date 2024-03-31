function gerar(){
    var inicio = document.getElementById('inicio')
    var ini = Number(inicio.value)
    var fim = document.getElementById('fim')
    var f = Number(fim.value)
    var passos = document.getElementById('passos')
    var pas = Number(passos.value)
    
    if (inicio.value.length == 0 || fim.value.length ==0 || passos.value.length == 0 || pas <= 0) {
        window.alert('erro, preencha os campos corretamente')
        console.log('nenhum numero foi inserido nos campos de input.')
    }
    else{
        var res = document.createElement('p')
        var container = document.getElementById('container')
        res.id = 'res'
        var apagarRes = document.getElementById('res')
        if(apagarRes){ //se existir um res ele apaga.
            container.removeChild(apagarRes)
        }
        container.appendChild(res) //depois cria um novo.
        if( f > ini){
            console.log('lógica de incrementação:')
            for ( var i=ini ;i<=f ;i+=pas ) {
                console.log(i)
                res.innerHTML += `${i} 👉`
            }
        }
        else{
            console.log('lógica de descrementação:')
            for ( var i=ini ;i>=f ;i-=pas ) {
                console.log(i)
                res.innerHTML += `${i}->` 
            }
        }
        res.innerHTML += '🏴'
    }
}