
// import { Component, Input } from '@angular/core';
// import { CommonModule } from '@angular/common'; // For common directives like ngIf and ngFor

// @Component({
//   selector: 'wish-list',
//   standalone: true,
//   imports: [CommonModule], // Add any additional modules you need here
//   templateUrl: './wish-list.component.html',
//   styleUrls: ['./wish-list.component.css']
// })
// export class WishListComponent {
//   @Input() items: any[] = [];
// }
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common'; // For common directives like ngIf and ngFor
import { WishItem } from '../../shared/modules/wishItem';
@Component({
  selector: 'wish-list',
  standalone: true,
  imports: [CommonModule], // Add any additional modules you need here
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.css']
})
export class WishListComponent {
  @Input() wishes : WishItem[] = []; // Input for the array of items

  // Computed property to get visible items
  // get visibleItems() {
    // return this.items; // Modify this logic as needed to filter or process the items
  // }

  // Method to handle item toggling
  toggleItem(item: any): void {
    item.isComplete = !item.isComplete; // Toggle the `isComplete` property of the item
  }
}
