import { Component, OnInit, Renderer2 } from '@angular/core';
import { mdiWeatherNight, mdiWeatherSunny } from '@mdi/js';
import { LocalStorageSettings } from '@shared/enums/local-storage-settings';
import { Theme } from '@shared/enums/theme.enum';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'ngx-change-theme',
  templateUrl: 'ngx-change-theme.component.html',
  styleUrls: ['ngx-change-theme.component.scss'],
})
export class NgxChangeThemeComponent implements OnInit {
  theme: Theme = Theme.light;
  themeEnum = Theme;
  sunnyIcon = mdiWeatherSunny;
  nigthIcon = mdiWeatherNight;

  constructor(private renderer: Renderer2, private localStorageService: LocalStorageService) {}

  get isDark() {
    return this.theme === Theme.dark;
  }

  set localStorageTheme(theme: Theme) {
    this.localStorageService.setItem(LocalStorageSettings.theme, theme);
  }

  ngOnInit(): void {
    const hasTheme = this.localStorageService.getTheme(LocalStorageSettings.theme);

    if (hasTheme) {
      this.theme = hasTheme;
    }

    this.onChangeTheme(this.theme);
  }

  onChangeTheme(theme: Theme) {
    this.theme = theme;
    this.localStorageTheme = this.theme;

    if (this.isDark) {
      this.renderer.addClass(document.body, Theme.dark);
    } else {
      this.renderer.removeClass(document.body, Theme.dark);
    }
  }
}
