// essaPalavraEPalindromo();
// function essaPalavraEPalindromo() {
//     let palavra = "arara";
//     let separandoLetrasDaPalavra = palavra.split("");
//     let palavraInvertida = separandoLetrasDaPalavra.reverse();
//     palavraInvertida = palavraInvertida.join("");
//     if (palavra == palavraInvertida) {
//         console.log(`A palavra ${palavra} é um palíndromo.`);
//     } else {
//         console.log(`A palavra ${palavra} não é um palíndromo.`);
//     }
// }

const essaPalavraEPalindromo = function (palavra) {
    let separandoLetrasDaPalavra = palavra.split("");
    let palavraInvertida = separandoLetrasDaPalavra.reverse();
    palavraInvertida = palavraInvertida.join("");
    if (palavra == palavraInvertida) {
        console.log(`A palavra ${palavra} é um palíndromo.`);
    } else {
        console.log(`A palavra ${palavra} não é um palíndromo.`);
    }
};

essaPalavraEPalindromo("esseesse");
