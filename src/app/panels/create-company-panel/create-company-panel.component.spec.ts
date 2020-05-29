import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCompanyPanelComponent } from './create-company-panel.component';

describe('CreateCompanyPanelComponent', () => {
  let component: CreateCompanyPanelComponent;
  let fixture: ComponentFixture<CreateCompanyPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateCompanyPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateCompanyPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
