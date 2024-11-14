import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WishItem } from '../shared/modules/wishItem';
import { CommonModule } from '@angular/common'; // Import CommonModule

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule], //Add CommonModule
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  // items = [
  //   new WishItem('Learn Angular'),
  //   new WishItem('Get Coffee', true),
  //   new WishItem('Find grass that cuts itself')
  // ]
  // items : any[]=[

  // ]
    items : WishItem[] = [

    ];
  
  title = 'angular_Wishlist';
}
