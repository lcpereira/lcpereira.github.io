import { Renderer2, Type } from '@angular/core';
import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { Theme } from '@shared/enums/theme.enum';
import { NgxMdiIconModule } from '../ngx-mdi-icon/ngx-mdi-icon.module';
import { NgxChangeThemeComponent } from './ngx-change-theme.component';

describe('NgxChangeThemeComponent', () => {
  let component: NgxChangeThemeComponent;
  let fixture: ComponentFixture<NgxChangeThemeComponent>;
  let renderer: Renderer2;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [NgxChangeThemeComponent],
        imports: [NgxMdiIconModule],
        providers: [Renderer2],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxChangeThemeComponent);
    component = fixture.componentInstance;
    renderer = fixture.componentRef.injector.get<Renderer2>(Renderer2 as Type<Renderer2>);
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should init with dark theme', () => {
    component.localStorageTheme = Theme.dark;

    component.ngOnInit();

    expect(component.isDark).toEqual(true);
  });

  it('should change theme to dark', () => {
    jest.spyOn(renderer, 'addClass');

    component.onChangeTheme(Theme.dark);

    expect(component.isDark).toEqual(true);
    expect(renderer.addClass).toBeCalledWith(document.body, Theme.dark);
  });

  it('should change theme to dark', () => {
    jest.spyOn(renderer, 'removeClass');

    component.localStorageTheme = Theme.dark;
    component.ngOnInit();

    component.onChangeTheme(Theme.light);

    expect(component.isDark).toEqual(false);
    expect(renderer.removeClass).toBeCalledWith(document.body, Theme.dark);
  });

  it('should change toggle theme to dark', () => {
    jest.spyOn(component, 'onChangeTheme');

    component.theme = Theme.light;
    component.onToggleTheme();
    fixture.detectChanges();

    expect(component.isDark).toEqual(true);
    expect(component.onChangeTheme).toBeCalledWith(Theme.dark);
  });

  it('should change toggle theme to light', () => {
    jest.spyOn(component, 'onChangeTheme');

    component.theme = Theme.dark;
    component.onToggleTheme();

    expect(component.isDark).toEqual(false);
    expect(component.onChangeTheme).toBeCalledWith(Theme.light);
  });
});
