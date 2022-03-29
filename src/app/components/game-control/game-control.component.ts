import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  logs: number[] = [];
  constructor() { }
  startCounter = 0;
  interval: any;
  @Output() intervalFired = new EventEmitter<number>();
  onClickStart() {
    this.interval = setInterval(() => {
      this.intervalFired.emit(this.startCounter + 1);
      this.startCounter++;
      this.logs.push(this.startCounter);
      console.log(this.logs)
    }, 1000);
  }

 

  onClickStop() {
    clearInterval(this.interval)
  }
  ngOnInit(): void {
  }

}
