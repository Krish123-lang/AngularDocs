import { Component } from '@angular/core';
import { FirstComponent } from "../first/first.component";
import { SecondComponent } from "../second/second.component";
import { ThirdComponent } from "../third/third.component";
import { FourthComponent } from "../fourth/fourth.component";
import { FifthComponent } from '../fifth/fifth.component';
import { SixthComponent } from "../sixth/sixth.component";
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [FirstComponent, SecondComponent, ThirdComponent, FourthComponent, FifthComponent, SixthComponent, RouterLink, RouterOutlet],
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
