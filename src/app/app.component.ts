import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @Input() logs: number[] = []
  onIntervalFired(firedNumber: number) {
    console.log(firedNumber)
    this.logs.push(firedNumber)
  }
  onOddNumber(firedNumber: number){
    return firedNumber % 2 !== 0 && console.log("odd!")
  }
}
