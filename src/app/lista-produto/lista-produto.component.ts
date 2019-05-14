import { Component, OnInit, ViewChild } from '@angular/core';
import { Produto, ProdutoService } from '../produto.service';
import { NovoProdutoComponent } from '../novo-produto/novo-produto.component';
import { NovoProdutoModalComponent } from '../novo-produto-modal/novo-produto-modal.component';
import { EditarProdutoModalComponent } from '../editar-produto-modal/editar-produto-modal.component';
import { ExcluirProdutoModalComponent } from '../excluir-produto-modal/excluir-produto-modal.component';

@Component({
  selector: 'lista-produto',
  templateUrl: './lista-produto.component.html',
  styleUrls: ['./lista-produto.component.css']
})
export class ListaProdutoComponent implements OnInit {

  produto:Produto;

 //habilita a edição
 produtoToEdit : Produto;

 //habilita a exclusão
 produtoToDelete: Produto;

  //mostra a msg ao cadastrar
  showMessageSuccess = false;

  data = new Date();

  @ViewChild(NovoProdutoModalComponent)//pegar uma referencia de um elemento
  produtoNewModal: NovoProdutoModalComponent;

  @ViewChild(EditarProdutoModalComponent)
  produtoEditarModal:NovoProdutoModalComponent;

  @ViewChild(ExcluirProdutoModalComponent)
  produtoExcluirModal: NovoProdutoModalComponent;

  constructor(public produtoService: ProdutoService) { }

  ngOnInit() {
  }
  
//cria um novo Produto
  OpenNewModal(){
    this.produtoNewModal.show();
  }

  onNewProduto(produto:Produto){
    this.produto = produto;
    this.showMessageSuccess = true;
    }

  //edita um produto já cadastrado
  OpenEditModal(produto:Produto){
    this.produtoToEdit = produto;
    this.produtoEditarModal.show();
  }  
onEditProduto(produto:Produto){
  console.log(produto);
  
}

//parte da exclusão de um produto

openDestroyModal(produto: Produto){
  this.produtoToDelete = produto;
  this.produtoExcluirModal.show();
}

onDestroyProduto(produto:Produto){
console.log(produto);

}
}
