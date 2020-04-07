import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyThumbnailComponent } from './company-thumbnail.component';

describe('CompanyThumbnailComponent', () => {
  let component: CompanyThumbnailComponent;
  let fixture: ComponentFixture<CompanyThumbnailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyThumbnailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyThumbnailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
