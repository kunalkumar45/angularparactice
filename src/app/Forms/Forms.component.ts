import { Component, OnInit } from '@angular/core';
import { JsonPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-Forms',
  standalone: true,
  imports: [FormsModule, JsonPipe],
  templateUrl: './Forms.component.html',
  styleUrls: ['./Forms.component.css']
})
export class FormsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  studentObj: any = {
    firstName: '',
    lastName: '',
    userName: '',
    city: '',
    state: '',
    zipCode: '',
    isAcceptTerms: false
  }

  formValue: any;

  onSubmit() {
    debugger;
    this.formValue = this.studentObj;
  }
  resetForm() {
    this.studentObj = {
      firstName: '',
      lastName: '',
      userName: '',
      city: '',
      state: '',
      zipCode: '',
      isAcceptTerms: false
    }
  }

}
