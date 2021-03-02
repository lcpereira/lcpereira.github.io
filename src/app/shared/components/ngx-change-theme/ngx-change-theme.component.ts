import { Component, OnInit, Renderer2 } from '@angular/core';
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

  onToggleTheme(): void {
    const theme = this.isDark ? Theme.light : Theme.dark;
    this.onChangeTheme(theme);
  }

  onChangeTheme(theme: Theme): void {
    this.theme = theme;
    this.localStorageTheme = this.theme;

    if (this.isDark) {
      this.renderer.addClass(document.body, Theme.dark);
    } else {
      this.renderer.removeClass(document.body, Theme.dark);
    }
  }
}
