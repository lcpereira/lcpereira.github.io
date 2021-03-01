import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { NgxChangeThemeComponent } from './ngx-change-theme.component';

describe('NgxChangeThemeComponent', () => {
  let component: NgxChangeThemeComponent;
  let fixture: ComponentFixture<NgxChangeThemeComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [NgxChangeThemeComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxChangeThemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });
});
