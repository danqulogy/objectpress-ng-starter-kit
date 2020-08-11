import {Component, Inject, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {map, tap} from "rxjs/operators";
import {PostsService} from "../../state/posts.service";
import {PostsQuery} from "../../state/posts.query";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  article$ = this.postsQuery.selectActive()

  routeParam$ = this.route.params.pipe(map(data => data.id)).pipe(tap(()=> this.scrollTop()))
  constructor(private route: ActivatedRoute,
              private postsService: PostsService,
              private postsQuery: PostsQuery) { }

  ngOnInit(): void {
    this.routeParam$.subscribe(postId => this.fetchArticle(postId))
  }

  private fetchArticle(postId: any) {
     this.postsService.getPostById(postId).subscribe()
  }

  scrollTop(){
    window.scrollTo(0,0)
  }
}
