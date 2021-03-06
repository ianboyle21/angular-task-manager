import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-warning',
  templateUrl: './warning.component.html',
  styleUrls: ['./warning.component.css']
})
export class WarningComponent implements OnInit {
  warningSign: string = "ButtonText"
  displayButton = "Display Details?"
  displayed = false;
  inputUserName = ""
  userName: string = ""
  counter = 0;
  emptyString = false;
  toggleUserName = false;
  constructor() { }
  toggle: boolean = true;
  toggleWarning(){
    this.toggle = !this.toggle;
    this.warningSign = this.toggle ? 'Green Button Text' : 'Red Button Text';
  }
  addUserName() {
    if (this.userName === ''){
      this.toggleUserName = false;
    }
    this.toggleUserName = this.userName === '' ? false : true;
    this.userName = this.toggleUserName ? this.inputUserName : ''
    this.inputUserName = ''
    console.log(this.userName, this.inputUserName, this.toggleUserName)
  }

  onEnterUserName(event: Event) {
    this.userName = this.userName.length === 0 ? '' : (<HTMLInputElement>event.target).value
  }
  onEnterInputText(event: Event) {
    console.log((<HTMLInputElement>event.target).value)
    this.warningSign = (<HTMLInputElement>event.target).value
  }

  toggleDisplay() {
    this.counter += 1;
    this.displayed = !this.displayed;
    this.displayButton = this.displayed ? "Hide Details?" : "Display Details?"
  }
  ngOnInit(): void {
  }

}
