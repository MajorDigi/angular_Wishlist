import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WishItem } from '../shared/modules/wishItem';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { FormsModule } from '@angular/forms'; // Import FormsModule

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
  imports: [RouterOutlet, CommonModule, FormsModule], // Add CommonModule and RouterOutlet
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'], // Corrected to styleUrls

})

export class AppComponent {
  items : WishItem[] = [
      // new WishItem('Learn Angular'),
      // new WishItem('Get Coffee', true),
      // new WishItem('Find grass that cuts itself')
  ];
  //---------------------------------------------------------------------
  // items : any[]=[]

  //-----------------------------------------------------------------------------
    // items : WishItem[] = [];

    newWishText = '';
  
  title = 'angular_Wishlist';

  addNewWish() {
    this.items.push(new WishItem(this.newWishText));
    this.newWishText = '';
    //todo: add wish to items array
    //clear the textbox
  }

  toggleItem(item : WishItem) {
    item.isComplete = !item.isComplete;
     console.log(item);
  }
}
