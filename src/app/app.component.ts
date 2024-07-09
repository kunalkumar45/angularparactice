import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PostComponent } from './post/post.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FormsComponent } from './Forms/Forms.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { ApiComponent } from './api/api.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PostComponent, CommonModule, FormsModule, FormsComponent, ReactiveFormComponent, ApiComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  colorSelected: string = 'black';


  firstName = signal<string>('Kunal')
  lastName = signal<string>('Kumar')
  rollNo = signal<number>(22)

  constructor() {

  }

  fullName = computed(() =>
    this.fName() + " " + this.mName() + " " + this.lName()
  )

  fName = signal('')
  mName = signal('')
  lName = signal('')



  changeName() {
    this.firstName.set('Ravi  ')
  }

  changeFname(value: string) {
    this.fName.set(value)
  }
  changeMname(value: string) {
    this.mName.set(value)
  }
  changeLname(value: string) {
    this.lName.set(value)
  }

}
