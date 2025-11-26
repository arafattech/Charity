import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  author: string;
  category: string;
}

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.scss'
})
export class BlogComponent {
  blogPosts: BlogPost[] = [
    {
      id: 1,
      title: 'রমজানের প্রস্তুতি ও করণীয়',
      excerpt: 'রমজান মাস মুমিনের জন্য রহমত, মাগফিরাত ও নাজাতের মাস। এই মাসের পবিত্রতা রক্ষা ও সর্বোচ্চ সদ্ব্যবহার করার জন্য আমাদের পূর্বপ্রস্তুতি গ্রহণ করা প্রয়োজন।',
      image: 'https://images.unsplash.com/photo-1555421689-491a97ff2040?q=80&w=800&auto=format&fit=crop',
      date: '১০ মার্চ ২০২৪',
      author: 'আব্দুল্লাহ আল মামুন',
      category: 'ইসলামি জীবন'
    },
    {
      id: 2,
      title: 'যাকাত: আর্থ-সামাজিক উন্নয়নে এর ভূমিকা',
      excerpt: 'যাকাত ইসলামের পাঁচটি স্তম্ভের একটি। এটি কেবল ধর্মীয় ইবাদত নয়, বরং একটি শক্তিশালী অর্থনৈতিক ব্যবস্থা যা সমাজের বৈষম্য দূর করতে সাহায্য করে।',
      image: 'https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?q=80&w=800&auto=format&fit=crop',
      date: '০৫ মার্চ ২০২৪',
      author: 'ড. মোহাম্মদ ইউসুফ',
      category: 'অর্থনীতি'
    },
    {
      id: 3,
      title: 'শিশুদের নৈতিক শিক্ষা ও আমাদের দায়িত্ব',
      excerpt: 'আজকের শিশুরাই আগামী দিনের ভবিষ্যৎ। তাদের সঠিক নৈতিক শিক্ষায় শিক্ষিত করে গড়ে তোলা আমাদের সকলের দায়িত্ব।',
      image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=800&auto=format&fit=crop',
      date: '২৮ ফেব্রুয়ারি ২০২৪',
      author: 'ফাতেমা খাতুন',
      category: 'শিক্ষা'
    },
    {
      id: 4,
      title: 'পরিবেশ রক্ষায় ইসলামের নির্দেশনা',
      excerpt: 'ইসলাম পরিবেশ সংরক্ষণের ওপর বিশেষ গুরুত্বারোপ করেছে। গাছ লাগানো, পানি অপচয় না করা এবং পরিবেশ দূষণ রোধে আমাদের সচেতন হতে হবে।',
      image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb7d5b43?q=80&w=800&auto=format&fit=crop',
      date: '২০ ফেব্রুয়ারি ২০২৪',
      author: 'আহমদ আলী',
      category: 'পরিবেশ'
    },
    {
      id: 5,
      title: 'সুস্থ সমাজ গঠনে পারিবারিক বন্ধন',
      excerpt: 'একটি সুস্থ ও সুন্দর সমাজ গঠনে পারিবারিক বন্ধনের গুরুত্ব অপরিসীম। পরিবারের সদস্যদের মধ্যে পারস্পরিক শ্রদ্ধা ও ভালোবাসা বজায় রাখা জরুরি।',
      image: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?q=80&w=800&auto=format&fit=crop',
      date: '১৫ ফেব্রুয়ারি ২০২৪',
      author: 'সাদিয়া ইসলাম',
      category: 'সমাজ'
    },
    {
      id: 6,
      title: 'দান-সদকার ফজিলত ও গুরুত্ব',
      excerpt: 'দান-সদকা মানুষের বিপদ-আপদ দূর করে এবং রিজিকে বরকত দান করে। নিয়মিত দান করার মাধ্যমে আমরা আল্লাহর সন্তুষ্টি অর্জন করতে পারি।',
      image: 'https://images.unsplash.com/photo-1593113598332-cd288d649433?q=80&w=800&auto=format&fit=crop',
      date: '১০ ফেব্রুয়ারি ২০২৪',
      author: 'মুহাম্মদ হাসান',
      category: 'দান ও সদকা'
    }
  ];

  currentPage = 1;
  itemsPerPage = 6;

  get totalPages(): number {
    return Math.ceil(this.blogPosts.length / this.itemsPerPage);
  }

  onPageChange(page: number): void {
    this.currentPage = page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
