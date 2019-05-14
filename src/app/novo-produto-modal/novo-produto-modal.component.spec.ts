import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NovoProdutoModalComponent } from './novo-produto-modal.component';

describe('NovoProdutoModalComponent', () => {
  let component: NovoProdutoModalComponent;
  let fixture: ComponentFixture<NovoProdutoModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NovoProdutoModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NovoProdutoModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
