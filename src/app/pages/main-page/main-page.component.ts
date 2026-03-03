import { Component } from '@angular/core';
import { CommunityCtaComponent } from '../../components/community-cta/community-cta.component';
import { HeroBannerComponent } from '../../components/hero-banner/hero-banner.component';
import { InfoBannerComponent } from '../../components/info-banner/info-banner.component';
import { MiddleInfoComponent } from '../../components/middle-info/middle-info.component';
import { TourCardsComponent } from '../../components/tour-cards/tour-cards.component';

@Component({
  selector: 'app-main-page',
  imports: [HeroBannerComponent, InfoBannerComponent, MiddleInfoComponent, TourCardsComponent, CommunityCtaComponent],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss'
})
export class MainPageComponent {

}
