import { Component, inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  imports: [],
  selector: 'app-language',
  styleUrl: './language.scss',
  templateUrl: './language.html',
})
export class Language {
  private translateService = inject(TranslateService);
  protected readonly languageCodes = ['en', 'de', 'tr'];
  protected activeLanguage = this.translateService.currentLang;

  constructor() {
    this.restoreLanguage();
  }

  protected changeLanguage(languageCode: string) {
    this.translateService.use(languageCode);
    try {
      localStorage.setItem('language', languageCode);
    } catch {}
  }

  private restoreLanguage() {
    try {
      const SAVED_LANGUAGE = localStorage.getItem('language');
      if (SAVED_LANGUAGE && this.languageCodes.includes(SAVED_LANGUAGE)) {
        this.translateService.use(SAVED_LANGUAGE);
      }
    } catch {}
  }
}
