import { Component, OnInit, Input, Output, EventEmitter, ElementRef } from '@angular/core';
import { Produto, ProdutoService } from '../produto.service';

declare const $;
@Component({
  selector: 'excluir-produto-modal',
  templateUrl: './excluir-produto-modal.component.html',
  styleUrls: ['./excluir-produto-modal.component.css']
})
export class ExcluirProdutoModalComponent implements OnInit {

  //usa o decorator para chamar um produto cadastrado
  @Input()
  produto: Produto;

  //usa o evento para gerar o comando de exclusão
  @Output()
  onDestroy: EventEmitter<Produto> = new EventEmitter<Produto>();
  

  constructor(private element: ElementRef, private produtoService: ProdutoService) { }

  ngOnInit() {
  }

  //evento de exclusão
  destroy(){
    const copy = Object.assign({}, this.produto);
    this.produtoService.destroyProduto(this.produto);
    this.onDestroy.emit(copy);
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
      return nativeElement.firstChild as HTMLElement;
  }

}
