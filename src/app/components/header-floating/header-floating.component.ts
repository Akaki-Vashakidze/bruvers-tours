import { CommonModule } from "@angular/common";
import { Component, HostListener } from "@angular/core";
import { RouterModule } from "@angular/router";

@Component({
  selector: 'app-header-floating',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header-floating.component.html',
  styleUrl: './header-floating.component.scss'
})
export class HeaderFloatingComponent {
  isScrolled: boolean = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.pageYOffset > 100;
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