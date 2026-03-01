import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-tour-cards',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './tour-cards.component.html',
  styleUrl: './tour-cards.component.scss'
})
export class TourCardsComponent {
  tourCards = [
    {
      title: 'Plastic Pollution',
      description: 'Plastic pollution harms ocean wildlife and threatens the life-supporting functions of healthy seas. Oceanic Society is working to reduce ocean plastic pollution worldwide.',
      image: '/assets/images/bk1.jpg',
      link: '/plastic-pollution'
    },
    {
      title: 'Climate Change',
      description: 'Climate change is causing warming oceans, sea level rise, and ocean acidification, leading to ecosystem changes, coral bleaching, and other significant impacts.',
      image: '/assets/images/climate-action.jpg',
      link: '/climate-change'
    },
    {
      title: 'Conservation Travel',
      description: 'Through Oceanic Society\'s Expedition Impact Program, your journey supports global ocean conservation, coral restoration, and efforts to offset plastic pollution.',
      image: '/assets/images/conservation.jpg',
      link: '/conservation-travel'
    }
  ];
}