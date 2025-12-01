import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent implements OnInit, OnDestroy {
  private autoSlideInterval: any;
  currentSlide = 0;
  
  allProjects = [
    {
      title: 'ইসলামিক শিক্ষা কার্যক্রম',
      description: 'কুরআন ও হাদিসের শিক্ষা প্রদান এবং ইসলামিক জ্ঞান বিতরণের মাধ্যমে সমাজে সচেতনতা তৈরি করা।',
      beneficiaries: '৫,০০০+ শিক্ষার্থী',
      location: 'সারাদেশ',
      image: 'assets/projects/Education.png'
    },
    {
      title: 'দাওয়াহ ও প্রচার',
      description: 'ইসলামের সঠিক বার্তা মানুষের কাছে পৌঁছে দেওয়া এবং ভ্রান্ত ধারণা দূর করা।',
      beneficiaries: '১০,০০০+ মানুষ',
      location: '২৫+ জেলা',
      image: 'assets/projects/dawah.png'
    },
    {
      title: 'দারিদ্র্য বিমোচন',
      description: 'দরিদ্র ও অসহায় মানুষদের আর্থিক সহায়তা এবং কর্মসংস্থানের ব্যবস্থা করা।',
      beneficiaries: '৩,০০০+ পরিবার',
      location: 'গ্রামীণ এলাকা',
      image: 'assets/projects/poverty.png'
    },
    {
      title: 'স্বাস্থ্যসেবা কার্যক্রম',
      description: 'বিনামূল্যে চিকিৎসা সেবা এবং স্বাস্থ্য সচেতনতা কার্যক্রম পরিচালনা।',
      beneficiaries: '২,০০০+ রোগী',
      location: 'শহর ও গ্রাম',
      image: 'assets/projects/health.png'
    },
    {
      title: 'এতিম সহায়তা',
      description: 'এতিম শিশুদের শিক্ষা, খাদ্য এবং আশ্রয়ের ব্যবস্থা করা।',
      beneficiaries: '১,৫০০+ শিশু',
      location: 'বিভিন্ন জেলা',
      image: 'assets/projects/orphan.png'
    },
    {
      title: 'পানি সরবরাহ প্রকল্প',
      description: 'বিশুদ্ধ পানির ব্যবস্থা করা এবং টিউবওয়েল স্থাপন করা।',
      beneficiaries: '৮০০+ পরিবার',
      location: 'প্রত্যন্ত অঞ্চল',
      image: 'assets/projects/water.png'
    }
  ];

  constructor(private router: Router) {}

  ngOnInit() {
    this.startAutoSlide();
  }

  ngOnDestroy() {
    this.stopAutoSlide();
  }

  get projects() {
    // Show 3 projects at a time
    const start = this.currentSlide;
    const end = start + 3;
    return this.allProjects.slice(start, end);
  }

  startAutoSlide() {
    this.autoSlideInterval = setInterval(() => {
      this.nextSlide();
    }, 3000); // Auto-slide every 3 seconds
  }

  stopAutoSlide() {
    if (this.autoSlideInterval) {
      clearInterval(this.autoSlideInterval);
    }
  }

  nextSlide() {
    this.currentSlide = (this.currentSlide + 3) % this.allProjects.length;
    if (this.currentSlide + 3 > this.allProjects.length) {
      this.currentSlide = 0;
    }
  }

  prevSlide() {
    this.currentSlide = this.currentSlide - 3;
    if (this.currentSlide < 0) {
      this.currentSlide = Math.max(0, this.allProjects.length - 3);
    }
  }

  goToSlide(index: number) {
    this.currentSlide = index * 3;
    this.stopAutoSlide();
    this.startAutoSlide();
  }

  get totalSlides() {
    return Math.ceil(this.allProjects.length / 3);
  }

  get slideIndicators() {
    return Array(this.totalSlides).fill(0).map((_, i) => i);
  }

  navigateToProjects() {
    this.router.navigate(['/projects']);
  }
}
