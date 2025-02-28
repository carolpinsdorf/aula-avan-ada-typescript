import { Veiculo } from "./Veiculo";

// criando interface Carro que herda de veiculo
export interface Carro extends Veiculo{
    portas: number
}
