import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-seventh',
  standalone: true,
  imports: [ReactiveFormsModule,],
  templateUrl: './seventh.component.html',
  styleUrl: './seventh.component.css'
})
export class SeventhComponent {
  profileForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email])
  })

  handleFormSubmit() {
    alert(this.profileForm.value.name + ' | ' + this.profileForm.value.email)
  }
}
