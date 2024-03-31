
function calculate(){
    //input
    var input = document.getElementById('input1')
    var sha = document.getElementById('shape')
    //criando select
    if(input.value.length == 0) //se a quantidade de caracteres for igual a 0, é porque não tem string.
    {
        console.log('nothing number was entered')
        window.alert('erro, please enter valid number')
    }
    else //se não inicia a lógica da tabuada
    {
        console.log('number received!')
        var desSel = document.getElementsByTagName('select')[0]
        if(desSel) //se existir já um select criado ele remove o antigo
        {
            console.log('old data removed')
            sha.removeChild(desSel);
        }
        //se não existe ele apenas continua a lógica, criando um select novo
        var sel = document.createElement('select')
        sha.appendChild(sel)
        for(var i = 1; i <= 10; i++ )
        {
            var num = Number(input.value)
            var m = num * i
            var item = document.createElement('option')
            item.innerHTML = `\n${num} x ${i} = ${m}\n`
            console.log(`${num}*${i}=${m}`)
            sel.appendChild(item)
        }
    }
}