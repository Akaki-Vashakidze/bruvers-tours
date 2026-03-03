import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BookingDialogComponent } from '../../components/booking-dialog/booking-dialog.component';

@Component({
  selector: 'app-tour-details',
  standalone: true,
  // ADD BookingDialogComponent to imports
  imports: [CommonModule, RouterModule, BookingDialogComponent], 
  templateUrl: './tour-details.component.html',
  styleUrl: './tour-details.component.scss'
})
export class TourDetailsComponent {
  // Flag to control the custom modal visibility
  isModalOpen = false;

  // Hero Data
  heroHeadline = "Coastal Route Adventure";
  heroSubHeadline = "A 5-day journey along the stunning Mediterranean coastline.";
  backgroundImage = "assets/images/coastal-bike.jpg"; 

  // Tour Data
  tourTitle = "Mediterranean Escape";
  tourDescription = "Experience the perfect blend of cycling and relaxation. This tour takes you through charming seaside villages, historical sites, and breathtaking coastal roads. Suitable for intermediate cyclists looking for scenic views and moderate physical challenge.";
  
  details = [
    { label: 'Duration', value: '5 Days / 4 Nights' },
    { label: 'Distance', value: '250 km Total' },
    { label: 'Difficulty', value: 'Intermediate' },
    { label: 'Group Size', value: 'Max 12 People' },
  ];

  // Method to handle the submitted data from the modal
  handleBookingSubmission(formData: any) {
    console.log('Booking Data Received:', formData);
    // Here you would typically call a service to save the data
    this.isModalOpen = false;
    alert('Thank you! Your booking request has been sent.');
  }
}