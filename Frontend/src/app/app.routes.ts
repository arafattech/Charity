import { Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { AdminLoginComponent } from './pages/admin/admin-login/admin-login.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { DonationListComponent } from './pages/admin/donation-list/donation-list.component';
import { OverviewComponent } from './pages/admin/overview/overview.component';
import { ProjectsComponent } from './pages/admin/projects/projects.component';
import { SettingsComponent } from './pages/admin/settings/settings.component';
import { UsersComponent } from './pages/admin/users/users.component';
import { BlogComponent } from './pages/blog/blog.component';
import { ContactComponent } from './pages/contact/contact.component';
import { DonateComponent } from './pages/donate/donate.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { GetInvolvedComponent } from './pages/get-involved/get-involved.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { NoticeComponent } from './pages/notice/notice.component';
import { ProjectsPageComponent } from './pages/projects/projects.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'projects', component: ProjectsPageComponent },
  { path: 'get-involved', component: GetInvolvedComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'donate', component: DonateComponent },
  { path: 'login', component: LoginComponent },
  { path: 'auth/signin', component: LoginComponent },
  { path: 'notice', component: NoticeComponent },
  
  // Admin Routes
  { path: 'admin', component: AdminLoginComponent },
  { 
    path: 'admin/dashboard', 
    component: DashboardComponent,
    children: [
      { path: '', component: OverviewComponent },
      { path: 'donations', component: DonationListComponent },
      { path: 'projects', component: ProjectsComponent },
      { path: 'users', component: UsersComponent },
      { path: 'settings', component: SettingsComponent }
    ]
  },
  
  { path: '**', redirectTo: '' }
];



