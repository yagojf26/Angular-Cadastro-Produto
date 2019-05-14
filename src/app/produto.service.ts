import { Injectable } from '@angular/core';

//sempre exporta os que for criado no serviço para que todos possam usar

//criando uma interface para o produto
export interface Produto{
  nome: string;
  quantidade: number;
  valor:number
  tipo:string;
  //data_cadastro: Date;
}

@Injectable({
  providedIn: 'root'
})

//criando uma classe que será um array de produtos
export class ProdutoService {
  produto: Produto[] = [];
   constructor() { }

   addProduto(produto: Produto){
     this.produto.push(produto);

   }

   destroyProduto(produto:Produto){
     const index = this.produto.indexOf(produto);
     //vamos usar o splice para apagar o numero 1, com isso apenas o selecionado será apagado.
     this.produto.splice(index,1)

   }
}


