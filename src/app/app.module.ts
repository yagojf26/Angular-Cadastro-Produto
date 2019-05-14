import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ListaProdutoComponent } from './lista-produto/lista-produto.component';
import { NovoProdutoComponent } from './novo-produto/novo-produto.component';
import { NovoProdutoModalComponent } from './novo-produto-modal/novo-produto-modal.component';
import { EditarProdutoModalComponent } from './editar-produto-modal/editar-produto-modal.component';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { ExcluirProdutoModalComponent } from './excluir-produto-modal/excluir-produto-modal.component';


@NgModule({
  declarations: [
    AppComponent,
    ListaProdutoComponent,
    NovoProdutoComponent,
    NovoProdutoModalComponent,
    EditarProdutoModalComponent,
    ExcluirProdutoModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
