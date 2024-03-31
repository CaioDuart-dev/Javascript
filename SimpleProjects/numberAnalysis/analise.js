var vetor = []
function listar(){
    var input = document.getElementById('number')
    var n = Number(input.value)
    if(n < 1 || n > 100){
        window.alert('insira o valor corretamente.')
    }
    else{
        if(vetor.indexOf(n)== '-1'){
            console.log('este valor não está contido na lista.')
            vetor.push(n)
            var item = document.createElement('option')
            var sel = document.getElementById('sel')
            sel.appendChild(item)
            item.innerHTML = `o valor ${n} foi adicionado`
        }
        else if(vetor.indexOf != '-1'){
            window.alert('este valor já está contido')
        }
        if(vetor.length > 3){
            sel.setAttribute('size','6')
        }
    }
    input.value=''
    input.focus()
}
var result = document.createElement('p')
function analisar(){
    var container = document.getElementById('container')
    container.appendChild(result)
    result.innerHTML=''
    if(vetor.length == 0){
        window.alert('nenhum item foi adicionado à lista.')
    }
    else{
        var maior = vetor[0];
        var menor = vetor[0];
        for (let i = 1; i < vetor.length; i++) {
            if (vetor[i] > maior) {
                maior = vetor[i];
            }
            if (vetor[i] < menor) {
                menor = vetor[i];
            }
        }
        console.log(`o maior numero: ${maior} \n o menor numero é ${menor}`)
        var soma = 0
        for (let i = 0; i < vetor.length; i++) {
            soma += vetor[i]
        } 
        var media = soma/vetor.length
        result.innerHTML += `total de números cadastrados: ${vetor.length}. <br>`
        result.innerHTML += `o maior numero é: ${maior}. <br>`
        result.innerHTML += `o menor numero é: ${menor}. <br>`
        result.innerHTML += `o somatório de todos os numeros é: ${soma} <br>`
        result.innerHTML += `a media entre os numeros são: ${media} <br>`
    }
}
