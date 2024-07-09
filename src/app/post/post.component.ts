import { HttpClient    } from '@angular/common/http';
import { Component, inject, signal, computed, effect } from '@angular/core';
// import { GetService } from '../get.service';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [],
  templateUrl: './post.component.html',
  styleUrl: './post.component.css',
})
export class PostComponent {
  
  counter = signal(10);
  constructor() {
    this.counter.set(99)
    console.log(this.counter());
  

    
  }
  
}
