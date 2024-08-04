import { Component } from '@angular/core';

@Component({
  selector: 'app-second',
  standalone: true,
  imports: [],
  templateUrl: './second.component.html',
  styleUrl: './second.component.css'
})
export class SecondComponent {
  city: string = "Biratnagar"
  isServerRunning: boolean = false

  towns: any = ["brt", "ktm", "damak", "san fransisco"]

  operatingSystems = [{ id: 'win', name: 'Windows' }, { id: 'osx', name: 'MacOS' }, { id: 'linux', name: 'Linux' }];

  users = [{ id: 0, name: 'Sarah' }, { id: 1, name: 'Amy' }, { id: 2, name: 'Rachel' }, { id: 3, name: 'Jessica' }, { id: 4, name: 'Poornima' }]

  username: string = "krishna"
  isEditable: boolean = true

  imageUrl: string = 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_640.jpg'
  altName: string = "tree"
}
