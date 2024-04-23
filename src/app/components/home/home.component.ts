import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { ClientListComponent } from '../client-list/client-list.component';
import { DealsListComponent } from '../deals-list/deals-list.component';
import { ClientDetailsComponent } from '../client-details/client-details.component';
import { ProgressBarComponent } from '../progress-bar/progress-bar.component';
import { DealDetailsComponent } from '../deal-details/deal-details.component';
import { ChipsComponent } from '../chips/chips.component';
import { ProductsComponent } from '../products/products.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeaderComponent,
    FooterComponent,
    ClientListComponent,
    DealsListComponent,
    ClientDetailsComponent,
    ProgressBarComponent,
    DealDetailsComponent,
    ChipsComponent,
    ProductsComponent,

  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
