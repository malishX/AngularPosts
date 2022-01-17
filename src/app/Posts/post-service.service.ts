import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostServiceService {

  configUrl="https://jsonplaceholder.typicode.com/posts";

  constructor(private http: HttpClient) { }

  getPosts() {
    return this.http.get(this.configUrl);
  }
  getPostDetail(postId: number){
    return this.http.get(this.configUrl +"/" + postId +"/comments");
  }
  getPost(postId: number){
    return this.http.get(this.configUrl +"/" + postId);
  }
  deletePost(postId: number){
    return this.http.delete(this.configUrl +"/" + postId);
  }
  AddPost(title:any, body: any){
    return this.http.post(this.configUrl,{title,body});
  }
}
