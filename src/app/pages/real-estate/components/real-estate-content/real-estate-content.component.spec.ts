import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RealEstateContentComponent } from './real-estate-content.component';

describe('RealEstateContentComponent', () => {
  let component: RealEstateContentComponent;
  let fixture: ComponentFixture<RealEstateContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RealEstateContentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RealEstateContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
