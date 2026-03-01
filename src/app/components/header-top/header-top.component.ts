import { CommonModule } from "@angular/common";
import { Component, HostListener } from "@angular/core";
import { RouterModule } from "@angular/router";

@Component({
  selector: 'app-header-top',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header-top.component.html',
  styleUrl: './header-top.component.scss'
})
export class HeaderTopComponent {
  isSticky: boolean = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isSticky = window.pageYOffset > 100;
  }

  navItems = [
    { 
      name: 'Destinations', 
      dropdown: [
        { name: 'Mountain Trails', link: '/mountains' },
        { name: 'Coastal Routes', link: '/coastal' },
        { name: 'City Bike Tours', link: '/city' },
        { name: 'Custom Tours', link: '/custom' },
      ]
    },
    { name: 'Bike Rental', link: '/rental' },
    { name: 'Gear Guide', link: '/gear' },
    { name: 'Blog', link: '/blog' },
    { name: 'Contact', link: '/contact' },
  ];
}