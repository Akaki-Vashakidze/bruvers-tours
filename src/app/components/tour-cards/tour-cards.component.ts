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
      title: 'Tusheti National Park',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi utsa.',
      image: '/assets/images/bk1.jpg',
      id: '/id1'
    },
    {
      title: 'Armenia Cycling Routes',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi utsa.',
      image: '/assets/images/climate-action.jpg',
      id: '/id2'
    },
    {
      title: 'Svaneti Mountains',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi utsa.',
      image: '/assets/images/conservation.jpg',
      id: '/id3'
    }
  ];
}