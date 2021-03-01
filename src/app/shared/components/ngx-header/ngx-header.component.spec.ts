import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxHeaderComponent } from './ngx-header.component';
import { NgxHeaderModule } from './ngx-header.module';

describe('NgxHeaderComponent', () => {
  let component: NgxHeaderComponent;
  let fixture: ComponentFixture<NgxHeaderComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [NgxHeaderComponent],
        imports: [NgxHeaderModule],
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
