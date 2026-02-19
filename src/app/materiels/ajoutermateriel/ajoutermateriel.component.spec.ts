import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutermaterielComponent } from './ajoutermateriel.component';

describe('AjoutermaterielComponent', () => {
  let component: AjoutermaterielComponent;
  let fixture: ComponentFixture<AjoutermaterielComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutermaterielComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjoutermaterielComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
