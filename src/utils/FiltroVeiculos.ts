import { Veiculo } from "../interface/Veiculo";

// Exercico 3 - Funcoes para filtrar veiculos por modelo ou ano


// Funções para filtrar veiculos por anos, e retorna uma lista de veiculos
// @ param veiculos: Veiculos[] -> lista de veiculos
// @ param ano: number -> ano que deseja buscar
// @ param modelo: string -> modelo que deseja buscar
export function filtrarPorAno(veiculos: Veiculo[], ano: number): Veiculo[] {
    return veiculos.filter(
        v => v.ano === ano
    );
};


export function filtrarPorModelo(veiculos: Veiculo[], modelo: string): Veiculo[]{
    return veiculos.filter(
        v => v.modelo.toUpperCase() === modelo.toUpperCase()
    );
};
