import { Veiculo } from "../interface/Veiculo";


// funcão para gerar um relatório de todos os veículos, retorna uma string formatada
// @ param veiculos: Veiculos[] -> lista de veiculos


export function gerarRelatorio(veiculos: Veiculo[]): string{
    
    let relatorio = "===== Relatório de Veículos =====\n\n";

    veiculos.forEach((v, index) => {
        relatorio += `Veiculo ${index + 1}: \n`;
        relatorio += `Marca: ${v.marca}\n`;
        relatorio += `Modelo: ${v.modelo}\n`;
        relatorio += `Ano: ${v.ano}\n\n`;
    })

    return relatorio;
}