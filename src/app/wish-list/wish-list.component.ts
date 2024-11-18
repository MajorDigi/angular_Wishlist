
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common'; // For common directives like ngIf and ngFor

@Component({
  selector: 'wish-list',
  standalone: true,
  imports: [CommonModule], // Add any additional modules you need here
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.css']
})
export class WishListComponent {
  @Input() items: any[] = [];
}
