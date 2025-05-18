import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'] // or .scss if using SCSS
})
export class HomeComponent {
  // Add any component logic here
  constructor() {
    // Initialize the component here
    console.log('Home component initialized');
  }

  
}
