import { Component, OnInit } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';
import { Language } from '@shared/enums/language.enum';
import { LocalStorageSettings } from '@shared/enums/local-storage-settings';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'ngx-change-language',
  templateUrl: 'ngx-change-language.component.html',
  styleUrls: ['ngx-change-language.component.scss'],
})
export class NgxchangeLanguageComponent implements OnInit {
  language: Language = Language.en;

  constructor(
    private translocoService: TranslocoService,
    private localStorageService: LocalStorageService
  ) {}

  get isEnglish() {
    return this.language === Language.en;
  }

  set localStorageLanguage(language: Language) {
    this.localStorageService.setItem(LocalStorageSettings.language, language);
  }

  ngOnInit(): void {
    const hasLanguage = this.localStorageService.getLanguage(LocalStorageSettings.language);

    if (hasLanguage) {
      this.language = hasLanguage;
    }

    this.onChangeLanguage(this.language);
  }

  onToggleLanguage(): void {
    const language = this.isEnglish ? Language.ptBR : Language.en;
    this.onChangeLanguage(language);
  }

  onChangeLanguage(language: Language): void {
    this.language = language;
    this.localStorageLanguage = this.language;
    this.translocoService.setActiveLang(this.language);
  }
}
