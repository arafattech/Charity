import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  missions = [
    {
      title: 'ইসলামিক শিক্ষা প্রচার',
      description: 'কুরআন ও হাদিসের সঠিক শিক্ষা মানুষের কাছে পৌঁছে দেওয়া এবং ইসলামিক জ্ঞান বিতরণ করা।',
      icon: '<svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>'
    },
    {
      title: 'সমাজসেবা',
      description: 'দরিদ্র, অসহায় ও বিপদগ্রস্ত মানুষদের পাশে দাঁড়ানো এবং তাদের সাহায্য করা।',
      icon: '<svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>'
    },
    {
      title: 'দাওয়াহ কার্যক্রম',
      description: 'ইসলামের সঠিক বার্তা প্রচার করা এবং মানুষকে সত্যের পথে আহ্বান করা।',
      icon: '<svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2L2 7l10 5 10-5-10-5z"></path><path d="M2 17l10 5 10-5M2 12l10 5 10-5"></path></svg>'
    },
    {
      title: 'শিক্ষা ও প্রশিক্ষণ',
      description: 'যুবকদের ইসলামিক শিক্ষা ও দক্ষতা উন্নয়নে প্রশিক্ষণ প্রদান করা।',
      icon: '<svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline></svg>'
    }
  ];

  visions = [
    {
      number: '০১',
      title: 'সমাজে ইসলামের সঠিক শিক্ষা প্রতিষ্ঠা',
      description: 'কুরআন ও সুন্নাহর আলোকে সমাজে সঠিক ইসলামিক শিক্ষা প্রচার ও প্রতিষ্ঠা করা।'
    },
    {
      number: '০২',
      title: 'দারিদ্র্য বিমোচন ও সামাজিক উন্নয়ন',
      description: 'দরিদ্র মানুষদের আর্থিক সহায়তা প্রদান এবং তাদের জীবনমান উন্নয়নে কাজ করা।'
    },
    {
      number: '০৩',
      title: 'যুব সমাজের নৈতিক উন্নয়ন',
      description: 'যুবকদের ইসলামিক মূল্যবোধ ও নৈতিকতা শিক্ষা দিয়ে সুনাগরিক হিসেবে গড়ে তোলা।'
    },
    {
      number: '০৪',
      title: 'সামাজিক সচেতনতা বৃদ্ধি',
      description: 'বিভিন্ন সামাজিক সমস্যা সম্পর্কে মানুষকে সচেতন করা এবং সমাধানের পথ দেখানো।'
    }
  ];

  features = [
    {
      title: 'স্বচ্ছতা ও জবাবদিহিতা',
      description: 'আমরা আমাদের সকল কার্যক্রমে সম্পূর্ণ স্বচ্ছতা ও জবাবদিহিতা নিশ্চিত করি।',
      icon: '<svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>'
    },
    {
      title: 'অভিজ্ঞ টিম',
      description: 'আমাদের রয়েছে দক্ষ ও অভিজ্ঞ কর্মী ও স্বেচ্ছাসেবকদের একটি শক্তিশালী টিম।',
      icon: '<svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>'
    },
    {
      title: 'সারাদেশে নেটওয়ার্ক',
      description: 'দেশের বিভিন্ন জেলায় আমাদের শাখা ও কার্যক্রম রয়েছে।',
      icon: '<svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>'
    },
    {
      title: 'দীর্ঘমেয়াদী পরিকল্পনা',
      description: 'আমরা স্বল্পমেয়াদী ও দীর্ঘমেয়াদী উভয় ধরনের পরিকল্পনা নিয়ে কাজ করি।',
      icon: '<svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>'
    },
    {
      title: 'কমিউনিটি ভিত্তিক',
      description: 'স্থানীয় কমিউনিটির সাথে মিলে কাজ করি এবং তাদের চাহিদা অনুযায়ী সেবা প্রদান করি।',
      icon: '<svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>'
    },
    {
      title: 'নিয়মিত রিপোর্টিং',
      description: 'আমাদের সকল কার্যক্রমের নিয়মিত রিপোর্ট প্রকাশ করি এবং দাতাদের অবহিত রাখি।',
      icon: '<svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>'
    }
  ];

  teamMembers = [
    {
      name: 'মাওলানা আব্দুল্লাহ আল মাহমুদ',
      role: 'প্রধান উপদেষ্টা',
      description: 'ইসলামিক স্কলার ও দাওয়াহ বিশেষজ্ঞ'
    },
    {
      name: 'ড. মুহাম্মদ ইব্রাহিম',
      role: 'উপদেষ্টা',
      description: 'ইসলামিক ফাইন্যান্স বিশেষজ্ঞ'
    },
    {
      name: 'মাওলানা আবু বকর সিদ্দিক',
      role: 'উপদেষ্টা',
      description: 'কুরআন ও হাদিস গবেষক'
    },
    {
      name: 'ইঞ্জিনিয়ার মুহাম্মদ আলী',
      role: 'প্রশাসনিক উপদেষ্টা',
      description: 'সংস্থা ব্যবস্থাপনা বিশেষজ্ঞ'
    }
  ];
}
