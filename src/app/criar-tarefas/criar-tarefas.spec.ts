import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarTarefas } from './criar-tarefas';

describe('CriarTarefas', () => {
  let component: CriarTarefas;
  let fixture: ComponentFixture<CriarTarefas>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CriarTarefas]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CriarTarefas);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
