import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterlogicielComponent } from './ajouterlogiciel.component';

describe('AjouterlogicielComponent', () => {
  let component: AjouterlogicielComponent;
  let fixture: ComponentFixture<AjouterlogicielComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterlogicielComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjouterlogicielComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
