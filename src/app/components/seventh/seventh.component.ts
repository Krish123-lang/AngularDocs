import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-seventh',
  standalone: true,
  imports: [ReactiveFormsModule,],
  templateUrl: './seventh.component.html',
  styleUrl: './seventh.component.css'
})
export class SeventhComponent {
  profileForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl('')
  })

  handleFormSubmit() {
    alert(this.profileForm.value.name + ' | ' + this.profileForm.value.email)
  }
}
