function verificaSeOChutePossuiUmValorValido(chute){
    const numero = +chute

    if(chuteForInvalido(numero)){
        elementoChute.innerHTML += '<div>Valor Inválido</div>'
        return
    }
    if (numeroForMaiorOuMenorQueOValorPermitido(numero)){
        elementoChute.innerHTML += `<div>Valor inválido: o número secreto precisa estar entre ${menorValor} e ${maiorValor}</div>`
        return
    }

    if (numero === numeroSecreto){
        document.body.innerHTML = `
        <h2>Você acertou!!!</h2>
        <h3>O número secreto era ${numeroSecreto}</h3>
        <br>
        <button id="jogarNovamente" class="btnJogar">Jogar Novamente</button>
        `
    } else if(numero>numeroSecreto){
        elementoChute.innerHTML +=`
        <div>O número secreto é <i class="fa-solid fa-angle-down"></i></div>
        `
    }else{
        elementoChute.innerHTML +=`
        <div>O número secreto é <i class="fa-solid fa-angle-up"></i></div>
        `
    }
}

function chuteForInvalido(numero){
    return Number.isNaN(numero)
}

function numeroForMaiorOuMenorQueOValorPermitido(numero){
    return numero > maiorValor || numero < menorValor
}


document.body.addEventListener('click', e=> {
    if (e.target.id=='jogarNovamente'){
        window.location.reload();
    }
})