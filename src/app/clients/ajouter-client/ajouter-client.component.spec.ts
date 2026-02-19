import { ComponentFixture, TestBed } from '@angular/core/testing';

import {AjouterclientComponent } from './ajouter-client.component';

class AjouterClientComponent {
}

describe('AjouterClientComponent', () => {
  let component: AjouterClientComponent;
  let fixture: ComponentFixture<AjouterClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterClientComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjouterClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
