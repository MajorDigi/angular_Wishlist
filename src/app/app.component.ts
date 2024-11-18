import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WishItem } from '../shared/modules/wishItem';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { WishListComponent } from './wish-list/wish-list.component'; // Adjust path as necessary

const filters = [
  (item : WishItem) => item, //For index zero use truth
  (item : WishItem) => !item.isComplete,
  (item : WishItem) => item.isComplete
]

// @Component({
//   selector: 'app-root',
//   standalone: true,
//   imports: [RouterOutlet, CommonModule], //Add CommonModule
//   templateUrl: './app.component.html',
//   standalone: true, // This makes AppComponent standalone
//   styleUrl: './app.component.css'
// })
@Component({
  selector: 'app-root',
  standalone: true, // This makes AppComponent standalone
  imports: [RouterOutlet, CommonModule, FormsModule,WishListComponent], // Add CommonModule and RouterOutlet
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'], // Corrected to styleUrls

})
  //---------------------------------------------------------------------
  // items : any[]=[]

  //-----------------------------------------------------------------------------
    // items : WishItem[] = [];
export class AppComponent {
  items : WishItem[] = [
      new WishItem('Learn Angular'),
      new WishItem('Get Coffee', true),
      new WishItem('Find grass that cuts itself')
  ];
  
    listFilter : any = '0';

    newWishText = '';
  
    title = 'angular_Wishlist';

    get visibleItems() : WishItem[] {

      // let value = this.listFilter;
      // if (value === '0') { 
      //   return this.items;
      // } else if (value === '1') {
      //   return this.items.filter(item => !item.isComplete);
      // } else {
      //   return this.items.filter(item => item.isComplete);
      // }
      return this.items.filter(filters[this.listFilter]);
    
    };

  addNewWish() {
     //todo: add wish to items array
    this.items.push(new WishItem(this.newWishText));
    //clear the textbox
    this.newWishText = ''; 
}
  // filterChanged() {

  // }

  toggleItem(item : WishItem) {
    item.isComplete = !item.isComplete;
     console.log(item);
  }
}
