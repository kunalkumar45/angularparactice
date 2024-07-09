import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { PostComponent } from './post/post.component';

export const routes: Routes = [
    {path:'post', component:PostComponent, title:'Post'}
];
