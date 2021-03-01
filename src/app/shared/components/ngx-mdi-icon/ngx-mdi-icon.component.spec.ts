import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { NgxMdiIconComponent } from './ngx-mdi-icon.component';

describe('NgxMdiIconComponent', () => {
  let component: NgxMdiIconComponent;
  let fixture: ComponentFixture<NgxMdiIconComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [NgxMdiIconComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxMdiIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });
});
