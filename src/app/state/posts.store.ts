import { Injectable } from '@angular/core';
import {ActiveState, EntityState, EntityStore, StoreConfig} from '@datorama/akita';
import { Post } from './post.model';

export interface PostsState extends EntityState<Post>, ActiveState {}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'posts', idKey: 'postID' })
export class PostsStore extends EntityStore<PostsState> {

  constructor() {
    super();
  }

}
