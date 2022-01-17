import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostServiceService } from './../post-service.service';
import {Router} from '@angular/router'; 

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {

  postId : any;
  post : any;
  comments: any;
  constructor(private postService : PostServiceService,
    private activatedRoute: ActivatedRoute,
    private router: Router)
    { }
  
  ngOnInit(): void {
    this.getid();    
    this.getpost();
    this.getpostDetail();
  }

  getpost(){
    this.postService.getPost(this.postId).subscribe( post =>{
      this.post=post;
      debugger
    })   
  }
  
  getpostDetail(){
    this.postService.getPostDetail(this.postId).subscribe(PostDetails => {
      this.comments= PostDetails;
    })
  }
  getid(){
    this.activatedRoute.params.subscribe( params => {
      this.postId=(params['id']);
      
    })
  }
  deletepost(){
    this.postService.deletePost(this.postId);
    window.alert("Post is Deleted");
     this,this.router.navigate(['/']);
  }
}
