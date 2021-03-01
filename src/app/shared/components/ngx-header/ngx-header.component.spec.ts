import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { Theme } from '@shared/enums/theme.enum';
import { NgxChangeThemeModule } from '../ngx-change-theme/ngx-change-theme.module';

import { NgxHeaderComponent } from './ngx-header.component';

describe('NgxHeaderComponent', () => {
  let component: NgxHeaderComponent;
  let fixture: ComponentFixture<NgxHeaderComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [NgxHeaderComponent],
        imports: [NgxChangeThemeModule],
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

  it('on changed theme to light', () => {
    spyOn(component.changeTheme, 'emit');

    component.onChangeTheme(false);

    expect(component.theme).toEqual(Theme.light);
    expect(component.changeTheme.emit).toBeCalledWith(Theme.light);
  });

  it('on changed theme to dark', () => {
    spyOn(component.changeTheme, 'emit');

    component.onChangeTheme(true);

    expect(component.theme).toEqual(Theme.dark);
    expect(component.changeTheme.emit).toBeCalledWith(Theme.dark);
  });
});
