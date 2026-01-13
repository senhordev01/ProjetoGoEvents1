import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilPessoal } from './perfil-pessoal';

describe('PerfilPessoal', () => {
  let component: PerfilPessoal;
  let fixture: ComponentFixture<PerfilPessoal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PerfilPessoal]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PerfilPessoal);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
