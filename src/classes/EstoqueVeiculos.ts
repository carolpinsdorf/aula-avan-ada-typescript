

// Classe generica para controlar o estoque de veiculos no formato dicionario
export class EstoqueVeiculos<T>{
    private estoque:{
        modelo: string,
        quantidade: number
    }[] = [];

    // metodo sem retorno que adiciona um novo veiculo ao estoque
    // @ param modelo: string
    //@ param quantidade: number
    public adicionarEstoque(modelo: string, quantidade:number): void{
        //busca se o modelo inputado ja existe no estoque
        const veiculoExistente = this.estoque.find(
            veiculo => veiculo.modelo === modelo
        );
        
        if(veiculoExistente){
            // se o modelo do veiculo ja existe, incrementa a quantidade apenas
            veiculoExistente.quantidade += quantidade;
        }else{
            // se não, cria um dicionario novo com o modelo e quantiade
            this.estoque.push({modelo, quantidade})
        }
        console.log("Veiculo adicionado no estoque")
    }

    // metodo sem retorno que remove um veiculo existente no estoque
    // @ param modelo: string
    //@ param quantidade: number
    public removerEstoque(modelo: string, quantidade: number): void{
        //busca o modelo inputado no estoque
        const veiculoRemovido = this.estoque.find(
            veiculo => veiculo.modelo === modelo
        );

        if(veiculoRemovido){
            veiculoRemovido.quantidade -= quantidade;
            if (veiculoRemovido.quantidade <= 0){
                this.estoque = this.estoque.filter(
                    veiculo => veiculo.modelo !== modelo
                );
            };
        };
        console.log("Veículo removido do estoque")
    }

    // metodo sem retorno que traz as quatidades de um determinado modelo no estoque
    // @ param modelo: string
    public consultarEstoque(modelo: string){
        const modeloBuscado = this.estoque.find(
            veiculo => veiculo.modelo === modelo
        );

        if(modeloBuscado){
            console.log(`Modelo ${modelo}: ${modeloBuscado.quantidade}`)
        }else{
            console.log("Modelo não encontrado")
        }
    }
}