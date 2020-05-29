import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewPostPanelComponent } from './new-post-panel.component';

describe('NewPostPanelComponent', () => {
  let component: NewPostPanelComponent;
  let fixture: ComponentFixture<NewPostPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewPostPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewPostPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
