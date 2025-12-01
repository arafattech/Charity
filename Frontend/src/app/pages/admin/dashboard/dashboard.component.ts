import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit {
  isSidebarCollapsed = false;
  adminEmail = '';
  currentPageTitle = 'Dashboard';
  currentPageSubtitle = 'Welcome to your admin panel';

  constructor(private router: Router) {}

  ngOnInit() {
    // Check if user is logged in
    const isLoggedIn = localStorage.getItem('isAdminLoggedIn');
    if (!isLoggedIn) {
      this.router.navigate(['/admin']);
      return;
    }

    this.adminEmail = localStorage.getItem('adminEmail') || 'Admin';

    // Update page title based on route
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        this.updatePageTitle();
      });

    this.updatePageTitle();
  }

  toggleSidebar() {
    this.isSidebarCollapsed = !this.isSidebarCollapsed;
  }

  updatePageTitle() {
    const url = this.router.url;
    if (url.includes('/donations')) {
      this.currentPageTitle = 'Donations';
      this.currentPageSubtitle = 'Manage all donation records';
    } else if (url.includes('/projects')) {
      this.currentPageTitle = 'Projects';
      this.currentPageSubtitle = 'Manage charity projects';
    } else if (url.includes('/users')) {
      this.currentPageTitle = 'Users';
      this.currentPageSubtitle = 'Manage user accounts';
    } else if (url.includes('/settings')) {
      this.currentPageTitle = 'Settings';
      this.currentPageSubtitle = 'Configure system settings';
    } else {
      this.currentPageTitle = 'Dashboard';
      this.currentPageSubtitle = 'Welcome to your admin panel';
    }
  }

  logout() {
    localStorage.removeItem('isAdminLoggedIn');
    localStorage.removeItem('adminEmail');
    this.router.navigate(['/admin']);
  }
}
