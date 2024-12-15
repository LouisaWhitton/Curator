import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RijksmuseumComponent } from './rijksmuseum.component';

describe('RijksmuseumComponent', () => {
  let component: RijksmuseumComponent;
  let fixture: ComponentFixture<RijksmuseumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RijksmuseumComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RijksmuseumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
