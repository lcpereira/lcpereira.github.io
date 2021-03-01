import { Component, EventEmitter, Output } from '@angular/core';
import { mdiWeatherNight, mdiWeatherSunny } from '@mdi/js';
import { Theme } from '@shared/enums/theme.enum';

@Component({
  selector: 'ngx-change-theme',
  templateUrl: 'ngx-change-theme.component.html',
  styleUrls: ['ngx-change-theme.component.scss'],
})
export class NgxChangeThemeComponent {
  @Output() changeToggle = new EventEmitter<boolean>();

  theme: Theme = Theme.light;
  themeEnum = Theme;
  sunnyIcon = mdiWeatherSunny;
  nigthIcon = mdiWeatherNight;

  constructor() {}

  get isDark() {
    return this.theme === Theme.dark;
  }

  onChangeTheme(theme: Theme) {
    this.theme = theme;
    this.changeToggle.emit(this.isDark);
  }
}
