import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-warning',
  templateUrl: './warning.component.html',
  styleUrls: ['./warning.component.css']
})
export class WarningComponent implements OnInit {
  warningSign: string = "ButtonText"
  constructor() { }
  toggle: boolean = true;
  toggleWarning(){
    this.toggle = !this.toggle;
    this.warningSign = this.toggle ? 'Green Button Text' : 'Red Button Text';
  }
  onEnterInputText(event: Event) {
    console.log((<HTMLInputElement>event.target).value)
    this.warningSign = (<HTMLInputElement>event.target).value
  }
  ngOnInit(): void {
  }

}
