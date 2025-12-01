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
      icon: '/assets/about/islam.png'
    },
    {
      title: 'সমাজসেবা',
      description: 'দরিদ্র, অসহায় ও বিপদগ্রস্ত মানুষদের পাশে দাঁড়ানো এবং তাদের সাহায্য করা।',
      icon: '/assets/about/social_service.png'
    },
    {
      title: 'দাওয়াহ কার্যক্রম',
      description: 'ইসলামের সঠিক বার্তা প্রচার করা এবং মানুষকে সত্যের পথে আহ্বান করা।',
      icon: '/assets/about/daawah.png'
    },
    {
      title: 'শিক্ষা ও প্রশিক্ষণ',
      description: 'যুবকদের ইসলামিক শিক্ষা ও দক্ষতা উন্নয়নে প্রশিক্ষণ প্রদান করা।',
      icon: '/assets/about/training.png'
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
      icon: '/assets/about/transparency.png'
    },
    {
      title: 'অভিজ্ঞ টিম',
      description: 'আমাদের রয়েছে দক্ষ ও অভিজ্ঞ কর্মী ও স্বেচ্ছাসেবকদের একটি শক্তিশালী টিম।',
      icon: '/assets/about/team.png'
    },
    {
      title: 'সারাদেশে নেটওয়ার্ক',
      description: 'দেশের বিভিন্ন জেলায় আমাদের শাখা ও কার্যক্রম রয়েছে।',
      icon: '/assets/about/network.png'
    },
    {
      title: 'দীর্ঘমেয়াদী পরিকল্পনা',
      description: 'আমরা স্বল্পমেয়াদী ও দীর্ঘমেয়াদী উভয় ধরনের পরিকল্পনা নিয়ে কাজ করি।',
      icon: '/assets/about/planning.png'
    },
    {
      title: 'কমিউনিটি ভিত্তিক',
      description: 'স্থানীয় কমিউনিটির সাথে মিলে কাজ করি এবং তাদের চাহিদা অনুযায়ী সেবা প্রদান করি।',
      icon: '/assets/about/community.png'
    },
    {
      title: 'নিয়মিত রিপোর্টিং',
      description: 'আমাদের সকল কার্যক্রমের নিয়মিত রিপোর্ট প্রকাশ করি এবং দাতাদের অবহিত রাখি।',
      icon: '/assets/about/reporting.png'
    }
  ];

  teamMembers = [
    {
      name: 'মাওলানা আব্দুল্লাহ আল মাহমুদ',
      role: 'প্রধান উপদেষ্টা',
      description: 'ইসলামিক স্কলার ও দাওয়াহ বিশেষজ্ঞ',
      image: '/assets/about/team/maolona.jpg'
    },
    {
      name: 'ড. মুহাম্মদ ইব্রাহিম',
      role: 'উপদেষ্টা',
      description: 'ইসলামিক ফাইন্যান্স বিশেষজ্ঞ',
      image: '/assets/about/team/doctor.jpg'
    },
    {
      name: 'মাওলানা আবু বকর সিদ্দিক',
      role: 'উপদেষ্টা',
      description: 'কুরআন ও হাদিস গবেষক',
      image: '/assets/about/team/upmolona.jpg'
    },
    {
      name: 'ইঞ্জিনিয়ার মুহাম্মদ আলী',
      role: 'প্রশাসনিক উপদেষ্টা',
      description: 'সংস্থা ব্যবস্থাপনা বিশেষজ্ঞ',
      image: '/assets/about/team/eng.jpg'
    }
  ];
}
