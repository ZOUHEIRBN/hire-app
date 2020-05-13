import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewJobDemandComponent } from './new-job-demand.component';

describe('NewJobDemandComponent', () => {
  let component: NewJobDemandComponent;
  let fixture: ComponentFixture<NewJobDemandComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewJobDemandComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewJobDemandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
