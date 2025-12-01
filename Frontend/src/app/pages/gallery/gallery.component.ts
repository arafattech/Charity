import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface GalleryItem {
  id: number;
  type: 'image' | 'video';
  src: string;
  thumbnail: string;
  title: string;
  category: string;
}

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss'
})
export class GalleryComponent {
  activeFilter: 'all' | 'image' | 'video' = 'all';
  
  galleryItems: GalleryItem[] = [
    {
      id: 1,
      type: 'image',
      src: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=800&auto=format&fit=crop',
      thumbnail: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=800&auto=format&fit=crop',
      title: 'বন্যা দুর্গতদের মাঝে ত্রাণ বিতরণ',
      category: 'ত্রাণ বিতরণ'
    },
    {
      id: 2,
      type: 'image',
      src: 'https://images.unsplash.com/photo-1593113598332-cd288d649433?q=80&w=800&auto=format&fit=crop',
      thumbnail: 'https://images.unsplash.com/photo-1593113598332-cd288d649433?q=80&w=800&auto=format&fit=crop',
      title: 'শীতবস্ত্র বিতরণ কর্মসূচি',
      category: 'শীতবস্ত্র'
    },
    {
      id: 3,
      type: 'video',
      src: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      thumbnail: 'https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?q=80&w=800&auto=format&fit=crop',
      title: 'বিনামূল্যে চিকিৎসা সেবা ক্যাম্প',
      category: 'চিকিৎসা'
    },
    {
      id: 4,
      type: 'image',
      src: 'https://images.unsplash.com/photo-1542601906990-b4d3fb7d5b43?q=80&w=800&auto=format&fit=crop',
      thumbnail: 'https://images.unsplash.com/photo-1542601906990-b4d3fb7d5b43?q=80&w=800&auto=format&fit=crop',
      title: 'বৃক্ষরোপণ কর্মসূচি ২০২৪',
      category: 'পরিবেশ'
    },
    {
      id: 5,
      type: 'image',
      src: 'https://images.unsplash.com/photo-1555421689-491a97ff2040?q=80&w=800&auto=format&fit=crop',
      thumbnail: 'https://images.unsplash.com/photo-1555421689-491a97ff2040?q=80&w=800&auto=format&fit=crop',
      title: 'ইফতার মাহফিল আয়োজন',
      category: 'রমজান'
    },
    {
      id: 6,
      type: 'video',
      src: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      thumbnail: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?q=80&w=800&auto=format&fit=crop',
      title: 'স্বাবলম্বীকরণ প্রকল্প উদ্বোধন',
      category: 'প্রকল্প'
    },
    {
      id: 7,
      type: 'image',
      src: 'https://images.unsplash.com/photo-1593113598332-cd288d649433?q=80&w=800&auto=format&fit=crop',
      thumbnail: 'https://images.unsplash.com/photo-1593113598332-cd288d649433?q=80&w=800&auto=format&fit=crop',
      title: 'কুরবানি কার্যক্রম',
      category: 'কুরবানি'
    },
    {
      id: 8,
      type: 'image',
      src: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=800&auto=format&fit=crop',
      thumbnail: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=800&auto=format&fit=crop',
      title: 'শিক্ষা উপকরণ বিতরণ',
      category: 'শিক্ষা'
    }
  ];

  get filteredItems() {
    if (this.activeFilter === 'all') {
      return this.galleryItems;
    }
    return this.galleryItems.filter(item => item.type === this.activeFilter);
  }

  setFilter(filter: 'all' | 'image' | 'video') {
    this.activeFilter = filter;
  }

  loadMore() {
    // Implement load more logic here
    console.log('Loading more items...');
  }
}
