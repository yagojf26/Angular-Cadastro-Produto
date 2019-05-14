import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarProdutoModalComponent } from './editar-produto-modal.component';

describe('EditarProdutoModalComponent', () => {
  let component: EditarProdutoModalComponent;
  let fixture: ComponentFixture<EditarProdutoModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarProdutoModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarProdutoModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
