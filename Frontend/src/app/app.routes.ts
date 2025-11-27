import { Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { BlogComponent } from './pages/blog/blog.component';
import { ContactComponent } from './pages/contact/contact.component';
import { DonateComponent } from './pages/donate/donate.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { GetInvolvedComponent } from './pages/get-involved/get-involved.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { NoticeComponent } from './pages/notice/notice.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'get-involved', component: GetInvolvedComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'donate', component: DonateComponent },
  { path: 'login', component: LoginComponent },
  { path: 'auth/signin', component: LoginComponent },
  { path: 'notice', component: NoticeComponent },
  { path: '**', redirectTo: '' }
];



