import { Component } from '@angular/core';
import { HeaderTopComponent } from "./components/header-top/header-top.component";
import { HeaderFloatingComponent } from "./components/header-floating/header-floating.component";
import { HeroBannerComponent } from "./components/hero-banner/hero-banner.component";
import { InfoBannerComponent } from "./components/info-banner/info-banner.component";
import { MiddleInfoComponent } from "./components/middle-info/middle-info.component";
import { TourCardsComponent } from "./components/tour-cards/tour-cards.component";
import { CommunityCtaComponent } from "./components/community-cta/community-cta.component";

@Component({
  selector: 'app-root',
  imports: [HeaderTopComponent, HeaderFloatingComponent, HeroBannerComponent, InfoBannerComponent, MiddleInfoComponent, TourCardsComponent, CommunityCtaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'bruvers-tours';
}
