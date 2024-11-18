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
  
    listFilter : String = '0';

    newWishText = '';
  
    title = 'angular_Wishlist';

    visibleItems : WishItem[] = this.items;

  addNewWish() {
    this.items.push(new WishItem(this.newWishText));
    this.newWishText = '';
    //todo: add wish to items array
    //clear the textbox
}

  filterChanged(value: any) {
    if (value === '0') { 
      this.visibleItems = this.items;
    } else if (value === '1') {
      this.visibleItems = this.items.filter(item => !item.isComplete);
    } else {
      this.visibleItems = this.items.filter(item => item.isComplete);
    }
  }


  toggleItem(item : WishItem) {
    item.isComplete = !item.isComplete;
     console.log(item);
  }
}
