import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostCreateComponent } from './Posts/post-create/post-create.component';
import { PostDetailComponent } from './Posts/post-detail/post-detail.component';
import { PostListComponent } from './Posts/post-list/post-list.component';

const routes: Routes = [
  { path: '', component: PostListComponent },
  {path: 'create', component: PostCreateComponent},
  // { path: 'edit/:postId', component: PostCreateComponent},
  { path : "detail/:id" , component: PostDetailComponent ,pathMatch: 'full'} 
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
