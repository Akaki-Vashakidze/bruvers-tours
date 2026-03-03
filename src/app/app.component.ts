import { Component } from '@angular/core';
import { HeaderTopComponent } from "./components/header-top/header-top.component";
import { HeaderFloatingComponent } from "./components/header-floating/header-floating.component";
import { MainPageComponent } from "./pages/main-page/main-page.component";
import { RouterModule } from "@angular/router";

@Component({
  selector: 'app-root',
  imports: [HeaderTopComponent, HeaderFloatingComponent, MainPageComponent, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'bruvers-tours';
}
