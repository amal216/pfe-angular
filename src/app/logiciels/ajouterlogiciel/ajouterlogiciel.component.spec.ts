import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterLogicielComponent } from './ajouterlogiciel.component';

describe('AjouterlogicielComponent', () => {
  let component: AjouterLogicielComponent;
  let fixture: ComponentFixture<AjouterLogicielComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterLogicielComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjouterLogicielComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
