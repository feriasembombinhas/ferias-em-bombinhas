import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeetBombinhasComponent } from './meet-bombinhas.component';

describe('MeetBombinhasComponent', () => {
  let component: MeetBombinhasComponent;
  let fixture: ComponentFixture<MeetBombinhasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MeetBombinhasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MeetBombinhasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
