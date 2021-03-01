import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxHeaderComponent } from './ngx-header.component';

describe('NgxHeaderComponent', () => {
  let component: NgxHeaderComponent;
  let fixture: ComponentFixture<NgxHeaderComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [NgxHeaderComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });
});
