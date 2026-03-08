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
  isMobileMenuOpen: boolean = false;

@HostListener('window:scroll', [])
onWindowScroll() {
  // 1. Existing logic to hide the floating bar
  this.isScrolled = window.pageYOffset > 100;

  // 2. New logic: If the menu is open and the user scrolls, close it
  if (this.isMobileMenuOpen) {
    this.closeMobileMenu();
  }
}

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

  toggleMobileMenu(event: Event) {
    event.stopPropagation();
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  toggleSubmenu(item: any, event: Event) {
    event.stopPropagation();
    item.isSubmenuOpen = !item.isSubmenuOpen;
  }

  closeMobileMenu() {
    this.isMobileMenuOpen = false;
    this.navItems.forEach(i => i.isSubmenuOpen = false);
  }
}