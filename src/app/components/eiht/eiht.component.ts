import { Component } from '@angular/core';
import { StudentService } from '../../service/student.service';

@Component({
  selector: 'app-eiht',
  standalone: true,
  imports: [],
  templateUrl: './eiht.component.html',
  styleUrl: './eiht.component.css',

  // Service injecting
  // providers: [StudentService]
  
})
export class EihtComponent {
  public students: any;
  constructor(private std: StudentService) {
    this.students = std.getStudent()
  }
}
