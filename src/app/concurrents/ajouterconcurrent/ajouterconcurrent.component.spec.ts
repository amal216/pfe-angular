import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterconcurrentComponent } from './ajouterconcurrent.component';

describe('AjouterconcurrentComponent', () => {
  let component: AjouterconcurrentComponent;
  let fixture: ComponentFixture<AjouterconcurrentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterconcurrentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjouterconcurrentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
