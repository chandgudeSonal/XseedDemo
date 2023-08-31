import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoogleeMeetIntegrationComponent } from './googlee-meet-integration.component';

describe('GoogleeMeetIntegrationComponent', () => {
  let component: GoogleeMeetIntegrationComponent;
  let fixture: ComponentFixture<GoogleeMeetIntegrationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GoogleeMeetIntegrationComponent]
    });
    fixture = TestBed.createComponent(GoogleeMeetIntegrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
