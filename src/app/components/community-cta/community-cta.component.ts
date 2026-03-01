import { Component } from "@angular/core";
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'app-community-cta',
  standalone: true,
  imports: [RouterModule, FormsModule],
  templateUrl: './community-cta.component.html',
  styleUrl: './community-cta.component.scss'
})
export class CommunityCtaComponent {
  email: string = '';
  
  backgroundImage = "assets/images/whale-tail.jpg";

  onSubmit() {
    console.log('Email submitted:', this.email);
  }
}