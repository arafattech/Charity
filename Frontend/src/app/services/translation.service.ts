import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export type Language = 'en' | 'bn';

interface Translations {
  [key: string]: {
    en: string;
    bn: string;
  };
}

@Injectable({
  providedIn: 'root'
})
export class TranslationService {
  private currentLanguage = new BehaviorSubject<Language>('bn');
  public currentLanguage$ = this.currentLanguage.asObservable();

  private translations: Translations = {
    // Hero Section
    'hero.title': {
      en: 'For the Ummah, With the Sunnah',
      bn: 'উম্মাহর স্বার্থে, সুন্নাহর সাথে'
    },
    'hero.subtitle': {
      en: 'An organization dedicated to Islamic education, Dawah and social welfare. We are committed to bringing positive change in society in the light of Quran and Sunnah.',
      bn: 'ইসলামিক শিক্ষা, দাওয়াহ এবং সামাজিক কল্যাণে নিবেদিত একটি সংস্থা। আমরা কুরআন ও সুন্নাহর আলোকে সমাজে ইতিবাচক পরিবর্তন আনতে প্রতিশ্রুতিবদ্ধ।'
    },
    'hero.donate': {
      en: 'Donate',
      bn: 'দান করুন'
    },
    'hero.projects': {
      en: 'Our Projects',
      bn: 'আমাদের প্রকল্পসমূহ'
    },
    'hero.programs': {
      en: 'Ongoing Programs',
      bn: 'চলমান প্রোগ্রাম'
    },
    // Navigation
    'nav.home': {
      en: 'Home',
      bn: 'হোম'
    },
    'nav.about': {
      en: 'About',
      bn: 'আমাদের সম্পর্কে'
    },
    'nav.projects': {
      en: 'Projects',
      bn: 'কার্যক্রমসমূহ'
    },
    'nav.getInvolved': {
      en: 'Get Involved',
      bn: 'যুক্ত হন'
    },
    'nav.contact': {
      en: 'Contact',
      bn: 'যোগাযোগ'
    },
    'nav.blog': {
      en: 'Blog',
      bn: 'ব্লগ'
    },
    'nav.donate': {
      en: 'Donate',
      bn: 'দান করুন'
    }
  };

  constructor() {
    // Load saved language from localStorage
    const savedLang = localStorage.getItem('language') as Language;
    if (savedLang && (savedLang === 'en' || savedLang === 'bn')) {
      this.currentLanguage.next(savedLang);
    }
  }

  getCurrentLanguage(): Language {
    return this.currentLanguage.value;
  }

  setLanguage(lang: Language): void {
    this.currentLanguage.next(lang);
    localStorage.setItem('language', lang);
  }

  translate(key: string): string {
    const translation = this.translations[key];
    if (!translation) {
      console.warn(`Translation key not found: ${key}`);
      return key;
    }
    return translation[this.currentLanguage.value];
  }

  // Helper method to get translation as observable
  get(key: string): string {
    return this.translate(key);
  }
}
