import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyContentComponent } from './property-content.component';

describe('PropertyContentComponent', () => {
  let component: PropertyContentComponent;
  let fixture: ComponentFixture<PropertyContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PropertyContentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PropertyContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
