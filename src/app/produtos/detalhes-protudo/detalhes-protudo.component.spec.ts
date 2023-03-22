import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalhesProtudoComponent } from './detalhes-protudo.component';

describe('DetalhesProtudoComponent', () => {
  let component: DetalhesProtudoComponent;
  let fixture: ComponentFixture<DetalhesProtudoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalhesProtudoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalhesProtudoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
