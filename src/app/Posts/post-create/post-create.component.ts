import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { Post } from '../post.model';
import { PostServiceService } from './../post-service.service';


@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {


  
  constructor(private postservice: PostServiceService) { }

  ngOnInit(): void {
    
  }
  postForm = new FormGroup({
    title: new FormControl(),
    content: new FormControl(),
  });

  onAddPost(){
    
    if(this.postForm.invalid){
      return;
    }
    else{
     
      ;
     
       this.postservice.AddPost( this.postForm.value.title,this.postForm.value.content).subscribe(
         res =>{
           window.alert("post id created " );
           
         }
       )
    }
    // this.postForm.reset();
  }
}
  
