import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-first',
  standalone: true,
  imports: [],
  templateUrl: './first.component.html',
  styleUrl: './first.component.css'
})
export class FirstComponent {
  @Input() message: string = ''
  @Input() sendChild: string = ''

  @Output() messageEvent = new EventEmitter<string>();
  sendMsg() {
    this.messageEvent.emit("Hello this is from child")
  }

  @Output() parentEvent = new EventEmitter<string>()
  sendParent() {
    this.parentEvent.emit("This is from child hai")
  }
}
