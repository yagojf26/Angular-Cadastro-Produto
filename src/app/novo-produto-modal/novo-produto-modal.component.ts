import { Component, OnInit, Output,EventEmitter, ElementRef } from '@angular/core';
import { Produto,ProdutoService } from '../produto.service';


//declara a variavel para que o angular a ignore 
declare const $;

@Component({
  selector: 'novo-produto-modal',
  templateUrl: './novo-produto-modal.component.html',
  styleUrls: ['./novo-produto-modal.component.css']
})

export class NovoProdutoModalComponent implements OnInit {

   //criar uma vairiavel para armazenar o produto, um array 
   produto: Produto = {
    nome: '',
    quantidade: 0,
    valor:0,
    tipo:'',
    //data_cadastro: '12/05/2008',
  };

//emissor de evento, onde pode se passar o tipo ou não, caso n queira usar o any
//O decorator Output permite que outra classe use essa ação de saída

@Output()
onSubmit: EventEmitter<Produto> = new EventEmitter<Produto>();

  constructor(private element: ElementRef, private produtoService: ProdutoService) { }

  ngOnInit() {
  }

   //criando função para adicionar um novo produto

   addProduto(event){
     const copy = Object.assign({},this.produto);
     this.produtoService.addProduto(copy);
     this.onSubmit.emit(copy);
     this.hide();
   }

   hide(){
    const divModal = this.getDivModal();
    $(divModal).modal('hide');
  }

  //criando o metodo para chanar o modal
  show(){
      const divModal = this.getDivModal();
      $(divModal).modal('show');
    }
    
  //criando um metodo privado
  private getDivModal(): HTMLElement {
    const nativeElement: HTMLElement = this.element.nativeElement;
    return nativeElement.firstChild.firstChild as HTMLElement;
}
}
