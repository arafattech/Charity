import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  projects = [
    {
      title: 'ইসলামিক শিক্ষা কার্যক্রম',
      description: 'কুরআন ও হাদিসের শিক্ষা প্রদান এবং ইসলামিক জ্ঞান বিতরণের মাধ্যমে সমাজে সচেতনতা তৈরি করা।',
      beneficiaries: '৫,০০০+ শিক্ষার্থী',
      location: 'সারাদেশ',
      icon: '<svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>'
    },
    {
      title: 'দাওয়াহ ও প্রচার',
      description: 'ইসলামের সঠিক বার্তা মানুষের কাছে পৌঁছে দেওয়া এবং ভ্রান্ত ধারণা দূর করা।',
      beneficiaries: '১০,০০০+ মানুষ',
      location: '২৫+ জেলা',
      icon: '<svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 2L2 7l10 5 10-5-10-5z"></path><path d="M2 17l10 5 10-5M2 12l10 5 10-5"></path></svg>'
    },
    {
      title: 'দারিদ্র্য বিমোচন',
      description: 'দরিদ্র ও অসহায় মানুষদের আর্থিক সহায়তা এবং কর্মসংস্থানের ব্যবস্থা করা।',
      beneficiaries: '৩,০০০+ পরিবার',
      location: 'গ্রামীণ এলাকা',
      icon: '<svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>'
    },
    {
      title: 'স্বাস্থ্যসেবা কার্যক্রম',
      description: 'বিনামূল্যে চিকিৎসা সেবা এবং স্বাস্থ্য সচেতনতা কার্যক্রম পরিচালনা।',
      beneficiaries: '২,০০০+ রোগী',
      location: 'শহর ও গ্রাম',
      icon: '<svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M22 12h-4l-3 9L9 3l-3 9H2"></path></svg>'
    },
    {
      title: 'এতিম সহায়তা',
      description: 'এতিম শিশুদের শিক্ষা, খাদ্য এবং আশ্রয়ের ব্যবস্থা করা।',
      beneficiaries: '১,৫০০+ শিশু',
      location: 'বিভিন্ন জেলা',
      icon: '<svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline></svg>'
    },
    {
      title: 'পানি সরবরাহ প্রকল্প',
      description: 'বিশুদ্ধ পানির ব্যবস্থা করা এবং টিউবওয়েল স্থাপন করা।',
      beneficiaries: '৮০০+ পরিবার',
      location: 'প্রত্যন্ত অঞ্চল',
      icon: '<svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"></path></svg>'
    }
  ];
}

