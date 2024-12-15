import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CooperHewittComponent } from './cooper-hewitt.component';

describe('CooperHewittComponent', () => {
  let component: CooperHewittComponent;
  let fixture: ComponentFixture<CooperHewittComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CooperHewittComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CooperHewittComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
