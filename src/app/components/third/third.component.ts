import { Component } from '@angular/core';

@Component({
  selector: 'app-third',
  standalone: true,
  imports: [],
  templateUrl: './third.component.html',
  styleUrl: './third.component.css'
})
export class ThirdComponent {
  msg: string = ''
  greet(name: string) {
    this.msg = `Hello, ${name}`
  }
}
