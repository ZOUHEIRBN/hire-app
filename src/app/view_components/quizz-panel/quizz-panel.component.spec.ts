import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizzPanelComponent } from './quizz-panel.component';

describe('QuizzComponent', () => {
  let component: QuizzPanelComponent;
  let fixture: ComponentFixture<QuizzPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuizzPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizzPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
