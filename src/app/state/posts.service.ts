import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ID } from '@datorama/akita';
import { tap } from 'rxjs/operators';
import { Post } from './post.model';
import { PostsStore } from './posts.store';
import {environment} from "../../environments/environment";

@Injectable({ providedIn: 'root' })
export class PostsService {

  constructor(private postsStore: PostsStore, private http: HttpClient) {
  }


  getPosts(limit:number = null) {
    return this.http.post<Post[]>('https://api.objectpress.co/content/get-all', {
      limit:limit,
      app: environment.appId,
      client: environment.clientId
    }).pipe(tap(entities => {
      this.postsStore.set(entities);
    }));
  }


  getPostById(postId: string) {
    return this.http.post<Post[]>('https://api.objectpress.co/content/get-all', {
      limit:null,
      app: environment.appId,
      client: environment.clientId
    }).pipe(tap(entities => {
      this.postsStore.set(entities);
      this.postsStore.setActive(postId)
    }));
  }

  // getPostById(postId: string) {
  //   return this.http.post<Post[]>('https://api.objectpress.co/content/search', {
  //     post: postId,
  //     app: environment.appId
  //   }).pipe(tap(entities => {
  //     this.postsStore.set(entities);
  //     this.postsStore.setActive(entities[0].postID)
  //   }));
  // }
}
