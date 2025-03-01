import { EstoqueVeiculos } from "./classes/EstoqueVeiculos";
import { GerenciadorVeiculos } from "./classes/GerenciadorVeiculos";
import { Carro } from "./interface/Carro";
import { Moto } from "./interface/Moto";
import { Veiculo } from "./interface/Veiculo";
import { filtrarPorAno, filtrarPorModelo } from "./utils/FiltroVeiculos";
import { gerarRelatorio } from "./utils/RelatorioVeiculos";

// Aula 26/02 - Exercicio 1 
// Criando um objeto do tipo Carro
const testeCarro: Carro = {
    marca: "Jeep",
    modelo: "Renegade",
    ano: 2019,
    portas: 4
    //acelerar: () => "O carro está acelerando!"
};
console.log("Carro: ", testeCarro);
//console.log(testeCarro.acelerar());

// Criando um objeto do tipo Moto
const testeMoto: Moto = {
    marca: "Honda",
    modelo: "Elite",
    ano: 2021,
    cilindradas: 500
    //acelerar: () => "A moto está acelerando!"
};
console.log("Moto: ", testeMoto);
//console.log(testeMoto.acelerar());

//Aula 27/02 - Exercicio 1
// Criando os gerenciadores
const gerenciadorCarros = new GerenciadorVeiculos<Carro>();
const gerenciadorMotos = new GerenciadorVeiculos<Moto>();

// Exemplo de uso para carros
const carro1: Carro = {
    marca: "Toyota",
    modelo: "Corolla",
    ano: 2022,
    portas: 4
};

const carro2: Carro = {
    marca: "Honda",
    modelo: "Civic",
    ano: 2023,
    portas: 4
};

// Exemplo de uso para motos
const moto1: Moto = {
    marca: "Honda",
    modelo: "CB500",
    ano: 2021,
    cilindradas: 500
};

const moto2: Moto = {
    marca: "Yamaha",
    modelo: "MT-07",
    ano: 2022,
    cilindradas: 700
};

// Testando os métodos
gerenciadorCarros.adicionar(carro1);
gerenciadorCarros.adicionar(carro2);
gerenciadorCarros.listarVeiculos();

gerenciadorMotos.adicionar(moto1);
gerenciadorMotos.adicionar(moto2);
gerenciadorMotos.listarVeiculos();

// Exemplo de remoção
gerenciadorCarros.remover(carro1);
gerenciadorCarros.listarVeiculos();

//Aula 27/02 - Exercicio 2
// Criando os estoques
const estoqueCarros = new EstoqueVeiculos<Carro>();
const estoqueMotos = new EstoqueVeiculos<Moto>();

// Testando adição de estoque
estoqueCarros.adicionarEstoque("Corolla", 3);
estoqueCarros.adicionarEstoque("Elite", 2);
estoqueCarros.adicionarEstoque("Renegade", 1);

// Testando consulta e remoção
estoqueCarros.consultarEstoque("Corolla");
estoqueCarros.removerEstoque("Corolla", 2);
estoqueCarros.consultarEstoque("Corolla");


//Aula 27/02 - Exercicio 3
const listaVeiculos: Veiculo[] = [carro1, carro2, moto1, moto2]

console.log(filtrarPorAno(listaVeiculos, 2022));
console.log(filtrarPorModelo(listaVeiculos, "Corolla"));

//Aula 27/02 - Exercicio 4
console.log(gerarRelatorio(listaVeiculos));