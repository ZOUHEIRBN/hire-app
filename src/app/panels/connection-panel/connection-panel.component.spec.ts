import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnectionPanelComponent } from './connection-panel.component';

describe('ConnectionPanelComponent', () => {
  let component: ConnectionPanelComponent;
  let fixture: ComponentFixture<ConnectionPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConnectionPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConnectionPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
