import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouteravisclientComponent } from './ajouteravisclient.component';

describe('AjouteravisclientComponent', () => {
  let component: AjouteravisclientComponent;
  let fixture: ComponentFixture<AjouteravisclientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouteravisclientComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjouteravisclientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
