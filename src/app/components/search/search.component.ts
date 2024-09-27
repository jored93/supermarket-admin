import { Component, Input, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  standalone: true,
  imports: [MatCardModule, MatFormFieldModule, MatInputModule],
})
export class SearchComponent implements OnInit {
  @Input() title!: string;
  @Input() btnTitle!: string;
  @Input() placeholder!: string;

  constructor() { }

  ngOnInit() {
  }

}
