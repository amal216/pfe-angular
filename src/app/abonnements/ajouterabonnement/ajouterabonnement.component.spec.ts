import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterabonnementComponent } from './ajouterabonnement.component';

describe('AjouterabonnementComponent', () => {
  let component: AjouterabonnementComponent;
  let fixture: ComponentFixture<AjouterabonnementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterabonnementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjouterabonnementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
