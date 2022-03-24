import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-warning',
  templateUrl: './warning.component.html',
  styleUrls: ['./warning.component.css']
})
export class WarningComponent implements OnInit {
  warningSign: string = "Warning"
  constructor() { }
  toggle: boolean = true;
  toggleWarning(){
    this.toggle = !this.toggle;
    this.warningSign = this.toggle ? 'Warning' : 'No Warning';
  }
  ngOnInit(): void {
  }

}
