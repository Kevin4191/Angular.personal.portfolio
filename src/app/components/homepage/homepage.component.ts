import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
    selector: 'app-homepage',
    imports: [
        MatButtonModule,
    ],
    templateUrl: './homepage.component.html',
    styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent {
  public projects: { name: string, tags: string[], image: string}[] = [
    { name: 'Project 1', tags: ['tag1', 'tag2'], image: '/placeholder_carousel_card.jpg' },
    { name: 'Project 2', tags: ['tag1', 'tag3'], image: '/placeholder_carousel_card.jpg' },
    { name: 'Project 3', tags: ['tag2', 'tag4'], image: '/placeholder_carousel_card.jpg' },
    { name: 'Project 4', tags: ['tag3', 'tag4'], image: '/placeholder_carousel_card.jpg' },
    { name: 'Project 5', tags: ['tag1', 'tag2'], image: '/placeholder_carousel_card.jpg' },
    { name: 'Project 6', tags: ['tag1', 'tag3'], image: '/placeholder_carousel_card.jpg' },
    { name: 'Project 7', tags: ['tag2', 'tag4'], image: '/placeholder_carousel_card.jpg' },
    { name: 'Project 8', tags: ['tag3', 'tag4'], image: '/placeholder_carousel_card.jpg' },
  ]

}