import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [
    MatButtonModule,
  ],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss'
})
export class HomepageComponent {
  public proficienciesFrontend: string[] = [
    'CSS',
    'HTML',
    'Javascript',
    'Typescript',
    'Angular',
    'Tailwind CSS',
    'Bootstrap',
    'SASS',
    'Material Design',
  ]
  public proficienciesBackend: string[] = [
    'Java',
    'Spring Boot',
  ]
  public proficienciesTools: string[] = [
    'Git',
    'Github',
    'Wordpress',
    'DevOps',
    'VS Code',
    'Yarn',
    'NPM',
  ]

}
