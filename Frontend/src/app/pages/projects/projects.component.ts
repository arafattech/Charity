import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-projects-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsPageComponent {
  projects = [
    {
      title: 'ইসলামিক শিক্ষা কার্যক্রম',
      description: 'কুরআন ও হাদিসের শিক্ষা প্রদান এবং ইসলামিক জ্ঞান বিতরণের মাধ্যমে সমাজে সচেতনতা তৈরি করা।',
      beneficiaries: '৫,০০০+ শিক্ষার্থী',
      location: 'সারাদেশ',
      image: '/assets/projects/Education.png'
    },
    {
      title: 'দাওয়াহ ও প্রচার',
      description: 'ইসলামের সঠিক বার্তা মানুষের কাছে পৌঁছে দেওয়া এবং ভ্রান্ত ধারণা দূর করা।',
      beneficiaries: '১০,০০০+ মানুষ',
      location: '২৫+ জেলা',
      image: '/assets/projects/dawah.png'
    },
    {
      title: 'দারিদ্র্য বিমোচন',
      description: 'দরিদ্র ও অসহায় মানুষদের আর্থিক সহায়তা এবং কর্মসংস্থানের ব্যবস্থা করা।',
      beneficiaries: '৩,০০০+ পরিবার',
      location: 'গ্রামীণ এলাকা',
      image: '/assets/projects/poverty.png'
    },
    {
      title: 'স্বাস্থ্যসেবা কার্যক্রম',
      description: 'বিনামূল্যে চিকিৎসা সেবা এবং স্বাস্থ্য সচেতনতা কার্যক্রম পরিচালনা।',
      beneficiaries: '২,০০০+ রোগী',
      location: 'শহর ও গ্রাম',
      image: '/assets/projects/health.png'
    },
    {
      title: 'এতিম সহায়তা',
      description: 'এতিম শিশুদের শিক্ষা, খাদ্য এবং আশ্রয়ের ব্যবস্থা করা।',
      beneficiaries: '১,৫০০+ শিশু',
      location: 'বিভিন্ন জেলা',
      image: '/assets/projects/orphan.png'
    },
    {
      title: 'পানি সরবরাহ প্রকল্প',
      description: 'বিশুদ্ধ পানির ব্যবস্থা করা এবং টিউবওয়েল স্থাপন করা।',
      beneficiaries: '৮০০+ পরিবার',
      location: 'প্রত্যন্ত অঞ্চল',
      image: '/assets/projects/water.png'
    },
    {
      title: 'শীতবস্ত্র বিতরণ',
      description: 'শীতকালে দরিদ্র মানুষদের মাঝে শীতবস্ত্র বিতরণ করা।',
      beneficiaries: '৪,০০০+ মানুষ',
      location: 'উত্তরাঞ্চল',
      image: 'https://images.unsplash.com/photo-1451471016731-e963a8588be8?auto=format&fit=crop&w=900&q=80'
    },
    {
      title: 'কুরবানীর চামড়া সংগ্রহ',
      description: 'কুরবানীর চামড়া সংগ্রহ করে দাতব্য কাজে ব্যবহার করা।',
      beneficiaries: '২,৫০০+ পরিবার',
      location: 'সারাদেশ',
      image: 'https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&w=900&q=80'
    },
    {
      title: 'মসজিদ নির্মাণ',
      description: 'প্রত্যন্ত অঞ্চলে মসজিদ নির্মাণ ও সংস্কার কাজ।',
      beneficiaries: '১০০+ মসজিদ',
      location: 'গ্রামীণ এলাকা',
      image: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=900&q=80'
    }
  ];
}
