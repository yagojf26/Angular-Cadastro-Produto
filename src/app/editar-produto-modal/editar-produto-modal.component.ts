import { Component, OnInit, Input, Output, EventEmitter, ElementRef } from '@angular/core';
import { Produto,ProdutoService } from '../produto.service';

//declara a variavel para que o angular a ignore, pois vem do Jquery
declare const $;

@Component({
  selector: 'editar-produto-modal',
  templateUrl: './editar-produto-modal.component.html',
  styleUrls: ['./editar-produto-modal.component.css']
})

export class EditarProdutoModalComponent implements OnInit {

  //usando um decorator a variavel irá exibir os dados dentro do modal
  @Input()
  produto: Produto;

  @Output()
  onSubmit: EventEmitter<Produto> = new EventEmitter<Produto>();

  constructor( private element: ElementRef) { }

  ngOnInit() {
  }

  //criando função para adicionar um novo produto

  addProduto(event){
    const copy = Object.assign({},this.produto);
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
