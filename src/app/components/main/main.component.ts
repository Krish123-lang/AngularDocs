import { Component } from '@angular/core';
import { FirstComponent } from "../first/first.component";

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [FirstComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
  // Input
  parentMessage: string = "Oe! this is from parent hai"
  sendToChild: string = "this is for clid component"

  // Output
  message: string = ''
  receiveMsg($event: string) {
    this.message = $event
  }

  parentMsg: string = ''
  receiveParentMsg($event: string) {
    this.parentMsg = $event
  }
}
