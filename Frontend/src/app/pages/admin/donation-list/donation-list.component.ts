import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Donation {
  transactionId: string;
  donorName: string;
  email: string;
  amount: number;
  project: string;
  date: Date;
  status: 'completed' | 'pending' | 'failed';
}

@Component({
  selector: 'app-donation-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './donation-list.component.html',
  styleUrl: './donation-list.component.scss'
})
export class DonationListComponent implements OnInit {
  donations: Donation[] = [];
  filteredDonations: Donation[] = [];
  searchTerm: string = '';
  filterStatus: string = 'all';
  currentPage: number = 1;

  // Stats
  totalDonations: number = 0;
  totalAmount: number = 0;
  totalDonors: number = 0;
  completedDonations: number = 0;

  ngOnInit() {
    this.loadDonations();
    this.calculateStats();
  }

  loadDonations() {
    // Sample data - replace with actual API call
    this.donations = [
      {
        transactionId: 'TXN001234',
        donorName: 'আব্দুল করিম',
        email: 'karim@example.com',
        amount: 5000,
        project: 'Education Support',
        date: new Date('2025-11-28'),
        status: 'completed'
      },
      {
        transactionId: 'TXN001235',
        donorName: 'ফাতিমা খাতুন',
        email: 'fatima@example.com',
        amount: 10000,
        project: 'Health Care',
        date: new Date('2025-11-29'),
        status: 'completed'
      },
      {
        transactionId: 'TXN001236',
        donorName: 'মোহাম্মদ রহিম',
        email: 'rahim@example.com',
        amount: 3000,
        project: 'Water Well',
        date: new Date('2025-11-30'),
        status: 'pending'
      },
      {
        transactionId: 'TXN001237',
        donorName: 'আয়েশা সিদ্দিকা',
        email: 'ayesha@example.com',
        amount: 7500,
        project: 'Orphan Care',
        date: new Date('2025-11-30'),
        status: 'completed'
      },
      {
        transactionId: 'TXN001238',
        donorName: 'আহমেদ হোসেন',
        email: 'ahmed@example.com',
        amount: 2000,
        project: 'Food Distribution',
        date: new Date('2025-11-29'),
        status: 'failed'
      },
      {
        transactionId: 'TXN001239',
        donorName: 'খাদিজা বেগম',
        email: 'khadija@example.com',
        amount: 15000,
        project: 'Masjid Construction',
        date: new Date('2025-11-28'),
        status: 'completed'
      },
      {
        transactionId: 'TXN001240',
        donorName: 'ইব্রাহিম খান',
        email: 'ibrahim@example.com',
        amount: 4500,
        project: 'Education Support',
        date: new Date('2025-11-27'),
        status: 'completed'
      },
      {
        transactionId: 'TXN001241',
        donorName: 'মরিয়ম আক্তার',
        email: 'mariam@example.com',
        amount: 8000,
        project: 'Dawah Program',
        date: new Date('2025-11-30'),
        status: 'pending'
      }
    ];

    this.filteredDonations = [...this.donations];
  }

  calculateStats() {
    this.totalDonations = this.donations.length;
    this.totalAmount = this.donations.reduce((sum, d) => sum + d.amount, 0);
    this.totalDonors = new Set(this.donations.map(d => d.email)).size;
    this.completedDonations = this.donations.filter(d => d.status === 'completed').length;
  }

  filterDonations() {
    let filtered = [...this.donations];

    // Apply status filter
    if (this.filterStatus !== 'all') {
      filtered = filtered.filter(d => d.status === this.filterStatus);
    }

    // Apply search filter
    if (this.searchTerm) {
      const term = this.searchTerm.toLowerCase();
      filtered = filtered.filter(d => 
        d.donorName.toLowerCase().includes(term) ||
        d.email.toLowerCase().includes(term) ||
        d.transactionId.toLowerCase().includes(term) ||
        d.project.toLowerCase().includes(term)
      );
    }

    this.filteredDonations = filtered;
  }

  setFilter(status: string) {
    this.filterStatus = status;
    this.filterDonations();
  }
}
