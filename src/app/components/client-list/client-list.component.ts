import { Component } from '@angular/core';
import { ChipsModule } from 'primeng/chips';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-client-list',
  standalone: true,
  imports: [
    ChipsModule,
    ReactiveFormsModule

  ],
  templateUrl: './client-list.component.html',
  styleUrl: './client-list.component.scss'
})
export class ClientListComponent {
  values = new FormControl<string[] | null>(null);
  max = 3;
  

}
