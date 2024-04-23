import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';


@Component({
  selector: 'app-deals-list',
  standalone: true,
  imports: [
    DropdownModule,
    FormsModule
  ],
  templateUrl: './deals-list.component.html',
  styleUrl: './deals-list.component.scss'
})
export class DealsListComponent  {
    
  selectedItem: string | undefined;

  
}
