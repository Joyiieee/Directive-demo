import { Component } from '@angular/core';
import { User } from '../user';

import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-test',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './test.component.html',
  styleUrl: './test.component.css'
})
export class TestComponent {
  isLogIn: boolean = false;
  isLogOut: boolean = true;

  list = [1,2,3,4,5];
  loginName= "Clarence";

  users:User[] = [
    {"userId":1, "userName":"Clarence Tolentino", "type":"student"},
    {"userId":2, "userName":"Mica Garcia", "type":"student"},
    {"userId":3, "userName":"Joy Dalusung", "type":"employee"},
    {"userId":4, "userName":"Claire Gomez", "type":"employee"},
    {"userId":5, "userName":"Crystal Trinidad", "type":"employee"}
  ];
}

