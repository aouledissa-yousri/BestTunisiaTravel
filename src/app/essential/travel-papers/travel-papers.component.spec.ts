import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelPapersComponent } from './travel-papers.component';

describe('TravelPapersComponent', () => {
  let component: TravelPapersComponent;
  let fixture: ComponentFixture<TravelPapersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TravelPapersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TravelPapersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
