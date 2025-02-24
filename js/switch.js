// sorteando um número entre 0 e 5
const numero = parseInt(Math.random()*6)
console.log(numero);

switch (numero) {
    case 0:
        console.log('o numero sorteado é o zero');
        break;
            case 1:
            console.log('o numero sorteado é o um');
            break;
                case 2:
                console.log('o numero sorteado é o dois');
                break;
                    case 3:
                    console.log('o numero sorteado é o três');
                    break;
                        case 4:
                        console.log('o numero sorteado é o quatro');
                        break;



    default:
        console.log('o numero sorteado é o cinco');

        break;
}

// utilizando o if

const novoNumero = parseInt(Math.random()*101);
console.log(`novo numero sorteado igual a ${novoNumero}`);

if (novoNumero <= 20){
    console.log(`o numero está no intervalo entre 0 e 20`);
    
}



















