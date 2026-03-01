import { Component } from "@angular/core";
import { RouterModule } from "@angular/router";

@Component({
  selector: 'app-hero-banner',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './hero-banner.component.html',
  styleUrl: './hero-banner.component.scss'
})
export class HeroBannerComponent {
  headline = "Unleash Your Inner Explorer";
  subHeadline = "Discover breathtaking trails and hidden gems with our expert-guided bike tours.";
  ctaText = "Explore Tours";
}