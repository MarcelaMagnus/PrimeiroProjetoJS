console.log(`\n Trabalhando com condicionais`);
const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);


const idadeComprador = 18;
const estaAcompnhada = false;
let temPassagemComprada = false;
const destino = "Curitiba";

console.log(`\n Destinos possíveis:`);
console.log(listaDeDestinos);



if (idadeComprador >= 18 || estaAcompanhada == true) {
    console.log("Boa Viagem!!");
    listaDeDestinos.splice(2, 1); //removendo item
    temPassagemComprada = true;
} else {
    console.log("Não é maior de Idade e não posso vender");
}

console.log("Embarque: \n\n")
if(idadeComprador >= 18 && temPassagemComprada){
    console.log("Boa viagem");
}else{
    console.log("Você não pode embarcar");
}


console.log(listaDeDestinos);