import { Component } from "@angular/core";
import { RouterModule } from "@angular/router";

@Component({
  selector: 'app-info-banner',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './info-banner.component.html',
  styleUrl: './info-banner.component.scss'
})
export class InfoBannerComponent {
  title = "Expert Guided Tours";
  description = "Navigate the world's most scenic routes with our experienced local guides. From mountain peaks to coastal highways, we ensure a safe and unforgettable cycling adventure.";
  buttonText = "View Routes";
  buttonLink = "/destinations";
}