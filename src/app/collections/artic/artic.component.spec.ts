import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticComponent } from './artic.component';

describe('ArticComponent', () => {
  let component: ArticComponent;
  let fixture: ComponentFixture<ArticComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArticComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
