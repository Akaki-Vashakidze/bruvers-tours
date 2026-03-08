import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header-top',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header-top.component.html',
  styleUrl: './header-top.component.scss'
})
export class HeaderTopComponent {
  isSticky = false;
  isMobileMenuOpen = false;

  navItems: any[] = [
    { 
      name: 'Destinations', 
      isSubmenuOpen: false,
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

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isSticky = window.pageYOffset > 50;
  }

  toggleMobileMenu(event: Event) {
    event.stopPropagation();
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  toggleSubmenu(item: any, event: Event) {
    event.stopPropagation();
    // Closes other submenus when one is opened
    this.navItems.forEach(i => {
      if (i !== item) i.isSubmenuOpen = false;
    });
    item.isSubmenuOpen = !item.isSubmenuOpen;
  }

  closeMobileMenu() {
    this.isMobileMenuOpen = false;
    this.navItems.forEach(i => i.isSubmenuOpen = false);
  }
}