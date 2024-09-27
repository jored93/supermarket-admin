import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css'],
  standalone: true
})
export class TitleComponent implements OnInit {
  @Input() title!: string;
  @Input() btnTitle!: string;
  constructor() { }

  ngOnInit() {
  }

}
