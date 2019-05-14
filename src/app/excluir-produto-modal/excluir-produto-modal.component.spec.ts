import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcluirProdutoModalComponent } from './excluir-produto-modal.component';

describe('ExcluirProdutoModalComponent', () => {
  let component: ExcluirProdutoModalComponent;
  let fixture: ComponentFixture<ExcluirProdutoModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExcluirProdutoModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExcluirProdutoModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
