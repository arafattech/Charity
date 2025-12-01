import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Language, TranslationService } from '../../services/translation.service';

@Component({
  selector: 'app-language-switcher',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="flex items-center gap-2 bg-gray-100 rounded-lg p-1">
      <button
        (click)="switchLanguage('bn')"
        [class.bg-white]="currentLanguage === 'bn'"
        [class.shadow-sm]="currentLanguage === 'bn'"
        [class.text-emerald-600]="currentLanguage === 'bn'"
        [class.font-semibold]="currentLanguage === 'bn'"
        class="px-3 py-1.5 text-sm rounded-md transition-all duration-200 hover:bg-white/50">
        বাংলা
      </button>
      <button
        (click)="switchLanguage('en')"
        [class.bg-white]="currentLanguage === 'en'"
        [class.shadow-sm]="currentLanguage === 'en'"
        [class.text-emerald-600]="currentLanguage === 'en'"
        [class.font-semibold]="currentLanguage === 'en'"
        class="px-3 py-1.5 text-sm rounded-md transition-all duration-200 hover:bg-white/50">
        English
      </button>
    </div>
  `,
  styles: []
})
export class LanguageSwitcherComponent {
  currentLanguage: Language = 'bn';

  constructor(private translationService: TranslationService) {
    this.translationService.currentLanguage$.subscribe(lang => {
      this.currentLanguage = lang;
    });
  }

  switchLanguage(lang: Language): void {
    this.translationService.setLanguage(lang);
  }
}
