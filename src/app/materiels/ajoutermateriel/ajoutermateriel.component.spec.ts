import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterMaterielComponent } from './ajoutermateriel.component';

describe('ajoutermaterielComponent', () => {
  let component: AjouterMaterielComponent;
  let fixture: ComponentFixture<AjouterMaterielComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterMaterielComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjouterMaterielComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
