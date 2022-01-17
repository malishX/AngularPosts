import { Component, OnDestroy, OnInit } from '@angular/core';
import { PostServiceService } from './../post-service.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit{

  posts: any;
  
  constructor(public postsService: PostServiceService){}

  ngOnInit(){
     this.postsService.getPosts().subscribe( data =>{      
       this.posts= data;
     });
  }
  deletepost(postId: any){
    this.postsService.deletePost(postId);
    window.alert("Post is Deleted");
     
  }

 

}
