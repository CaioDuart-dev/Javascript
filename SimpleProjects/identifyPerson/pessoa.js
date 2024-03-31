function resultado(){
    var data = new Date
    var ano = data.getFullYear()
    var age = document.getElementById('age')
    var idade = ano - Number(age.value)
    var homem = document.getElementById('masc')
    var mulher = document.getElementById('fem')
    var genero = ''
    var res = document.getElementById('resultado')
    var cont = 0
    
    // em caso que não funciona
    if(age.value > ano || age.value == 0 ) //iguala a zero pois começa em zero, isso foi definido no html
    {
        window.alert('ocorreu um erro nas informações, tente novamente.')
        console.log("a lógica da data em caso que não funciona está funcionando corretamente.")
    } //value está em string, mas consegue se comparado com numeros inteiros devido ao ==
    // em caso que funciona
    else{
        var imagem = document.createElement('img')
        imagem.setAttribute('id','image') 
        if(mulher.checked)
        {
            cont =1
            genero = 'mulher'
            console.log('lógica da mulher está funcionando corretamente.')
            if(idade > 0 && idade < 5){
                imagem.setAttribute('src','img/bb mulher.jpg')
                console.log('bbbbbbbbbb')
            }
            else if(idade < 11){
                imagem.setAttribute('src','img/menina.jpg')
            }
            else if(idade < 15){
                imagem.setAttribute('src','img/garota.jpg')
            }
            else if(idade < 28){
                imagem.setAttribute('src','img/jovem mulhe.jpg')
            }
            else if(idade < 45){
                imagem.setAttribute('src','img/mulher.jpg')
            }
            else if(idade <100){
                imagem.setAttribute('src','img/idosa.jpg')
            }
            else{
                imagem.setAttribute('src','morreu.jpg')
            }
        }
        else if(homem.checked)
        {
            cont =1
            genero = 'homem'
            var meio = document.getElementById('mid')
            console.log('lógica do homem está funcionando corretamente.')
            if(idade > 0 && idade < 5){
                imagem.setAttribute('src','img/bb homem.jpg')
            }
            else if(idade < 11){
                imagem.setAttribute('src','img/menino.jpg')
            }
            else if(idade < 15){
                imagem.setAttribute('src','img/garoto.jpg')
            }
            else if(idade < 28){
                imagem.setAttribute('src','img/jovem homem.jpg')
            }
            else if(idade < 45){
                imagem.setAttribute('src','img/homem.jpg')
            }
            else if(idade <100){
                imagem.setAttribute('src','img/idoso.jpg')
            }
            else{
                imagem.setAttribute('src','img/morreu.jpg')
            }
        }
        else{
            window.alert('ocorreu um erro nas informações, tente novamente.')
        }
        if(cont==1){
            res.style.textAlign = 'center'
            res.innerHTML = ` ${genero} de ${idade} anos`
            res.appendChild(imagem)
            imagem.style.width = '200px'
            imagem.style.height = '150px'
        }
    }
}
