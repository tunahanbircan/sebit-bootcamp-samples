import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title: string = 'AngularCard';
  tunahan: string = 'Tunahan'; // interpolation ile basma
  isUpdate: boolean = false;

  posts = [
    {
      title: 'Camping',
      imageUrl: '/assets/camping.jpg',
      username: 'cbdag',
      content: 'Kampa gençler',
    },
    {
      title: 'Tırmanış',
      imageUrl: 'assets/paragliding.jpg',
      username: 'cbuludag',
      content: 'Bugünde iyi tırmandım',
    },
    {
      title: 'Surf',
      imageUrl: 'assets/surf.jpg',
      username: 'cbdoga',
      content: 'Hadi biraz surf yapalım',
    },
  ];
}
