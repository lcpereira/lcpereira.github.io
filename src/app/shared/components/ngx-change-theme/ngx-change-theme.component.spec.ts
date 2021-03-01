import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { Theme } from '@shared/enums/theme.enum';
import { NgxMdiIconModule } from '../ngx-mdi-icon/ngx-mdi-icon.module';
import { NgxChangeThemeComponent } from './ngx-change-theme.component';

describe('NgxChangeThemeComponent', () => {
  let component: NgxChangeThemeComponent;
  let fixture: ComponentFixture<NgxChangeThemeComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [NgxChangeThemeComponent],
        imports: [NgxMdiIconModule],
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

  it('should change theme to dark', () => {
    spyOn(component.changeToggle, 'emit');

    component.onChangeTheme(Theme.dark);

    expect(component.isDark).toEqual(true);
    expect(component.changeToggle.emit).toBeCalledWith(true);
  });
});
