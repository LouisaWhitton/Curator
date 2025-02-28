import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyCollectionComponent } from './my-collection.component';

describe('MyCollectionComponent', () => {
  let component: MyCollectionComponent;
  let fixture: ComponentFixture<MyCollectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyCollectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
