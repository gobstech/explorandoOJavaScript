// // console.log(`Trabalhando com condicionais`);
// // const listaDeDestinos = new Array(
// //     `Salvador`,
// //     `São Paulo`,
// //     `Rio de Janeiro`
// // );

// // const idadeComprador = 18;
// // const estaAcompanhada = false;
// // const temPassagemComprada = true;


// console.log(`Destinos possíveis: `);
// console.log(listaDeDestinos);

// // if (idadeComprador >= 18) {
// //     console.log(`Comprador maior de idade`);
// //     listaDeDestinos.splice(1,1); //removendo um item da lista
// // } else if (estaAcompanhada == true) {
// //         console.log(`Comprador está acompanhado`);
// //         listaDeDestinos.splice(1,1); //removendo um item da lista
// //     } else {
// //     console.log(`O comprador não está acompanhado e é menor de idade, assim, não será possível vender passagens.`);
// // }
//     if (idadeComprador >= 18 || estaAcompanhada == true) {
//         console.log(`Boa Viagem!!`);
//         listaDeDestinos.splice(2,1); //removendo um item da lista
//     } else {
//         console.log(`O comprador não está acompanhado e é menor de idade, assim, não será possível vender passagens.`);
//     }

//     console.log(`Embarque: \n\n`);
//     if (idadeComprador >= 18 && temPassagemComprada) {
//         console.log(`Boa viagem`);
//     } else {
//         console.log(`Você não pode embarcar`);
//     }

// console.log(listaDeDestinos);
// // console.log(idadeComprador > 18);
// // console.log(idadeComprador < 18);
// // console.log(idadeComprador <= 18);
// // console.log(idadeComprador >= 18);
// // console.log(idadeComprador == 18);

const carros = new Array(
    "Chevrolet",
    "Fiat", 
    "Toyota", 
    "BYD", 
    "Hyundai"
)

const idadeComprador = 20;
const temCnh = true;
const temReserva = false;

console.log("Carros disponíveis:");
console.log(carros);

// Se a idade do comprador foi maior ou igual a 18 anos
if (idadeComprador >= 18 && temReserva) {
// então...
    console.log("Carros disponíveis: ");
    console.log(carros);
} else if (idadeComprador >= 18 && temReserva == false) {
    console.log("Faça reserva para alugar um carro!");
} else {
    console.log("O comprador não tem reserva e/ou não é habilitado. Logo, não é possível alugar um veículo.")
}



