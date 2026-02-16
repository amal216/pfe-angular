import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConcurrentsComponent } from './concurrents.component';

describe('ConcurrentsComponent', () => {
  let component: ConcurrentsComponent;
  let fixture: ComponentFixture<ConcurrentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConcurrentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConcurrentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
