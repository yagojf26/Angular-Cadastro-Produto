import { Component, OnInit } from '@angular/core';
import {Produto, ProdutoService} from '../produto.service'

@Component({
  selector: 'novo-produto',
  templateUrl: './novo-produto.component.html',
  styleUrls: ['./novo-produto.component.css']
})

export class NovoProdutoComponent implements OnInit {

  //criar uma vairiavel para armazenar o produto, um array 
  produto: Produto = {
    nome: '',
    quantidade: 0,
    valor:0,
    tipo:'',
    //data_cadastro: '12/05/2008',
  };

  //o construtor vai receber um produto vindo do serviço
  constructor(private produtoService: ProdutoService) { }

  ngOnInit() {
  }

  //criando função para adicionar um novo produto
  addProduto(event){
    const copy = Object.assign({}, this.produto);
    this.produtoService.addProduto(copy);
  }


}
