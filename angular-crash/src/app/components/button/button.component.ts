import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  @Input() text: string = "";
  @Input() bgColor: string = "";
  @Output() btnClick = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  /**
   * We want this button to be reusable so we don't want to 
   * add the functionality here. We can use the Output module
   * from @angular/core and create a new EventEmitter which we
   * will call btnClick.
   * 
   * This generalizes the onClick() function so we can define
   * the logic in header.component.ts and swap out any logic
   * for any button we create without changing the button component.
   */
  onClick(): void {
    this.btnClick.emit();
  }

}
