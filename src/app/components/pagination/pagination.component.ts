import {Component, Input, OnInit} from '@angular/core';
import {PostsService} from "../../state/posts.service";
import {PostsQuery} from "../../state/posts.query";
import {map, tap} from 'rxjs/operators';
import {Post} from "../../state/post.model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {
  postIds: string[]
  posts$ = this.postsQuery.selectAll()
    .pipe(
      map(data => data.sort((a,b) => (new Date(a.createDate).getTime()) - (new Date(a.createDate).getTime()))),
      map(data => data.map(d => d.postID)),
      tap(data => this.postIds = data)
    )
  @Input() currentPostID: string


  constructor(private postsService: PostsService,
              private postsQuery: PostsQuery,
              private router: Router) { }

  ngOnInit(): void {
    this.postsService.getPosts().subscribe()
    this.posts$.subscribe()
  }

  previousArticle() {
   if(this.postIds[this.postIds.indexOf(this.currentPostID)+1 ]){
     return this.router.navigateByUrl('/post/'+this.postIds[this.postIds.indexOf(this.currentPostID)+1 ])
   }
  }
}
