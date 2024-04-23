import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ChipsModule } from 'primeng/chips';






@Component({
  selector: 'app-chips',
  standalone: true,
  imports: [ChipsModule],
  templateUrl: './chips.component.html',
  styleUrl: './chips.component.scss'
})
export class ChipsComponent {
  values = new FormControl<string[] | null>(null);
  max = 4;
}
