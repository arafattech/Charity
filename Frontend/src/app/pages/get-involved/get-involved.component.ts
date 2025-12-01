import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-get-involved',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './get-involved.component.html',
  styleUrl: './get-involved.component.scss'
})
export class GetInvolvedComponent {
  volunteerAreas = [
    {
      name: 'শিক্ষা কার্যক্রম',
      icon: 'https://cdn-icons-png.flaticon.com/512/4228/4228989.png'
    },
    {
      name: 'দাওয়াহ কার্যক্রম',
      icon: 'https://cdn-icons-png.flaticon.com/512/3523/3523063.png'
    },
    {
      name: 'সমাজসেবা',
      icon: 'https://cdn-icons-png.flaticon.com/512/1554/1554401.png'
    },
    {
      name: 'মিডিয়া ও প্রচার',
      icon: 'https://cdn-icons-png.flaticon.com/512/3595/3595455.png'
    },
    {
      name: 'ইভেন্ট ম্যানেজমেন্ট',
      icon: 'https://cdn-icons-png.flaticon.com/512/2991/2991148.png'
    },
    {
      name: 'প্রযুক্তি সহায়তা',
      icon: 'https://cdn-icons-png.flaticon.com/512/1829/1829204.png'
    }
  ];

  currentJobs = [
    {
      title: 'প্রোগ্রাম ম্যানেজার',
      location: 'ঢাকা',
      type: 'ফুল টাইম'
    },
    {
      title: 'কন্টেন্ট রাইটার',
      location: 'রিমোট',
      type: 'পার্ট টাইম'
    },
    {
      title: 'সোশ্যাল মিডিয়া ম্যানেজার',
      location: 'ঢাকা',
      type: 'ফুল টাইম'
    },
    {
      title: 'ফিল্ড অফিসার',
      location: 'বিভিন্ন জেলা',
      type: 'ফুল টাইম'
    }
  ];
}
