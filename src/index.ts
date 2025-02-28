import { Carro } from "./interface/Carro";
import { Moto } from "./interface/Moto";


// Criando um objeto do tipo Carro
const testeCarro: Carro = {
    marca: "Jeep",
    modelo: "Renegade",
    ano: 2019,
    portas: 4,
    acelerar: () => "O carro está acelerando!"
};
console.log("Carro: ", testeCarro);
console.log(testeCarro.acelerar());

// Criando um objeto do tipo Moto
const testeMoto: Moto = {
    marca: "Honda",
    modelo: "Elite",
    ano: 2021,
    cilindradas: 500,
    acelerar: () => "A moto está acelerando!"
};
console.log("Moto: ", testeMoto);
console.log(testeMoto.acelerar());
