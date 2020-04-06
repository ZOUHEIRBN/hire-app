import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserThumbnailComponent } from './user-thumbnail.component';

describe('UserComponent', () => {
  let component: UserThumbnailComponent;
  let fixture: ComponentFixture<UserThumbnailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserThumbnailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserThumbnailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});