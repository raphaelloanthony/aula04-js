//sorteando 10 numeros
let numeroFor = 0;
for(let i = 0; i <= 9; i++){
    numeroFor = parseInt(Math.random()*101)
    console.log(numeroFor);
    
}

// fazer uma contagem entre 0 e 20

for(let i = 0; i <= 20; i++){
    console.log(i);
    
}


for(let i = 0; i <= 100; i+=5){
    console.log(i); }

    //fazer uma contagem regressiva entre 20 e 0 
    for(let i = 10; i >= 0; i--){
        console.log(i);
     }
     //sortear um numero entre 0 e 10 - exibir na tela: o numero sorteado, tabuada desse numero no formato numeroSorteado * 0 = resultado da conta
     
     let numerotabuada = parseInt(Math.random()*11)
     
     for(let i= 0; i <= 10; i++){
        console.log(`${numerotabuada} x ${i} = ${numerotabuada*i}`)
     }

        