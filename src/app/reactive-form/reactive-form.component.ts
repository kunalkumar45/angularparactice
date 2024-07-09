import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.css'
})
export class ReactiveFormComponent {

  stuObj = new FormGroup({
    fName: new FormControl('', [Validators.required, Validators.minLength(3)]),
    lName: new FormControl('', [Validators.required, Validators.minLength(3)]),
    userName: new FormControl('', [Validators.required, Validators.email]),
    city: new FormControl('', [Validators.required]),
    state: new FormControl('', [Validators.required]),
    zipCode: new FormControl(''),
    isAcceptTerms: new FormControl('', [Validators.required]),
  })
  formValue: any;
  onSubmit() {
    this.formValue = this.stuObj.value;
  }


}
