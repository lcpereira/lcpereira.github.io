import { Injectable } from '@angular/core';
import { Language } from '@shared/enums/language.enum';
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

  getLanguage(key: LocalStorageSettings.language): Language | null {
    const hasLanguage = localStorage.getItem(key);

    if (!hasLanguage) {
      return null;
    }

    return JSON.parse(hasLanguage) as Language;
  }
}
