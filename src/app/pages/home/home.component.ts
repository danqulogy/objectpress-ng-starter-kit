import { Component, OnInit } from '@angular/core';
import {PostsService} from "../../state/posts.service";
import {PostsQuery} from "../../state/posts.query";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  posts$ = this.postsQuery.selectAll()

  constructor(private postsService: PostsService,
              private postsQuery: PostsQuery) { }

  ngOnInit(): void {
    this.postsService.getPosts().subscribe()
  }

}
