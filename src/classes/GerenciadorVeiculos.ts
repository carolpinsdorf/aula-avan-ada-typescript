//Exercicio 1 - Classe que faz o trabalho de gerenciar os veiculos genéricos
// criados em uma lista

 export class GerenciadorVeiculos<T>{
    private veiculosLista: T[] = [];

    // metodo que adiciona um novo veiculo na lista
    //@ param veiculo: T
    public adicionar(veiculo: T): void{
        this.veiculosLista.push(veiculo);
        console.log("Veículo adcionado com sucesso")
    }

    //  metodo que remove um veiculo existente pelo seu index
    // @ param veiculo T
    public remover(veiculo: T): void{
        const index = this.veiculosLista.indexOf(veiculo)
        this.veiculosLista.splice(index, 1);
        console.log("Veículo removido com sucesso")
    }

    public listarVeiculos(): void{
        console.log("Lista de Veículos")
        this.veiculosLista.forEach(
            (veiculo, index) => {console.log(`${index + 1}: `, veiculo)}
        );
    }
}