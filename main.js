function verificar(){
    let nome = document.getElementById('Nome').value
    let data = new Date()
    let ano = data.getFullYear()
    let form_ano = document.getElementById('ano')
    let res = document.getElementById('send')
    if(form_ano.value.length == 0 || form_ano.value > ano ){
        alert('ERRO. Verifique os dados e tente novamente!')
    } else {
        let form_sex = document.getElementsByName('sexo')
        let idade = ano - Number(form_ano.value)
        let genero = ''
        if (form_sex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade <10) {
                //criança
                document.getElementById('img').src = 'assets/menino-criança.png'
                document.getElementById('resposta').innerHTML = `Você é uma criança de ${idade} anos ;)`
                document.getElementById('metade-direita').innerHTML = `Olá, ${nome} ;) <br>
                Tudo bem?`
            }
            else if (idade < 21){
                //jovem
                document.getElementById('img').src = 'assets/jovem-homem.png'
                document.getElementById('resposta').innerHTML = `Você é um jovem de ${idade} anos ;)`
                document.getElementById('metade-direita').innerHTML = `Olá, ${nome} ;) <br>
                Tudo bem?`
            }
            else if (idade < 50){
                //Adulto
                document.getElementById('img').src = 'assets/adulto-homem.png'
                document.getElementById('resposta').innerHTML = `Você é um adulto de ${idade} anos ;)`
                document.getElementById('metade-direita').innerHTML = `Olá, ${nome} ;) <br>
                Tudo bem?`
            }
            else{
                //idoso
                document.getElementById('img').src = 'assets/homem-idoso.png'
                document.getElementById('resposta').innerHTML = `Você é um idoso de ${idade} anos ;)`
                document.getElementById('metade-direita').innerHTML = `Olá, ${nome} ;) <br>
                Tudo bem?`
            }
        } else if (form_sex[1].checked){
            genero = 'Mulher'
            if (idade >= 0 && idade <10) {
                //criança
                document.getElementById('img').src = 'assets/menina-criança.png'
                document.getElementById('resposta').innerHTML = `Você é uma criança de ${idade} anos ;)`
                document.getElementById('metade-direita').innerHTML = `Olá, ${nome} ;) <br>
                Tudo bem?`
            }
            else if (idade < 21){
                //jovem
                document.getElementById('img').src = 'assets/jovem-mulher.png'
                document.getElementById('resposta').innerHTML = `Você é uma jovem de ${idade} anos ;)`
                document.getElementById('metade-direita').innerHTML = `Olá, ${nome} ;) <br>
                Tudo bem?`
            }
            else if (idade < 50){
                //Adulto
                document.getElementById('img').src = 'assets/adulto-mulher.png'
                document.getElementById('resposta').innerHTML = `Você é uma adulta de ${idade} anos ;)`
                document.getElementById('metade-direita').innerHTML = `Olá, ${nome} ;) <br>
                Tudo bem?`
            }
            else{
                //idoso
                document.getElementById('img').src = 'assets/mulher-idoso.png'
                document.getElementById('resposta').innerHTML = `Você é uma idosa de ${idade} anos ;)`
                document.getElementById('metade-direita').innerHTML = `Olá, ${nome} ;) <br>
                Tudo bem?`
            }
        }

    }
}