import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeetInfoComponent } from './meet-info.component';

describe('MeetInfoComponent', () => {
  let component: MeetInfoComponent;
  let fixture: ComponentFixture<MeetInfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MeetInfoComponent]
    });
    fixture = TestBed.createComponent(MeetInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
