import { Component, OnInit } from '@angular/core';
import { ProgressBarModule } from 'primeng/progressbar';
import { PrimeIcons, MenuItem } from 'primeng/api';
import { ButtonModule } from 'primeng/button';


@Component({
  selector: 'app-progress-bar',
  standalone: true,
  imports: [ProgressBarModule,ButtonModule],
  templateUrl: './progress-bar.component.html',
  styleUrl: './progress-bar.component.scss'
})
export class ProgressBarComponent implements OnInit {
  
  items:MenuItem[]=[];

  

  ngOnInit() {
    this.items = [
      {
        label: 'New',
        icon: PrimeIcons.PLUS,
      },
      {
        label: 'Delete',
        icon: PrimeIcons.TRASH
      }
    ];
  }
}
