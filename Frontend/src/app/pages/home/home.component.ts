import { Component } from '@angular/core';
import { HeroComponent } from '../../components/hero/hero.component';
import { ProjectsComponent } from '../../components/projects/projects.component';
import { StatsComponent } from '../../components/stats/stats.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeroComponent, StatsComponent, ProjectsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}

