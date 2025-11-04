import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarProjetos } from './criar-projetos';

describe('CriarProjetos', () => {
  let component: CriarProjetos;
  let fixture: ComponentFixture<CriarProjetos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CriarProjetos]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CriarProjetos);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
