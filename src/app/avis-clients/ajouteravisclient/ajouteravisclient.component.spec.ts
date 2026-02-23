import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterAvisClientComponent } from './ajouteravisclient.component';

describe('AjouteravisclientComponent', () => {
  let component: AjouterAvisClientComponent;
  let fixture: ComponentFixture<AjouterAvisClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterAvisClientComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjouterAvisClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
