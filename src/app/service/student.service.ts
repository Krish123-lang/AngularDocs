import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor() { }

  getStudent() {
    return [
      { name: 'Krishna', age: 23, standard: 12 },
      { name: 'Bob', age: 24, standard: 10 },
      { name: 'Smith', age: 26, standard: 11 },
    ]
  }
}
