import { Component, OnInit, Input } from '@angular/core';
import { Card } from '../model/card';

// İKİNCİ YÖNTEM

// interface Card {
//   title: string;
//   imageUrl: string;
//   username: string;
//   content: string;
// }

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  //           İLKK YÖNTEM
  // @Input() titleChild: string = '';
  // @Input() imageUrlChild: string = '';
  // @Input() usernameChild: string = '';
  // @Input() contentChild: string = '';

  //             İKİNCİ YÖNTEM
  // @Input() post: Card = {
  //   title: '',
  //   imageUrl: '',
  //   username: '',
  //   content: '',
  // };

  @Input() post: any = {};
  constructor() {}

  ngOnInit(): void {}
}
