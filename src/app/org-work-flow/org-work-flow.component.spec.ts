import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrgWorkFlowComponent } from './org-work-flow.component';

describe('OrgWorkFlowComponent', () => {
  let component: OrgWorkFlowComponent;
  let fixture: ComponentFixture<OrgWorkFlowComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrgWorkFlowComponent]
    });
    fixture = TestBed.createComponent(OrgWorkFlowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
