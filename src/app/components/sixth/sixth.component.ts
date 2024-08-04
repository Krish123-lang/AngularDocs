import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-sixth',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './sixth.component.html',
  styleUrl: './sixth.component.css'
})
export class SixthComponent {
  framework: string = ''

  showFramework() {
    alert(this.framework)
  }
}
