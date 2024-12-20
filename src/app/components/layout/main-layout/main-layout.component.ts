import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

@Component({
    selector: 'app-main-layout',
    imports: [
        RouterOutlet,
        RouterLink,
        MatIconModule
    ],
    templateUrl: './main-layout.component.html',
    styleUrl: './main-layout.component.scss'
})
export class MainLayoutComponent {
  public currentYear: number = new Date().getFullYear();
  public projects: string[] = [
    'Project 1',
    'Project 2',
    'Project 3',
    'Project 4'
  ]

}
