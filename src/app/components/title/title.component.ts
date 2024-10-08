import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css'],
  standalone: true
})
export class TitleComponent implements OnInit {
  @Input() title!: string;
  @Input() btnTitle!: string;
  @Output() btnAction = new EventEmitter<void>();
  constructor() { }

  ngOnInit() {
  }

  onButtonClick(): void {
    this.btnAction.emit();
  }

}
