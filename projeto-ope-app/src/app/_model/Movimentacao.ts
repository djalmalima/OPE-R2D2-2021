export class Movimentacao{
    public id = null;

    constructor(
        public fornecedorId: number ,
        public produtoId : number, 
        public dataMovimentacao: Date, 
        public movimentacaoTipo : String,
        public quantidade: number,         
    ) {}
}