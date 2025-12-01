import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-notice',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './notice.component.html',
  styleUrl: './notice.component.scss'
})
export class NoticeComponent {
  notices = [
    {
      title: 'ঈদুল ফিতর ২০২৫ এর ছুটির নোটিশ',
      date: '১৫ মার্চ, ২০২৫',
      description: 'আগামী ঈদুল ফিতর উপলক্ষে আমাদের সকল কার্যক্রম ২০ মার্চ থেকে ২৫ মার্চ পর্যন্ত বন্ধ থাকবে। জরুরী প্রয়োজনে আমাদের হটলাইনে যোগাযোগ করুন।'
    },
    {
      title: 'নতুন শিক্ষা কার্যক্রম চালু',
      date: '১০ মার্চ, ২০২৫',
      description: 'আমরা আগামী মাস থেকে নতুন কুরআন শিক্ষা কার্যক্রম চালু করছি। আগ্রহী শিক্ষার্থীরা আমাদের অফিসে যোগাযোগ করুন।'
    },
    {
      title: 'মাসিক সাধারণ সভা',
      date: '৫ মার্চ, ২০২৫',
      description: 'আগামী ১২ মার্চ শুক্রবার বিকাল ৪টায় মাসিক সাধারণ সভা অনুষ্ঠিত হবে। সকল সদস্যদের উপস্থিত থাকার জন্য অনুরোধ করা হচ্ছে।'
    }
  ];
}
