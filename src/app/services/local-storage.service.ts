import { Injectable } from '@angular/core';
import { LocalStorageSettings } from '@shared/enums/local-storage-settings';
import { Theme } from '@shared/enums/theme.enum';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  constructor() {}

  setItem(key: LocalStorageSettings, data: any): void {
    localStorage.setItem(key, JSON.stringify(data));
  }

  getTheme(key: LocalStorageSettings.theme): Theme | null {
    const hasTheme = localStorage.getItem(key);

    if (!hasTheme) {
      return null;
    }

    return JSON.parse(hasTheme) as Theme;
  }
}
